import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeftOfCanvas from '../components/LeftOfCanvas';
import { useGetAllCategoryMutation } from '../features/category/categoryApiSlice';
import { insertAllCategories } from '../features/category/categorySlice';
import CategoryList from '../components/list/CategoryList';

function HomePage() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const categories =useSelector((state)=> state.category.categories)

 
  const [getAllCategory]= useGetAllCategoryMutation()

  
//getting all categories
  async function gettingAllCategory() {
    try {

      const category = await getAllCategory().unwrap();
      dispatch(insertAllCategories(category))
    } catch (error) {
      
    }
  }

  
  useEffect(() => {
      gettingAllCategory();
  }, []);
  return (
    <>
      <Header />
      <LeftOfCanvas show={show} handleClose={handleClose} handleShow={handleShow}>
      {
          categories.map((category) => (
                <Link to={`/category/${category._id}`} style={{textDecoration:"none",color:"#b0b0b0"}} >
                        <CategoryList category={category} key={category._id}/>
                </Link>
            
                      ))
                  }
      </LeftOfCanvas>
      <Navbar handleShow={handleShow} />
      <div style={{height:"fit-content",width:"100%"}}>

      <Outlet />
      </div>
      <div>

      <Footer />
      </div>
    </>
  );
}

export default HomePage;
