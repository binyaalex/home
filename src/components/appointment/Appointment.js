import React, { useState } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Appointment.css";

import DoctorList from "./doctorList/DoctorList";
import ThisWeek from "./weekList/ThisWeek";
import MeetBtn from "./meet/MeetBtn";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreTimeIcon from "@mui/icons-material/MoreTime";

function Appointment() {
  const [startDate, setStartDate] = useState(new Date());

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  const [timeCalendarIsOpen, setTimeCalendarIsOpen] = useState(false);

  return (
    <>
      <div className="PageDad">
        <div className="appointment_pages">
          <div className="searchbox_container">
            <div className="searchbox_heading">
              <KeyboardArrowDownIcon />
              <h2>בחר ספר</h2>
            </div>

            <div className="searchbox">
              <input id="search" type="search" placeholder="חפשי לפי שם " />
              <SearchIcon className="search_icon" />
            </div>
          </div>

          <DoctorList />

          <div className="dateselector_container">
            <div className="dateselector_heading">
              <KeyboardArrowDownIcon />
              <h2>בחר תאריך</h2>
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
              <KeyboardArrowDownIcon />
              <h2>בחר שעה</h2>
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

          {/* <div className="timeselectoroption_container">
            <MeetBtn text="פגישה" />
            <MeetBtn text="שיחת וידאו" />
            <MeetBtn text="שיחת טלפון" />
          </div> */}
          
          <div className="box_btn">
            <div className="container">
              <div className="btn_area">
                <Link to="#" className="go_btn">
                  שלח
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
