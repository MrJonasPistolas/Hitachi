import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'not-found',
                element: <NotFound />
            },
            {
                path: 'server-error',
                element: <ServerError />
            },
            {
                path: '*',
                element: <Navigate replace to='/not-found' />
            }
        ]
    }
];

export const router = createBrowserRouter(routes);