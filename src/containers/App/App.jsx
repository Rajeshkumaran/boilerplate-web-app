import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Stack, useTheme } from '@fluentui/react';

import getStyles from './App.styles';
import ErrorBoundary from './ErrorBoundary';

const AuthWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Outlet />
    </>
  );
};

const routes = [
  {
    path: '/',
    element: <AuthWrapper />,
    children: [
      {
        path: '/',
        element: (
          <ErrorBoundary>
            <div>Boilerplate</div>
          </ErrorBoundary>
        ),
      },
    ],
  },
];
const router = createBrowserRouter(routes);

const App = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Stack className={styles.appWrapper}>
      <ToastContainer
        position='bottom-right'
        autoClose={1500}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        theme='light'
        pauseOnHover={false}
      />
      <Stack style={{ margin: `48px ${theme.spacing.s2} 64px` }}>
        <RouterProvider router={router} />
      </Stack>
    </Stack>
  );
};

export default App;
