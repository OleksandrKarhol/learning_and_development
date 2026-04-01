import { Check } from 'lucide-react';
import './Pricing.css';

const PLANS = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    desc: 'Perfect for small businesses getting started with AI support.',
    features: [
      '1,000 AI conversations/month',
      '1 chatbot',
      'Website widget',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start free trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$99',
    period: '/month',
    desc: 'For growing teams that need more power and integrations.',
    features: [
      '10,000 AI conversations/month',
      '5 chatbots',
      'All channels (web, Slack, email)',
      'Advanced analytics & reports',
      'CRM integrations',
      'Live handoff to agents',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Custom solutions for large teams with advanced requirements.',
    features: [
      'Unlimited conversations',
      'Unlimited chatbots',
      'Custom integrations',
      'Dedicated success manager',
      'SLA & uptime guarantees',
      'SSO / SAML',
      'Custom data residency',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container pricing__inner">
        <div className="pricing__header">
          <h2 className="pricing__heading">Simple, transparent pricing</h2>
          <p className="pricing__subtext">Start free for 30 days. No credit card required.</p>
        </div>

        <div className="pricing__cards">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`pricing__card ${plan.highlighted ? 'pricing__card--highlighted' : ''}`}>
              {plan.badge && <div className="pricing__badge">{plan.badge}</div>}
              <div className="pricing__plan-name">{plan.name}</div>
              <div className="pricing__price">
                <span className="pricing__price-amount">{plan.price}</span>
                <span className="pricing__price-period">{plan.period}</span>
              </div>
              <p className="pricing__plan-desc">{plan.desc}</p>
              <button className={plan.highlighted ? 'btn-light pricing__cta' : 'btn-outline-light pricing__cta'}>
                {plan.cta}
              </button>
              <div className="pricing__features">
                {plan.features.map((f) => (
                  <div key={f} className="pricing__feature">
                    <Check size={13} className="pricing__feature-check" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
