import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { fetchBlogPost } from '../services/api';
import { BlogPost as BlogPostType } from '../types';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (id) {
        const fetchedPost = await fetchBlogPost(id);
        setPost(fetchedPost);
      }
    };
    loadPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-detail-page">
      <BlogPost post={post} />
    </div>
  );
};

export default BlogDetailPage;