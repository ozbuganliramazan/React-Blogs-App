import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  const { categoriesState } = useSelector((state) => state);
  return (
    <section className="leftSide">
      <div className="categoriesTitleContainer">
        <p>Kategoriler</p>
      </div>
      <ul className="categoriesList">
        {categoriesState.categories.map((item) => (
          <li key={item.id}>
            <Link href="#">{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoriesSection;
