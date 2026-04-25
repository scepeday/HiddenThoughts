import { NavLink } from 'react-router-dom';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div>
          <p className="wordmark footer-wordmark">Hidden Thoughts</p>
        </div>
      </div>
      <div className="footer-column">
        <p className="footer-label">Navigate</p>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="footer-column">
        <p className="footer-label">Studio</p>
        <p>Toronto / Online</p>
        <p>studio@hiddenthoughts.example</p>
        <p>Selected goods, live catalog, no excess.</p>
      </div>
    </footer>
  );
}
