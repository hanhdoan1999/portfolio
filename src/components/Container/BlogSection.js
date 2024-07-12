import React from 'react';
import './BlogSection.scss';
import blogImage1 from '../../assets/images/Image.png';
import blogImage2 from  '../../assets/images/Image (1).png';
import blogImage3 from  '../../assets/images/Image (2).png';

const BlogSection = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <p className="blog-title">Blog</p>
        <a href="#" className="see-more">See the full blog <span className="arrow">→</span></a>
      </div>
      <h2 className="heading ">Find the latest of my writing here</h2>
      <div className="blog-content">
        <div className="blog-card">
          <img src={blogImage1} alt="Blog 1" className="blog-image" />
          <div className="blog-details">
            <p className="blog-date">October 9th, 2022 — 7 min read</p>
            <h3 className="blog-title">Make Maintainable Workarounds with Codegen</h3>
          </div>
        </div>
        <div className="blog-card">
          <img src={blogImage2} alt="Blog 2" className="blog-image" />
          <div className="blog-details">
            <p className="blog-date">September 19th, 2022 — 7 min read</p>
            <h3 className="blog-title">useEffect vs useLayoutEffect</h3>
          </div>
        </div>
        <div className="blog-card">
          <img src={blogImage3} alt="Blog 3" className="blog-image" />
          <div className="blog-details">
            <p className="blog-date">July 15th, 2022 — 7 min read</p>
            <h3 className="blog-title">React Hooks: What’s Going to Happen to Render Props?</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
