import * as React from "react";
import { Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { Home, Brand } from './header-components';
import { useState } from "react";
import { Languages } from 'piral';
import { AccountMenu } from "../menus";
import { EntitiesMenu } from "../menus";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Navbar dark expand="sm" fixed="top" className="jh-navbar">
      <NavbarToggler aria-label="Menu" onClick={toggleMenu} />
      <Brand />
      <Collapse isOpen={menuOpen} navbar>
        <Nav id="header-tabs" className="ml-auto" navbar>
          <Home />
          <EntitiesMenu />
          <Languages />
          <AccountMenu />
        </Nav>
      </Collapse>
    </Navbar>
  );
};
