import './DemoVideo.css';

export default function DemoVideo() {
  return (
    <section className="demo">
      <div className="container">
        <div className="demo__browser">
          {/* Browser chrome */}
          <div className="demo__bar">
            <div className="demo__dots">
              <span className="demo__dot demo__dot--r" />
              <span className="demo__dot demo__dot--y" />
              <span className="demo__dot demo__dot--g" />
            </div>
            <div className="demo__tabs">
              <span className="demo__tab demo__tab--active">deep chat · Dashboard</span>
              <span className="demo__tab">Support Widget</span>
            </div>
            <div className="demo__bar-right">
              <div className="demo__url">app.deepchat.io</div>
            </div>
          </div>

          {/* App content */}
          <div className="demo__app">
            {/* Left sidebar */}
            <div className="demo__sidebar">
              <div className="demo__sidebar-logo">⊙ deep chat</div>
              <div className="demo__sidebar-section">
                <div className="demo__nav-item">Dashboard</div>
                <div className="demo__nav-item demo__nav-item--active">Conversations</div>
                <div className="demo__nav-item">Customers</div>
                <div className="demo__nav-item">Knowledge Base</div>
                <div className="demo__nav-item">Analytics</div>
                <div className="demo__nav-item">Settings</div>
              </div>
            </div>

            {/* Main content */}
            <div className="demo__main">
              {/* Toolbar */}
              <div className="demo__toolbar">
                <div className="demo__toolbar-left">
                  <span className="demo__breadcrumb">Conversations</span>
                  <span className="demo__tag demo__tag--gray">All</span>
                  <span className="demo__tag">Open (12)</span>
                  <span className="demo__tag">Resolved</span>
                </div>
                <div className="demo__toolbar-right">
                  <div className="demo__search">Search conversations...</div>
                </div>
              </div>

              {/* Table header */}
              <div className="demo__table-header">
                <span className="demo__th">Customer</span>
                <span className="demo__th">Subject</span>
                <span className="demo__th">Status</span>
                <span className="demo__th">Last message</span>
                <span className="demo__th">Agent</span>
              </div>

              {/* Table rows */}
              {[
                { name: 'Sarah K.', sub: 'Password reset issue', status: 'Open', time: '2m ago', agent: 'AI' },
                { name: 'Tom B.', sub: 'Billing question', status: 'Resolved', time: '14m ago', agent: 'AI' },
                { name: 'Anna L.', sub: 'Subscription cancellation', status: 'Open', time: '1h ago', agent: 'Mike' },
                { name: 'James M.', sub: 'Product feature request', status: 'Pending', time: '2h ago', agent: 'AI' },
                { name: 'Elena V.', sub: 'Onboarding help', status: 'Resolved', time: '3h ago', agent: 'AI' },
              ].map((row) => (
                <div key={row.name} className="demo__table-row">
                  <span className="demo__td demo__td--name">
                    <span className="demo__avatar">{row.name[0]}</span>
                    {row.name}
                  </span>
                  <span className="demo__td demo__td--sub">{row.sub}</span>
                  <span className="demo__td">
                    <span className={`demo__status demo__status--${row.status.toLowerCase()}`}>{row.status}</span>
                  </span>
                  <span className="demo__td demo__td--muted">{row.time}</span>
                  <span className="demo__td demo__td--agent">{row.agent}</span>
                </div>
              ))}
            </div>

            {/* Right panel - support widget */}
            <div className="demo__widget">
              <div className="demo__widget-header">
                <div className="demo__widget-title">Support Widget</div>
                <span className="demo__widget-live">● Live</span>
              </div>
              <div className="demo__widget-messages">
                <div className="demo__wmsg demo__wmsg--bot">
                  <div className="demo__wmsg-bubble">Hi! How can I help you today?</div>
                </div>
                <div className="demo__wmsg demo__wmsg--user">
                  <div className="demo__wmsg-bubble demo__wmsg-bubble--user">What are your subscription plans?</div>
                </div>
                <div className="demo__wmsg demo__wmsg--bot">
                  <div className="demo__wmsg-bubble">We offer 2 plans: Basic ($15/mo) and Pro ($100/mo).</div>
                </div>
              </div>
              <div className="demo__widget-input">
                <span>Type a message...</span>
                <button className="demo__widget-send">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
