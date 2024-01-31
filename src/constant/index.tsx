import { planTypes, routePathTypes } from 'types';

const ROUTES: Record<routePathTypes, routePathTypes> = {
  '': '',
  'create-account': 'create-account',
  'cv-profile': 'cv-profile',
  'payment-plans': 'payment-plans',
  'users-list': 'users-list',
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
  projects: 'projects',
};

const PLAN_PERMISSIONS: Record<routePathTypes, planTypes> = {
  '': 'starter',
  'create-account': 'starter',
  'cv-profile': 'starter',
  'payment-plans': 'starter',
  'users-list': 'starter',
  dashboard: 'starter',
  login: 'starter',
  logout: 'starter',
  profile: 'starter',
  settings: 'starter',
  'new-password': 'starter',
  'reset-password': 'starter',
  'forgot-password': 'starter',
  'verify-email': 'starter',
  'create-assistant': 'starter',
  'my-assistants': 'starter',
  projects: 'master',
};

const TIMBU_KEYS = {
  BTS_ID: 'a3b42063504f4372ac9a1a6bd0f46d85',
  BLOG_ID: '696dccd73fb242448c41704b5179698f',
  IMAGE_BASE_URL: 'https://images.timbu.com',
};

const CONSTANTS = { ROUTES, TIMBU_KEYS, PLAN_PERMISSIONS };

export default CONSTANTS;
