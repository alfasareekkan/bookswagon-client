import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './CategoryPage.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import DropDowns from '../components/Elements/DropDown';
import CategoryProduct from '../components/CategoryProduct';
import { useGetProductByCategoryMutation, useFilterMutation } from '../features/product/productApiSlice';
import { insertAllProducts } from '../features/product/productSlice';
import Loader from '../components/Elements/Loader';

function CategoryPage() {
  const { categoryId } = useParams();
  const [getProductByCategory, { isLoading }] = useGetProductByCategoryMutation();
  const [filter] = useFilterMutation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [paginate, setPaginate] = useState(0);

  // getting product by category from api
  async function getProductByCategories() {
    try {
      const data = await getProductByCategory(categoryId).unwrap();
      dispatch(insertAllProducts(data));
    } catch (error) {

    }
  }
  const filterAtoZ = async (type) => {
    try {
      const data = await filter({ id: categoryId, type }).unwrap();
      dispatch(insertAllProducts(data));
    } catch (error) {

    }
  };

  useEffect(() => {
    getProductByCategories();
  }, [categoryId]);

  const page = isLoading ? (<Loader />) : (
    <div className="category-page">

      <div className="navigation">
        <h5>{ products[0]?.category}</h5>
        <div>
          <DropDowns>
            <Dropdown.Item onClick={() => filterAtoZ('AtoZ')}>Title A to Z</Dropdown.Item>
            <Dropdown.Item onClick={() => filterAtoZ('ZtoA')}>Title z to A</Dropdown.Item>
            <Dropdown.Item onClick={() => filterAtoZ('LowToHigh')}>Price Low to High</Dropdown.Item>
            <Dropdown.Item onClick={() => filterAtoZ('HighToLow')}>Price High to Low</Dropdown.Item>
          </DropDowns>
        </div>

      </div>
      <div className="category-products">
        {
          products?.map((product) => (
            <CategoryProduct product={product}>
              <Button variant="danger">Add To Cart</Button>
            </CategoryProduct>

          ))
        }
      </div>
      <div className="load-more">
      <Button variant="danger" onClick={pagination}>Load More</Button>
    
      </div>
      <div />
    </div>
  );

  return page;
}

export default CategoryPage;
