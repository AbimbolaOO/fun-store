import { Navigate, useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import FAQs from './Pages/FAQs';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import OnSale from './Pages/OnSale';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import NotFoundPage from './Pages/404';
import AppLayout from './Layouts/AppLayout';

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
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
