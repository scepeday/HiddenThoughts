import { NavLink } from 'react-router-dom';
import logoWordmark from '../../assets/MainLogo.png';

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
        <img className="footer-wordmark" src={logoWordmark} alt="Hidden Thoughts" />
        <p className="footer-copy">Issue 001. Downtown Toronto based.</p>
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
        <p>@hidden_thoughts</p>
        <p>Toronto / Online</p>
        <p>Design services / Objects / Printed matter</p>
      </div>
    </footer>
  );
}
