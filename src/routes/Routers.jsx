/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BannerPage from '../pages/BannerPage';
import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<BannerPage />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}

export default Routers;
