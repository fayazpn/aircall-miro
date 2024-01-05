import axios from 'axios';
import { format, formatDuration } from 'date-fns';
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

export const formatTime = (dateString) => {
  const date = new Date(dateString);

  // Use the 'h:mm aa' format for 12-hour time with AM/PM
  const formattedTime = format(date, 'h:mm aa');

  return formattedTime;
};

export const formatSecondsToMinutes = (seconds) => {
  const duration = seconds * 1000; // Convert seconds to milliseconds
  const formattedDuration = formatDuration({ minutes: duration });

  return formattedDuration;
};
