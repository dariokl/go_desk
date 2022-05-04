import React from "react";
import { containerCN } from "./styles";

import Input from "../base/input/Input";
import Button from "../base/Button";

const AuthForm = () => {
  return (
    <div className={containerCN}>
      <div>
        <h1> REGISTER </h1>
      </div>
      <form className="mt-10">
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          labelColor="gray"
          required
        ></Input>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password..."
          labelColor="gray"
          required
        ></Input>
      </form>
      <Button text="Register" hoverColor="red" />
    </div>
  );
};

export default AuthForm;
