// TrackingBar.jsx
import React, { useState, useEffect } from 'react';
import './TrackingBar.css'; // Import CSS file for styling

const TrackingBar = () => {
    // Enabling state for the CurrentStatusIndex
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  //set duration until next status is selected
  const durations = [5000, 5000, 15000, 5000]; 

  // Setting the statuses that our tracking bar will use
  const statuses = ['Order Received', 'Processing', 'Out for Delivery', 'Delivered'];

  // function that will advance the status index and move to the next status
  // if currentStatusIndex is less than 'statuses.length minus 1' then increment
  // current status index 
  const handleAdvanceStatus = () => {
    if (currentStatusIndex < statuses.length - 1) {
      setCurrentStatusIndex(currentStatusIndex + 1);
    }
  };


// We're using useEffect to run the handleAdvanceStatus when the page is first loaded
// this will automagically set the timeouts based on the index of the currentStatus
// The clearTimeout function is returned from the effect cleanup function to clear the 
// timeout when the component unmounts or when currentStatusIndex or durations change.
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
