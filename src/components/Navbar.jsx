import { NavLink } from 'react-router-dom';
import logoOne from '../../assets/Logo1.png';
import { useCart } from '../hooks/useCart';

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/cart', label: 'Cart' }
];

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <header className="site-header">
      <NavLink className="brand-lockup" to="/" aria-label="Hidden Thoughts home">
        <img className="brand-lockup__wordmark" src={logoOne} alt="Hidden Thoughts wordmark" />
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            <span>{link.label}</span>
            {link.to === '/cart' && itemCount > 0 ? <span className="nav-count">{itemCount}</span> : null}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
