import React from "react";


const Button = (props) => {
  return (
    <div className="row">
    <div className="col-12 d-flex justify-content-end">
    <button  className="btn btn-success" onClick={props.onclick}>
      {props.text}
      Avançar
    </button>
    </div>
    </div>
  );
};

export default Button;