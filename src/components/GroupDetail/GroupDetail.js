import React from "react";
// import ListItem from "../ListItem/TaskGroupItem";

const GroupDetail = props => {
  return (
    <div className="row h-100 ">
      <div className="col h-100">
        <div className="card-group pb-5">
          <div className="card h-100 border-0 ">
            <div className="card-title">
              <h1 className="font-weight-normal">Things To Do</h1>
            </div>
            <div className="card-body p-0 ">
              <ul className="list-group ">
                {/* {[1, 2, 3, 4].map(elm => (
                  <ListItem />
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
