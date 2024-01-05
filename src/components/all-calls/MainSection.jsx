import React from 'react';
import { useGetActivities } from '../../hooks/hooks.js';
import FallbackLoading from '../loading/FallbackLoading.jsx';
import Error from '../shared/Error.jsx';
import CallCard from './CallCard.jsx';

const MainSection = () => {
  const { activities, isLoading, isError } = useGetActivities();

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <FallbackLoading />;
  }

  return (
    <React.Fragment>
      {activities.map((activity) => (
        <CallCard key={activity.id} {...activity} />
      ))}
    </React.Fragment>
  );
};

export default MainSection;
