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
                <h3 className="item-content--title">Thầy Vitalii Turytskyi</h3>
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
                <h3 className="item-content--title">Thầy Vitalii Turytskyi</h3>
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
                src="https://cdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/22/4689_khoa-hoc-tieng-anh-3.jpg"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Thầy Vitalii Turytskyi</h3>
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
                src="https://cdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/22/4689_khoa-hoc-tieng-anh-3.jpg"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Thầy Vitalii Turytskyi</h3>
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
                src="https://cdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/03/22/4689_khoa-hoc-tieng-anh-3.jpg"
                alt="img"
              />
            </div>
            <div className="home__lecture-list--item-content">
                <h3 className="item-content--title">Thầy Vitalii Turytskyi</h3>
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
