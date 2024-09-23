import React from 'react';
import { BlogPost as BlogPostType } from '../types';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p className="date">Created: {new Date(post.created_at).toLocaleDateString()}</p>
      <p className="date">Updated: {new Date(post.updated_at).toLocaleDateString()}</p>
      <img src={post.photo_url} alt={post.title} className="blog-image" />
      <div className="content">{post.description}</div>
    </div>
  );
};

export default BlogPost;