import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div><h1>dpmfolio react cli</h1></div>
  }
}

let container = document.getElementById('app');

ReactDOM.render(<App/>, container);