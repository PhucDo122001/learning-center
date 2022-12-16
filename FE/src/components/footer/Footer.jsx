
import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <ul className='footer__list'>
                <li className='footer__list-item'>
                    <h2 className='footer__list-item--title'>CHĂM SÓC KHÁCH HÀNG</h2>
                    <p className='footer__list-item--text'>Email: troho@gmail.com</p>
                    <p className='footer__list-item--text'>Đường dây nóng: 1234 123 123</p>
                </li>
                <li className='footer__list-item'>
                    <h2 className='footer__list-item--title'>CHÍNH SÁCH ƯU ĐÃI</h2>
                    <p className='footer__list-item--text'>Hình thức thanh toán</p>
                    <p className='footer__list-item--text'>Trả hàng & hoàn tiền</p>
                    <p className='footer__list-item--text'>Chính sách bảo mật</p>
                </li>
                <li className='footer__list-item'>
                    <h2 className='footer__list-item--title'>VỀ CHÚNG TÔI</h2>
                    <p className='footer__list-item--text'>Giới thiệu về Learning Center</p>
                    <p className='footer__list-item--text'>Liên hệ với Chúng tôi</p>
                </li>
                <li className='footer__list-item'>
                    <h2 className='footer__list-item--title'>KHÔNG GIAN HỌC TẬP</h2>
                    <p className='footer__list-item--text'>Bảng tin trường học</p>
                    <p className='footer__list-item--text'>Thử tài đố vui</p>
                    <p className='footer__list-item--text'>Hỏi bài & chửa bài</p>
                </li>
            </ul>
        </div>
    );
}

export default Footer;