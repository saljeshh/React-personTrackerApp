import React, { Component } from "react";
import Person from "./Components/Person";
import "./App.css";

export class Practise extends Component {
  state = {
    persons: [
      { id: "1", name: "saljesh", age: 21 },
      { id: "2", name: "annika", age: 23 },
      { id: "3", name: "saugat", age: 22 },
    ],
    showPerson: false,
  };

  // button to show data
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;

    this.setState({
      showPerson: !doesShow,
    });
  };

  // to bind the input
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    console.log(personIndex);

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  //delete person handler
  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    console.log(index, persons);
    this.setState({ persons: persons });
  };

  // style
  styles = {
    backgroundColor: "Yellow",
    font: "inherit",
    border: "1px solid white",
    cursor: "pointer",
    padding: "5px 10px",
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                delete={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Person Tracker</h1>
        <p>click below to see</p>
        <button onClick={this.togglePersonHandler} style={this.styles}>
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Practise;
