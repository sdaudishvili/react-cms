import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';

import Storage from './views/Storage';
import Resources from './views/Resources';

const routes = [
  {
    layout: AuthLayout,
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
    routes: [
      {
        path: '/resources',
        exact: true,
        component: Resources
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
