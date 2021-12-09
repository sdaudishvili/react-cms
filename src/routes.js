import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';

import Storage from './views/Storage';
import Resources from './views/Resources';
import ResourceUpdate from './views/ResourceUpdate';
import ResourceCreate from './views/ResourceCreate';

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
        path: '/resources/update/:key',
        exact: true,
        component: ResourceUpdate
      },
      {
        path: '/resources/create',
        exact: true,
        component: ResourceCreate
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
