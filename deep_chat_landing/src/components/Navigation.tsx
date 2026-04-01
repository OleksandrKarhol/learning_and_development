import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a href="#" className="nav__logo">
          <span className="nav__logo-dot" />
          deep chat
        </a>

        <ul className="nav__links">
          {['Product', 'Use Cases', 'Pricing', 'Customers'].map((item) => (
            <li key={item}>
              <a href="#" className="nav__link">{item}</a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <button className="nav__signin">Sign In</button>
          <button className="nav__cta">Start free trial</button>
        </div>

        <button className="nav__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="nav__mobile">
          <div className="container">
            {['Product', 'Use Cases', 'Pricing', 'Customers'].map((item) => (
              <a key={item} href="#" className="nav__mobile-link">{item}</a>
            ))}
            <div className="nav__mobile-actions">
              <button className="btn-outline-dark" style={{ justifyContent: 'center' }}>Sign In</button>
              <button className="nav__cta" style={{ justifyContent: 'center' }}>Start free trial</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
