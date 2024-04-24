import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrap">
          <Link to="/">
            <div>
              <button className="btn footer-btn">Домашняя страница</button>
            </div>
          </Link>
          <Link to="/meow">
            <div >
              <button className="btn footer-btn">Для Котов</button>
            </div>
          </Link>
          <Link to="/woof">
            <div>
              <button className="btn footer-btn">Для Собак</button>
            </div>
          </Link>
          <Link to="/catalog">
            <div>
              <button className="btn footer-btn footer-catalog">
                Каталог
              </button>
            </div>
          </Link>
        </div>
        <div className="company-info-wrap">
          <div className="contact-wrap">
            <p className="footer-contact">
              <b>Контакты</b>
            </p>
            <p>(800)-000-0000</p>
            <p>info@bigbob.com</p>
          </div>
          <div className="address-wrap">
            <p className="footer-address">
              <b>Адрес</b>
            </p>
            <p>Москва</p>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <p className="copyright">
          copyright &#xA9; 2024
        </p>
      </div>
    </>
  );
}
