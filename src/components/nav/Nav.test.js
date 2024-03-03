import { render, screen } from '@testing-library/react';
import Nav from './Nav';

beforeEach(() => {
    render(<Nav />);
});

test('renders logo little lemon link', () => {
    const logo = screen.getByAltText('logo Little Lemon');
    const anchorElement = logo.parentElement;
    expect(logo).toBeInTheDocument();
    expect(anchorElement.getAttribute('href')).toBe('/');
});

test('renders Home link', () => {
    const home = screen.getByText('Home');
    expect(home).toBeInTheDocument();
});

test('renders About link', () => {
    const about = screen.getByText('About');
    expect(about).toBeInTheDocument();
});

test('renders Reservations link', () => {
    const reservations = screen.getByText('Reservations');
    expect(reservations).toBeInTheDocument();
});

test('renders Order Online link', () => {
    const orderOnline = screen.getByText('Order Online');
    expect(orderOnline).toBeInTheDocument();
    expect(orderOnline).toHaveAttribute('href', '/order-online');
});

test('renders Login link', () => {
    const login = screen.getByText('Login');
    expect(login).toBeInTheDocument();
    expect(login).toHaveAttribute('href', '/');
});
