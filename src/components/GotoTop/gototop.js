import React from "react";

function Gototop() {
  const gobtn = () => {
    window.scroll({
      top: 0,
      left: 0,
      button: "smooth",
    });
  };
  return (
    <button class="btn btn-primary 	bi bi-arrow-up-square-fill" onClick={gobtn}>
      <i class="fa-solid fa-square-up"></i>
    </button>
  );
}

export default Gototop;
