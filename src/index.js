import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div><h1>dpmfolio <i class="fal fa-home"></i></h1></div>
  }
}

let container = document.getElementById('app');

ReactDOM.render(<App/>, container);