const DayOption = ({ day, date, i }) => {
  let divClassName = "dateselectoroption";
  let dayClassName = "dateselectoroptions_lable";
  let dateClassName = "dateoptions";
  if (i === 4) {
    divClassName = "dateselectoroption dateselectoroptionActive";
    dayClassName = "dateselectoroptions_lable dateselectoroptions_lableActive";
    dateClassName = "dateoptions dateoptionsActive";
  }

  const pick = (e) => {
    const newChoosen = e.target.parentElement;
    const oldChoosen = document.querySelector(".dateselectoroptionActive");
    oldChoosen.classList.remove("dateselectoroptionActive");
    oldChoosen.firstChild.classList.remove("dateselectoroptions_lableActive");
    oldChoosen.lastChild.classList.remove("dateoptionsActive");
    newChoosen.classList.add("dateselectoroptionActive");
    newChoosen.firstChild.classList.add("dateselectoroptions_lableActive");
    newChoosen.lastChild.classList.add("dateoptionsActive");
  };

  return (
    <div className={divClassName}>
      <label onClick={pick} htmlFor="dateoptions" className={dayClassName}>
        {day}
      </label>
      {/*<br />*/}
      <div onClick={pick} className={dateClassName}>
        {date}
      </div>
    </div>
  );
};

export default DayOption;
