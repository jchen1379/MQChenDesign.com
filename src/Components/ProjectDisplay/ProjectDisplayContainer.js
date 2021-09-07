import React from 'react';

export const ProjectDisplayContainer = ({id, children}) => {
  return (
    <div className="project-display-window" id={id}>
      {children}
    </div>
  )
}

