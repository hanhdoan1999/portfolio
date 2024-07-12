import axios from 'axios';
import { URL } from './URL';

const BASE_URL = `${URL}/projects`;

// Function to get all products
export const getAllProjects = async () => {
  try {
    const response = await axios.get(`${BASE_URL}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

// Function to add projects
export const createProject = async (project) => {
    try {
      const response = await axios.post(`${BASE_URL}.json`,project);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  };

// Function to get a single product by ID
export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    throw error;
  }
};
