
import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Header from "../components/Header";
import CategoriesSection from "../components/CategoriesSection";

const Home = () => {
  const { loginState, blogsState } = useSelector((state) => state);
  return (
    <div>
      <Header />
      <main className="mainContainer">
        <CategoriesSection />
        <section className="rightSide">
          {blogsState?.blogs?.map((blog) => {
            return (
              <div key={blog?.id} class="cardContainer">
                <div class="cardImageContainer">
                  <img src={blog?.img} alt="" />
                </div>
                <h3 class="blogTitle">{blog?.title}</h3>
                <p class="blogSummary">
                  {blog?.description}
                </p>
                <div class="card-btn-container">
                  <Link to={`/blog/${blog?.id}`} class="card-btn">
                    Devamını Oku
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;
