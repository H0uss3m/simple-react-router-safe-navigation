import React from "react";
import Test from "./Test";
export default function Welcome({ children }) {
  const id = "User Name"
  return (
    <div>
      <div>{children}</div>
      <Test id={id} />
    </div>
  );
}
