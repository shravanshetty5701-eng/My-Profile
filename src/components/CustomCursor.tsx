import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const [hoveredState, setHoveredState] = useState<'default' | 'link' | 'button' | 'canvas' | 'text'>('default');
  const [clicked, setClicked] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on devices that have a fine pointer (mouse/trackpad, not touch)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) {
      setEnabled(false);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check what element we are hovering
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor]');
      if (interactive) {
        const cursorType = interactive.getAttribute('data-cursor');
        if (cursorType === 'canvas') {
          setHoveredState('canvas');
        } else if (interactive.tagName === 'BUTTON' || interactive.getAttribute('role') === 'button') {
          setHoveredState('button');
        } else if (interactive.tagName === 'A') {
          setHoveredState('link');
        } else {
          setHoveredState('text');
        }
      } else {
        setHoveredState('default');
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth lerp loop for the outer ring
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      if (dotRef.current && ringRef.current) {
        // Direct transform on inner dot for instant response
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;

        // Lerp transform on outer ring for smooth fluid feel
        ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.18);
        ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.18);
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!enabled || !visible) return null;

  const isInteractive = hoveredState !== 'default';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Precision inner center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-pink-400 transition-transform will-change-transform"
        style={{
          boxShadow: '0 0 10px rgba(244, 114, 182, 0.9)',
          opacity: isInteractive ? 0.4 : 1,
        }}
      />

      {/* Fluid spring outer ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full will-change-transform transition-all duration-150 ease-out border ${
          hoveredState === 'canvas'
            ? '-ml-7 -mt-7 h-14 w-14 border-amber-400/80 bg-amber-400/10'
            : isInteractive
            ? '-ml-5 -mt-5 h-10 w-10 border-pink-400/80 bg-pink-400/15 backdrop-blur-[1px]'
            : '-ml-3.5 -mt-3.5 h-7 w-7 border-indigo-400/50 bg-transparent'
        } ${clicked ? 'scale-75 opacity-90' : 'scale-100'}`}
      >
        {hoveredState === 'canvas' && (
          <span className="text-[9px] font-mono font-bold text-amber-300 uppercase tracking-widest select-none">
            3D
          </span>
        )}
      </div>
    </div>
  );
}
