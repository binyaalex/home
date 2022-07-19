import React, { useState } from "react";
import Head from "../repeats/head/Head";
import DoctorList from "./doctorList/DoctorList";
import ThisWeek from "./weekList/ThisWeek";
import MeetBtn from "./meet/MeetBtn";
import "./Appointment.css";
import ShapIcon from "../../assets/images/icons/Shape.png";
import CheckCircleIcon from "../../assets/images/icons/Checkcircle.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import arrowDown from "../../assets/images/icons/downArrow.jpg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreTimeIcon from "@mui/icons-material/MoreTime";

function Appointment() {
  const [startDate, setStartDate] = useState(new Date());

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  const [timeCalendarIsOpen, setTimeCalendarIsOpen] = useState(false);

  return (
    <>
      <div className="PageDad">
        <div className="page appointment_pages">
            <Head text="Make an Appointment" />
          <div className="searchbox_container">
            <div className="searchbox_heading">
              <img src={arrowDown} className="arrowDown" alt="arrow" />
              <h2>1. Choose a services</h2>
            </div>

            <div className="searchbox">
              <input
                id="search"
                type="search"
                placeholder="Search for name or services"
              />
              <SearchIcon />
            </div>
          </div>

          <DoctorList />

          <div className="dateselector_container">
            <div className="dateselector_heading">
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
              <h2>2. Choose the date</h2>
            </div>
            <div
              className="dateselector"
              onClick={() => setCalendarIsOpen(!calendarIsOpen)}
            >
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                id="dateselector"
                placeholderText=" Open calendar"
                open={calendarIsOpen}
                onClickOutside={() => setCalendarIsOpen(!calendarIsOpen)}
              />

              <CalendarTodayIcon />
            </div>
          </div>

          <ThisWeek />

          <div className="timeselector_container">
            <div className="timeselector_heading">
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
              <h2>3. Choose time</h2>
            </div>
            <div
              className="timeselector"
              onClick={() => setTimeCalendarIsOpen(!timeCalendarIsOpen)}
            >
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="h:mm aa"
                open={timeCalendarIsOpen}
                onClickOutside={() =>
                  setTimeCalendarIsOpen(!timeCalendarIsOpen)
                }
              />
              <MoreTimeIcon />
            </div>
          </div>

          <div className="timeselectoroption_container">
            <MeetBtn text="10:00" />
            <MeetBtn text="12:00" />
            <MeetBtn text="15:00" />
            <MeetBtn text="16:00" />
          </div>
          <div className="box_btn">
            <div className="container">
              <div className="btn_area">
                <Link to="/confirm" className="go_btn">
                  שלחי
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
