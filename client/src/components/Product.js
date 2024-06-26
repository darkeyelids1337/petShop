import { Link } from 'react-router-dom';
import { toRubles } from '../lib';
import Ratings from '../lib/Ratings';
import './Product.css';

export function Product({ product }) {
  const {
    productName,
    subscriptionPrice,
    imgUrl,
    ratings,
    reviews,
    productId,
  } = product;
  return (
    <Link to={`/details/${productId}`}>
      <div className="prod-card">
        <div className="card-img-wrap">
          <img src={imgUrl} alt={productName} className="card-img" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{productName}</h3>
          <p className="card-text price">{toRubles(subscriptionPrice)}</p>
          <div className="rev-n-rate">
            <Ratings ratings={ratings} className="rate" />
            <p className="rev">{reviews}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
