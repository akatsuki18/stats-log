/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as ClerkRouteRouteImport } from './routes/clerk/route'
import { Route as AuthenticatedRouteRouteImport } from './routes/_authenticated/route'
import { Route as AuthenticatedIndexRouteImport } from './routes/_authenticated/index'
import { Route as AuthenticatedTeamSetupRouteImport } from './routes/_authenticated/team-setup'
import { Route as errors503RouteImport } from './routes/(errors)/503'
import { Route as errors500RouteImport } from './routes/(errors)/500'
import { Route as errors404RouteImport } from './routes/(errors)/404'
import { Route as errors403RouteImport } from './routes/(errors)/403'
import { Route as errors401RouteImport } from './routes/(errors)/401'
import { Route as authSignUpRouteImport } from './routes/(auth)/sign-up'
import { Route as authSignIn2RouteImport } from './routes/(auth)/sign-in-2'
import { Route as authSignInRouteImport } from './routes/(auth)/sign-in'
import { Route as authOtpRouteImport } from './routes/(auth)/otp'
import { Route as authForgotPasswordRouteImport } from './routes/(auth)/forgot-password'
import { Route as authAuthCallbackRouteImport } from './routes/(auth)/auth-callback'
import { Route as ClerkAuthenticatedRouteRouteImport } from './routes/clerk/_authenticated/route'
import { Route as ClerkauthRouteRouteImport } from './routes/clerk/(auth)/route'
import { Route as AuthenticatedSettingsRouteRouteImport } from './routes/_authenticated/settings/route'
import { Route as AuthenticatedUsersIndexRouteImport } from './routes/_authenticated/users/index'
import { Route as AuthenticatedTeamsIndexRouteImport } from './routes/_authenticated/teams/index'
import { Route as AuthenticatedTasksIndexRouteImport } from './routes/_authenticated/tasks/index'
import { Route as AuthenticatedSettingsIndexRouteImport } from './routes/_authenticated/settings/index'
import { Route as AuthenticatedHelpCenterIndexRouteImport } from './routes/_authenticated/help-center/index'
import { Route as AuthenticatedChatsIndexRouteImport } from './routes/_authenticated/chats/index'
import { Route as AuthenticatedAppsIndexRouteImport } from './routes/_authenticated/apps/index'
import { Route as ClerkAuthenticatedUserManagementRouteImport } from './routes/clerk/_authenticated/user-management'
import { Route as ClerkauthSignUpRouteImport } from './routes/clerk/(auth)/sign-up'
import { Route as ClerkauthSignInRouteImport } from './routes/clerk/(auth)/sign-in'
import { Route as AuthenticatedSettingsNotificationsRouteImport } from './routes/_authenticated/settings/notifications'
import { Route as AuthenticatedSettingsDisplayRouteImport } from './routes/_authenticated/settings/display'
import { Route as AuthenticatedSettingsAppearanceRouteImport } from './routes/_authenticated/settings/appearance'
import { Route as AuthenticatedSettingsAccountRouteImport } from './routes/_authenticated/settings/account'

const ClerkRouteRoute = ClerkRouteRouteImport.update({
  id: '/clerk',
  path: '/clerk',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthenticatedRouteRoute = AuthenticatedRouteRouteImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthenticatedIndexRoute = AuthenticatedIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)
const AuthenticatedTeamSetupRoute = AuthenticatedTeamSetupRouteImport.update({
  id: '/team-setup',
  path: '/team-setup',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)
const errors503Route = errors503RouteImport.update({
  id: '/(errors)/503',
  path: '/503',
  getParentRoute: () => rootRouteImport,
} as any)
const errors500Route = errors500RouteImport.update({
  id: '/(errors)/500',
  path: '/500',
  getParentRoute: () => rootRouteImport,
} as any)
const errors404Route = errors404RouteImport.update({
  id: '/(errors)/404',
  path: '/404',
  getParentRoute: () => rootRouteImport,
} as any)
const errors403Route = errors403RouteImport.update({
  id: '/(errors)/403',
  path: '/403',
  getParentRoute: () => rootRouteImport,
} as any)
const errors401Route = errors401RouteImport.update({
  id: '/(errors)/401',
  path: '/401',
  getParentRoute: () => rootRouteImport,
} as any)
const authSignUpRoute = authSignUpRouteImport.update({
  id: '/(auth)/sign-up',
  path: '/sign-up',
  getParentRoute: () => rootRouteImport,
} as any)
const authSignIn2Route = authSignIn2RouteImport.update({
  id: '/(auth)/sign-in-2',
  path: '/sign-in-2',
  getParentRoute: () => rootRouteImport,
} as any)
const authSignInRoute = authSignInRouteImport.update({
  id: '/(auth)/sign-in',
  path: '/sign-in',
  getParentRoute: () => rootRouteImport,
} as any)
const authOtpRoute = authOtpRouteImport.update({
  id: '/(auth)/otp',
  path: '/otp',
  getParentRoute: () => rootRouteImport,
} as any)
const authForgotPasswordRoute = authForgotPasswordRouteImport.update({
  id: '/(auth)/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => rootRouteImport,
} as any)
const authAuthCallbackRoute = authAuthCallbackRouteImport.update({
  id: '/(auth)/auth-callback',
  path: '/auth-callback',
  getParentRoute: () => rootRouteImport,
} as any)
const ClerkAuthenticatedRouteRoute = ClerkAuthenticatedRouteRouteImport.update({
  id: '/_authenticated',
  getParentRoute: () => ClerkRouteRoute,
} as any)
const ClerkauthRouteRoute = ClerkauthRouteRouteImport.update({
  id: '/(auth)',
  getParentRoute: () => ClerkRouteRoute,
} as any)
const AuthenticatedSettingsRouteRoute =
  AuthenticatedSettingsRouteRouteImport.update({
    id: '/settings',
    path: '/settings',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any)
const AuthenticatedUsersIndexRoute = AuthenticatedUsersIndexRouteImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)
const AuthenticatedTeamsIndexRoute = AuthenticatedTeamsIndexRouteImport.update({
  id: '/teams/',
  path: '/teams/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)
const AuthenticatedTasksIndexRoute = AuthenticatedTasksIndexRouteImport.update({
  id: '/tasks/',
  path: '/tasks/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)
const AuthenticatedSettingsIndexRoute =
  AuthenticatedSettingsIndexRouteImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedSettingsRouteRoute,
  } as any)
const AuthenticatedHelpCenterIndexRoute =
  AuthenticatedHelpCenterIndexRouteImport.update({
    id: '/help-center/',
    path: '/help-center/',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any)
const AuthenticatedChatsIndexRoute = AuthenticatedChatsIndexRouteImport.update({
  id: '/chats/',
  path: '/chats/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)
const AuthenticatedAppsIndexRoute = AuthenticatedAppsIndexRouteImport.update({
  id: '/apps/',
  path: '/apps/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)
const ClerkAuthenticatedUserManagementRoute =
  ClerkAuthenticatedUserManagementRouteImport.update({
    id: '/user-management',
    path: '/user-management',
    getParentRoute: () => ClerkAuthenticatedRouteRoute,
  } as any)
const ClerkauthSignUpRoute = ClerkauthSignUpRouteImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => ClerkauthRouteRoute,
} as any)
const ClerkauthSignInRoute = ClerkauthSignInRouteImport.update({
  id: '/sign-in',
  path: '/sign-in',
  getParentRoute: () => ClerkauthRouteRoute,
} as any)
const AuthenticatedSettingsNotificationsRoute =
  AuthenticatedSettingsNotificationsRouteImport.update({
    id: '/notifications',
    path: '/notifications',
    getParentRoute: () => AuthenticatedSettingsRouteRoute,
  } as any)
const AuthenticatedSettingsDisplayRoute =
  AuthenticatedSettingsDisplayRouteImport.update({
    id: '/display',
    path: '/display',
    getParentRoute: () => AuthenticatedSettingsRouteRoute,
  } as any)
const AuthenticatedSettingsAppearanceRoute =
  AuthenticatedSettingsAppearanceRouteImport.update({
    id: '/appearance',
    path: '/appearance',
    getParentRoute: () => AuthenticatedSettingsRouteRoute,
  } as any)
const AuthenticatedSettingsAccountRoute =
  AuthenticatedSettingsAccountRouteImport.update({
    id: '/account',
    path: '/account',
    getParentRoute: () => AuthenticatedSettingsRouteRoute,
  } as any)

export interface FileRoutesByFullPath {
  '/clerk': typeof ClerkAuthenticatedRouteRouteWithChildren
  '/settings': typeof AuthenticatedSettingsRouteRouteWithChildren
  '/clerk/': typeof ClerkauthRouteRouteWithChildren
  '/auth-callback': typeof authAuthCallbackRoute
  '/forgot-password': typeof authForgotPasswordRoute
  '/otp': typeof authOtpRoute
  '/sign-in': typeof authSignInRoute
  '/sign-in-2': typeof authSignIn2Route
  '/sign-up': typeof authSignUpRoute
  '/401': typeof errors401Route
  '/403': typeof errors403Route
  '/404': typeof errors404Route
  '/500': typeof errors500Route
  '/503': typeof errors503Route
  '/team-setup': typeof AuthenticatedTeamSetupRoute
  '/': typeof AuthenticatedIndexRoute
  '/settings/account': typeof AuthenticatedSettingsAccountRoute
  '/settings/appearance': typeof AuthenticatedSettingsAppearanceRoute
  '/settings/display': typeof AuthenticatedSettingsDisplayRoute
  '/settings/notifications': typeof AuthenticatedSettingsNotificationsRoute
  '/clerk/sign-in': typeof ClerkauthSignInRoute
  '/clerk/sign-up': typeof ClerkauthSignUpRoute
  '/clerk/user-management': typeof ClerkAuthenticatedUserManagementRoute
  '/apps': typeof AuthenticatedAppsIndexRoute
  '/chats': typeof AuthenticatedChatsIndexRoute
  '/help-center': typeof AuthenticatedHelpCenterIndexRoute
  '/settings/': typeof AuthenticatedSettingsIndexRoute
  '/tasks': typeof AuthenticatedTasksIndexRoute
  '/teams': typeof AuthenticatedTeamsIndexRoute
  '/users': typeof AuthenticatedUsersIndexRoute
}
export interface FileRoutesByTo {
  '/clerk': typeof ClerkAuthenticatedRouteRouteWithChildren
  '/auth-callback': typeof authAuthCallbackRoute
  '/forgot-password': typeof authForgotPasswordRoute
  '/otp': typeof authOtpRoute
  '/sign-in': typeof authSignInRoute
  '/sign-in-2': typeof authSignIn2Route
  '/sign-up': typeof authSignUpRoute
  '/401': typeof errors401Route
  '/403': typeof errors403Route
  '/404': typeof errors404Route
  '/500': typeof errors500Route
  '/503': typeof errors503Route
  '/team-setup': typeof AuthenticatedTeamSetupRoute
  '/': typeof AuthenticatedIndexRoute
  '/settings/account': typeof AuthenticatedSettingsAccountRoute
  '/settings/appearance': typeof AuthenticatedSettingsAppearanceRoute
  '/settings/display': typeof AuthenticatedSettingsDisplayRoute
  '/settings/notifications': typeof AuthenticatedSettingsNotificationsRoute
  '/clerk/sign-in': typeof ClerkauthSignInRoute
  '/clerk/sign-up': typeof ClerkauthSignUpRoute
  '/clerk/user-management': typeof ClerkAuthenticatedUserManagementRoute
  '/apps': typeof AuthenticatedAppsIndexRoute
  '/chats': typeof AuthenticatedChatsIndexRoute
  '/help-center': typeof AuthenticatedHelpCenterIndexRoute
  '/settings': typeof AuthenticatedSettingsIndexRoute
  '/tasks': typeof AuthenticatedTasksIndexRoute
  '/teams': typeof AuthenticatedTeamsIndexRoute
  '/users': typeof AuthenticatedUsersIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/_authenticated': typeof AuthenticatedRouteRouteWithChildren
  '/clerk': typeof ClerkRouteRouteWithChildren
  '/_authenticated/settings': typeof AuthenticatedSettingsRouteRouteWithChildren
  '/clerk/(auth)': typeof ClerkauthRouteRouteWithChildren
  '/clerk/_authenticated': typeof ClerkAuthenticatedRouteRouteWithChildren
  '/(auth)/auth-callback': typeof authAuthCallbackRoute
  '/(auth)/forgot-password': typeof authForgotPasswordRoute
  '/(auth)/otp': typeof authOtpRoute
  '/(auth)/sign-in': typeof authSignInRoute
  '/(auth)/sign-in-2': typeof authSignIn2Route
  '/(auth)/sign-up': typeof authSignUpRoute
  '/(errors)/401': typeof errors401Route
  '/(errors)/403': typeof errors403Route
  '/(errors)/404': typeof errors404Route
  '/(errors)/500': typeof errors500Route
  '/(errors)/503': typeof errors503Route
  '/_authenticated/team-setup': typeof AuthenticatedTeamSetupRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
  '/_authenticated/settings/account': typeof AuthenticatedSettingsAccountRoute
  '/_authenticated/settings/appearance': typeof AuthenticatedSettingsAppearanceRoute
  '/_authenticated/settings/display': typeof AuthenticatedSettingsDisplayRoute
  '/_authenticated/settings/notifications': typeof AuthenticatedSettingsNotificationsRoute
  '/clerk/(auth)/sign-in': typeof ClerkauthSignInRoute
  '/clerk/(auth)/sign-up': typeof ClerkauthSignUpRoute
  '/clerk/_authenticated/user-management': typeof ClerkAuthenticatedUserManagementRoute
  '/_authenticated/apps/': typeof AuthenticatedAppsIndexRoute
  '/_authenticated/chats/': typeof AuthenticatedChatsIndexRoute
  '/_authenticated/help-center/': typeof AuthenticatedHelpCenterIndexRoute
  '/_authenticated/settings/': typeof AuthenticatedSettingsIndexRoute
  '/_authenticated/tasks/': typeof AuthenticatedTasksIndexRoute
  '/_authenticated/teams/': typeof AuthenticatedTeamsIndexRoute
  '/_authenticated/users/': typeof AuthenticatedUsersIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/clerk'
    | '/settings'
    | '/clerk/'
    | '/auth-callback'
    | '/forgot-password'
    | '/otp'
    | '/sign-in'
    | '/sign-in-2'
    | '/sign-up'
    | '/401'
    | '/403'
    | '/404'
    | '/500'
    | '/503'
    | '/team-setup'
    | '/'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/clerk/sign-in'
    | '/clerk/sign-up'
    | '/clerk/user-management'
    | '/apps'
    | '/chats'
    | '/help-center'
    | '/settings/'
    | '/tasks'
    | '/teams'
    | '/users'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/clerk'
    | '/auth-callback'
    | '/forgot-password'
    | '/otp'
    | '/sign-in'
    | '/sign-in-2'
    | '/sign-up'
    | '/401'
    | '/403'
    | '/404'
    | '/500'
    | '/503'
    | '/team-setup'
    | '/'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/clerk/sign-in'
    | '/clerk/sign-up'
    | '/clerk/user-management'
    | '/apps'
    | '/chats'
    | '/help-center'
    | '/settings'
    | '/tasks'
    | '/teams'
    | '/users'
  id:
    | '__root__'
    | '/_authenticated'
    | '/clerk'
    | '/_authenticated/settings'
    | '/clerk/(auth)'
    | '/clerk/_authenticated'
    | '/(auth)/auth-callback'
    | '/(auth)/forgot-password'
    | '/(auth)/otp'
    | '/(auth)/sign-in'
    | '/(auth)/sign-in-2'
    | '/(auth)/sign-up'
    | '/(errors)/401'
    | '/(errors)/403'
    | '/(errors)/404'
    | '/(errors)/500'
    | '/(errors)/503'
    | '/_authenticated/team-setup'
    | '/_authenticated/'
    | '/_authenticated/settings/account'
    | '/_authenticated/settings/appearance'
    | '/_authenticated/settings/display'
    | '/_authenticated/settings/notifications'
    | '/clerk/(auth)/sign-in'
    | '/clerk/(auth)/sign-up'
    | '/clerk/_authenticated/user-management'
    | '/_authenticated/apps/'
    | '/_authenticated/chats/'
    | '/_authenticated/help-center/'
    | '/_authenticated/settings/'
    | '/_authenticated/tasks/'
    | '/_authenticated/teams/'
    | '/_authenticated/users/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  AuthenticatedRouteRoute: typeof AuthenticatedRouteRouteWithChildren
  ClerkRouteRoute: typeof ClerkRouteRouteWithChildren
  authAuthCallbackRoute: typeof authAuthCallbackRoute
  authForgotPasswordRoute: typeof authForgotPasswordRoute
  authOtpRoute: typeof authOtpRoute
  authSignInRoute: typeof authSignInRoute
  authSignIn2Route: typeof authSignIn2Route
  authSignUpRoute: typeof authSignUpRoute
  errors401Route: typeof errors401Route
  errors403Route: typeof errors403Route
  errors404Route: typeof errors404Route
  errors500Route: typeof errors500Route
  errors503Route: typeof errors503Route
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/clerk': {
      id: '/clerk'
      path: '/clerk'
      fullPath: '/clerk'
      preLoaderRoute: typeof ClerkRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/_authenticated/team-setup': {
      id: '/_authenticated/team-setup'
      path: '/team-setup'
      fullPath: '/team-setup'
      preLoaderRoute: typeof AuthenticatedTeamSetupRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/(errors)/503': {
      id: '/(errors)/503'
      path: '/503'
      fullPath: '/503'
      preLoaderRoute: typeof errors503RouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(errors)/500': {
      id: '/(errors)/500'
      path: '/500'
      fullPath: '/500'
      preLoaderRoute: typeof errors500RouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(errors)/404': {
      id: '/(errors)/404'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof errors404RouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(errors)/403': {
      id: '/(errors)/403'
      path: '/403'
      fullPath: '/403'
      preLoaderRoute: typeof errors403RouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(errors)/401': {
      id: '/(errors)/401'
      path: '/401'
      fullPath: '/401'
      preLoaderRoute: typeof errors401RouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(auth)/sign-up': {
      id: '/(auth)/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof authSignUpRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(auth)/sign-in-2': {
      id: '/(auth)/sign-in-2'
      path: '/sign-in-2'
      fullPath: '/sign-in-2'
      preLoaderRoute: typeof authSignIn2RouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(auth)/sign-in': {
      id: '/(auth)/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof authSignInRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(auth)/otp': {
      id: '/(auth)/otp'
      path: '/otp'
      fullPath: '/otp'
      preLoaderRoute: typeof authOtpRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(auth)/forgot-password': {
      id: '/(auth)/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof authForgotPasswordRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(auth)/auth-callback': {
      id: '/(auth)/auth-callback'
      path: '/auth-callback'
      fullPath: '/auth-callback'
      preLoaderRoute: typeof authAuthCallbackRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/clerk/_authenticated': {
      id: '/clerk/_authenticated'
      path: ''
      fullPath: '/clerk'
      preLoaderRoute: typeof ClerkAuthenticatedRouteRouteImport
      parentRoute: typeof ClerkRouteRoute
    }
    '/clerk/(auth)': {
      id: '/clerk/(auth)'
      path: '/'
      fullPath: '/clerk/'
      preLoaderRoute: typeof ClerkauthRouteRouteImport
      parentRoute: typeof ClerkRouteRoute
    }
    '/_authenticated/settings': {
      id: '/_authenticated/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthenticatedSettingsRouteRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/_authenticated/users/': {
      id: '/_authenticated/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof AuthenticatedUsersIndexRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/_authenticated/teams/': {
      id: '/_authenticated/teams/'
      path: '/teams'
      fullPath: '/teams'
      preLoaderRoute: typeof AuthenticatedTeamsIndexRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/_authenticated/tasks/': {
      id: '/_authenticated/tasks/'
      path: '/tasks'
      fullPath: '/tasks'
      preLoaderRoute: typeof AuthenticatedTasksIndexRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/_authenticated/settings/': {
      id: '/_authenticated/settings/'
      path: '/'
      fullPath: '/settings/'
      preLoaderRoute: typeof AuthenticatedSettingsIndexRouteImport
      parentRoute: typeof AuthenticatedSettingsRouteRoute
    }
    '/_authenticated/help-center/': {
      id: '/_authenticated/help-center/'
      path: '/help-center'
      fullPath: '/help-center'
      preLoaderRoute: typeof AuthenticatedHelpCenterIndexRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/_authenticated/chats/': {
      id: '/_authenticated/chats/'
      path: '/chats'
      fullPath: '/chats'
      preLoaderRoute: typeof AuthenticatedChatsIndexRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/_authenticated/apps/': {
      id: '/_authenticated/apps/'
      path: '/apps'
      fullPath: '/apps'
      preLoaderRoute: typeof AuthenticatedAppsIndexRouteImport
      parentRoute: typeof AuthenticatedRouteRoute
    }
    '/clerk/_authenticated/user-management': {
      id: '/clerk/_authenticated/user-management'
      path: '/user-management'
      fullPath: '/clerk/user-management'
      preLoaderRoute: typeof ClerkAuthenticatedUserManagementRouteImport
      parentRoute: typeof ClerkAuthenticatedRouteRoute
    }
    '/clerk/(auth)/sign-up': {
      id: '/clerk/(auth)/sign-up'
      path: '/sign-up'
      fullPath: '/clerk/sign-up'
      preLoaderRoute: typeof ClerkauthSignUpRouteImport
      parentRoute: typeof ClerkauthRouteRoute
    }
    '/clerk/(auth)/sign-in': {
      id: '/clerk/(auth)/sign-in'
      path: '/sign-in'
      fullPath: '/clerk/sign-in'
      preLoaderRoute: typeof ClerkauthSignInRouteImport
      parentRoute: typeof ClerkauthRouteRoute
    }
    '/_authenticated/settings/notifications': {
      id: '/_authenticated/settings/notifications'
      path: '/notifications'
      fullPath: '/settings/notifications'
      preLoaderRoute: typeof AuthenticatedSettingsNotificationsRouteImport
      parentRoute: typeof AuthenticatedSettingsRouteRoute
    }
    '/_authenticated/settings/display': {
      id: '/_authenticated/settings/display'
      path: '/display'
      fullPath: '/settings/display'
      preLoaderRoute: typeof AuthenticatedSettingsDisplayRouteImport
      parentRoute: typeof AuthenticatedSettingsRouteRoute
    }
    '/_authenticated/settings/appearance': {
      id: '/_authenticated/settings/appearance'
      path: '/appearance'
      fullPath: '/settings/appearance'
      preLoaderRoute: typeof AuthenticatedSettingsAppearanceRouteImport
      parentRoute: typeof AuthenticatedSettingsRouteRoute
    }
    '/_authenticated/settings/account': {
      id: '/_authenticated/settings/account'
      path: '/account'
      fullPath: '/settings/account'
      preLoaderRoute: typeof AuthenticatedSettingsAccountRouteImport
      parentRoute: typeof AuthenticatedSettingsRouteRoute
    }
  }
}

interface AuthenticatedSettingsRouteRouteChildren {
  AuthenticatedSettingsAccountRoute: typeof AuthenticatedSettingsAccountRoute
  AuthenticatedSettingsAppearanceRoute: typeof AuthenticatedSettingsAppearanceRoute
  AuthenticatedSettingsDisplayRoute: typeof AuthenticatedSettingsDisplayRoute
  AuthenticatedSettingsNotificationsRoute: typeof AuthenticatedSettingsNotificationsRoute
  AuthenticatedSettingsIndexRoute: typeof AuthenticatedSettingsIndexRoute
}

const AuthenticatedSettingsRouteRouteChildren: AuthenticatedSettingsRouteRouteChildren =
  {
    AuthenticatedSettingsAccountRoute: AuthenticatedSettingsAccountRoute,
    AuthenticatedSettingsAppearanceRoute: AuthenticatedSettingsAppearanceRoute,
    AuthenticatedSettingsDisplayRoute: AuthenticatedSettingsDisplayRoute,
    AuthenticatedSettingsNotificationsRoute:
      AuthenticatedSettingsNotificationsRoute,
    AuthenticatedSettingsIndexRoute: AuthenticatedSettingsIndexRoute,
  }

const AuthenticatedSettingsRouteRouteWithChildren =
  AuthenticatedSettingsRouteRoute._addFileChildren(
    AuthenticatedSettingsRouteRouteChildren,
  )

interface AuthenticatedRouteRouteChildren {
  AuthenticatedSettingsRouteRoute: typeof AuthenticatedSettingsRouteRouteWithChildren
  AuthenticatedTeamSetupRoute: typeof AuthenticatedTeamSetupRoute
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
  AuthenticatedAppsIndexRoute: typeof AuthenticatedAppsIndexRoute
  AuthenticatedChatsIndexRoute: typeof AuthenticatedChatsIndexRoute
  AuthenticatedHelpCenterIndexRoute: typeof AuthenticatedHelpCenterIndexRoute
  AuthenticatedTasksIndexRoute: typeof AuthenticatedTasksIndexRoute
  AuthenticatedTeamsIndexRoute: typeof AuthenticatedTeamsIndexRoute
  AuthenticatedUsersIndexRoute: typeof AuthenticatedUsersIndexRoute
}

const AuthenticatedRouteRouteChildren: AuthenticatedRouteRouteChildren = {
  AuthenticatedSettingsRouteRoute: AuthenticatedSettingsRouteRouteWithChildren,
  AuthenticatedTeamSetupRoute: AuthenticatedTeamSetupRoute,
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
  AuthenticatedAppsIndexRoute: AuthenticatedAppsIndexRoute,
  AuthenticatedChatsIndexRoute: AuthenticatedChatsIndexRoute,
  AuthenticatedHelpCenterIndexRoute: AuthenticatedHelpCenterIndexRoute,
  AuthenticatedTasksIndexRoute: AuthenticatedTasksIndexRoute,
  AuthenticatedTeamsIndexRoute: AuthenticatedTeamsIndexRoute,
  AuthenticatedUsersIndexRoute: AuthenticatedUsersIndexRoute,
}

const AuthenticatedRouteRouteWithChildren =
  AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren)

interface ClerkauthRouteRouteChildren {
  ClerkauthSignInRoute: typeof ClerkauthSignInRoute
  ClerkauthSignUpRoute: typeof ClerkauthSignUpRoute
}

const ClerkauthRouteRouteChildren: ClerkauthRouteRouteChildren = {
  ClerkauthSignInRoute: ClerkauthSignInRoute,
  ClerkauthSignUpRoute: ClerkauthSignUpRoute,
}

const ClerkauthRouteRouteWithChildren = ClerkauthRouteRoute._addFileChildren(
  ClerkauthRouteRouteChildren,
)

interface ClerkAuthenticatedRouteRouteChildren {
  ClerkAuthenticatedUserManagementRoute: typeof ClerkAuthenticatedUserManagementRoute
}

const ClerkAuthenticatedRouteRouteChildren: ClerkAuthenticatedRouteRouteChildren =
  {
    ClerkAuthenticatedUserManagementRoute:
      ClerkAuthenticatedUserManagementRoute,
  }

const ClerkAuthenticatedRouteRouteWithChildren =
  ClerkAuthenticatedRouteRoute._addFileChildren(
    ClerkAuthenticatedRouteRouteChildren,
  )

interface ClerkRouteRouteChildren {
  ClerkauthRouteRoute: typeof ClerkauthRouteRouteWithChildren
  ClerkAuthenticatedRouteRoute: typeof ClerkAuthenticatedRouteRouteWithChildren
}

const ClerkRouteRouteChildren: ClerkRouteRouteChildren = {
  ClerkauthRouteRoute: ClerkauthRouteRouteWithChildren,
  ClerkAuthenticatedRouteRoute: ClerkAuthenticatedRouteRouteWithChildren,
}

const ClerkRouteRouteWithChildren = ClerkRouteRoute._addFileChildren(
  ClerkRouteRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  ClerkRouteRoute: ClerkRouteRouteWithChildren,
  authAuthCallbackRoute: authAuthCallbackRoute,
  authForgotPasswordRoute: authForgotPasswordRoute,
  authOtpRoute: authOtpRoute,
  authSignInRoute: authSignInRoute,
  authSignIn2Route: authSignIn2Route,
  authSignUpRoute: authSignUpRoute,
  errors401Route: errors401Route,
  errors403Route: errors403Route,
  errors404Route: errors404Route,
  errors500Route: errors500Route,
  errors503Route: errors503Route,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
