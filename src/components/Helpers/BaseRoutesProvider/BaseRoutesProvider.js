import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '@/routes';

const BaseRoutesProvider = () => {
  return (
    <Switch>
      {routes &&
        routes.map((x) => (
          <Route key={x.path} path={x.path}>
            <x.layout>
              {x.routes &&
                x.routes.map((route) => (
                  <Route key={route.path} exact={route.exact} path={route.path} render={() => <route.component />} />
                ))}
            </x.layout>
          </Route>
        ))}
    </Switch>
  );
};

export default BaseRoutesProvider;
