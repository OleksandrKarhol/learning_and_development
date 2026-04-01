import './UseCases.css';

export default function UseCases() {
  return (
    <section className="uc">
      <div className="container uc__inner">

        {/* ── Card 1: Customer Support ── */}
        <div className="uc__card">
          <div className="uc__card-head">
            <h3 className="uc__card-title">Customer Support</h3>
            <p className="uc__card-desc">
              Discover your solutions to customer information seeking. Customer
              and better experience up to 300% and boosting your CSAT score
              from 88%.
            </p>
          </div>
          <div className="uc__card-preview">
            <div className="uc__chat">
              {/* Bot messages */}
              <div className="uc__msg uc__msg--bot">
                <div className="uc__msg-avatar ai">AI</div>
                <div className="uc__msg-bubble">Hi, how can I help you?</div>
              </div>
              <div className="uc__msg uc__msg--user">
                <div className="uc__msg-bubble uc__msg-bubble--user">
                  I would like to apply for your online course.
                </div>
              </div>
              <div className="uc__msg uc__msg--bot">
                <div className="uc__msg-avatar ai">AI</div>
                <div className="uc__msg-bubble">
                  Sure! I will guide you step-by-step. Let's start with your name.
                  <div className="uc__msg-resolved">
                    <span className="uc__check">✓</span> Resolved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Card 2: Lead Generation ── */}
        <div className="uc__card">
          <div className="uc__card-head">
            <h3 className="uc__card-title">Lead Generation</h3>
            <p className="uc__card-desc">
              Link 30% more website visitors to more leads. Seamlessly
              store each interaction. Make it easy to turn them into customers.
            </p>
          </div>
          <div className="uc__card-preview">
            <div className="uc__table">
              <div className="uc__table-head">
                <span>Name</span>
                <span>Email</span>
                <span>Company</span>
                <span>Status</span>
              </div>
              {[
                { name: 'Amanda Chang', email: 'amanda@techco.com', company: 'TechCo', status: 'Hot lead' },
                { name: 'Bobby Brown', email: 'bobby@webfirm.io', company: 'WebFirm', status: 'Warm' },
                { name: 'Sabrina Müller', email: 'sabrina@corp.de', company: 'Corp DE', status: 'Follow up' },
                { name: 'Jason Choi', email: 'jason@apps.kr', company: 'Apps KR', status: 'New' },
              ].map((row) => (
                <div key={row.name} className="uc__table-row">
                  <span className="uc__table-td uc__table-td--bold">{row.name}</span>
                  <span className="uc__table-td uc__table-muted">{row.email}</span>
                  <span className="uc__table-td">{row.company}</span>
                  <span className="uc__table-td">
                    <span className={`uc__tag uc__tag--${row.status === 'Hot lead' ? 'hot' : row.status === 'Warm' ? 'warm' : 'default'}`}>
                      {row.status}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
