import Card from "../card/card.component.tsx";
import { Monster } from "../../App.tsx";
import "./card-list.style.css";

// 1. const monsters = props.monsters, 2. const { monsters } = props.
// * (there are two ways of defining monsters that are written above). but we can also use destructuring in the parameters of the function instead of defining each variable in the body. for more information see notes.

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
