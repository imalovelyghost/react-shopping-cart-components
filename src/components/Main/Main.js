import React from "react";

function Main({ children, ...props }) {
  return <main {...props}> {children} </main>;
}

export default Main;
