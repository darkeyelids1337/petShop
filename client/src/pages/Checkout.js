//Страница оплаты с вводом карты
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';
import {
  FaCaretLeft,
} from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Checkout() {
  return (
    <div>
      <h1 className="sub-head">Оплата 📦</h1>
      <div className="sub-content-wrap">
        <div className="form-wrap">
          <div style={{alignSelf:'center'}}>Введите карту для оплаты:</div>
          <div><input type='text' placeholder='Номер Карты'></input></div>
          
        </div>
        <div className="link">
          <Link to="/">
            <div className="back-btn-wrap">
              <FaCaretLeft />
              <button className="btn home-btn">На Главную</button>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
