import React from 'react'
import "./BlogItem.scss"
import { Link, useNavigate } from 'react-router-dom'

function BlogItem({item,id}) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/blog/${id}`);
  }
  return (
      <div className="blog-card-item" onClick={()=> handleNavigate()}>
        <img src={item?.fileName} alt="Blog 1" className="blog-image" />
        <div className="blog-details">
          <p className="blog-date">{item?.date || 'N/A'}</p>
          <h3 className="blog-title">{item?.title}</h3>
          <p className="blog-description">{item?.content}</p>
        </div>
      </div>
  )
}

export default BlogItem