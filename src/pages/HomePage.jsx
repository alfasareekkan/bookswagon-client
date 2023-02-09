import React, {useState} from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HomeCarousel from '../components/HomeCarousel';
import CardCarousel from '../components/CardCarousel';
import Footer from '../components/Footer';
import LeftOfCanvas from '../components/LeftOfCanvas';

function HomePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <LeftOfCanvas show={show} handleClose={handleClose} handleShow={handleShow} />
      <Navbar handleShow={handleShow} />
      <HomeCarousel />
      <div className="product-head">
        <h3>Products</h3>
      </div>
      <CardCarousel />
      <Footer />
    </>
  );
}

export default HomePage;
