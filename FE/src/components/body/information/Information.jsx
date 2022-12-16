import "./Information.scss";
import Avatar from "./avatar.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Information() {
  const IdStored = localStorage.getItem("userId");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  //lấy thông tin user
  useEffect(() => {
    fetch(`http://localhost:3002/api/getOneUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: IdStored }),
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, [IdStored]);

  //xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("courseId");
    localStorage.removeItem("userId");
    navigate("/login", { replace: true });
    window.location.reload();
  };
  console.log(user.numberCourses);
  return (
    <>
      <div className="information">
        <div className="infor__left">
          {user.urlImg ? (
            <img className="avatar__img" src={Avatar} alt="Avatar" />
          ) : (
            <i class="fa fa-user"></i>
          )}
          <h1 className="infor__left-name">{user.name}</h1>
          <div className="info-box">
            <p className="text-title">Thông tin cá nhân</p>
            <p className="text-text">
              Vai trò: <strong>{user.role}</strong>
            </p>
            <p className="text-text">
              Email: <strong>{user.email}</strong>
            </p>
            <p className="text-text">
              Mật khẩu: <strong>********</strong>
            </p>
            <p className="text-text">
              Ngày tạo: <strong>{user.dateCreate}</strong>
            </p>
          </div>
          <div className="btn-box">
            <button className="btn-logout" onClick={handleLogout}>
              Đăng Xuất
            </button>
          </div>
        </div>
        <div className="infor__right">
          <h1 className="title">Danh Sách Lớp Đã Đăng Ký</h1>
          <div className="content">
            {user.numberCourses && user.numberCourses.length !== 0 ? (
              <div className="content-box">
                <ul className="list-title">
                <li className="item">
                    <p className="name font-20px font-weight">Mã & Tên lớp</p>
                  </li>
                  <li className="item">
                    <p className="lecture font-20px font-weight">Giáo Viên</p>
                  </li>
                  <li className="item">
                    <p className="active font-20px font-weight">Thao tác</p>
                  </li>
                </ul>
                <ul className="list-courses">
                  {user.numberCourses.map((course, index) => (
                    <li className="item">
                      <p className="name font-18px">{course.name}</p>
                      <p className="lecture font-18px">{course.lecture}</p>
                      <p className="active font-18px">Hủy đăng ký</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : <h1 className="empty"> Bạn chưa đăng ký lớp học nào !</h1>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
