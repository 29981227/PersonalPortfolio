import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import cover01 from '../../imports/Slide_16_9_-_53.png?url';
import cover02 from '../../imports/游戏-lostgene-实机图片 (7).jpg?url';
import cover03 from '../../imports/设计研究-社交身份融合-实体书摄影 (6).jpg?url';
import cover04 from 'figma:asset/ed928b5add7072e8b0198040a54c1cf643920f62.png';
import cover05 from 'figma:asset/19cb0e3dc57c5d167d57313bf53508bc33c3a1c2.png';
import cover07 from '../../imports/UIUX-网易intern-君临九歌ui设计 (1).png?url';
import cover08 from 'figma:asset/cda99d77322dd7745d291aa69ab9a2f68063a280.png';

// ── Categories (no "全部") ─────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'digital',  zh: '数字媒体', en: 'Digital Media' },
  { id: 'uiux',     zh: 'UI/UX', en: 'UI/UX Design' },
  { id: 'visual',   zh: '视觉传达', en: 'Visual Comm.' },
  { id: 'research', zh: '设计研究', en: 'Design Research' },
] as const;
type CatId = (typeof SECTIONS)[number]['id'];

// ── Project data ──────────────────────────────────────────────────────────────
const PROJECTS: {
  id: number; num: string; category: CatId;
  title: string; tags: string[]; description: string;
  coverImage?: string;
}[] = [
  {
    id: 1, num: '01', category: 'digital',
    title: '基于野生动物数据的疗愈冥想 APP',
    tags: ['数字媒体', '数据可视化', '疗愈设计', 'APP设计'],
    description:
      '与云龙生态保护区合作，提取野生动物分布、鸣叫与活动数据，转化为沉浸式"动物星空"。通过VR空间体验与个性化动态星盘，帮助用户缓解压力进入心流状态，在自然探索中实现心理疗愈，带动当地生态保护科普。',
    coverImage: cover01,
  },
  {
    id: 2, num: '02', category: 'digital',
    title: '与华大基因校企合作的严肃游戏《LOST GENE》',
    tags: ['数字媒体', '严肃游戏', '交互叙事', '机制设计'],
    description:
      '以植物基因合成为核心机制的解谜探险游戏。玩家扮演研究员在爱琴海小岛探索物种缺失之谜，寻找场景线索、获取基因密码并在合成台生成新生植物以突破关卡，结合"植物图鉴"反馈机制，实现寓教于乐。',
    coverImage: cover02,
  },
  {
    id: 4, num: '04', category: 'visual',
    title: 'Getting Rid of Eating Disorder 动态影像',
    tags: ['视觉传达', '动态影像', '叙事设计', '女性主义'],
    description:
      '以进食障碍女性患者视角，刻画在身材焦虑下，游走于节食与失控暴食之间的心理挣扎。通过强烈的视觉隐喻展现病发高潮，最终导向正念疗愈与自我接纳，传达打破单一审美标准的寄语。',
    coverImage: cover04,
  },
  {
    id: 3, num: '03', category: 'research',
    title: '"对话"：一句话社交应用与数字身份思辨',
    tags: ['思辨设计', '产品设计', '社交行为研究'],
    description:
      '探讨数字身份与现实身份边界，产出一款仅保留"一句话"聊天记录的实名通讯应用。对话框形态随双方打字速度发生形变挤压，通过视觉压迫感还原现实沟通中的主导性与真实社交张力。',
    coverImage: cover03,
  },
  {
    id: 5, num: '05', category: 'research',
    title: '基于调研的大学生作息与健康对策设计',
    tags: ['用户研究', '服务设计', '行为分析'],
    description:
      '针对大学生因熬夜和久坐导致的健康下滑进行深度用户访谈。对比行为模式，洞察时间管理与焦虑的恶性循环，提出"交换的一天"体验活动、专属自习室及正念手册等综合干预方案。',
    coverImage: cover05,
  },
  {
    id: 7, num: '07', category: 'uiux',
    title: '君临九歌游戏UI设计',
    tags: ['UI/UX', 'UI设计', '游戏设计', '网易实习'],
    description:
      '三国风的策略游戏，在网易实习中协助正职设计师参与ui设计，包括icon、元素、排版等。',
    coverImage: cover07,
  },
  {
    id: 8, num: '08', category: 'uiux',
    title: '七裔游戏UI设计',
    tags: ['UI/UX', 'UI设计', '游戏设计', '网易实习'],
    description:
      '在网易实习中协助正职设计师参与ui设计，包括icon、元素、排版等。',
    coverImage: cover08,
  },
  {
    id: 9, num: '09', category: 'uiux',
    title: '亚马逊全球物流Landing Page设计',
    tags: ['UI/UX', 'Landing Page', '视觉设计'],
    description: '在亚马逊进行独立UX设计与协作落地：独立在 Figma 中完成落地页与交互原型设计，与技术团队紧密配合，保障设计方案高效精准落地。由于还未上线，无法展示企业内部网页。',
  },
];

// ── Auto-fit ALL WORKS heading ────────────────────────────────────────────────
function AutoFitHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const fit = () => {
      const el = ref.current;
      if (!el) return;
      const cw = el.parentElement?.clientWidth ?? window.innerWidth;
      el.style.whiteSpace = 'nowrap';
      let lo = 10, hi = 1000;
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
      fontFamily: "'Barlow', sans-serif",
      fontWeight: 900, lineHeight: 0.86,
      letterSpacing: '-0.04em', color: '#000',
      margin: 0, padding: 0,
      whiteSpace: 'nowrap', userSelect: 'none', display: 'block',
    }}>
      ALL WORKS
    </h1>
  );
}

// ── Single project row ────────────────────────────────────────────────────────
function ProjectRow({
  project,
  isLast,
}: {
  project: (typeof PROJECTS)[0];
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/project/${project.id}`)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'clamp(24px, 4vw, 56px)',
          padding: 'clamp(32px, 3.5vw, 52px) clamp(28px, 4vw, 60px)',
          cursor: 'pointer',
          backgroundColor: hovered ? 'rgba(0,0,0,0.016)' : '#fff',
          transition: 'background-color 0.20s ease',
        }}
      >
        {/* Left: text */}
        <div style={{ flex: '1 1 0', minWidth: 0 }}>
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', marginBottom: '16px',
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '8px', letterSpacing: '0.28em',
              textTransform: 'uppercase', color: 'rgba(0,0,0,0.30)',
            }}>No.{project.num}</span>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '8px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(0,0,0,0.28)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.18s',
            }}>VIEW →</span>
          </div>

          <h2 style={{
            fontFamily: "'Noto Sans SC', 'Barlow', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(22px, 2.6vw, 40px)',
            letterSpacing: '-0.02em', lineHeight: 1.08,
            color: '#000', margin: '0 0 18px',
          }}>{project.title}</h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 14px', rowGap: '4px', marginBottom: '20px' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: "'Noto Sans SC', monospace",
                fontSize: '10px', letterSpacing: '0.05em',
                color: 'rgba(0,0,0,0.38)',
              }}>[{tag}]</span>
            ))}
          </div>

          <p style={{
            fontFamily: "'Noto Sans SC', sans-serif",
            fontWeight: 400, fontSize: 'clamp(9px, 0.85vw, 11px)',
            lineHeight: 2.0, letterSpacing: '0.04em',
            color: '#505050', margin: 0,
          }}>{project.description}</p>
        </div>

        {/* Right: cover image or placeholder frame */}
        <div style={{ flex: '0 0 38%', maxWidth: '38%' }}>
          <div style={{
            width: '100%', aspectRatio: '16 / 10',
            border: '1px solid #000', position: 'relative',
            overflow: 'hidden',
            backgroundColor: hovered ? 'rgba(0,0,0,0.013)' : '#fff',
            transition: 'background-color 0.20s ease',
          }}>
            {project.coverImage ? (
              <>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    opacity: hovered ? 0.88 : 1,
                    transition: 'opacity 0.22s',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 8, right: 12,
                  fontFamily: "'Barlow', sans-serif", fontWeight: 900,
                  fontSize: '10px', letterSpacing: '0.18em',
                  color: 'rgba(255,255,255,0.55)', userSelect: 'none', pointerEvents: 'none',
                }}>{project.num}</div>
              </>
            ) : (
              <>
                {(['tl','tr','bl','br'] as const).map(c => (
                  <div key={c} style={{
                    position: 'absolute',
                    top:    c[0]==='t' ? 8 : undefined, bottom: c[0]==='b' ? 8 : undefined,
                    left:   c[1]==='l' ? 8 : undefined, right:  c[1]==='r' ? 8 : undefined,
                    width: 8, height: 8,
                    borderTop:    c[0]==='t' ? '1px solid rgba(0,0,0,0.18)' : undefined,
                    borderBottom: c[0]==='b' ? '1px solid rgba(0,0,0,0.18)' : undefined,
                    borderLeft:   c[1]==='l' ? '1px solid rgba(0,0,0,0.18)' : undefined,
                    borderRight:  c[1]==='r' ? '1px solid rgba(0,0,0,0.18)' : undefined,
                    pointerEvents: 'none',
                  }} />
                ))}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: '7px',
                  opacity: hovered ? 1 : 0, transition: 'opacity 0.22s',
                  pointerEvents: 'none',
                }}>
                  <div style={{
                    width: 24, height: 24,
                    border: '1px solid rgba(0,0,0,0.22)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: 14, color: 'rgba(0,0,0,0.28)', lineHeight: 1 }}>+</span>
                  </div>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '7.5px', letterSpacing: '0.22em',
                    textTransform: 'uppercase', color: 'rgba(0,0,0,0.26)',
                  }}>VIDEO / IMAGE</span>
                </div>
                <div style={{
                  position: 'absolute', bottom: 8, right: 12,
                  fontFamily: "'Barlow', sans-serif", fontWeight: 900,
                  fontSize: '10px', letterSpacing: '0.18em',
                  color: 'rgba(0,0,0,0.09)', userSelect: 'none', pointerEvents: 'none',
                }}>{project.num}</div>
              </>
            )}
          </div>
        </div>
      </div>

      {!isLast && (
        <div style={{ margin: `0 clamp(28px, 4vw, 60px)`, borderTop: '1px solid #000' }} />
      )}
    </>
  );
}

// ── Gallery page ──────────────────────────────────────────────────────────────
export default function Gallery() {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState<CatId>('digital');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const NAV_H = 64; // sticky top bar height px

  // Scroll → active category
  useEffect(() => {
    const onScroll = () => {
      let current: CatId = 'digital';
      for (const s of SECTIONS) {
        const el = sectionRefs.current[s.id];
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          current = s.id;
        }
      }
      setActiveCat(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_H - 4;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #fff; }
        ::-webkit-scrollbar-thumb { background: #bbb; }
        .cat-btn {
          display: block; width: 100%; background: none; border: none;
          padding: 0; cursor: pointer; text-align: left;
          font-family: 'Noto Sans SC', sans-serif;
        }
        .cat-btn:focus { outline: none; }
      `}</style>

      {/* ── Top nav bar ── */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '21px clamp(28px, 4vw, 60px)',
        borderBottom: '1px solid #000',
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Space Mono', monospace",
            fontSize: '8px', letterSpacing: '0.24em',
            textTransform: 'uppercase', color: 'rgba(0,0,0,0.40)',
            padding: 0, display: 'flex', alignItems: 'center', gap: '7px',
            transition: 'color 0.16s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#000')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.40)')}
        >← BACK</button>
        <span style={{
          fontFamily: "'Barlow', sans-serif", fontWeight: 900,
          fontSize: '13px', letterSpacing: '-0.01em',
          color: 'rgba(0,0,0,0.16)', userSelect: 'none',
        }}>XINYAO LI</span>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '8px', letterSpacing: '0.24em', color: 'rgba(0,0,0,0.28)',
        }}>2026</span>
      </div>

      {/* ── ALL WORKS heading ── */}
      <div style={{ padding: '36px clamp(28px, 4vw, 60px) 0' }}>
        <AutoFitHeading />
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        padding: '12px clamp(28px, 4vw, 60px) 0',
      }}>
        <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: '8px',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.26)',
        }}>Xinyao Li — Selected Works</span>
        <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: '8px',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.26)',
        }}>{PROJECTS.length} Projects</span>
      </div>
      <div style={{ margin: '16px clamp(28px, 4vw, 60px) 0', borderTop: '1px solid #000' }} />

      {/* ══════════════ Body: sidebar + sections ══════════════ */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>

        {/* ── Sidebar ── */}
        <div style={{
          width: 116, flexShrink: 0,
          borderRight: '1px solid #000',
          position: 'sticky', top: NAV_H,
          alignSelf: 'flex-start',
          paddingTop: '32px', paddingBottom: '32px',
          height: `calc(100vh - ${NAV_H}px)`,
        }}>
          {SECTIONS.map((s, i) => {
            const isActive = activeCat === s.id;
            const count = PROJECTS.filter(p => p.category === s.id).length;
            return (
              <div key={s.id}>
                {i > 0 && (
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.09)' }} />
                )}
                <button
                  className="cat-btn"
                  onClick={() => scrollTo(s.id)}
                  style={{
                    padding: '14px 0 14px 20px',
                    borderLeft: isActive ? '2px solid #000' : '2px solid transparent',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontWeight: isActive ? 700 : 400,
                    fontSize: '11px', letterSpacing: '0.04em',
                    color: isActive ? '#000' : 'rgba(0,0,0,0.34)',
                    transition: 'color 0.2s, font-weight 0.15s',
                    lineHeight: 1.4,
                  }}>{s.zh}</div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.14em',
                    color: isActive ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.20)',
                    marginTop: '3px', transition: 'color 0.2s',
                  }}>{String(count).padStart(2, '0')}</div>
                </button>
              </div>
            );
          })}
        </div>

        {/* ── Content sections ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {SECTIONS.map((section, si) => {
            const sectionProjects = PROJECTS.filter(p => p.category === section.id);
            return (
              <div
                key={section.id}
                ref={el => { sectionRefs.current[section.id] = el; }}
              >
                {/* ── Section break header ── */}
                <div style={{
                  padding: `${si === 0 ? '28px' : '52px'} clamp(28px, 4vw, 60px) 0`,
                }}>
                  {/* Top rule */}
                  {si > 0 && (
                    <div style={{ borderTop: '1px solid #000', marginBottom: '20px' }} />
                  )}
                  <div style={{
                    display: 'flex', alignItems: 'baseline',
                    justifyContent: 'space-between',
                    paddingBottom: '20px',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                      <span style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontWeight: 900,
                        fontSize: 'clamp(20px, 2vw, 28px)',
                        letterSpacing: '-0.02em', color: '#000',
                      }}>{section.zh}</span>
                      <span style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '9px', letterSpacing: '0.20em',
                        textTransform: 'uppercase', color: 'rgba(0,0,0,0.32)',
                      }}>{section.en}</span>
                    </div>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '8px', letterSpacing: '0.18em',
                      textTransform: 'uppercase', color: 'rgba(0,0,0,0.28)',
                    }}>
                      {String(sectionProjects.length).padStart(2, '0')} Works
                    </span>
                  </div>
                  {/* Bottom rule */}
                  <div style={{ borderTop: '1px solid #000' }} />
                </div>

                {/* ── Project rows ── */}
                {sectionProjects.map((project, pi) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    isLast={pi === sectionProjects.length - 1}
                  />
                ))}
              </div>
            );
          })}

          {/* Final divider + footer */}
          <div style={{ margin: `0 clamp(28px, 4vw, 60px)`, borderTop: '1px solid #000' }} />
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '22px clamp(28px, 4vw, 60px)',
          }}>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: '8px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.22)',
            }}>© Xinyao Li 2026</span>
            <span style={{
              fontFamily: "'Space Mono', monospace", fontSize: '8px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.22)',
            }}>Portfolio — All Works</span>
          </div>
        </div>
      </div>
    </div>
  );
}