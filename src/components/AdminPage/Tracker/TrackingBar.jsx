// TrackingBar.jsx
import React, { useState, useEffect } from 'react';
import './TrackingBar.css'; // Import CSS file for styling

const TrackingBar = ({ statuses, durations }) => {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  const handleAdvanceStatus = () => {
    if (currentStatusIndex < statuses.length - 1) {
      setCurrentStatusIndex(currentStatusIndex + 1);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleAdvanceStatus();
    }, durations[currentStatusIndex]);

    return () => clearTimeout(timeoutId);
  }, [currentStatusIndex, durations]);

  return (
    <div className="tracking-bar">
      {statuses.map((status, index) => (
        <div
          key={index}
          className={`status ${index === currentStatusIndex ? 'active' : ''}`}
        >
          {status}
        </div>
      ))}
    </div>
  );
};

export default TrackingBar;
