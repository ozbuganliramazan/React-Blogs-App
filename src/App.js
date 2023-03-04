import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/* routing stuff */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* pages*/
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Login from "./pages/Login";

/* api stuff */
import api from "./api/api";
import endpoints from "./api/endpoints";

/* redux stuff */
import actionTypes from "./redux/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { blogsState, categoriesState, usersState } = useSelector(
    (state) => state
  );
  useEffect(() => {
    /* fetch blogs */
    dispatch({ type: actionTypes.blogActions.GET_BLOGS_START });
    api
      .get(endpoints.blogs)
      .then((res) =>
        dispatch({
          type: actionTypes.blogActions.GET_BLOGS_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.blogActions.GET_BLOGS_FAIL,
          payload: "Blogları çekerken bir hata oluştu.",
        })
      );
    /* fetch categories */
    dispatch({ type: actionTypes.categoryActions.GET_CATEGORIES_START });
    api
      .get(endpoints.categories)
      .then((res) =>
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_FAIL,
          payload: "Kategorileri çekerken bir hata oluştu",
        })
      );
    /* fetch users */
    dispatch({ type: actionTypes.userActions.GET_USERS_START });
    api
      .get(endpoints.users)
      .then((res) =>
        dispatch({
          type: actionTypes.userActions.GET_USERS_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.userActions.GET_USERS_FAIL,
          payload: "Kullanıcıları çekerken bir hata oluştu",
        })
      );
  }, []);

  if (!blogsState.success || !categoriesState.success || !usersState.success)
    return null;
  /* todo: return error page if datas didn't get fetched */
  /* if(blogsState.error || categoriesState.error || usersState.error) return  */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
