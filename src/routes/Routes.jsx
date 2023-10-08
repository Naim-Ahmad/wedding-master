import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import ServiceDetails from '../pages/details/ServiceDetails';
import Gallery from '../pages/gallery/Gallery';
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
            },
            {
                path: '/gallery',
                element: <ProtectedRoute><Gallery /></ProtectedRoute>,
            },
            {
                path: '/dashboard',
                element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
            }
        ],
    },
]);

export default router;
