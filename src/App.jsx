import { useMemo, useState } from 'react';
import { categories, menu } from './data/menu';

const LOGO_PATH = '/assets/brand-logo.png';
const demoImages = {
  biryani: 'https://images.unsplash.com/photo-1631515242808-497c3d5b1b1b?auto=format&fit=crop&w=900&q=80',
  chicken: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80',
  pickle: 'https://images.unsplash.com/photo-1599909533730-f9d5f3c1f1e8?auto=format&fit=crop&w=700&q=80',
};

function BrandMark({ compact = false }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`brand-mark ${compact ? 'compact' : ''}`} aria-label="Vemparajugari Vantillu">
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

function ImageCard({ src, alt }) {
  return <img className="food-image" src={src} alt={alt} loading="lazy" />;
}

function Price({ price }) {
  return <span className="price">₹{price}</span>;
}

function MenuItem({ item, language, image }) {
  const name = language === 'te' ? item.te : item.en;
  return (
    <button className="menu-card" type="button">
      {image && <ImageCard src={image} alt="" />}
      <div className="menu-card-copy">
        <div>
          <h3>{name}</h3>
          {language === 'both' && <p>{item.te}</p>}
        </div>
        <div className="price-stack">
          {item.prices.map((entry) => (
            <div className="price-line" key={entry.label}>
              <span>{language === 'te' ? entry.te : entry.label}</span>
              <Price price={entry.price} />
            </div>
          ))}
        </div>
      </div>
      <span className="chevron">›</span>
    </button>
  );
}

function Home({ onOpen }) {
  return (
    <section className="home-page">
      <div className="hero-home">
        <div className="hero-glow" />
        <div className="hero-topline">VEMPRAJUGARI VANTILLU</div>
        <BrandMark />
        <div className="ornament"><span>✦</span></div>
        <p className="hero-telugu">రుచిలో సంప్రదాయం · ప్రతి భోజనంలో ఆతిథ్యం</p>
        <p className="hero-english">Traditional flavours · Timeless hospitality</p>
      </div>

      <div className="home-content">
        <p className="eyebrow">WELCOME</p>
        <h1>భోజన మెనూ <span>Restaurant Menu</span></h1>
        <p className="home-copy">Choose what you would like to explore. Food and pickles are presented together under the same Vemparajugari Vantillu identity.</p>

        <div className="experience-grid">
          <button className="experience-card" onClick={() => onOpen('food')} type="button">
            <div className="experience-image"><ImageCard src={demoImages.biryani} alt="Biryani" /></div>
            <div className="experience-copy"><strong>భోజన మెనూ</strong><span>RESTAURANT MENU</span></div>
            <span className="round-arrow">→</span>
          </button>
          <button className="experience-card" onClick={() => onOpen('pickles')} type="button">
            <div className="experience-image"><ImageCard src={demoImages.pickle} alt="Pickles" /></div>
            <div className="experience-copy"><strong>పచ్చళ్ళు</strong><span>PICKLES</span></div>
            <span className="round-arrow">→</span>
          </button>
        </div>

        <div className="quick-actions">
          <a href="tel:9949211191"><span>⌕</span><small>Call</small></a>
          <button type="button" onClick={() => onOpen('location')}><span>⌖</span><small>Location</small></button>
          <button type="button" onClick={() => onOpen('about')}><span>◉</span><small>About Us</small></button>
        </div>
      </div>
    </section>
  );
}

function MenuPage({ active, setActive, language, setLanguage, search, setSearch, onHome }) {
  const sections = menu[active];
  const visibleSections = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sections;
    return sections.map((section) => ({
      ...section,
      items: section.items.filter((item) => `${item.en} ${item.te}`.toLowerCase().includes(q)),
    })).filter((section) => section.items.length);
  }, [active, search, sections]);

  return (
    <section className="menu-page">
      <header className="app-header">
        <button className="icon-button" onClick={onHome} type="button" aria-label="Back">←</button>
        <BrandMark compact />
        <button className="icon-button" onClick={() => setSearch(search ? '' : ' ')} type="button" aria-label="Search">⌕</button>
      </header>

      <div className="menu-heading">
        <div>
          <p className="eyebrow">VEMPRAJUGARI VANTILLU</p>
          <h1>{active === 'pickles' ? 'పచ్చళ్ళు' : 'బిర్యానీలు'}</h1>
          <span>{active === 'pickles' ? 'PICKLES' : 'BIRYANIS & RESTAURANT FOOD'}</span>
        </div>
        <div className="language-switch">
          {['both', 'te', 'en'].map((value) => <button key={value} className={language === value ? 'active' : ''} onClick={() => setLanguage(value)} type="button">{value === 'both' ? 'తెలుగు + English' : value === 'te' ? 'తెలుగు' : 'English'}</button>)}
        </div>
      </div>

      <div className="section-switcher">
        {categories.map((category) => (
          <button key={category.id} className={active === category.id ? 'active' : ''} onClick={() => { setActive(category.id); setSearch(''); }} type="button">
            <span>{category.icon}</span><strong>{category.label}</strong><small>{category.te}</small>
          </button>
        ))}
      </div>

      <div className="search-box">
        <span>⌕</span>
        <input value={search.trim()} onChange={(e) => setSearch(e.target.value)} placeholder="Search menu / మెనూలో వెతకండి" aria-label="Search menu" />
        {search.trim() && <button onClick={() => setSearch('')} type="button">×</button>}
      </div>

      {visibleSections.map((section) => (
        <div className="menu-section" key={section.id}>
          <div className="section-title"><div><p>{active === 'pickles' ? 'PICKLES' : 'RESTAURANT'}</p><h2>{section.category}</h2><span>{section.te}</span></div><i /></div>
          <div className="menu-list">
            {section.items.map((item, index) => <MenuItem key={item.id} item={item} language={language} image={active === 'pickles' ? demoImages.pickle : index === 0 ? demoImages.biryani : demoImages.chicken} />)}
          </div>
        </div>
      ))}

      {!visibleSections.length && (
        <div className="verified-empty">
          <strong>Menu details coming soon</strong>
          <span>Verified items will appear here after the restaurant confirms the names, ingredients and prices.</span>
        </div>
      )}
    </section>
  );
}

function InfoPage({ type, onBack }) {
  const location = type === 'location';
  return (
    <section className="info-page">
      <header className="app-header"><button className="icon-button" onClick={onBack} type="button">←</button><BrandMark compact /><span /></header>
      <div className="info-card">
        <p className="eyebrow">VEMPRAJUGARI VANTILLU</p>
        <h1>{location ? 'మా స్థానం' : 'మా గురించి'}</h1>
        <span className="info-en">{location ? 'OUR LOCATION' : 'ABOUT US'}</span>
        {location ? (
          <>
            <div className="map-placeholder"><span>⌖</span><small>Map location will be connected here</small></div>
            <h3>Banjara Hills, Hyderabad</h3>
            <a className="primary-action" href="tel:9949211191">Call Restaurant</a>
            <p className="phone">9949211191 · 97980 45678</p>
          </>
        ) : (
          <>
            <div className="about-image"><ImageCard src={demoImages.biryani} alt="Restaurant" /></div>
            <p className="about-copy">వెంబరాజుగారి వంటిల్లు — a place where food, hospitality and tradition come together. Restaurant information shown here will be replaced with the owner's verified wording.</p>
            <div className="quick-actions"><a href="tel:9949211191"><span>⌕</span><small>Call</small></a><button type="button" onClick={() => onBack()}><span>←</span><small>Menu</small></button></div>
          </>
        )}
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const [active, setActive] = useState('food');
  const [language, setLanguage] = useState('both');
  const [search, setSearch] = useState('');

  const openMenu = (section) => { setActive(section); setSearch(''); setPage('menu'); };
  const goHome = () => setPage('home');

  return (
    <div className="app-shell">
      {page === 'home' && <Home onOpen={(target) => target === 'location' || target === 'about' ? setPage(target) : openMenu(target)} />}
      {page === 'menu' && <MenuPage active={active} setActive={setActive} language={language} setLanguage={setLanguage} search={search} setSearch={setSearch} onHome={goHome} />}
      {(page === 'location' || page === 'about') && <InfoPage type={page} onBack={goHome} />}
      <footer className="site-footer"><BrandMark compact /><p>Vemparajugari Vantillu</p><span>Food · Pickles · Hospitality</span></footer>
    </div>
  );
}
