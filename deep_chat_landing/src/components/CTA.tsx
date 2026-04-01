import { ArrowRight, Check } from 'lucide-react';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="cta__card">
          <h2 className="cta__heading">
            Ready to transform your<br />customer support?
          </h2>
          <p className="cta__sub">
            Join 2,000+ companies using Deep Chat to deliver faster, smarter support at scale.
          </p>
          <div className="cta__actions">
            <button className="btn-light cta__btn">
              Start your free trial
              <ArrowRight size={15} />
            </button>
            <button className="btn-outline-light">Book a demo</button>
          </div>
          <div className="cta__trust">
            {['30-day free trial', 'No credit card required', 'Cancel anytime'].map((item) => (
              <div key={item} className="cta__trust-item">
                <Check size={12} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
