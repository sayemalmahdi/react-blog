import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('Sayem')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() =>{
    console.log('From UseEffect Hooks');
    // console.log(blogs);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Mahdi')}>Chande Name</button>
      <p>{name}</p>

      {/* Showing only Mario's Blog */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's Blog" handleDelete={handleDelete}/> */}

    </div> 
  )
}

export default Home
