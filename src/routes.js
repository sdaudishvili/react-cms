import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';

import Storage from './views/Storage';
import Resources from './views/Resources';
import Resource from './views/Resource';

const routes = [
  {
    layout: AuthLayout,
    path: '/auth',
    routes: [
      // {
      //   path: '/auth/login',
      //   exact: true,
      //   component: LoginView
      // }
    ]
  },

  {
    layout: DashboardLayout,
    path: '/',
    routes: [
      {
        path: '/resources',
        exact: true,
        component: Resources
      },
      {
        path: '/resources/:key',
        exact: true,
        component: Resource
      },
      {
        path: '/storage',
        exact: true,
        component: Storage
      }
    ]
  }
];

export default routes;
