import * as React from 'react';
import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export const BrandIcon = (props) => (
  <div {...props} className="brand-icon">
    <img src={require('../../images/logo-jhipster.png')} alt="Logo" />
  </div>
);

export const Brand = () => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
    <span className="brand-title"> Microfrontend's with Piral</span>
    <span className="navbar-version">1.0.0</span>
  </NavbarBrand>
);

export const Home = () => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <span><i className="fa fa-home" /> Home</span>
    </NavLink>
  </NavItem>
);
