import { planTypes, routePathTypes } from 'types';

const ROUTES: Record<routePathTypes, routePathTypes> = {
  '': '',
  'create-account': 'create-account',
  'cv-profile': 'cv-profile',
  'view-pages': 'view-pages',
  'deploy-assistant': 'deploy-assistant',
  dashboard: 'dashboard',
  login: 'login',
  logout: 'logout',
  profile: 'profile',
  settings: 'settings',
  'new-password': 'new-password',
  'reset-password': 'reset-password',
  'forgot-password': 'forgot-password',
  'verify-email': 'verify-email',
  'create-assistant': 'create-assistant',
  'my-assistants': 'my-assistants',
  'customize-your-avatar': 'customize-your-avatar',
};

const TIMBU_KEYS = {
  BTS_ID: 'a3b42063504f4372ac9a1a6bd0f46d85',
  BLOG_ID: '696dccd73fb242448c41704b5179698f',
  IMAGE_BASE_URL: 'https://images.timbu.com',
};

const CONSTANTS = { ROUTES, TIMBU_KEYS };

export default CONSTANTS;
