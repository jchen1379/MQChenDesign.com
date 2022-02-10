import React from 'react';
import {ProjectThumbnails} from "../Components/Layout/ProjectThumbnails";
import {ProjectThumbnail} from "../Components/Layout/ProjectThumbnail";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from "../Utils/ScrollToTop";
import {ProjectNavBar} from "../Components/ProjectDisplay/ProjectNavBar";
import {useLocation} from "react-router";
import {getCurrentProject, getNextProject, getPrevProject} from "./DesignPage";
import {photographyPageProjectList} from "./PhotographyPageProjectList";
import {recordVisitingData} from '../Utils/WebsiteTrafficMonitor';

const urlBase = '/photography';

const projectList = photographyPageProjectList.map(project => project.projectId);

export function PhotographyPage() {
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
            {photographyPageProjectList.map((project)=> (
              <Route exact
                     key={project.projectId}
                     path={`${urlBase}/${project.projectId}`}
                     component={project.component}/>
            ))}
          </Switch>
        </ScrollToTop>
      </Router>

      {location.pathname.includes('photography/') && (
        <ProjectNavBar backTo="Photography"
                       backToPath="/photography"
                       prev={getPrevProject(getCurrentProject(location.pathname), projectList)}
                       next={getNextProject(getCurrentProject(location.pathname), projectList)}/>
      )}

      <ProjectThumbnails>
        {photographyPageProjectList.map((project) => (
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
