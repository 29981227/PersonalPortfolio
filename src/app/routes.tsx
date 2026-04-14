import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Gallery from './pages/Gallery';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/gallery',
    Component: Gallery,
  },
  {
    path: '/project/:id',
    Component: ProjectDetail,
  },
]);