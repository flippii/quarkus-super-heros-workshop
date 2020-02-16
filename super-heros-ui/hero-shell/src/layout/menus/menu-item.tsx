import * as React from 'react';
import { DropdownItem } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export interface IMenuItem {
  icon: string;
  to: string;
  id?: string;
}

export default class MenuItem extends React.Component<IMenuItem> {
  render() {
    const { to, icon, id, children } = this.props;

    return (
      <DropdownItem tag={Link} to={to} id={id}>
        <i className={icon} /> {children}
      </DropdownItem>
    );
  }
}
