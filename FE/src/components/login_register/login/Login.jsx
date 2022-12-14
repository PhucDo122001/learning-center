import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useState, useEffect } from "react";
import ImgLogin from "../img/index.js";
import {Loading} from '../../index'

//Create 1 bien de Save value khi Login, sau do dung bien nay gui len api check
let dataUser = {
  name: String,
  password: String,
};
let random = Math.floor(Math.random() * ImgLogin.length);

function Login({ onLogin }) {
  const [inputName, setName] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [randomImg, setRandomImg] = useState(random)

  //set time de Change image 
    useEffect(() => {
      const inter = setInterval(()=> {
        random = Math.floor(Math.random() * ImgLogin.length);
        setRandomImg(random)
      }, 3000)
      return () =>      clearInterval(inter)
  },[randomImg])

  //navigate use change pages when login is successful
  const navigate = useNavigate();


  // function xu ly khi click button login
  const handleLogin = (e) => {
    //Delete nhung thuoc tinh mac dinh cua form
    e.preventDefault();

    // Save value tu form Login vào biến
    dataUser = {
      name: inputName,
      password: inputPassword,
    };
    setIsLoading(true);


    //gui data len api check login
    fetch(`https://api-center-cp8i.onrender.com/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })

    // .then là để nhận Value trả về từ api
      .then((data) => data.json())
      .then((data) => {
        if (data.status === 200) {
          
          //When login succcess thi luu vao storaged
          localStorage.setItem('userId', data.id)

          
          onLogin(data.id);
          // alert("SuccessLogin");
          setIsLoading(false)
          navigate("/", { replace: true });
        } else {
          setIsLoading(false)
          alert("Account or Password failed !");}
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <>
      <div className="login">
        <div className="login-left">
          {isloading? <div className="login-loading"><Loading /></div> : <></>}
          
          <form onSubmit={handleLogin}>
            <div className="login-content">
              <h1 className="login-title">Login</h1>
              <div className="login-input-form">
                <span className="login-input-span">Username</span>
                <input
                  type="text"
                  required
                  className="login-input-box"
                  placeholder="Input Username"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="login-input-form">
                <span className="login-input-span">Password</span>
                <input
                  type="password"
                  required
                  className="login-input-box"
                  placeholder="Input Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button className="btn-login">Login</button>
              <div className="text__forgot mr-16">
                <span>Forgot Password ?</span>
              </div>
              <div className="login__register-link mr-16">
                <span className="">
                  Don't have account ? click{" "}
                  <Link className="navLink" to="/signup">
                    <strong>Here</strong>
                  </Link>
                </span>
              </div>
              <div className="login__more">
                <span className="login__more-text">Login More</span>
                <div className="login__more-icon ">
                  <i className="fa fa-google google"></i>
                  <i className="fa fa-facebook facebook"></i>
                  <i className="fa fa-twitter twitter"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="login-right">
          <img src={ImgLogin[randomImg]} alt="Img Login" className="login-right__img" />
        </div>
      </div>
    </>
  );
}
// full page login 
export default Login;
