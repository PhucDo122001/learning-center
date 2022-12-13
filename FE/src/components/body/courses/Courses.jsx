import "./Courses.scss";
import FromCreateCourses from "./form-create/CreateCourses";
import { PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
function Courses() {
  const [addCourse, setAddCourse] = useState(false);
  const [listCourses, setListCourses] = useState([]);
  const [coursesNumber, setCourseNumber] = useState(8);
  const [isAdmin, setIsAdmin] = useState(false);
  const IdStored = localStorage.getItem("userId");
useEffect(() => {
  fetch(`http://localhost:3002/api/getOneUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({_id: IdStored}),
  })
    .then(res => res.json())
    .then(res => {
      if(res.role === 'Admin') {
        setIsAdmin(true);
      }
      else {
        setIsAdmin(false);
      }
    })
  }, []);


  useEffect(() => {
    fetch(`http://localhost:3002/api/get`)
      .then((res) => res.json())
      .then((res) => {
        
        setListCourses(res.reverse());
      });
  }, []);

  const handleViewCourse = (valueId) => {
    const checkLocal = localStorage.getItem('courseId',valueId)
    if(checkLocal) 
    { 
      localStorage.removeItem('courseId')
    }
    localStorage.setItem('courseId', valueId)
    console.log(valueId);
  }


  const handdleDelete = (id) => {
    fetch(`http://localhost:3002/api/deleteCourse/` + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          alert(res.message + " deleted");
          const newlist = listCourses.filter((item) => item._id !== id);
          setListCourses(newlist);
        } else alert(res.message);
      });
  }
  return (
    <div className="courses">
      <div className="courses__header">
        <div className="courses__header--box">
          {isAdmin ? <p
            className="courses__header--box-text"
            onClick={() => setAddCourse(!addCourse)}
          >
            Thêm khóa học <PlusOutlined />
          </p> : <></>}
          
        </div>
        <div className="courses__header--from">
          {addCourse ? (
            <>
              <FromCreateCourses /> <div className="courses__header--box"></div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ul className="courses__list">
        {listCourses.map((course, index) => {
          if (index < coursesNumber ) {
            return (
              <li className="courses__list-item" key={course._id}>
                <h2 className="courses__list-item--title">
                {course.code} - {course.name}
                </h2>
                <p className="courses__list-item--lecture">
                  Lecturer: {course.lecture}
                </p>
                <p className="courses__list-item--date">
                  Date start: {course.dateStart}
                </p>
                <p className="courses__list-item--student">Student: {course.currentStudent && course.currentStudent.length !== 0 ? course.currentStudent.length : '0' } / {course.maxStudent}</p>
                <div className="btn-box">
                  <Link className="btn" onClick={() => handleViewCourse(course._id)}  to="/course/detailcourse">Xem khóa học</Link>
                  {isAdmin?<button className="btn btn-delete" onClick={()=> handdleDelete(course._id)}>Delete</button> : <></>}
                  
                </div>
              </li>
            );
          }
        })}
      </ul>
      <div className="courses__more">
        {coursesNumber >8 ? <button className="courses__more--btn" onClick={() => setCourseNumber(coursesNumber - 4)}> Ẩn bớt</button> : <></>}
        {listCourses.length  > 8 ? <button className="courses__more--btn" onClick={() => setCourseNumber(coursesNumber + 4)}>Xem thêm</button> : <></>}
        
      </div>
    </div>
  );
}

export default Courses;
