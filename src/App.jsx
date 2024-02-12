import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';
import { Global } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import MapPage from './pages/MapPage';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: '', element: <MainPage /> },
      { path: 'map', element: <MapPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
