import React from "react";

import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogDetail = () => {
  const { blogId } = useParams();
  const { blogsState, usersState } = useSelector((state) => state);
  const myBlog = blogsState?.blogs?.find((item) => item?.id === blogId);
  const user=usersState?.users?.find(item=>item?.id === myBlog?.userId)
  return (
    <div>
      <Header />
      <main class="blogDetailMainContainer">
        <div class="blogDetailImgContainer">
          <img src={myBlog?.img} alt="" />
        </div>
        <h1 class="blogDetailTitle">
          {myBlog?.title?.toLocaleUpperCase("tr-TR")}
        </h1>
        <div class="blogContentContainer">
          <div dangerouslySetInnerHTML={{__html:myBlog?.content}}></div>
          <div class="authorInfoContainer">
            <h4>{user?.username}</h4>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;