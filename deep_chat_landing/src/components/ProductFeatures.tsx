import { useState } from 'react';
import './ProductFeatures.css';

const FEATURES = [
  {
    title: 'Knowledge Base',
    desc: 'Upload your Q&A and then train the bot with PDF/Word files. Our AI Agent will use your content to create a trained knowledge base.',
  },
  {
    title: 'Custom AI rules',
    desc: 'Control your AI Agent by providing system instructions. Adjust its personality to suit your customer audience.',
  },
  {
    title: 'Security',
    desc: 'Ensure your AI is moderated to gather customer feedback & will only speak about topics related to your business.',
  },
  {
    title: 'Interaction Forms',
    desc: 'Add forms to the conversation to gather customer data before the conversation starts.',
  },
  {
    title: 'Analytics',
    desc: 'Inspect your agents performance by reviewing chat history and customer feedback.',
  },
  {
    title: 'Chat Widget',
    desc: 'Customise and embed the deep chat widget to support the required business configuration.',
  },
];

export default function ProductFeatures() {
  const [active, setActive] = useState(0);

  return (
    <section className="pf">
      <div className="container">
        <h2 className="pf__heading">
          Engineered to be powerful.<br />
          Designed to be simple.
        </h2>

        <div className="pf__layout">
          {/* ── Left: feature list ── */}
          <div className="pf__list">
            {FEATURES.map((f, i) => (
              <button
                key={f.title}
                className={`pf__item ${i === active ? 'pf__item--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="pf__item-title">{f.title}</div>
                {i === active && (
                  <div className="pf__item-desc">{f.desc}</div>
                )}
              </button>
            ))}
          </div>

          {/* ── Right: product screenshot placeholder ── */}
          <div className="pf__screen">
            <div className="pf__screen-inner">
              <div className="pf__screen-bar">
                <span className="pf__screen-dot" />
                <span className="pf__screen-dot" />
                <span className="pf__screen-dot" />
              </div>
              <div className="pf__screen-body">
                <div className="pf__screen-row pf__screen-row--wide" />
                <div className="pf__screen-row pf__screen-row--medium" />
                <div className="pf__screen-row pf__screen-row--short" />
                <div style={{ height: 16 }} />
                <div className="pf__screen-row pf__screen-row--wide" />
                <div className="pf__screen-row pf__screen-row--medium" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
