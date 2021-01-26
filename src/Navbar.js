import React from 'react';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Project Blog</h1>
      <div className="links">
        <a href="/">home</a>
        <a href="/create">create new blog</a>
      </div>
    </nav>
   );
}
 
export default Navbar;