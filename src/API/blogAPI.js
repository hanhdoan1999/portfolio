import axios from 'axios';
import { URL } from './URL';

const BASE_URL = `${URL}/posts`;

// Function to get all products
export const getAllBlogs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Function to get a single product by ID
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};
