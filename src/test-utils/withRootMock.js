/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  ThemeProvider as FluentProvider,
  initializeIcons,
} from '@fluentui/react';
import theme from '../theme';

initializeIcons("https://static2.sharepointonline.com/files/fabric/assets/icons/");

export default function withRoot(WrappedComponent) {
  const Comp = ({ ...props }) => (
    <FluentProvider theme={theme}>
      <WrappedComponent {...props} />
    </FluentProvider>
  );
  Comp.defaultProps = { ...WrappedComponent.defaultProps };
  Comp.propTypes = { ...WrappedComponent.propTypes };
  return Comp;
}
