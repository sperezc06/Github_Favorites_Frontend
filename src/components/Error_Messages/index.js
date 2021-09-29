import React from "react";
import "./style.css";

function ErrorMsg({ msg, clear }) {
  return (
    <div className="errorMsg">
      <button className="errorMsg-cancel" onClick={clear}>
        X
      </button>
      <span>{msg}</span>
    </div>
  );
}

export default ErrorMsg;
