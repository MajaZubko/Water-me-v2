import React from 'react';
import { SignUp } from '../signUp.component';
import { makeContextRenderer } from '../../../shared/utils/testUtils';

describe('AllPlants: Component', () => {
  const component = () => <SignUp />;
  const render = makeContextRenderer(component);

  it('should render correctly', () => {
    const { container } = render();
    expect(container.firstChild).toMatchSnapshot();
  });
});
