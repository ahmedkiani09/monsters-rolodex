import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import CardList from "./components/card-list /card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchQueryStr = event.target.value.toLowerCase();
    setSearchQuery(searchQueryStr);
    console.log(searchQueryStr);
  };

  useEffect(() => {
    // this hook allows the filtered monsters to be render only when the search query is changed or monster array is changed.
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchQuery);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchQuery]);

  return (
    <div className="App">
      <h1 className="app-title">MONSTERS ROLODEX</h1>
      <SearchBox
        className="monsters-search-box"
        placeHolder="search monsters"
        searchChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     // 1. super method:
//     super();
//     // 2. data state:
//     this.state = {
//       monsters: [],
//       searchQuery: "",
//       // filteredMonsters: [], // this way can also be used in which we kkep filtered monsters based on the search results and later use this array for the state changing for the react and map over the array to take them as results.
//     };
//   }

//   async sendRequestApi() {
//     try {
//       const url = "https://jsonplaceholder.typicode.com/users";

//       const response = await fetch(url);
//       if (!response.ok) throw new Error("something went wrong");

//       const users = await response.json();
//       if (!users) return;
//       return users;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async componentDidMount() {
//     try {
//       const users = await this.sendRequestApi();

//       this.setState(() => {
//         return {
//           monsters: users,
//         };
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   onSearchChange = (event) => {
//     const searchQuery = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchQuery };
//     });
//   };

//   render() {
//     // 1. variables declaration using destructuring:
//     const { monsters, searchQuery } = this.state;
//     const { onSearchChange } = this;

//     // 2. filtered search:
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchQuery);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">MONSTERS ROLODEX</h1>
//         <SearchBoxCl
//           className="monsters-search-box"
//           placeHolder="search monsters"
//           searchChangeHandler={onSearchChange}
//         />
//         <CardListCl monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
