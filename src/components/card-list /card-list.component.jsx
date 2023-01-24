import { Component } from "react";
import CardCl from "../card/card.component";
import "./card-list.style.css";

class CardListCl extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardCl monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardListCl;
