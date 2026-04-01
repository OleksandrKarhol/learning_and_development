import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">

        <a href="#" className="hero__badge">
          <span className="hero__badge-tag">Survey</span>
          AI Chatbots — Is this for me?
          <ChevronRight size={13} />
        </a>

        <h1 className="hero__heading">
          Customer Support<br />
          with AI Assistants
        </h1>

        <p className="hero__sub">
          Be smarter with our conversational AI tool for customer<br />
          self-service and lead generation.
        </p>

        <div className="hero__cta-row">
          <button className="btn-dark hero__btn-main">Start Free Trial</button>
          <button className="btn-outline-dark">
            Watch Demo <ArrowRight size={14} />
          </button>
        </div>

        <div className="hero__trust">
          <div className="hero__trust-item">
            <Check size={13} className="hero__check" />
            <span>30 days free</span>
          </div>
          <div className="hero__trust-sep" />
          <div className="hero__trust-item">
            <Check size={13} className="hero__check" />
            <span>no credit card</span>
          </div>
          <div className="hero__trust-sep" />
          <div className="hero__trust-trustpilot">
            <div className="hero__trust-stars">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="hero__star">★</span>
              ))}
            </div>
            <span className="hero__trustpilot-text">Trustpilot</span>
          </div>
        </div>

        <div className="hero__logos">
          <span className="hero__logos-label">Trusted by industry leaders:</span>
          <div className="hero__logos-row">
            {[0,1,2,3,4].map(i => (
              <div key={i} className="hero__logo-circle" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
