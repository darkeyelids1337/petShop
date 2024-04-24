import Carousel from '../components/Carousel';
import ShopByPets from '../components/ShopByPets';
import PetFav from '../components/PetFav';
import Footer from '../components/Footer';
import './Main.css';

const img = [
  {
    id: 1,
    url: '/images/carousel/carousel1.jpeg',
    alt: 'cat playing with kids',
    petType: 'cat',
  },
  {
    id: 2,
    url: '/images/carousel/carousel2.jpeg',
    alt: 'dog running with ball',
    petType: 'dog',
  },
  {
    id: 3,
    url: '/images/carousel/carousel3.jpeg',
    alt: 'kids petting cat',
    petType: 'cat',
  },
  {
    id: 4,
    url: '/images/carousel/carousel4.jpeg',
    alt: 'dogs playing together',
    petType: 'dog',
  },
];

export default function Main() {
  return (
    <>
      <div className="main-page-container">
        <header className="header-wrap">
          <div className="main-header-text-wrap">
            <h1 className="main-h1">Побалуйте своих питомцев продукцией премиум-класса.</h1>
            <h2 className="main-h2">
              Откройте для себя страну чудес виляющих хвостом на bigBobShop!
            </h2>
          </div>
          <div className="carousel-wrapper">
            <Carousel img={img} />
          </div>
        </header>
        <ShopByPets />
        <PetFav />
      </div>
      <Footer />
    </>
  );
}
