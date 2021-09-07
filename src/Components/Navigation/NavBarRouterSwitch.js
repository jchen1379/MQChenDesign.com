import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import {DesignPage} from "../../Pages/DesignPage";
import {PhotographyPage} from "../../Pages/PhotographyPage";
import {AboutPage} from "../../Pages/AboutPage";

export function PageRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DesignPage}/>
        <Route path="/graphic-design" component={DesignPage}/>
        <Route path="/photography" component={PhotographyPage}/>
        <Route path="/about" component={AboutPage}/>
      </Switch>
    </Router>
  )
}