import { useEffect, useState } from 'react';
import { getActivities } from '../api/callAPI';

export const useGetActivities = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const { data, error } = await getActivities();
        if (!error) {
          setActivities(data);
        } else {
          console.error('Error fetching activities:', error);
          setIsError(true);
        }
      } catch (error) {
        console.error('Error fetching activities:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return { activities, isError, isLoading };
};
