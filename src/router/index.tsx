import { createHashRouter } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import Home from '@/pages/Home';
import MillionDollarPentagram from '@/pages/MillionDollarPentagram';
import ExamplesPage from '@/pages/ExamplesPage';
import NotFound from '@/pages/NotFound';

/**
 * Hash-based routing (createHashRouter).
 * URLs look like `/#/…` and need no server rewrite rules.
 *
 * Why hash mode:
 * - Works on any static host without extra server config
 * - The fragment is not sent to the server
 * - Handy for static sites and CDNs
 *
 * Add a route:
 * {
 *   path: '/your-path',
 *   element: <YourComponent />,
 * }
 */
export const router = createHashRouter([
  {
    element: <SiteLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/project/million-dollar-pentagram',
        element: <MillionDollarPentagram />,
      },
      {
        path: '/examples',
        element: <ExamplesPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
