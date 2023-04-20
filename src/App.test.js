import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';



describe("App Component", () => {
  it('renders tropical tigers', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot()
  });

  it('renders wonderful wombats after button click', async () => {
    const user = userEvent.setup()

    render(<App />);
    const button = screen.getByRole('button', {name: 'Click me!'});

    await user.click(button)
    

    expect(screen.getByRole('heading').textContent).toMatch(/wonderful wombats/i)
  })
})
