import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import { fetchBlogPosts } from '../services/api';
import { BlogPost } from '../types';

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchBlogPosts();
      setPosts(fetchedPosts);
    };
    loadPosts();
  }, []);

  return (
    <div className="blog-list-page">
      <h1>Blog Posts</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogListPage;