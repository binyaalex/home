import "./Search.css";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import filterIcon from "../../../assets/images/icons/Filter.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "../../specialists/filter/Filter";

const Search = () => {
  const [showfilter, setShowfilter] = useState(false);

  const [showdrp, setShowdrp] = useState(false);

  const [showshortdrp, setShowshortdrp] = useState(false);

  const messagesEndRef = useRef();

  const messagesEndRef1 = useRef();

  const scrollToBottom = () => {
    messagesEndRef1.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
        <section className="searchSec">
            <div className="searchArea">
                <Link 
                    to={"#"} 
                    className="filterIcon"
                    onClick={() => {
                        setShowfilter(!showfilter);
                        if (showfilter) {
                            scrollToTop();
                        } else {
                            scrollToBottom();
                        }
                    }}
                >
                    <img src={filterIcon} alt="filter" />
                </Link>

                <Filter
                    showfilter={showfilter}
                    setShowfilter={setShowfilter}
                    scrollToTop={scrollToTop}
                    scrollToBottom={scrollToBottom}
                    showdrp={showdrp}
                    setShowdrp={setShowdrp}
                    showshortdrp={showshortdrp}
                    setShowshortdrp={setShowshortdrp}
                    messagesEndRef1={messagesEndRef1}
                />

                <Link to={"#"} className="locationIcon">
                    <LocationOnIcon />
                </Link>
                <div className="searchForm">
                    <SearchIcon className="SearchImg" />
                    <input
                    type="search"
                    name="search"
                    id="search"
                    className="inputSearch"
                    placeholder="חיפוש"
                    />
                </div>
            </div>
        </section>
    )
}

export default Search