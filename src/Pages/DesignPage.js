import React from 'react';
import {ProjectThumbnails} from "../Components/Layout/ProjectThumbnails";
import {ProjectThumbnail} from "../Components/Layout/ProjectThumbnail";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from "../Utils/ScrollToTop";
import {ProjectNavBar} from "../Components/ProjectDisplay/ProjectNavBar";
import {useLocation} from "react-router";
import {designPageProjectList} from "./DesignPageProjectList";
import {recordVisitingData} from '../Utils/WebsiteTrafficMonitor';

const urlBase = '/graphic-design';

const projectList = designPageProjectList.map(project => project.projectId);

export function getPrevProject(currentProject, projectList) {
  const index = projectList.indexOf(currentProject);
  if (index === 0)
    return null;
  return projectList[index - 1];
}

export function getNextProject(currentProject, projectList) {
  const index = projectList.indexOf(currentProject);
  if (index === projectList.length - 1)
    return null;
  return projectList[index + 1];
}

export function getCurrentProject(path) {
  const tokens = path.split("/");
  return tokens[tokens.length - 1];
}

export function DesignPage() {
  const location = useLocation();

  React.useEffect(() => {
    recordVisitingData(getCurrentProject(location.pathname));
  });

  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path={urlBase}/>
            {designPageProjectList.map((project)=> (
              <Route exact
                     key={project.projectId}
                     path={`${urlBase}/${project.projectId}`}
                     component={project.component}/>
            ))}
          </Switch>
        </ScrollToTop>
      </Router>

      {location.pathname.includes('graphic-design/') && (
        <ProjectNavBar backTo="GRAPHIC DESIGN"
                       backToPath="/graphic-design"
                       prev={getPrevProject(getCurrentProject(location.pathname), projectList)}
                       next={getNextProject(getCurrentProject(location.pathname), projectList)}/>
      )}

      <ProjectThumbnails>
        {designPageProjectList.map((project) => (
          <ProjectThumbnail apiBase={urlBase}
                            key={project.projectId}
                            projectName={project.projectId}
                            projectTitle={project.projectTitle}
                            projectCoverUrl={project.projectCoverUrl}/>
          ))}
      </ProjectThumbnails>

    </>
  );
}