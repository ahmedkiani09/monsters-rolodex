import { Component } from "react";
import "./search-box.style.css";

class SearchBoxCl extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className} `}
        type="search"
        placeholder={this.props.placeHolder}
        onChange={this.props.searchChangeHandler}
      />
    );
  }
}

export default SearchBoxCl;
