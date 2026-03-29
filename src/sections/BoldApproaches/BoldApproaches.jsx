import { useState } from 'react';
import { PROBLEM_AREAS } from '../../constants/categories';
import './BoldApproaches.css';

const STAT_CARDS = [
  {
    id: 1,
    number: '210+',
    description: 'cities / DIGIT with 500M+ citizens',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80',
  },
  {
    id: 2,
    number: '2 Bn',
    description: 'digital certificates issued',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
    accent: true,
  },
];

export function BoldApproaches() {
  const [active, setActive] = useState(PROBLEM_AREAS[0]);

  return (
    <section className="bold">
      <div className="bold__inner">
        <div className="bold__left">
          <h2 className="bold__heading">
            Big problems need <br />
            <strong>bold approaches</strong>
          </h2>

          <div className="bold__filters" role="group" aria-label="Problem areas">
            {PROBLEM_AREAS.map((area) => (
              <button
                key={area}
                className={`bold__filter ${active === area ? 'bold__filter--active' : ''}`}
                onClick={() => setActive(area)}
                aria-pressed={active === area}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        <div className="bold__cards">
          {STAT_CARDS.map((card) => (
            <div key={card.id} className={`bold__card ${card.accent ? 'bold__card--accent' : ''}`}>
              <div className="bold__card-img">
                <img src={card.image} alt={card.description} />
              </div>
              <div className="bold__card-body">
                <span className="bold__card-number">{card.number}</span>
                <p className="bold__card-desc">{card.description}</p>
                <a href="#" className="bold__card-link">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
