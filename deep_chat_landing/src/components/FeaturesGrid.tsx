import { useState } from 'react';
import { BookOpen, History, FileText, BarChart2, MessageSquare } from 'lucide-react';
import './FeaturesGrid.css';

const TABS = [
  { id: 'knowledge', icon: <BookOpen size={15} />, label: 'Knowledge' },
  { id: 'history', icon: <History size={15} />, label: 'AI history' },
  { id: 'forms', icon: <FileText size={15} />, label: 'Forms' },
  { id: 'analytics', icon: <BarChart2 size={15} />, label: 'Analytics' },
  { id: 'widget', icon: <MessageSquare size={15} />, label: 'Chat widget' },
];

const PREVIEW = {
  knowledge: {
    sidebar: ['Getting Started.pdf', 'Product FAQ.docx', 'Pricing Guide.pdf', 'Return Policy.pdf'],
    main: {
      title: 'Knowledge Base',
      desc: 'Upload your documents and let AI learn from them.',
      items: [
        { name: 'Product FAQ.pdf', size: '2.4 MB', status: 'Synced' },
        { name: 'Pricing Guide.docx', size: '890 KB', status: 'Synced' },
        { name: 'Technical Docs', size: '14.2 MB', status: 'Syncing...' },
      ],
    },
  },
  history: {
    sidebar: ['Conversations', 'Export', 'Archive', 'Settings'],
    main: {
      title: 'Conversation History',
      desc: 'Review all past conversations and AI performance.',
      items: [
        { name: 'Sarah K. — password reset', size: '2m ago', status: 'Resolved' },
        { name: 'Tom B. — billing question', size: '14m ago', status: 'Resolved' },
        { name: 'Anna L. — cancellation', size: '1h ago', status: 'Open' },
      ],
    },
  },
  forms: {
    sidebar: ['Name field', 'Email field', 'Question', 'Submit'],
    main: {
      title: 'Interaction Forms',
      desc: 'Collect user data before or during conversations.',
      items: [
        { name: 'Lead capture form', size: '4 fields', status: 'Active' },
        { name: 'Support request', size: '3 fields', status: 'Active' },
        { name: 'Feedback survey', size: '6 fields', status: 'Draft' },
      ],
    },
  },
  analytics: {
    sidebar: ['Overview', 'CSAT', 'Volume', 'Resolution'],
    main: {
      title: 'Analytics Dashboard',
      desc: 'Track resolution rates, CSAT, and conversation trends.',
      items: [
        { name: 'Resolution Rate', size: '94.2%', status: '↑ 3.1%' },
        { name: 'Avg. CSAT Score', size: '4.7/5', status: '↑ 0.3' },
        { name: 'Chats this month', size: '12,847', status: '—' },
      ],
    },
  },
  widget: {
    sidebar: ['Appearance', 'Behaviour', 'Triggers', 'Embed'],
    main: {
      title: 'Chat Widget',
      desc: 'Customise and embed the widget for your brand.',
      items: [
        { name: 'Widget theme', size: 'Dark', status: 'Active' },
        { name: 'Trigger rule', size: '10s delay', status: 'Active' },
        { name: 'Custom domain', size: 'Configured', status: 'Live' },
      ],
    },
  },
};

export default function FeaturesGrid() {
  const [active, setActive] = useState<keyof typeof PREVIEW>('knowledge');
  const data = PREVIEW[active];

  return (
    <section className="fg">
      <div className="container fg__inner">
        <h2 className="fg__heading">Features that change the whole experience</h2>

        {/* ── Tab bar ── */}
        <div className="fg__tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`fg__tab ${active === t.id ? 'fg__tab--active' : ''}`}
              onClick={() => setActive(t.id as keyof typeof PREVIEW)}
            >
              <span className="fg__tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Browser mockup ── */}
        <div className="fg__browser">
          <div className="fg__browser-bar">
            <div className="fg__dots">
              <span className="fg__dot fg__dot--r" />
              <span className="fg__dot fg__dot--y" />
              <span className="fg__dot fg__dot--g" />
            </div>
            <div className="fg__browser-url">app.deepchat.io/{active}</div>
          </div>
          <div className="fg__browser-app">
            {/* Sidebar */}
            <div className="fg__app-sidebar">
              <div className="fg__app-logo">⊙ deep chat</div>
              {data.sidebar.map((item) => (
                <div key={item} className="fg__app-nav">{item}</div>
              ))}
            </div>
            {/* Content */}
            <div className="fg__app-content">
              <div className="fg__app-header">
                <div className="fg__app-title">{data.main.title}</div>
                <div className="fg__app-desc">{data.main.desc}</div>
              </div>
              <div className="fg__app-table">
                {data.main.items.map((item) => (
                  <div key={item.name} className="fg__app-row">
                    <div className="fg__app-row-dot" />
                    <span className="fg__app-row-name">{item.name}</span>
                    <span className="fg__app-row-size">{item.size}</span>
                    <span className={`fg__app-row-status ${item.status.includes('↑') || ['Synced','Active','Resolved','Live'].includes(item.status) ? 'fg__app-row-status--good' : item.status === 'Open' || item.status === 'Syncing...' ? 'fg__app-row-status--warn' : ''}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
