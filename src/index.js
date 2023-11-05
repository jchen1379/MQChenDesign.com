import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from "./Components/Navigation/NavBar";
import {ContentDisplayArea} from "./Components/Layout/ContentDisplayArea";
import {Footer} from "./Components/Navigation/Footer";
import {PageRouter} from "./Components/Navigation/NavBarRouterSwitch";

ReactDOM.render(
  <React.StrictMode>
    <ContentDisplayArea>
      <NavBar/>
      <PageRouter/>
      <Footer/>
    </ContentDisplayArea>
  </React.StrictMode>,
  document.getElementById('root')
);