import React from 'react';

export const ProjectThumbnail = ({apiBase: urlBase, projectName, projectTitle, projectCoverUrl}) => {
  return (
    <ProjectThumbnailLink path={`${urlBase}/${projectName}`}>
      <div className="project-cover">
        <img src={projectCoverUrl} alt=""/>
      </div>
      <span className="project-title">{projectTitle}</span>
    </ProjectThumbnailLink>
  )
}

export const ProjectThumbnailSpacer = () => {
  return <div className="project"/>
}

const ProjectThumbnailLink = ({path, children}) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a className="project" href={path} onClick={onClick}>
      {children}
    </a>
  )
}