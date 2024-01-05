import React from 'react';
import { useGetActivities } from '../../hooks/hooks.js';
import MemoizedCallCard from '../all-calls/CallCard.jsx';
import FallbackLoading from '../loading/FallbackLoading.jsx';
import Empty from '../shared/Empty.jsx';
import Error from '../shared/Error.jsx';

const ArchivedCallsSection = () => {
  const { activities, isLoading, isError } = useGetActivities();

  const archivedActivities = activities.filter(
    (activity) => activity.is_archived
  );

  if (archivedActivities.length === 0) {
    return <Empty />;
  }

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <FallbackLoading />;
  }

  return (
    <React.Fragment>
      {archivedActivities.map((activity) => (
        <MemoizedCallCard key={activity.id} {...activity} />
      ))}
    </React.Fragment>
  );
};

export default ArchivedCallsSection;
