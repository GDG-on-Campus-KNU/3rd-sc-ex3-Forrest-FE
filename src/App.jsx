import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/Error';
import MainPage from './pages/Main';
import MapPage from './pages/Map';
import RootLayout from './pages/Roots';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: '', element: <MainPage /> },
      { path: 'map', elements: <MapPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
