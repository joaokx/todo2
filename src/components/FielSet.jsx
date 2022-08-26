import React from "react";


const Fieldset = (props) => {

  return (
    <fieldset>
      <label>{props.title}</label>
      <input
        type={props.type}
        onChange={props.onchange}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </fieldset>
  );
};

export default Fieldset;