import { type RouteObject, } from 'react-router'
import { createBrowserRouter, } from 'react-router-dom'
import { MainPage, } from '@/pages/MainPage'
import {
    AppRoutes,
    getRouteMain,
} from '@/shared/const/router'
import { RouteErrorBoundary, } from '../ui/RouteErrorBoundary'

export const routeConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        errorElement: <RouteErrorBoundary />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        errorElement: <RouteErrorBoundary />,
    },
}

export const router = createBrowserRouter(Object.values(routeConfig))