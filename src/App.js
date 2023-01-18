import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchQuery: "",
      // filteredMonsters: [], // this way can also be used in which we kkep filtered monsters based on the search results and later use this array for the state changing for the react and map over the array to take them as results.
    };
  }

  async componentDidMount() {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";

      const response = await fetch(url);
      if (!response.ok) throw new Error("something went wrong");

      const users = await response.json();
      if (!users) return;

      this.setState(
        () => {
          return {
            monsters: users,
          };
        },
        () => {
          console.log(this.state);
        }
      );
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchQuery);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="monster's name"
          onChange={(event) => {
            const searchQuery = event.target.value.toLowerCase();

            this.setState(() => {
              return { searchQuery };
            });
          }}
        />

        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name} </h1>;
        })}
      </div>
    );
  }
}

export default App;
