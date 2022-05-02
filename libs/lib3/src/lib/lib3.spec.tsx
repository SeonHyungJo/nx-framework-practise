import { render } from '@testing-library/react';

import Lib3 from './lib3';

describe('Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
