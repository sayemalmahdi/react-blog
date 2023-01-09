import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState('Sayem')
  const [isPending, setIsPending] = useState(true); 

  useEffect(() =>{
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      })
    }, 1000);
  }, []);

  return (
    <div className="home">
       {isPending && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/> }
    </div> 
  )
}

export default Home
