import axios from 'axios';
import { BlogPost, ApiResponse } from '../types';

const API_BASE_URL = 'http://blog.test/api';



export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get(`${API_BASE_URL}/post`);
  return response.data.data; // Assuming the list response has a similar structure
};

export const fetchBlogPost = async (id: string): Promise<BlogPost> => {
  const response = await axios.get<ApiResponse>(`${API_BASE_URL}/post/${id}`);
  return response.data.data;
};