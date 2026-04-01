import { LinkIcon, GitBranchIcon, ExternalLinkIcon } from 'lucide-react';
import './Footer.css';

const LINKS = {
  Product: ['Features', 'Use Cases', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Status', 'Community', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-dot" />
              deep chat
            </div>
            <p className="footer__tagline">
              AI-powered customer support<br />that scales with your business.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="LinkedIn"><LinkIcon size={15} /></a>
              <a href="#" className="footer__social" aria-label="Twitter"><ExternalLinkIcon size={15} /></a>
              <a href="#" className="footer__social" aria-label="GitHub"><GitBranchIcon size={15} /></a>
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(LINKS).map(([category, items]) => (
              <div key={category}>
                <div className="footer__links-heading">{category}</div>
                <ul>
                  {items.map((item) => (
                    <li key={item}><a href="#" className="footer__link">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2025 Deep Chat, Inc. All rights reserved.</span>
          <span>Built for customer success</span>
        </div>
      </div>
    </footer>
  );
}
