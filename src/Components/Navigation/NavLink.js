import React from 'react';

export const NavLink = ({path, children}) => {
  const pathname = window.location.pathname.toUpperCase();
  const className = ((pathname.includes(children)) || (pathname==="/" && children==="GRAPHIC DESIGN"))?
    "navlink active":
    "navlink";
  return (
    <a className={className} href={path}>
      {children}
    </a>
  )
}

export const MobileNavLink = ({path, children}) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a className="mobile-navlink navlink"
       data-toggle="collapse"
       data-target="#mobile-navbar"
       href={path}
       onClick={onClick}
    >
      {children}
    </a>
  )
}

export const ProjectNavLink = ({path, children}) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  const className = (path === null) ?
    "project-display-navlink project-display-navlink-disabled"
    :
    "project-display-navlink";

  return (
    <a className={className} href={path} onClick={onClick}>
      {children}
    </a>
  )
}