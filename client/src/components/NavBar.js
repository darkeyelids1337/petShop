import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';
import { TbCat, TbDog } from 'react-icons/tb';
import { HiOutlineSquares2X2, HiOutlineUserCircle } from 'react-icons/hi2';
import { FaPaw } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="links-wrap">
        <div className="home-wrap">
          <Link to="/" className="home">
            <FaPaw className="paw" />
            bigBobShop
          </Link>
        </div>
        <div className="meow-wrap">
          <Link to="/meow" className="meow">
            <TbCat className="kitti" />
            Для Котов
          </Link>
        </div>
        <div className="woof-wrap">
          <Link to="/woof" className="woof">
            <TbDog className="doggo" />
            Для Собак
          </Link>
        </div>
        <div className="pc-wrap">
          <Link to="/catalog" className="pc">
            <HiOutlineSquares2X2 className="pc-icon" />
            Весь Каталог
          </Link>
        </div>
        <div className="account-wrap">
          {localStorage.getItem('account') !== null ? (
            <Link to="/signout" className="account">
              <HiOutlineUserCircle className="account-icon" />
              Личный кабинет
            </Link>
          ) : (
            <Link to="/signin" className="account">
              <HiOutlineUserCircle className="account-icon" />
              Личный кабинет
            </Link>
          )}
        </div>
        <div className="cart-wrap">
          {localStorage.getItem('account') !== null ? (
            <Link to="/cart" className="cart">
              <BsCart4 className="cart-icon" />
              Корзина
            </Link>
          ) : (
            <Link to="/signin" className="account">
              <BsCart4 className="account-icon" />
              Корзина
            </Link>
          )}
        </div>
      </div>
      
      <Outlet />
    </div>
  );
}
