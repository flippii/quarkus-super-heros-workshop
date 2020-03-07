import * as React from 'react';
import { useGlobalState, useTranslate } from 'piral';
import { NavDropdown } from './menu-components';
import MenuItem from "./menu-item";

export const AccountMenu: React.FC = () => {
  const translate = useTranslate();
  const currentUser = useGlobalState(m => m.user);
  const menuItems = useGlobalState(m => m.registry.menuItems);
  const itemNames = Object.keys(menuItems).filter(m => menuItems[m].settings.type === 'user');

  const items = itemNames.length > 0 && (
    <>
      {itemNames.map(name => {
        const Component = menuItems[name].component;
        return <Component key={name} />;
      })}
    </>
  );

  return (
    <NavDropdown icon="fa fa-user"
                 name={translate('account')}>

      {currentUser ? (
        <>
          {items}
          <MenuItem icon="fa fa-sign-out" to="/logout">
            {translate('signOut')}
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem id="login-item" icon="fa fa-sign-in" to="/login">
            {translate('signIn')}
          </MenuItem>
        </>
      )}
    </NavDropdown>
  );
};
