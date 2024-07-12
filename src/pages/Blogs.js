import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getAllBlogs } from "../API/blogAPI";
import BlogItem from "../components/BlogItem/BlogItem";
import "../styles/pages/Blogs.scss";
import Loading from "../components/Loading/Loading";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getAllBlogs();
        setBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <h2>Blogs - This section is currently under development, I apologize for the inconvenience </h2>
      <div className="blogs">
        {Object.keys(blogs)?.map((key, index) => {
          const blog = blogs[key];
          return <BlogItem item={blog} key={index} id={key}/>;
        })}
      </div>
    </Container>
  );
}

export default Blogs;
