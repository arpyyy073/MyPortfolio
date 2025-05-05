import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Use Link instead of <a>
import '../assets/style/myblog.css';
import blog1 from "../assets/images/city3.jpg"
import blog2 from "../assets/images/sbecc-subic.jpg"
import blog3 from "../assets/images/groupmuseum.jpg"
import blog4 from "../assets/images/hytec2.jpg"
import blog5 from "../assets/images/LRT2.jpg"
import blog6 from "../assets/images/sit.jpg"
import blog7 from "../assets/images/nightmarket.jpg"


const posts = [
  {
    id: 1,
    title: 'Day 1 - City Tour',
    date: 'April 7, 2025',
    excerpt: 'Luneta - Fort Santiago - SM MOA',
    image: blog1,
  },
  {
    id: 2,
    title: 'Day 2 - Subic',
    date: 'April 8, 2025',
    excerpt: 'SBECC MUSEUM - Subic Police Station - Subic Free Port',
    image: blog2,
  },
  {
    id: 3,
    title: 'Day 3 - National Museum of Natural History',
    date: 'April 9, 2025',
    excerpt: 'Natural History Museum - Quezon Shrine - Presidential Car Museum',
    image: blog3,
  },
  {
    id: 4,
    title: 'Day 4 - Hytec Power Inc.',
    date: 'April 10, 2025',
    excerpt: 'Bangko Sentral - Hytec Power Inc.',
    image: blog4,
  },
  {
    id: 5,
    title: 'Day 5 - LRT-LINE 2',
    date: 'April 11, 2025',
    excerpt: 'MMDA - LRT-LINE 2',
    image: blog5,
  },
  {
    id: 6,
    title: 'Day 6 - Bound to Baguio',
    date: 'March 12, 2025',
    excerpt: 'Strawberry Farm - Chinese Bell Church - Mines View Park',
    image: blog6,
  },
  {
    id: 7,
    title: 'Day 7 - Baguio Night Market',
    date: 'March 13, 2025',
    excerpt: 'Burnham Park - Baguio Night Market',
    image: blog7,
  },
];

const MyBlog = () => {
  return (
    <div className="blog-section">
      <h2>My Blog</h2>
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img
              src={post.image}
              alt={post.title}
              className="post-image"
            />
            <h3 className="post-title">{post.title}</h3>
            <p className="post-date">{post.date}</p>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link to={`/blogdetail/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
