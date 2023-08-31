import MainPage from './main-page/main-page';
import GamePage from './game-page/game-page';
import {
  createBrowserRouter,
} from 'react-router-dom';

import {gamePageLoader} from './game-page/game-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: 'game/:id',
    element: <GamePage />,
    loader: gamePageLoader,
  }
]);

export default router;