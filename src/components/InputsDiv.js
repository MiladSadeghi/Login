import React from 'react';

const InputsDiv = (props) => {
  return (
    <div className='inputsDiv'>
      <label htmlFor={props.inputID}>{props.inputID}</label>
      <input type={(props.name === "password" || props.name === "repeatPassword") ? "password":"text"} id={props.inputID} value={props.data[props.name]} name={props.name} onChange={(event) => props.onChange(event)} onFocus={(event) => props.onFocus(event)} />
      {props.errors[props.name] && props.touched[props.name] && <span className='red'>{props.errors[props.name]}</span>}
    </div>
  );
}

export default InputsDiv;
