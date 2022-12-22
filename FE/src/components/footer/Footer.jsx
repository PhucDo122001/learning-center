import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <ul className='footer__list'>
                <li className='footer__list-item'>
                    <h2 className='footer__list-item--title'>Customer Care</h2>
                    <p className='footer__list-item--text'>Email: supportstaff@gmail.com</p>
                    <p className='footer__list-item--text'>Hostline: 039 8710 817</p>
                </li>
                <li className='footer__list-item'>
                    <h2 className='footer__list-item--title'>PRIORITY POLICY</h2>
                    <p className='footer__list-item--text'>Method of payments</p>
                    <p className='footer__list-item--text'>Returns & Refunds</p>
                    <p className='footer__list-item--text'>Privacy Policy</p>
                </li>
                <li className='footer__list-item'>
                    <h2 className='footer__list-item--title'>ABOUT US</h2>
                    <p className='footer__list-item--text'>About Learning Center</p>
                    <p className='footer__list-item--text'>Contact us</p>
                </li>
                <li className='footer__list-item'>
                    <h2 className='footer__list-item--title'>LEARNING SPACE</h2>
                    <p className='footer__list-item--text'>School bulletin board</p>
                    <p className='footer__list-item--text'>Try quizzes</p>
                    <p className='footer__list-item--text'>Ask questions and correct them</p>
                </li>
            </ul>
        </div>
    );
}

export default Footer;