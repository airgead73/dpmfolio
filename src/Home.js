import React, { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }    
  ]);

  const handleDelete = (_id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== _id);
    setBlogs(newBlogs);
  }

  useEffect(() => {

    console.log('use effect ran');
    console.log(blogs);

  });

 return ( 
    <div className="home">
      
      <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/>

    </div>
   );
}
 
export default Home;