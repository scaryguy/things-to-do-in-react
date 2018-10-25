import React from "react";

const Layout = props => {
  return (
    <div className="container-fluid h-100 ">
      <div className="row d-flex flex-column align-items-center mt-5 h-100">
        <div className="col-7 h-100 d-flex flex-column">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
