import axios from 'axios';
import { URL } from './URL';

const BASE_URL = `${URL}/projectsAHT`;

// Function to get all products
export const getAllProjectsAHT = async () => {
  try {
    const response = await axios.get(`${BASE_URL}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
