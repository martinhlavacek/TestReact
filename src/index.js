import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const username = "12345678901";
  const usernameReg = /^[a-zA-Z0-9][\w-]{0,9}$/;
  console.log(usernameReg.test(username));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen24!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
