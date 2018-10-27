import React from "react";
import styles from "./Layout.module.css";

const Layout = props => {
  return (
    <React.Fragment>
      <div className={`container-fluid h-100 ${styles.Layout}`}>
        <div className="row d-flex flex-column align-items-center mt-5 h-100">
          <div className="col-10 h-100 d-flex flex-column">
            {props.children}
          </div>
        </div>
        <div className={styles.resetContainer}>
          <a href="/" onClick={e => props.resetState(e)}>
            Reset
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
