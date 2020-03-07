import * as React from 'react';
import { useTranslate, ComponentsState } from 'piral';
import { getTileClass } from './utils';
import { LanguagePicker } from "./layout/menus";
import { Layout } from "./layout-main";
import { Card, CardTitle, CardText } from 'reactstrap'

const defaultTiles = (
  <>
    <Card body className="jh-tile wide">
      <CardTitle>
        <h5>Piral Homepage</h5>
      </CardTitle>
      <CardText>
        <a href="https://piral.io/">Piral</a> for next generation portals.
      </CardText>
    </Card>
  </>
);

export const layout: Partial<ComponentsState> = {
  Layout: Layout,
  LanguagesPicker: LanguagePicker,
  LoadingIndicator: () => (
    <div className="app-loading">
      <div className="lds-css ng-scope">
        <div className="lds-pacman">
          <div><div /><div /><div/></div>
          <div><div /><div /><div/></div>
        </div>
      </div>
    </div>
  ),
  DashboardContainer: ({ children }) => {
    const translate = useTranslate();
    return (
      <div className="jh-dashboard-container">
        <h2>{translate('dashboardTitle')}</h2>
        <div className="jh-dashboard">
          {defaultTiles}
          {children}
        </div>
      </div>
    );
  },
  DashboardTile: ({ children, rows, columns }) => {
    return (
      <div className={getTileClass(columns, rows)}>{children}</div>
    );
  },
  MenuContainer: ({ children }) => {
    return (
      <>{children}</>
    );
  },
  MenuItem: ({ children }) => {
    return (
      <>{children}</>
    );
  },
  NotificationsHost: ({ children }) => {
    return (
      <div className="jh-notifications">{children}</div>
    );
  },
  NotificationsToast: ({ options, onClose, children }) => {
    return (
      <div className={`jh-item ${options.type}`}>
        <div className="jh-details">
          {options.title && <div className="jh-title">{options.title}</div>}
          <div className="jh-description">{children}</div>
        </div>
        <div className="jh-close" onClick={onClose}/>
      </div>
    )
  },
  ModalsHost: ({ children, open }) => {
    React.useEffect(() => {
      const body = document.body;

      if (open) {
        body.style.top = `-${window.scrollY}px`;
        body.classList.add('jh-modal-open');
      } else {
        const offset = -parseInt(body.style.top || '0', 10);
        body.classList.remove('jh-modal-open');
        body.style.top = '';
        window.scrollTo(0, offset);
      }

      return () => {};
    }, [open]);

    return <div className="jh-modal">{children}</div>;
  },
  ModalsDialog: ({ children }) => {
    return (
      <div className="jh-modal-dialog">{children}</div>
    )
  }
};
