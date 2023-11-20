import React from 'react';

interface ExperienceProps {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({ school, degree, fieldOfStudy, startDate, endDate, description }) => {
  return (
    <div>
      <h2>{school}</h2>
      <h3>{degree} in {fieldOfStudy}</h3>
      <p>{startDate} - {endDate}</p>
      <p>{description}</p>
    </div>
  );
};

export default Experience;