import { useMemo, useState } from 'react';
import { categories, menu } from './data/menu';

const LOGO_PATH = '/assets/brand-logo.png';

function BrandMark() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="brand-mark" aria-label="Vemparajugari Vantillu logo">
      {!failed ? (
        <img src={LOGO_PATH} alt="Vemparajugari Vantillu" onError={() => setFailed(true)} />
      ) : (
        <div className="logo-placeholder">
          <span>వెంబరాజుగారి</span>
          <strong>వంటిల్లు</strong>
          <small>VEMPRAJUGARI VANTILLU</small>
        </div>
      )}
    </div>
  );
}

function Price({ price }) {
  return <span className="price">₹{price}</span>;
}

function MenuItem({ item, language }) {
  const name = language === 'te' ? item.te : language === 'en' ? item.en : `${item.en} / ${item.te}`;
  return (
    <article className="menu-item">
      <div className="item-copy">
        <h3>{name}</h3>
        {language === 'both' && <p>{item.te}</p>}
      </div>
      <div className="price-list">
        {item.prices.map((entry) => (
          <div className="price-row" key={entry.label}>
            <span>{language === 'te' ? entry.te : entry.label}</span>
            <Price price={entry.price} />
          </div>
        ))}
      </div>
    </article>
  );
}

export default function App() {
  const [active, setActive] = useState('food');
  const [language, setLanguage] = useState('both');
  const [search, setSearch] = useState('');

  const sections = menu[active];
  const visibleSections = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sections;
    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => `${item.en} ${item.te}`.toLowerCase().includes(q)),
      }))
      .filter((section) => section.items.length);
  }, [active, search, sections]);

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-pattern" />
        <div className="hero-inner">
          <div className="topbar">
            <span className="heritage-label">VEMPRAJUGARI VANTILLU</span>
            <button className="owner-button" type="button" onClick={() => alert('Owner portal will be connected after the menu data is verified.')}>Owner</button>
          </div>
          <BrandMark />
          <div className="hero-divider"><span>✦</span></div>
          <p className="hero-subtitle">రుచికి గౌరవం · A place for good food</p>
        </div>
      </header>

      <main>
        <section className="menu-intro">
          <div>
            <p className="eyebrow">OUR MENU</p>
            <h1>Choose your experience</h1>
            <p className="intro-copy">Clear, simple and easy to browse — restaurant food and pickles, together under one brand.</p>
          </div>
          <div className="language-switch" aria-label="Language selector">
            {['both', 'te', 'en'].map((value) => (
              <button key={value} className={language === value ? 'active' : ''} onClick={() => setLanguage(value)} type="button">
                {value === 'both' ? 'తెలుగు + English' : value === 'te' ? 'తెలుగు' : 'English'}
              </button>
            ))}
          </div>
        </section>

        <nav className="category-tabs" aria-label="Menu categories">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={active === category.id ? 'category active' : 'category'}
              onClick={() => { setActive(category.id); setSearch(''); }}
            >
              <span className="category-icon">{category.icon}</span>
              <span><strong>{category.label}</strong><small>{category.te}</small></span>
            </button>
          ))}
        </nav>

        <div className="search-wrap">
          <span>⌕</span>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search menu / మెనూలో వెతకండి" aria-label="Search menu" />
          {search && <button type="button" onClick={() => setSearch('')} aria-label="Clear search">×</button>}
        </div>

        <section className="menu-content">
          {visibleSections.map((section) => (
            <div className="menu-section" key={section.id}>
              <div className="section-heading">
                <div>
                  <p className="section-kicker">{active === 'pickles' ? 'PICKLES' : 'RESTAURANT'}</p>
                  <h2>{language === 'te' ? section.te : section.category}</h2>
                  {language === 'both' && <span>{section.te}</span>}
                </div>
                <span className="section-rule" />
              </div>
              <div className="items-grid">
                {section.items.map((item) => <MenuItem item={item} language={language} key={item.id} />)}
              </div>
            </div>
          ))}

          {!visibleSections.length && (
            <div className="empty-state">
              <span>⌕</span>
              <h3>No matching items</h3>
              <p>Try another name or clear the search.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <BrandMark />
        <p>One restaurant. One identity. Food & pickles.</p>
        <div className="footer-note">Menu information is maintained by the restaurant.</div>
      </footer>
    </div>
  );
}
