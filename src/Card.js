import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  //   props = {name: 'geekster', age: 26, YOE: 10}

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1>this is my card</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis. Perferendis magnam vitae quo laudantium, laborum voluptate non natus sed?</p>
        <p>my name is {this.props.name}</p>
        <p>my age is {this.props.age}</p>
        <p>my years of exp is {this.props.YOE}</p>
        <p>hi {this.props.geek}</p>

        <p>hello {this.props.hello}</p>

        <hr />
      </div>
    );
  }
}

export default Card;