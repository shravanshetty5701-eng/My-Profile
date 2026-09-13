import { useEffect, useState, useRef } from 'react';

interface TouchRipple {
  id: number;
  x: number;
  y: number;
  color?: string;
  size: number;
}

interface TouchTrailPoint {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export default function MobileTouchFeedback() {
  const [ripples, setRipples] = useState<TouchRipple[]>([]);
  const [trail, setTrail] = useState<TouchTrailPoint[]>([]);
  const lastTouchTime = useRef(0);
  const nextId = useRef(1);

  useEffect(() => {
    // Only mount if touch is supported or on mobile/tablet devices
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!hasTouch) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touches = Array.from(e.changedTouches);
      const newRipples: TouchRipple[] = [];

      touches.forEach((touch) => {
        // Detect if tapping interactive element
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        const isInteractive = target?.closest('a, button, input, textarea, select, [role="button"]');

        newRipples.push({
          id: nextId.current++,
          x: touch.clientX,
          y: touch.clientY,
          color: isInteractive ? 'rgba(244, 114, 182, 0.9)' : 'rgba(167, 139, 250, 0.75)',
          size: isInteractive ? 54 : 44,
        });
      });

      setRipples((prev) => [...prev.slice(-6), ...newRipples]);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const now = Date.now();
      // Throttle trail generation to 35ms for smooth 30-60fps feel without DOM overload
      if (now - lastTouchTime.current < 35) return;
      lastTouchTime.current = now;

      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const newPoint: TouchTrailPoint = {
          id: nextId.current++,
          x: touch.clientX,
          y: touch.clientY,
          opacity: 0.7,
        };

        setTrail((prev) => [...prev.slice(-8), newPoint]);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Automatically fade out old ripples after animation duration
  useEffect(() => {
    if (ripples.length === 0) return;
    const timer = setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);
    return () => clearTimeout(timer);
  }, [ripples]);

  // Automatically decay trail points
  useEffect(() => {
    if (trail.length === 0) return;
    const timer = setTimeout(() => {
      setTrail((prev) => prev.slice(1));
    }, 350);
    return () => clearTimeout(timer);
  }, [trail]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9990] overflow-hidden select-none"
    >
      {/* Dynamic Touch Tap Shockwaves */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full animate-touch-pulse pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            borderColor: ripple.color,
          }}
        >
          {/* Inner luminous micro-core */}
          <div
            className="absolute inset-0 m-auto rounded-full bg-pink-400/60 animate-touch-dot"
            style={{ width: ripple.size * 0.35, height: ripple.size * 0.35 }}
          />
        </div>
      ))}

      {/* Dynamic Touch Drag Trail */}
      {trail.map((point) => (
        <div
          key={point.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-400 to-indigo-400 pointer-events-none animate-touch-trail"
          style={{
            left: point.x,
            top: point.y,
            width: 8,
            height: 8,
            boxShadow: '0 0 12px rgba(244, 114, 182, 0.7), 0 0 20px rgba(167, 139, 250, 0.4)',
          }}
        />
      ))}
    </div>
  );
}
