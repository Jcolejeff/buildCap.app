import CONSTANTS from 'constant';
import CustomizeYourAvatar from 'pages/app/customize-your-avatar';
import ViewPages from 'pages/app/view-pages';
import DeployAssistant from 'pages/app/deploy-assistant';
import Profile from 'pages/app/user-profile';
import AccountSettings from 'pages/app/account-settings';
import SingleAssistantPage from 'pages/inner-pages/single-assistant-page';
import CreateAssistantPage from 'pages/app/create-assistant';
import SingleWorkflowPage from 'pages/inner-pages/single-workflow';

import { routeTypes, routesInterface } from 'types';

const internalRoute: routeTypes = [
  {
    element: <CustomizeYourAvatar />,
    path: 'customize-your-avatar',
  },

  {
    element: <ViewPages />,
    path: 'view-pages',
  },

  {
    element: <DeployAssistant />,
    path: 'deploy-assistant',
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
    path: `${CONSTANTS.ROUTES['view-pages']}/workflow/:workflowId`,
  },
  { element: <SingleAssistantPage />, path: `${CONSTANTS.ROUTES['view-pages']}/:pageId` },
];

export default internalRoute;
