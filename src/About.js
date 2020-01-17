import React from "react";
import Detail from "./Details";
import Test from "./Test";

export default function Home() {
  const id = "User Name";
  return (
    <div>
      <center>
        <h1>About Page</h1>
      </center>
      <Test id={id} />
      <Detail id={id} />
    </div>
  );
}
