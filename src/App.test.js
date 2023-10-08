import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';
import { Eats_fish } from './Greetings'
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished. afterEach(cleanup);
it('App contains text "hello world"', () => {
    const { queryByText } = render(
        <App />);
    expect(queryByText(/hello world/i)).toBeTruthy();
});

test('Greeting.js contains an image', () => {
    const { container } = render(<Eats_fish />);
    const imageElement = container.querySelector('img');
    expect(imageElement).toBeInTheDocument();
});
