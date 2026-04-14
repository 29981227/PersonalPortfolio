import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const THUMB_BASES = [
  'https://images.unsplash.com/photo-1774995678803-83a7a827a36a',
  'https://images.unsplash.com/photo-1613759007428-9d918fe2d36f',
  'https://images.unsplash.com/photo-1762344692015-ebc803113981',
  'https://images.unsplash.com/photo-1773983113970-509b7325e2f7',
  'https://images.unsplash.com/photo-1762291937086-a4fcabc3c700',
  'https://images.unsplash.com/photo-1769120067643-8192e9587635',
  'https://images.unsplash.com/photo-1765817431646-1d667deff9da',
  'https://images.unsplash.com/photo-1774132221890-bbfc4a064fd4',
  'https://images.unsplash.com/photo-1493919885965-774a46a350a9',
  'https://images.unsplash.com/photo-1602576666092-bf6447a729fc',
  'https://images.unsplash.com/photo-1696937059409-60900a43bc67',
  'https://images.unsplash.com/photo-1774391368462-0b3bcb562021',
];

const t = (base: string) => `${base}?w=300&h=300&fit=crop&auto=format&q=65`;

function CursorHalo() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <div style={{
      position: 'fixed', left: pos.x, top: pos.y,
      width: 507, height: 507, borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none', zIndex: 5,
      background: 'radial-gradient(circle, rgba(182,181,180,0.44) 0%, rgba(182,181,180,0.18) 40%, rgba(182,181,180,0.05) 65%, transparent 80%)',
      filter: 'blur(18px)',
    }} />
  );
}

function PortfolioHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const fit = () => {
      const el = ref.current;
      if (!el) return;
      const cw = el.parentElement?.clientWidth ?? window.innerWidth;
      el.style.whiteSpace = 'nowrap';
      let lo = 10, hi = 900;
      el.style.fontSize = hi + 'px';
      while (hi - lo > 0.5) {
        const mid = (hi + lo) / 2;
        el.style.fontSize = mid + 'px';
        el.scrollWidth <= cw ? (lo = mid) : (hi = mid);
      }
      el.style.fontSize = lo + 'px';
    };
    document.fonts.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return (
    <h1 ref={ref} style={{
      fontFamily: "'Barlow', 'Arial Black', sans-serif",
      fontWeight: 900, lineHeight: 0.84,
      letterSpacing: '-0.03em', color: '#1a1814',
      margin: 0, padding: 0, whiteSpace: 'nowrap',
      display: 'block', userSelect: 'none',
    }}>
      PORTFOLIO
    </h1>
  );
}

const NAV_ITEMS = [
  { label: 'Communication', href: '#communication' },
  { label: 'Digital Media', href: '#digital-media' },
  { label: 'Research', href: '#research' },
];

export default function Home() {
  const doubled = [...THUMB_BASES, ...THUMB_BASES];
  const [lang, setLang] = useState<'EN' | 'CN'>('EN');
  const navigate = useNavigate();

  return (
    <div style={{
      position: 'relative', width: '100vw', height: '100vh',
      overflow: 'hidden', backgroundColor: '#ffffff',
      color: '#1a1814', cursor: 'crosshair',
    }}>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-belt {
          display: flex; width: max-content;
          gap: 3px; align-items: center;
          height: 80px; padding: 3px;
          animation: marquee 44s linear infinite;
          will-change: transform;
        }
        .marquee-belt:hover { animation-play-state: paused; }
        .thumb-wrap {
          width: 74px; height: 74px;
          flex-shrink: 0; overflow: hidden;
          outline: 1px solid rgba(0,0,0,0.08); cursor: pointer;
        }
        .thumb-wrap img {
          width: 74px; height: 74px; object-fit: cover; display: block;
          filter: grayscale(30%) brightness(1.02) contrast(0.92) saturate(0.8);
          transition: filter 0.38s ease, transform 0.38s ease;
        }
        .thumb-wrap:hover img {
          filter: grayscale(0%) brightness(1) contrast(1) saturate(1);
          transform: scale(1.06);
        }
        .grain-overlay {
          position: fixed; inset: 0; pointer-events: none;
          opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat; background-size: 180px;
          z-index: 20; mix-blend-mode: multiply;
        }
        .lang-btn {
          background: none; border: none; padding: 0 2px;
          cursor: pointer; font-family: 'Space Mono', monospace;
          font-size: 8px; letter-spacing: 0.14em; text-transform: uppercase;
          transition: color 0.18s ease; user-select: none;
        }
        .lang-btn.active   { color: rgba(26,24,20,0.80); }
        .lang-btn.inactive { color: rgba(26,24,20,0.26); }
        .lang-btn:hover    { color: rgba(26,24,20,0.60); }
      `}</style>

      <CursorHalo />
      <div className="grain-overlay" />

      <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>

        {/* ── Top marquee ── */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '80px',
          overflow: 'hidden', borderBottom: '1px solid rgba(0,0,0,0.08)',
          backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(255,255,255,0.55)',
        }}>
          <div className="marquee-belt">
            {doubled.map((url, i) => (
              <div className="thumb-wrap" key={i} onClick={() => navigate('/gallery')}>
                <img src={t(url)} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Top-right CN | EN ── */}
        <div style={{
          position: 'absolute', top: '96px', right: '4vw',
          display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          <button className={`lang-btn ${lang === 'CN' ? 'active' : 'inactive'}`} onClick={() => setLang('CN')}>CN</button>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: 'rgba(26,24,20,0.20)' }}>|</span>
          <button className={`lang-btn ${lang === 'EN' ? 'active' : 'inactive'}`} onClick={() => setLang('EN')}>EN</button>
        </div>

        {/* ── Middle-left info ── */}
        <div style={{
          position: 'absolute', top: '50%',
          transform: 'translateY(-50%)', left: '5vw', maxWidth: '400px',
        }}>
          <p style={{
            fontFamily: "'Barlow', sans-serif", fontWeight: 900,
            fontSize: 'clamp(22px, 2.8vw, 36px)', letterSpacing: '-0.03em',
            margin: '0 0 18px 0', color: '#1a1814', lineHeight: 1,
          }}>Xinyao Li</p>
          <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.12)', marginBottom: '16px' }} />
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 'clamp(9px, 0.85vw, 11px)', lineHeight: 1.95,
            letterSpacing: '0.03em', color: 'rgba(26,24,20,0.50)', marginBottom: '20px',
          }}>
            BA Digital Media Design, Tongji University<br />
            MA Design, ECNU&nbsp; /&nbsp; Communication Design, IUAV
          </div>
          <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.12)', marginBottom: '18px' }} />
          <div style={{
            fontFamily: "'Space Mono', monospace", display: 'grid',
            gridTemplateColumns: '60px 1fr', rowGap: '11px', alignItems: 'start',
          }}>
            <span style={{ fontSize: '8px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,24,20,0.28)', paddingTop: '1px' }}>Phone</span>
            <span style={{ fontSize: 'clamp(9px, 0.82vw, 11px)', letterSpacing: '0.06em', color: 'rgba(26,24,20,0.80)' }}>15221697368</span>
            <span style={{ fontSize: '8px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,24,20,0.28)', paddingTop: '1px' }}>Email</span>
            <span style={{ fontSize: 'clamp(9px, 0.82vw, 11px)', letterSpacing: '0.06em', color: 'rgba(26,24,20,0.80)' }}>1842805101@qq.com</span>
          </div>
        </div>

        {/* ── Right vertical nav ── */}
        <div style={{
          position: 'absolute', right: 0, top: '50%',
          width: '32px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', transform: 'translateY(-50%)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href}
                style={{
                  fontFamily: "'Space Mono', monospace", fontSize: '8px',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'rgba(26,24,20,0.28)', whiteSpace: 'nowrap',
                  writingMode: 'vertical-rl', transform: 'rotate(180deg)',
                  textDecoration: 'none', transition: 'color 0.22s ease',
                  userSelect: 'none', cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(26,24,20,0.72)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(26,24,20,0.28)')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Top-left All Works ── */}
        <div style={{
          position: 'absolute', top: '96px', left: '5vw',
          fontFamily: "'Space Mono', monospace", fontSize: '8px',
          letterSpacing: '0.16em', color: 'rgba(26,24,20,0.28)',
          textTransform: 'uppercase', userSelect: 'none',
          display: 'flex', flexDirection: 'row', alignItems: 'center',
          gap: '6px', cursor: 'pointer',
        }}
          onClick={() => navigate('/gallery')}
        >
          <span>All Works</span>
          <span style={{ fontSize: '11px', lineHeight: 1, color: 'rgba(26,24,20,0.22)' }}>↑</span>
        </div>

        {/* ── PORTFOLIO heading ── */}
        <div style={{ position: 'absolute', bottom: '-0.08em', left: 0, right: 0, overflow: 'visible' }}>
          <PortfolioHeading />
        </div>

      </div>
    </div>
  );
}