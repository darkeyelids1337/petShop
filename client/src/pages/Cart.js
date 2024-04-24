import './Cart.css';
import { fetchCart, removeCartItem } from '../lib';
import { useEffect, useState } from 'react';
import { Product } from '../components/Product';
import { FaTrashAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const stringData = localStorage.getItem('userInput');
    if (stringData !== null) {
      const userData = JSON.parse(stringData);
      setUserData(userData);
    } else {
      navigate('/signin');
    }
  }, [navigate]);

  useEffect(() => {
    async function loadCart() {
      try {
        const products = await fetchCart(userData.userId);
        setProducts(products);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (userData !== undefined) {
      setIsLoading(true);
      loadCart();
    }
  }, [userData]);

  async function handleRemoveItem(productId, userId) {
    try {
      await removeCartItem(productId, userId);
      setProducts(
        products.filter((product) => product.productId !== productId)
      );
      alert(`Предмет был удален из корзины.`);
      window.location.reload();
    } catch (err) {
      setError(err);
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) console.log(error);
  if (error) <div>Error Loading myCart: {error.message}</div>;

  return (
    <div className="cart-container">
      <h1 className="cart-h1">Корзина пользователя {userData.firstName}</h1>
      <div className="product-list">
        {products?.map((product) => (
          <div key={product.productId} className="prod-wrap cart-remove">
            <Product product={product} />
            <button
              onClick={() =>
                handleRemoveItem(product.productId, userData.userId)
              }
              className="remove-btn">
              <FaTrashAlt className="trash-icon" />
              Удалить из корзины
            </button>
          </div>
        ))}
      </div>
      {products.length  ? <div className='cart-p'>
        <Link to='/checkout'>
          <button className='btn'>Купить</button>
        </Link>
      </div> : <h1 className="cart-h1">Пусто =(</h1>}
      <Footer />
    </div>
  );
}
