import "./Home.scss";
import { SearchOutlined } from "@ant-design/icons";

function Home() {
  return (
    <div className="home">
        <div className="home__header">
            <ul className="home__header--list">
                <li className="home__header--lis-item">
                    <p className="home__header--lis-item--number">100.000+</p>
                    <p className="home__header--lis-item--title">HỌC VIÊN</p>
                </li>
                <li className="home__header--lis-item">
                    <p className="home__header--lis-item--number">5.000+</p>
                    <p className="home__header--lis-item--title">BÀI GIẢNG</p>
                </li>
                <li className="home__header--lis-item">
                    <p className="home__header--lis-item--number">200.000+</p>
                    <p className="home__header--lis-item--title">BÀI ÔN TẬP</p>
                </li>
                <li className="home__header--lis-item">
                    <p className="home__header--lis-item--number">4.000+</p>
                    <p className="home__header--lis-item--title">ĐỀ LUYỆN THI</p>
                </li>
            </ul>
        </div>
      <form className="home__header-form">
        <p className="home__header-text">Tìm bài giảng</p>
        <select className="home__header-options">
          <option value="">Chọn lớp</option>
          <option value="lop1">Lớp 1</option>
          <option value="lop2">Lớp 2</option>
          <option value="lop3">Lớp 3</option>
        </select>
        <select className="home__header-options">
          <option value="">Chọn môn</option>
          <option value="tienganh">Tiếng anh</option>
          <option value="toan">Toán</option>
          <option value="ly">Lý</option>
          <option value="hoa">Hóa</option>
        </select>
        <button className="home__header-btn">
          <SearchOutlined /> Tìm kiếm
        </button>
      </form>
      <div className="home__slider">
        <h1 className="home__slider-title">Khóa học nổi bật</h1>
        <ul className="home__slider-list">
          <li className="home__slider-list--item">
            <div className="home__slider-list--item-picture">
              <img
                className="item-picture-img"
                src="https://cdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/22/4689_khoa-hoc-tieng-anh-3.jpg"
                alt="img"
              />
            </div>
            <div className="home__slider-list--item-content">
                <h3 className="item-content--title">Basic</h3>
                <p className="item-content--lecture">Thầy Vitalii Turytskyi</p>
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
                src="https://cdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/22/4689_khoa-hoc-tieng-anh-3.jpg"
                alt="img"
              />
            </div>
            <div className="home__slider-list--item-content">
                <h3 className="item-content--title">Tiếng Anh 3</h3>
                <p className="item-content--lecture">Thầy Vitalii Turytskyi</p>
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
                src="https://cdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/22/4689_khoa-hoc-tieng-anh-3.jpg"
                alt="img"
              />
            </div>
            <div className="home__slider-list--item-content">
                <h3 className="item-content--title">Tiếng Anh 3</h3>
                <p className="item-content--lecture">Thầy Vitalii Turytskyi</p>
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
                src="https://cdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/22/4689_khoa-hoc-tieng-anh-3.jpg"
                alt="img"
              />
            </div>
            <div className="home__slider-list--item-content">
                <h3 className="item-content--title">Tiếng Anh 3</h3>
                <p className="item-content--lecture">Thầy Vitalii Turytskyi</p>
                <p className="item-content--text">
                  Giúp con trau dồi kĩ năng nghe - nói - đọc hiểu Tiếng Anh bằng
                  công nghệ A-talk luyện phát âm. Mục tiêu điểm 10 môn Tiếng Anh
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
                src="https://cdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/22/4689_khoa-hoc-tieng-anh-3.jpg"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Teacher Hoang Phuc</h3>
                <p className="item-content--lecture">Giáo Viên Ngữ văn, Trường THCS Vạn Phúc - Hà Đông</p>
                <p className="item-content--text">
                  Giúp con trau dồi kĩ năng nghe - nói - đọc hiểu Tiếng Anh bằng
                  công nghệ A-talk luyện phát âm. Mục tiêu điểm 10 môn Tiếng Anh
                </p>
              </div>
          </li><li className="home__lecture-list--item">
            <div className="home__lecture-list--item-picture">
              <img
                className="item-picture-img"
                src="https://cdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/22/4689_khoa-hoc-tieng-anh-3.jpg"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Teacher Cam Tu</h3>
                <p className="item-content--lecture">Giáo Viên Ngữ văn, Trường THCS Vạn Phúc - Hà Đông</p>
                <p className="item-content--text">
                  Giúp con trau dồi kĩ năng nghe - nói - đọc hiểu Tiếng Anh bằng
                  công nghệ A-talk luyện phát âm. Mục tiêu điểm 10 môn Tiếng Anh
                </p>
              </div>
          </li>
          <li className="home__lecture-list--item">
            <div className="home__lecture-list--item-picture">
              <img
                className="item-picture-img"
                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/273973409_1626751417717666_5984085825594990391_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fI0h767nbeMAX_ou0JO&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfAYELZgh4cI1M4oZLxq1cQCHM1SMujz7ZQE7-nC6nRbLA&oe=63A7A9C0"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Teacher Kieu Oanh</h3>
                <p className="item-content--lecture">Giáo Viên Ngữ văn, Trường THCS Vạn Phúc - Hà Đông</p>
                <p className="item-content--text">
                  Giúp con trau dồi kĩ năng nghe - nói - đọc hiểu Tiếng Anh bằng
                  công nghệ A-talk luyện phát âm. Mục tiêu điểm 10 môn Tiếng Anh
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
                <p className="item-content--lecture">Giáo Viên Ngữ văn, Trường THCS Vạn Phúc - Hà Đông</p>
                <p className="item-content--text">
                  Giúp con trau dồi kĩ năng nghe - nói - đọc hiểu Tiếng Anh bằng
                  công nghệ A-talk luyện phát âm. Mục tiêu điểm 10 môn Tiếng Anh
                </p>
              </div>
          </li>
          

        </ul>
      </div>
    </div>
  );
}

export default Home;
