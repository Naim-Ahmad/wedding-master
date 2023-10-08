import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import ServiceDetails from '../pages/details/ServiceDetails';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/details/:id',
                element: <ProtectedRoute><ServiceDetails /></ProtectedRoute>,
            }
        ],
    },
]);

export default router;
