import { render } from '@testing-library/react';

import Lib4 from './lib4';

describe('Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
