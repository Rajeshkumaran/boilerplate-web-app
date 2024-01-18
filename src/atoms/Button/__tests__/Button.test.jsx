import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/test-utils';
import Button from '../../Button';

describe('Button component', () => {
  it('renders default button', () => {
    const component = <Button data-testid='default-button'>Click me</Button>;
    render(component);
    expect(screen.getByTestId('default-button')).toBeInTheDocument();
  });
});
