import React from 'react';
import {ProjectNavLink} from "../Navigation/NavLink";

export const ProjectNavBar = ({backTo, backToPath, prev, next}) => {
  return (
    <div className="project-display-navbar">
      <ProjectNavLink path={backToPath}>Back to {backTo}</ProjectNavLink>
      <div>
        <ProjectNavLink path={prev}>prev</ProjectNavLink>
        &nbsp;/&nbsp;
        <ProjectNavLink path={next}>next</ProjectNavLink>
      </div>
    </div>
  )
}