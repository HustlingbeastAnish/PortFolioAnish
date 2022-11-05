import React from "react";

function gototop() {
  const gobtn = () => {
    window.scroll();
  };
  return (
    <button class="btn btn-primary 	bi bi-arrow-up-square-fill" onClick={gobtn}>
      Button
    </button>
  );
}

export default gototop;
