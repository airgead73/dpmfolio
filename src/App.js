import React from 'react';

function App() {

  const title = 'Welcome to the new blog';
  const likes = 50

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>liked { likes } times</p>
      </div>      
    </div>
  )
}

export default App;