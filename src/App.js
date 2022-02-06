import React, { Component } from "react";
import Card from "./Card";
import Info from "./Info";

class App extends Component {
  // constructor(x, y, z) {
  //   super(someArguments);
  // }

  render() {
    return (
      <div className="App">
        <Card
          name="Garima"
          age={21}
          YOE={10}
          geek="geekster"
          hello="geekster Guys"
        />
        <Card name="Shikha" age={22} YOE={100000} geek="Garima"/>
        <Card name="Dipankar" age={23} YOE={100000} geek="Garima" />
        <Card name="Kaish" age={22} YOE={100000} geek="Garima" />
      </div>
    );
  }
}

// new Card("geekster", age:26, YOE:10)

export default App;

// JSX = JS XML