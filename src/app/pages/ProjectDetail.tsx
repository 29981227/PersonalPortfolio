import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';

// Import images for project 1 (星愈)
import img53 from '../../imports/Slide_16_9_-_53.png?url';
import img54 from '../../imports/Slide_16_9_-_54.png?url';
import img55 from '../../imports/Slide_16_9_-_55.png?url';
import img57 from '../../imports/Slide_16_9_-_57.png?url';
import xingyuData1 from '../../imports/数媒-星愈-数据来源与分析1.png?url';
import xingyuData2 from '../../imports/数媒-星愈-数据来源与分析2.png?url';
import xingyuData3 from '../../imports/数媒-星愈-数据来源与分析3.png?url';
import xingyuData4 from '../../imports/数媒-星愈-数据来源与分析4.png?url';
import xingyuData5 from '../../imports/数媒-星愈-数据来源与分析5.png?url';
import xingyuData6 from '../../imports/数媒-星愈-数据来源与分析6.png?url';
import xingyuScene1 from '../../imports/场景解析与制作1.png?url';
import xingyuScene2 from '../../imports/场景解析与制作2.png?url';
import xingyuCard1 from '../../imports/星座科普卡片来源1.png?url';
import xingyuCard2 from '../../imports/星座科普卡片来源2.png?url';
import xingyuCard3 from '../../imports/星座科普卡片来源3.png?url';
import xingyuCard4 from '../../imports/星座科普卡片来源4.png?url';
import xingyuCard5 from '../../imports/星座科普卡片来源5.png?url';

// Import images for project 2 (LOST GENE)
import geneSetup1 from '../../imports/游戏-lostgene-前期设定) (1).png?url';
import geneSetup2 from '../../imports/游戏-lostgene-前期设定) (2).png?url';
import geneSetup3 from '../../imports/游戏-lostgene-前期设定) (3).png?url';
import geneSetup4 from '../../imports/游戏-lostgene-前期设定) (4).png?url';
import geneSetup5 from '../../imports/游戏-lostgene-前期设定) (5).png?url';
import geneGame1 from '../../imports/游戏-lostgene-实机图片 (1).jpg?url';
import geneGame2 from '../../imports/游戏-lostgene-实机图片 (2).jpg?url';
import geneGame3 from '../../imports/游戏-lostgene-实机图片 (3).jpg?url';
import geneGame4 from '../../imports/游戏-lostgene-实机图片 (4).jpg?url';
import geneGame5 from '../../imports/游戏-lostgene-实机图片 (5).jpg?url';
import geneGame6 from '../../imports/游戏-lostgene-实机图片 (6).jpg?url';
import geneGame7 from '../../imports/游戏-lostgene-实机图片 (7).jpg?url';
import geneGame8 from '../../imports/游戏-lostgene-实机图片 (8).jpg?url';
import geneGame9 from '../../imports/游戏-lostgene-实机图片 (9).jpg?url';
import geneGame10 from '../../imports/游戏-lostgene-实机图片 (10).jpg?url';
import geneGame11 from '../../imports/游戏-lostgene-实机图片 (11).jpg?url';

// Import images for project 3 (社交身份融合)
import socialBook from '../../imports/设计研究-社交身份融合-实体书摄影 (6).jpg?url';
import socialCatalog from '../../imports/设计研究-社交身份融合 (1)-1.jpg?url';
import socialPhoto1 from '../../imports/设计研究-社交身份融合-实体书摄影 (1).jpg?url';
import socialPhoto3 from '../../imports/设计研究-社交身份融合-实体书摄影 (3).jpg?url';
import socialPhoto5 from '../../imports/设计研究-社交身份融合-实体书摄影 (5).jpg?url';
import socialPhoto7 from '../../imports/设计研究-社交身份融合-实体书摄影 (7).jpg?url';
import socialPhoto8 from '../../imports/设计研究-社交身份融合-实体书摄影 (8).jpg?url';
import socialPhoto9 from '../../imports/设计研究-社交身份融合-实体书摄影 (9).jpg?url';
import socialPhoto10 from '../../imports/设计研究-社交身份融合-实体书摄影 (10).jpg?url';
import socialPhoto11 from '../../imports/设计研究-社交身份融合-实体书摄影 (11).jpg?url';
import socialBrainstorm3 from '../../imports/设计研究-社交身份融合-头脑风暴 (3).png?url';
import socialBrainstorm4 from '../../imports/设计研究-社交身份融合-头脑风暴 (4).png?url';
import socialBrainstorm1 from '../../imports/设计研究-社交身份融合-头脑风暴 (1).png?url';
import socialBrainstorm2 from '../../imports/设计研究-社交身份融合-头脑风暴 (2).png?url';
import socialAppPoster from '../../imports/设计研究-社交身份融合-对话APP展板.png?url';

// Import images for project 7 (君临九歌)
import junlin1 from '../../imports/UIUX-网易intern-君临九歌ui设计 (1).png?url';
import junlin2 from '../../imports/UIUX-网易intern-君临九歌ui设计 (2).png?url';
import junlin3 from '../../imports/UIUX-网易intern-君临九歌ui设计 (3).png?url';
import junlin4 from '../../imports/UIUX-网易intern-君临九歌ui设计 (4).png?url';
import junlin5 from '../../imports/UIUX-网易intern-君临九歌ui设计 (5).png?url';
import junlin6 from '../../imports/UIUX-网易intern-君临九歌ui设计 (6).png?url';
import junlin7 from '../../imports/UIUX-网易intern-君临九歌ui设计 (7).png?url';
import junlin8 from '../../imports/UIUX-网易intern-君临九歌ui设计 (8).png?url';
import junlin9 from '../../imports/UIUX-网易intern-君临九歌ui设计 (9).png?url';
import junlin10 from '../../imports/UIUX-网易intern-君临九歌ui设计 (10).png?url';

// Import images for project 5 (大学生健康)
import health1 from 'figma:asset/d015699bece10464559b099fdc5999580398c7f2.png';
import health2 from 'figma:asset/14a6cb98a29d729bf3a29c72afcb6627dc326646.png';
import health3 from 'figma:asset/0ef12f011faec303ee7aa45d94911de97190e558.png';
import health4 from 'figma:asset/19cb0e3dc57c5d167d57313bf53508bc33c3a1c2.png';
import health5 from 'figma:asset/faad6bc6bee418aaef59b06a2a595f5a738b3682.png';

// Import image for project 9 (亚马逊)
import amazon1 from 'figma:asset/324222ba1f973a753571982071cbf0f87cc7ef43.png';

// Import images for project 8 (七裔)
import qiyi1 from 'figma:asset/fef46a03b1c5baaeaf5cf23f595a3e69ffbabff9.png';
import qiyi2 from 'figma:asset/43f00f5565a02f03d8d5d456df25b6852628fad5.png';
import qiyi3 from 'figma:asset/714abdddabcfeac06b4cd4a058ed05434060fa8e.png';
import qiyi4 from 'figma:asset/e718834cf08f5d59ba41c72ab028aec748091537.png';
import qiyi5 from 'figma:asset/cda99d77322dd7745d291aa69ab9a2f68063a280.png';

// ── Data ──────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1, num: '01', category: '数字媒体', year: '2024',
    title: '星愈——基于云龙野生动物数据的动物疗愈冥想APP',
    tags: ['数字媒体', '数据可视化', '疗愈设计', 'APP设计'],
    slogan: '我们将带着用户一起拥抱星空与山林，感受大自然的无尽力量。通过沉浸式观赏的高峰体验，让用户进入心流状态，与自己产生真正的联结，用图形与抽象思维探索、感受，理解自己、他人，以及世界，提高压力适应力与复原力，从而起到疗愈的效果。',
    description:
      '与云龙生态保护区合作。\n\n我们基于野生动物的分布、鸣叫、活动形态进行数据分析，将野生动物星座放入云龙上空，打造沉浸式体验的一款动物星空疗愈冥想APP，感受星空引起的微弱潮汐，步入心灵绿洲。\n\n具有科普功能，同时引发人们对云龙的向往，带动当地经济发展。',
    skills: ['Adobe AE', '动捕技术', '3D模型-Blender', '数据可视化-Tableau'],
  },
  {
    id: 2, num: '02', category: '数字媒体', year: '2024',
    title: '与华大基因校企合作的严肃游戏《LOST GENE》',
    tags: ['数字媒体', '严肃游戏', '交互叙事', '机制设计'],
    description:
      '以植物基因合成为核心机制的解谜探险游戏。玩家扮演研究员在爱琴海小岛探索物种缺失之谜，寻找场景线索、获取基因密码并在合成台生成新生植物以突破关卡，结合"植物图鉴"反馈机制，实现寓教于乐。',
    skills: ['游戏美术', 'Unity引擎', 'Vibe Coding - Visual Studio'],
  },
  {
    id: 3, num: '03', category: '设计研究', year: '2024',
    title: '"对话"：一句话社交应用与数字身份思辨',
    tags: ['思辨设计', '产品设计', '社交行为研究'],
    bookTitle: '从分离到融合，社交与身份的演变理路',
    description:
      '探讨数字身份与现实身份边界，产出一款仅保留"一句话"聊天记录的实名通讯应用。对话框形态随双方打字速度发生形变挤压，通过视觉压迫感还原现实沟通中的主导性与真实社交张力。',
    skills: [],
  },
  {
    id: 4, num: '04', category: '视觉传达', year: '2024',
    title: 'Getting Rid of Eating Disorder 动态影像',
    tags: ['视觉传达', '动态影像', '叙事设计', '女性主义'],
    description:
      '以进食障碍女性患者视角，刻画在身材焦虑下，游走于节食与失控暴食之间的心理挣扎。通过强烈的视觉隐喻展现病发高潮，最终导向正念疗愈与自我接纳，传达打破单一审美标准的寄语。',
    skills: [],
  },
  {
    id: 5, num: '05', category: '设计研究', year: '2023',
    title: '基于调研的大学生作息与健康对策设计',
    tags: ['用户研究', '服务设计', '行为分析'],
    description:
      '针对大学生因熬夜和久坐导致的健康下滑进行深度用户访谈。对比行为模式，洞察时间管理与焦虑的恶性循环，提出"交换的一天"体验活动、专属自习室及正念手册等综合干预方案。',
    skills: [],
  },
  {
    id: 6, num: '06', category: '视觉传达', year: '2023',
    title: '星耀中国：三星堆儿童文化 IP 家族',
    tags: ['品牌IP', '儿童共创', '文化传播', '视觉设计'],
    description:
      '面向儿童与青少年，构建"儿童共创-IP设计-宣传文化"循环系统。设定"星耀学堂"世界观，塑造庄严的"立立"、活泼的"纵纵"与内向的"金金"三个性格鲜明的角色，重新诠释三星堆文化。',
    skills: [],
  },
  {
    id: 7, num: '07', category: 'UI/UX', year: '2024',
    title: '君临九歌游戏UI设计',
    tags: ['UI/UX', 'UI设计', '游戏设计', '网易实习'],
    description:
      '三国风的策略游戏，实习协助正职设计师参与ui设计，包括icon、元素、排版等。',
    skills: [],
  },
  {
    id: 9, num: '09', category: 'UI/UX', year: '2024',
    title: '亚马逊全球物流Landing Page设计',
    tags: ['UI/UX', 'Landing Page', '视觉设计'],
    description:
      '在亚马逊进行独立UX设计与协作落地：独立在 Figma 中完成落地页与交互原型设计，与技术团队紧密配合，保障设计方案高效精准落地。由于还未上线，无法展示企业内部网页。',
    skills: ['Figma', '交互原型', 'UX设计'],
  },
  {
    id: 8, num: '08', category: 'UI/UX', year: '2024',
    title: '七裔游戏UI设计',
    tags: ['UI/UX', 'UI设计', '游戏设计', '网易实习'],
    description:
      '在网易实习中协助正职设计师参与ui设计，包括icon、元素、排版等。',
    skills: [],
  },
];

// ── Placeholder frame ─────────────────────────────────────────────────────────
function Frame({
  ratio = '16/10',
  index,
  wide = false,
}: {
  ratio?: string;
  index: number;
  wide?: boolean;
}) {
  const labels = ['HERO', 'DETAIL', 'PROCESS', 'CONTEXT', 'OUTCOME', 'APPENDIX'];
  const label = labels[index] ?? `FRAME ${index + 1}`;

  return (
    <div
      className="pd-frame"
      style={{
        width: '100%',
        aspectRatio: ratio,
        border: '1px solid #000',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fff',
        transition: 'background-color 0.22s ease',
        cursor: 'default',
      }}
    >
      {/* Grid cross-hair lines (decorative) */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Corner accents */}
      {(['tl','tr','bl','br'] as const).map(c => (
        <div key={c} style={{
          position: 'absolute',
          top:    c[0]==='t' ? 10 : undefined, bottom: c[0]==='b' ? 10 : undefined,
          left:   c[1]==='l' ? 10 : undefined, right:  c[1]==='r' ? 10 : undefined,
          width: 12, height: 12,
          borderTop:    c[0]==='t' ? '1px solid rgba(0,0,0,0.22)' : undefined,
          borderBottom: c[0]==='b' ? '1px solid rgba(0,0,0,0.22)' : undefined,
          borderLeft:   c[1]==='l' ? '1px solid rgba(0,0,0,0.22)' : undefined,
          borderRight:  c[1]==='r' ? '1px solid rgba(0,0,0,0.22)' : undefined,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Frame index watermark */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 900,
        fontSize: wide ? 'clamp(48px, 8vw, 120px)' : 'clamp(32px, 5vw, 72px)',
        letterSpacing: '-0.06em',
        color: 'rgba(0,0,0,0.028)',
        userSelect: 'none', pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Bottom-left label */}
      <div style={{
        position: 'absolute', bottom: 10, left: 12,
        display: 'flex', alignItems: 'center', gap: '6px',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: 4, height: 4,
          border: '1px solid rgba(0,0,0,0.20)',
        }} />
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '8px', letterSpacing: '0.20em',
          textTransform: 'uppercase', color: 'rgba(0,0,0,0.18)',
        }}>{label}</span>
      </div>

      {/* Bottom-right: ratio hint */}
      <div style={{
        position: 'absolute', bottom: 10, right: 12,
        fontFamily: "'Space Mono', monospace",
        fontSize: '8px', letterSpacing: '0.12em',
        color: 'rgba(0,0,0,0.13)',
        pointerEvents: 'none',
      }}>
        {ratio.replace('/', ' : ')}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const project = PROJECTS.find(p => p.id === Number(id)) ?? PROJECTS[0];
  const prevProj = PROJECTS.find(p => p.id === project.id - 1) ?? null;
  const nextProj = PROJECTS.find(p => p.id === project.id + 1) ?? null;

  // ══════════════════════════════════════════════════════════════════════════
  // Project-specific visual themes
  // ══════════════════════════════════════════════════════════════════════════
  type Theme = {
    bg: string;
    color: string;
    borderColor: string;
    accentColor: string;
    labelColor: string;
    watermarkColor: string;
    hasSpecialBg?: boolean;
    specialBgElement?: React.ReactNode;
    imgClass?: string;
  };

  const getTheme = (pid: number): Theme => {
    switch (pid) {
      case 1: // 星愈 - 深色星空紫蓝主题
        return {
          bg: '#0a0e1a',
          color: '#e8eef5',
          borderColor: 'rgba(139, 92, 246, 0.3)',
          accentColor: 'rgba(168, 162, 255, 0.5)',
          labelColor: 'rgba(168, 162, 255, 0.4)',
          watermarkColor: 'rgba(139, 92, 246, 0.08)',
          hasSpecialBg: true,
          imgClass: 'xingyu-img',
          specialBgElement: (
            <>
              <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse at 20% 30%, rgba(88, 86, 214, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none', zIndex: 0,
              }} />
              <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: `
                  radial-gradient(2px 2px at 20% 30%, rgba(139, 92, 246, 0.4), transparent),
                  radial-gradient(2px 2px at 60% 70%, rgba(99, 102, 241, 0.3), transparent),
                  radial-gradient(1px 1px at 50% 50%, rgba(168, 85, 247, 0.25), transparent),
                  radial-gradient(1px 1px at 80% 10%, rgba(124, 58, 237, 0.3), transparent),
                  radial-gradient(2px 2px at 90% 60%, rgba(79, 70, 229, 0.2), transparent),
                  radial-gradient(1px 1px at 15% 90%, rgba(109, 40, 217, 0.25), transparent),
                  radial-gradient(1px 1px at 40% 20%, rgba(147, 51, 234, 0.3), transparent)
                `,
                backgroundSize: '200% 200%',
                animation: 'float-gentle 8s ease-in-out infinite',
                pointerEvents: 'none', opacity: 0.6, zIndex: 0,
              }} />
            </>
          ),
        };

      case 2: // LOST GENE - 植物基因，翠绿科技感
        return {
          bg: '#0a1410',
          color: '#e8f5ed',
          borderColor: 'rgba(52, 211, 153, 0.3)',
          accentColor: 'rgba(167, 243, 208, 0.5)',
          labelColor: 'rgba(167, 243, 208, 0.4)',
          watermarkColor: 'rgba(52, 211, 153, 0.08)',
          hasSpecialBg: true,
          imgClass: 'gene-img',
          specialBgElement: (
            <>
              <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse at 30% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(52, 211, 153, 0.06) 0%, transparent 50%)',
                pointerEvents: 'none', zIndex: 0,
              }} />
            </>
          ),
        };

      case 3: // 对话 - 极简灰蓝现代
        return {
          bg: '#f8f9fa',
          color: '#1a1a1a',
          borderColor: 'rgba(71, 85, 105, 0.25)',
          accentColor: 'rgba(71, 85, 105, 0.45)',
          labelColor: 'rgba(71, 85, 105, 0.35)',
          watermarkColor: 'rgba(71, 85, 105, 0.06)',
          imgClass: 'dialogue-img',
        };

      case 4: // Getting Rid - 温暖粉米疗愈
        return {
          bg: '#fef6f4',
          color: '#2d1f1f',
          borderColor: 'rgba(251, 146, 173, 0.3)',
          accentColor: 'rgba(244, 114, 182, 0.45)',
          labelColor: 'rgba(244, 114, 182, 0.35)',
          watermarkColor: 'rgba(251, 146, 173, 0.08)',
          imgClass: 'eating-img',
        };

      case 5: // 大学生健康 - 清新蓝绿
        return {
          bg: '#f0f9ff',
          color: '#1e293b',
          borderColor: 'rgba(14, 165, 233, 0.25)',
          accentColor: 'rgba(14, 165, 233, 0.45)',
          labelColor: 'rgba(14, 165, 233, 0.35)',
          watermarkColor: 'rgba(14, 165, 233, 0.08)',
          imgClass: 'health-img',
        };

      case 6: // 三星堆 - 金黄古铜文化
        return {
          bg: '#1a1410',
          color: '#fef3c7',
          borderColor: 'rgba(251, 191, 36, 0.35)',
          accentColor: 'rgba(252, 211, 77, 0.55)',
          labelColor: 'rgba(252, 211, 77, 0.45)',
          watermarkColor: 'rgba(251, 191, 36, 0.1)',
          hasSpecialBg: true,
          imgClass: 'sanxingdui-img',
          specialBgElement: (
            <div style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'radial-gradient(ellipse at 50% 30%, rgba(180, 83, 9, 0.12) 0%, transparent 60%)',
              pointerEvents: 'none', zIndex: 0,
            }} />
          ),
        };

      case 9: // 亚马逊 - 冷白商务极简
        return {
          bg: '#f5f7fa',
          color: '#111',
          borderColor: 'rgba(0, 80, 160, 0.18)',
          accentColor: 'rgba(0, 100, 200, 0.55)',
          labelColor: 'rgba(0, 80, 160, 0.35)',
          watermarkColor: 'rgba(0, 80, 160, 0.05)',
          hasSpecialBg: false,
        };

      case 8: // 七裔 - 暗金蓝紫奇幻风
        return {
          bg: '#0d0e1a',
          color: '#e8e4f5',
          borderColor: 'rgba(120, 80, 220, 0.35)',
          accentColor: 'rgba(200, 170, 80, 0.65)',
          labelColor: 'rgba(200, 170, 80, 0.5)',
          watermarkColor: 'rgba(100, 60, 200, 0.10)',
          hasSpecialBg: true,
          imgClass: 'qiyi-img',
          specialBgElement: (
            <>
              <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse at 25% 25%, rgba(80, 40, 180, 0.12) 0%, transparent 55%), radial-gradient(ellipse at 75% 75%, rgba(140, 90, 20, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none', zIndex: 0,
              }} />
            </>
          ),
        };

      case 7: // 君临九歌 - 深红金色三国风
        return {
          bg: '#1a0a0a',
          color: '#fef2e8',
          borderColor: 'rgba(239, 68, 68, 0.4)',
          accentColor: 'rgba(252, 211, 77, 0.6)',
          labelColor: 'rgba(252, 211, 77, 0.5)',
          watermarkColor: 'rgba(239, 68, 68, 0.12)',
          hasSpecialBg: true,
          imgClass: 'junlin-img',
          specialBgElement: (
            <>
              <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse at 20% 20%, rgba(185, 28, 28, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(180, 83, 9, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none', zIndex: 0,
              }} />
            </>
          ),
        };

      default:
        return {
          bg: '#fff',
          color: '#000',
          borderColor: '#000',
          accentColor: 'rgba(0,0,0,0.34)',
          labelColor: 'rgba(0,0,0,0.28)',
          watermarkColor: 'rgba(0,0,0,0.032)',
        };
    }
  };

  const theme = getTheme(project.id);

  // Fade-in on mount / project change
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    const t = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return () => cancelAnimationFrame(t);
  }, [project.id]);

  return (
    <div style={{ 
      backgroundColor: theme.bg, 
      color: theme.color, 
      minHeight: '100vh',
      transition: 'background-color 0.4s ease, color 0.4s ease',
      position: 'relative',
    }}>
      {/* Special background effects */}
      {theme.hasSpecialBg && theme.specialBgElement}

      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: ${theme.bg}; }
        ::-webkit-scrollbar-thumb { background: ${theme.accentColor}; }
        .pd-frame:hover { background-color: rgba(0,0,0,0.022) !important; }
        .pd-ghost-btn {
          background: none; border: none; cursor: pointer; padding: 0;
          font-family: 'Space Mono', monospace;
          font-size: 8px; letter-spacing: 0.24em; text-transform: uppercase;
          color: ${theme.accentColor}; 
          transition: color 0.15s;
        }
        .pd-ghost-btn:hover { color: ${theme.color}; }
        .pd-ghost-btn:disabled { opacity: 0.18; cursor: default; }
        .pd-ghost-btn:focus { outline: none; }
        
        /* Image hover effects for all themed projects */
        .xingyu-img, .gene-img, .dialogue-img, .eating-img, .health-img, .sanxingdui-img, .junlin-img, .qiyi-img {
          transition: transform 0.35s ease, box-shadow 0.35s ease, filter 0.35s ease !important;
          border-radius: 2px;
        }
        
        .xingyu-img {
          border: 1px solid rgba(139, 92, 246, 0.3) !important;
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.15);
        }
        .xingyu-img:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 12px 40px rgba(139, 92, 246, 0.35), 0 0 60px rgba(99, 102, 241, 0.2);
          filter: brightness(1.05);
        }
        
        .gene-img {
          border: 1px solid rgba(52, 211, 153, 0.3) !important;
          box-shadow: 0 4px 16px rgba(52, 211, 153, 0.15);
        }
        .gene-img:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 12px 40px rgba(52, 211, 153, 0.35), 0 0 60px rgba(52, 211, 153, 0.2);
          filter: brightness(1.05);
        }
        
        .dialogue-img {
          border: 1px solid rgba(71, 85, 105, 0.25) !important;
          box-shadow: 0 4px 16px rgba(71, 85, 105, 0.1);
        }
        .dialogue-img:hover {
          transform: translateY(-4px) scale(1.005);
          box-shadow: 0 8px 30px rgba(71, 85, 105, 0.25);
          filter: brightness(1.02);
        }
        
        .eating-img {
          border: 1px solid rgba(251, 146, 173, 0.3) !important;
          box-shadow: 0 4px 16px rgba(251, 146, 173, 0.15);
        }
        .eating-img:hover {
          transform: translateY(-5px) scale(1.008);
          box-shadow: 0 12px 35px rgba(251, 146, 173, 0.3);
          filter: brightness(1.03);
        }
        
        .health-img {
          border: 1px solid rgba(14, 165, 233, 0.25) !important;
          box-shadow: 0 4px 16px rgba(14, 165, 233, 0.12);
        }
        .health-img:hover {
          transform: translateY(-5px) scale(1.008);
          box-shadow: 0 12px 35px rgba(14, 165, 233, 0.28);
          filter: brightness(1.03);
        }
        
        .sanxingdui-img {
          border: 1px solid rgba(251, 191, 36, 0.35) !important;
          box-shadow: 0 4px 16px rgba(251, 191, 36, 0.18);
        }
        .sanxingdui-img:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 12px 40px rgba(251, 191, 36, 0.38), 0 0 50px rgba(251, 191, 36, 0.15);
          filter: brightness(1.08);
        }
        
        .junlin-img {
          border: 1px solid rgba(239, 68, 68, 0.4) !important;
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.2), 0 0 30px rgba(252, 211, 77, 0.1);
        }
        .junlin-img:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 12px 40px rgba(239, 68, 68, 0.4), 0 0 60px rgba(252, 211, 77, 0.25);
          filter: brightness(1.1);
        }
        .qiyi-img {
          border: 1px solid rgba(120, 80, 220, 0.35) !important;
          box-shadow: 0 4px 16px rgba(80, 40, 180, 0.18), 0 0 30px rgba(200, 170, 80, 0.08);
        }
        .qiyi-img:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 12px 40px rgba(100, 60, 200, 0.38), 0 0 60px rgba(200, 170, 80, 0.20);
          filter: brightness(1.08);
        }
        
        ${theme.hasSpecialBg ? `
          @keyframes float-gentle {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-5px, -10px); }
            50% { transform: translate(5px, -5px); }
            75% { transform: translate(-3px, 8px); }
          }
        ` : ''}
      `}</style>

      {/* ════════════════════════════════════════
          STICKY TOP NAV
      ════════════════════════════════════════ */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: theme.bg,
        backdropFilter: theme.hasSpecialBg ? 'blur(10px)' : 'none',
        borderBottom: theme.borderColor,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(28px, 4vw, 60px)',
        height: 56,
      }}>
        {/* Back */}
        <button className="pd-ghost-btn" onClick={() => navigate('/gallery')}>
          ← ALL WORKS
        </button>

        {/* Counter */}
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '8px', letterSpacing: '0.22em',
          color: theme.labelColor,
        }}>
          {String(project.id).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
        </span>

        {/* Prev / Next */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <button
            className="pd-ghost-btn"
            disabled={!prevProj}
            onClick={() => prevProj && navigate(`/project/${prevProj.id}`)}
          >← PREV</button>
          <button
            className="pd-ghost-btn"
            disabled={!nextProj}
            onClick={() => nextProj && navigate(`/project/${nextProj.id}`)}
          >NEXT →</button>
        </div>
      </div>

      {/* ════════════════════════════════════════
          ANIMATED CONTENT
      ════════════════════════════════════════ */}
      <div ref={contentRef}>

        {/* ════════════════════════════════════════
            TITLE HERO SECTION
        ════════════════════════════════════════ */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          padding: 'clamp(40px, 5vw, 72px) clamp(28px, 4vw, 60px) clamp(28px, 3vw, 48px)',
          gap: 'clamp(24px, 4vw, 60px)',
          position: 'relative',
          overflow: 'hidden',
        }}>

          {/* Large watermark number */}
          <div style={{
            position: 'absolute',
            bottom: -12, left: 'clamp(20px, 3vw, 48px)',
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(100px, 18vw, 240px)',
            letterSpacing: '-0.06em',
            color: theme.watermarkColor,
            lineHeight: 1,
            userSelect: 'none', pointerEvents: 'none',
          }}>
            {project.num}
          </div>

          {/* Left meta column */}
          <div style={{
            flexShrink: 0,
            width: 'clamp(90px, 12vw, 160px)',
            paddingBottom: '6px',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '8px', letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: theme.labelColor,
              marginBottom: '6px',
            }}>No.{project.num}</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '8px', letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: theme.labelColor,
            }}>{project.category}</div>
          </div>

          {/* Vertical 1px divider */}
          <div style={{
            width: 1, alignSelf: 'stretch',
            backgroundColor: theme.borderColor,
            flexShrink: 0,
          }} />

          {/* Title + tags */}
          <div style={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 1 }}>
            <h1 style={{
              fontFamily: "'Noto Sans SC', 'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(28px, 4.2vw, 62px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.10,
              color: theme.color,
              margin: '0 0 clamp(16px, 2vw, 28px)',
            }}>
              {project.title}
            </h1>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 16px', rowGap: '6px' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: "'Noto Sans SC', monospace",
                  fontSize: '10px', letterSpacing: '0.06em',
                  color: theme.labelColor,
                }}>[{tag}]</span>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width divider */}
        <div style={{
          borderTop: theme.borderColor,
          margin: '0 clamp(28px, 4vw, 60px)',
        }} />

        {/* ════════════════════════════════════════
            BODY: info left + images right
        ════════════════════════════════════════ */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          padding: `clamp(36px, 4vw, 56px) clamp(28px, 4vw, 60px)`,
          gap: 'clamp(28px, 4vw, 56px)',
        }}>

          {/* ── Left: description (sticky) ── */}
          <div style={{
            width: 'clamp(180px, 18vw, 240px)',
            flexShrink: 0,
            position: 'sticky',
            top: 72,
          }}>
            {/* Section label */}
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '8px', letterSpacing: '0.24em',
              textTransform: 'uppercase', 
              color: theme.labelColor,
              marginBottom: '14px',
            }}>— Project Overview</div>

            {/* Slogan - only shown if project has one */}
            {'slogan' in project && project.slogan && (
              <div style={{
                borderLeft: `2px solid ${theme.accentColor}`,
                paddingLeft: '10px',
                marginBottom: '20px',
              }}>
                <p style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(8px, 0.75vw, 10px)',
                  lineHeight: 2.0, letterSpacing: '0.04em',
                  color: theme.accentColor,
                  margin: 0,
                  opacity: 0.9,
                  fontStyle: 'italic',
                }}>
                  {(project as typeof project & { slogan: string }).slogan}
                </p>
              </div>
            )}

            <p style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(9px, 0.85vw, 11px)',
              lineHeight: 2.1, letterSpacing: '0.04em',
              color: theme.color,
              margin: '0 0 28px',
              whiteSpace: 'pre-line',
            }}>
              {project.description}
            </p>

            {/* Skills Section - Only show if skills array has items */}
            {project.skills && project.skills.length > 0 && (
              <>
                {/* Skills label with decorative line */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <div style={{
                    width: 3, height: 3,
                    backgroundColor: theme.accentColor,
                    borderRadius: '50%',
                  }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: theme.accentColor,
                  }}>
                    SKILLS & TOOLS
                  </span>
                  <div style={{
                    flex: 1,
                    height: '1px',
                    background: `linear-gradient(to right, ${theme.borderColor}, transparent)`,
                  }} />
                </div>

                {/* Skills tags */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '28px',
                }}>
                  {project.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 12px',
                        border: `1px solid ${theme.borderColor}`,
                        backgroundColor: theme.hasSpecialBg 
                          ? 'rgba(255, 255, 255, 0.03)' 
                          : 'rgba(0, 0, 0, 0.02)',
                        borderRadius: '2px',
                        transition: 'all 0.25s ease',
                        cursor: 'default',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = theme.hasSpecialBg
                          ? 'rgba(255, 255, 255, 0.06)'
                          : 'rgba(0, 0, 0, 0.04)';
                        e.currentTarget.style.borderColor = theme.accentColor;
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme.hasSpecialBg
                          ? 'rgba(255, 255, 255, 0.03)'
                          : 'rgba(0, 0, 0, 0.02)';
                        e.currentTarget.style.borderColor = theme.borderColor;
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      {/* Decorative square icon */}
                      <div style={{
                        width: 6,
                        height: 6,
                        border: `1.5px solid ${theme.accentColor}`,
                        flexShrink: 0,
                        transform: 'rotate(45deg)',
                      }} />

                      {/* Skill text */}
                      <span style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: 'clamp(9px, 0.80vw, 10px)',
                        letterSpacing: '0.02em',
                        color: theme.color,
                        fontWeight: 500,
                      }}>
                        {skill}
                      </span>

                      {/* Subtle gradient overlay on hover */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(90deg, transparent, ${theme.accentColor}08, transparent)`,
                        opacity: 0,
                        pointerEvents: 'none',
                        transition: 'opacity 0.25s ease',
                      }} />
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Thin rule */}
            <div style={{ 
              borderTop: theme.borderColor, 
              marginBottom: '18px' 
            }} />

            {/* Category info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '8px', letterSpacing: '0.18em',
                  textTransform: 'uppercase', 
                  color: theme.labelColor,
                  minWidth: 54,
                }}>Category</span>
                <span style={{
                  fontFamily: "'Noto Sans SC', monospace",
                  fontSize: 'clamp(9px, 0.82vw, 11px)', letterSpacing: '0.04em',
                  color: theme.accentColor,
                }}>{project.category}</span>
              </div>
            </div>
          </div>

          {/* Vertical separator */}
          <div style={{
            width: 1, alignSelf: 'stretch',
            backgroundColor: theme.borderColor,
            flexShrink: 0,
          }} />

          {/* ── Right: image grid ── */}
          <div style={{
            flex: 1, minWidth: 0,
            display: 'flex', flexDirection: 'column',
            gap: '10px',
          }}>

            {/* Conditional rendering: Project 1 uses real images, others use Frame placeholders */}
            {project.id === 1 ? (
              <>
                {/* Bilibili Video Embed for 星愈 */}
                <div style={{ 
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  border: '1px solid rgba(92, 129, 115, 0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(92, 129, 115, 0.15)',
                }}>
                  <iframe 
                    src="//player.bilibili.com/player.html?bvid=BV1hk9ABfEqd&page=1&high_quality=1&danmaku=0"
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0, left: 0,
                      width: '100%', height: '100%',
                    }}
                  />
                </div>

                {/* Image 1: hero full-width */}
                <img 
                  src={img53} 
                  alt="星愈APP - 主界面"
                  className="xingyu-img"
                  style={{
                    width: '100%',
                    display: 'block',
                    border: '1px solid rgba(92, 129, 115, 0.3)',
                    borderRadius: '2px',
                  }}
                />

                {/* Images 2 & 3: side by side */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={img54} 
                    alt="星愈APP - 功能详情"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                  <img 
                    src={img55} 
                    alt="星愈APP - 交互流程"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                {/* Image 4: full-width bottom */}
                <img 
                  src={img57} 
                  alt="星愈APP - 应用场景"
                  className="xingyu-img"
                  style={{
                    width: '100%',
                    display: 'block',
                    border: '1px solid rgba(92, 129, 115, 0.3)',
                    borderRadius: '2px',
                  }}
                />

                {/* Section: 数据来源与分析 */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  margin: '24px 0 12px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: theme.accentColor,
                  }}>数据来源与分析</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${theme.borderColor}, transparent)` }} />
                </div>

                {/* Data Analysis */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={xingyuData1} 
                    alt="星愈APP - 数据来源与分析1"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                  <img 
                    src={xingyuData2} 
                    alt="星愈APP - 数据来源与分析2"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={xingyuData3} 
                    alt="星愈APP - 数据来源与分析3"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                  <img 
                    src={xingyuData4} 
                    alt="星愈APP - 数据来源与分析4"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={xingyuData5} 
                    alt="星愈APP - 数据来源与分析5"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                  <img 
                    src={xingyuData6} 
                    alt="星愈APP - 数据来源与分析6"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                {/* Section: 场景解析与制作 */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  margin: '24px 0 12px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: theme.accentColor,
                  }}>场景解析与制作</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${theme.borderColor}, transparent)` }} />
                </div>

                {/* Scene Analysis */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={xingyuScene1} 
                    alt="星愈APP - 场景解析与制作1"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                  <img 
                    src={xingyuScene2} 
                    alt="星愈APP - 场景解析与制作2"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                {/* Section: 星座科普卡片来源 */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  margin: '24px 0 12px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: theme.accentColor,
                  }}>星座科普卡片来源</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${theme.borderColor}, transparent)` }} />
                </div>

                {/* Constellation Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={xingyuCard1} 
                    alt="星愈APP - 星座科普卡片来源1"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                  <img 
                    src={xingyuCard2} 
                    alt="星愈APP - 星座科普卡片来源2"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={xingyuCard3} 
                    alt="星愈APP - 星座科普卡片来源3"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                  <img 
                    src={xingyuCard4} 
                    alt="星愈APP - 星座科普卡片来源4"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={xingyuCard5} 
                    alt="星愈APP - 星座科普卡片来源5"
                    className="xingyu-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: '1px solid rgba(92, 129, 115, 0.3)',
                      borderRadius: '2px',
                    }}
                  />
                </div>
              </>
            ) : project.id === 4 ? (
              <>
                {/* Bilibili Video Embed for "Getting Rid of Eating Disorder" */}
                <div style={{ 
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%', // 16:9 aspect ratio
                  marginBottom: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                }}>
                  <iframe 
                    src="//player.bilibili.com/player.html?bvid=BV1nN4y1w7Fz&page=1&high_quality=1&danmaku=0"
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0, left: 0,
                      width: '100%', height: '100%',
                    }}
                  />
                </div>

                {/* Placeholder frames below video */}
                <div style={{ display: 'grid', gridTemplateColumns: '60fr 40fr', gap: '10px' }}>
                  <Frame ratio="4/3" index={1} />
                  <Frame ratio="4/3" index={2} />
                </div>

                <Frame ratio="21/9" index={3} wide />

                <div style={{ display: 'grid', gridTemplateColumns: '40fr 60fr', gap: '10px' }}>
                  <Frame ratio="4/3" index={4} />
                  <Frame ratio="4/3" index={5} />
                </div>
              </>
            ) : project.id === 2 ? (
              <>
                {/* LOST GENE Project Layout */}

                {/* Video Embed Placeholder */}
                <div style={{ 
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  marginBottom: '10px',
                  border: `1px solid ${theme.borderColor}`,
                  borderRadius: '2px',
                  overflow: 'hidden',
                  boxShadow: `0 4px 16px rgba(52, 211, 153, 0.12)`,
                }}>
                  <iframe 
                    src="//player.bilibili.com/player.html?bvid=BV1v29uBnENw&page=1&high_quality=1&danmaku=0"
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0, left: 0,
                      width: '100%', height: '100%',
                    }}
                  />
                </div>

                {/* Section: 前期设定 */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  margin: '24px 0 12px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: theme.accentColor,
                  }}>前期设定</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${theme.borderColor}, transparent)` }} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={geneSetup1} 
                    alt="LOST GENE - 前期设定1"
                    className="gene-img"
                    style={{
                      width: '100%',
                      display: 'block',
                    }}
                  />
                  <img 
                    src={geneSetup2} 
                    alt="LOST GENE - 前期设定2"
                    className="gene-img"
                    style={{
                      width: '100%',
                      display: 'block',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                  <img 
                    src={geneSetup3} 
                    alt="LOST GENE - 前期设定3"
                    className="gene-img"
                    style={{
                      width: '100%',
                      display: 'block',
                    }}
                  />
                  <img 
                    src={geneSetup4} 
                    alt="LOST GENE - 前期设定4"
                    className="gene-img"
                    style={{
                      width: '100%',
                      display: 'block',
                    }}
                  />
                  <img 
                    src={geneSetup5} 
                    alt="LOST GENE - 前期设定5"
                    className="gene-img"
                    style={{
                      width: '100%',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Section: 实况展示 */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  margin: '32px 0 12px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: theme.accentColor,
                  }}>实况展示</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${theme.borderColor}, transparent)` }} />
                </div>

                <p style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: 'clamp(10px, 0.9vw, 12px)',
                  lineHeight: 2.0,
                  color: theme.color,
                  margin: '0 0 20px',
                  opacity: 0.85,
                  letterSpacing: '0.04em',
                }}>
                  Mira作为研究院的实习人员，有一天收到了一封信……跟随信件，Mira初至岛，见到了未曾见过的"灵"。它们会说话，指引Mira在岛上完成任务……
                </p>

                {/* Gameplay Screenshots */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img src={geneGame1} alt="LOST GENE - 实机图片1" className="gene-img" style={{ width: '100%', display: 'block', }} />
                  <img src={geneGame2} alt="LOST GENE - 实机图片2" className="gene-img" style={{ width: '100%', display: 'block', }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img src={geneGame3} alt="LOST GENE - 实机图片3" className="gene-img" style={{ width: '100%', display: 'block', }} />
                  <img src={geneGame4} alt="LOST GENE - 实机图片4" className="gene-img" style={{ width: '100%', display: 'block', }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img src={geneGame5} alt="LOST GENE - 实机图片5" className="gene-img" style={{ width: '100%', display: 'block', }} />
                  <img src={geneGame6} alt="LOST GENE - 实机图片6" className="gene-img" style={{ width: '100%', display: 'block', }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img src={geneGame7} alt="LOST GENE - 实机图片7" className="gene-img" style={{ width: '100%', display: 'block', }} />
                  <img src={geneGame8} alt="LOST GENE - 实机图片8" className="gene-img" style={{ width: '100%', display: 'block', }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img src={geneGame9} alt="LOST GENE - 实机图片9" className="gene-img" style={{ width: '100%', display: 'block', }} />
                  <img src={geneGame10} alt="LOST GENE - 实机图片10" className="gene-img" style={{ width: '100%', display: 'block', }} />
                </div>

                <img src={geneGame11} alt="LOST GENE - 实机图片11" className="gene-img" style={{ width: '100%', display: 'block', }} />
              </>
            ) : project.id === 3 ? (
              <>
                {/* Social Identity Project Layout */}

                {/* Bilibili Video Embed for 社交身份融合 */}
                <div style={{ 
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  border: '1px solid rgba(180, 157, 130, 0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(180, 157, 130, 0.15)',
                }}>
                  <iframe 
                    src="//player.bilibili.com/player.html?bvid=BV1sK9gBqEDs&page=1&high_quality=1&danmaku=0"
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0, left: 0,
                      width: '100%', height: '100%',
                    }}
                  />
                </div>

                {/* Book Title */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  marginBottom: '16px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: 'clamp(10px, 0.9vw, 13px)',
                    letterSpacing: '0.06em',
                    color: theme.accentColor,
                  }}>书名：从分离到融合，社交与身份的演变理路</span>
                </div>

                <img 
                  src={socialBook} 
                  alt="从分离到融合，社交与身份的演变理路"
                  className="dialogue-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />

                {/* 实体书目录 Section */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  margin: '28px 0 14px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: theme.accentColor,
                  }}>实体书目录</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${theme.borderColor}, transparent)` }} />
                </div>

                <img 
                  src={socialCatalog}
                  alt="实体书目录"
                  className="dialogue-img"
                  style={{ width: '100%', display: 'block' }}
                />

                {/* 实体书摄影 Section */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  margin: '28px 0 14px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: theme.accentColor,
                  }}>实体书摄影</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${theme.borderColor}, transparent)` }} />
                </div>

                {[socialPhoto1, socialPhoto3, socialPhoto5, socialBook, socialPhoto7, socialPhoto8, socialPhoto9, socialPhoto10, socialPhoto11].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`实体书摄影 ${i + 1}`}
                    className="dialogue-img"
                    style={{ width: '100%', display: 'block' }}
                  />
                ))}

                {/* Brainstorming Section */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  margin: '28px 0 14px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: theme.accentColor,
                  }}>头脑风暴</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${theme.borderColor}, transparent)` }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img src={socialBrainstorm3} alt="头脑风暴3" className="dialogue-img" style={{ width: '100%', display: 'block', }} />
                  <img src={socialBrainstorm4} alt="头脑风暴4" className="dialogue-img" style={{ width: '100%', display: 'block', }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img src={socialBrainstorm1} alt="头脑风暴1" className="dialogue-img" style={{ width: '100%', display: 'block', }} />
                  <img src={socialBrainstorm2} alt="头脑风暴2" className="dialogue-img" style={{ width: '100%', display: 'block', }} />
                </div>

                {/* Design Output Section */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  margin: '32px 0 12px',
                }}>
                  <div style={{ width: 3, height: 3, backgroundColor: theme.accentColor, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '8px', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: theme.accentColor,
                  }}>思辨设计产出</span>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${theme.borderColor}, transparent)` }} />
                </div>

                <p style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: 'clamp(10px, 0.9vw, 12px)',
                  lineHeight: 2.0,
                  color: theme.color,
                  margin: '0 0 20px',
                  opacity: 0.85,
                  letterSpacing: '0.04em',
                }}>
                  思辨设计产出——对话app：基于社交身份的分离与融合，专注社交本质的手机APP——回归现实社交本质。
                </p>

                <img 
                  src={socialAppPoster} 
                  alt="对话APP展板"
                  className="dialogue-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />
              </>
            ) : project.id === 7 ? (
              <>
                {/* Image 1: hero full-width */}
                <img 
                  src={junlin1} 
                  alt="君临九歌UI设计 - 主界面"
                  className="junlin-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />

                {/* Images 2 & 3: side by side */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <img 
                    src={junlin2} 
                    alt="君临九歌UI设计 - 功能详情"
                    className="junlin-img"
                    style={{
                      width: '100%',
                      display: 'block',
                    }}
                  />
                  <img 
                    src={junlin3} 
                    alt="君临九歌UI设计 - 交互流程"
                    className="junlin-img"
                    style={{
                      width: '100%',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Image 4: full-width bottom */}
                <img 
                  src={junlin4} 
                  alt="君临九歌UI设计 - 应用场景"
                  className="junlin-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />

                {/* Image 5: full-width bottom */}
                <img 
                  src={junlin5} 
                  alt="君临九歌UI设计 - 应用场景"
                  className="junlin-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />

                {/* Image 6: full-width bottom */}
                <img 
                  src={junlin6} 
                  alt="君临九歌UI设计 - 应用场景"
                  className="junlin-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />

                {/* Image 7: full-width bottom */}
                <img 
                  src={junlin7} 
                  alt="君临九歌UI设计 - 应用场景"
                  className="junlin-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />

                {/* Image 8: full-width bottom */}
                <img 
                  src={junlin8} 
                  alt="君临九歌UI设计 - 应用场景"
                  className="junlin-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />

                {/* Image 9: full-width bottom */}
                <img 
                  src={junlin9} 
                  alt="君临九歌UI设计 - 应用场景"
                  className="junlin-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />

                {/* Image 10: full-width bottom */}
                <img 
                  src={junlin10} 
                  alt="君临九歌UI设计 - 应用场景"
                  className="junlin-img"
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />
              </>
            ) : project.id === 9 ? (
              <>
                {/* Project 9: 亚马逊 — Figma 原型概览图 + 版权说明 */}
                <div style={{
                  border: '1px solid rgba(0,80,160,0.18)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <img
                    src={amazon1}
                    alt="亚马逊全球物流 Landing Page — Figma 原型流程图"
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>
                {/* 版权声明条 */}
                <div style={{
                  border: '1px solid rgba(0,80,160,0.15)',
                  borderRadius: '2px',
                  padding: '20px 28px',
                  backgroundColor: 'rgba(0,80,160,0.04)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                }}>
                  <div style={{
                    width: 32, height: 32, flexShrink: 0,
                    border: '1px solid rgba(0,80,160,0.25)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: 14, color: 'rgba(0,80,160,0.55)' }}>!</span>
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '8px', letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'rgba(0,80,160,0.55)',
                      marginBottom: '7px',
                    }}>CONFIDENTIAL — NDA</div>
                    <p style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: '12px', lineHeight: 1.9,
                      color: 'rgba(0,0,0,0.58)',
                      margin: 0, letterSpacing: '0.03em',
                    }}>
                      由于项目尚未上线，企业内部网页设计稿受保密协议约束，无法完整展示。<br />
                      以上为 Figma 交互原型流程示意图（已作模糊处理）。
                    </p>
                  </div>
                </div>
              </>
            ) : project.id === 8 ? (
              <>
                {/* Project 8: 七裔 — 5 full-width screens */}
                {[qiyi1, qiyi2, qiyi3, qiyi4, qiyi5].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`七裔游戏UI设计 ${i + 1}`}
                    className="qiyi-img"
                    style={{
                      width: '100%',
                      display: 'block',
                      border: `1px solid ${theme.borderColor}`,
                      borderRadius: '2px',
                    }}
                  />
                ))}
              </>
            ) : project.id === 5 ? (
              <>
                {/* Project 5: 大学生健康 — images in order (1)→(5) */}
                {[health1, health2, health3, health5, health4].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`大学生健康研究 ${i + 1}`}
                    style={{
                      width: '100%',
                      display: 'block',
                      border: `1px solid ${theme.borderColor}`,
                      borderRadius: '2px',
                    }}
                  />
                ))}
              </>
            ) : (
              <>
                {/* Frame 0: hero full-width 16:9 */}
                <Frame ratio="16/9" index={0} wide />

                {/* Frames 1 & 2: asymmetric 60/40 */}
                <div style={{ display: 'grid', gridTemplateColumns: '60fr 40fr', gap: '10px' }}>
                  <Frame ratio="4/3" index={1} />
                  <Frame ratio="4/3" index={2} />
                </div>

                {/* Frame 3: wide cinematic 21:9 */}
                <Frame ratio="21/9" index={3} wide />

                {/* Frames 4 & 5: asymmetric 40/60 */}
                <div style={{ display: 'grid', gridTemplateColumns: '40fr 60fr', gap: '10px' }}>
                  <Frame ratio="4/3" index={4} />
                  <Frame ratio="4/3" index={5} />
                </div>
              </>
            )}

          </div>
        </div>

        {/* ════════════════════════════════════════
            BOTTOM NAV
        ════════════════════════════════════════ */}
        <div style={{
          borderTop: theme.borderColor,
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px clamp(28px, 4vw, 60px)',
        }}>
          <button
            className="pd-ghost-btn"
            disabled={!prevProj}
            onClick={() => prevProj && navigate(`/project/${prevProj.id}`)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}
          >
            <span>← PREV</span>
            {prevProj && (
              <span style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: '9px', letterSpacing: '0.04em',
                color: theme.labelColor,
                textTransform: 'none',
                maxWidth: 180, whiteSpace: 'nowrap',
                overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {prevProj.title}
              </span>
            )}
          </button>

          <button
            className="pd-ghost-btn"
            onClick={() => navigate('/gallery')}
          >
            ↑ ALL WORKS
          </button>

          <button
            className="pd-ghost-btn"
            disabled={!nextProj}
            onClick={() => nextProj && navigate(`/project/${nextProj.id}`)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}
          >
            <span>NEXT →</span>
            {nextProj && (
              <span style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: '9px', letterSpacing: '0.04em',
                color: theme.labelColor,
                textTransform: 'none',
                maxWidth: 180, whiteSpace: 'nowrap',
                overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {nextProj.title}
              </span>
            )}
          </button>
        </div>

      </div>{/* end animated content */}
    </div>
  );
}