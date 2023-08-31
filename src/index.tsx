import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './redux/store'
import { RouterProvider } from 'react-router';
import router from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
