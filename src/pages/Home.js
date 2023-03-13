import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Header from "../components/Header";

import CategoriesSection from "../components/CategoriesSection";

const Home = () => {
  const { loginState } = useSelector((state) => state);
  return (
    <div>
    <Header/>
     <main className="mainContainer">
        <CategoriesSection />
        <section className="rightSide"></section>
      </main>
    </div>
  );
};

export default Home;
