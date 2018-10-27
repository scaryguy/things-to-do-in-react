import React from "react";
import styles from "./Layout.module.css";

const Layout = props => {
  return (
    <div className={`container-fluid h-100 ${styles.Layout}`}>
      <div className="row d-flex flex-column align-items-center mt-5 h-100">
        <div className="col-7 h-100 d-flex flex-column">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
