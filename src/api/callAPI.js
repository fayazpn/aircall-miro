import { API, handleApiError } from './utils';
export const getActivities = async () => {
  try {
    const { data } = await API.get('/activities');
    return { error: null, data };
  } catch (error) {
    return handleApiError(error);
  }
};
