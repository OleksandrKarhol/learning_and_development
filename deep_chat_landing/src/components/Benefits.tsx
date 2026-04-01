import { Hourglass, Headset, Banknote, Mail, ShieldCheck, Waves } from 'lucide-react';
import './Benefits.css';

const ITEMS = [
  { icon: <Hourglass size={22} />, label: 'Reduce response time' },
  { icon: <Banknote size={22} />, label: 'Drive more conversions' },
  { icon: <ShieldCheck size={22} />, label: 'Build trust' },
  { icon: <Headset size={22} />, label: 'Relieve your support agents' },
  { icon: <Mail size={22} />, label: 'Fuel your email campaigns' },
  { icon: <Waves size={22} />, label: 'Reduce friction' },
];

export default function Benefits() {
  return (
    <section className="bene">
      <div className="container">
        <div className="bene__grid">
          {ITEMS.map((item) => (
            <div key={item.label} className="bene__item">
              <div className="bene__icon">{item.icon}</div>
              <div className="bene__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
