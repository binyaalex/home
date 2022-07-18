import { React, useState } from "react";

import "./Filter.css";

import { Link } from "react-router-dom";

import FilterIcon from "../../../assets/images/filter/filter-icon.png";
import ArrowIcon from "../../../assets/images/filter/arrow-icon.png";

const Filter = (props) => {
  const [orderBy, setOrderBy] = useState();
  const [hospitalFilter, setHospitalFilter] = useState([]);

  const order_by = [
    {
      name: "ציון",
      value: "ציון",
    },
    {
      name: "אקראי",
      value: "אקראי",
    },
  ];

  const service_list = [
    {
      name: "תרפיה",
      value: "תרפיה",
    },
    {
      name: "קרדולוגיה",
      value: "קרדולוגיה",
    },
    {
      name: "אנדוקרינולוגיה",
      value: "אנדוקרינולוגיה",
    },
    {
      name: "מנתח",
      value: "מנתח",
    },
    {
      name: "גינקולוג",
      value: "גינקולוג",
    },
    {
      name: "נוירולוג",
      value: "נוירולוג",
    },
    {
      name: "דֶרמָטוֹלוֹגִיָה",
      value: "דֶרמָטוֹלוֹגִיָה",
    },
    {
      name: "אונוקולוגיה",
      value: "אונוקולוגיה",
    },
  ];

  const clearFilter = () => {
    setOrderBy("");
    var updatedList = [];
    setHospitalFilter(updatedList);
  };

  const addServiceFilter = (event) => {
    var updatedList = [...hospitalFilter];
    if (event.target.checked) {
      updatedList = [...hospitalFilter, event.target.value];
    } else {
      updatedList.splice(hospitalFilter.indexOf(event.target.value), 1);
    }
    setHospitalFilter(updatedList);
  };

  return (
    <>
      <div
        className={
          props.showfilter
            ? "filter-wrpper filter_section_search filter-wrapper-active"
            : "hide"
        }
        id="filter_section"
      >
        <div className="filter-icon-and-title-div">
          <span
            className="filter-icon d-flex justify-content-center p-3"
            onClick={() => {
              props.setShowfilter(!props.showfilter);
              if (props.showfilter) {
                props.scrollToTop();
              } else {
                props.scrollToBottom();
              }
            }}
          >
            <img src={FilterIcon} alt="filter" />
          </span>
          <div className="filter-title d-flex justify-content-between align-items-center p-3 px-4">
            <h4>סינון</h4>
            <Link to={"#"} className="filter-clear" onClick={clearFilter}>
              הראה הכל
            </Link>
          </div>
        </div>
        <div className="filter-container px-4">
          <div className="filter-item-list pt-4 pb-2">
            <div
              className="filter-name d-flex justify-content-between align-items-center"
              onClick={() => props.setShowshortdrp(!props.showshortdrp)}
            >
              <h5 className="filter-item-title py-3">סדר לפי</h5>
              <Link
                to={"#"}
                className={
                  props.showshortdrp
                    ? "arrow-icon arrow-icon-active"
                    : "arrow-icon"
                }
              >
                <img src={ArrowIcon} alt="arrow" />
              </Link>
            </div>

            {
              <div
                className={
                  props.showshortdrp
                    ? "filter-dropdown filter-drpdwn-active"
                    : "filter-dropdown"
                }
              >
                {order_by.map((el, i) => {
                  return (
                    <div
                      className="filter-item d-flex py-3 justify-content-between align-items-center"
                      key={i}
                    >
                      <p>{el.name}</p>
                      <input
                        type="radio"
                        id="order_by"
                        name="order_by"
                        value={el.value}
                        className="checkbox"
                        checked={orderBy && el.value == orderBy ? true : false}
                        onChange={() => setOrderBy(el.value)}
                      />
                    </div>
                  );
                })}
              </div>
            }
          </div>
          <div className="filter-item-list pt-4 pb-2">
            <div
              className="filter-name d-flex justify-content-between align-items-center"
              onClick={() => props.setShowdrp(!props.showdrp)}
            >
              <h5 className="filter-item-title py-3">מומחיות</h5>
              <Link
                to={"#"}
                className={
                  props.showdrp ? "arrow-icon arrow-icon-active" : "arrow-icon"
                }
              >
                <img src={ArrowIcon} alt="arrow" />
              </Link>
            </div>
            <div
              className={
                props.showdrp
                  ? "filter-dropdown filter-drpdwn-active"
                  : "filter-dropdown"
              }
            >
              {service_list.map((el, i) => {
                return (
                  <div
                    className="filter-item py-3 d-flex justify-content-between align-items-center"
                    key={i}
                  >
                    <p>{el.name}</p>
                    <input
                      type="checkbox"
                      id="service_filter"
                      name="service_filter"
                      value={el.value}
                      className="checkbox"
                      checked={
                        hospitalFilter && hospitalFilter.includes(el.value)
                          ? true
                          : false
                      }
                      onChange={addServiceFilter}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="filter-action d-flex justify-content-center py-4"
          ref={props.messagesEndRef1}
        >
          <button className="filter-btn">החל</button>
        </div>
      </div>
    </>
  );
};

export default Filter;