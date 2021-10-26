import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="username" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.registed && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.registed ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
