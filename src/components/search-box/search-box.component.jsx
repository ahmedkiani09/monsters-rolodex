import "./search-box.style.css";

const SearchBox = ({ className, placeHolder, searchChangeHandler }) => (
  <input
    className={`search-box ${className} `}
    type="search"
    placeholder={placeHolder}
    onChange={searchChangeHandler}
  />
);

export default SearchBox;
