import { useState } from 'react';
import { Store, GraduationCap, ShoppingCart, Plane, Grid } from 'lucide-react';
import './IndustryUseCases.css';

const INDUSTRIES = [
  {
    id: 'store',
    icon: <Store size={24} />,
    label: 'Store',
    heading: 'Store',
    desc: `Deep Chat AI handles customer queries for retail stores by providing instant guidance on product availability, store hours, and returns. By automating AI-powered support, it can only access the information they need to make informed decisions about their store.`,
  },
  {
    id: 'education',
    icon: <GraduationCap size={24} />,
    label: 'Education',
    heading: 'Education',
    desc: `Deep Chat AI transforms the education journey by providing students with instant guidance on courses, facilities, scholarships, and enrollment. By automating AI-powered application support, it can only access the information they need to make informed decisions about them.

Program Based Application Support Today.        Natural Number of email inquiries being "Full" answers.`,
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCart size={24} />,
    label: 'E-commerce',
    heading: 'E-commerce',
    desc: `Deep Chat AI handles thousands of e-commerce queries simultaneously — from order tracking to product recommendations. Reduce cart abandonment and increase conversions with instant, personalised support at every step.`,
  },
  {
    id: 'travel',
    icon: <Plane size={24} />,
    label: 'Travel & Hospitality',
    heading: 'Travel & Hospitality',
    desc: `From booking assistance to travel policies, Deep Chat AI ensures travellers and guests get the right information instantly. Reduce call centre load and delight customers with contextual, 24/7 assistance.`,
  },
  {
    id: 'other',
    icon: <Grid size={24} />,
    label: 'Other',
    heading: 'Any industry',
    desc: `Deep Chat adapts to any sector — healthcare, finance, SaaS, and beyond. Train your AI with your own content and deploy in minutes across any customer-facing touchpoint.`,
  },
];

export default function IndustryUseCases() {
  const [active, setActive] = useState(1); // Education selected by default
  const industry = INDUSTRIES[active];

  return (
    <section className="iuc">
      <div className="container iuc__inner">
        <h2 className="iuc__heading">Perfect for all use cases across multiple industries</h2>

        {/* ── Industry icon row ── */}
        <div className="iuc__icon-row">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.id}
              className={`iuc__icon-btn ${i === active ? 'iuc__icon-btn--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <div className="iuc__icon-wrap">{ind.icon}</div>
              <span className="iuc__icon-label">{ind.label}</span>
            </button>
          ))}
        </div>

        {/* ── Content ── */}
        <div className="iuc__content">
          {/* Left: chat mockup */}
          <div className="iuc__mockup">
            <div className="iuc__mockup-browser">
              <div className="iuc__mockup-bar">
                <span className="iuc__mock-dot iuc__mock-dot--r" />
                <span className="iuc__mock-dot iuc__mock-dot--y" />
                <span className="iuc__mock-dot iuc__mock-dot--g" />
              </div>
              <div className="iuc__mockup-body">
                <div className="iuc__form-section">
                  <div className="iuc__form-msg">
                    <div className="iuc__form-avatar">AI</div>
                    <div className="iuc__form-bubble">Please fill in your details to get started.</div>
                  </div>
                  <div className="iuc__form-fields">
                    <div className="iuc__form-field">
                      <label>First name</label>
                      <div className="iuc__field-input">John</div>
                    </div>
                    <div className="iuc__form-field">
                      <label>Last name</label>
                      <div className="iuc__field-input">Smith</div>
                    </div>
                    <div className="iuc__form-field">
                      <label>Email</label>
                      <div className="iuc__field-input">john@example.com</div>
                    </div>
                    <div className="iuc__form-field">
                      <label>Question</label>
                      <div className="iuc__field-input iuc__field-input--area">What courses do you offer?</div>
                    </div>
                  </div>
                </div>
                <div className="iuc__chat-row">
                  <div className="iuc__form-msg">
                    <div className="iuc__form-avatar">AI</div>
                    <div className="iuc__form-bubble">
                      We offer 3 programs: Business, Technology and Design. Which interests you?
                    </div>
                  </div>
                  <div className="iuc__form-msg iuc__form-msg--user">
                    <div className="iuc__form-bubble iuc__form-bubble--user">Technology, please.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text content */}
          <div className="iuc__text">
            <h3 className="iuc__text-heading">{industry.heading}</h3>
            <p className="iuc__text-body">{industry.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
