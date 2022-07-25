import "./Search.css";
import { Link } from "react-router-dom";
import filterIcon from "../../../assets/images/icons/Filter.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
    return (
        <section className="searchSec">
            <div className="searchArea">
                <Link to={"#"} className="filterIcon">
                    <img src={filterIcon} alt="filter" />
                </Link>
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