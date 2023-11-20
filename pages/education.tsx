import React from 'react';

interface EducationProps {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
}

const Education: React.FC<EducationProps> = ({ school, degree, fieldOfStudy, startDate, endDate, description }) => {
  return (
    <div>
      <h2>{school}</h2>
      <h3>{degree} in {fieldOfStudy}</h3>
      <p>{startDate} - {endDate}</p>
      <p>{description}</p>
    </div>
  );
};

export default Education;