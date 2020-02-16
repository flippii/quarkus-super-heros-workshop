import * as React from 'react';
import { LayoutProps } from 'piral';
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="app-container" style={{ paddingTop: '80px' }}>
    <div id="app-header">
      <Header />
    </div>
    <div className="container-fluid view-container" id="app-view-container">{children}</div>
    <div className="app-footer navbar-fixed-bottom">
      <Footer />
    </div>
  </div>
);
