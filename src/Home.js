import React from 'react';

const Home = () => {

  const handleClick = (e) => {
    console.log('hello', e);
  }

  const handleClickAgain = (_name, e) => {
    console.log('hello ' + _name);
    console.log(e.target)
  }  

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('joe', e)}>Click again</button>
    </div>
   );
}
 
export default Home;