import "./Home.scss";
import { SearchOutlined } from "@ant-design/icons";

function Home() {
  return (
    <div className="home">
        <div className="home__header">
            <ul className="home__header--list">
                <li className="home__header--lis-item">
                    <p className="home__header--lis-item--number">100.000+</p>
                    <p className="home__header--lis-item--title">STUDENT</p>
                </li>
                <li className="home__header--lis-item">
                    <p className="home__header--lis-item--number">5.000+</p>
                    <p className="home__header--lis-item--title">LESSONS</p>
                </li>
                <li className="home__header--lis-item">
                    <p className="home__header--lis-item--number">200.000+</p>
                    <p className="home__header--lis-item--title">REVIEWS</p>
                </li>
                <li className="home__header--lis-item">
                    <p className="home__header--lis-item--number">4.000+</p>
                    <p className="home__header--lis-item--title">EXAMINATION PRACTICE</p>
                </li>
            </ul>
        </div>
      <form className="home__header-form">
        <p className="home__header-text">Find lectures</p>
        <select className="home__header-options">
          <option value="">Choose Class</option>
          <option value="lop1">Class 1</option>
          <option value="lop2">Class 2</option>
          <option value="lop3">Class 3</option>
        </select>
        <select className="home__header-options">
          <option value="">Choose a subject</option>
          <option value="tienganh">English</option>
          <option value="toan">Maths</option>
          <option value="ly">Physical</option>
          <option value="hoa">Chemistry</option>
        </select>
        <button className="home__header-btn">
          <SearchOutlined /> Search
        </button>
      </form>
      <div className="home__slider">
        <h1 className="home__slider-title">Featured Course</h1>
        <ul className="home__slider-list">
          <li className="home__slider-list--item">
            <div className="home__slider-list--item-picture">
              <img
                className="item-picture-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVrnFs33Ej_AoIlGjxxo-s9GtViOn2Qakjw&usqp=CAU"
                alt="img"
              />
            </div>
            <div className="home__slider-list--item-content">
                <h3 className="item-content--title">Basic</h3>
                <p className="item-content--lecture">Teacher Corbin</p>
                <p className="item-content--text">
                Basic is a foundation class for beginners. 
                The course is built to help you firmly grasp the basic
                knowledge to prepare well for the journey to conquer high scores.
                </p>
              </div>
              <button className="home__slider-list--item-btn"> Xem thêm</button>
          </li>
          <li className="home__slider-list--item">
            <div className="home__slider-list--item-picture">
              <img
                className="item-picture-img"
                src="https://home.voca.vn/assets/img/upload/images/viet-ve-viec-hoc-bang-tieng-anh-1.jpeg"
                alt="img"
              />
            </div>
            <div className="home__slider-list--item-content">
                <h3 className="item-content--title">Primary</h3>
                <p className="item-content--lecture">Teacher Finn </p>
                <p className="item-content--text">
                  Giúp con trau dồi kĩ năng nghe - nói - đọc hiểu Tiếng Anh bằng
                  công nghệ A-talk luyện phát âm. Mục tiêu điểm 10 môn Tiếng Anh
                </p>
              </div>
              <button className="home__slider-list--item-btn"> Xem thêm</button>
          </li>
          <li className="home__slider-list--item">
            <div className="home__slider-list--item-picture">
              <img
                className="item-picture-img"
                src="https://skypeenglish.vn/wp-content/uploads/2022/03/Hawaii-Education-chuyen-cung-cap-giao-vien-nuoc-ngoai-day-tieng-Anh-cho-trung-tam-Anh-ngu.jpg"
                alt="img"
              />
            </div>
            <div className="home__slider-list--item-content">
                <h3 className="item-content--title">Intermediate</h3>
                <p className="item-content--lecture">Teacher Rory</p>
                <p className="item-content--text">
                  Giúp con trau dồi kĩ năng nghe - nói - đọc hiểu Tiếng Anh bằng
                  công nghệ A-talk luyện phát âm. Mục tiêu điểm 10 môn Tiếng Anh
                </p>
              </div>
              <button className="home__slider-list--item-btn"> Xem thêm</button>
          </li>
          <li className="home__slider-list--item">
            <div className="home__slider-list--item-picture">
              <img
                className="item-picture-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_9dd10HjwfdQmfJIzYYSavU7tGFTMRs9kLPTjXoBIFGxl2nnB9XlDcqEw9t4O1PbbhY&usqp=CAU"
                alt="img"
              />
            </div>
            <div className="home__slider-list--item-content">
                <h3 className="item-content--title">High-class</h3>
                <p className="item-content--lecture">Teacher Jessica</p>
                <p className="item-content--text">
                  Giúp con trau dồi kĩ năng nghe - nói - đọc hiểu Tiếng Anh bằng
                  công nghệ A-talk luyện phát âm. Mục tiêu điểm 10 môn Tiếng Anh 
                  trong kì thi tiếng anh sắp tới.
                </p>
              </div>
              <button className="home__slider-list--item-btn"> Xem thêm</button>
          </li>

        </ul>
      </div>
      <div className="home__lecture">
      <h1 className="home__lecture-title">ĐỘI NGŨ GIÁO VIÊN</h1>
        <ul className="home__lecture-list">
          <li className="home__lecture-list--item">
            <div className="home__lecture-list--item-picture">
              <img
                className="item-picture-img"
                src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/296962249_615311239953829_1356372559439244277_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vsQriG4cOvMAX-yPb3g&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfCgHWf9X8NRo6vEUUZ-If8bbJOfxW2mnpiUFzDdv7Incg&oe=63A8481D"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Teacher Hoang Phuc</h3>
                <p className="item-content--lecture"> Teacher Math, Trường THCS-THPT Hong Duc</p>
                <p className="item-content--text">
                Learning Math is a very important method to train students' sharp thinking and logical reasoning ability.
                Learning Math helps students improve memory, quick reflexes and reasoning ability.
                </p>
              </div>
          </li><li className="home__lecture-list--item">
            <div className="home__lecture-list--item-picture">
              <img
                className="item-picture-img"
                src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/319407644_456426060014686_8406343425163849032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Gz-ipuge31MAX8VEYZY&_nc_ht=scontent.fsgn3-1.fna&oh=03_AdQB3hGoSxNbttCwLTIbocHok2sQo9f6AknI2fLBV5wZrg&oe=63CA9AB7"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Teacher Cam Tu</h3>
                <p className="item-content--lecture">Teacher Physical, Trường THCS-THPT Nguyen Khuyen</p>
                <p className="item-content--text">
                Learning Physics is a very important method to train students' sharp thinking and logical reasoning ability. 
                Learning Physics helps students improve their memory, quick reflexes and reasoning ability
                </p>
              </div>
          </li>
          <li className="home__lecture-list--item">
            <div className="home__lecture-list--item-picture">
              <img
                className="item-picture-img"
                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.15752-9/319273325_1331407280734870_6885519838717899206_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=rqErivaGDhcAX_GMIFf&_nc_ht=scontent.fsgn4-1.fna&oh=03_AdT40Se1BRppxcafZatiVRDOMGWk_p_t3PmhaY7O1tgKuw&oe=63CA9B95"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Teacher Kieu Oanh</h3>
                <p className="item-content--lecture">Teacher Chemistry, Trường THCS-THPT Tri Duc</p>
                <p className="item-content--text">
                Chemistry is a very important method to train students' sharp thinking and logical reasoning ability.
                Learning Chemistry helps students improve their memory, quick reflexes and reasoning ability.
                </p>
              </div>
          </li>
          <li className="home__lecture-list--item">
            <div className="home__lecture-list--item-picture">
              <img
                className="item-picture-img"
                src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/121162629_1820007194833285_278840672453191949_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=zYConnviKs4AX-zzG_B&tn=hZ8uHje4BszXhh9T&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfAxK4i5VQBRCn5Tom2ZBm5yOveFk0TiiLqVlcx1jfwoig&oe=63CA92E1"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Teacher Thao Nhu</h3>
                <p className="item-content--lecture">Teacher English, Trường THCS-THPT Tan Phu</p>
                <p className="item-content--text">
                Learning English can really help advance your career and it also helps increase the credibility of your resume. 
                Research has shown that the average person who uses multiple languages ​​at work can earn 8% more than usual.
                </p>
              </div>
          </li>
          

        </ul>
      </div>
    </div>
  );
}

export default Home;
