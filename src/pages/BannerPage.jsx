import React, { Fragment, useEffect,useState } from 'react';
import HomeCarousel from '../components/HomeCarousel';
import CardCarousel from '../components/CardCarousel';
import { useGetLatestProductMutation } from '../features/product/productApiSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';



function BannerPage() {
  const [latestProducts, setLatestProduct] = useState([]);

  // latest product mutation from redux base query;
  const [getLatestProduct] = useGetLatestProductMutation();

  // latest product getting function
  async function gettingLatestProduct() {
    try {
      const result = await getLatestProduct();
      setLatestProduct([...result.data]);
    } catch (error) {

    }
  }

  useEffect(() => {
    gettingLatestProduct();
  }, []);
  return (
    <>
      <HomeCarousel />
      <div className="product-head">
        <h3>Latest Products</h3>
      </div>
      {/* props drilling */}
      <CardCarousel latestProducts={latestProducts} />
    </>
  );
}

export default BannerPage;
