import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { App } from './app';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished. afterEach(cleanup);
it('App contains text "hello world"', () => {
    const { queryByText } = render(
        <App />);
    expect(queryByText(/hello world/i)).toBeTruthy();
});

test('Greeting.js contains an image', () => {
    const { container } = render(<App />);
    const imageElement = container.querySelector('img');
    expect(imageElement).toBeInTheDocument();
});
