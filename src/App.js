import React from "react";
import "./style.css";

function Title() {
  return <p className="title">Cucara Chat app [followed antennas here]</p>;
}

function Welcome(props) {
  return <h3>Hello, {props.name}</h3>;
}

function MessageBoard() {
  return (
    <ul className="messageboard">
      <li>message1 message.id.1 antenna.id.1 cucaId.1</li>
      <li>message2 message.id.2 antenna.id.2 cucaId.2</li>
      <li>message2 message.id.3 antenna.id.3 cucaId.3</li>
      <div classname="justlanded">
        <Welcome name="2-fast-2-sprotch" />
        <Welcome name="xXdarkcrawlerXx" />
        <Welcome name="Elon Chplutchk" />
      </div>
    </ul>
  );
}

function RadioBox() {
  return (
    <form
    className="radioboxform">
    <input
        placeholder="Type message and froutch antennas |_>"
        type="text" />
    </form>
  )
}

export default function App() {
  return (
    <div className="app">
      <Title />
      <MessageBoard />
      <RadioBox/>
    </div>
  );
}
