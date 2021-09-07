import React from 'react';
import {NavBarMobile} from "./NavBarMobile";
import {NavBarDesktop} from "./NavBarDesktop";

export function NavBar() {
  return (
    <>
      <NavBarMobile/>
      <NavBarDesktop/>
    </>
  )
}
