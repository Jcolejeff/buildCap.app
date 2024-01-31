import CONSTANTS from 'constant';
import Projects from 'pages/app/subContractor/projects';
import PaymentPlans from 'pages/app/subContractor/payment-plans';
import UserList from 'pages/app/subContractor/user-list';
import Profile from 'pages/app/subContractor/user-profile';
import AccountSettings from 'pages/app/subContractor/account-settings';
import SingleAssistantPage from 'pages/inner-pages/single-assistant-page';
import Dashboard from 'pages/app/subContractor/dashboard';
import SingleWorkflowPage from 'pages/inner-pages/single-workflow';

import { routeTypes, routesInterface } from 'types';

const internalRoute: routeTypes = [
  // {
  //   element: <Dashboard />,
  //   path: '',
  // },
  {
    element: <Dashboard />,
    path: 'dashboard',
  },
  {
    element: <Projects />,
    path: 'projects',
  },

  {
    element: <PaymentPlans />,
    path: 'payment-plans',
  },

  {
    element: <UserList />,
    path: 'users-list',
  },

  {
    element: <Profile />,
    path: 'profile',
  },
  {
    element: <AccountSettings />,
    path: 'settings',
  },
];

export const mainContractorRoutes: routeTypes = [
  {
    element: <Dashboard />,
    path: 'dashboard',
  },
  {
    element: <Profile />,
    path: 'profile',
  },
  {
    element: <AccountSettings />,
    path: 'settings',
  },
];
export const subContractorRoutes: routeTypes = [
  {
    element: <Dashboard />,
    path: 'dashboard',
  },
  {
    element: <Profile />,
    path: 'profile',
  },
  {
    element: <AccountSettings />,
    path: 'settings',
  },
];

export const supplierRoutes: routeTypes = [
  {
    element: <Dashboard />,
    path: 'dashboard',
  },
  {
    element: <Profile />,
    path: 'profile',
  },
  {
    element: <AccountSettings />,
    path: 'settings',
  },
];
export const adminRoutes: routeTypes = [
  {
    element: <Dashboard />,
    path: 'dashboard',
  },
  {
    element: <Profile />,
    path: 'profile',
  },
  {
    element: <AccountSettings />,
    path: 'settings',
  },
];

export const innerInternalRoutes: routesInterface<string>[] = [
  {
    element: <SingleWorkflowPage />,
    path: `${CONSTANTS.ROUTES['payment-plans']}/workflow/:workflowId`,
  },
  { element: <SingleAssistantPage />, path: `${CONSTANTS.ROUTES['payment-plans']}/:pageId` },
];

export default internalRoute;
