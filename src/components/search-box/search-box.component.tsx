import { ChangeEvent } from "react";
import "./search-box.style.css";

type SearchBoxProps = {
  className: string;
  placeHolder?: string;
  searchChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeHolder,
  searchChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className} `}
    type="search"
    placeholder={placeHolder}
    onChange={searchChangeHandler}
  />
);

export default SearchBox;
