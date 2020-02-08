import { PiletApi} from 'hero-shell';
import * as React from 'react';
import { HerosPage } from "./HerosPage";
import { HerosPageMenu } from "./HerosPageMenu";
import { HerosComponent } from "./HerosComponent";
import {Link} from "react-router-dom";

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export function setup(app: PiletApi) {
  const connect = app.createConnector(() => fetch(apiUrl).then(res => res.json()));

  app.showNotification('Hello from Piral!');

  app.registerMenu(HerosPageMenu);
  // @ts-ignore
  app.registerPage('/heros-page', connect(HerosPage));

  app.registerMenu(() => <Link to="/dummy">Heros Pag222e</Link>)
  app.registerPage('/dummy', HerosComponent);

  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
