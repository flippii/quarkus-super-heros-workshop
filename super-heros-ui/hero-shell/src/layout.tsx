import * as React from 'react';
import { useTranslate, ComponentsState } from 'piral';
import { SearchInput } from 'piral-search';
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
    <div className="pi-center">
      <div className="pi-spinner">Loading</div>
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
      <div className="pi-menu">{children}</div>
    );
  },
  MenuItem: ({ children }) => {
    return (
      <div className="pi-item">{children}</div>
    );
  },
  SearchContainer: ({ loading, children }) => (
    <div className="pi-search">
      <SearchInput />
      <div className="pi-details">
        {children}
        {loading && (
          <div className="pi-center">
            <div className="pi-spinner" />
          </div>
        )}
      </div>
    </div>
  ),
  SearchInput: ({ setValue, value }) => {
    const translate = useTranslate();
    return (
      <input
        type="search"
        required
        placeholder={translate('search')}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
    );
  },
  SearchResult: ({ children }) => {
    return (
      <div className="pi-item">{children}</div>
    );
  },
  NotificationsHost: ({ children }) => {
    return (
      <div className="pi-notifications">{children}</div>
    );
  },
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`pi-item ${options.type}`}>
      <div className="pi-details">
        {options.title && <div className="pi-title">{options.title}</div>}
        <div className="pi-description">{children}</div>
      </div>
      <div className="pi-close" onClick={onClose} />
    </div>
  ),
  ModalsHost: ({ children, open }) => {
    React.useEffect(() => {
      const body = document.body;

      if (open) {
        body.style.top = `-${window.scrollY}px`;
        body.classList.add('pi-modal-open');
      } else {
        const offset = -parseInt(body.style.top || '0', 10);
        body.classList.remove('pi-modal-open');
        body.style.top = '';
        window.scrollTo(0, offset);
      }

      return () => {};
    }, [open]);
    return <div className="pi-modal">{children}</div>;
  },
  ModalsDialog: ({ children }) => <div className="pi-modal-dialog">{children}</div>,
};
