import React from 'react';
import classNames from 'classnames';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => (
  <div className={classNames('header', 'clearfix')}>
    <h3 className="text-muted">Snake coins wallet</h3>
    <Nav pills className="nav-bar">
      <NavItem>
        <NavLink active href="#">Transactions</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Send</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Receive</NavLink>
      </NavItem>
    </Nav>
  </div>
);

export default NavBar;
