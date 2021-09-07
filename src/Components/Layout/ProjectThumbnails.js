import React from 'react';

export const ProjectThumbnails = ({children}) => {
  return (
    <div className="project-thumbnail" id="page">
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
}