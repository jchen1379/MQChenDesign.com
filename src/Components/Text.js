import React from 'react';
import '../Style/style.css';

export const ProjectDisplayTitle = ({children}) => {
  return (
    <h1 className="project-display-title">{children}</h1>
  )
};

export const ProjectDisplayDescription = ({children}) => {
  return (
    <p className="project-display-description">{children}</p>
  )
};

export const ProjectDisplayFootNote = ({children}) => {
  return (
    <p className="project-display-note">{children}</p>
  )
};

export const ProjectDisplayInfoRight = ({projectTitle, projectDescription, children}) => {
  return (
    <div className="project-display-info-right">
      <div className="project-display-title-right">{projectTitle}</div>
      <ProjectDisplayDescription>{projectDescription}</ProjectDisplayDescription>
      {children}
    </div>
  )
}

export const ProjectDisplaySubtitleLeft = ({subtitle}) => {
  return (
    <p className="project-display-subtitle-left">{subtitle}</p>
  )
}

export const ProjectDisplaySubtitleCenter = ({subtitle}) => {
  return (
    <p className="project-display-subtitle-center">{subtitle}</p>
  )
}

export const ProjectDisplaySubtitleLeftSmall = ({subtitle}) => {
  return (
    <p className="project-picture-subtitle">{subtitle}</p>
  )
}