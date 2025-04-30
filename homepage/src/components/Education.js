import React from 'react';

const Education = () => {
  return (
    <div style={cardStyle}>
    
      <h1>Education</h1>
      <ul>
        <li><strong>Bachelor of Science in information Technology</strong> - University of Cabuyao</li>
        <li><strong>Computer Servecing System</strong> Pulo National High School</li>
       
      </ul>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#f9f9f9',
  padding: '2rem', 
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default Education;
