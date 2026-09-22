import { useMemo, useState } from 'react';
import { categories, menu } from './data/menu';

const LOGO_PATH = '/assets/brand-logo.png';

function BrandMark({ compact = false }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`brand-mark ${compact ? 'compact' : ''}`} aria-label="Vemparajugari Vantillu">
      {!failed ? <img src={LOGO_PATH} alt="Vemparajugari Vantillu" onError={() => setFailed(true)} /> : (
        <div className="logo-placeholder"><span>వేమ్పరాజుగారి</span><strong>వంటిల్లు</strong><small>VEMPRAJUGARI VANTILLU</small></div>
      )}
    </div>
  );
}

function Price({ price }) { return <span className="price">₹{price}</span>; }

function MenuItem({ item, language, onOpen }) {
  const name = language === 'te' ? item.te : item.en;
  return (
    <button className="menu-card" type="button" onClick={() => onOpen(item)}>
      <div className="menu-card-copy">
        <div><h3>{name}</h3>{language === 'both' && <p>{item.te}</p>}</div>
        <div className="price-stack">{item.prices.map((entry) => <div className="price-line" key={entry.label}><span>{language === 'te' ? entry.te : entry.label}</span><Price price={entry.price} /></div>)}</div>
      </div><span className="chevron" aria-hidden="true">›</span>
    </button>
  );
}

function ItemDetails({ item, language, onClose }) {
  if (!item) return null;
  const title = language === 'te' ? item.te : item.en;
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="detail-sheet" role="dialog" aria-modal="true" aria-label={title} onClick={(event) => event.stopPropagation()}>
        <button className="detail-close" type="button" onClick={onClose} aria-label="Close">×</button>
        <p className="eyebrow">VEMPRAJUGARI VANTILLU</p><h2>{title}</h2>
        {language === 'both' && <p className="detail-telugu">{item.te}</p>}
        <div className="detail-prices">{item.prices.map((entry) => <div className="detail-price" key={entry.label}><span>{language === 'te' ? entry.te : entry.label}</span><Price price={entry.price} /></div>)}</div>
        {(item.ingredientsEn || item.ingredientsTe) && <div className="ingredients"><p className="section-kicker">INGREDIENTS · పదార్థాలు</p><p>{language === 'te' ? item.ingredientsTe : item.ingredientsEn}</p>{language === 'both' && <small>{item.ingredientsTe}</small>}</div>}
      </section>
    </div>
  );
}

function Home({ onOpen }) {
  return <section className="home-page">
    <div className="hero-home"><div className="hero-glow" /><div className="hero-topline">VEMPRAJUGARI VANTILLU</div><BrandMark /><div className="ornament"><span>✦</span></div></div>
    <div className="home-content"><p className="eyebrow">MENU</p><h1>మెనూ <span>Restaurant Menu</span></h1><p className="home-copy">Explore our restaurant food and traditional pickles.</p>
      <div className="experience-grid">
        <button className="experience-card" onClick={() => onOpen('food')} type="button"><div className="experience-emblem">🍛</div><div className="experience-copy"><strong>రెస్టారెంట్</strong><span>RESTAURANT FOOD</span></div><span className="round-arrow">→</span></button>
        <button className="experience-card" onClick={() => onOpen('pickles')} type="button"><div className="experience-emblem">🫙</div><div className="experience-copy"><strong>పచ్చళ్ళు</strong><span>PICKLES</span></div><span className="round-arrow">→</span></button>
      </div>
      <div className="quick-actions quick-actions-two"><a href="tel:9949211191"><span>☎</span><small>Call</small></a><button type="button" onClick={() => onOpen('location')}><span>⌖</span><small>Location</small></button></div>
    </div>
  </section>;
}

function MenuPage({ active, setActive, language, setLanguage, search, setSearch, onHome, onItem }) {
  const sections = menu[active] || [];
  const visibleSections = useMemo(() => { const q = search.trim().toLowerCase(); if (!q) return sections; return sections.map(s => ({ ...s, items: s.items.filter(i => `${i.en} ${i.te}`.toLowerCase().includes(q)) })).filter(s => s.items.length); }, [active, search, sections]);
  return <section className="menu-page">
    <header className="app-header"><button className="icon-button" onClick={onHome} type="button" aria-label="Back">←</button><BrandMark compact /><span /></header>
    <div className="menu-heading"><div><p className="eyebrow">VEMPRAJUGARI VANTILLU</p><h1>{active === 'pickles' ? 'పచ్చళ్ళు' : 'రెస్టారెంట్ మెనూ'}</h1><span>{active === 'pickles' ? 'PICKLES' : 'RESTAURANT MENU'}</span></div><div className="language-switch" aria-label="Language">{['both','te','en'].map(v => <button key={v} className={language === v ? 'active' : ''} onClick={() => setLanguage(v)} type="button">{v === 'both' ? 'తెలుగు + English' : v === 'te' ? 'తెలుగు' : 'English'}</button>)}</div></div>
    <div className="section-switcher">{categories.map(c => <button key={c.id} className={active === c.id ? 'active' : ''} onClick={() => { setActive(c.id); setSearch(''); }} type="button"><span>{c.icon}</span><strong>{c.label}</strong><small>{c.te}</small></button>)}</div>
    <div className="search-box"><span>⌕</span><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search menu / మెనూలో వెతకండి" aria-label="Search menu" />{search && <button onClick={() => setSearch('')} type="button" aria-label="Clear search">×</button>}</div>
    {visibleSections.map(section => <div className="menu-section" key={section.id}><div className="section-title"><div><p>{active === 'pickles' ? 'PICKLES' : 'RESTAURANT'}</p><h2>{section.category}</h2><span>{section.te}</span></div><i /></div>{section.note && <p className="section-note">{section.note}</p>}<div className="menu-list">{section.items.map(item => <MenuItem key={item.id} item={item} language={language} onOpen={onItem} />)}</div></div>)}
    {!visibleSections.length && <div className="verified-empty"><strong>{active === 'pickles' ? 'Pickle details will be added after verification' : 'No matching items'}</strong><span>{active === 'pickles' ? 'Product names, pack sizes, prices and ingredients will be published after owner confirmation.' : 'Try another menu search.'}</span></div>}
  </section>;
}

function LocationPage({ onBack }) { return <section className="info-page"><header className="app-header"><button className="icon-button" onClick={onBack} type="button">←</button><BrandMark compact /><span /></header><div className="info-card"><p className="eyebrow">VEMPRAJUGARI VANTILLU</p><h1>మా స్థానం</h1><span className="info-en">OUR LOCATION</span><div className="map-placeholder"><span>⌖</span><small>Map location will be connected here</small></div><h3>Banjara Hills, Hyderabad</h3><a className="primary-action" href="tel:9949211191">Call Restaurant</a><p className="phone">9949211191 · 97980 45678</p></div></section>; }

export default function App() {
  const [page, setPage] = useState('home'), [active, setActive] = useState('food'), [language, setLanguage] = useState('both'), [search, setSearch] = useState(''), [selectedItem, setSelectedItem] = useState(null);
  const openMenu = section => { setActive(section); setSearch(''); setPage('menu'); };
  const goHome = () => setPage('home');
  return <div className="app-shell">{page === 'home' && <Home onOpen={target => target === 'location' ? setPage('location') : openMenu(target)} />}{page === 'menu' && <MenuPage active={active} setActive={setActive} language={language} setLanguage={setLanguage} search={search} setSearch={setSearch} onHome={goHome} onItem={setSelectedItem} />}{page === 'location' && <LocationPage onBack={goHome} />}<footer className="site-footer"><BrandMark compact /><p>Vemparajugari Vantillu</p><span>Food · Pickles</span></footer><ItemDetails item={selectedItem} language={language} onClose={() => setSelectedItem(null)} /></div>;
}
