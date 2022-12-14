import "./CreateCourses.scss";
import {useState, useEffect} from 'react'

function CreateCourses() {
  const [codeInput, setCodeInput] = useState();
  const [nameInput, setNameInput] = useState();
  const [lectureInput, setLectureInput] = useState();
  const [maxStudentInput, setMaxStudentInput] = useState();
  const [dayInput, setDayInput] = useState();

  let dataCourses ={
    code: String,
    name: String, 
    lecture: String,
    dateStart: String,
    maxStudent: Number,
}

const handleInputCourses = (e) => {
  e.preventDefault()
  dataCourses ={
      code: codeInput,
      name: nameInput, 
      lecture: lectureInput,
      dateStart: dayInput,
      maxStudent: maxStudentInput
    }
    fetch(`https://api-center-cp8i.onrender.com/api/post`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataCourses)
      })
      .then( (res) => res.json())
    .then((res) => {
     if(res.status === 200)
      {
      alert(res.message)
    window.location.reload();
  } 
      else {
        alert(res.message)
      }
    })
}
    
  return (
    <form className="from-courses">
        
      <div className="from-courses--box">
          <p className="from-courses__name">Courses Code</p>
          <input
            type="text"
            value={codeInput}
            className="from-courses__input"
            placeholder="Nhập ID khóa học"
            required
            onChange={(e) => setCodeInput(e.target.value)}
          />
      </div>
      <div className="from-courses--box">
          <p className="from-courses__name">Name Courses</p>
          <input
            value={nameInput}
            type="text"
            className="from-courses__input"
            placeholder="Nhập Tên khóa học"
            onChange={(e) => setNameInput(e.target.value)}
            required
          />
      </div>
      <div className="from-courses--box">
          <p className="from-courses__name">Number of participants</p>
          <input
            value={maxStudentInput}
            type="number"
            className="from-courses__input"
            placeholder="Nhập Số lượng học viên"
            onChange={(e) => setMaxStudentInput(e.target.value)}
            required
          />
      </div>
      <div className="from-courses--box">
          <p className="from-courses__name">Name Teacher</p>
          <input
            value={lectureInput}
            type="text"
            className="from-courses__input"
            placeholder="Nhập Tên giáo viên"
            onChange={(e) => setLectureInput(e.target.value)}
            required
          />
      </div>
      
      <div className="from-courses--box">
          <p className="from-courses__name">Admission date</p>
          <input
            value={dayInput}
            type="text"
            className="from-courses__input"
            placeholder="Nhập ngày nhập học"
            onChange={(e) => setDayInput(e.target.value)}
            required
          />
      </div>
      <div className="from-courses--box">
      <button type="submit" className="from-courses--box__btn" onClick={handleInputCourses}>Create</button>
      </div>
    </form>
  );
}

export default CreateCourses;
