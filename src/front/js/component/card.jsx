import React, { Children } from "react";

export const Card = ({ width = "18rem", children, buttonText, buttons}) => {
  const style = {
    width: width,
  };

  return (
    <div className="card mx-3 p-0" style={style}>
      <img
        src="http://placehold.it/400x200"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <div className="card-text">{children}</div>
        {/* <div className="row d-flex justify-content-between p-2">
          {buttons}

        <a href="#" className="col col-auto btn btn-primary">
          {buttonText}
        </a>
        <a href="#" className="col col-auto btn btn-outline-warning "><i class="fa-solid fa-heart"></i>
        </a>
      </div> */}
        </div>
    </div>
  );
};
