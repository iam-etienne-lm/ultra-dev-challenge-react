import React from "react";
import "./style.css";

function Title() {
  return <p className="title">Cucara Chat app [followed antennas here]</p>;
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function App() {
  return (
    <div className="app">
      <Title />
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    </div>
  );
}
