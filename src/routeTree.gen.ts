/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BmiCalculatorHeightHeightImport } from './routes/bmi-calculator/height/$height'

// Create Virtual Routes

const UuidGeneratorLazyImport = createFileRoute('/uuid-generator')()
const UlidGeneratorLazyImport = createFileRoute('/ulid-generator')()
const ToDoListLazyImport = createFileRoute('/to-do-list')()
const PasswordGeneratorLazyImport = createFileRoute('/password-generator')()
const JsonSorterLazyImport = createFileRoute('/json-sorter')()
const DistanceCalculatorLazyImport = createFileRoute('/distance-calculator')()
const CounterLazyImport = createFileRoute('/counter')()
const CalculatorLazyImport = createFileRoute('/calculator')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const BmiCalculatorIndexLazyImport = createFileRoute('/bmi-calculator/')()

// Create/Update Routes

const UuidGeneratorLazyRoute = UuidGeneratorLazyImport.update({
  path: '/uuid-generator',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/uuid-generator.lazy').then((d) => d.Route),
)

const UlidGeneratorLazyRoute = UlidGeneratorLazyImport.update({
  path: '/ulid-generator',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/ulid-generator.lazy').then((d) => d.Route),
)

const ToDoListLazyRoute = ToDoListLazyImport.update({
  path: '/to-do-list',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/to-do-list.lazy').then((d) => d.Route))

const PasswordGeneratorLazyRoute = PasswordGeneratorLazyImport.update({
  path: '/password-generator',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/password-generator.lazy').then((d) => d.Route),
)

const JsonSorterLazyRoute = JsonSorterLazyImport.update({
  path: '/json-sorter',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/json-sorter.lazy').then((d) => d.Route))

const DistanceCalculatorLazyRoute = DistanceCalculatorLazyImport.update({
  path: '/distance-calculator',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/distance-calculator.lazy').then((d) => d.Route),
)

const CounterLazyRoute = CounterLazyImport.update({
  path: '/counter',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/counter.lazy').then((d) => d.Route))

const CalculatorLazyRoute = CalculatorLazyImport.update({
  path: '/calculator',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/calculator.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const BmiCalculatorIndexLazyRoute = BmiCalculatorIndexLazyImport.update({
  path: '/bmi-calculator/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/bmi-calculator/index.lazy').then((d) => d.Route),
)

const BmiCalculatorHeightHeightRoute = BmiCalculatorHeightHeightImport.update({
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
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/calculator': {
      id: '/calculator'
      path: '/calculator'
      fullPath: '/calculator'
      preLoaderRoute: typeof CalculatorLazyImport
      parentRoute: typeof rootRoute
    }
    '/counter': {
      id: '/counter'
      path: '/counter'
      fullPath: '/counter'
      preLoaderRoute: typeof CounterLazyImport
      parentRoute: typeof rootRoute
    }
    '/distance-calculator': {
      id: '/distance-calculator'
      path: '/distance-calculator'
      fullPath: '/distance-calculator'
      preLoaderRoute: typeof DistanceCalculatorLazyImport
      parentRoute: typeof rootRoute
    }
    '/json-sorter': {
      id: '/json-sorter'
      path: '/json-sorter'
      fullPath: '/json-sorter'
      preLoaderRoute: typeof JsonSorterLazyImport
      parentRoute: typeof rootRoute
    }
    '/password-generator': {
      id: '/password-generator'
      path: '/password-generator'
      fullPath: '/password-generator'
      preLoaderRoute: typeof PasswordGeneratorLazyImport
      parentRoute: typeof rootRoute
    }
    '/to-do-list': {
      id: '/to-do-list'
      path: '/to-do-list'
      fullPath: '/to-do-list'
      preLoaderRoute: typeof ToDoListLazyImport
      parentRoute: typeof rootRoute
    }
    '/ulid-generator': {
      id: '/ulid-generator'
      path: '/ulid-generator'
      fullPath: '/ulid-generator'
      preLoaderRoute: typeof UlidGeneratorLazyImport
      parentRoute: typeof rootRoute
    }
    '/uuid-generator': {
      id: '/uuid-generator'
      path: '/uuid-generator'
      fullPath: '/uuid-generator'
      preLoaderRoute: typeof UuidGeneratorLazyImport
      parentRoute: typeof rootRoute
    }
    '/bmi-calculator/': {
      id: '/bmi-calculator/'
      path: '/bmi-calculator'
      fullPath: '/bmi-calculator'
      preLoaderRoute: typeof BmiCalculatorIndexLazyImport
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

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  CalculatorLazyRoute,
  CounterLazyRoute,
  DistanceCalculatorLazyRoute,
  JsonSorterLazyRoute,
  PasswordGeneratorLazyRoute,
  ToDoListLazyRoute,
  UlidGeneratorLazyRoute,
  UuidGeneratorLazyRoute,
  BmiCalculatorIndexLazyRoute,
  BmiCalculatorHeightHeightRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/calculator",
        "/counter",
        "/distance-calculator",
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
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/calculator": {
      "filePath": "calculator.lazy.tsx"
    },
    "/counter": {
      "filePath": "counter.lazy.tsx"
    },
    "/distance-calculator": {
      "filePath": "distance-calculator.lazy.tsx"
    },
    "/json-sorter": {
      "filePath": "json-sorter.lazy.tsx"
    },
    "/password-generator": {
      "filePath": "password-generator.lazy.tsx"
    },
    "/to-do-list": {
      "filePath": "to-do-list.lazy.tsx"
    },
    "/ulid-generator": {
      "filePath": "ulid-generator.lazy.tsx"
    },
    "/uuid-generator": {
      "filePath": "uuid-generator.lazy.tsx"
    },
    "/bmi-calculator/": {
      "filePath": "bmi-calculator/index.lazy.tsx"
    },
    "/bmi-calculator/height/$height": {
      "filePath": "bmi-calculator/height/$height.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
