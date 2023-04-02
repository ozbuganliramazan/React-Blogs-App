import React from "react";

import styles from "../assets/css/subMenu.module.css";
import { Link } from "react-router-dom";

const SubMenu = ({ isAdmin }) => {
  return (
    <div className={styles.subMenuWrapper}>
      <Link to={"/admin"}>Blog İşlemleri</Link>
      {isAdmin && (
        <Link to="/admin/category-operations">Kategori İşlemleri</Link>
      )}
    </div>
  );
};
export default SubMenu;
