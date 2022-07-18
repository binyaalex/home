import React from "react";

const MeetBtn = ({ text }) => {
  const pick = (e) => {
    const choosen = e.target;
    const options = document.querySelectorAll(".timeselectoroption");
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("choosen");
    }
    choosen.classList.add("choosen");
  };

  return (
    <div onClick={pick} className="timeselectoroption col-4">
      {text}
    </div>
  );
};

export default MeetBtn;
