import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Palette, Zap } from 'lucide-react';

export type Creative3DVibe = 'playful' | 'wave' | 'galaxy';

interface Live3DBackgroundProps {
  onVibeChange?: (vibe: Creative3DVibe) => void;
}

export default function Live3DBackground({ onVibeChange }: Live3DBackgroundProps) {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [currentVibe, setCurrentVibe] = useState<Creative3DVibe>('playful');
  const [bounceCount, setBounceCount] = useState<number>(0);
  const [showControls, setShowControls] = useState<boolean>(true);

  // References to three.js objects
  const stateRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    mainGroup: THREE.Group;
    torusKnot: THREE.Mesh;
    floatingObjects: Array<{
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      rotSpeed: THREE.Vector3;
      floatSpeed: number;
      floatOffset: number;
      scaleTarget: number;
      currentScale: number;
    }>;
    particlesMesh: THREE.Points;
    particleOriginalPositions: Float32Array;
    particleVelocities: Float32Array;
    shockwaves: Array<{
      mesh: THREE.Mesh;
      currentRadius: number;
      maxRadius: number;
      opacity: number;
    }>;
    light1: THREE.PointLight;
    light2: THREE.PointLight;
    light3: THREE.PointLight;
    vibe: Creative3DVibe;
  } | null>(null);

  // Pointer & interaction state
  const interactionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    prevMouseX: 0,
    prevMouseY: 0,
    mouseSpeed: 0,
    scrollProgress: 0,
    targetScrollProgress: 0,
    bounceImpulse: 0,
    time: 0,
  });

  // Function to trigger creative bounce ripple
  const triggerBounce = (clickX?: number, clickY?: number) => {
    setBounceCount((prev) => prev + 1);
    interactionRef.current.bounceImpulse = 1.8;

    const state = stateRef.current;
    if (!state) return;

    // Bounce all floating shapes
    state.floatingObjects.forEach((obj) => {
      obj.scaleTarget = 1.35;
    });

    // Create a 3D ripple ring in the scene
    const ringGeo = new THREE.RingGeometry(0.1, 0.25, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf472b6, // Playful soft pink/coral
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const shockwaveMesh = new THREE.Mesh(ringGeo, ringMat);

    // Position shockwave near click or center
    const x = clickX !== undefined ? clickX * 6 : 0;
    const y = clickY !== undefined ? clickY * 4 : 0;
    shockwaveMesh.position.set(x, y, 1);
    shockwaveMesh.rotation.x = 0;
    state.scene.add(shockwaveMesh);

    state.shockwaves.push({
      mesh: shockwaveMesh,
      currentRadius: 0.2,
      maxRadius: 8.0,
      opacity: 0.8,
    });
  };

  const handleVibeSwitch = (newVibe: Creative3DVibe) => {
    setCurrentVibe(newVibe);
    if (stateRef.current) {
      stateRef.current.vibe = newVibe;
      triggerBounce();
    }
    if (onVibeChange) onVibeChange(newVibe);
  };

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e1022, 0.045);

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 2. Camera setup with dynamic FOV
    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 3. Renderer with high performance & smooth alpha
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 4. Cheerful, Warm & Non-Harsh Pastel Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Soft Lavender / Lilac Light
    const light1 = new THREE.PointLight(0xa78bfa, 3.2, 35);
    light1.position.set(4, 3, 4);
    scene.add(light1);

    // Warm Peach / Coral Light
    const light2 = new THREE.PointLight(0xf472b6, 2.8, 35);
    light2.position.set(-4, -3, 3);
    scene.add(light2);

    // Gentle Mint / Aqua Light
    const light3 = new THREE.PointLight(0x34d399, 2.2, 30);
    light3.position.set(0, 5, 2);
    scene.add(light3);

    // 5. Main Creative Geometries Group
    const mainGroup = new THREE.Group();
    mainGroup.position.set(2.6, 0.3, 0); // Positioned in hero right quadrant on desktop
    scene.add(mainGroup);

    // Central Torus Knot (Sculptural, fun & fluid)
    const knotGeo = new THREE.TorusKnotGeometry(1.35, 0.32, 100, 16, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8, // Soft friendly periwinkle
      roughness: 0.25,
      metalness: 0.65,
      wireframe: false,
      transparent: true,
      opacity: 0.88,
    });
    const torusKnot = new THREE.Mesh(knotGeo, knotMat);
    mainGroup.add(torusKnot);

    // Wireframe halo over knot for delicate tech-art sparkle
    const knotWireMat = new THREE.MeshBasicMaterial({
      color: 0xfbcfe8, // Soft pastel pink wireframe
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const knotWire = new THREE.Mesh(knotGeo, knotWireMat);
    torusKnot.add(knotWire);

    // 6. Floating Playful Companion Geometries
    const floatingObjects: Array<{
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      rotSpeed: THREE.Vector3;
      floatSpeed: number;
      floatOffset: number;
      scaleTarget: number;
      currentScale: number;
    }> = [];

    // Helper to create playful candy shapes
    const createToyShape = (
      geo: THREE.BufferGeometry,
      color: number,
      pos: [number, number, number],
      rotSpeed: [number, number, number],
      floatSpeed: number,
      floatOffset: number
    ) => {
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.3,
        metalness: 0.5,
        transparent: true,
        opacity: 0.82,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      mainGroup.add(mesh);

      floatingObjects.push({
        mesh,
        basePos: new THREE.Vector3(...pos),
        rotSpeed: new THREE.Vector3(...rotSpeed),
        floatSpeed,
        floatOffset,
        scaleTarget: 1,
        currentScale: 1,
      });
    };

    // 1) Soft Mint Icosahedron
    createToyShape(
      new THREE.IcosahedronGeometry(0.55, 0),
      0x34d399,
      [2.2, 1.8, 0.5],
      [0.015, 0.02, 0.01],
      1.2,
      0
    );

    // 2) Coral Pink Donut (Torus)
    createToyShape(
      new THREE.TorusGeometry(0.55, 0.18, 16, 32),
      0xfb7185,
      [-2.4, 1.5, -0.2],
      [0.02, 0.01, 0.015],
      0.9,
      1.5
    );

    // 3) Sunny Honey Dodecahedron
    createToyShape(
      new THREE.DodecahedronGeometry(0.48, 0),
      0xfbbf24,
      [2.5, -1.6, 0.3],
      [0.01, 0.018, 0.025],
      1.1,
      3.0
    );

    // 4) Soft Lilac Octahedron Crystal
    createToyShape(
      new THREE.OctahedronGeometry(0.52, 0),
      0xc084fc,
      [-2.2, -1.7, 0.6],
      [0.025, 0.012, 0.01],
      1.3,
      4.5
    );

    // 5) Baby Sky Sphere Bubble
    createToyShape(
      new THREE.SphereGeometry(0.42, 24, 24),
      0x38bdf8,
      [0.2, 2.6, -0.4],
      [0.01, 0.01, 0.01],
      0.8,
      2.2
    );

    // 6) Gentle Orbital Gyroscope Ring
    const gyroRingGeo = new THREE.TorusGeometry(2.4, 0.025, 8, 48);
    const gyroRingMat = new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.35,
    });
    const gyroRing = new THREE.Mesh(gyroRingGeo, gyroRingMat);
    mainGroup.add(gyroRing);

    // 7. Playful Multi-Color Particle Sea (Responsive Stardust Wave)
    const particleCount = 380;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleOriginalPositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0xa78bfa), // Soft Lilac
      new THREE.Color(0xf472b6), // Soft Coral Pink
      new THREE.Color(0x34d399), // Gentle Mint
      new THREE.Color(0x38bdf8), // Soft Sky Aqua
      new THREE.Color(0xfbbf24), // Sunny Buttercup
      new THREE.Color(0x818cf8), // Periwinkle
    ];

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      // Spread evenly across the 3D space
      const x = (Math.random() - 0.5) * 26;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 12 - 1;

      particlePositions[idx] = x;
      particlePositions[idx + 1] = y;
      particlePositions[idx + 2] = z;

      particleOriginalPositions[idx] = x;
      particleOriginalPositions[idx + 1] = y;
      particleOriginalPositions[idx + 2] = z;

      particleVelocities[idx] = (Math.random() - 0.5) * 0.005;
      particleVelocities[idx + 1] = (Math.random() - 0.5) * 0.005;
      particleVelocities[idx + 2] = (Math.random() - 0.5) * 0.005;

      const col = palette[i % palette.length];
      particleColors[idx] = col.r;
      particleColors[idx + 1] = col.g;
      particleColors[idx + 2] = col.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlesMesh);

    // Shockwaves list for click ripples
    const shockwaves: Array<{
      mesh: THREE.Mesh;
      currentRadius: number;
      maxRadius: number;
      opacity: number;
    }> = [];

    stateRef.current = {
      scene,
      camera,
      renderer,
      mainGroup,
      torusKnot,
      floatingObjects,
      particlesMesh,
      particleOriginalPositions,
      particleVelocities,
      shockwaves,
      light1,
      light2,
      light3,
      vibe: currentVibe,
    };

    // 8. Event Listeners for Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;

      const dx = normX - interactionRef.current.targetMouseX;
      const dy = normY - interactionRef.current.targetMouseY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      interactionRef.current.mouseSpeed = Math.min(speed * 4, 1.5);

      interactionRef.current.targetMouseX = normX;
      interactionRef.current.targetMouseY = normY;
    };

    const handleWindowClick = (e: MouseEvent) => {
      // Don't trigger if clicked on an interactive button or input
      const target = e.target as HTMLElement | null;
      if (target?.closest('button, a, input, textarea')) return;

      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      triggerBounce(normX, normY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const normX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normY = -(touch.clientY / window.innerHeight) * 2 + 1;
        interactionRef.current.targetMouseX = normX;
        interactionRef.current.targetMouseY = normY;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const target = e.target as HTMLElement | null;
        if (target?.closest('button, a, input, textarea')) return;

        const normX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normY = -(touch.clientY / window.innerHeight) * 2 + 1;
        triggerBounce(normX, normY);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      interactionRef.current.targetScrollProgress = progress;
    };

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

      // Responsive positioning for the main group
      if (w < 768) {
        // Mobile: center gently lower so text remains completely crisp
        mainGroup.position.set(0, -0.4, -2.5);
        mainGroup.scale.set(0.72, 0.72, 0.72);
      } else if (w < 1024) {
        // Tablet: positioned in right quadrant with scaled down geometry
        mainGroup.position.set(1.6, 0.2, -1.2);
        mainGroup.scale.set(0.85, 0.85, 0.85);
      } else {
        // Desktop: generous right quadrant framing
        mainGroup.position.set(2.6, 0.3, 0);
        mainGroup.scale.set(1, 1, 1);
      }
    };

    handleResize();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleWindowClick, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // 9. Interactive Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (document.hidden) return;

      const delta = clock.getDelta();
      interactionRef.current.time += delta;
      const t = interactionRef.current.time;

      // Smooth pointer interpolation
      interactionRef.current.mouseX +=
        (interactionRef.current.targetMouseX - interactionRef.current.mouseX) * 0.05;
      interactionRef.current.mouseY +=
        (interactionRef.current.targetMouseY - interactionRef.current.mouseY) * 0.05;

      // Smooth scroll interpolation
      interactionRef.current.scrollProgress +=
        (interactionRef.current.targetScrollProgress - interactionRef.current.scrollProgress) * 0.06;

      const mouseX = interactionRef.current.mouseX;
      const mouseY = interactionRef.current.mouseY;
      const scroll = interactionRef.current.scrollProgress;

      // Dampen bounce impulse
      if (interactionRef.current.bounceImpulse > 0.01) {
        interactionRef.current.bounceImpulse *= 0.94;
      }

      const bounce = interactionRef.current.bounceImpulse;

      // Lights follow cursor playfully with soft pastel warmth
      light1.position.x = 4 + mouseX * 2.5;
      light1.position.y = 3 + mouseY * 2.5;
      light2.position.x = -4 - mouseX * 2;
      light2.position.y = -3 - mouseY * 2;
      light3.position.x = Math.sin(t * 0.8) * 3;

      // Camera parallax & scroll motion
      camera.position.x = mouseX * 0.5;
      camera.position.y = mouseY * 0.3 - scroll * 1.5;
      camera.position.z = 8.5 - scroll * 1.2;
      camera.lookAt(mouseX * 0.15, -scroll * 1.2, 0);

      // Main Group: Rotation & Floating Dynamics
      const basePosX = window.innerWidth < 768 ? 0 : 2.6;
      const basePosY = window.innerWidth < 768 ? -0.4 : 0.3;

      mainGroup.position.x = basePosX + Math.sin(t * 0.6) * 0.2 - scroll * 3.5;
      mainGroup.position.y = basePosY + Math.cos(t * 0.5) * 0.2 - scroll * 2.2;
      mainGroup.rotation.y = t * 0.3 + mouseX * 0.6 + scroll * Math.PI + bounce * 0.4;
      mainGroup.rotation.x = t * 0.15 - mouseY * 0.5 + scroll * 0.4;

      // Torus Knot twist & wobble
      torusKnot.rotation.z = t * 0.4;
      torusKnot.rotation.y = t * 0.2;

      // Bouncy scale for Torus Knot
      const knotScale = 1 + Math.sin(t * 1.5) * 0.04 + bounce * 0.25;
      torusKnot.scale.set(knotScale, knotScale, knotScale);

      // Gyro ring rotation
      gyroRing.rotation.x = t * 0.5 + mouseY * 0.3;
      gyroRing.rotation.y = t * 0.3 + mouseX * 0.3;

      // Animate floating companion shapes
      floatingObjects.forEach((obj) => {
        // Individual rotation
        obj.mesh.rotation.x += obj.rotSpeed.x;
        obj.mesh.rotation.y += obj.rotSpeed.y;
        obj.mesh.rotation.z += obj.rotSpeed.z;

        // Playful harmonic bobbing
        const floatY = Math.sin(t * obj.floatSpeed + obj.floatOffset) * 0.35;
        const floatX = Math.cos(t * obj.floatSpeed * 0.8 + obj.floatOffset) * 0.2;
        obj.mesh.position.y = obj.basePos.y + floatY;
        obj.mesh.position.x = obj.basePos.x + floatX;

        // Elastic recoil on bounce
        obj.currentScale += (obj.scaleTarget - obj.currentScale) * 0.1;
        obj.scaleTarget += (1 - obj.scaleTarget) * 0.08;
        const s = obj.currentScale;
        obj.mesh.scale.set(s, s, s);
      });

      // Animate Particle Field (Wave physics + cursor fluid dispersion)
      const pAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const positions = pAttr.array as Float32Array;

      // Project mouse position roughly into 3D world space
      const worldMouseX = mouseX * 8;
      const worldMouseY = mouseY * 5;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        const origX = particleOriginalPositions[idx];
        const origY = particleOriginalPositions[idx + 1];
        const origZ = particleOriginalPositions[idx + 2];

        // Harmonic wave ripples
        const wave = Math.sin(origX * 0.35 + t * 1.2) * 0.25 + Math.cos(origY * 0.3 + t * 0.9) * 0.2;

        // Distance from cursor
        const dx = positions[idx] - worldMouseX;
        const dy = positions[idx + 1] - worldMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel particles near mouse (playful force-field)
        if (dist < 2.5) {
          const force = (2.5 - dist) * 0.08;
          positions[idx] += (dx / dist) * force;
          positions[idx + 1] += (dy / dist) * force;
        } else {
          // Gently return towards original harmonic wave position
          positions[idx] += (origX - positions[idx]) * 0.03;
          positions[idx + 1] += (origY + wave - positions[idx + 1]) * 0.04;
          positions[idx + 2] += (origZ - positions[idx + 2]) * 0.03;
        }
      }
      pAttr.needsUpdate = true;

      // Animate and fade shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.currentRadius += 0.25;
        sw.opacity *= 0.92;

        sw.mesh.scale.set(sw.currentRadius, sw.currentRadius, 1);
        (sw.mesh.material as THREE.MeshBasicMaterial).opacity = sw.opacity;

        if (sw.opacity < 0.02 || sw.currentRadius >= sw.maxRadius) {
          scene.remove(sw.mesh);
          sw.mesh.geometry.dispose();
          (sw.mesh.material as THREE.Material).dispose();
          shockwaves.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleWindowClick);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      knotGeo.dispose();
      knotMat.dispose();
      knotWireMat.dispose();
      gyroRingGeo.dispose();
      gyroRingMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      floatingObjects.forEach((obj) => {
        obj.mesh.geometry.dispose();
        if (Array.isArray(obj.mesh.material)) {
          obj.mesh.material.forEach((m) => m.dispose());
        } else {
          obj.mesh.material.dispose();
        }
      });

      shockwaves.forEach((sw) => {
        sw.mesh.geometry.dispose();
        (sw.mesh.material as THREE.Material).dispose();
      });

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={canvasContainerRef}
        id="live-3d-background"
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          maskImage: 'radial-gradient(ellipse 100% 90% at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 90% at 50% 50%, black 60%, transparent 100%)',
        }}
      />

      {/* Fun & Creative Interactive HUD Pill */}
      {showControls && (
        <aside
          aria-label="3D Playground Controls"
          className="fixed bottom-4 right-4 z-40 flex items-center gap-2 p-1.5 rounded-full bg-[#13152d]/90 backdrop-blur-md border border-indigo-400/30 shadow-xl shadow-indigo-950/40 text-xs font-mono select-none transition-all"
        >
          {/* Bounce Toy Button */}
          <button
            type="button"
            onClick={() => triggerBounce()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 active:scale-90 text-white font-semibold shadow-md transition-transform cursor-pointer"
            title="Click to bounce 3D objects"
          >
            <Zap className="w-3.5 h-3.5 fill-white text-white animate-pulse" />
            <span>Bounce!</span>
            {bounceCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
                {bounceCount}
              </span>
            )}
          </button>

          {/* Vibe Selector Buttons */}
          <div className="hidden sm:flex items-center gap-1 pl-1 pr-2">
            <span className="text-slate-400 text-[11px] flex items-center gap-1 mr-1">
              <Palette className="w-3 h-3 text-indigo-400" />
              <span>3D Vibe:</span>
            </span>

            <button
              type="button"
              onClick={() => handleVibeSwitch('playful')}
              className={`px-2.5 py-1 rounded-full text-[11px] transition-all cursor-pointer ${
                currentVibe === 'playful'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              🎈 Candy
            </button>

            <button
              type="button"
              onClick={() => handleVibeSwitch('wave')}
              className={`px-2.5 py-1 rounded-full text-[11px] transition-all cursor-pointer ${
                currentVibe === 'wave'
                  ? 'bg-teal-600 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              🌊 Ripple
            </button>

            <button
              type="button"
              onClick={() => handleVibeSwitch('galaxy')}
              className={`px-2.5 py-1 rounded-full text-[11px] transition-all cursor-pointer ${
                currentVibe === 'galaxy'
                  ? 'bg-purple-600 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              ✨ Stardust
            </button>
          </div>

          {/* Minimize / Info Tooltip */}
          <button
            type="button"
            onClick={() => setShowControls(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            title="Hide controls (click anywhere to bounce shapes)"
          >
            <span className="sr-only">Close controls</span>
            &times;
          </button>
        </aside>
      )}

      {/* If minimized, small floating bubble to restore */}
      {!showControls && (
        <button
          type="button"
          onClick={() => setShowControls(true)}
          className="fixed bottom-4 right-4 z-40 p-2.5 rounded-full bg-[#13152d]/90 backdrop-blur-md border border-indigo-400/30 text-indigo-300 hover:text-white shadow-xl active:scale-95 transition-all cursor-pointer"
          title="Open 3D Playground Controls"
        >
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
        </button>
      )}
    </>
  );
}
