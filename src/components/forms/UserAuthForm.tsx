"use client";

import React from "react";
import SessionCheck from "./SessionCheck";
import LoginForm from "./loginForm";

const UserAuthForm: React.FC = () => {
  return (
    <SessionCheck>
      <LoginForm />
    </SessionCheck>
  );
};

export default UserAuthForm;
