import React from 'react';

const Tables = React.lazy(() => import('./views/base/tables/Tables'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/base/forms', name: 'Forms', component: BasicForms},
  { path: '/base/tables', name: 'Tables', component: Tables },
];

export default routes;
