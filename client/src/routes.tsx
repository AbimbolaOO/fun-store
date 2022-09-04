import { Navigate, useRoutes } from 'react-router-dom';

import AppLayout from './Layouts/AppLayout';
import NotFoundPage from './Pages/404';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contacts';
import FAQs from './Pages/FAQs';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import OnSale from './Pages/OnSale';
import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import Shop from './Pages/Shop';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'pages/contact-us', element: <Contacts /> },
        { path: 'pages/faqs', element: <FAQs /> },
        { path: 'pages/about-us', element: <About /> },
        { path: 'blogs/post', element: <Blog /> },
        { path: 'collections', element: <Shop /> },
        { path: 'collections/top-picks', element: <OnSale /> },
        { path: '404', element: <NotFoundPage /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/account',
      element: <AppLayout />,
      children: [
        { path: 'login', element: <LogIn /> },
        { path: 'register', element: <Register /> },
        { path: 'reset/:uuid', element: <ResetPassword /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
