import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createSubscriber } from '../lib';
import './Subscription.css';
import {
  FaCaretLeft,
  FaUserCircle,
  FaEnvelope,
  FaMapPin,
  FaLock,
  FaUser,
} from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Subscription() {
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const { firstName, lastName, email, address, username, password } =
      formJson;
    try {
      const result = await createSubscriber(
        firstName,
        lastName,
        email,
        address,
        username,
        password
      );
      const userData = JSON.stringify(result);
      localStorage.setItem('userInput', userData);
      navigate('/success');
    } catch (err) {
      setError(error);
      alert(`Ошибка ${err})`);
    }
  }

  return (
    <div>
      <h1 className="sub-head">Регистрация 📦</h1>
      <div className="sub-content-wrap">
        <div className="form-wrap">
          <form method="post" onSubmit={handleSubmit} className="sub-form">
            <h4 className="sub-h4">
            Получите любимые вещи вашего питомца прямо к вашей двери!
            </h4>
            <label className="fn">
              <div className="fn-input-wrap">
                <FaUserCircle className="fn-icon" />
                <input
                  name="firstName"
                  placeholder="Имя"
                  required
                  className="fn-input"
                />
              </div>
            </label>
            <label className="ln">
              <FaUserCircle className="ln-icon" />
              <input
                name="lastName"
                placeholder="Фамилия"
                required
                className="ln-input"
              />
            </label>
            <label className="email">
              <FaEnvelope className="email-icon" />
              <input
                type="email"
                name="email"
                placeholder="Электронная почта"
                required
                className="email-input"
              />
            </label>
            <label className="address">
              <FaMapPin className="address-icon" />
              <input
                name="address"
                placeholder="Адрес доставки"
                required
                className="address-input"
              />
            </label>
            <label className="sub-username">
              <FaUser className="username-icon" />
              <input
                name="username"
                placeholder="Имя пользователя"
                required
                className="username-input"
              />
            </label>
            <label className="sub-password">
              <FaLock className="password-icon" />
              <input
                name="password"
                placeholder="Пароль"
                type="password"
                required
                className="password-input"
              />
              <p className="pw-text">
              Пожалуйста, обязательно запишите свой пароль в надежном месте!
              </p>
            </label>
            <button type="submit" className="sub-btn">
              Регистрация
            </button>
          </form>
        </div>
        <div className="link">
          <Link to="/signin">
            <div className="back-btn-wrap">
              <FaCaretLeft />
              <button className="btn home-btn">Вернуться ко входу</button>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
