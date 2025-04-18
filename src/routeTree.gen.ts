/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UuidGeneratorImport } from './routes/uuid-generator'
import { Route as UlidGeneratorImport } from './routes/ulid-generator'
import { Route as ToDoListImport } from './routes/to-do-list'
import { Route as PasswordGeneratorImport } from './routes/password-generator'
import { Route as JsonSorterImport } from './routes/json-sorter'
import { Route as JsonCompareImport } from './routes/json-compare'
import { Route as DistanceCalculatorImport } from './routes/distance-calculator'
import { Route as CalculatorImport } from './routes/calculator'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as BmiCalculatorIndexImport } from './routes/bmi-calculator/index'
import { Route as BmiCalculatorHeightHeightImport } from './routes/bmi-calculator/height/$height'

// Create/Update Routes

const UuidGeneratorRoute = UuidGeneratorImport.update({
  id: '/uuid-generator',
  path: '/uuid-generator',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/uuid-generator.lazy').then((d) => d.Route),
)

const UlidGeneratorRoute = UlidGeneratorImport.update({
  id: '/ulid-generator',
  path: '/ulid-generator',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/ulid-generator.lazy').then((d) => d.Route),
)

const ToDoListRoute = ToDoListImport.update({
  id: '/to-do-list',
  path: '/to-do-list',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/to-do-list.lazy').then((d) => d.Route))

const PasswordGeneratorRoute = PasswordGeneratorImport.update({
  id: '/password-generator',
  path: '/password-generator',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/password-generator.lazy').then((d) => d.Route),
)

const JsonSorterRoute = JsonSorterImport.update({
  id: '/json-sorter',
  path: '/json-sorter',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/json-sorter.lazy').then((d) => d.Route))

const JsonCompareRoute = JsonCompareImport.update({
  id: '/json-compare',
  path: '/json-compare',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/json-compare.lazy').then((d) => d.Route))

const DistanceCalculatorRoute = DistanceCalculatorImport.update({
  id: '/distance-calculator',
  path: '/distance-calculator',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/distance-calculator.lazy').then((d) => d.Route),
)

const CalculatorRoute = CalculatorImport.update({
  id: '/calculator',
  path: '/calculator',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/calculator.lazy').then((d) => d.Route))

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const BmiCalculatorIndexRoute = BmiCalculatorIndexImport.update({
  id: '/bmi-calculator/',
  path: '/bmi-calculator/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/bmi-calculator/index.lazy').then((d) => d.Route),
)

const BmiCalculatorHeightHeightRoute = BmiCalculatorHeightHeightImport.update({
  id: '/bmi-calculator/height/$height',
  path: '/bmi-calculator/height/$height',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/bmi-calculator/height/$height.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/calculator': {
      id: '/calculator'
      path: '/calculator'
      fullPath: '/calculator'
      preLoaderRoute: typeof CalculatorImport
      parentRoute: typeof rootRoute
    }
    '/distance-calculator': {
      id: '/distance-calculator'
      path: '/distance-calculator'
      fullPath: '/distance-calculator'
      preLoaderRoute: typeof DistanceCalculatorImport
      parentRoute: typeof rootRoute
    }
    '/json-compare': {
      id: '/json-compare'
      path: '/json-compare'
      fullPath: '/json-compare'
      preLoaderRoute: typeof JsonCompareImport
      parentRoute: typeof rootRoute
    }
    '/json-sorter': {
      id: '/json-sorter'
      path: '/json-sorter'
      fullPath: '/json-sorter'
      preLoaderRoute: typeof JsonSorterImport
      parentRoute: typeof rootRoute
    }
    '/password-generator': {
      id: '/password-generator'
      path: '/password-generator'
      fullPath: '/password-generator'
      preLoaderRoute: typeof PasswordGeneratorImport
      parentRoute: typeof rootRoute
    }
    '/to-do-list': {
      id: '/to-do-list'
      path: '/to-do-list'
      fullPath: '/to-do-list'
      preLoaderRoute: typeof ToDoListImport
      parentRoute: typeof rootRoute
    }
    '/ulid-generator': {
      id: '/ulid-generator'
      path: '/ulid-generator'
      fullPath: '/ulid-generator'
      preLoaderRoute: typeof UlidGeneratorImport
      parentRoute: typeof rootRoute
    }
    '/uuid-generator': {
      id: '/uuid-generator'
      path: '/uuid-generator'
      fullPath: '/uuid-generator'
      preLoaderRoute: typeof UuidGeneratorImport
      parentRoute: typeof rootRoute
    }
    '/bmi-calculator/': {
      id: '/bmi-calculator/'
      path: '/bmi-calculator'
      fullPath: '/bmi-calculator'
      preLoaderRoute: typeof BmiCalculatorIndexImport
      parentRoute: typeof rootRoute
    }
    '/bmi-calculator/height/$height': {
      id: '/bmi-calculator/height/$height'
      path: '/bmi-calculator/height/$height'
      fullPath: '/bmi-calculator/height/$height'
      preLoaderRoute: typeof BmiCalculatorHeightHeightImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/calculator': typeof CalculatorRoute
  '/distance-calculator': typeof DistanceCalculatorRoute
  '/json-compare': typeof JsonCompareRoute
  '/json-sorter': typeof JsonSorterRoute
  '/password-generator': typeof PasswordGeneratorRoute
  '/to-do-list': typeof ToDoListRoute
  '/ulid-generator': typeof UlidGeneratorRoute
  '/uuid-generator': typeof UuidGeneratorRoute
  '/bmi-calculator': typeof BmiCalculatorIndexRoute
  '/bmi-calculator/height/$height': typeof BmiCalculatorHeightHeightRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/calculator': typeof CalculatorRoute
  '/distance-calculator': typeof DistanceCalculatorRoute
  '/json-compare': typeof JsonCompareRoute
  '/json-sorter': typeof JsonSorterRoute
  '/password-generator': typeof PasswordGeneratorRoute
  '/to-do-list': typeof ToDoListRoute
  '/ulid-generator': typeof UlidGeneratorRoute
  '/uuid-generator': typeof UuidGeneratorRoute
  '/bmi-calculator': typeof BmiCalculatorIndexRoute
  '/bmi-calculator/height/$height': typeof BmiCalculatorHeightHeightRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/calculator': typeof CalculatorRoute
  '/distance-calculator': typeof DistanceCalculatorRoute
  '/json-compare': typeof JsonCompareRoute
  '/json-sorter': typeof JsonSorterRoute
  '/password-generator': typeof PasswordGeneratorRoute
  '/to-do-list': typeof ToDoListRoute
  '/ulid-generator': typeof UlidGeneratorRoute
  '/uuid-generator': typeof UuidGeneratorRoute
  '/bmi-calculator/': typeof BmiCalculatorIndexRoute
  '/bmi-calculator/height/$height': typeof BmiCalculatorHeightHeightRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/calculator'
    | '/distance-calculator'
    | '/json-compare'
    | '/json-sorter'
    | '/password-generator'
    | '/to-do-list'
    | '/ulid-generator'
    | '/uuid-generator'
    | '/bmi-calculator'
    | '/bmi-calculator/height/$height'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/calculator'
    | '/distance-calculator'
    | '/json-compare'
    | '/json-sorter'
    | '/password-generator'
    | '/to-do-list'
    | '/ulid-generator'
    | '/uuid-generator'
    | '/bmi-calculator'
    | '/bmi-calculator/height/$height'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/calculator'
    | '/distance-calculator'
    | '/json-compare'
    | '/json-sorter'
    | '/password-generator'
    | '/to-do-list'
    | '/ulid-generator'
    | '/uuid-generator'
    | '/bmi-calculator/'
    | '/bmi-calculator/height/$height'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CalculatorRoute: typeof CalculatorRoute
  DistanceCalculatorRoute: typeof DistanceCalculatorRoute
  JsonCompareRoute: typeof JsonCompareRoute
  JsonSorterRoute: typeof JsonSorterRoute
  PasswordGeneratorRoute: typeof PasswordGeneratorRoute
  ToDoListRoute: typeof ToDoListRoute
  UlidGeneratorRoute: typeof UlidGeneratorRoute
  UuidGeneratorRoute: typeof UuidGeneratorRoute
  BmiCalculatorIndexRoute: typeof BmiCalculatorIndexRoute
  BmiCalculatorHeightHeightRoute: typeof BmiCalculatorHeightHeightRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  CalculatorRoute: CalculatorRoute,
  DistanceCalculatorRoute: DistanceCalculatorRoute,
  JsonCompareRoute: JsonCompareRoute,
  JsonSorterRoute: JsonSorterRoute,
  PasswordGeneratorRoute: PasswordGeneratorRoute,
  ToDoListRoute: ToDoListRoute,
  UlidGeneratorRoute: UlidGeneratorRoute,
  UuidGeneratorRoute: UuidGeneratorRoute,
  BmiCalculatorIndexRoute: BmiCalculatorIndexRoute,
  BmiCalculatorHeightHeightRoute: BmiCalculatorHeightHeightRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/calculator",
        "/distance-calculator",
        "/json-compare",
        "/json-sorter",
        "/password-generator",
        "/to-do-list",
        "/ulid-generator",
        "/uuid-generator",
        "/bmi-calculator/",
        "/bmi-calculator/height/$height"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/calculator": {
      "filePath": "calculator.tsx"
    },
    "/distance-calculator": {
      "filePath": "distance-calculator.tsx"
    },
    "/json-compare": {
      "filePath": "json-compare.tsx"
    },
    "/json-sorter": {
      "filePath": "json-sorter.tsx"
    },
    "/password-generator": {
      "filePath": "password-generator.tsx"
    },
    "/to-do-list": {
      "filePath": "to-do-list.tsx"
    },
    "/ulid-generator": {
      "filePath": "ulid-generator.tsx"
    },
    "/uuid-generator": {
      "filePath": "uuid-generator.tsx"
    },
    "/bmi-calculator/": {
      "filePath": "bmi-calculator/index.tsx"
    },
    "/bmi-calculator/height/$height": {
      "filePath": "bmi-calculator/height/$height.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
