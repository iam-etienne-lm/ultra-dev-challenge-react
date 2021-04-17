import React, {useState} from "react";
import "./style.css";

const MOCK_DATA = [
  {
    cucId: "xXdarkcrawlerXx",
    text: "found some stuff, left a path",
    antennas: "food"
  },
  {
    Id: "Elon Chplutchk",
    text: "sell doge",
    antennas: "crypto"
  }
];

const Title = () => {
  return <p className="title">Cucara Chat app "props.antennas.id"</p>;
}

const Welcome = (props) => {
  return <h3>Hello, {props.name}</h3>;
}

const MessageBoard = () => {
  return (
    <div>
      <ul className="messageboard1">
        <li>message1 message.id.1 antenna.id.1 cucId.1</li>
        <li>message2 message.id.2 antenna.id.2 cucId.2</li>
        <li>message2 message.id.3 antenna.id.3 cucId.3</li>
        <div classname="justlanded">
          <Welcome name="2-fast-2-sprotch" />
          <Welcome name="xXdarkcrawlerXx" />
          <Welcome name="Elon Chplutchk" />
        </div>
      </ul>
      <ul className="messageboard">                 
              {/*{this.props.messages.map(message => {
                return (
                <li key={message.id}>
                  <div>
                    {message.cucId}
                  </div>
                  <div>
                    {message.text}
                  </div>
                </li>
                
              )
            })}
            */}
      </ul>
    </div>
  );
}

const RadioBox = () => {
  return (
    <form className="radioboxform">
      <input placeholder="Type message and froutch antennas |_>" type="text" />
    </form>
  );
}

const App = () => {
  const [messages, setMessages] = React.useState(MOCK_DATA)

  return (
    <div className="app">
      <Title />
      <MessageBoard setMessages ={() =>
        this.setState=((state) => {
          return {messages: state.messages};
        })
      }/>
      <RadioBox />
    </div>
  );
}

export default App;
