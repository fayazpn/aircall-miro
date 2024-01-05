import React from 'react';
import { useGetActivities } from '../../hooks/hooks.js';
import FallbackLoading from '../loading/FallbackLoading.jsx';
import Empty from '../shared/Empty.jsx';
import Error from '../shared/Error.jsx';
import MemoizedCallCard from './CallCard.jsx';

const MainSection = () => {
  const { activities, isLoading, isError } = useGetActivities();

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <FallbackLoading />;
  }

  if (activities.length === 0) {
    return <Empty />;
  }

  return (
    <React.Fragment>
      {activities.map((activity) => (
        <MemoizedCallCard key={activity.id} {...activity} />
      ))}
    </React.Fragment>
  );
};

export default MainSection;
