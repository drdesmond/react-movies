import { render } from '@testing-library/react';
import Loader, { LoaderProps } from './Loader';

describe('Loader', () => {
  it('renders loader when loading is true', () => {
    const props: LoaderProps = {
      loading: true,
    };

    const { container } = render(<Loader {...props} />);
    const loaderElement = container.querySelector('.animate-spin');

    expect(loaderElement).toBeInTheDocument();
  });

  it('does not render loader when loading is false', () => {
    const props: LoaderProps = {
      loading: false,
    };

    const { container } = render(<Loader {...props} />);
    const loaderElement = container.querySelector('.animate-spin');

    expect(loaderElement).toBeNull();
  });
});