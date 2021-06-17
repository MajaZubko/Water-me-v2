import React from 'react';
import { LogIn } from '../logIn.component';
import { makeContextRenderer } from '../../../shared/utils/testUtils';

describe('AllPlants: Component', () => {
  const component = () => <LogIn />;
  const render = makeContextRenderer(component);

  it('should render correctly', () => {
    const { container } = render();
    expect(container.firstChild).toMatchSnapshot();
  });
});
