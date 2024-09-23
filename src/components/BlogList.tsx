import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post._id} className="blog-card">
          <h2>{post.title}</h2>
          <p>{post.description.substring(0, 100)}...</p>
          <Link to={`/post/${post._id}`} className="read-more">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;