import { render, screen } from '@testing-library/react';
import Repository from './Repository.component';

test('renders repository name', () => {
  render(<Repository name={'test'} />);
  const titleElement = screen.getByText(/test/i);
  expect(titleElement).toBeInTheDocument();
});
