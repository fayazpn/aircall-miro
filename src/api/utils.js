import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const API = axios.create({
  baseURL: BASE_URL,
});

export const handleApiError = async (error) => {
  try {
    const errorMessage = error || 'An unexpected error occured';
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error('An unexpected error occured');
  }
};
