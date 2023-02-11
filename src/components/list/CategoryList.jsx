import React from 'react';
import "./List.css"

function CategoryList({ category }) {
  return (
    <div className="category-list">
          <p>{category.category }</p>
    </div>
  );
}

export default CategoryList;
