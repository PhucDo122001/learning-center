import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DetailCourse.scss";

function DetailCourse() {
  const getCourse = localStorage.getItem("courseId");
  const getUser = localStorage.getItem("userId");
  const [Course, setCourse] = useState({});
  const [User, setUser] = useState({});
  const navigate = useNavigate();

  // /getCourse/:id
  useEffect(() => {
    fetch(`https://api-center-cp8i.onrender.com/api/getOne/` + getCourse)
      .then((res) => res.json())
      .then((res) => {
        setCourse(res);
        console.log(Course);
      });

    // /getUser/:id
    fetch(`https://api-center-cp8i.onrender.com/api/getOneUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: getUser }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });


  }, [getCourse]);



  const handdleDangky = () => {
    let listCourse = [];
    if (User.numberCourses) {
      listCourse = [...User.numberCourses, Course];
    } else {
      listCourse = Course;
    }

    //Update Course trong user
    fetch(`https://api-center-cp8i.onrender.com/api/updateUser/` + getUser, {
      method: "PATCH",
      body: JSON.stringify({
        numberCourses: listCourse,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          alert("Registration sucessful !");
        } else alert(res.message);
      });

    //Update list student trong courses
    let listStudent = [];
    if (Course.currentStudent) {
      listStudent = [...Course.currentStudent, getUser];
    } else {
      listStudent = getUser;
    }
    fetch(`https://api-center-cp8i.onrender.com/api/update/` + getCourse, {
      method: "PATCH",
      body: JSON.stringify({
        currentStudent: listStudent,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        navigate("/courses", { replace: true });
      });
  };
  return (
    <div className="detail">
      <h1 className="title">
        <strong>
          {Course.code} - {Course.name}
        </strong>
      </h1>
      <p className="lecture font-16px">
        Teacher's name: <strong>{Course.lecture}</strong>
      </p>
      <p className="lecture font-16px">
        Teacher's qualification: <strong>UIT</strong>
      </p>
      <p className="datestart font-16px">
        Start date: <strong>{Course.dateStart}</strong>
      </p>
      <p className="student font-16px">
        Number of student:{" "}
        <strong>
          {Course.currentStudent && Course.currentStudent.length !== 0
            ? Course.currentStudent.length
            : "0"}{" "}
          / {Course.maxStudent}
        </strong>

        
      </p>
      <p className="price font-16px">
        Phí: <strong>FREE</strong>
      </p>
      <div className="btn-box">
        <button className="btn" onClick={handdleDangky}>
          Đăng Ký Ngay
        </button>
      </div>
    </div>
  );
}

export default DetailCourse;
