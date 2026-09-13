import React, { useEffect, useState, useRef } from 'react';
import { 
  AngularLogo, 
  ReactLogo, 
  TypeScriptLogo, 
  JavaScriptLogo, 
  NodeLogo, 
  ExpressLogo, 
  Html5Logo, 
  Css3Logo, 
  MySqlLogo, 
  MongoLogo, 
  GitLogo, 
  GitHubLogo, 
  TailwindLogo 
} from './ToolLogos';

interface FloatingLogoItem {
  id: string;
  toolKey: string;
  name: string;
  sublabel: string;
  logo: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  glowColor: string;
  leftPct: number;       // 0 - 100%
  topPct: number;        // 0 - 100%
  size: number;          // in pixels
  depth: number;         // 0.4 to 1.2
  floatSpeed: number;    // seconds per cycle
  floatRangeX: number;   // px
  floatRangeY: number;   // px
  phase: number;         // initial radian phase
  initialRot: number;    // initial rotation in deg
}

const INITIAL_NODES: FloatingLogoItem[] = [
  // 1. Angular - Hero Left (Shravan's primary framework 3.4+ yrs)
  {
    id: 'angular-1',
    toolKey: 'angular',
    name: 'Angular',
    sublabel: 'BTS 3.4+ yrs',
    logo: AngularLogo,
    color: '#DD0031',
    glowColor: 'rgba(221, 0, 49, 0.45)',
    leftPct: 5,
    topPct: 15,
    size: 48,
    depth: 1.15,
    floatSpeed: 6.2,
    floatRangeX: 22,
    floatRangeY: 28,
    phase: 0,
    initialRot: -6,
  },
  // 2. TypeScript - Hero Right (Core architecture)
  {
    id: 'typescript-1',
    toolKey: 'typescript',
    name: 'TypeScript',
    sublabel: 'Daily Foundation',
    logo: TypeScriptLogo,
    color: '#3178C6',
    glowColor: 'rgba(49, 120, 198, 0.45)',
    leftPct: 88,
    topPct: 18,
    size: 46,
    depth: 1.05,
    floatSpeed: 7.4,
    floatRangeX: 20,
    floatRangeY: 26,
    phase: 1.2,
    initialRot: 7,
  },
  // 3. React - Mid-Upper Left
  {
    id: 'react-1',
    toolKey: 'react',
    name: 'React',
    sublabel: 'Component Architecture',
    logo: ReactLogo,
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.45)',
    leftPct: 11,
    topPct: 32,
    size: 44,
    depth: 0.95,
    floatSpeed: 5.9,
    floatRangeX: 18,
    floatRangeY: 26,
    phase: 2.5,
    initialRot: -8,
  },
  // 4. JavaScript - Mid-Upper Right
  {
    id: 'javascript-1',
    toolKey: 'javascript',
    name: 'JavaScript',
    sublabel: 'ES6+ Engine',
    logo: JavaScriptLogo,
    color: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.4)',
    leftPct: 86,
    topPct: 36,
    size: 42,
    depth: 0.9,
    floatSpeed: 6.8,
    floatRangeX: 24,
    floatRangeY: 22,
    phase: 0.8,
    initialRot: 5,
  },
  // 5. Tailwind CSS - Mid-Center Left
  {
    id: 'tailwind-1',
    toolKey: 'tailwind',
    name: 'Tailwind CSS',
    sublabel: 'Utility Styling',
    logo: TailwindLogo,
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.45)',
    leftPct: 7,
    topPct: 48,
    size: 42,
    depth: 1.0,
    floatSpeed: 8.1,
    floatRangeX: 20,
    floatRangeY: 24,
    phase: 3.4,
    initialRot: 8,
  },
  // 6. Node.js - Mid-Center Right
  {
    id: 'node-1',
    toolKey: 'node',
    name: 'Node.js',
    sublabel: 'Server Runtime',
    logo: NodeLogo,
    color: '#339933',
    glowColor: 'rgba(51, 153, 51, 0.45)',
    leftPct: 89,
    topPct: 52,
    size: 44,
    depth: 0.95,
    floatSpeed: 7.0,
    floatRangeX: 18,
    floatRangeY: 26,
    phase: 4.1,
    initialRot: -6,
  },
  // 7. Git - Lower Mid Left
  {
    id: 'git-1',
    toolKey: 'git',
    name: 'Git',
    sublabel: 'Version Control',
    logo: GitLogo,
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.45)',
    leftPct: 14,
    topPct: 65,
    size: 40,
    depth: 0.85,
    floatSpeed: 6.6,
    floatRangeX: 22,
    floatRangeY: 20,
    phase: 1.8,
    initialRot: 10,
  },
  // 8. Express - Lower Mid Right
  {
    id: 'express-1',
    toolKey: 'express',
    name: 'Express',
    sublabel: 'REST APIs',
    logo: ExpressLogo,
    color: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.35)',
    leftPct: 83,
    topPct: 68,
    size: 38,
    depth: 0.8,
    floatSpeed: 7.7,
    floatRangeX: 18,
    floatRangeY: 18,
    phase: 5.0,
    initialRot: -4,
  },
  // 9. CSS3 - Upper Edge Ambient
  {
    id: 'css3-1',
    toolKey: 'css3',
    name: 'CSS3',
    sublabel: '3D Hardware Transforms',
    logo: Css3Logo,
    color: '#264DE4',
    glowColor: 'rgba(38, 77, 228, 0.4)',
    leftPct: 28,
    topPct: 6,
    size: 36,
    depth: 0.7,
    floatSpeed: 8.4,
    floatRangeX: 16,
    floatRangeY: 18,
    phase: 2.2,
    initialRot: 9,
  },
  // 10. HTML5 - Upper Center-Right
  {
    id: 'html5-1',
    toolKey: 'html5',
    name: 'HTML5',
    sublabel: 'Semantic DOM',
    logo: Html5Logo,
    color: '#E44D26',
    glowColor: 'rgba(228, 77, 38, 0.4)',
    leftPct: 72,
    topPct: 8,
    size: 36,
    depth: 0.65,
    floatSpeed: 8.9,
    floatRangeX: 15,
    floatRangeY: 16,
    phase: 3.7,
    initialRot: -7,
  },
  // 11. MySQL - Lower Left Gutter
  {
    id: 'mysql-1',
    toolKey: 'mysql',
    name: 'MySQL',
    sublabel: 'Relational Schemas',
    logo: MySqlLogo,
    color: '#00758F',
    glowColor: 'rgba(0, 117, 143, 0.4)',
    leftPct: 8,
    topPct: 82,
    size: 38,
    depth: 0.75,
    floatSpeed: 7.3,
    floatRangeX: 18,
    floatRangeY: 22,
    phase: 4.7,
    initialRot: 6,
  },
  // 12. MongoDB - Lower Right Gutter
  {
    id: 'mongodb-1',
    toolKey: 'mongodb',
    name: 'MongoDB',
    sublabel: 'NoSQL Store',
    logo: MongoLogo,
    color: '#13AA52',
    glowColor: 'rgba(19, 170, 82, 0.4)',
    leftPct: 88,
    topPct: 84,
    size: 38,
    depth: 0.7,
    floatSpeed: 8.0,
    floatRangeX: 16,
    floatRangeY: 18,
    phase: 1.0,
    initialRot: -6,
  },
  // 13. GitHub - Lower Mid Center
  {
    id: 'github-1',
    toolKey: 'git',
    name: 'GitHub',
    sublabel: 'CI/CD & Workflows',
    logo: GitHubLogo,
    color: '#E2E8F0',
    glowColor: 'rgba(226, 232, 240, 0.35)',
    leftPct: 92,
    topPct: 28,
    size: 34,
    depth: 0.6,
    floatSpeed: 9.3,
    floatRangeX: 14,
    floatRangeY: 16,
    phase: 5.4,
    initialRot: 4,
  },
  // 14. Angular - Bottom Ambient
  {
    id: 'angular-2',
    toolKey: 'angular',
    name: 'Angular',
    sublabel: 'RxJS Streams',
    logo: AngularLogo,
    color: '#DD0031',
    glowColor: 'rgba(221, 0, 49, 0.4)',
    leftPct: 22,
    topPct: 94,
    size: 36,
    depth: 0.7,
    floatSpeed: 7.8,
    floatRangeX: 20,
    floatRangeY: 20,
    phase: 3.1,
    initialRot: -5,
  },
  // 15. React - Bottom Right Ambient
  {
    id: 'react-2',
    toolKey: 'react',
    name: 'React',
    sublabel: 'Hooks & State',
    logo: ReactLogo,
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.4)',
    leftPct: 76,
    topPct: 94,
    size: 36,
    depth: 0.7,
    floatSpeed: 8.2,
    floatRangeX: 18,
    floatRangeY: 20,
    phase: 0.4,
    initialRot: 7,
  }
];

export default function FloatingLogosBackground() {
  const [nodes] = useState<FloatingLogoItem[]>(INITIAL_NODES);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Mouse & Scroll Parallax State
  const mousePosRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized from -1 to 1
      mousePosRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = docHeight > 0 ? scrollY / docHeight : 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animId: number;
    const loop = () => {
      // Interpolate towards mouse position
      smoothMouseRef.current.x += (mousePosRef.current.x - smoothMouseRef.current.x) * 0.06;
      smoothMouseRef.current.y += (mousePosRef.current.y - smoothMouseRef.current.y) * 0.06;
      setTick(prev => (prev + 1) % 60);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleLogoClick = (toolKey: string) => {
    // Scroll smoothly to Skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Broadcast custom event so Skills component selects that tool
    window.dispatchEvent(new CustomEvent('select-tool', { detail: toolKey }));
  };

  return (
    <>
      {/* Keyframe animation stylesheet for fluid floating drifts */}
      <style>{`
        @keyframes float-glide-a {
          0%, 100% { transform: translate3d(0px, 0px, 0px) rotate(0deg); }
          33% { transform: translate3d(14px, -18px, 0px) rotate(3deg); }
          66% { transform: translate3d(-12px, 15px, 0px) rotate(-3deg); }
        }
        @keyframes float-glide-b {
          0%, 100% { transform: translate3d(0px, 0px, 0px) rotate(0deg); }
          40% { transform: translate3d(-15px, -20px, 0px) rotate(-4deg); }
          75% { transform: translate3d(14px, 12px, 0px) rotate(3deg); }
        }
        @keyframes float-glide-c {
          0%, 100% { transform: translate3d(0px, 0px, 0px) rotate(0deg); }
          50% { transform: translate3d(16px, -14px, 0px) rotate(4deg); }
        }
      `}</style>

      {/* Floating Logos Canvas Layer */}
      <div
        id="floating-tool-logos-bg"
        aria-hidden="false"
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      >
        {nodes.map((node, index) => {
          const LogoComp = node.logo;
          const isHovered = hoveredNodeId === node.id;

          // Parallax calculation
          const pX = smoothMouseRef.current.x * 24 * node.depth;
          const pY = (smoothMouseRef.current.y * 18 * node.depth) - (scrollRef.current * 38 * node.depth);

          const driftAnim = index % 3 === 0 
            ? 'float-glide-a' 
            : index % 3 === 1 
              ? 'float-glide-b' 
              : 'float-glide-c';

          return (
            <div
              key={node.id}
              style={{
                left: `${node.leftPct}%`,
                top: `${node.topPct}%`,
                transform: `translate3d(${pX}px, ${pY}px, 0px)`,
                transition: 'transform 0.12s ease-out',
              }}
              className="absolute pointer-events-auto"
            >
              {/* Drift animation wrapper */}
              <div
                style={{
                  animation: `${driftAnim} ${node.floatSpeed}s infinite ease-in-out`,
                  animationDelay: `${node.phase}s`,
                }}
              >
                {/* Interactive Logo Button */}
                <button
                  type="button"
                  onClick={() => handleLogoClick(node.toolKey)}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  title={`Floating ${node.name} (${node.sublabel}) — Click to jump to live demo`}
                  className={`group relative flex items-center justify-center rounded-2xl transition-all duration-300 cursor-pointer backdrop-blur-md ${
                    isHovered
                      ? 'scale-125 z-50 bg-[#161a38]/95 border-2 border-pink-400 shadow-2xl opacity-100'
                      : 'bg-[#10132c]/55 border border-indigo-400/25 hover:border-pink-400/60 opacity-45 hover:opacity-100'
                  }`}
                  style={{
                    padding: `${Math.round(node.size * 0.22)}px`,
                    boxShadow: isHovered 
                      ? `0 0 28px ${node.glowColor}, inset 0 0 14px ${node.glowColor}`
                      : `0 0 14px ${node.glowColor}`,
                  }}
                >
                  {/* Subtle brand ambient radiant halo */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${node.glowColor} 0%, transparent 75%)`,
                      opacity: isHovered ? 0.95 : 0.45,
                    }}
                  />

                  {/* SVG Tool Logo */}
                  <div
                    className="relative z-10 transition-transform duration-300 group-hover:rotate-6"
                    style={{
                      width: node.size,
                      height: node.size,
                      filter: `drop-shadow(0 2px 8px ${node.glowColor})`,
                    }}
                  >
                    <LogoComp size={node.size} className="w-full h-full object-contain" />
                  </div>

                  {/* Tooltip Badge on Hover */}
                  {isHovered && (
                    <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[#0a0c1c]/95 border border-pink-400/80 text-[10px] font-mono font-bold text-white whitespace-nowrap shadow-2xl z-50 flex items-center gap-1.5 animate-in fade-in zoom-in-95 duration-150">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                      <span>{node.name}</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
