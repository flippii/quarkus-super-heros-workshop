import * as React from 'react';
import { useGlobalState, useTranslate } from 'piral';
import { NavDropdown } from './menu-components';

export const EntitiesMenu: React.FC = () => {
  const translate = useTranslate();
  const menuItems = useGlobalState(m => m.registry.menuItems);
  const itemNames = Object.keys(menuItems).filter(m => menuItems[m].settings.type === 'general');

  return (
    <>
      {itemNames.length > 0 ? (
        <>
          <NavDropdown icon="fa fa-list"
                       name={translate('entities')}
                       style={{ maxHeight: '80vh', overflow: 'auto' }}>
            <>
              {itemNames.map(name => {
                const Component = menuItems[name].component;
                return <Component key={name} />;
              })}
            </>
          </NavDropdown>
        </>
        ) : null
      }
      </>
  );
};
