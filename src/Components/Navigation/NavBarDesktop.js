import React from "react";
import {NavLink} from "./NavLink";

export function NavBarDesktop() {
  return (
    <div className="header">
      <div className="name-brand">
        <a className="name" href="/">
          <img src={require("../../Projects/mq+logo.png").default} alt=""/>
        </a>
        <span className="title">Graphic Designer</span>
      </div>
      <div className="nav-bar">
        <NavLink path="/">GRAPHIC DESIGN</NavLink>
        <NavLink path="/photography">PHOTOGRAPHY</NavLink>
        <NavLink path="/about">ABOUT</NavLink>
      </div>
    </div>
  );
}