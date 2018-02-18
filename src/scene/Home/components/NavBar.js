import React from 'react';
import classNames from 'classnames';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const NavBar = () => (
  <div className={classNames('header', 'clearfix')}>
    <h3 className="text-muted">Snake coins wallet</h3>
    <Nav pills className="nav-bar">
      <NavItem>
        <NavLink exact to="/" tag={RRNavLink}>Transactions</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/send" tag={RRNavLink}>Send</NavLink>
      </NavItem>
    </Nav>
  </div>
);

export default NavBar;
