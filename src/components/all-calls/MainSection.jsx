import React, { useEffect } from 'react';
import { getActivities } from '../../api/callAPI.js';
import CallCard from './CallCard.jsx';

const MainSection = () => {
  useEffect(() => {
    const posts = getActivities();
    console.log(posts);
  }, []);
  return (
    <div>
      <CallCard />
    </div>
  );
};

export default MainSection;
