import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Sparkles } from 'lucide-react';

interface ThreeCanvasProps {
  className?: string;
}

export default function ThreeCanvas({ className = '' }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wireframeMode, setWireframeMode] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  // References to three.js objects for runtime controls
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const outerMeshRef = useRef<THREE.Mesh | null>(null);
  const innerMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  // Interaction tracking
  const mouseState = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    isDragging: false,
    prevMouseX: 0,
    prevMouseY: 0,
    dragVelX: 0,
    dragVelY: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.6;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 3, 50); // Sky blue
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xf59e0b, 2.5, 50); // Amber
    pointLight2.position.set(-5, -5, -3);
    scene.add(pointLight2);

    // 5. Build Group for 3D Geometry
    const group = new THREE.Group();
    scene.add(group);
    meshGroupRef.current = group;

    // Outer Geometric Polyhedron (Icosahedron)
    const outerGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);
    outerMeshRef.current = outerMesh;

    // Inner Solid / Translucent Core (Dodecahedron)
    const innerGeo = new THREE.DodecahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.3,
      metalness: 0.9,
      transparent: true,
      opacity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);
    innerMeshRef.current = innerMesh;

    // Constellation Particle Nodes
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 0.9 + 1.6; // Cloud surrounding geometry
      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.04,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);
    particlesRef.current = particles;

    // 6. Interaction Listeners
    let isIntersecting = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (mouseState.current.isDragging) {
        const deltaX = e.clientX - mouseState.current.prevMouseX;
        const deltaY = e.clientY - mouseState.current.prevMouseY;
        mouseState.current.dragVelX = deltaX * 0.007;
        mouseState.current.dragVelY = deltaY * 0.007;
        mouseState.current.prevMouseX = e.clientX;
        mouseState.current.prevMouseY = e.clientY;
      } else {
        mouseState.current.targetX = x * 0.6;
        mouseState.current.targetY = y * 0.6;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      mouseState.current.isDragging = true;
      mouseState.current.prevMouseX = e.clientX;
      mouseState.current.prevMouseY = e.clientY;
      mouseState.current.dragVelX = 0;
      mouseState.current.dragVelY = 0;
      setIsInteracting(true);
      container.setPointerCapture(e.pointerId);
    };

    const handlePointerUp = (e: PointerEvent) => {
      mouseState.current.isDragging = false;
      setIsInteracting(false);
      try {
        container.releasePointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // 7. Animation Render Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isIntersecting) return;

      const delta = clock.getDelta();

      // Inertia & drag physics
      if (mouseState.current.isDragging) {
        group.rotation.y += mouseState.current.dragVelX;
        group.rotation.x += mouseState.current.dragVelY;
      } else {
        // Friction on drag velocity
        mouseState.current.dragVelX *= 0.93;
        mouseState.current.dragVelY *= 0.93;
        group.rotation.y += mouseState.current.dragVelX;
        group.rotation.x += mouseState.current.dragVelY;

        // Base subtle idle rotation
        group.rotation.y += delta * 0.35;
        group.rotation.x += delta * 0.15;

        // Smooth parallax towards mouse pointer
        mouseState.current.currentX += (mouseState.current.targetX - mouseState.current.currentX) * 0.05;
        mouseState.current.currentY += (mouseState.current.targetY - mouseState.current.currentY) * 0.05;

        group.position.x = mouseState.current.currentX * 0.4;
        group.position.y = mouseState.current.currentY * 0.4;
      }

      // Counter rotation for inner core
      if (innerMesh) {
        innerMesh.rotation.y -= delta * 0.5;
        innerMesh.rotation.z += delta * 0.25;
      }

      // Gentle pulse for particle constellation
      if (particles) {
        particles.rotation.y += delta * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);

      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Wireframe toggle handler
  const handleToggleWireframe = () => {
    if (outerMeshRef.current) {
      const nextMode = !wireframeMode;
      setWireframeMode(nextMode);
      (outerMeshRef.current.material as THREE.MeshStandardMaterial).wireframe = nextMode;
    }
  };

  // Reset orientation handler
  const handleResetOrientation = () => {
    if (meshGroupRef.current) {
      meshGroupRef.current.rotation.set(0, 0, 0);
      meshGroupRef.current.position.set(0, 0, 0);
      mouseState.current.targetX = 0;
      mouseState.current.targetY = 0;
      mouseState.current.currentX = 0;
      mouseState.current.currentY = 0;
      mouseState.current.dragVelX = 0;
      mouseState.current.dragVelY = 0;
    }
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-slate-800 bg-gradient-to-b from-[#0d1322] via-[#090d16] to-[#070a10] shadow-2xl flex flex-col ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="canvas"
    >
      {/* 3D Viewport Title & Status Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-sm z-10 select-none">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
          </span>
          <span className="text-[11px] font-mono font-medium text-slate-300">
            Reactive Simulation Node
          </span>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline px-1.5 py-0.5 rounded bg-slate-800/60">
            Three.js WebGL
          </span>
        </div>
      </div>

      {/* Main WebGL Container */}
      <div
        ref={containerRef}
        className="w-full h-64 sm:h-72 md:h-80 cursor-grab active:cursor-grabbing relative touch-none flex items-center justify-center"
      >
        {/* Subtle helper watermark overlay */}
        <div
          className={`absolute bottom-3 left-3 pointer-events-none transition-opacity duration-300 ${
            isInteracting ? 'opacity-20' : 'opacity-70'
          }`}
        >
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
            <Sparkles className="w-3 h-3 text-sky-400" />
            <span>Drag to rotate &bull; Hover to tilt</span>
          </div>
        </div>
      </div>

      {/* Interactive Toolbar */}
      <div className="px-3.5 py-2 border-t border-slate-800/80 bg-[#0a0e18]/90 flex items-center justify-between text-xs z-10">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleWireframe}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700/60 transition-colors cursor-pointer"
            title="Toggle Wireframe/Solid Mesh"
          >
            <Eye className="w-3 h-3 text-sky-400" />
            <span>{wireframeMode ? 'Solid Mesh' : 'Wireframe'}</span>
          </button>

          <button
            type="button"
            onClick={handleResetOrientation}
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-mono text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Reset 3D Orientation"
          >
            <RotateCw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        <div className="text-[10px] font-mono text-slate-500">
          State: <span className="text-sky-400 font-medium">{isInteracting ? 'Manipulating' : isHovered ? 'Active' : 'Orbiting'}</span>
        </div>
      </div>
    </div>
  );
}
