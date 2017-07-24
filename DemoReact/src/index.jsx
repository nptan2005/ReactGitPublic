import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello.jsx";
import App from "./TestComponent/App.jsx";
import AppTest from "./TestBootstrap/AppTest.jsx";
import Clock from "./TestBootstrap/Clock.jsx";


ReactDOM.render(
    <Hello input="TTTTTTT" />,
    document.getElementById('root')
);

ReactDOM.render(
    <App input="LLLLLL"/>,
    document.getElementById('app')
);

ReactDOM.render(
    <AppTest input="Click me!" />,
    document.getElementById('here')
);
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('tick')
  );
}

setInterval(tick, 1000);

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const elementWelcome = <Welcome name="Sara" />;
ReactDOM.render(
	elementWelcome,
	document.getElementById('welcome')
);


ReactDOM.render(<Clock />, document.getElementById('clock'));


	
