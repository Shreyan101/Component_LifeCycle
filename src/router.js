import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import LifeCycle from './Components/LifeCycle';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lifecycle',
    element: <LifeCycle />,
  },
]);

export default appRouter;
