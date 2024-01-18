/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom/extend-expect';
/**
 * To enusure custom rendering is possible while testing
 * Can be uncommented when we have localization and theming in future
 */

import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/reducer';
import { ThemeProvider as FluentProvider, initializeIcons } from '@fluentui/react';
import theme from '../theme';
import api from '../dataLayer/apis';

initializeIcons('https://static2.sharepointonline.com/files/fabric/assets/icons/');

function customRender(
  ui,
  { preloadedState = null, store = null, wrapWithStoreProvider = false, ...options } = {},
) {
  const wrapper = ({ children }) => {
    const themeWrappedComponent = <FluentProvider theme={theme}>{children}</FluentProvider>;

    if (wrapWithStoreProvider || preloadedState || store) {
      const config = {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
        devTools: process.env.NODE_ENV !== 'production',
      };
      if (preloadedState) {
        config.preloadedState = preloadedState;
      }
      const appStore = store && store.getState ? store : configureStore(config);
      return <Provider store={appStore}>{themeWrappedComponent}</Provider>;
    } else {
      return themeWrappedComponent;
    }
  };
  return render(ui, { wrapper, ...options });
}

function getSnapshot(
  component,
  { preloadedState = null, store = null, wrapWithStoreProvider = false, ...options } = {},
) {
  const themeWrappedComponent = <FluentProvider theme={theme}>{component}</FluentProvider>;

  if (wrapWithStoreProvider || preloadedState || store) {
    const config = {
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
      devTools: process.env.NODE_ENV !== 'production',
    };
    if (preloadedState) {
      config.preloadedState = preloadedState;
    }
    const appStore = store && store.getState ? store : configureStore(config);
    return renderer.create(<Provider store={appStore}>{themeWrappedComponent}</Provider>).toJSON();
  } else {
    return renderer.create(themeWrappedComponent).toJSON();
  }
}

function customRenderHook(
  callback,
  { preloadedState = null, store = null, wrapWithStoreProvider = false, ...options },
) {
  const wrapper = ({ children }) => {
    const themeWrappedComponent = <FluentProvider theme={theme}>{children}</FluentProvider>;

    if (wrapWithStoreProvider || preloadedState || store) {
      const config = {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
        devTools: process.env.NODE_ENV !== 'production',
      };
      if (preloadedState) {
        config.preloadedState = preloadedState;
      }
      const appStore = store && store.getState ? store : configureStore(config);
      return <Provider store={appStore}>{themeWrappedComponent}</Provider>;
    } else {
      return themeWrappedComponent;
    }
  };

  return renderHook(callback, { wrapper, ...options });
}

export * from '@testing-library/react';
export { customRender as render };
export { customRenderHook as renderHook };
export { getSnapshot };
