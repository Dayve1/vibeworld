import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ShoppingCart, Users, GraduationCap, LayoutGrid,
  Settings, ArrowLeft, Search, Heart, MessageCircle,
  Share2, Bookmark, Bell, Play, Download, Shield,
  Award, Plus, CheckCircle, Clock, Hash, Video,
  FileText, Code, Layers, GitBranch, Upload, Send,
  ThumbsUp, ChevronDown, MoreHorizontal, Sparkles,
  Flame, Rocket, Wifi, Zap, BookOpen, Eye, Info,
  UserPlus, Flag, EyeOff, Star, Globe, Package,
  PenTool, Cpu, Smartphone, Database, BarChart2, Layout,
  Terminal, Cloud, Lock, Briefcase, UserCheck, UserX,
  MessageSquare, X, Check, AlertCircle, ExternalLink,
  ShoppingBag, Filter, MapPin, Headphones,
  Moon, Sun, Trophy, Music, ShieldCheck, BellRing, Minus
} from 'lucide-react';
import * as THREE from 'three';

/* ─── GLOBAL STYLES ───────────────────────────────────────── */
const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    html,body,*{cursor:none!important}
    :root{--cy:#22d3ee;--pu:#a855f7;--pk:#ec4899;--gr:#10b981;--or:#f59e0b;--mu:rgba(255,255,255,.4);--br:rgba(255,255,255,.08)}
    html,body{background:#030712;color:rgba(255,255,255,.87);font-family:'Rajdhani',sans-serif;overflow-x:hidden}
    ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:var(--cy);border-radius:4px}
    .O{font-family:'Orbitron',monospace}.M{font-family:'JetBrains Mono',monospace}
    .gl{background:rgba(255,255,255,.04);backdrop-filter:blur(20px);border:1px solid var(--br)}
    .gl2{background:rgba(255,255,255,.07);backdrop-filter:blur(32px);border:1px solid rgba(255,255,255,.12)}
    .tag{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;font-family:'JetBrains Mono',monospace}
    .pb{height:3px;border-radius:2px;background:rgba(255,255,255,.1);overflow:hidden}
    .pf{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--cy),var(--pu))}
    .ar{border:2px solid transparent;background:linear-gradient(#030712,#030712) padding-box,linear-gradient(135deg,var(--cy),var(--pu)) border-box}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
    @keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
    @keyframes sh{0%{background-position:-200% center}100%{background-position:200% center}}
    @keyframes sp1{from{transform:rotate(0)}to{transform:rotate(360deg)}}
    @keyframes sp2{from{transform:rotate(0)}to{transform:rotate(-360deg)}}
    @keyframes wI{0%{opacity:0;filter:blur(30px) brightness(5);transform:scale(.82)}18%{opacity:1;filter:blur(12px) brightness(2.5);transform:scale(.96)}58%{filter:blur(3px) brightness(1.2);transform:scale(1.01)}100%{opacity:1;filter:blur(0) brightness(1);transform:scale(1)}}
    @keyframes wF{0%{opacity:.9}100%{opacity:0}}
    @keyframes sU{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes rainbowShift{0%{color:#22d3ee;filter:drop-shadow(0 0 6px #22d3ee)}16%{color:#a855f7;filter:drop-shadow(0 0 6px #a855f7)}33%{color:#ec4899;filter:drop-shadow(0 0 6px #ec4899)}50%{color:#f59e0b;filter:drop-shadow(0 0 6px #f59e0b)}66%{color:#10b981;filter:drop-shadow(0 0 6px #10b981)}83%{color:#6366f1;filter:drop-shadow(0 0 6px #6366f1)}100%{color:#22d3ee;filter:drop-shadow(0 0 6px #22d3ee)}}
    @keyframes arrowBounce{0%,100%{transform:translateX(0)}40%{transform:translateX(-4px)}70%{transform:translateX(-2px)}}
    @keyframes cursorPing{0%{transform:translate(-50%,-50%) scale(1);opacity:.7}100%{transform:translate(-50%,-50%) scale(2.4);opacity:0}}
    @keyframes cursorOrbit{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
    .bl{animation:blink 1.2s ease-in-out infinite}
    .SB{background:linear-gradient(90deg,var(--cy),var(--pu),var(--pk),var(--cy));background-size:200% auto;animation:sh 3s linear infinite}
    .WE{animation:wI 1.1s cubic-bezier(.22,1,.36,1) forwards}
    .CU{transition:all .28s cubic-bezier(.34,1.4,.64,1)}.CU:hover{transform:translateY(-4px) scale(1.015)}
    @keyframes portalFlash{0%{opacity:0;transform:scale(.92)}15%{opacity:1;transform:scale(1.01)}100%{opacity:1;transform:scale(1)}}
    @keyframes worldPulse{0%,100%{box-shadow:0 0 0 0 currentColor}50%{box-shadow:0 0 12px 2px currentColor}}
    @keyframes floatA{0%,100%{transform:translateY(0) translateX(0) scale(1)}50%{transform:translateY(-10px) translateX(5px) scale(1.1)}}
    @keyframes floatB{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(8px) translateX(-7px)}}
    @keyframes floatC{0%,100%{transform:translateY(0) translateX(0)}33%{transform:translateY(-6px) translateX(8px)}66%{transform:translateY(5px) translateX(-4px)}}
    @keyframes particleBurst{0%{transform:translate(-50%,-50%) translate(0px,0px);opacity:1}100%{transform:translate(-50%,-50%) translate(var(--tx),var(--ty));opacity:0}}
    @keyframes playCycle{0%{color:#22d3ee;filter:drop-shadow(0 0 10px #22d3ee) drop-shadow(0 0 20px #22d3ee)}25%{color:#a855f7;filter:drop-shadow(0 0 10px #a855f7) drop-shadow(0 0 20px #a855f7)}50%{color:#ec4899;filter:drop-shadow(0 0 10px #ec4899) drop-shadow(0 0 20px #ec4899)}75%{color:#f59e0b;filter:drop-shadow(0 0 10px #f59e0b) drop-shadow(0 0 20px #f59e0b)}100%{color:#22d3ee;filter:drop-shadow(0 0 10px #22d3ee) drop-shadow(0 0 20px #22d3ee)}}
    @keyframes purchaseGlow{0%,100%{box-shadow:0 0 18px rgba(34,211,238,.5),0 0 35px rgba(168,85,247,.3)}33%{box-shadow:0 0 25px rgba(168,85,247,.7),0 0 50px rgba(236,72,153,.4)}66%{box-shadow:0 0 22px rgba(236,72,153,.6),0 0 45px rgba(34,211,238,.3)}}
    @keyframes portalRing{0%{transform:translate(-50%,-50%) scale(0);opacity:1}100%{transform:translate(-50%,-50%) scale(6);opacity:0}}
    @keyframes portalSpin{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
    @keyframes slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
    @keyframes detailFade{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
    @keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
    @keyframes rippleEffect{0%{transform:translate(-50%,-50%) scale(0);opacity:.6}100%{transform:translate(-50%,-50%) scale(3);opacity:0}}
    @keyframes settingsPop{0%{opacity:0;transform:translateY(10px) scale(.95)}100%{opacity:1;transform:translateY(0) scale(1)}}
    @keyframes electricPulse{0%,100%{filter:drop-shadow(0 0 3px #22d3ee) drop-shadow(0 0 8px #22d3ee);opacity:1}50%{filter:drop-shadow(0 0 6px #67e8f9) drop-shadow(0 0 16px #22d3ee);opacity:.75}}
    @keyframes fireDance{0%,100%{filter:drop-shadow(0 0 4px #f59e0b);transform:scale(1)}33%{filter:drop-shadow(0 0 10px #ef4444);transform:scale(1.05)}66%{filter:drop-shadow(0 0 7px #fbbf24);transform:scale(.97)}}
    @keyframes starGlow{0%{filter:drop-shadow(0 0 4px #a855f7) drop-shadow(0 0 8px #a855f7)}50%{filter:drop-shadow(0 0 8px #c084fc) drop-shadow(0 0 20px #a855f7)}100%{filter:drop-shadow(0 0 4px #a855f7) drop-shadow(0 0 8px #a855f7)}}
    @keyframes badgeIdlePulse{0%,100%{transform:scale(1);opacity:.35}50%{transform:scale(1.06);opacity:.45}}
    @keyframes workShuffle{0%{opacity:0;transform:scale(.95)}100%{opacity:1;transform:scale(1)}}
    @keyframes hoverMenuSlide{from{opacity:0;transform:translateY(-6px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
    @keyframes badgePulse{0%,100%{box-shadow:0 0 8px var(--gc,#22d3ee),0 0 16px var(--gc,#22d3ee)}50%{box-shadow:0 0 18px var(--gc,#22d3ee),0 0 36px var(--gc,#22d3ee)}}
    @keyframes badgeDim{0%,100%{opacity:.32;transform:scale(1)}50%{opacity:.42;transform:scale(1.05)}}
    @keyframes carouselFade{0%{opacity:0;transform:scale(.93)}100%{opacity:1;transform:scale(1)}}
    .gbg{background-image:linear-gradient(rgba(34,211,238,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.025) 1px,transparent 1px);background-size:60px 60px}
  `}</style>
);

/* ─── GALAXY BACKGROUND ───────────────────────────────────── */
const GalaxyBG = ({ zoomed }) => {
  const ref = useRef(null);
  const zR = useRef(zoomed);
  zR.current = zoomed;

  useEffect(() => {
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, .1, 1000);
    const ren = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    ren.setSize(window.innerWidth, window.innerHeight);
    ren.setPixelRatio(Math.min(devicePixelRatio, 2));
    ref.current.appendChild(ren.domElement);

    const N = 9000, p = new Float32Array(N * 3), c = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      p[i * 3] = (Math.random() - .5) * 200; p[i * 3 + 1] = (Math.random() - .5) * 200; p[i * 3 + 2] = (Math.random() - .5) * 200;
      const t = Math.random();
      if (t < .3) { c[i * 3] = .2; c[i * 3 + 1] = .85; c[i * 3 + 2] = 1 } else if (t < .6) { c[i * 3] = .7; c[i * 3 + 1] = .25; c[i * 3 + 2] = 1 } else { c[i * 3] = 1; c[i * 3 + 1] = 1; c[i * 3 + 2] = 1 }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
    const stars = new THREE.Points(g, new THREE.PointsMaterial({ size: .06, vertexColors: true, transparent: true, opacity: .9 }));
    scene.add(stars);

    // Background drifting planets — small, sweep the ENTIRE galaxy in 3D (no z bias)
    const BG_DEF = [
      // [color, radius, orbitX, orbitY, orbitZ, speed, phase, tiltX, tiltY, tiltZ]
      { col: 0x10b981, r: .28, oX: 42, oY: 22, oZ: 38, spd: .022, ph: 0, tx: .4, ty: .25, tz: .6 },
      { col: 0xa855f7, r: .22, oX: 35, oY: 28, oZ: 30, spd: .031, ph: 2.1, tx: .9, ty: .55, tz: .3 },
      { col: 0x22d3ee, r: .32, oX: 50, oY: 18, oZ: 44, spd: .016, ph: 4.3, tx: .2, ty: .85, tz: .7 },
      { col: 0xec4899, r: .2, oX: 28, oY: 32, oZ: 26, spd: .038, ph: 1.5, tx: .7, ty: .35, tz: .8 },
      { col: 0xf59e0b, r: .18, oX: 38, oY: 24, oZ: 32, spd: .027, ph: 3.7, tx: .5, ty: .7, tz: .2 },
      { col: 0x818cf8, r: .25, oX: 45, oY: 30, oZ: 40, spd: .019, ph: 0.8, tx: 1.1, ty: .15, tz: .5 },
      { col: 0x34d399, r: .16, oX: 30, oY: 20, oZ: 28, spd: .035, ph: 5.1, tx: .3, ty: 1.0, tz: .4 },
      { col: 0xfbbf24, r: .21, oX: 48, oY: 26, oZ: 36, spd: .024, ph: 1.9, tx: .6, ty: .4, tz: .9 },
      { col: 0x60a5fa, r: .19, oX: 33, oY: 35, oZ: 42, spd: .033, ph: 3.2, tx: .8, ty: .6, tz: .1 },
      { col: 0xf472b6, r: .24, oX: 40, oY: 22, oZ: 30, spd: .018, ph: 5.8, tx: .35, ty: .9, tz: .55 },
      { col: 0x4ade80, r: .17, oX: 25, oY: 28, oZ: 35, spd: .042, ph: 2.6, tx: 1.2, ty: .2, tz: .7 },
      { col: 0xe879f9, r: .23, oX: 44, oY: 18, oZ: 38, spd: .021, ph: 4.9, tx: .5, ty: .75, tz: .3 },
    ];
    const bgPlanets = BG_DEF.map(d => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(d.r, 16, 16),
        new THREE.MeshPhongMaterial({ color: d.col, emissive: d.col, emissiveIntensity: .5, shininess: 25 }));
      const atm = new THREE.Mesh(new THREE.SphereGeometry(d.r + .12, 10, 10),
        new THREE.MeshBasicMaterial({ color: d.col, transparent: true, opacity: .08, side: THREE.BackSide }));
      scene.add(mesh); scene.add(atm);
      return { ...d, mesh, atm };
    });

    cam.position.z = 22;
    let raf, t = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop); t += .004;
      stars.rotation.y += .00025; stars.rotation.x += .00008;
      const tz = zR.current ? 7 : 22; cam.position.z += (tz - cam.position.z) * .04;
      cam.position.x = Math.sin(t * .25) * 1.2; cam.position.y = Math.cos(t * .18) * .8;
      // each bg planet sweeps the FULL galaxy in 3D — Lissajous-style paths
      bgPlanets.forEach(b => {
        const a = t * b.spd + b.ph;
        // Full 3D orbit: X, Y, Z all use different frequencies so the path never repeats
        b.mesh.position.set(
          Math.cos(a) * b.oX + Math.sin(a * b.tx) * b.oX * .22,
          Math.sin(a * b.ty + .9) * b.oY + Math.cos(a * 1.7 + b.ph * .5) * b.oY * .18,
          Math.cos(a * b.tz + .4) * b.oZ + Math.sin(a * b.tx * .8 + 1.1) * b.oZ * .25
        );
        b.atm.position.copy(b.mesh.position);
        b.mesh.rotation.y += .0025; b.mesh.rotation.x += .0015;
      });
      ren.render(scene, cam);
    };
    loop();
    const rz = () => { cam.aspect = window.innerWidth / window.innerHeight; cam.updateProjectionMatrix(); ren.setSize(window.innerWidth, window.innerHeight); };
    window.addEventListener('resize', rz);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', rz); if (ref.current && ren.domElement.parentNode === ref.current) ref.current.removeChild(ren.domElement); ren.dispose(); };
  }, []);

  return <div ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
};

/* ─── GALAXY HUB — FLOATING WORLDS ──────────────────────── */
const WDEF = [
  {
    id: 'market', label: 'VIBE MARKET', em: '🛒', icon: ShoppingCart, css: '#ec4899', hx: 0xec4899, hc: 0x2a0310, he: 0x6b0a28, hw: 0xff6eb0,
    pos: [-7.5, 2.5, 0], r: 1.85, rs: .003, ax: [.05, 1, .1], fa: .22, fs: .00044,
    rings: [{ ri: 2.5, ro: 3.3, rc: 0xff88c0, ro2: .55, rt: 1.5 }, { ri: 3.5, ro: 3.7, rc: 0xec4899, ro2: .28, rt: 1.3 }]
  },
  {
    id: 'community', label: 'VIBE COMMUNITY', em: '👥', icon: Users, css: '#10b981', hx: 0x10b981, hc: 0x020f07, he: 0x0b3d1c, hw: 0x34d399,
    pos: [7.5, -2, 0], r: 1.7, rs: .0022, ax: [-.08, 1, .06], fa: .28, fs: .00038, hasMoon: true,
    rings: [{ ri: 2.35, ro: 3.1, rc: 0x34d399, ro2: .45, rt: 1.55 }, { ri: 3.3, ro: 3.5, rc: 0x10b981, ro2: .22, rt: 1.4 }]
  },
  {
    id: 'academy', label: 'VIBE ACADEMY', em: '🎓', icon: GraduationCap, css: '#c084fc', hx: 0xa855f7, hc: 0x0e0420, he: 0x330c5a, hw: 0xc084fc,
    pos: [3, 5.5, -6], r: 1.42, rs: .004, ax: [.2, .9, -.1], fa: .18, fs: .00055,
    rings: [{ ri: 2.0, ro: 2.75, rc: 0xc084fc, ro2: .48, rt: 1.2 }]
  },
  {
    id: 'connect', label: 'VIBE CONNECT', em: '⚡', icon: LayoutGrid, css: '#22d3ee', hx: 0x22d3ee, hc: 0x020d18, he: 0x062a3a, hw: 0x22d3ee,
    pos: [-3, -4.8, -4], r: 1.75, rs: .0033, ax: [.07, 1, -.12], fa: .24, fs: .0005, hasGrid: true,
    rings: [{ ri: 2.45, ro: 3.2, rc: 0x22d3ee, ro2: .5, rt: 1.48 }, { ri: 3.4, ro: 3.6, rc: 0x67e8f9, ro2: .25, rt: 1.35 }]
  },
];

const GalaxyHub = ({ onSelect }) => {
  const canvasRef = useRef(null);
  const warpRef = useRef(null);
  const labelRefs = useRef([null, null, null, null]);
  const cbRef = useRef(onSelect);
  cbRef.current = onSelect;

  useEffect(() => {
    const W = window.innerWidth, H = window.innerHeight;
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(52, W / H, .01, 300);
    const ren = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    ren.setSize(W, H); ren.setPixelRatio(Math.min(devicePixelRatio, 2));
    ren.toneMapping = THREE.ACESFilmicToneMapping;
    ren.toneMappingExposure = 1.8;
    ren.outputColorSpace = THREE.SRGBColorSpace;
    canvasRef.current.appendChild(ren.domElement);

    // deep stars
    const NS = 12000, sp = new Float32Array(NS * 3), sc = new Float32Array(NS * 3);
    for (let i = 0; i < NS; i++) {
      const r2 = 80 + Math.random() * 180, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
      sp[i * 3] = r2 * Math.sin(ph) * Math.cos(th); sp[i * 3 + 1] = r2 * Math.sin(ph) * Math.sin(th); sp[i * 3 + 2] = r2 * Math.cos(ph);
      const t = Math.random();
      if (t < .3) { sc[i * 3] = .4; sc[i * 3 + 1] = .7; sc[i * 3 + 2] = 1 } else if (t < .6) { sc[i * 3] = .75; sc[i * 3 + 1] = .3; sc[i * 3 + 2] = 1 } else { sc[i * 3] = 1; sc[i * 3 + 1] = 1; sc[i * 3 + 2] = 1 }
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    sg.setAttribute('color', new THREE.BufferAttribute(sc, 3));
    const stars = new THREE.Points(sg, new THREE.PointsMaterial({ size: .3, vertexColors: true, transparent: true, opacity: .85 }));
    scene.add(stars);

    // nebula bg
    [[-55, 20, -100, 0xec4899], [70, -25, -110, 0xa855f7], [-35, -45, -95, 0x22d3ee], [45, 40, -120, 0x10b981]].forEach(([x, y, z, col]) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(55, 6, 6), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .013, side: THREE.BackSide }));
      m.position.set(x, y, z); scene.add(m);
    });

    // dust
    const dp = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) { dp[i * 3] = (Math.random() - .5) * 50; dp[i * 3 + 1] = (Math.random() - .5) * 35; dp[i * 3 + 2] = (Math.random() - .5) * 35 - 8 }
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
    const dust = new THREE.Points(dg, new THREE.PointsMaterial({ size: .1, color: 0x7799ff, transparent: true, opacity: .3 }));
    scene.add(dust);

    // lighting — strong multi-point for glossy specular look
    scene.add(new THREE.AmbientLight(0xffffff, .18));
    const ml = new THREE.PointLight(0xffffff, 5.5, 0); ml.position.set(18, 14, 22); scene.add(ml);
    const fl2 = new THREE.PointLight(0x5599ff, 1.2, 0); fl2.position.set(-18, -8, -10); scene.add(fl2);
    const fl3 = new THREE.PointLight(0xff44aa, .7, 0); fl3.position.set(0, 18, 6); scene.add(fl3);
    const fl4 = new THREE.PointLight(0x22ffaa, .5, 0); fl4.position.set(10, -12, 8); scene.add(fl4);
    // Key directional light for crisp specular highlights
    const dKey = new THREE.DirectionalLight(0xffffff, 2.2); dKey.position.set(1.2, 1, 1.8); scene.add(dKey);
    // Rim light from below-left for dramatic glow
    const rim = new THREE.PointLight(0xffffff, 2.4, 0); rim.position.set(-10, 5, 15); scene.add(rim);

    // planets
    const planets = WDEF.map(def => {
      const grp = new THREE.Group(); grp.position.set(...def.pos); scene.add(grp);
      const ax = new THREE.Vector3(...def.ax).normalize();
      const cMat = new THREE.MeshPhongMaterial({ color: def.hc, emissive: def.he, emissiveIntensity: 0.4, specular: 0xffffff, shininess: 320 });
      const core = new THREE.Mesh(new THREE.SphereGeometry(def.r, 64, 64), cMat); grp.add(core);
      grp.add(new THREE.Mesh(new THREE.SphereGeometry(def.r + .02, 26, 26), new THREE.MeshBasicMaterial({ color: def.hw, wireframe: true, transparent: true, opacity: .06 })));
      if (def.hasGrid) grp.add(new THREE.Mesh(new THREE.SphereGeometry(def.r + .08, 14, 14), new THREE.MeshBasicMaterial({ color: def.hx, wireframe: true, transparent: true, opacity: .22 })));
      // Gloss highlight sphere — positioned upper-right to simulate specular sheen
      const glossMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .32 });
      const gloss = new THREE.Mesh(new THREE.SphereGeometry(def.r * .68, 24, 24), glossMat);
      gloss.position.set(def.r * .4, def.r * .34, def.r * .62); grp.add(gloss);
      // Soft color overlay matching planet hue
      const glossMat2 = new THREE.MeshBasicMaterial({ color: def.hw, transparent: true, opacity: .20 });
      const gloss2 = new THREE.Mesh(new THREE.SphereGeometry(def.r * .52, 16, 16), glossMat2);
      gloss2.position.set(def.r * .28, -def.r * .22, def.r * .7); grp.add(gloss2);
      const a1 = new THREE.MeshBasicMaterial({ color: def.hx, transparent: true, opacity: .12, side: THREE.BackSide }); grp.add(new THREE.Mesh(new THREE.SphereGeometry(def.r + .4, 28, 28), a1));
      const a2 = new THREE.MeshBasicMaterial({ color: def.hx, transparent: true, opacity: .05, side: THREE.BackSide }); grp.add(new THREE.Mesh(new THREE.SphereGeometry(def.r + .9, 28, 28), a2));
      (def.rings || []).forEach(ring => {
        const rm = new THREE.Mesh(new THREE.TorusGeometry((ring.ri + ring.ro) / 2, (ring.ro - ring.ri) / 2, 4, 90), new THREE.MeshBasicMaterial({ color: ring.rc, transparent: true, opacity: ring.ro2, side: THREE.DoubleSide }));
        rm.rotation.x = ring.rt; grp.add(rm);
      });
      let moonGrp = null;
      if (def.hasMoon) {
        moonGrp = new THREE.Group(); scene.add(moonGrp);
        const mm = new THREE.Mesh(new THREE.SphereGeometry(.3, 18, 18), new THREE.MeshPhongMaterial({ color: 0x8ecfb0, emissive: 0x1a5a35, emissiveIntensity: .6 }));
        mm.position.x = def.r + 1.5; moonGrp.add(mm);
      }
      let dots = null;
      if (def.hasGrid) {
        dots = Array.from({ length: 6 }, (_, j) => {
          const dm = new THREE.Mesh(new THREE.SphereGeometry(.055, 6, 6), new THREE.MeshBasicMaterial({ color: def.hx }));
          scene.add(dm);
          return { mesh: dm, angle: j * (Math.PI * 2 / 6), dr: def.r + 1.0 + Math.random() * .25, spd: .007 + Math.random() * .004 };
        });
      }
      return { def, grp, core, cMat, a1, a2, moonGrp, dots, ax, hov: false };
    });

    // raycaster
    const ray = new THREE.Raycaster(), mp = new THREE.Vector2();
    const hitmesh = planets.map(p => p.core);
    let hovIdx = -1;

    // Fly state — simple direct smooth zoom
    const fly = {
      active: false,
      idx: null,
      t0: 0,
      dur: 1600,
      lastFired: 0,
      posStart: new THREE.Vector3(),
      posEnd: new THREE.Vector3(),
      quatStart: new THREE.Quaternion(),
      quatEnd: new THREE.Quaternion(),
    };

    function setHov(idx) {
      if (idx === hovIdx) return;
      if (hovIdx >= 0) { const p = planets[hovIdx]; p.hov = false; p.cMat.emissiveIntensity = .55; p.a1.opacity = .10; p.a2.opacity = .04; }
      if (idx >= 0) { const p = planets[idx]; p.hov = true; p.cMat.emissiveIntensity = 2.4; p.a1.opacity = .26; p.a2.opacity = .11; }
      hovIdx = idx;
      labelRefs.current.forEach((el, i) => {
        if (!el) return;
        const pill = el.querySelector('[data-pill]');
        if (!pill) return;
        if (i === idx) { pill.style.borderColor = WDEF[i].css; pill.style.boxShadow = `0 0 50px ${WDEF[i].css}80,0 0 100px ${WDEF[i].css}30`; pill.style.transform = 'scale(1.14)'; pill.style.textShadow = `0 0 8px #fff,0 0 18px #fff,0 0 35px ${WDEF[i].css},0 0 70px ${WDEF[i].css}aa`; }
        else { pill.style.borderColor = `${WDEF[i].css}80`; pill.style.boxShadow = `0 0 32px ${WDEF[i].css}40,inset 0 0 20px ${WDEF[i].css}12`; pill.style.transform = 'scale(1)'; pill.style.textShadow = `0 0 10px #fff,0 0 22px ${WDEF[i].css},0 0 50px ${WDEF[i].css}aa`; }
      });
    }

    const onMov = e => {
      if (fly.active) return;
      mp.x = (e.clientX / W) * 2 - 1; mp.y = -(e.clientY / H) * 2 + 1;
      ray.setFromCamera(mp, cam);
      const h = ray.intersectObjects(hitmesh);
      setHov(h.length ? hitmesh.indexOf(h[0].object) : -1);
    };
    const onClk = e => {
      if (fly.active) return;
      mp.x = (e.clientX / W) * 2 - 1; mp.y = -(e.clientY / H) * 2 + 1;
      ray.setFromCamera(mp, cam);
      const h = ray.intersectObjects(hitmesh);
      if (h.length) startFly(hitmesh.indexOf(h[0].object));
    };
    ren.domElement.addEventListener('mousemove', onMov);
    ren.domElement.addEventListener('click', onClk);

    function startFly(idx) {
      const now = Date.now();
      if (fly.active || now - fly.lastFired < fly.dur + 600) return;
      fly.lastFired = now;
      const p = planets[idx];
      setHov(-1);

      // Snapshot start
      fly.posStart.copy(cam.position);
      fly.quatStart.copy(cam.quaternion);

      // End: straight line to just in front of planet
      const dir = p.grp.position.clone().sub(cam.position).normalize();
      fly.posEnd.copy(p.grp.position).addScaledVector(dir, -(p.def.r * 1.2));

      // End rotation — smooth look-at
      const dummy = new THREE.Object3D();
      dummy.position.copy(fly.posEnd);
      dummy.lookAt(p.grp.position);
      fly.quatEnd.copy(dummy.quaternion);

      fly.active = true;
      fly.idx = idx;
      fly.t0 = now;

      // Glow centred on planet screen pos
      if (warpRef.current) {
        const sp = p.grp.position.clone().project(cam);
        const sx = ((sp.x * .5 + .5) * 100).toFixed(1);
        const sy = ((sp.y * -.5 + .5) * 100).toFixed(1);
        warpRef.current.style.background = `radial-gradient(ellipse at ${sx}% ${sy}%,${WDEF[idx].css}55 0%,${WDEF[idx].css}18 55%,transparent 80%)`;
        warpRef.current.style.opacity = '0';
      }
      labelRefs.current.forEach(el => { if (el) { el.style.opacity = '0'; el.style.pointerEvents = 'none'; } });
    }

    // entrance
    const E0 = Date.now(), ED = 2000; let eDone = false;
    cam.position.set(0, 0, 36);
    let raf;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = Date.now();
      if (!eDone) { const t = Math.min((now - E0) / ED, 1), e = 1 - Math.pow(1 - t, 3); cam.position.z = 36 - 14 * e; cam.position.y = 2 * (1 - e); if (t >= 1) { eDone = true; cam.position.set(0, 0, 22); } }

      planets.forEach((p, i) => {
        const ft = now * p.def.fs + i * 1.8;
        p.grp.position.y = p.def.pos[1] + Math.sin(ft) * p.def.fa;
        p.grp.rotateOnAxis(p.ax, p.def.rs * (p.hov ? 2.6 : 1));
        if (p.moonGrp) { const ang = now * .00065; p.moonGrp.position.set(p.grp.position.x + Math.cos(ang) * (p.def.r + 1.6), p.grp.position.y, p.grp.position.z + Math.sin(ang) * (p.def.r + 1.6)); p.moonGrp.rotation.y = ang; }
        if (p.dots) p.dots.forEach(d => { d.angle += d.spd; d.mesh.position.set(p.grp.position.x + Math.cos(d.angle) * d.dr, p.grp.position.y + Math.sin(d.angle * .6) * .38, p.grp.position.z + Math.sin(d.angle) * d.dr); });
      });
      stars.rotation.y += .00003; dust.rotation.y -= .0001;

      if (fly.active && fly.idx !== null) {
        const raw = Math.min((now - fly.t0) / fly.dur, 1);
        // Smooth ease-in-out: cubic hermite
        const t = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;

        // Direct lerp position — single clean motion toward planet
        cam.position.lerpVectors(fly.posStart, fly.posEnd, t);

        // Smooth rotation slerp — starts immediately, no delay
        cam.quaternion.slerpQuaternions(fly.quatStart, fly.quatEnd, t);

        // FOV gently opens during approach, exact reset on finish
        cam.fov = 52 + t * 12;
        cam.updateProjectionMatrix();

        // Glow pulses once, centred on planet
        if (warpRef.current) {
          const g = Math.sin(raw * Math.PI);
          warpRef.current.style.opacity = (g * 0.55).toFixed(3);
        }

        if (raw >= 1) {
          fly.active = false;
          cam.fov = 52; cam.updateProjectionMatrix();
          if (warpRef.current) warpRef.current.style.opacity = '0';
          const id = WDEF[fly.idx].id;
          fly.idx = null;
          setTimeout(() => cbRef.current(id), 80);
        }
      }

      // label positions — mutate ref styles directly, no React state update in loop
      const vw = window.innerWidth, vh = window.innerHeight;
      planets.forEach((p, i) => {
        const el = labelRefs.current[i]; if (!el) return;
        const wp = p.grp.position.clone().project(cam);
        const sx = (wp.x * .5 + .5) * vw, sy = (wp.y * -.5 + .5) * vh;
        const dist = cam.position.distanceTo(p.grp.position);
        const sr = (p.def.r / dist) * (vh / (2 * Math.tan(cam.fov * Math.PI / 360)));
        el.style.left = sx + 'px'; el.style.top = (sy - sr - 12) + 'px';
        if (!fly.active && eDone) { el.style.opacity = '1'; el.style.pointerEvents = 'auto'; }
      });

      ren.render(scene, cam);
    };
    loop();

    const rz = () => { cam.aspect = window.innerWidth / window.innerHeight; cam.updateProjectionMatrix(); ren.setSize(window.innerWidth, window.innerHeight); };
    window.addEventListener('resize', rz);
    return () => {
      cancelAnimationFrame(raf); window.removeEventListener('resize', rz);
      ren.domElement.removeEventListener('mousemove', onMov); ren.domElement.removeEventListener('click', onClk);
      if (canvasRef.current && ren.domElement.parentNode === canvasRef.current) canvasRef.current.removeChild(ren.domElement);
      ren.dispose();
    };
  }, []);

  return (
    <>
      <div ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 5 }} />
      {/* Warp overlay — React div, no document.body */}
      <div ref={warpRef} style={{ position: 'fixed', inset: 0, zIndex: 96, pointerEvents: 'none', opacity: 0 }} />
      {/* Labels — React JSX divs with refs, styles updated imperatively in rAF */}
      {WDEF.map((def, i) => (
        <div key={def.id} ref={el => labelRefs.current[i] = el}
          style={{ position: 'fixed', left: 0, top: 0, zIndex: 20, transform: 'translate(-50%,-100%)', opacity: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 12, transition: 'opacity .35s ease' }}
          onClick={e => e.stopPropagation()}>
          <div data-pill="1" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '11px 24px 11px 17px', borderRadius: 999, border: `1px solid ${def.css}80`, background: 'rgba(2,4,14,.92)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', color: '#ffffff', fontFamily: 'Orbitron,monospace', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textShadow: `0 0 10px #fff,0 0 22px ${def.css},0 0 50px ${def.css}aa`, boxShadow: `0 0 32px ${def.css}40,0 0 60px ${def.css}18,inset 0 0 20px ${def.css}12`, whiteSpace: 'nowrap', cursor: 'pointer', transition: 'all .35s cubic-bezier(.34,1.4,.64,1)' }}>
            <div className="bl" style={{ width: 7, height: 7, borderRadius: '50%', flexShrink: 0, background: def.css, boxShadow: `0 0 10px ${def.css}`, animationDelay: `${i * .38}s` }} />
            <def.icon size={14} color={def.css} style={{ flexShrink: 0 }} />
            <span>{def.label}</span>
          </div>
          <div style={{ width: 1, height: 14, background: `linear-gradient(${def.css}70,${def.css}00)` }} />
        </div>
      ))}
    </>
  );
};

/* ─── WORMHOLE TRANSITION ──────────────────────────────────── */
const WormholeTransition = ({ onComplete }) => {
  const ref = useRef(null);

  useEffect(() => {
    const W = window.innerWidth, H = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, W / H, 0.01, 800);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    ref.current.appendChild(renderer.domElement);

    camera.position.set(0, 0, 0);
    camera.lookAt(0, 0, -1);

    /* ── Tunnel rings ── */
    const RING_COUNT = 48;
    const rings = [];
    const COLORS = [0x22d3ee, 0xa855f7, 0xec4899, 0x4f8ef7, 0xffffff];

    for (let i = 0; i < RING_COUNT; i++) {
      const z = -4 - i * 3.2;
      const radius = 2.2 + Math.sin(i * 0.4) * 0.5;
      const col = COLORS[i % COLORS.length];
      const mat = new THREE.MeshBasicMaterial({
        color: col, transparent: true,
        opacity: 0.55 + (i % 3) * 0.12,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.04 + Math.random() * 0.05, 6, 80),
        mat
      );
      mesh.position.z = z;
      mesh.rotation.z = i * 0.28;
      scene.add(mesh);
      rings.push({ mesh, mat, baseZ: z, baseRot: i * 0.28, radius, col });
    }

    /* ── Spiral tunnel surface (thin cylinder) ── */
    const tunnelMat = new THREE.MeshBasicMaterial({
      color: 0x0a0a2a, transparent: true, opacity: 0.96, side: THREE.BackSide,
    });
    const tunnel = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 160, 32, 1, true), tunnelMat);
    tunnel.rotation.x = Math.PI / 2;
    tunnel.position.z = -80;
    scene.add(tunnel);

    /* ── Streak particles (lines flying past) ── */
    const STREAK_COUNT = 320;
    const streakGeo = new THREE.BufferGeometry();
    const sPos = new Float32Array(STREAK_COUNT * 6); // 2 points per line
    const sCol = new Float32Array(STREAK_COUNT * 6);
    for (let i = 0; i < STREAK_COUNT; i++) {
      const ang = Math.random() * Math.PI * 2;
      const r = 0.3 + Math.random() * 1.8;
      const x = Math.cos(ang) * r;
      const y = Math.sin(ang) * r;
      const z = -Math.random() * 150;
      const len = 0.8 + Math.random() * 2.5;
      sPos[i * 6] = x; sPos[i * 6 + 1] = y; sPos[i * 6 + 2] = z;
      sPos[i * 6 + 3] = x; sPos[i * 6 + 4] = y; sPos[i * 6 + 5] = z - len;
      const c = COLORS[i % COLORS.length];
      const r3 = ((c >> 16) & 255) / 255;
      const g3 = ((c >> 8) & 255) / 255;
      const b3 = (c & 255) / 255;
      sCol[i * 6] = r3; sCol[i * 6 + 1] = g3; sCol[i * 6 + 2] = b3;
      sCol[i * 6 + 3] = r3; sCol[i * 6 + 4] = g3; sCol[i * 6 + 5] = b3;
    }
    streakGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    streakGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
    const streaks = new THREE.LineSegments(
      streakGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.7 })
    );
    scene.add(streaks);

    /* ── Exit burst particles (explode outward at tunnel end, stay dark) ── */
    const BURST_COUNT = 600;
    const burstGeo = new THREE.BufferGeometry();
    const bPos = new Float32Array(BURST_COUNT * 3);
    const bVel = new Float32Array(BURST_COUNT * 3); // velocity per particle
    const bCol = new Float32Array(BURST_COUNT * 3);
    const EXIT_COLORS = [0x22d3ee, 0xa855f7, 0xec4899, 0x4f46e5, 0x06b6d4];
    for (let i = 0; i < BURST_COUNT; i++) {
      // Start at origin
      bPos[i * 3] = 0; bPos[i * 3 + 1] = 0; bPos[i * 3 + 2] = -0.5;
      // Random radial velocity outward + slight forward spread
      const ang = Math.random() * Math.PI * 2;
      const elev = (Math.random() - 0.5) * Math.PI;
      const spd = 0.04 + Math.random() * 0.14;
      bVel[i * 3] = Math.cos(ang) * Math.cos(elev) * spd;
      bVel[i * 3 + 1] = Math.sin(elev) * spd * 0.7;
      bVel[i * 3 + 2] = -(0.02 + Math.random() * 0.08); // mostly forward
      const c = EXIT_COLORS[i % EXIT_COLORS.length];
      bCol[i * 3] = ((c >> 16) & 255) / 255;
      bCol[i * 3 + 1] = ((c >> 8) & 255) / 255;
      bCol[i * 3 + 2] = (c & 255) / 255;
    }
    burstGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
    burstGeo.setAttribute('color', new THREE.BufferAttribute(bCol, 3));
    const burstMat = new THREE.PointsMaterial({
      size: 0.06, vertexColors: true,
      transparent: true, opacity: 0,
    });
    const burst = new THREE.Points(burstGeo, burstMat);
    scene.add(burst);
    let burstActive = false;

    /* ── Animation ── */
    const T0 = Date.now();
    const TOTAL = 3200; // ms total
    const RUSH_AT = 0.55; // when camera starts accelerating hard
    const EXIT_AT = 0.82; // when tunnel ends and particles burst
    let raf;
    let done = false;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = Date.now();
      const t = Math.min((now - T0) / TOTAL, 1);

      /* Speed curve: slow → fast → WARP */
      const speedMult = t < RUSH_AT
        ? 1 + t * 3.5
        : 1 + RUSH_AT * 3.5 + Math.pow((t - RUSH_AT) / (1 - RUSH_AT), 3) * 55;

      /* Camera screams forward */
      camera.position.z = -t * t * speedMult * 24;

      /* FOV widens as we accelerate */
      camera.fov = 90 + Math.min(t * 40, 38);
      camera.updateProjectionMatrix();

      /* Ring rotation + chromatic spiral */
      rings.forEach((r, i) => {
        r.mesh.rotation.z = r.baseRot + t * (i % 2 === 0 ? 1.4 : -1.8) * speedMult * 0.04;
        r.mesh.rotation.x = Math.sin(t * 3 + i * 0.15) * 0.08;
        r.mat.opacity = Math.min(0.9, (0.4 + Math.sin(now * 0.006 + i * 0.6) * 0.3));
        const phase = (t * 3 + i * 0.2) % 1;
        if (phase < 0.33) r.mat.color.set(0x22d3ee);
        else if (phase < 0.66) r.mat.color.set(0xa855f7);
        else r.mat.color.set(0xec4899);
        /* Fade rings out as we exit */
        if (t > EXIT_AT) {
          const ep = (t - EXIT_AT) / (1 - EXIT_AT);
          r.mat.opacity *= Math.max(0, 1 - ep * 2.5);
        }
      });

      /* Streaks speed up then fade */
      const sp = streakGeo.attributes.position.array;
      for (let i = 0; i < STREAK_COUNT; i++) {
        sp[i * 6 + 2] += speedMult * 0.12;
        sp[i * 6 + 5] += speedMult * 0.12;
        if (sp[i * 6 + 2] > 2) {
          const ang = Math.random() * Math.PI * 2;
          const rm = 0.3 + Math.random() * 1.8;
          const xn = Math.cos(ang) * rm;
          const yn = Math.sin(ang) * rm;
          const zn = -140 - Math.random() * 20;
          const len = 0.8 + Math.random() * 2.5;
          sp[i * 6] = xn; sp[i * 6 + 1] = yn; sp[i * 6 + 2] = zn;
          sp[i * 6 + 3] = xn; sp[i * 6 + 4] = yn; sp[i * 6 + 5] = zn - len;
        }
      }
      streakGeo.attributes.position.needsUpdate = true;
      if (t > EXIT_AT) {
        const ep = (t - EXIT_AT) / (1 - EXIT_AT);
        streaks.material.opacity = Math.max(0, 0.7 - ep * 2);
      }

      /* Exit: black space — burst particles explode outward */
      if (t >= EXIT_AT) {
        if (!burstActive) burstActive = true;
        const ep = (t - EXIT_AT) / (1 - EXIT_AT);

        // Fade in then fade out
        burstMat.opacity = ep < 0.4
          ? ep / 0.4
          : Math.max(0, 1 - (ep - 0.4) / 0.6);
        burstMat.size = 0.06 + ep * 0.18; // particles grow as they disperse

        // Move each particle outward
        const bp = burstGeo.attributes.position.array;
        for (let i = 0; i < BURST_COUNT; i++) {
          bp[i * 3] += bVel[i * 3] * speedMult * 0.55;
          bp[i * 3 + 1] += bVel[i * 3 + 1] * speedMult * 0.55;
          bp[i * 3 + 2] += bVel[i * 3 + 2] * speedMult * 0.55;
        }
        burstGeo.attributes.position.needsUpdate = true;

        // Background stays pure black
        renderer.setClearColor(0x000000, 1);
      }

      renderer.render(scene, camera);

      if (t >= 1 && !done) {
        done = true;
        setTimeout(() => onComplete(), 80);
      }
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      if (ref.current && renderer.domElement.parentNode === ref.current)
        ref.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={ref} style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: '#000',
    }} />
  );
};

/* ─── RAINBOW ARROW ────────────────────────────────────────── */
const RainbowArrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    style={{ animation: 'rainbowShift 1.8s linear infinite, arrowBounce 1.2s ease-in-out infinite', flexShrink: 0 }}>
    <path d="M19 12H5M5 12L12 19M5 12L12 5"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── GALAXY CURSOR ────────────────────────────────────────── */
const GalaxyCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef(null);
  const pingRef = useRef(null);
  const posRef = useRef({ x: -200, y: -200 });
  const hovRef = useRef(false);
  const clickRef = useRef(false);

  useEffect(() => {
    let raf;
    let cx = -200, cy = -200, rx = -200, ry = -200;

    const onMove = e => {
      cx = e.clientX; cy = e.clientY;
      posRef.current = { x: cx, y: cy };
      // detect if hovering a clickable element
      const el = document.elementFromPoint(cx, cy);
      hovRef.current = el && (el.closest('button,a,[data-pill]') !== null || getComputedStyle(el).cursor === 'pointer');
    };

    const onClick = () => {
      clickRef.current = true;
      // trigger ping
      if (pingRef.current) {
        pingRef.current.style.left = posRef.current.x + 'px';
        pingRef.current.style.top = posRef.current.y + 'px';
        pingRef.current.style.animation = 'none';
        void pingRef.current.offsetWidth; // reflow
        pingRef.current.style.animation = 'cursorPing .6s ease-out forwards';
      }
      setTimeout(() => clickRef.current = false, 300);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    const loop = () => {
      raf = requestAnimationFrame(loop);
      // lag the ring behind for trailing effect
      rx += (cx - rx) * 0.13;
      ry += (cy - ry) * 0.13;

      const hov = hovRef.current;
      const dotScale = hov ? 0.4 : 1;
      const ringScale = hov ? 1.7 : 1;

      if (dotRef.current) {
        dotRef.current.style.left = cx + 'px';
        dotRef.current.style.top = cy + 'px';
        dotRef.current.style.transform = `translate(-50%,-50%) scale(${dotScale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
        ringRef.current.style.transform = `translate(-50%,-50%) scale(${ringScale})`;
        ringRef.current.style.borderColor = hov ? '#ec4899' : '#22d3ee';
        ringRef.current.style.boxShadow = hov
          ? '0 0 16px #ec489988, inset 0 0 8px #ec489944'
          : '0 0 12px #22d3ee66, inset 0 0 6px #22d3ee22';
      }
      if (trailRef.current) {
        trailRef.current.style.left = rx + 'px';
        trailRef.current.style.top = ry + 'px';
        trailRef.current.style.opacity = hov ? '0' : '1';
      }
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
    };
  }, []);

  const base = { position: 'fixed', pointerEvents: 'none', zIndex: 9999 };

  return (
    <>
      {/* Core dot */}
      <div ref={dotRef} style={{
        ...base, width: 6, height: 6, borderRadius: '50%',
        background: '#fff', boxShadow: '0 0 8px #22d3ee, 0 0 18px #22d3ee88',
        transition: 'transform .12s ease, background .2s',
        left: -200, top: -200, transform: 'translate(-50%,-50%)'
      }} />

      {/* Orbiting ring — rotates via CSS animation */}
      <div ref={ringRef} style={{
        ...base, width: 36, height: 36, borderRadius: '50%',
        border: '1.5px solid #22d3ee', boxShadow: '0 0 12px #22d3ee66',
        transition: 'transform .18s ease, border-color .2s, box-shadow .2s',
        left: -200, top: -200,
        // Small orbiting dot inside ring
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Rotating arm with satellite dot */}
        <div style={{
          position: 'absolute', width: '100%', height: '100%', borderRadius: '50%',
          animation: 'cursorOrbit 1.8s linear infinite',
        }}>
          <div style={{
            position: 'absolute', top: -3, left: '50%',
            width: 5, height: 5, borderRadius: '50%',
            background: '#a855f7', boxShadow: '0 0 8px #a855f7',
            transform: 'translateX(-50%)',
          }} />
        </div>
        {/* Counter-rotating arm */}
        <div style={{
          position: 'absolute', width: '70%', height: '70%', borderRadius: '50%',
          animation: 'cursorOrbit 2.6s linear infinite reverse',
        }}>
          <div style={{
            position: 'absolute', top: -2, left: '50%',
            width: 3, height: 3, borderRadius: '50%',
            background: '#ec4899', boxShadow: '0 0 6px #ec4899',
            transform: 'translateX(-50%)',
          }} />
        </div>
      </div>

      {/* Cross-hair lines */}
      <div ref={trailRef} style={{ ...base, left: -200, top: -200, transition: 'opacity .2s' }}>
        <div style={{ position: 'absolute', width: 14, height: 1, background: 'rgba(34,211,238,.4)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'absolute', width: 1, height: 14, background: 'rgba(34,211,238,.4)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      </div>

      {/* Click ping ripple */}
      <div ref={pingRef} style={{
        ...base,
        width: 40, height: 40, borderRadius: '50%',
        border: '2px solid #22d3ee',
        left: -200, top: -200,
        opacity: 0,
      }} />
    </>
  );
};

/* ─── MINI COMPONENTS ─────────────────────────────────────── */
const Stars = ({ n = 5 }) => (<span style={{ display: 'flex', gap: 2 }}>{[...Array(5)].map((_, i) => (<svg key={i} width={13} height={13} viewBox="0 0 24 24" fill={i < n ? '#f59e0b' : 'none'} stroke={i < n ? '#f59e0b' : 'rgba(255,255,255,.2)'} strokeWidth={2}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>))}</span>);
const Bdg = ({ color, ch }) => (<span className="tag" style={{ background: `${color}18`, color, border: `1px solid ${color}40` }}>{ch}</span>);
const Av = ({ src, sz = 40, on }) => (<div style={{ position: 'relative', width: sz, height: sz, flexShrink: 0 }}><img src={src} alt="" className="ar" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />{on && <div style={{ position: 'absolute', bottom: 1, right: 1, width: 10, height: 10, borderRadius: '50%', background: '#10b981', border: '2px solid #030712' }} />}</div>);

/* ─── SECTIONS DATA ───────────────────────────────────────── */
const SECS = [
  { id: 'market', label: 'VIBE MARKET', icon: ShoppingCart, em: '🛒', color: '#ec4899', desc: 'Buy & sell vibe-coded projects' },
  { id: 'community', label: 'VIBE COMMUNITY', icon: Users, em: '👥', color: '#10b981', desc: 'Social feed & creator network' },
  { id: 'academy', label: 'VIBE ACADEMY', icon: GraduationCap, em: '🎓', color: '#a855f7', desc: 'Learn, level up, master craft' },
  { id: 'connect', label: 'VIBE CONNECT', icon: LayoutGrid, em: '⚡', color: '#22d3ee', desc: 'Real-time collaboration space' },
];
/* ─── WORLD BANNER ─────────────────────────────────────────── */
const WorldBanner = ({ title, label, color1, color2, height = 150 }) => {
  const pts = React.useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    x: 5 + Math.random() * 90, y: 5 + Math.random() * 90,
    sz: 2 + Math.random() * 5, dur: 3 + Math.random() * 4,
    del: Math.random() * 3, op: .2 + Math.random() * .55,
    anim: ['floatA', 'floatB', 'floatC'][i % 3],
    shape: Math.random() > .6 ? 'square' : 'circle',
  })), []);
  const shapes = [
    { x: 8, y: 15, w: 90, h: 90, rot: 22, type: 'hex' },
    { x: 75, y: 55, w: 60, h: 60, rot: -14, type: 'diamond' },
    { x: 55, y: 5, w: 40, h: 40, rot: 35, type: 'ring' },
    { x: 20, y: 60, w: 50, h: 50, rot: 0, type: 'ring' },
  ];
  return (
    <div style={{
      position: 'relative', height, overflow: 'hidden', borderRadius: '0 0 24px 24px', marginBottom: 22,
      background: `linear-gradient(135deg,${color1}18 0%,${color2}10 50%,#030712 100%)`
    }}>
      {/* Animated geometric shapes */}
      {shapes.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${s.x}%`, top: `${s.y}%`,
          width: s.w, height: s.h, transform: `rotate(${s.rot}deg)`,
          opacity: .06, animation: `floatA ${8 + i * 2}s ${i * 1.2}s ease-in-out infinite`,
          border: `1.5px solid ${i % 2 === 0 ? color1 : color2}`,
          borderRadius: s.type === 'ring' ? '50%' : s.type === 'hex' ? '12px' : '4px',
          background: `linear-gradient(135deg,${i % 2 === 0 ? color1 : color2}08,transparent)`,
        }} />
      ))}
      {/* Floating particles */}
      {pts.map((p, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
          width: p.sz, height: p.sz,
          borderRadius: p.shape === 'circle' ? '50%' : '2px',
          background: i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : '#ffffff',
          opacity: p.op,
          animation: `${p.anim} ${p.dur}s ${p.del}s ease-in-out infinite`,
          boxShadow: `0 0 ${p.sz * 2}px ${i % 3 === 0 ? color1 : color2}`,
        }} />
      ))}
      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${color1}08 1px,transparent 1px),linear-gradient(90deg,${color1}08 1px,transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      {/* Content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="M" style={{ color: color1, fontSize: 9, letterSpacing: '.35em', marginBottom: 6, opacity: .8 }}>{label}</div>
        <h2 className="O" style={{
          fontSize: 'clamp(22px,4.5vw,46px)', fontWeight: 900,
          background: `linear-gradient(135deg,${color1},${color2})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>{title}</h2>
      </div>
    </div>
  );
};

/* ─── MARKET DATA ───────────────────────────────────────────── */
const MKT = [
  { id: 1, title: 'NeuroFeed AI Dashboard', cr: '@flux.dev', crFull: 'Alex Flux', price: '$149', rt: 5, views: 9200, lk: 284, saves: 130, tags: ['React', 'AI', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'Real-time AI analytics dashboard with live feeds, anomaly detection, and customizable widget grid.', idea: 'Designed for fast-growing startups to monitor AI model performance in real time.', available: true, createdFor: 'Data Analytics Platforms', date: 'Feb 2026' },
  { id: 2, title: 'VoidCommerce Store Kit', cr: '@voidcraft', crFull: 'Void Studio', price: '$89', rt: 4, views: 6800, lk: 156, saves: 88, tags: ['Next.js', 'E-commerce'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'Top Seller', desc: 'Complete e-commerce starter with cart, checkout, Stripe integration and immersive dark-mode UI.', idea: 'Built to help indie hackers ship beautiful stores in hours, not weeks.', available: false, createdFor: 'Independent Creators', date: 'Jan 2026' },
  { id: 3, title: 'Orbital Web3 Portfolio', cr: '@cryptoui', crFull: 'Crypto UX', price: '$65', rt: 5, views: 12100, lk: 501, saves: 220, tags: ['Three.js', 'Web3', 'NFT'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'Immersive 3D portfolio with orbit controls, NFT gallery, and particle wallet animations.', idea: 'Every Web3 creator deserves a portfolio as futuristic as their work.', available: true, createdFor: 'NFT Artists & Collectors', date: 'Feb 2026' },
  { id: 4, title: 'PulseBot Chat Interface', cr: '@devwave', crFull: 'Dev Wave', price: '$120', rt: 4, views: 4100, lk: 198, saves: 76, tags: ['AI', 'Chat', 'GPT'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: false, badge: null, desc: 'GPT-powered chat UI with streaming responses, conversation history, and custom persona support.', idea: 'AI assistants should feel human. This template makes that happen.', available: true, createdFor: 'SaaS Products & AI Apps', date: 'Dec 2025' },
  { id: 5, title: 'Nebula Analytics Suite', cr: '@quantumux', crFull: 'Quantum UX', price: '$210', rt: 5, views: 7800, lk: 412, saves: 165, tags: ['D3.js', 'Analytics'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'Enterprise-grade analytics with D3 visualizations, cohort analysis, and export pipelines.', idea: 'Inspired by Amplitude and Mixpanel but infinitely more beautiful.', available: false, createdFor: 'Enterprise SaaS', date: 'Jan 2026' },
  { id: 6, title: 'SynthVoice Podcast App', cr: '@audiodna', crFull: 'Audio DNA', price: '$75', rt: 4, views: 3200, lk: 167, saves: 55, tags: ['Audio', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: false, badge: null, desc: 'Podcast streaming app with waveform visualizer, chapter markers, and offline playback.', idea: 'Podcasting UI reimagined for the next generation of listeners.', available: true, createdFor: 'Media & Entertainment', date: 'Nov 2025' },
  { id: 7, title: 'CryptoTrader Terminal', cr: '@flux.dev', crFull: 'Alex Flux', price: '$185', rt: 5, views: 5600, lk: 288, saves: 142, tags: ['Finance', 'Chart'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Professional crypto trading terminal with real-time charts, order book, and portfolio tracker.', idea: 'Traders deserve tools as powerful as institutional platforms but for everyone.', available: true, createdFor: 'Crypto Traders', date: 'Feb 2026' },
  { id: 8, title: 'Luminary Design System', cr: '@voidcraft', crFull: 'Void Studio', price: '$95', rt: 4, views: 8900, lk: 334, saves: 188, tags: ['Design System', 'Figma'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: true, badge: null, desc: '300+ component design system with Figma source files and React implementation.', idea: 'Ship consistent, beautiful products faster with a rock-solid foundation.', available: false, createdFor: 'Product Teams', date: 'Jan 2026' },
  // Ghost projects
  { id: 9, title: 'Phantom Auth Kit', cr: '@ghostdev', crFull: 'Ghost Dev', price: '$59', rt: 5, views: 2100, lk: 88, saves: 34, tags: ['Auth', 'Next.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Complete auth system with OAuth2, magic links, 2FA, and role-based access control.', idea: 'Auth is the hardest part. We made it the easiest.', available: true, createdFor: 'SaaS Founders', date: 'Feb 2026' },
  { id: 10, title: 'Spectral UI Component Lib', cr: '@spectra.io', crFull: 'Spectra Studio', price: '$120', rt: 4, views: 4300, lk: 201, saves: 99, tags: ['React', 'Components', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: false, badge: 'New', desc: '50+ fully accessible React components with dark mode, TypeScript and Storybook docs.', idea: 'Components that look great and work great, every time.', available: true, createdFor: 'Engineering Teams', date: 'Feb 2026' },
  { id: 11, title: 'Mirage Email Builder', cr: '@miragelab', crFull: 'Mirage Lab', price: '$79', rt: 5, views: 3700, lk: 145, saves: 67, tags: ['Email', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Drag-and-drop email template builder with React Email integration and 30+ templates.', idea: 'Beautiful emails should be as easy to build as landing pages.', available: false, createdFor: 'Marketing Teams', date: 'Jan 2026' },
  { id: 12, title: 'Void Map SDK', cr: '@voidcraft', crFull: 'Void Studio', price: '$149', rt: 5, views: 6100, lk: 278, saves: 120, tags: ['Maps', 'SDK', 'JavaScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'Lightweight MapLibre-based SDK with custom styling, geofencing, and real-time tracking.', idea: 'Maps that feel native to your dark-mode product.', available: false, createdFor: 'Location-aware Apps', date: 'Jan 2026' },
  { id: 13, title: 'Aura Landing Kit', cr: '@aurabuilder', crFull: 'Aura Builder', price: '$45', rt: 4, views: 5500, lk: 189, saves: 77, tags: ['HTML', 'CSS', 'Landing'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: false, badge: null, desc: '12 premium landing page sections with animations, all in vanilla HTML/CSS/JS. No framework needed.', idea: 'Great landing pages should not require a PhD in React.', available: true, createdFor: 'Indie Hackers', date: 'Dec 2025' },
  { id: 14, title: 'RiftDB Admin Panel', cr: '@riftcode', crFull: 'Rift Code', price: '$199', rt: 5, views: 3900, lk: 321, saves: 155, tags: ['React', 'Admin', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'Full-featured admin panel with CRUD tables, charts, user management, and role permissions.', idea: 'Every SaaS needs a great admin panel. Now you have one.', available: true, createdFor: 'SaaS Products', date: 'Feb 2026' },
  { id: 15, title: 'Cosmos Onboarding Flow', cr: '@cosmosui', crFull: 'Cosmos UI', price: '$69', rt: 4, views: 2800, lk: 112, saves: 48, tags: ['React', 'Onboarding', 'UX'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1569098644663-b27c0f2f3b29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: false, badge: null, desc: 'Multi-step onboarding with progress tracking, skip logic, and completion animations.', idea: 'First impressions are everything. Make yours unforgettable.', available: true, createdFor: 'SaaS & Apps', date: 'Nov 2025' },
  { id: 16, title: 'NightOwl Blog Theme', cr: '@darkstudio', crFull: 'Dark Studio', price: '$55', rt: 5, views: 4200, lk: 176, saves: 82, tags: ['Next.js', 'Blog', 'MDX'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: true, badge: null, desc: 'MDX-powered blog with syntax highlighting, newsletter integration, and dark/light toggle.', idea: 'Technical blogs deserve technical beauty.', available: false, createdFor: 'Developer Blogs', date: 'Jan 2026' },
  // Ghost Projects (100+)
  { id: 17, title: 'Prism Color Picker', cr: '@prismdev', crFull: 'Prism Dev', price: '$39', rt: 4, views: 1800, lk: 67, saves: 29, tags: ['React', 'Color', 'Tools'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for SaaS Tools who need the best tools.', available: true, createdFor: 'SaaS Tools', date: 'Feb 2026' },
  { id: 18, title: 'Sentinel Error Monitor', cr: '@sentinelops', crFull: 'Sentinel Ops', price: '$165', rt: 5, views: 3400, lk: 189, saves: 91, tags: ['React', 'Monitoring', 'API'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for DevOps Teams who need the best tools.', available: true, createdFor: 'DevOps Teams', date: 'Feb 2026' },
  { id: 19, title: 'Forge CLI Tool Kit', cr: '@forgecli', crFull: 'Forge CLI', price: '$49', rt: 4, views: 2200, lk: 98, saves: 44, tags: ['CLI', 'Node.js', 'Tools'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: false, badge: null, desc: 'Developer CLI tool with scaffolding, automation, and productivity features.', idea: 'Built for Developers who need the best tools.', available: false, createdFor: 'Developers', date: 'Jan 2026' },
  { id: 20, title: 'Dusk Admin Template', cr: '@duskstudio', crFull: 'Dusk Studio', price: '$79', rt: 5, views: 5600, lk: 243, saves: 118, tags: ['React', 'Admin', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for SaaS Products who need the best tools.', available: true, createdFor: 'SaaS Products', date: 'Feb 2026' },
  { id: 21, title: 'Echo Notification System', cr: '@echodev', crFull: 'Echo Dev', price: '$55', rt: 4, views: 2900, lk: 134, saves: 62, tags: ['React', 'Notifications', 'WebSocket'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for App Developers who need the best tools.', available: true, createdFor: 'App Developers', date: 'Jan 2026' },
  { id: 22, title: 'Flux Form Builder', cr: '@fluxforms', crFull: 'Flux Forms', price: '$89', rt: 5, views: 4100, lk: 201, saves: 95, tags: ['React', 'Forms', 'Validation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Product Teams who need the best tools.', available: true, createdFor: 'Product Teams', date: 'Feb 2026' },
  { id: 23, title: 'Terra CSS Framework', cr: '@terracss', crFull: 'Terra CSS', price: '$35', rt: 4, views: 6700, lk: 312, saves: 140, tags: ['CSS', 'Framework', 'Utility'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for All Developers who need the best tools.', available: false, createdFor: 'All Developers', date: 'Dec 2025' },
  { id: 24, title: 'Nyx Dark Dashboard', cr: '@nyxui', crFull: 'Nyx UI', price: '$125', rt: 5, views: 3800, lk: 178, saves: 84, tags: ['React', 'Dark', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Startups who need the best tools.', available: true, createdFor: 'Startups', date: 'Jan 2026' },
  { id: 25, title: 'Quantum State Manager', cr: '@qstate', crFull: 'Q State', price: '$99', rt: 4, views: 2400, lk: 112, saves: 51, tags: ['React', 'State', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Engineering Teams who need the best tools.', available: false, createdFor: 'Engineering Teams', date: 'Feb 2026' },
  { id: 26, title: 'Helix API Studio', cr: '@helixapi', crFull: 'Helix API', price: '$145', rt: 5, views: 4500, lk: 234, saves: 109, tags: ['API', 'TypeScript', 'SDK'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Robust API integration kit with error handling, retries, and TypeScript types.', idea: 'Built for Backend Devs who need the best tools.', available: true, createdFor: 'Backend Devs', date: 'Feb 2026' },
  { id: 27, title: 'Mist UI Library', cr: '@mistui', crFull: 'Mist UI', price: '$79', rt: 4, views: 3200, lk: 156, saves: 73, tags: ['React', 'Components', 'CSS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Frontend Devs who need the best tools.', available: true, createdFor: 'Frontend Devs', date: 'Jan 2026' },
  { id: 28, title: 'Pulse Webhook Hub', cr: '@pulsedev', crFull: 'Pulse Dev', price: '$69', rt: 5, views: 2600, lk: 121, saves: 57, tags: ['Webhooks', 'Node.js', 'API'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Integration Devs who need the best tools.', available: false, createdFor: 'Integration Devs', date: 'Feb 2026' },
  { id: 29, title: 'Solar SaaS Boilerplate', cr: '@solarapp', crFull: 'Solar App', price: '$199', rt: 5, views: 7200, lk: 389, saves: 178, tags: ['Next.js', 'SaaS', 'Auth'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for SaaS Founders who need the best tools.', available: true, createdFor: 'SaaS Founders', date: 'Feb 2026' },
  { id: 30, title: 'Lunar Charts Library', cr: '@lunarchart', crFull: 'Lunar Chart', price: '$89', rt: 4, views: 3900, lk: 183, saves: 86, tags: ['React', 'Charts', 'D3.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Data Teams who need the best tools.', available: true, createdFor: 'Data Teams', date: 'Jan 2026' },
  { id: 31, title: 'Arc Drag & Drop', cr: '@arclib', crFull: 'Arc Lib', price: '$59', rt: 4, views: 2100, lk: 99, saves: 46, tags: ['React', 'DnD', 'Components'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for App Devs who need the best tools.', available: false, createdFor: 'App Devs', date: 'Dec 2025' },
  { id: 32, title: 'Vertex 3D Viewer', cr: '@vertexlab', crFull: 'Vertex Lab', price: '$115', rt: 5, views: 4800, lk: 256, saves: 120, tags: ['Three.js', 'WebGL', '3D'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Creative Devs who need the best tools.', available: true, createdFor: 'Creative Devs', date: 'Feb 2026' },
  { id: 33, title: 'Storm State Machine', cr: '@stormdev', crFull: 'Storm Dev', price: '$75', rt: 4, views: 2700, lk: 127, saves: 59, tags: ['XState', 'TypeScript', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for App Architects who need the best tools.', available: false, createdFor: 'App Architects', date: 'Jan 2026' },
  { id: 34, title: 'Opal File Manager', cr: '@opaldev', crFull: 'Opal Dev', price: '$85', rt: 5, views: 3300, lk: 161, saves: 75, tags: ['React', 'Files', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for SaaS Products who need the best tools.', available: true, createdFor: 'SaaS Products', date: 'Feb 2026' },
  { id: 35, title: 'Cobalt CI/CD Tracker', cr: '@cobaltops', crFull: 'Cobalt Ops', price: '$129', rt: 4, views: 2900, lk: 138, saves: 64, tags: ['DevOps', 'React', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Dev Teams who need the best tools.', available: true, createdFor: 'Dev Teams', date: 'Jan 2026' },
  { id: 36, title: 'Iris Icon Library', cr: '@irisdesign', crFull: 'Iris Design', price: '$45', rt: 5, views: 5400, lk: 267, saves: 125, tags: ['Icons', 'SVG', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Designers who need the best tools.', available: true, createdFor: 'Designers', date: 'Feb 2026' },
  { id: 37, title: 'Cascade Animation Kit', cr: '@cascadeui', crFull: 'Cascade UI', price: '$95', rt: 4, views: 3100, lk: 149, saves: 69, tags: ['React', 'Animation', 'Framer'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Frontend Devs who need the best tools.', available: true, createdFor: 'Frontend Devs', date: 'Feb 2026' },
  { id: 38, title: 'Drift Realtime Board', cr: '@driftapp', crFull: 'Drift App', price: '$149', rt: 5, views: 4700, lk: 231, saves: 108, tags: ['React', 'WebSocket', 'Realtime'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Collaboration Tools who need the best tools.', available: false, createdFor: 'Collaboration Tools', date: 'Jan 2026' },
  { id: 39, title: 'Nimbus Cloud Dashboard', cr: '@nimbusui', crFull: 'Nimbus UI', price: '$109', rt: 4, views: 3600, lk: 172, saves: 80, tags: ['React', 'Cloud', 'Infrastructure'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for DevOps Teams who need the best tools.', available: true, createdFor: 'DevOps Teams', date: 'Feb 2026' },
  { id: 40, title: 'Ember CMS Builder', cr: '@emberdev', crFull: 'Ember Dev', price: '$159', rt: 5, views: 5100, lk: 248, saves: 116, tags: ['Next.js', 'CMS', 'MDX'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Content Teams who need the best tools.', available: true, createdFor: 'Content Teams', date: 'Feb 2026' },
  { id: 41, title: 'Flare Push Notifications', cr: '@flaredev', crFull: 'Flare Dev', price: '$65', rt: 4, views: 2500, lk: 118, saves: 55, tags: ['React', 'PWA', 'Notifications'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Mobile Devs who need the best tools.', available: false, createdFor: 'Mobile Devs', date: 'Dec 2025' },
  { id: 42, title: 'Praxis UI Testing Kit', cr: '@praxisdev', crFull: 'Praxis Dev', price: '$85', rt: 5, views: 2900, lk: 139, saves: 65, tags: ['Testing', 'Playwright', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for QA Engineers who need the best tools.', available: true, createdFor: 'QA Engineers', date: 'Jan 2026' },
  { id: 43, title: 'Vault Secrets Manager', cr: '@vaultui', crFull: 'Vault UI', price: '$139', rt: 4, views: 3400, lk: 163, saves: 76, tags: ['Security', 'Node.js', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Security Teams who need the best tools.', available: true, createdFor: 'Security Teams', date: 'Feb 2026' },
  { id: 44, title: 'Mosaic Grid Layout', cr: '@mosaicui', crFull: 'Mosaic UI', price: '$55', rt: 4, views: 4100, lk: 196, saves: 91, tags: ['CSS', 'Grid', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for UI Designers who need the best tools.', available: false, createdFor: 'UI Designers', date: 'Feb 2026' },
  { id: 45, title: 'Spark CLI Generator', cr: '@sparktools', crFull: 'Spark Tools', price: '$39', rt: 5, views: 2200, lk: 104, saves: 48, tags: ['CLI', 'Node.js', 'Scaffolding'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Developer CLI tool with scaffolding, automation, and productivity features.', idea: 'Built for Developers who need the best tools.', available: true, createdFor: 'Developers', date: 'Jan 2026' },
  { id: 46, title: 'Ridge Dark Theme Kit', cr: '@ridgedesign', crFull: 'Ridge Design', price: '$79', rt: 5, views: 3700, lk: 178, saves: 83, tags: ['VSCode', 'Themes', 'Dark'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developers who need the best tools.', available: true, createdFor: 'Developers', date: 'Feb 2026' },
  { id: 47, title: 'Sable Markdown Editor', cr: '@sabledev', crFull: 'Sable Dev', price: '$69', rt: 4, views: 3000, lk: 143, saves: 67, tags: ['React', 'Markdown', 'Editor'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Content Teams who need the best tools.', available: false, createdFor: 'Content Teams', date: 'Jan 2026' },
  { id: 48, title: 'Apex Performance Monitor', cr: '@apexdev', crFull: 'Apex Dev', price: '$119', rt: 5, views: 4200, lk: 207, saves: 97, tags: ['React', 'Performance', 'Analytics'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Engineering Teams who need the best tools.', available: true, createdFor: 'Engineering Teams', date: 'Feb 2026' },
  { id: 49, title: 'Gale Component Scanner', cr: '@galetools', crFull: 'Gale Tools', price: '$59', rt: 4, views: 2300, lk: 110, saves: 51, tags: ['CLI', 'React', 'Analysis'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: false, badge: null, desc: 'Developer CLI tool with scaffolding, automation, and productivity features.', idea: 'Built for Dev Teams who need the best tools.', available: false, createdFor: 'Dev Teams', date: 'Dec 2025' },
  { id: 50, title: 'Aether AR Components', cr: '@aetherui', crFull: 'Aether UI', price: '$189', rt: 5, views: 6300, lk: 318, saves: 149, tags: ['AR', 'WebXR', 'Three.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for XR Developers who need the best tools.', available: true, createdFor: 'XR Developers', date: 'Feb 2026' },
  { id: 51, title: 'Rune Password Manager', cr: '@runedev', crFull: 'Rune Dev', price: '$79', rt: 4, views: 2800, lk: 133, saves: 62, tags: ['Security', 'React', 'Encryption'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Security Devs who need the best tools.', available: true, createdFor: 'Security Devs', date: 'Jan 2026' },
  { id: 52, title: 'Echo Social Kit', cr: '@echosocial', crFull: 'Echo Social', price: '$89', rt: 5, views: 3500, lk: 169, saves: 79, tags: ['React', 'Social', 'Feed'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: false, badge: 'New', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Community Apps who need the best tools.', available: false, createdFor: 'Community Apps', date: 'Feb 2026' },
  { id: 53, title: 'Tidal Scroll Library', cr: '@tidalui', crFull: 'Tidal UI', price: '$49', rt: 4, views: 2600, lk: 123, saves: 57, tags: ['React', 'Scroll', 'Animation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Frontend Devs who need the best tools.', available: true, createdFor: 'Frontend Devs', date: 'Jan 2026' },
  { id: 54, title: 'Crater DB Explorer', cr: '@cratertools', crFull: 'Crater Tools', price: '$99', rt: 5, views: 3100, lk: 149, saves: 70, tags: ['Database', 'React', 'Admin'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Backend Devs who need the best tools.', available: true, createdFor: 'Backend Devs', date: 'Feb 2026' },
  { id: 55, title: 'Lyra Music Player', cr: '@lyradev', crFull: 'Lyra Dev', price: '$75', rt: 4, views: 2400, lk: 115, saves: 53, tags: ['React', 'Audio', 'Player'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Media Apps who need the best tools.', available: false, createdFor: 'Media Apps', date: 'Feb 2026' },
  { id: 56, title: 'Zenith Type System', cr: '@zenithdesign', crFull: 'Zenith Design', price: '$65', rt: 5, views: 3800, lk: 182, saves: 85, tags: ['Typography', 'CSS', 'Figma'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Designers who need the best tools.', available: true, createdFor: 'Designers', date: 'Jan 2026' },
  { id: 57, title: 'Phase Deployment Kit', cr: '@phaseops', crFull: 'Phase Ops', price: '$125', rt: 4, views: 3000, lk: 144, saves: 67, tags: ['DevOps', 'CI/CD', 'Docker'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Dev Teams who need the best tools.', available: true, createdFor: 'Dev Teams', date: 'Feb 2026' },
  { id: 58, title: 'Halo Loading States', cr: '@haloui', crFull: 'Halo UI', price: '$39', rt: 5, views: 4500, lk: 216, saves: 101, tags: ['React', 'Loading', 'Skeleton'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for UI Developers who need the best tools.', available: true, createdFor: 'UI Developers', date: 'Feb 2026' },
  { id: 59, title: 'Sigil NFT Marketplace', cr: '@sigilweb3', crFull: 'Sigil Web3', price: '$159', rt: 4, views: 5700, lk: 271, saves: 127, tags: ['Web3', 'NFT', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: false, badge: 'Hot', desc: 'Web3-ready components with wallet connection, contract interaction, and ENS support.', idea: 'Built for Web3 Builders who need the best tools.', available: false, createdFor: 'Web3 Builders', date: 'Jan 2026' },
  { id: 60, title: 'Nova Wallet Connect', cr: '@novaweb3', crFull: 'Nova Web3', price: '$119', rt: 5, views: 4100, lk: 198, saves: 93, tags: ['Web3', 'Wallet', 'Ethereum'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Web3-ready components with wallet connection, contract interaction, and ENS support.', idea: 'Built for Web3 Developers who need the best tools.', available: true, createdFor: 'Web3 Developers', date: 'Feb 2026' },
  { id: 61, title: 'Onyx Table Component', cr: '@onyxdev', crFull: 'Onyx Dev', price: '$55', rt: 4, views: 2900, lk: 138, saves: 64, tags: ['React', 'Tables', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Data Teams who need the best tools.', available: false, createdFor: 'Data Teams', date: 'Jan 2026' },
  { id: 62, title: 'Strata Layout Engine', cr: '@strataui', crFull: 'Strata UI', price: '$79', rt: 5, views: 3400, lk: 163, saves: 76, tags: ['React', 'Layout', 'CSS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Frontend Devs who need the best tools.', available: true, createdFor: 'Frontend Devs', date: 'Feb 2026' },
  { id: 63, title: 'Blaze Speed Dashboard', cr: '@blazedev', crFull: 'Blaze Dev', price: '$95', rt: 4, views: 3800, lk: 182, saves: 85, tags: ['React', 'Performance', 'Metrics'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Engineering Teams who need the best tools.', available: true, createdFor: 'Engineering Teams', date: 'Feb 2026' },
  { id: 64, title: 'Cyan Chat SDK', cr: '@cyandev', crFull: 'Cyan Dev', price: '$85', rt: 5, views: 3200, lk: 153, saves: 72, tags: ['React', 'Chat', 'SDK'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for App Developers who need the best tools.', available: false, createdFor: 'App Developers', date: 'Jan 2026' },
  { id: 65, title: 'Mirage Image Optimizer', cr: '@miragetools', crFull: 'Mirage Tools', price: '$59', rt: 4, views: 2700, lk: 128, saves: 60, tags: ['Images', 'Next.js', 'Performance'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Web Developers who need the best tools.', available: true, createdFor: 'Web Developers', date: 'Feb 2026' },
  { id: 66, title: 'Axis Data Pipeline', cr: '@axisdata', crFull: 'Axis Data', price: '$179', rt: 5, views: 4900, lk: 237, saves: 111, tags: ['Data', 'Python', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Data Engineers who need the best tools.', available: true, createdFor: 'Data Engineers', date: 'Feb 2026' },
  { id: 67, title: 'Specter Debug Console', cr: '@specterdev', crFull: 'Specter Dev', price: '$69', rt: 4, views: 2500, lk: 119, saves: 55, tags: ['React', 'Debug', 'DevTools'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Developers who need the best tools.', available: false, createdFor: 'Developers', date: 'Jan 2026' },
  { id: 68, title: 'Quartz Blog Platform', cr: '@quartzdev', crFull: 'Quartz Dev', price: '$89', rt: 5, views: 4300, lk: 207, saves: 97, tags: ['Next.js', 'Blog', 'CMS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Writers & Devs who need the best tools.', available: true, createdFor: 'Writers & Devs', date: 'Feb 2026' },
  { id: 69, title: 'Dune Mobile Gestures', cr: '@duneui', crFull: 'Dune UI', price: '$79', rt: 4, views: 3100, lk: 148, saves: 69, tags: ['React Native', 'Gestures', 'Mobile'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Mobile Devs who need the best tools.', available: true, createdFor: 'Mobile Devs', date: 'Jan 2026' },
  { id: 70, title: 'Lyric AI Writer', cr: '@lyricai', crFull: 'Lyric AI', price: '$129', rt: 5, views: 5200, lk: 251, saves: 118, tags: ['AI', 'Next.js', 'GPT'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Content Creators who need the best tools.', available: true, createdFor: 'Content Creators', date: 'Feb 2026' },
  { id: 71, title: 'Matrix Code Renderer', cr: '@matrixdev', crFull: 'Matrix Dev', price: '$49', rt: 4, views: 3600, lk: 172, saves: 80, tags: ['Canvas', 'JavaScript', 'Animation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Creative Devs who need the best tools.', available: false, createdFor: 'Creative Devs', date: 'Feb 2026' },
  { id: 72, title: 'Orbit Social Graph', cr: '@orbitdev', crFull: 'Orbit Dev', price: '$139', rt: 5, views: 4100, lk: 198, saves: 93, tags: ['React', 'Graph', 'D3.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Analytics Teams who need the best tools.', available: true, createdFor: 'Analytics Teams', date: 'Jan 2026' },
  { id: 73, title: 'Prism Color Tokens', cr: '@prismdesign', crFull: 'Prism Design', price: '$59', rt: 4, views: 2800, lk: 133, saves: 62, tags: ['Design Tokens', 'CSS', 'Figma'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Design Systems who need the best tools.', available: true, createdFor: 'Design Systems', date: 'Feb 2026' },
  { id: 74, title: 'Stellar Map Component', cr: '@stellarui', crFull: 'Stellar UI', price: '$99', rt: 5, views: 3700, lk: 178, saves: 83, tags: ['Maps', 'React', 'Leaflet'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'Interactive map component with markers, clusters, and real-time updates.', idea: 'Built for Location Apps who need the best tools.', available: false, createdFor: 'Location Apps', date: 'Feb 2026' },
  { id: 75, title: 'Eclipse Dark Kit', cr: '@eclipseui', crFull: 'Eclipse UI', price: '$79', rt: 4, views: 4200, lk: 201, saves: 94, tags: ['Dark Mode', 'CSS', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for UI Developers who need the best tools.', available: true, createdFor: 'UI Developers', date: 'Jan 2026' },
  { id: 76, title: 'Zephyr Animation Suite', cr: '@zephyrui', crFull: 'Zephyr UI', price: '$109', rt: 5, views: 3500, lk: 168, saves: 78, tags: ['Animation', 'GSAP', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Smooth animation library with GPU-accelerated effects and composable hooks.', idea: 'Built for Creative Devs who need the best tools.', available: true, createdFor: 'Creative Devs', date: 'Feb 2026' },
  { id: 77, title: 'Carbon Design Tokens', cr: '@carbondesign', crFull: 'Carbon Design', price: '$55', rt: 4, views: 2600, lk: 124, saves: 58, tags: ['Design System', 'CSS', 'Figma'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Product Teams who need the best tools.', available: false, createdFor: 'Product Teams', date: 'Feb 2026' },
  { id: 78, title: 'Thunder API Gateway', cr: '@thunderdev', crFull: 'Thunder Dev', price: '$149', rt: 5, views: 4800, lk: 231, saves: 108, tags: ['API', 'Node.js', 'Gateway'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Robust API integration kit with error handling, retries, and TypeScript types.', idea: 'Built for Backend Teams who need the best tools.', available: true, createdFor: 'Backend Teams', date: 'Jan 2026' },
  { id: 79, title: 'Jade Markdown Renderer', cr: '@jadedev', crFull: 'Jade Dev', price: '$45', rt: 4, views: 2200, lk: 105, saves: 49, tags: ['Markdown', 'React', 'MDX'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Content Apps who need the best tools.', available: true, createdFor: 'Content Apps', date: 'Feb 2026' },
  { id: 80, title: 'Cobalt Code Snippets', cr: '@cobaltdev', crFull: 'Cobalt Dev', price: '$35', rt: 5, views: 3100, lk: 148, saves: 69, tags: ['Code', 'React', 'Developer'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developers who need the best tools.', available: false, createdFor: 'Developers', date: 'Jan 2026' },
  { id: 81, title: 'Frost UI Components', cr: '@frostui', crFull: 'Frost UI', price: '$89', rt: 4, views: 3400, lk: 163, saves: 76, tags: ['React', 'Components', 'CSS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Product Teams who need the best tools.', available: true, createdFor: 'Product Teams', date: 'Feb 2026' },
  { id: 82, title: 'Nova Newsletter Kit', cr: '@novamail', crFull: 'Nova Mail', price: '$69', rt: 5, views: 2900, lk: 138, saves: 64, tags: ['Email', 'React', 'Newsletter'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Beautiful email templates with drag-and-drop builder and preview functionality.', idea: 'Built for Marketing Teams who need the best tools.', available: true, createdFor: 'Marketing Teams', date: 'Feb 2026' },
  { id: 83, title: 'Steel CRUD Generator', cr: '@steeldev', crFull: 'Steel Dev', price: '$119', rt: 4, views: 3600, lk: 172, saves: 80, tags: ['CRUD', 'React', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Full-stack Devs who need the best tools.', available: false, createdFor: 'Full-stack Devs', date: 'Jan 2026' },
  { id: 84, title: 'Pixel Icon Generator', cr: '@pixeltools', crFull: 'Pixel Tools', price: '$49', rt: 5, views: 4100, lk: 196, saves: 92, tags: ['Icons', 'SVG', 'Tool'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Designers who need the best tools.', available: true, createdFor: 'Designers', date: 'Feb 2026' },
  { id: 85, title: 'Neon Progress Bars', cr: '@neonui', crFull: 'Neon UI', price: '$39', rt: 4, views: 2400, lk: 115, saves: 53, tags: ['React', 'Progress', 'Animation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for App Devs who need the best tools.', available: true, createdFor: 'App Devs', date: 'Jan 2026' },
  { id: 86, title: 'Jade Calendar UI', cr: '@jadecal', crFull: 'Jade Cal', price: '$75', rt: 5, views: 3300, lk: 158, saves: 74, tags: ['React', 'Calendar', 'Events'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Productivity Apps who need the best tools.', available: false, createdFor: 'Productivity Apps', date: 'Feb 2026' },
  { id: 87, title: 'Silver Analytics SDK', cr: '@silverdata', crFull: 'Silver Data', price: '$139', rt: 4, views: 4600, lk: 220, saves: 103, tags: ['Analytics', 'SDK', 'JavaScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Deep analytics with powerful charts, cohort analysis, and data export pipelines.', idea: 'Built for Analytics Teams who need the best tools.', available: true, createdFor: 'Analytics Teams', date: 'Feb 2026' },
  { id: 88, title: 'Flux Search Engine', cr: '@fluxsearch', crFull: 'Flux Search', price: '$99', rt: 5, views: 3800, lk: 182, saves: 85, tags: ['Search', 'React', 'Algolia'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Product Teams who need the best tools.', available: true, createdFor: 'Product Teams', date: 'Jan 2026' },
  { id: 89, title: 'Obsidian Dev Portfolio', cr: '@obsidianui', crFull: 'Obsidian UI', price: '$55', rt: 4, views: 3200, lk: 153, saves: 71, tags: ['Portfolio', 'Next.js', 'Animation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: false, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developers who need the best tools.', available: false, createdFor: 'Developers', date: 'Feb 2026' },
  { id: 90, title: 'Quasar Email SDK', cr: '@quasardev', crFull: 'Quasar Dev', price: '$79', rt: 5, views: 2700, lk: 128, saves: 60, tags: ['Email', 'SDK', 'API'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Beautiful email templates with drag-and-drop builder and preview functionality.', idea: 'Built for Integration Devs who need the best tools.', available: true, createdFor: 'Integration Devs', date: 'Feb 2026' },
  { id: 91, title: 'Vega Chart Components', cr: '@vegadev', crFull: 'Vega Dev', price: '$95', rt: 4, views: 4000, lk: 192, saves: 90, tags: ['Charts', 'React', 'D3.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Data Viz Teams who need the best tools.', available: true, createdFor: 'Data Viz Teams', date: 'Jan 2026' },
  { id: 92, title: 'Amber Auth Dashboard', cr: '@amberauth', crFull: 'Amber Auth', price: '$109', rt: 5, views: 3500, lk: 168, saves: 78, tags: ['Auth', 'Dashboard', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'Secure authentication system with multiple providers and role-based access control.', idea: 'Built for SaaS Products who need the best tools.', available: false, createdFor: 'SaaS Products', date: 'Feb 2026' },
  { id: 93, title: 'Crystal Payment UI', cr: '@crystalpay', crFull: 'Crystal Pay', price: '$149', rt: 4, views: 4700, lk: 225, saves: 105, tags: ['Stripe', 'React', 'Payments'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for E-commerce who need the best tools.', available: true, createdFor: 'E-commerce', date: 'Feb 2026' },
  { id: 94, title: 'Stone Code Documentation', cr: '@stonedocs', crFull: 'Stone Docs', price: '$65', rt: 5, views: 3100, lk: 149, saves: 69, tags: ['Docs', 'MDX', 'Next.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developer Tools who need the best tools.', available: true, createdFor: 'Developer Tools', date: 'Jan 2026' },
  { id: 95, title: 'Tide Responsive Grid', cr: '@tideui', crFull: 'Tide UI', price: '$49', rt: 4, views: 2800, lk: 133, saves: 62, tags: ['CSS', 'Grid', 'Responsive'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Frontend Devs who need the best tools.', available: false, createdFor: 'Frontend Devs', date: 'Feb 2026' },
  { id: 96, title: 'Comet SaaS Dashboard', cr: '@cometdev', crFull: 'Comet Dev', price: '$189', rt: 5, views: 6100, lk: 293, saves: 137, tags: ['SaaS', 'React', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for SaaS Founders who need the best tools.', available: true, createdFor: 'SaaS Founders', date: 'Feb 2026' },
  { id: 97, title: 'Ghost Theme Studio', cr: '@ghoststudio', crFull: 'Ghost Studio', price: '$75', rt: 4, views: 3400, lk: 163, saves: 76, tags: ['Ghost CMS', 'Theme', 'Design'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Bloggers who need the best tools.', available: true, createdFor: 'Bloggers', date: 'Jan 2026' },
  { id: 98, title: 'Ember Form Validation', cr: '@emberforms', crFull: 'Ember Forms', price: '$59', rt: 5, views: 2600, lk: 124, saves: 58, tags: ['Forms', 'React', 'Zod'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for App Devs who need the best tools.', available: false, createdFor: 'App Devs', date: 'Feb 2026' },
  { id: 99, title: 'Prism Dev Environment', cr: '@prismtools', crFull: 'Prism Tools', price: '$129', rt: 4, views: 4500, lk: 215, saves: 101, tags: ['Docker', 'DevEnv', 'CLI'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Dev Teams who need the best tools.', available: true, createdFor: 'Dev Teams', date: 'Feb 2026' },
  { id: 100, title: 'Abyss Dark Mode Kit', cr: '@abyssui', crFull: 'Abyss UI', price: '$85', rt: 5, views: 3900, lk: 186, saves: 87, tags: ['Dark Mode', 'React', 'CSS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for UI Developers who need the best tools.', available: true, createdFor: 'UI Developers', date: 'Feb 2026' },
  { id: 101, title: 'Forge Testing Suite', cr: '@forgetest', crFull: 'Forge Test', price: '$99', rt: 4, views: 3200, lk: 153, saves: 71, tags: ['Testing', 'Vitest', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for QA Teams who need the best tools.', available: false, createdFor: 'QA Teams', date: 'Jan 2026' },
  { id: 102, title: 'Meridian Map Explorer', cr: '@meridiandev', crFull: 'Meridian Dev', price: '$119', rt: 5, views: 4300, lk: 206, saves: 96, tags: ['Maps', 'Mapbox', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'Interactive map component with markers, clusters, and real-time updates.', idea: 'Built for Location Apps who need the best tools.', available: true, createdFor: 'Location Apps', date: 'Feb 2026' },
  { id: 103, title: 'Arc Browser Extension', cr: '@arcext', crFull: 'Arc Ext', price: '$45', rt: 4, views: 2500, lk: 119, saves: 55, tags: ['Chrome', 'Extension', 'JavaScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Browser Devs who need the best tools.', available: true, createdFor: 'Browser Devs', date: 'Feb 2026' },
  { id: 104, title: 'Nova Design Playground', cr: '@novadesign', crFull: 'Nova Design', price: '$65', rt: 5, views: 3600, lk: 172, saves: 80, tags: ['Design', 'Figma', 'Prototype'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Designers who need the best tools.', available: false, createdFor: 'Designers', date: 'Jan 2026' },
  { id: 105, title: 'Glacier State Sync', cr: '@glacierdev', crFull: 'Glacier Dev', price: '$89', rt: 4, views: 2900, lk: 138, saves: 64, tags: ['State', 'React', 'Sync'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for App Devs who need the best tools.', available: true, createdFor: 'App Devs', date: 'Feb 2026' },
  { id: 106, title: 'Raven Dark Components', cr: '@ravenui', crFull: 'Raven UI', price: '$75', rt: 5, views: 3100, lk: 148, saves: 69, tags: ['Dark', 'Components', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Stunning dark mode UI kit with perfectly tuned contrast and accessibility.', idea: 'Built for UI Devs who need the best tools.', available: true, createdFor: 'UI Devs', date: 'Feb 2026' },
  { id: 107, title: 'Slate Admin Generator', cr: '@slategen', crFull: 'Slate Gen', price: '$159', rt: 4, views: 4800, lk: 230, saves: 108, tags: ['Admin', 'React', 'CRUD'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: false, badge: 'Hot', desc: 'Full-featured admin panel with tables, charts, user management, and permissions.', idea: 'Built for Full-stack Devs who need the best tools.', available: false, createdFor: 'Full-stack Devs', date: 'Jan 2026' },
  { id: 108, title: 'Pixel Animation Lib', cr: '@pixelanim', crFull: 'Pixel Anim', price: '$69', rt: 5, views: 3400, lk: 162, saves: 76, tags: ['Animation', 'Canvas', 'JavaScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Smooth animation library with GPU-accelerated effects and composable hooks.', idea: 'Built for Creative Devs who need the best tools.', available: true, createdFor: 'Creative Devs', date: 'Feb 2026' },
  { id: 109, title: 'Coral Image CDN UI', cr: '@coraldev', crFull: 'Coral Dev', price: '$95', rt: 4, views: 3700, lk: 177, saves: 83, tags: ['Images', 'CDN', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Media Apps who need the best tools.', available: true, createdFor: 'Media Apps', date: 'Feb 2026' },
  { id: 110, title: 'Echo Webhook Platform', cr: '@echoweb', crFull: 'Echo Web', price: '$139', rt: 5, views: 5200, lk: 249, saves: 117, tags: ['Webhooks', 'Node.js', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Integration Devs who need the best tools.', available: false, createdFor: 'Integration Devs', date: 'Jan 2026' },
  { id: 111, title: 'Helix Graph Database', cr: '@helixdb', crFull: 'Helix DB', price: '$179', rt: 4, views: 4100, lk: 196, saves: 92, tags: ['Graph', 'Database', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Data Engineers who need the best tools.', available: true, createdFor: 'Data Engineers', date: 'Feb 2026' },
  { id: 112, title: 'Steel DevOps Monitor', cr: '@steelops', crFull: 'Steel Ops', price: '$149', rt: 5, views: 4500, lk: 215, saves: 101, tags: ['DevOps', 'Monitoring', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Ops Teams who need the best tools.', available: true, createdFor: 'Ops Teams', date: 'Feb 2026' },
  { id: 113, title: 'Jade E-commerce Kit', cr: '@jadeshop', crFull: 'Jade Shop', price: '$129', rt: 4, views: 3800, lk: 182, saves: 85, tags: ['E-commerce', 'Next.js', 'Stripe'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: false, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Indie Hackers who need the best tools.', available: false, createdFor: 'Indie Hackers', date: 'Jan 2026' },
  { id: 114, title: 'Silver Socket Server', cr: '@silverdev', crFull: 'Silver Dev', price: '$89', rt: 5, views: 2800, lk: 133, saves: 62, tags: ['WebSocket', 'Node.js', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Realtime Apps who need the best tools.', available: true, createdFor: 'Realtime Apps', date: 'Feb 2026' },
  { id: 115, title: 'Carbon Dark IDE Theme', cr: '@carbonide', crFull: 'Carbon IDE', price: '$29', rt: 4, views: 5600, lk: 268, saves: 126, tags: ['VSCode', 'Theme', 'Dark'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developers who need the best tools.', available: true, createdFor: 'Developers', date: 'Feb 2026' },
  { id: 116, title: 'Quantum Microservices', cr: '@quantumarch', crFull: 'Quantum Arch', price: '$199', rt: 5, views: 4200, lk: 201, saves: 94, tags: ['Microservices', 'Node.js', 'Docker'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Architects who need the best tools.', available: false, createdFor: 'Architects', date: 'Jan 2026' },
];


/* ─── PURCHASE BUTTON ───────────────────────────────────────── */
const PurchaseBtn = ({ purchased, onClick, style = {} }) => {
  const [pts, setPts] = React.useState([]);
  const active = React.useRef(false);
  const timerRef = React.useRef(null);

  const burst = () => {
    const newPts = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      angle: (i / 18) * Math.PI * 2,
      dist: 35 + Math.random() * 40,
      size: 3 + Math.random() * 4,
      color: ['#22d3ee', '#a855f7', '#ec4899', '#f59e0b', '#10b981'][i % 5],
    }));
    setPts(newPts);
    timerRef.current = setTimeout(() => { if (!active.current) setPts([]); }, 650);
  };

  const handleEnter = () => { active.current = true; burst(); timerRef.current = setInterval(burst, 700); };
  const handleLeave = () => { active.current = false; clearInterval(timerRef.current); setTimeout(() => setPts([]), 650); };

  return (
    <div style={{ position: 'relative', display: 'flex', flex: 2 }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {pts.map(p => (
        <div key={p.id} style={{
          position: 'absolute', top: '50%', left: '50%',
          width: p.size, height: p.size, borderRadius: '50%',
          background: p.color, pointerEvents: 'none', zIndex: 10,
          '--tx': Math.cos(p.angle) * p.dist + 'px',
          '--ty': Math.sin(p.angle) * p.dist + 'px',
          animation: 'particleBurst .65s ease-out forwards',
          boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
        }} />
      ))}
      <button onClick={onClick} className="SB" style={{ flex: 1, padding: '7px', borderRadius: 9, border: 'none', cursor: 'pointer', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani,sans-serif', animation: 'purchaseGlow 2s ease infinite', ...style }}>
        {purchased ? '✓ Vibed ✓' : 'Buy Vibe'}
      </button>
    </div>
  );
};

/* ─── MARKET DETAIL PAGE ────────────────────────────────────── */
const MarketDetail = ({ item, onBack, onPurchase, purchased, onBookmark, bookmarked, onLike, liked }) => {
  const [panel, setPanel] = React.useState(null); // 'feedback'|'share'|'info'
  const [comment, setComment] = React.useState('');
  const [comments, setComments] = React.useState([
    { id: 1, u: '@starweaver', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=60&h=60&fit=crop', t: 'Incredible work! The component architecture is super clean.', ts: '3 minutes' },
    { id: 2, u: '@quantumrift', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop', t: 'Just what I needed for my SaaS project.', ts: '12 minutes' },
    { id: 3, u: '@neonphoenix', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop', t: 'The design system integration is phenomenal.', ts: '28 minutes' },
    { id: 4, u: '@devloop', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=60&h=60&fit=crop', t: 'Bought this. Worth every penny.', ts: '1 hour' },
  ]);
  const [copied, setCopied] = React.useState(false);
  const [follow, setFollow] = React.useState(false);

  const relatedByCreator = MKT.filter(x => x.cr === item.cr && x.id !== item.id);
  const youMightLike = MKT.filter(x => x.cr !== item.cr && x.id !== item.id).slice(0, 4);

  const addComment = () => {
    if (!comment.trim()) return;
    setComments(c => [{ id: Date.now(), u: '@you', av: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=60&h=60&fit=crop', t: comment, ts: 'just now' }, ...c]);
    setComment('');
  };

  return (
    <div style={{ minHeight: '100vh', animation: 'detailFade .4s ease forwards' }}>
      {/* Sticky creator header */}
      <div style={{ position: 'sticky', top: 64, zIndex: 80, background: 'rgba(3,7,18,.96)', backdropFilter: 'blur(28px)', borderBottom: '1px solid var(--br)', padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 700, marginRight: 4, padding: '4px 0' }}>
          <RainbowArrow size={13} /> Back
        </button>
        <div style={{ width: 1, height: 20, background: 'var(--br)' }} />
        <Av src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop" sz={34} on={item.available} />
        <div>
          <span style={{ fontSize: 13, fontWeight: 700 }}>{item.crFull}</span>
          <span style={{ fontSize: 11, color: 'var(--mu)', marginLeft: 8 }}>for {item.createdFor}</span>
          {item.available && <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 700, color: '#10b981', fontFamily: 'JetBrains Mono' }}>● Available for work</span>}
        </div>
        <button onClick={() => setFollow(f => !f)} style={{ padding: '5px 14px', borderRadius: 7, border: `1px solid ${follow ? 'transparent' : 'rgba(255,255,255,.2)'}`, background: follow ? 'linear-gradient(135deg,#22d3ee,#a855f7)' : 'none', cursor: 'pointer', color: follow ? 'white' : 'rgba(255,255,255,.7)', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani' }}>
          {follow ? 'Following' : 'Follow'}
        </button>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={onLike} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, border: `1px solid ${liked ? 'rgba(236,72,153,.5)' : 'rgba(255,255,255,.1)'}`, background: liked ? 'rgba(236,72,153,.1)' : 'none', cursor: 'pointer', color: liked ? '#ec4899' : 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600 }}>
            <Heart size={14} fill={liked ? '#ec4899' : 'none'} color={liked ? '#ec4899' : 'var(--mu)'} />{item.lk + (liked ? 1 : 0)}
          </button>
          <button onClick={onBookmark} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, border: `1px solid ${bookmarked ? 'rgba(168,85,247,.5)' : 'rgba(255,255,255,.1)'}`, background: bookmarked ? 'rgba(168,85,247,.1)' : 'none', cursor: 'pointer', color: bookmarked ? '#a855f7' : 'var(--mu)', fontSize: 12 }}>
            <Bookmark size={14} fill={bookmarked ? '#a855f7' : 'none'} color={bookmarked ? '#a855f7' : 'var(--mu)'} />
          </button>
          <PurchaseBtn purchased={purchased} onClick={() => onPurchase(item)} style={{ padding: '6px 20px', flex: 'none' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 64px', gap: 0, padding: '0 22px', maxWidth: 1100, margin: '0 auto' }}>
        {/* Main content */}
        <div style={{ paddingRight: 16, paddingBottom: 80 }}>
          <div style={{ marginTop: 24, marginBottom: 20 }}>
            <h1 className="O" style={{ fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: 900, marginBottom: 8 }}>{item.title}</h1>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
              {item.tags.map(t => <Bdg key={t} color="#a855f7" ch={t} />)}
              <span className="M" style={{ fontSize: 9, color: 'var(--mu)', alignSelf: 'center' }}>Posted {item.date}</span>
            </div>
          </div>

          {/* Product image */}
          <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 24, boxShadow: '0 0 60px rgba(0,0,0,.5)' }}>
            <img src={item.img} alt="" style={{ width: '100%', display: 'block', maxHeight: 480, objectFit: 'cover' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div className="gl" style={{ borderRadius: 16, padding: 20 }}>
              <div className="O" style={{ fontSize: 10, color: 'var(--mu)', marginBottom: 8, letterSpacing: '.1em' }}>THE IDEA</div>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,.8)' }}>{item.idea}</p>
            </div>
            <div className="gl" style={{ borderRadius: 16, padding: 20 }}>
              <div className="O" style={{ fontSize: 10, color: 'var(--mu)', marginBottom: 8, letterSpacing: '.1em' }}>DESCRIPTION</div>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,.8)' }}>{item.desc}</p>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
            {[['Views', item.views.toLocaleString(), '#22d3ee'], ['Likes', item.lk, '#ec4899'], ['Saves', item.saves, '#a855f7'], ['Price', item.price, '#10b981']].map(([l, v, c]) => (
              <div key={l} className="gl" style={{ flex: 1, borderRadius: 13, padding: '13px 16px', textAlign: 'center' }}>
                <div className="O" style={{ fontSize: 18, fontWeight: 900, color: c }}>{v}</div>
                <div style={{ fontSize: 10, color: 'var(--mu)', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* More by creator */}
          {relatedByCreator.length > 0 && (
            <div style={{ marginBottom: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <h3 className="O" style={{ fontSize: 14, fontWeight: 700 }}>More by {item.crFull}</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 14 }}>
                {relatedByCreator.map(r => (
                  <div key={r.id} className="gl CU" style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer' }} onClick={() => { }}>
                    <img src={r.img} alt="" style={{ width: '100%', height: 110, objectFit: 'cover' }} />
                    <div style={{ padding: '10px 12px' }}>
                      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2 }}>{r.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--mu)' }}>{r.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* You might also like */}
          <div>
            <h3 className="O" style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>You might also like</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 14 }}>
              {youMightLike.map(r => (
                <div key={r.id} className="gl CU" style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer' }} onClick={() => { }}>
                  <img src={r.img} alt="" style={{ width: '100%', height: 110, objectFit: 'cover' }} />
                  <div style={{ padding: '10px 12px' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2 }}>{r.title}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 10, color: 'var(--mu)' }}>{r.cr}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#22d3ee' }}>{r.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right action column — fixed so they don't scroll */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, position: 'fixed', right: panel ? 348 : 16, top: '50%', transform: 'translateY(-50%)', zIndex: 140, transition: 'right .3s ease' }}>
          {[
            { ico: MessageCircle, label: 'Feedback', count: comments.length, id: 'feedback', color: '#22d3ee' },
            { ico: Share2, label: 'Share', count: null, id: 'share', color: '#a855f7' },
            { ico: Info, label: 'Shot details', count: null, id: 'info', color: '#f59e0b' },
          ].map(({ ico: Ic, label, count, id, color }) => (
            <div key={id} style={{ position: 'relative' }}>
              <button onClick={() => setPanel(panel === id ? null : id)}
                style={{ width: 48, height: 48, borderRadius: '50%', background: panel === id ? `${color}18` : 'rgba(8,12,26,.92)', backdropFilter: 'blur(16px)', border: `1px solid ${panel === id ? color : 'rgba(255,255,255,.15)'}`, cursor: 'pointer', color: panel === id ? color : 'rgba(255,255,255,.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s', boxShadow: `0 4px 16px rgba(0,0,0,.5)${panel === id ? `,0 0 20px ${color}44` : ''}` }}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}12`; e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; }}
                onMouseLeave={e => { if (panel !== id) { e.currentTarget.style.background = 'rgba(8,12,26,.92)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)'; } }}
                title={label}>
                <Ic size={18} />
                {count != null && <div style={{ position: 'absolute', top: -4, right: -4, width: 18, height: 18, borderRadius: '50%', background: color, fontSize: 8, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>{count}</div>}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Panels */}
      {panel === 'feedback' && (
        <div style={{ position: 'fixed', right: 0, top: 64, bottom: 0, width: 340, background: 'rgba(8,12,26,.97)', backdropFilter: 'blur(32px)', borderLeft: '1px solid var(--br)', zIndex: 150, animation: 'slideInRight .3s ease', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--br)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Feedback ({comments.length})</span>
            <button onClick={() => setPanel(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 18 }}>✕</button>
          </div>
          <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto', overscrollBehavior: 'contain' }}>
            {comments.map(c => (
              <div key={c.id} style={{ display: 'flex', gap: 10 }}>
                <Av src={c.av} sz={34} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2 }}>{c.u} <span style={{ fontSize: 9, color: 'var(--mu)', fontWeight: 400 }}>{c.ts}</span></div>
                  <div style={{ fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,.75)' }}>{c.t}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '12px 14px', borderTop: '1px solid var(--br)', display: 'flex', gap: 8 }}>
            <input value={comment} onChange={e => setComment(e.target.value)} onKeyDown={e => e.key === 'Enter' && addComment()} placeholder="Leave feedback..." style={{ flex: 1, background: 'rgba(255,255,255,.05)', border: '1px solid var(--br)', borderRadius: 9, padding: '8px 12px', color: 'white', fontSize: 11, fontFamily: 'Rajdhani', outline: 'none' }} />
            <button onClick={addComment} className="SB" style={{ padding: '8px 12px', borderRadius: 9, border: 'none', cursor: 'pointer' }}><Send size={13} color="white" /></button>
          </div>
        </div>
      )}
      {panel === 'share' && (
        <div style={{ position: 'fixed', right: 0, top: 64, width: 320, background: 'rgba(8,12,26,.97)', backdropFilter: 'blur(32px)', borderLeft: '1px solid var(--br)', borderBottom: '1px solid var(--br)', borderRadius: '0 0 0 16px', zIndex: 150, padding: 22, animation: 'slideInRight .3s ease', overscrollBehavior: 'contain' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Share</span>
            <button onClick={() => setPanel(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 16 }}>✕</button>
          </div>
          <img src={item.img} alt="" style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
          <p style={{ fontSize: 12, color: 'var(--mu)', marginBottom: 16 }}>Share this with your community</p>
          <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
            {[['Twitter/X', '#1DA1F2'], ['LinkedIn', '#0077B5'], ['Pinterest', '#E60023']].map(([n, c]) => (
              <button key={n} style={{ flex: 1, padding: '9px 0', borderRadius: 10, border: `1px solid ${c}33`, background: `${c}11`, cursor: 'pointer', color: c, fontSize: 10, fontWeight: 700, fontFamily: 'Rajdhani' }}>{n}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.04)', borderRadius: 10, padding: '8px 12px', border: '1px solid var(--br)' }}>
            <span style={{ flex: 1, fontSize: 10, color: 'var(--mu)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: 'JetBrains Mono' }}>vibeworld.app/market/{item.id}</span>
            <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: copied ? '#10b981' : '#22d3ee', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', flexShrink: 0 }}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
      {panel === 'info' && (
        <div style={{ position: 'fixed', right: 0, top: 64, width: 320, background: 'rgba(8,12,26,.97)', backdropFilter: 'blur(32px)', borderLeft: '1px solid var(--br)', borderBottom: '1px solid var(--br)', borderRadius: '0 0 0 16px', zIndex: 150, padding: 22, animation: 'slideInRight .3s ease', overscrollBehavior: 'contain' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
            <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Shot Details</span>
            <button onClick={() => setPanel(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 16 }}>✕</button>
          </div>
          <div style={{ marginBottom: 8, fontSize: 11, color: 'var(--mu)' }}>Posted {item.date}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
            {[['Views', item.views.toLocaleString(), '#22d3ee'], ['Saves', item.saves, '#a855f7'], ['Likes', item.lk, '#ec4899'], ['Comments', comments.length, '#f59e0b']].map(([l, v, c]) => (
              <div key={l} className="gl" style={{ borderRadius: 11, padding: '12px 14px' }}>
                <div className="O" style={{ fontSize: 18, fontWeight: 900, color: c, marginBottom: 2 }}>{v}</div>
                <div style={{ fontSize: 10, color: 'var(--mu)' }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="O" style={{ fontSize: 10, color: 'var(--mu)', marginBottom: 10, letterSpacing: '.08em' }}>TAGS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {item.tags.map(t => <span key={t} style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,.12)', fontSize: 11, color: 'rgba(255,255,255,.7)' }}>{t}</span>)},
            {['digital', 'template', 'ui', 'creative'].map(t => <span key={t} style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,.08)', fontSize: 11, color: 'rgba(255,255,255,.4)' }}>{t}</span>)}
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── MARKET CARD ───────────────────────────────────────────── */
const ParticleBurst = ({ active, purchased }) => {
  const [pts, setPts] = React.useState([]);
  const timerRef = React.useRef(null);
  const burst = () => {
    setPts(Array.from({ length: 16 }, (_, i) => ({ id: Date.now() + i, angle: (i / 16) * Math.PI * 2, dist: 40 + Math.random() * 35, size: 3 + Math.random() * 4, color: ['#22d3ee', '#a855f7', '#ec4899', '#f59e0b', '#10b981'][i % 5] })));
  };
  React.useEffect(() => {
    if (active || purchased) {
      burst();
      timerRef.current = setInterval(burst, 650);
      return () => clearInterval(timerRef.current);
    } else {
      clearInterval(timerRef.current);
      setTimeout(() => setPts([]), 650);
    }
  }, [active, purchased]);
  return (<>{pts.map(p => (
    <div key={p.id} style={{ position: 'absolute', top: '50%', left: '50%', width: p.size, height: p.size, borderRadius: '50%', background: p.color, pointerEvents: 'none', zIndex: 20, '--tx': Math.cos(p.angle) * p.dist + 'px', '--ty': Math.sin(p.angle) * p.dist + 'px', animation: 'particleBurst .65s ease-out forwards', boxShadow: `0 0 ${p.size * 2}px ${p.color}` }} />
  ))}</>);
};

const MarketCard = ({ item, likes, wish, views, purchased, onOpen, onLike, onWish, onPurchase, authCheck }) => {
  const [hov, setHov] = React.useState(false);
  const [mediaIdx, setMediaIdx] = React.useState(0);
  const [buyHov, setBuyHov] = React.useState(false);
  const cycleRef = React.useRef(null);
  const iv = views[item.id] || 0;
  const media = item.media || [{ type: 'image', src: item.img }];
  const AVTS = ['https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop'];
  const av = AVTS[item.id % AVTS.length];

  const handleEnter = () => {
    setHov(true);
    if (media.length > 1) {
      let idx = 0;
      cycleRef.current = setInterval(() => { idx = (idx + 1) % media.length; setMediaIdx(idx); }, 1200);
    }
  };
  const handleLeave = () => {
    setHov(false); setMediaIdx(0);
    clearInterval(cycleRef.current);
  };

  const cur = media[mediaIdx];

  return (
    <div style={{ borderRadius: 18, overflow: 'hidden', background: 'rgba(10,12,24,.88)', border: `1px solid ${hov ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.07)'}`, cursor: 'pointer', transition: 'transform .22s,box-shadow .22s,border-color .22s', position: 'relative', boxShadow: hov ? `0 0 0 1px rgba(255,255,255,.08),0 16px 50px rgba(0,0,0,.55),0 0 30px rgba(168,85,247,.08)` : '0 2px 12px rgba(0,0,0,.25)', transform: hov ? 'translateY(-4px)' : 'translateY(0)' }}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}
      onClick={() => onOpen(item)}>
      {/* Media area */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 200 }}>
        {cur.type === 'video' ? (
          <video src={cur.src} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <img src={cur.src} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s', transform: hov ? 'scale(1.05)' : 'scale(1)' }} />
        )}
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(3,7,18,.85) 0%,rgba(3,7,18,.1) 60%,transparent 100%)', opacity: hov ? 1 : 0.4, transition: 'opacity .25s' }} />

        {/* Media dots */}
        {media.length > 1 && (
          <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5 }}>
            {media.map((_, i) => (
              <div key={i} style={{ width: i === mediaIdx ? 14 : 5, height: 5, borderRadius: 3, background: i === mediaIdx ? 'white' : 'rgba(255,255,255,.35)', transition: 'all .3s' }} />
            ))}
          </div>
        )}

        {/* Hover action buttons */}
        <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: 7, opacity: hov ? 1 : 0, transition: 'opacity .2s' }} onClick={e => e.stopPropagation()}>
          <button onClick={e => { e.stopPropagation(); authCheck(() => onLike()); }} style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(3,7,18,.85)', border: `1px solid ${likes[item.id] ? '#ec4899' : 'rgba(255,255,255,.18)'}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all .2s', transform: hov ? 'scale(1)' : 'scale(.8)' }}>
            <Heart size={15} fill={likes[item.id] ? '#ec4899' : 'none'} color={likes[item.id] ? '#ec4899' : 'white'} />
          </button>
          <button onClick={e => { e.stopPropagation(); authCheck(() => onWish()); }} style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(3,7,18,.85)', border: `1px solid ${wish.includes(item.id) ? '#a855f7' : 'rgba(255,255,255,.18)'}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all .2s', transform: hov ? 'scale(1)' : 'scale(.8)' }}>
            <Bookmark size={15} fill={wish.includes(item.id) ? '#a855f7' : 'none'} color={wish.includes(item.id) ? '#a855f7' : 'white'} />
          </button>
        </div>

        {item.badge && <div style={{ position: 'absolute', top: 10, left: 10 }}><Bdg color="#f59e0b" ch={item.badge} /></div>}
        {item.v && <div style={{ position: 'absolute', top: item.badge ? 34 : 10, left: 10, display: 'flex', alignItems: 'center', gap: 3, padding: '2px 7px', background: 'rgba(34,211,238,.14)', border: '1px solid rgba(34,211,238,.4)', borderRadius: 6 }}><Shield size={9} color="#22d3ee" /><span style={{ fontSize: 8, color: '#22d3ee', fontFamily: 'JetBrains Mono' }}>VERIFIED</span></div>}

        {/* Title overlay */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px 10px' }}>
          <div style={{ fontSize: 13, fontWeight: 800, lineHeight: 1.3, textShadow: '0 1px 8px rgba(0,0,0,.8)' }}>{item.title}</div>
          <div style={{ display: 'flex', gap: 5, marginTop: 5, flexWrap: 'wrap' }}>{item.tags.slice(0, 2).map(t => <Bdg key={t} color="#a855f7" ch={t} />)}</div>
        </div>
      </div>

      {/* Card footer */}
      <div style={{ padding: '10px 13px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 9 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <Av src={av} sz={26} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700 }}>{item.crFull}</div>
              <div style={{ fontSize: 9, color: 'var(--mu)' }}>{item.cr}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 10, color: 'var(--mu)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: likes[item.id] ? '#ec4899' : 'var(--mu)' }}>
              <Heart size={10} fill={likes[item.id] ? '#ec4899' : 'none'} color={likes[item.id] ? '#ec4899' : 'var(--mu)'} />{item.lk + (likes[item.id] ? 1 : 0)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Eye size={10} />{(item.views + iv).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Purchase button row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 900, color: '#22d3ee', fontFamily: 'Orbitron' }}>{item.price}</span>
          <div style={{ position: 'relative', flex: 1 }} onMouseEnter={() => setBuyHov(true)} onMouseLeave={() => setBuyHov(false)}>
            <ParticleBurst active={buyHov} purchased={purchased} />
            <button onClick={e => { e.stopPropagation(); authCheck(() => onPurchase(item)); }} className="SB" style={{ width: '100%', padding: '7px', borderRadius: 9, border: 'none', cursor: 'pointer', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', animation: purchased ? 'purchaseGlow 1.8s ease infinite' : 'none', background: purchased ? 'linear-gradient(135deg,#10b981,#22d3ee)' : undefined }}>
              {purchased ? '✓ Owned' : 'Buy Vibe'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



/* ─── AUTH MODAL ────────────────────────────────────────────── */
/* ─── MARKET ──────────────────────────────────────────────── */
const DESIGNERS_DATA = [
  { name: '@flux.dev', full: 'Alex Flux', role: 'React • AI', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 14, followers: '2.1k', tags: ['React', 'AI'] },
  { name: '@voidcraft', full: 'Void Studio', role: 'Next.js • Design Systems', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: false, projects: 9, followers: '1.4k', tags: ['Next.js', 'CSS'] },
  { name: '@cryptoui', full: 'Crypto UX', role: 'Three.js • WebGL', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 22, followers: '5.8k', tags: ['Three.js', 'WebGL'] },
  { name: '@quantumux', full: 'Quantum UX', role: 'D3.js • Analytics', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 7, followers: '892', tags: ['D3.js'] },
  { name: '@audiodna', full: 'Audio DNA', role: 'Audio • React Native', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 11, followers: '1.9k', tags: ['Audio', 'Mobile'] },
  { name: '@ghostdev', full: 'Ghost Dev', role: 'Auth • Security', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 5, followers: '920', tags: ['Auth', 'Node.js'] },
  { name: '@spectra.io', full: 'Spectra Studio', role: 'Components • TypeScript', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 8, followers: '1.1k', tags: ['React', 'TypeScript'] },
  { name: '@miragelab', full: 'Mirage Lab', role: 'Email • Marketing', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 6, followers: '654', tags: ['Email', 'React'] },
  // Ghost Creators
  { name: '@prismdev', full: 'Prism Dev', role: 'Color Systems • CSS', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 4, followers: '1.2k', tags: ['Color Systems', 'CSS'] },
  { name: '@sentinelops', full: 'Sentinel Ops', role: 'DevOps • Monitoring', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: false, projects: 8, followers: '2.3k', tags: ['DevOps', 'Monitoring'] },
  { name: '@forgecli', full: 'Forge CLI', role: 'CLI • Node.js', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 5, followers: '870', tags: ['CLI', 'Node.js'] },
  { name: '@duskstudio', full: 'Dusk Studio', role: 'React • Admin', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.1k', tags: ['React', 'Admin'] },
  { name: '@echodev', full: 'Echo Dev', role: 'Realtime • WebSocket', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 6, followers: '990', tags: ['Realtime', 'WebSocket'] },
  { name: '@fluxforms', full: 'Flux Forms', role: 'Forms • Validation', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 9, followers: '1.8k', tags: ['Forms', 'Validation'] },
  { name: '@terracss', full: 'Terra CSS', role: 'CSS • Framework', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 14, followers: '4.2k', tags: ['CSS', 'Framework'] },
  { name: '@nyxui', full: 'Nyx UI', role: 'Dark Mode • React', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 7, followers: '2.0k', tags: ['Dark Mode', 'React'] },
  { name: '@qstate', full: 'Q State', role: 'State Management', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 4, followers: '760', tags: ['State Management'] },
  { name: '@helixapi', full: 'Helix API', role: 'API • TypeScript', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.7k', tags: ['API', 'TypeScript'] },
  { name: '@mistui', full: 'Mist UI', role: 'UI Library • React', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 8, followers: '1.5k', tags: ['UI Library', 'React'] },
  { name: '@pulsedev', full: 'Pulse Dev', role: 'Webhooks • Node.js', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 5, followers: '840', tags: ['Webhooks', 'Node.js'] },
  { name: '@solarapp', full: 'Solar App', role: 'SaaS • Auth', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 16, followers: '5.4k', tags: ['SaaS', 'Auth'] },
  { name: '@lunarchart', full: 'Lunar Chart', role: 'Charts • D3.js', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: false, projects: 9, followers: '1.9k', tags: ['Charts', 'D3.js'] },
  { name: '@arclib', full: 'Arc Lib', role: 'Drag & Drop', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 4, followers: '680', tags: ['Drag & Drop'] },
  { name: '@vertexlab', full: 'Vertex Lab', role: 'Three.js • WebGL', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 12, followers: '3.8k', tags: ['Three.js', 'WebGL'] },
  { name: '@stormdev', full: 'Storm Dev', role: 'State Machines', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 5, followers: '920', tags: ['State Machines'] },
  { name: '@opaldev', full: 'Opal Dev', role: 'File Management', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.3k', tags: ['File Management'] },
  { name: '@cobaltops', full: 'Cobalt Ops', role: 'CI/CD • DevOps', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 8, followers: '2.1k', tags: ['CI/CD', 'DevOps'] },
  { name: '@irisdesign', full: 'Iris Design', role: 'Icons • SVG', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 19, followers: '6.1k', tags: ['Icons', 'SVG'] },
  { name: '@cascadeui', full: 'Cascade UI', role: 'Animation • Framer', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.5k', tags: ['Animation', 'Framer'] },
  { name: '@driftapp', full: 'Drift App', role: 'Realtime • Collab', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: false, projects: 14, followers: '4.0k', tags: ['Realtime', 'Collab'] },
  { name: '@nimbusui', full: 'Nimbus UI', role: 'Cloud • Infrastructure', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.7k', tags: ['Cloud', 'Infrastructure'] },
  { name: '@emberdev', full: 'Ember Dev', role: 'CMS • Next.js', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 13, followers: '3.4k', tags: ['CMS', 'Next.js'] },
  { name: '@flaredev', full: 'Flare Dev', role: 'PWA • Notifications', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 6, followers: '780', tags: ['PWA', 'Notifications'] },
  { name: '@praxisdev', full: 'Praxis Dev', role: 'Testing • QA', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 5, followers: '1.0k', tags: ['Testing', 'QA'] },
  { name: '@vaultui', full: 'Vault UI', role: 'Security • Auth', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 9, followers: '2.2k', tags: ['Security', 'Auth'] },
  { name: '@mosaicui', full: 'Mosaic UI', role: 'CSS • Grid', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.6k', tags: ['CSS', 'Grid'] },
  { name: '@sparktools', full: 'Spark Tools', role: 'CLI • Scaffolding', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 4, followers: '640', tags: ['CLI', 'Scaffolding'] },
  { name: '@ridgedesign', full: 'Ridge Design', role: 'Themes • VSCode', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.2k', tags: ['Themes', 'VSCode'] },
  { name: '@sabledev', full: 'Sable Dev', role: 'Markdown • Editors', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 6, followers: '890', tags: ['Markdown', 'Editors'] },
  { name: '@apexdev', full: 'Apex Dev', role: 'Performance • Metrics', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.8k', tags: ['Performance', 'Metrics'] },
  { name: '@galetools', full: 'Gale Tools', role: 'Analysis • CLI', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 4, followers: '570', tags: ['Analysis', 'CLI'] },
  { name: '@aetherui', full: 'Aether UI', role: 'AR • WebXR', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 8, followers: '4.9k', tags: ['AR', 'WebXR'] },
  { name: '@runedev', full: 'Rune Dev', role: 'Security • Crypto', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 6, followers: '1.1k', tags: ['Security', 'Crypto'] },
  { name: '@echosocial', full: 'Echo Social', role: 'Social • Feed', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 9, followers: '2.0k', tags: ['Social', 'Feed'] },
  { name: '@tidalui', full: 'Tidal UI', role: 'Scroll • Animation', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 5, followers: '940', tags: ['Scroll', 'Animation'] },
  { name: '@cratertools', full: 'Crater Tools', role: 'Database • Admin', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: false, projects: 7, followers: '1.4k', tags: ['Database', 'Admin'] },
  { name: '@lyradev', full: 'Lyra Dev', role: 'Audio • Player', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 6, followers: '1.2k', tags: ['Audio', 'Player'] },
  { name: '@zenithdesign', full: 'Zenith Design', role: 'Typography • CSS', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: false, projects: 10, followers: '2.6k', tags: ['Typography', 'CSS'] },
  { name: '@phaseops', full: 'Phase Ops', role: 'CI/CD • Docker', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 8, followers: '1.9k', tags: ['CI/CD', 'Docker'] },
  { name: '@haloui', full: 'Halo UI', role: 'Loading • Skeleton', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 7, followers: '2.3k', tags: ['Loading', 'Skeleton'] },
  { name: '@sigilweb3', full: 'Sigil Web3', role: 'NFT • Web3', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 11, followers: '3.5k', tags: ['NFT', 'Web3'] },
  { name: '@novaweb3', full: 'Nova Web3', role: 'Wallet • Ethereum', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.9k', tags: ['Wallet', 'Ethereum'] },
  { name: '@onyxdev', full: 'Onyx Dev', role: 'Tables • TypeScript', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 6, followers: '1.0k', tags: ['Tables', 'TypeScript'] },
  { name: '@strataui', full: 'Strata UI', role: 'Layout • Engine', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 8, followers: '1.8k', tags: ['Layout', 'Engine'] },
  { name: '@blazedev', full: 'Blaze Dev', role: 'Performance • Speed', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 7, followers: '2.1k', tags: ['Performance', 'Speed'] },
  { name: '@cyandev', full: 'Cyan Dev', role: 'Chat • SDK', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: false, projects: 6, followers: '1.3k', tags: ['Chat', 'SDK'] },
  { name: '@miragetools', full: 'Mirage Tools', role: 'Image • Optimization', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 5, followers: '980', tags: ['Image', 'Optimization'] },
  { name: '@axisdata', full: 'Axis Data', role: 'Pipelines • Python', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 12, followers: '4.1k', tags: ['Pipelines', 'Python'] },
  { name: '@specterdev', full: 'Specter Dev', role: 'Debug • DevTools', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 5, followers: '740', tags: ['Debug', 'DevTools'] },
  { name: '@quartzdev', full: 'Quartz Dev', role: 'Blog • Platform', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.0k', tags: ['Blog', 'Platform'] },
  { name: '@duneui', full: 'Dune UI', role: 'Mobile • Gestures', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 8, followers: '1.7k', tags: ['Mobile', 'Gestures'] },
  { name: '@lyricai', full: 'Lyric AI', role: 'AI • Content', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 14, followers: '4.6k', tags: ['AI', 'Content'] },
  { name: '@matrixdev', full: 'Matrix Dev', role: 'Canvas • Creative', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 6, followers: '1.1k', tags: ['Canvas', 'Creative'] },
  { name: '@orbitdev', full: 'Orbit Dev', role: 'Graphs • Analytics', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.7k', tags: ['Graphs', 'Analytics'] },
  { name: '@prismdesign', full: 'Prism Design', role: 'Design Tokens', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 8, followers: '1.9k', tags: ['Design Tokens'] },
  { name: '@stellarui', full: 'Stellar UI', role: 'Maps • Location', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: false, projects: 7, followers: '1.5k', tags: ['Maps', 'Location'] },
  { name: '@eclipseui', full: 'Eclipse UI', role: 'Dark Mode • UX', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.3k', tags: ['Dark Mode', 'UX'] },
  { name: '@zephyrui', full: 'Zephyr UI', role: 'GSAP • Animation', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.5k', tags: ['GSAP', 'Animation'] },
  { name: '@carbondesign', full: 'Carbon Design', role: 'Design System', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 13, followers: '4.4k', tags: ['Design System'] },
  { name: '@thunderdev', full: 'Thunder Dev', role: 'API • Gateway', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 10, followers: '3.1k', tags: ['API', 'Gateway'] },
  { name: '@jadedev', full: 'Jade Dev', role: 'Markdown • MDX', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 5, followers: '870', tags: ['Markdown', 'MDX'] },
  { name: '@cobaltdev', full: 'Cobalt Dev', role: 'Code • Snippets', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: false, projects: 6, followers: '980', tags: ['Code', 'Snippets'] },
  { name: '@frostui', full: 'Frost UI', role: 'Components • CSS', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.2k', tags: ['Components', 'CSS'] },
  { name: '@novamail', full: 'Nova Mail', role: 'Newsletter • Email', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.6k', tags: ['Newsletter', 'Email'] },
  { name: '@steeldev', full: 'Steel Dev', role: 'CRUD • Generator', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 11, followers: '3.0k', tags: ['CRUD', 'Generator'] },
  { name: '@pixeltools', full: 'Pixel Tools', role: 'Icons • SVG Tool', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 8, followers: '2.4k', tags: ['Icons', 'SVG Tool'] },
  { name: '@neonui', full: 'Neon UI', role: 'Progress • Animation', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 5, followers: '840', tags: ['Progress', 'Animation'] },
  { name: '@jadecal', full: 'Jade Cal', role: 'Calendar • Events', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.7k', tags: ['Calendar', 'Events'] },
  { name: '@silverdata', full: 'Silver Data', role: 'Analytics • SDK', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 12, followers: '3.8k', tags: ['Analytics', 'SDK'] },
  { name: '@fluxsearch', full: 'Flux Search', role: 'Search • Algolia', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.1k', tags: ['Search', 'Algolia'] },
  { name: '@obsidianui', full: 'Obsidian UI', role: 'Portfolio • Next.js', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 6, followers: '1.3k', tags: ['Portfolio', 'Next.js'] },
  { name: '@quasardev', full: 'Quasar Dev', role: 'Email • SDK', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 5, followers: '920', tags: ['Email', 'SDK'] },
  { name: '@vegadev', full: 'Vega Dev', role: 'Charts • D3.js', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.9k', tags: ['Charts', 'D3.js'] },
  { name: '@amberauth', full: 'Amber Auth', role: 'Auth • Dashboard', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 8, followers: '1.8k', tags: ['Auth', 'Dashboard'] },
  { name: '@crystalpay', full: 'Crystal Pay', role: 'Stripe • Payments', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 13, followers: '4.2k', tags: ['Stripe', 'Payments'] },
  { name: '@stonedocs', full: 'Stone Docs', role: 'Documentation', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.5k', tags: ['Documentation'] },
  { name: '@tideui', full: 'Tide UI', role: 'CSS • Grid', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 5, followers: '760', tags: ['CSS', 'Grid'] },
  { name: '@cometdev', full: 'Comet Dev', role: 'SaaS • React', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 16, followers: '5.2k', tags: ['SaaS', 'React'] },
  { name: '@ghoststudio', full: 'Ghost Studio', role: 'CMS • Themes', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 8, followers: '1.9k', tags: ['CMS', 'Themes'] },
  { name: '@emberforms', full: 'Ember Forms', role: 'Forms • Zod', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 6, followers: '1.1k', tags: ['Forms', 'Zod'] },
  { name: '@prismtools', full: 'Prism Tools', role: 'Dev Env • Docker', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.8k', tags: ['Dev Env', 'Docker'] },
  { name: '@abyssui', full: 'Abyss UI', role: 'Dark Mode • React', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.4k', tags: ['Dark Mode', 'React'] },
  { name: '@forgetest', full: 'Forge Test', role: 'Testing • Vitest', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 7, followers: '1.3k', tags: ['Testing', 'Vitest'] },
  { name: '@meridiandev', full: 'Meridian Dev', role: 'Maps • Mapbox', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.1k', tags: ['Maps', 'Mapbox'] },
  { name: '@arcext', full: 'Arc Ext', role: 'Browser • Extensions', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 5, followers: '940', tags: ['Browser', 'Extensions'] },
  { name: '@novadesign', full: 'Nova Design', role: 'Figma • Prototype', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: false, projects: 9, followers: '2.3k', tags: ['Figma', 'Prototype'] },
  { name: '@glacierdev', full: 'Glacier Dev', role: 'State • Sync', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 6, followers: '1.0k', tags: ['State', 'Sync'] },
  { name: '@ravenui', full: 'Raven UI', role: 'Dark • Components', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 8, followers: '2.0k', tags: ['Dark', 'Components'] },
  { name: '@slategen', full: 'Slate Gen', role: 'Admin • Generator', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 12, followers: '3.6k', tags: ['Admin', 'Generator'] },
  { name: '@pixelanim', full: 'Pixel Anim', role: 'Canvas • Animation', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.7k', tags: ['Canvas', 'Animation'] },
  { name: '@coraldev', full: 'Coral Dev', role: 'Images • CDN', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.5k', tags: ['Images', 'CDN'] },
  { name: '@echoweb', full: 'Echo Web', role: 'Webhooks • Platform', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: false, projects: 13, followers: '4.0k', tags: ['Webhooks', 'Platform'] },
  { name: '@helixdb', full: 'Helix DB', role: 'Graph • Database', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.4k', tags: ['Graph', 'Database'] },
  { name: '@steelops', full: 'Steel Ops', role: 'DevOps • Monitor', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 10, followers: '3.0k', tags: ['DevOps', 'Monitor'] },
  { name: '@jadeshop', full: 'Jade Shop', role: 'E-commerce • Next.js', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 9, followers: '2.2k', tags: ['E-commerce', 'Next.js'] },
  { name: '@silverdev', full: 'Silver Dev', role: 'WebSocket • Node.js', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.6k', tags: ['WebSocket', 'Node.js'] },
  { name: '@carbonide', full: 'Carbon IDE', role: 'VSCode • Themes', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 14, followers: '5.1k', tags: ['VSCode', 'Themes'] },
  { name: '@quantumarch', full: 'Quantum Arch', role: 'Microservices', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 12, followers: '4.3k', tags: ['Microservices'] }
];
const PAGE_SIZE = 8;
const CATS = [
  { id: 'Discover', icon: Sparkles }, { id: 'UI Templates', icon: Layers }, { id: 'React', icon: Code },
  { id: 'AI Tools', icon: Rocket }, { id: 'Dev Tools', icon: GitBranch }, { id: 'Design Systems', icon: LayoutGrid },
  { id: 'Mobile', icon: Wifi }, { id: 'Animation', icon: Play },
];
const Market = ({ onBriefPost }) => {
  const [tab, setTab] = useState('shots');
  const [fil, setFil] = useState('Discover');
  const [search, setSearch] = useState('');
  const [wish, setWish] = useState([]);
  const [likes, setLikes] = useState({});
  const [views, setViews] = useState({});
  const [purchased, setPurchased] = useState([]);
  const [toast, setToast] = useState(null);
  const [detail, setDetail] = useState(null);
  const [followed, setFollowed] = useState({});
  const [featured, setFeatured] = useState(0);
  const [page, setPage] = useState(1);
  const [authed, setAuthed] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [briefText, setBriefText] = useState('');
  const [showBrief, setShowBrief] = useState(false);
  const [showPostProduct, setShowPostProduct] = useState(false);
  const [showGetInTouch, setShowGetInTouch] = useState(null);
  const [profileUser, setProfileUser] = useState(null);
  const featRef = useRef(null);

  useEffect(() => {
    featRef.current = setInterval(() => setFeatured(i => (i + 1) % Math.min(MKT.length, 8)), 4200);
    return () => clearInterval(featRef.current);
  }, []);

  const showToast = (msg, color = '#22d3ee') => { setToast({ msg, color }); setTimeout(() => setToast(null), 2200); };
  const openDetail = (item) => { setDetail(item); setViews(v => ({ ...v, [item.id]: (v[item.id] || 0) + 1 })); };
  const handlePurchase = (item) => {
    if (purchased.includes(item.id)) { showToast('Already in your library ✓', '#10b981'); return; }
    setPurchased(p => [...p, item.id]); showToast(`✓ ${item.title} purchased!`, '#10b981');
  };
  const authCheck = (action) => { if (authed) { action(); } else { setShowAuth(true); } };

  const postBrief = () => {
    if (!briefText.trim()) return;
    if (!authed) { setShowAuth(true); return; }
    onBriefPost && onBriefPost(briefText);
    showToast('Brief posted to Community! ✓', '#10b981');
    setBriefText(''); setShowBrief(false);
  };

  const filtered = MKT.filter(item => {
    const mf = fil === 'Discover'
      || (fil === 'UI Templates' && item.tags.some(t => ['Dashboard', 'Design System', 'Chat', 'Components', 'Admin'].includes(t)))
      || (fil === 'React' && item.tags.some(t => t.includes('React')))
      || (fil === 'AI Tools' && item.tags.some(t => t.includes('AI') || t.includes('GPT')))
      || (fil === 'Dev Tools' && item.tags.some(t => ['Next.js', 'D3.js', 'SDK', 'Auth', 'Maps', 'Node.js'].includes(t)))
      || (fil === 'Design Systems' && item.tags.includes('Design System'))
      || (fil === 'Mobile' && item.tags.some(t => ['Audio', 'Mobile', 'Onboarding'].includes(t)))
      || (fil === 'Animation' && item.tags.some(t => ['Three.js', 'WebGL', 'Animation'].includes(t)));
    const ms = !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return mf && ms;
  });
  const base = search || fil !== 'Discover' ? filtered : MKT;
  const paged = base.slice(0, page * PAGE_SIZE);
  const hasMore = paged.length < base.length;

  const feat = MKT[featured % MKT.length];

  if (detail) return (
    <>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onAuth={() => { setAuthed(true); setShowAuth(false); }} />}
      <MarketDetail item={detail} onBack={() => setDetail(null)}
        onPurchase={handlePurchase} purchased={purchased.includes(detail.id)}
        onBookmark={() => authCheck(() => setWish(w => w.includes(detail.id) ? w.filter(x => x !== detail.id) : [...w, detail.id]))}
        bookmarked={wish.includes(detail.id)}
        onLike={() => authCheck(() => setLikes(l => ({ ...l, [detail.id]: !l[detail.id] })))}
        liked={!!likes[detail.id]} />
    </>
  );

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        {toast && <Toast msg={toast.msg} color={toast.color} />}
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} onAuth={() => { setAuthed(true); setShowAuth(false); showToast('Welcome to VibeWorld! ✓', '#10b981'); }} />}
        {showBrief && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 350, background: 'rgba(0,0,0,.7)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={() => setShowBrief(false)}>
            <div style={{ background: 'rgba(8,12,26,.97)', borderRadius: 22, border: '1px solid rgba(236,72,153,.2)', width: '100%', maxWidth: 520, padding: '28px', animation: 'sU .3s ease' }} onClick={e => e.stopPropagation()}>
              <h3 className="O" style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>Post a Project Brief</h3>
              <p style={{ fontSize: 12, color: 'var(--mu)', marginBottom: 16 }}>Your brief will be posted to the VibeWorld Community so creators can find and take on your project.</p>
              <textarea value={briefText} onChange={e => setBriefText(e.target.value)} placeholder="Describe your project... What are you building? What skills do you need? What's the budget range?" rows={5} style={{ width: '100%', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '12px 14px', color: 'white', fontSize: 13, fontFamily: 'Rajdhani', resize: 'vertical', outline: 'none', lineHeight: 1.6, marginBottom: 14 }} />
              <div style={{ display: 'flex', gap: 9 }}>
                <button onClick={() => setShowBrief(false)} style={{ flex: 1, padding: '10px', borderRadius: 10, border: '1px solid rgba(255,255,255,.1)', background: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700 }}>Cancel</button>
                <button onClick={postBrief} className="SB"
                  style={{ flex: 2, padding: '10px', borderRadius: 10, border: 'none', cursor: 'pointer', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Orbitron', letterSpacing: '.05em', position: 'relative', overflow: 'hidden', transition: 'transform .15s' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    const r = document.createElement('span');
                    const rect = e.currentTarget.getBoundingClientRect();
                    r.style.cssText = `position:absolute;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,.2);transform:translate(-50%,-50%) scale(0);animation:rippleEffect .65s ease-out forwards;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;pointer-events:none`;
                    e.currentTarget.appendChild(r); setTimeout(() => r.remove(), 650);
                  }}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  onMouseDown={e => e.currentTarget.style.transform = 'scale(.97)'}
                  onMouseUp={e => e.currentTarget.style.transform = 'scale(1.03)'}>
                  Post to Community →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── HERO ────────────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 420, position: 'relative' }}>
          <div style={{ padding: '52px 32px 44px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 12px', borderRadius: 999, background: 'rgba(236,72,153,.1)', border: '1px solid rgba(236,72,153,.25)', marginBottom: 18, alignSelf: 'flex-start' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ec4899', animation: 'purchaseGlow 1.5s infinite' }} />
              <span style={{ fontSize: 10, color: '#ec4899', fontFamily: 'JetBrains Mono', fontWeight: 700, letterSpacing: '.08em' }}>{MKT.length}+ PROJECTS LIVE</span>
            </div>
            <h1 style={{ fontSize: 'clamp(24px,3.8vw,50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 16, letterSpacing: '-.02em' }}>
              Discover the<br />
              <span style={{ background: 'linear-gradient(135deg,#ec4899 0%,#a855f7 50%,#22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>World's Top</span><br />
              Vibe Coders
            </h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.8, marginBottom: 24, maxWidth: 380 }}>
              Production-ready templates, components & dev tools — built by the sharpest developers in the VibeVerse.
            </p>
            <div style={{ display: 'flex', gap: 3, marginBottom: 18, background: 'rgba(255,255,255,.05)', borderRadius: 11, padding: 4, alignSelf: 'flex-start' }}>
              {[['shots', Layers, 'Projects'], ['designers', Users, 'Creators'], ['services', Sparkles, 'Services']].map(([id, Icon, l]) => (
                <button key={id} onClick={() => setTab(id)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 11, fontFamily: 'Orbitron', letterSpacing: '.04em', transition: 'all .2s', background: tab === id ? 'rgba(255,255,255,.13)' : 'transparent', color: tab === id ? 'white' : 'rgba(255,255,255,.35)' }}>
                  <Icon size={12} />{l}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,.055)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '10px 16px', marginBottom: 16, maxWidth: 460 }}>
              <Search size={14} color="rgba(255,255,255,.3)" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search templates, frameworks, tools..." style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: 'white', fontSize: 12, fontFamily: 'Rajdhani' }} />
              {search && <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.3)', fontSize: 13 }}>✕</button>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,.28)', fontFamily: 'JetBrains Mono' }}>Popular:</span>
              {['dashboard', 'landing page', 'auth UI', 'AI chat', 'dark mode', 'design system'].map(t => (
                <button key={t} onClick={() => setSearch(t)} style={{ padding: '3px 10px', borderRadius: 999, border: '1px solid rgba(255,255,255,.09)', background: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.5)', fontSize: 10, fontFamily: 'Rajdhani', fontWeight: 600, transition: 'all .15s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(236,72,153,.4)'; e.currentTarget.style.color = '#ec4899'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.09)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)'; }}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: 420 }} onClick={() => openDetail(feat)}>
            <img src={feat.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all .7s ease' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg,rgba(3,7,18,.75) 0%,transparent 55%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(3,7,18,.9) 0%,transparent 55%)' }} />
            <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(3,7,18,.78)', backdropFilter: 'blur(16px)', borderRadius: 999, padding: '6px 13px 6px 6px', border: '1px solid rgba(255,255,255,.1)' }}>
              <Av src={DESIGNERS_DATA.find(d => d.name === feat.cr)?.av || DESIGNERS_DATA[0].av} sz={24} on={feat.available} />
              <span style={{ fontSize: 11, fontWeight: 700 }}>{feat.crFull}</span>
              {feat.available && <span style={{ fontSize: 8, color: '#10b981', fontFamily: 'JetBrains Mono' }}>● AVAIL</span>}
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px 18px' }}>
              <div style={{ display: 'flex', gap: 5, marginBottom: 8, flexWrap: 'wrap' }}>{feat.tags.slice(0, 3).map(t => <Bdg key={t} color="#22d3ee" ch={t} />)}{feat.badge && <Bdg color="#f59e0b" ch={feat.badge} />}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 3, lineHeight: 1.2 }}>{feat.title}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)' }}>{feat.cr} · {feat.price}</div>
                </div>
                <div style={{ display: 'flex', gap: 5 }}>
                  {Array.from({ length: Math.min(MKT.length, 8) }).map((_, i) => (
                    <div key={i} onClick={e => { e.stopPropagation(); setFeatured(i); }} style={{ width: featured === i ? 18 : 6, height: 6, borderRadius: 3, background: featured === i ? '#ec4899' : 'rgba(255,255,255,.25)', cursor: 'pointer', transition: 'all .3s' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ACTION BANNER ───────────────────────────────── */}
        <div style={{ margin: '16px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {/* Post Brief half */}
          <div style={{ borderRadius: 14, border: '1px solid rgba(236,72,153,.15)', background: 'rgba(236,72,153,.04)', padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <FileText size={18} color="#ec4899" style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2, fontFamily: 'Rajdhani' }}>Post a Project Brief</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.38)', lineHeight: 1.4 }}>Describe what you need — get proposals from top vibe coders.</div>
            </div>
            <button onClick={() => setShowBrief(true)}
              style={{ padding: '7px 16px', borderRadius: 9, border: '1px solid rgba(236,72,153,.4)', background: 'rgba(236,72,153,.1)', cursor: 'pointer', color: '#ec4899', fontSize: 11, fontWeight: 700, fontFamily: 'Orbitron', flexShrink: 0, position: 'relative', overflow: 'hidden', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(236,72,153,.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; const r = document.createElement('span'); const rect = e.currentTarget.getBoundingClientRect(); r.style.cssText = `position:absolute;width:120px;height:120px;border-radius:50%;background:rgba(236,72,153,.25);transform:translate(-50%,-50%) scale(0);animation:rippleEffect .5s ease-out forwards;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;pointer-events:none`; e.currentTarget.appendChild(r); setTimeout(() => r.remove(), 500); }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(236,72,153,.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Post Brief
            </button>
          </div>
          {/* List Product half */}
          <div style={{ borderRadius: 14, border: '1px solid rgba(34,211,238,.15)', background: 'rgba(34,211,238,.04)', padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <Package size={18} color="#22d3ee" style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2, fontFamily: 'Rajdhani' }}>List Your Product</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.38)', lineHeight: 1.4 }}>Sell your templates, tools & components to the VibeVerse.</div>
            </div>
            <button onClick={() => authCheck(() => setShowPostProduct(true))}
              style={{ padding: '7px 16px', borderRadius: 9, border: '1px solid rgba(34,211,238,.4)', background: 'rgba(34,211,238,.1)', cursor: 'pointer', color: '#22d3ee', fontSize: 11, fontWeight: 700, fontFamily: 'Orbitron', flexShrink: 0, position: 'relative', overflow: 'hidden', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; const r = document.createElement('span'); const rect = e.currentTarget.getBoundingClientRect(); r.style.cssText = `position:absolute;width:120px;height:120px;border-radius:50%;background:rgba(34,211,238,.25);transform:translate(-50%,-50%) scale(0);animation:rippleEffect .5s ease-out forwards;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;pointer-events:none`; e.currentTarget.appendChild(r); setTimeout(() => r.remove(), 500); }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              List Product
            </button>
          </div>
        </div>

        {/* ── CONTENT ───────────────────────────────────── */}
        <div style={{ padding: '6px 28px 80px' }}>
          {tab === 'shots' && (
            <>
              <div style={{ display: 'flex', gap: 1, marginBottom: 22, borderBottom: '1px solid rgba(255,255,255,.07)', overflowX: 'auto' }}>
                {CATS.map(({ id, icon: Icon }) => (
                  <button key={id} onClick={() => { setFil(id); setPage(1); }} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 12, fontFamily: 'Rajdhani', transition: 'all .2s', whiteSpace: 'nowrap', background: 'transparent', color: fil === id ? 'white' : 'rgba(255,255,255,.38)', borderBottom: `2px solid ${fil === id ? '#ec4899' : 'transparent'}`, marginBottom: -1 }}>
                    <Icon size={13} />{id}
                  </button>
                ))}
              </div>

              {/* 4-col responsive grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: 16, marginBottom: 28 }}>
                {paged.map(item => (
                  <MarketCard key={item.id} item={item} likes={likes} wish={wish} views={views}
                    purchased={purchased.includes(item.id)}
                    onOpen={openDetail}
                    onLike={() => authCheck(() => setLikes(l => ({ ...l, [item.id]: !l[item.id] })))}
                    onWish={() => authCheck(() => setWish(w => w.includes(item.id) ? w.filter(x => x !== item.id) : [...w, item.id]))}
                    onPurchase={handlePurchase}
                    authCheck={authCheck} />
                ))}
                {paged.length === 0 && (
                  <div style={{ gridColumn: '1/-1', padding: '80px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(168,85,247,.1)', border: '1px solid rgba(168,85,247,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fl 2s ease-in-out infinite', boxShadow: '0 0 30px rgba(168,85,247,.2)' }}>
                      <Search size={28} color="#a855f7" strokeWidth={1.5} />
                    </div>
                    <div className="O" style={{ fontSize: 16, fontWeight: 800, background: 'linear-gradient(135deg,#a855f7,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>No projects found</div>
                    <div style={{ fontSize: 12, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>Try a different search or category</div>
                    <button onClick={() => { setSearch(''); setFil('Discover'); }} style={{ padding: '8px 22px', borderRadius: 9, border: '1px solid rgba(168,85,247,.4)', background: 'rgba(168,85,247,.1)', cursor: 'pointer', color: '#a855f7', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani' }}>Clear filters</button>
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                {page > 1 && (
                  <button onClick={() => setPage(p => Math.max(1, p - 1))} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 20px', borderRadius: 10, border: '1px solid rgba(255,255,255,.12)', background: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.6)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700, transition: 'all .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.borderColor = 'rgba(236,72,153,.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; }}>
                    <RainbowArrow size={13} /> Previous
                  </button>
                )}
                {hasMore && (
                  <button onClick={() => setPage(p => p + 1)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 36px', borderRadius: 12, border: '1px solid rgba(255,255,255,.12)', background: 'rgba(255,255,255,.04)', cursor: 'pointer', color: 'rgba(255,255,255,.75)', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .25s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(236,72,153,.12)'; e.currentTarget.style.borderColor = 'rgba(236,72,153,.4)'; e.currentTarget.style.color = '#ec4899'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; e.currentTarget.style.color = 'rgba(255,255,255,.75)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <span>Load more vibe ✦</span>
                    <span style={{ fontSize: 9, fontFamily: 'JetBrains Mono', opacity: .6, marginLeft: 4 }}>pg {page}/{Math.ceil(base.length / PAGE_SIZE)}</span>
                  </button>
                )}
                {!hasMore && paged.length > 0 && (
                  <div style={{ padding: '11px 24px', borderRadius: 12, border: '1px solid rgba(255,255,255,.06)', background: 'rgba(255,255,255,.02)', fontSize: 12, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>You've seen all {base.length} projects ✓</div>
                )}
              </div>
            </>
          )}

          {tab === 'designers' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16, paddingTop: 8 }}>
              {DESIGNERS_DATA.map(d => {
                const dUser = { av: d.av, name: d.full, full: d.full, handle: d.name, role: d.role, on: d.on, projects: d.projects, followers: d.followers, tags: d.tags, color: '#a855f7' };
                const isFollowed = !!followed[d.name];
                return (
                  <div key={d.name} className="gl" style={{ borderRadius: 18, padding: 22, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12, transition: 'transform .22s,box-shadow .22s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(168,85,247,.2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}>
                    <div onClick={() => setProfileUser(dUser)} style={{ cursor: 'pointer', transition: 'transform .18s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                      <Av src={d.av} sz={72} on={d.on} />
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 800, cursor: 'pointer', transition: 'all .2s', display: 'flex', alignItems: 'center', gap: 5 }}
                      onClick={() => setProfileUser(dUser)}
                      onMouseEnter={e => { e.currentTarget.style.color = '#a855f7'; e.currentTarget.style.textDecoration = 'underline'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.textDecoration = 'none'; }}>
                      {d.full} <ExternalLink size={11} color="#a855f7" style={{ opacity: 0.6 }} />
                    </div>
                    <div style={{ fontSize: 11, color: '#a855f7', fontWeight: 600, fontFamily: 'JetBrains Mono' }}>{d.role}</div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>{d.tags.map(t => <Bdg key={t} color="#a855f7" ch={t} />)}</div>
                    <div style={{ display: 'flex', gap: 16, padding: '10px 0', borderTop: '1px solid var(--br)', borderBottom: '1px solid var(--br)', width: '100%', justifyContent: 'center' }}>
                      <div><div className="O" style={{ fontSize: 17, fontWeight: 900, color: '#22d3ee' }}>{d.projects}</div><div style={{ fontSize: 9, color: 'var(--mu)' }}>Projects</div></div>
                      <div style={{ width: 1, background: 'var(--br)' }} />
                      <div><div className="O" style={{ fontSize: 17, fontWeight: 900, color: '#a855f7' }}>{d.followers}</div><div style={{ fontSize: 9, color: 'var(--mu)' }}>Followers</div></div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, width: '100%' }}>
                      {/* Follow button */}
                      <button
                        type="button"
                        onClick={e => { e.stopPropagation(); setFollowed(f => ({ ...f, [d.name]: !f[d.name] })); showToast(!isFollowed ? `Following ${d.full} ✓` : `Unfollowed ${d.full}`, '#10b981'); }}
                        style={{ flex: 1, padding: '8px 10px', borderRadius: 10, border: `1px solid ${isFollowed ? '#10b981' : 'rgba(255,255,255,.2)'}`, background: isFollowed ? 'rgba(16,185,129,.14)' : 'rgba(255,255,255,.04)', cursor: 'pointer', color: isFollowed ? '#10b981' : 'rgba(255,255,255,.75)', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, transition: 'all .22s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = isFollowed ? 'rgba(16,185,129,.25)' : 'rgba(168,85,247,.15)'; e.currentTarget.style.borderColor = isFollowed ? '#10b981' : 'rgba(168,85,247,.6)'; e.currentTarget.style.color = isFollowed ? '#10b981' : '#c084fc'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(168,85,247,.22)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = isFollowed ? 'rgba(16,185,129,.14)' : 'rgba(255,255,255,.04)'; e.currentTarget.style.borderColor = isFollowed ? '#10b981' : 'rgba(255,255,255,.2)'; e.currentTarget.style.color = isFollowed ? '#10b981' : 'rgba(255,255,255,.75)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}>
                        {isFollowed ? <><Check size={11} />Following</> : <><UserPlus size={11} />Follow</>}
                      </button>
                      {/* Get in Touch button */}
                      <button
                        type="button"
                        onClick={e => { e.stopPropagation(); setShowGetInTouch({ cr: d.name, crFull: d.full, price: 'Negotiable', serviceItems: null, av: d.av }); }}
                        className="SB"
                        style={{ flex: 1, padding: '8px', borderRadius: 10, border: 'none', cursor: 'pointer', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, transition: 'transform .2s,box-shadow .2s,filter .2s' }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(34,211,238,.45)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.filter = ''; }}>
                        <MessageSquare size={11} />Get in Touch
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {tab === 'services' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 18, paddingTop: 8 }}>
              {[
                { t: 'Custom Dashboard Build', desc: 'End-to-end dashboard design + React from Figma to production.', price: 'From $500', tags: ['React', 'Tailwind'], av: DESIGNERS_DATA[0].av, cr: '@flux.dev', del: '5 days', on: true },
                { t: 'AI Integration Service', desc: 'Connect any LLM to your product — streaming, RAG, agents.', price: 'From $350', tags: ['AI', 'API'], av: DESIGNERS_DATA[2].av, cr: '@cryptoui', del: '3 days', on: true },
                { t: 'Design System Creation', desc: 'Component library with Figma source files + React + Storybook.', price: 'From $800', tags: ['Figma', 'React'], av: DESIGNERS_DATA[1].av, cr: '@voidcraft', del: '7 days', on: false },
                { t: 'Landing Page in 48h', desc: 'Fast, beautiful, conversion-optimised landing page.', price: 'From $200', tags: ['HTML', 'CSS'], av: DESIGNERS_DATA[3].av, cr: '@quantumux', del: '2 days', on: false },
                { t: 'Auth System Setup', desc: 'OAuth2, magic links, 2FA and roles out of the box.', price: 'From $300', tags: ['Auth', 'Node.js'], av: DESIGNERS_DATA[5].av, cr: '@ghostdev', del: '4 days', on: true },
                { t: 'Component Library', desc: '50+ typed React components with Storybook docs.', price: 'From $600', tags: ['React', 'TypeScript'], av: DESIGNERS_DATA[6].av, cr: '@spectra.io', del: '8 days', on: false },
              ].map(s => (
                <div key={s.t} className="gl CU" style={{ borderRadius: 18, padding: 22 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
                    <Av src={s.av} sz={42} on={s.on} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700 }}>{s.cr}</div>
                      {s.on ? <span style={{ fontSize: 9, color: '#10b981', fontFamily: 'JetBrains Mono' }}>● Available</span> : <span style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>● Busy</span>}
                    </div>
                    <div style={{ marginLeft: 'auto', fontSize: 13, fontWeight: 900, color: '#22d3ee', fontFamily: 'Orbitron' }}>{s.price}</div>
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{s.t}</h3>
                  <p style={{ fontSize: 12, color: 'var(--mu)', lineHeight: 1.65, marginBottom: 12 }}>{s.desc}</p>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 14, alignItems: 'center' }}>{s.tags.map(t => <Bdg key={t} color="#a855f7" ch={t} />)}<span style={{ fontSize: 10, color: 'var(--mu)', marginLeft: 'auto', fontFamily: 'JetBrains Mono' }}>⏱ {s.del}</span></div>
                  <button className="SB" style={{ width: '100%', padding: '9px', borderRadius: 9, border: 'none', cursor: 'pointer', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani' }} onClick={() => setShowGetInTouch(s)}>Get in Touch</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* ── MODALS ── */}
      {showPostProduct && <PostProductModal onClose={() => setShowPostProduct(false)} authCheck={authCheck} authed={authed} onSubmit={(p) => { showToast(`${p.title} listed! ✓`, '#10b981'); }} />}
      {showGetInTouch && <GetInTouchCard service={showGetInTouch} onClose={() => setShowGetInTouch(null)} />}
      {profileUser && <UserProfileModal user={profileUser} onClose={() => setProfileUser(null)} followed={!!followed[profileUser.handle || profileUser.name]} onFollow={() => { const k = profileUser.handle || profileUser.name; setFollowed(f => ({ ...f, [k]: !f[k] })); showToast(followed[k] ? 'Unfollowed' : 'Following ✓', '#10b981'); }} earnedBadges={['starter']} onGetInTouch={(u) => setShowGetInTouch({ cr: u.cr || u.handle || u.name, price: 'Negotiable', av: u.av })} onInvite={(u) => showToast(`Invite sent to ${u.full || u.name} ✓`, '#22d3ee')} />}
    </>
  );
};

/* ─── COMMUNITY ───────────────────────────────────────────── */
/* ─── BADGE DEFINITIONS (icon-based, no emojis) ────────────── */
/* ─── FOLLOW BUTTON with particle burst ────────────────────── */
const FollowBtn = ({ following, onFollow, label = 'Follow', size = 'sm' }) => {
  const [pts, setPts] = React.useState([]);
  const [pressed, setPressed] = React.useState(false);
  const timerRef = React.useRef(null);

  const burst = () => {
    setPts(Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i, angle: (i / 12) * Math.PI * 2,
      dist: 24 + Math.random() * 20, size: 2 + Math.random() * 3,
      color: ['#22d3ee', '#a855f7', '#ec4899', '#10b981'][i % 4],
    })));
  };

  const handleEnter = () => { if (!following) { burst(); timerRef.current = setInterval(burst, 550); } };
  const handleLeave = () => { clearInterval(timerRef.current); setTimeout(() => setPts([]), 500); };

  const handleClick = (e) => {
    e.stopPropagation();
    setPressed(true); setTimeout(() => setPressed(false), 200);
    if (!following) burst();
    onFollow();
  };

  const pad = size === 'sm' ? '5px 13px' : '7px 20px';
  const fs = size === 'sm' ? 11 : 12;

  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      {pts.map(p => (
        <div key={p.id} style={{ position: 'absolute', top: '50%', left: '50%', width: p.size, height: p.size, borderRadius: '50%', background: p.color, pointerEvents: 'none', zIndex: 20, '--tx': Math.cos(p.angle) * p.dist + 'px', '--ty': Math.sin(p.angle) * p.dist + 'px', animation: 'particleBurst .5s ease-out forwards', boxShadow: `0 0 ${p.size * 2}px ${p.color}` }} />
      ))}
      <button onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}
        style={{ padding: pad, borderRadius: 8, border: `1px solid ${following ? 'transparent' : 'rgba(34,211,238,.35)'}`, background: following ? 'linear-gradient(135deg,#22d3ee,#a855f7)' : 'none', cursor: 'pointer', color: following ? 'white' : '#22d3ee', fontSize: fs, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .2s', transform: pressed ? 'scale(.93)' : 'scale(1)', letterSpacing: '.03em', position: 'relative', zIndex: 1 }}>
        {following ? <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Check size={fs - 1} />Following</span> : label}
      </button>
    </div>
  );
};

/* ─── BADGE ICON — full effects ─────────────────────────────── */
const BadgeIcon = ({ badge, earned, earnedDate, size = 22 }) => {
  const [hov, setHov] = React.useState(false);
  const [pts, setPts] = React.useState([]);
  const timerRef = React.useRef(null);
  const idleRef = React.useRef(null);
  const BIco = badge.Icon;
  const colors = badge.particleColors || [badge.color, '#fff', badge.glow];

  const makePts = (n, dist, sz) => Array.from({ length: n }, (_, i) => ({
    id: Date.now() + i + Math.random(),
    angle: (i / n) * Math.PI * 2 + Math.random() * .4,
    dist: dist + Math.random() * 14,
    size: sz + Math.random() * 2,
    color: colors[i % colors.length],
  }));

  const handleEnter = () => {
    setHov(true);
    clearInterval(idleRef.current);
    setPts(makePts(earned ? 14 : 8, earned ? 32 : 20, earned ? 3 : 2));
    timerRef.current = setInterval(() => setPts(makePts(earned ? 14 : 8, earned ? 32 : 20, earned ? 3 : 2)), earned ? 380 : 550);
  };
  const handleLeave = () => {
    setHov(false);
    clearInterval(timerRef.current);
    setTimeout(() => setPts([]), 480);
    // restart idle for earned
    if (earned) {
      idleRef.current = setInterval(() => setPts(makePts(5, 20, 1.5)), 2200);
    }
  };

  // Earned badges always emit slow idle particles
  React.useEffect(() => {
    if (!earned) return;
    idleRef.current = setInterval(() => { if (!hov) setPts(makePts(5, 20, 1.5)); }, 2200);
    return () => { clearInterval(idleRef.current); clearInterval(timerRef.current); };
  }, [earned]);

  const circleStyle = earned ? {
    background: badge.grad,
    border: `1.5px solid ${badge.color}88`,
    boxShadow: hov ? `0 0 22px ${badge.glow}cc,0 0 44px ${badge.glow}55` : `0 0 10px ${badge.glow}77,0 0 22px ${badge.glow}33`,
    '--gc': badge.glow,
    animation: 'badgePulse 2.8s ease-in-out infinite',
  } : hov ? {
    background: `radial-gradient(circle,${badge.color}22,rgba(255,255,255,.04))`,
    border: `1.5px solid ${badge.color}55`,
    boxShadow: `0 0 10px ${badge.glow}44`,
    animation: 'none',
    opacity: .75,
  } : {
    background: 'radial-gradient(circle,rgba(255,255,255,.06),rgba(255,255,255,.02))',
    border: '1.5px solid rgba(255,255,255,.1)',
    animation: 'badgeDim 3s ease-in-out infinite',
    opacity: .36,
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex', cursor: 'default' }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {pts.map(p => (
        <div key={p.id} style={{ position: 'absolute', top: '50%', left: '50%', width: p.size, height: p.size, borderRadius: '50%', background: p.color, pointerEvents: 'none', zIndex: 30, '--tx': Math.cos(p.angle) * p.dist + 'px', '--ty': Math.sin(p.angle) * p.dist + 'px', animation: 'particleBurst .52s ease-out forwards', boxShadow: `0 0 ${p.size * 2}px ${p.color}` }} />
      ))}
      <div style={{ width: size, height: size, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'box-shadow .3s,opacity .3s', ...circleStyle }}>
        <BIco size={size * .48} color={earned ? 'white' : hov ? badge.color : 'rgba(255,255,255,.35)'} strokeWidth={2.5} />
      </div>
      {hov && (
        <div style={{ position: 'absolute', bottom: '120%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(3,7,18,.97)', border: `1px solid ${badge.color}55`, borderRadius: 11, padding: '9px 13px', whiteSpace: 'nowrap', zIndex: 60, pointerEvents: 'none', animation: 'sU .15s ease', minWidth: 160 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: badge.color, marginBottom: 3, fontFamily: 'Orbitron' }}>{badge.name}</div>
          {earned ? (
            <>
              <div style={{ fontSize: 9, color: '#10b981', fontFamily: 'JetBrains Mono', marginBottom: 2 }}>✓ Earned: {earnedDate || 'recently'}</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,.5)', fontFamily: 'JetBrains Mono', lineHeight: 1.5, maxWidth: 180, whiteSpace: 'normal' }}>{badge.desc}</div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,.45)', fontFamily: 'JetBrains Mono', marginBottom: 3 }}>How to earn:</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,.7)', fontFamily: 'JetBrains Mono', lineHeight: 1.5, maxWidth: 180, whiteSpace: 'normal' }}>{badge.howToEarn}</div>
            </>
          )}
          <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: `5px solid ${badge.color}55` }} />
        </div>
      )}
    </div>
  );
};

/* ─── USER PROFILE MODAL ─────────────────────────────────────── */
const UserProfileModal = ({ user, onClose, followed, onFollow, earnedBadges = [], onGetInTouch, onInvite }) => {
  const [tab, setTab] = React.useState('work');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [carouselIdx, setCarouselIdx] = React.useState(0);
  const userProjects = MKT.filter(m => m.crFull === user?.name || m.cr === user?.handle || m.cr === user?.name).slice(0, 8);
  const showWork = userProjects.length > 0 ? userProjects : MKT.slice(2, 8);

  // Lock body scroll
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  React.useEffect(() => {
    const t = setInterval(() => setCarouselIdx(i => (i + 1) % Math.min(showWork.length, 4)), 2600);
    return () => clearInterval(t);
  }, [showWork.length]);

  // Close menu on outside click
  React.useEffect(() => {
    if (!menuOpen) return;
    const h = () => setMenuOpen(false);
    setTimeout(() => document.addEventListener('click', h), 0);
    return () => document.removeEventListener('click', h);
  }, [menuOpen]);

  if (!user) return null;
  const color = user.color || '#22d3ee';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,.86)', backdropFilter: 'blur(22px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={onClose}>
      <div style={{ background: 'rgba(8,12,26,.99)', borderRadius: 28, border: '1px solid rgba(255,255,255,.1)', width: '100%', maxWidth: 860, maxHeight: '90vh', overflow: 'hidden', animation: 'sU .35s cubic-bezier(.22,1,.36,1)', display: 'flex', flexDirection: 'column', boxShadow: `0 0 0 1px rgba(255,255,255,.06),0 32px 80px rgba(0,0,0,.8),0 0 60px ${color}18` }} onClick={e => e.stopPropagation()}>

        {/* ── BANNER ── */}
        <div style={{ height: 140, background: `linear-gradient(135deg,${color}2a,rgba(168,85,247,.22),rgba(236,72,153,.12))`, position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)`, backgroundSize: '28px 28px' }} />
          <div style={{ position: 'absolute', right: -30, top: -30, width: 220, height: 220, borderRadius: '50%', background: `${color}18`, filter: 'blur(50px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', left: 80, top: -40, width: 160, height: 160, borderRadius: '50%', background: `rgba(168,85,247,.12)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
          {/* 3-dot menu */}
          <div style={{ position: 'absolute', top: 14, right: 56, zIndex: 10 }}>
            <button onClick={e => { e.stopPropagation(); setMenuOpen(m => !m); }} style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(0,0,0,.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.14)', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MoreHorizontal size={15} />
            </button>
            {menuOpen && (
              <div style={{ position: 'absolute', top: 42, right: 0, background: 'rgba(5,8,20,.98)', borderRadius: 14, border: '1px solid rgba(255,255,255,.12)', minWidth: 190, overflow: 'hidden', zIndex: 20, animation: 'hoverMenuSlide .18s ease', boxShadow: '0 16px 48px rgba(0,0,0,.7)' }} onClick={e => e.stopPropagation()}>
                {[[Plus, 'Add to List', '#22d3ee'], [Minus, 'Remove from List', '#f59e0b'], [UserX, 'Block User', '#ec4899'], [Flag, 'Report User', '#ef4444']].map(([Ico, label, c]) => (
                  <button key={label} onClick={() => setMenuOpen(false)} style={{ width: '100%', padding: '10px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 9, fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, color: 'rgba(255,255,255,.72)', textAlign: 'left', transition: 'background .15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = `${c}14`}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                    <Ico size={13} color={c} />{label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 14, width: 34, height: 34, borderRadius: '50%', background: 'rgba(0,0,0,.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.14)', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <X size={15} />
          </button>
        </div>

        {/* ── PROFILE HEADER ── */}
        <div style={{ padding: '0 28px', marginTop: -56, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 14 }}>
            {/* Avatar + mini works carousel */}
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <img src={user.av} alt="" style={{ width: 100, height: 100, borderRadius: 22, border: `4px solid rgba(8,12,26,.99)`, objectFit: 'cover', boxShadow: `0 0 0 2px ${color}66,0 8px 24px rgba(0,0,0,.6)` }} />
                {user.on && <div style={{ position: 'absolute', bottom: 7, right: 7, width: 16, height: 16, borderRadius: '50%', background: '#10b981', border: '3px solid rgba(8,12,26,.99)', boxShadow: '0 0 8px #10b981' }} />}
              </div>
              {/* Works carousel — auto-shuffling thumbnails */}
              <div style={{ display: 'flex', gap: 6, paddingBottom: 6 }}>
                {showWork.slice(0, 4).map((p, i) => (
                  <div key={p.id} style={{ width: 58, height: 58, borderRadius: 12, overflow: 'hidden', flexShrink: 0, border: `2px solid ${carouselIdx === i ? color : 'rgba(255,255,255,.1)'}`, transition: 'all .4s ease', transform: carouselIdx === i ? 'scale(1.1)' : 'scale(1)', opacity: carouselIdx === i ? 1 : .5, animation: carouselIdx === i ? 'carouselFade .4s ease' : 'none', boxShadow: carouselIdx === i ? `0 0 14px ${color}55` : '' }}>
                    <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>
            {/* Action buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, paddingBottom: 7 }}>
              <FollowBtn following={followed} onFollow={onFollow} size='md' />
              <button style={{ padding: '7px 13px', borderRadius: 10, border: `1px solid ${color}44`, background: `${color}0e`, cursor: 'pointer', color, fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 5, transition: 'all .2s' }}
                onClick={() => onGetInTouch && onGetInTouch({ cr: user.handle || user.name, price: 'Negotiable', av: user.av })}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}20`; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${color}0e`; }}>
                <MessageSquare size={11} />Get in Touch
              </button>
              <button style={{ padding: '7px 13px', borderRadius: 10, border: '1px solid rgba(168,85,247,.4)', background: 'rgba(168,85,247,.1)', cursor: 'pointer', color: '#a855f7', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 5, transition: 'all .2s' }}
                onClick={() => onInvite && onInvite(user)}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(168,85,247,.1)'; }}>
                <Zap size={11} />Invite to Vibe
              </button>
            </div>
          </div>

          {/* Name + Discord-style badges + bio */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
              <span className="O" style={{ fontSize: 19, fontWeight: 900 }}>{user.full || user.name}</span>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {earnedBadges.map(bid => { const b = BADGE_DEFS.find(x => x.id === bid); return b ? <BadgeIcon key={bid} badge={b} earned earnedDate="Feb 2026" size={20} /> : null; })}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{user.handle || user.name}</span>
              <span style={{ color: 'var(--br)' }}>·</span>
              <span style={{ fontSize: 11, color, fontWeight: 700 }}>{user.role || 'Creator'}</span>
              {user.on && <span style={{ fontSize: 9, color: '#10b981', padding: '2px 8px', borderRadius: 999, background: 'rgba(16,185,129,.1)', border: '1px solid rgba(16,185,129,.25)', fontFamily: 'JetBrains Mono' }}>● Online</span>}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.58)', lineHeight: 1.7, maxWidth: 560 }}>{user.bio || `Building great products at the intersection of design & technology. Open to collaborations and new projects.`}</div>
          </div>

          {/* Stats bar */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,.03)', borderRadius: 14, border: '1px solid var(--br)', overflow: 'hidden', marginBottom: 0 }}>
            {[['Projects', user.projects || 12, '#22d3ee'], ['Followers', user.followers || '1.2k', '#a855f7'], ['Following', '342', '#ec4899'], ['Likes', '8.4k', '#f59e0b'], ['Connect', user.connects || '24', '#10b981']].map(([l, v, c], i, arr) => (
              <div key={l} style={{ flex: 1, padding: '11px 6px', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid var(--br)' : 'none', cursor: 'pointer', transition: 'background .2s' }}
                onMouseEnter={e => e.currentTarget.style.background = `${c}0a`}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div className="O" style={{ fontSize: 14, fontWeight: 900, color: c }}>{v}</div>
                <div style={{ fontSize: 8, color: 'var(--mu)', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '.07em', marginTop: 1 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--br)', marginTop: 2 }}>
            {[['work', 'Work'], ['collection', 'Collection'], ['liked', 'Liked Vibes'], ['about', 'About']].map(([id, l]) => (
              <button key={id} onClick={() => setTab(id)} style={{ padding: '10px 20px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 11, fontFamily: 'Rajdhani', transition: 'all .2s', background: 'transparent', color: tab === id ? 'white' : 'rgba(255,255,255,.4)', borderBottom: tab === id ? `2px solid ${color}` : '2px solid transparent', marginBottom: -1, letterSpacing: '.05em' }}>
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* ── TAB CONTENT ── */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px 30px', overscrollBehavior: 'contain' }}>
          {tab === 'work' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gap: 14 }}>
              {showWork.map(p => (
                <div key={p.id} className="gl" style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer', transition: 'transform .22s,box-shadow .22s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}>
                  <img src={p.img} alt="" style={{ width: '100%', height: 104, objectFit: 'cover' }} />
                  <div style={{ padding: '10px 12px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: 10, color: '#22d3ee', fontFamily: 'Orbitron', fontWeight: 700 }}>{p.price}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 9, color: 'var(--mu)' }}><Heart size={8} />{p.lk}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab === 'collection' && (
            <div>
              <div style={{ fontSize: 11, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 16 }}>Curated by {user.full || user.name}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gap: 14 }}>
                {MKT.filter((_, i) => i % 3 === 0).slice(0, 6).map(p => (
                  <div key={p.id} className="gl" style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer', transition: 'transform .2s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                    <img src={p.img} alt="" style={{ width: '100%', height: 100, objectFit: 'cover' }} />
                    <div style={{ padding: '10px 12px' }}>
                      <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 3 }}>{p.title}</div>
                      <div style={{ fontSize: 10, color: '#a855f7', fontFamily: 'Orbitron', fontWeight: 700 }}>{p.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === 'liked' && (
            <div>
              <div style={{ fontSize: 11, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 16 }}>Products {user.full || user.name} loved across VibeWorld</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gap: 14 }}>
                {MKT.filter((_, i) => i % 4 === 1).slice(0, 8).map(p => (
                  <div key={p.id} className="gl" style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer', transition: 'transform .2s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                    <img src={p.img} alt="" style={{ width: '100%', height: 100, objectFit: 'cover' }} />
                    <div style={{ padding: '10px 12px' }}>
                      <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 3 }}>{p.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Heart size={9} color="#ec4899" fill="#ec4899" /><span style={{ fontSize: 9, color: '#ec4899', fontFamily: 'JetBrains Mono' }}>{p.lk}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === 'about' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 250px', gap: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[['Biography', 'A passionate builder creating at the intersection of design and technology. I specialize in crafting immersive digital experiences that push the boundaries of what\'s possible. Every pixel intentional, every interaction deliberate.'], ['Top Specialty', user.role || 'Full-Stack & Creative UI Engineering'], ['Skills', user.tags || ['React', 'TypeScript', 'Three.js', 'Node.js', 'UI/UX']], ['Work History', null], ['Seeking', 'Open to freelance projects, collaborations, and full-time remote roles in product-focused teams.']].map(([sec, val]) => (
                  <div key={sec}>
                    <div className="O" style={{ fontSize: 9, color: 'var(--mu)', letterSpacing: '.1em', marginBottom: 9, fontWeight: 700 }}>{sec.toUpperCase()}</div>
                    {sec === 'Skills' ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {(Array.isArray(val) ? val : [val]).map(s => <span key={s} style={{ padding: '4px 10px', borderRadius: 6, background: `${color}0c`, border: `1px solid ${color}33`, fontSize: 10, color, fontFamily: 'JetBrains Mono' }}>{s}</span>)}
                      </div>
                    ) : sec === 'Work History' ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {[{ co: 'VibeWorld Studio', role: 'Lead Creator', period: '2024–Present' }, { co: 'NeoTech Inc', role: 'Senior Dev', period: '2022–2024' }].map((j, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,.03)', border: '1px solid var(--br)' }}>
                            <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(168,85,247,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Briefcase size={13} color="#a855f7" /></div>
                            <div><div style={{ fontSize: 12, fontWeight: 700 }}>{j.co}</div><div style={{ fontSize: 10, color: 'var(--mu)' }}>{j.role} · {j.period}</div></div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.65)', lineHeight: 1.7 }}>{val}</div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                <div className="gl" style={{ borderRadius: 14, padding: 16 }}>
                  <div className="O" style={{ fontSize: 9, color: 'var(--mu)', letterSpacing: '.1em', marginBottom: 12, fontWeight: 700 }}>DETAILS</div>
                  {[[MapPin, 'Location', 'San Francisco, CA'], [Clock, 'Member Since', 'Jan 2024'], [Globe, 'Website', `vibeworld.app/${(user.name || '').replace('@', '')}`], [Star, 'Rating', '4.9 / 5.0'], [Shield, 'Status', 'Verified Creator']].map(([Ico, label, val]) => (
                    <div key={label} style={{ display: 'flex', gap: 10, marginBottom: 11, alignItems: 'flex-start' }}>
                      <Ico size={12} color="var(--mu)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <div><div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 1 }}>{label}</div><div style={{ fontSize: 11, fontWeight: 600 }}>{val}</div></div>
                    </div>
                  ))}
                </div>
                <div className="gl" style={{ borderRadius: 14, padding: 16 }}>
                  <div className="O" style={{ fontSize: 9, color: 'var(--mu)', letterSpacing: '.1em', marginBottom: 12, fontWeight: 700 }}>BADGES</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {BADGE_DEFS.map(b => <BadgeIcon key={b.id} badge={b} earned={earnedBadges.includes(b.id)} earnedDate="Feb 2026" size={26} />)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── TECH SKILLS LIST ────────────────────────────────────────── */
const TECH_SKILLS = [
  { cat: 'Design', items: ['UI/UX Design', 'Web Design', 'Mobile Design', 'Landing Pages', 'Design Systems', 'Brand Identity', 'Figma/Sketch', 'Motion Design', '3D Design', 'Icon Design'] },
  { cat: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript', 'CSS/Tailwind', 'Three.js/WebGL', 'Animation', 'HTML/CSS', 'Svelte'] },
  { cat: 'Backend', items: ['Node.js', 'Python', 'Go', 'Rust', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'GraphQL', 'Microservices'] },
  { cat: 'Mobile', items: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Expo', 'PWA'] },
  { cat: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'GCP', 'Azure', 'Linux', 'Terraform', 'Monitoring', 'Security'] },
  { cat: 'AI/ML', items: ['LLM Integration', 'RAG Systems', 'AI Agents', 'Machine Learning', 'Computer Vision', 'NLP', 'Stable Diffusion', 'Fine-tuning'] },
  { cat: 'Web3', items: ['Smart Contracts', 'Solidity', 'NFT Development', 'DeFi', 'Wallet Integration', 'IPFS'] },
  { cat: 'Other', items: ['Technical Writing', 'Code Review', 'Mentoring', 'Product Strategy', 'API Design', 'SEO'] },
];

/* ─── SIGNUP MODAL ────────────────────────────────────────────── */
const AuthModal = ({ onClose, onAuth }) => {
  const [mode, setMode] = React.useState('signup'); // signup|role|skills|signin
  const [role, setRole] = React.useState(null);
  const [selectedSkills, setSelectedSkills] = React.useState([]);
  const [skillCat, setSkillCat] = React.useState('Design');
  const [form, setForm] = React.useState({ name: '', email: '', pass: '' });
  const [err, setErr] = React.useState('');

  const toggleSkill = (s) => setSelectedSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  const doAuth = () => { onAuth && onAuth({ ...form, role, skills: selectedSkills }); onClose(); };

  const trySignup = () => {
    if (!form.name || !form.email || !form.pass) { setErr('All fields required'); return; }
    if (!form.email.includes('@')) { setErr('Enter a valid email'); return; }
    if (form.pass.length < 6) { setErr('Password must be at least 6 characters'); return; }
    setErr('');
    setMode('role');
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 900, background: 'rgba(0,0,0,.88)', backdropFilter: 'blur(20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={onClose}>
      <div style={{ background: 'rgba(8,12,26,.99)', borderRadius: 24, border: '1px solid rgba(34,211,238,.25)', width: '100%', maxWidth: 460, animation: 'sU .3s ease', overflow: 'hidden', boxShadow: '0 0 0 1px rgba(34,211,238,.08),0 32px 80px rgba(0,0,0,.85),0 0 60px rgba(34,211,238,.1)' }} onClick={e => e.stopPropagation()}>

        {/* STEP 1 — Account details */}
        {mode === 'signup' && (
          <div style={{ padding: '36px 32px' }}>
            <div style={{ textAlign: 'center', marginBottom: 26 }}>
              <div className="O" style={{ fontSize: 22, fontWeight: 900, marginBottom: 6, background: 'linear-gradient(135deg,#22d3ee,#a855f7,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Join VibeWorld</div>
              <div style={{ fontSize: 12, color: 'var(--mu)' }}>Create your account to start vibing</div>
            </div>
            {[['Name', 'text', 'name'], ['Email', 'email', 'email'], ['Password', 'password', 'pass']].map(([label, type, key]) => (
              <input key={key} type={type} placeholder={label}
                value={form[key]} onChange={e => { setForm(p => ({ ...p, [key]: e.target.value })); setErr(''); }}
                style={{ width: '100%', marginBottom: 10, padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'white', fontSize: 13, fontFamily: 'Rajdhani', outline: 'none' }} />
            ))}
            {err && <div style={{ padding: '8px 12px', borderRadius: 8, background: 'rgba(236,72,153,.1)', border: '1px solid rgba(236,72,153,.25)', fontSize: 11, color: '#ec4899', marginBottom: 10 }}>{err}</div>}
            <button onClick={trySignup} className="SB" style={{ width: '100%', padding: '12px', borderRadius: 10, border: 'none', cursor: 'pointer', color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Orbitron', letterSpacing: '.04em', marginBottom: 10 }}>
              Continue →
            </button>
            <button onClick={() => setMode('signin')} style={{ width: '100%', padding: '10px', background: 'none', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, cursor: 'pointer', color: 'rgba(255,255,255,.5)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600 }}>Already have an account? Sign In</button>
          </div>
        )}

        {/* STEP 2 — Pick role */}
        {mode === 'role' && (
          <div style={{ padding: '32px 32px' }}>
            <div style={{ textAlign: 'center', marginBottom: 22 }}>
              <div className="O" style={{ fontSize: 16, fontWeight: 900, marginBottom: 6 }}>How will you vibe?</div>
              <div style={{ fontSize: 12, color: 'var(--mu)' }}>Pick your role — you can do everything regardless</div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
              {[['creator', 'Creator', 'Build & sell products, get discovered', Rocket, '#a855f7'], ['buyer', 'Buyer', 'Discover great work & hire creators', ShoppingBag, '#22d3ee']].map(([r, t, d, Ico, c]) => (
                <button key={r} onClick={() => setRole(r)}
                  style={{ flex: 1, padding: '18px 14px', borderRadius: 14, border: `1px solid ${role === r ? c : c + '33'}`, background: role === r ? `${c}14` : `${c}06`, cursor: 'pointer', textAlign: 'center', transition: 'all .2s', outline: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c + '88'; e.currentTarget.style.background = `${c}14`; }}
                  onMouseLeave={e => { if (role !== r) { e.currentTarget.style.borderColor = c + '33'; e.currentTarget.style.background = `${c}06` } }}>
                  <Ico size={26} color={c} style={{ margin: '0 auto 9px', display: 'block' }} />
                  <div style={{ fontSize: 13, fontWeight: 800, color: c, marginBottom: 3 }}>{t}</div>
                  <div style={{ fontSize: 10, color: 'var(--mu)', lineHeight: 1.5 }}>{d}</div>
                  {role === r && <div style={{ marginTop: 8, fontSize: 9, color: c, fontFamily: 'JetBrains Mono', fontWeight: 700 }}>✓ Selected</div>}
                </button>
              ))}
            </div>
            {role === 'creator' && (
              <div style={{ padding: '10px 14px', borderRadius: 10, background: 'rgba(168,85,247,.08)', border: '1px solid rgba(168,85,247,.2)', marginBottom: 14, fontSize: 11, color: 'rgba(168,85,247,.9)', lineHeight: 1.6 }}>
                <strong>💡 Pro Tip:</strong> Adding your skills increases your visibility by <strong>3x</strong> and helps buyers find you faster.
              </div>
            )}
            <div style={{ display: 'flex', gap: 8 }}>
              {role === 'creator' && <button onClick={() => setMode('skills')} className="SB" style={{ flex: 2, padding: '11px', borderRadius: 10, border: 'none', cursor: 'pointer', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Orbitron' }}>Add Skills →</button>}
              <button onClick={doAuth} style={{ flex: 1, padding: '11px', borderRadius: 10, border: '1px solid rgba(255,255,255,.15)', background: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.7)', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani' }}>
                {role ? 'Skip for now' : 'Create Account'}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — Skills (creators only) */}
        {mode === 'skills' && (
          <div style={{ padding: '28px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <button onClick={() => setMode('role')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)' }}><X size={16} /></button>
              <span className="O" style={{ fontSize: 13, fontWeight: 700 }}>Add Your Skills</span>
              <span style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{selectedSkills.length} selected</span>
            </div>
            <div style={{ padding: '8px 12px', borderRadius: 9, background: 'rgba(34,211,238,.06)', border: '1px solid rgba(34,211,238,.15)', marginBottom: 13, fontSize: 10, color: 'rgba(34,211,238,.8)', fontFamily: 'JetBrains Mono' }}>
              Adding skills increases visibility by 3× · Helps buyers find you
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
              {TECH_SKILLS.map(({ cat }) => (
                <button key={cat} onClick={() => setSkillCat(cat)} style={{ padding: '4px 12px', borderRadius: 999, border: `1px solid ${skillCat === cat ? 'rgba(168,85,247,.5)' : 'rgba(255,255,255,.1)'}`, background: skillCat === cat ? 'rgba(168,85,247,.12)' : 'none', cursor: 'pointer', color: skillCat === cat ? '#a855f7' : 'var(--mu)', fontSize: 10, fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{cat}</button>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, maxHeight: 180, overflowY: 'auto', marginBottom: 16, overscrollBehavior: 'contain' }}>
              {TECH_SKILLS.find(c => c.cat === skillCat)?.items.map(s => (
                <button key={s} onClick={() => toggleSkill(s)} style={{ padding: '5px 12px', borderRadius: 999, border: `1px solid ${selectedSkills.includes(s) ? 'rgba(34,211,238,.5)' : 'rgba(255,255,255,.1)'}`, background: selectedSkills.includes(s) ? 'rgba(34,211,238,.12)' : 'none', cursor: 'pointer', color: selectedSkills.includes(s) ? '#22d3ee' : 'var(--mu)', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 600, transition: 'all .15s' }}>
                  {selectedSkills.includes(s) && <Check size={9} style={{ marginRight: 4 }} />}{s}
                </button>
              ))}
            </div>
            <button onClick={doAuth} className="SB" style={{ width: '100%', padding: '11px', borderRadius: 10, border: 'none', cursor: 'pointer', color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Orbitron' }}>
              {selectedSkills.length > 0 ? `Join with ${selectedSkills.length} Skills →` : 'Create Account'}
            </button>
            <button onClick={doAuth} style={{ width: '100%', padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 11, fontFamily: 'Rajdhani', marginTop: 4 }}>Add later</button>
          </div>
        )}

        {/* SIGN IN */}
        {mode === 'signin' && (
          <div style={{ padding: '32px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <button onClick={() => setMode('signup')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)' }}><ArrowLeft size={16} /></button>
              <span className="O" style={{ fontSize: 13, fontWeight: 700 }}>Sign In</span>
            </div>
            {['Email', 'Password'].map((f, i) => (
              <input key={f} type={i === 1 ? 'password' : 'text'} placeholder={f}
                style={{ width: '100%', marginBottom: 10, padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'white', fontSize: 13, fontFamily: 'Rajdhani', outline: 'none' }} />
            ))}
            <button onClick={doAuth} className="SB" style={{ width: '100%', padding: '12px', borderRadius: 10, border: 'none', cursor: 'pointer', color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Orbitron', marginBottom: 8 }}>Sign In →</button>
            <button onClick={() => setMode('signup')} style={{ width: '100%', padding: '9px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 11, fontFamily: 'Rajdhani' }}>Create new account</button>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── GET IN TOUCH CARD ───────────────────────────────────────── */
const GetInTouchCard = ({ service, onClose }) => {
  const [tab, setTab] = React.useState('message');
  const [details, setDetails] = React.useState('');
  const [date, setDate] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [openBudget, setOpenBudget] = React.useState(false);

  // Lock body scroll while modal is open
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, overscrollBehavior: 'none' }} onClick={onClose} onWheel={e => e.stopPropagation()} onTouchMove={e => e.stopPropagation()}>
      <div style={{ background: 'rgba(8,12,26,.98)', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', width: 420, maxHeight: '82vh', overflow: 'hidden', animation: 'sU .3s ease', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 80px rgba(0,0,0,.7)' }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--br)', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 2 }}>Connect with {service.cr}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>
                <Clock size={10} /> Responds in about 2–4 hours
              </div>
            </div>
            <button onClick={onClose} style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,.06)', border: 'none', cursor: 'pointer', color: 'var(--mu)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={13} />
            </button>
          </div>
          <div style={{ display: 'flex', gap: 4, background: 'rgba(255,255,255,.04)', borderRadius: 9, padding: 3 }}>
            {[['message', 'Message'], ['services', 'Services']].map(([id, l]) => (
              <button key={id} onClick={() => setTab(id)} style={{ flex: 1, padding: '7px', borderRadius: 7, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 11, fontFamily: 'Rajdhani', transition: 'all .2s', background: tab === id ? 'rgba(255,255,255,.12)' : 'transparent', color: tab === id ? 'white' : 'rgba(255,255,255,.4)' }}>
                {l}
              </button>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', overscrollBehavior: 'contain' }}>
          {tab === 'message' && (
            <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <div style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 6, letterSpacing: '.08em' }}>PROJECT DETAILS <span style={{ color: '#ec4899' }}>* min 100 chars</span></div>
                <textarea value={details} onChange={e => setDetails(e.target.value)} rows={5}
                  placeholder="Describe your project in detail — what you need, your goals, tech requirements..."
                  style={{ width: '100%', background: 'rgba(255,255,255,.04)', border: `1px solid ${details.length > 0 && details.length < 100 ? 'rgba(236,72,153,.4)' : 'rgba(255,255,255,.1)'}`, borderRadius: 10, padding: '10px 12px', color: 'white', fontSize: 12, fontFamily: 'Rajdhani', outline: 'none', resize: 'none', lineHeight: 1.6 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                  <span style={{ fontSize: 9, color: details.length < 100 ? '#ec4899' : '#10b981', fontFamily: 'JetBrains Mono' }}>{details.length}/100 min</span>
                  {details.length >= 100 && <span style={{ fontSize: 9, color: '#10b981', fontFamily: 'JetBrains Mono' }}>✓ Good</span>}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 6, letterSpacing: '.08em' }}>TARGET DATE</div>
                <input type="date" value={date} onChange={e => setDate(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '9px 12px', color: 'white', fontSize: 12, fontFamily: 'Rajdhani', outline: 'none', colorScheme: 'dark' }} />
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 6, letterSpacing: '.08em' }}>BUDGET ESTIMATE</div>
                <input type="text" value={openBudget ? '' : budget} onChange={e => setBudget(e.target.value)} disabled={openBudget}
                  placeholder="e.g. $500 – $1,000"
                  style={{ width: '100%', background: `rgba(255,255,255,${openBudget ? .02 : .04})`, border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '9px 12px', color: openBudget ? 'var(--mu)' : 'white', fontSize: 12, fontFamily: 'Rajdhani', outline: 'none', opacity: openBudget ? .5 : 1 }} />
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, cursor: 'pointer', padding: '6px 0' }}>
                  <div onClick={() => setOpenBudget(b => !b)} style={{ width: 16, height: 16, borderRadius: 4, border: `1px solid ${openBudget ? '#22d3ee' : 'rgba(255,255,255,.2)'}`, background: openBudget ? '#22d3ee' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s', flexShrink: 0 }}>
                    {openBudget && <Check size={10} color="black" strokeWidth={3} />}
                  </div>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', fontFamily: 'Rajdhani', lineHeight: 1.4 }}>Let the creator recommend a budget based on the project</span>
                </label>
              </div>
              <button disabled={details.length < 100} className="SB"
                style={{ width: '100%', padding: '11px', borderRadius: 10, border: 'none', cursor: details.length >= 100 ? 'pointer' : 'default', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Orbitron', letterSpacing: '.04em', opacity: details.length >= 100 ? 1 : .5, position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { if (details.length >= 100) { const r = document.createElement('span'); const rect = e.currentTarget.getBoundingClientRect(); r.style.cssText = `position:absolute;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.18);transform:translate(-50%,-50%) scale(0);animation:rippleEffect .5s ease-out forwards;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;pointer-events:none`; e.currentTarget.appendChild(r); setTimeout(() => r.remove(), 500); } }}
                onClick={() => { if (details.length >= 100) onClose(); }}>
                Send Message →
              </button>
            </div>
          )}
          {tab === 'services' && (
            <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {(service.serviceItems || [
                { name: 'Custom Build', desc: 'Full project from scratch', price: 'From $' + service.price?.replace('From $', ''), time: '5 days' },
                { name: 'Quick Fix', desc: 'Bug fixes and improvements', price: 'From $50', time: '1 day' },
                { name: 'Consultation', desc: '30-min strategy call', price: '$30', time: 'Same day' },
              ]).map((s, i) => (
                <div key={i} style={{ padding: '12px 14px', borderRadius: 12, border: '1px solid var(--br)', background: 'rgba(255,255,255,.02)', cursor: 'pointer', transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,211,238,.3)'; e.currentTarget.style.background = 'rgba(34,211,238,.04)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.background = 'rgba(255,255,255,.02)'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                    <div style={{ fontSize: 12, fontWeight: 700 }}>{s.name}</div>
                    <div style={{ fontSize: 12, fontWeight: 800, color: '#22d3ee', fontFamily: 'Orbitron' }}>{s.price}</div>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--mu)', marginBottom: 4 }}>{s.desc}</div>
                  <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={9} />Delivery: {s.time}</div>
                </div>
              ))}
              <button className="SB" style={{ width: '100%', padding: '10px', borderRadius: 10, border: 'none', cursor: 'pointer', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Orbitron', marginTop: 4 }} onClick={() => setTab('message')}>
                Request Custom Work →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── POST PRODUCT MODAL ─────────────────────────────────────── */
const PostProductModal = ({ onClose, onSubmit, authCheck, authed }) => {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [img, setImg] = React.useState('');
  const fileRef = React.useRef(null);

  const ALL_TAGS = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind', 'Node.js', 'Python', 'AI', 'API', 'Auth', 'Dashboard', 'Design System', 'Three.js', 'WebGL', 'Mobile', 'PWA', 'E-commerce', 'CMS', 'Blog', 'CLI', 'DevOps', 'Testing', 'Animation', 'Maps', 'Web3', 'NFT', 'Charts', 'Forms', 'Components'];

  const toggle = (t) => setSelectedTags(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);

  const submit = () => {
    if (!title || !price || selectedTags.length === 0) return;
    authCheck(() => {
      onSubmit && onSubmit({ title, desc, price: '$' + price, tags: selectedTags, img });
      onClose();
    });
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,.8)', backdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={onClose}>
      <div style={{ background: 'rgba(8,12,26,.98)', borderRadius: 22, border: '1px solid rgba(255,255,255,.1)', width: '100%', maxWidth: 500, maxHeight: '90vh', overflow: 'hidden', animation: 'sU .3s ease', display: 'flex', flexDirection: 'column' }} onClick={e => e.stopPropagation()}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--br)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <div className="O" style={{ fontSize: 14, fontWeight: 800 }}>List a Product</div>
            <div style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginTop: 2 }}>Sell your work to the VibeVerse community</div>
          </div>
          <button onClick={onClose} style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,.06)', border: 'none', cursor: 'pointer', color: 'var(--mu)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={14} />
          </button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', overscrollBehavior: 'contain' }}>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Product title"
            style={{ width: '100%', marginBottom: 10, padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'white', fontSize: 13, fontFamily: 'Rajdhani', outline: 'none' }} />
          <textarea value={desc} onChange={e => setDesc(e.target.value)} rows={3} placeholder="Describe what you're selling..."
            style={{ width: '100%', marginBottom: 10, padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'white', fontSize: 13, fontFamily: 'Rajdhani', outline: 'none', resize: 'none' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: '#22d3ee', fontWeight: 700 }}>$</span>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price (USD)"
              style={{ flex: 1, padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'white', fontSize: 13, fontFamily: 'Rajdhani', outline: 'none' }} />
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 10, color: '#f59e0b', fontFamily: 'JetBrains Mono', marginBottom: 8, letterSpacing: '.08em', display: 'flex', alignItems: 'center', gap: 5 }}>
              <AlertCircle size={10} /> TAG YOUR PRODUCT <span style={{ color: 'var(--mu)' }}>(required — helps buyers find you)</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {ALL_TAGS.map(t => (
                <button key={t} onClick={() => toggle(t)} style={{ padding: '4px 11px', borderRadius: 999, border: `1px solid ${selectedTags.includes(t) ? 'rgba(34,211,238,.5)' : 'rgba(255,255,255,.1)'}`, background: selectedTags.includes(t) ? 'rgba(34,211,238,.12)' : 'none', cursor: 'pointer', color: selectedTags.includes(t) ? '#22d3ee' : 'var(--mu)', fontSize: 10, fontFamily: 'JetBrains Mono', transition: 'all .15s' }}>
                  {selectedTags.includes(t) && '✓ '}{t}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => fileRef.current?.click()} style={{ width: '100%', padding: '9px', borderRadius: 10, border: '1px dashed rgba(255,255,255,.15)', background: 'rgba(255,255,255,.02)', cursor: 'pointer', color: 'var(--mu)', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, marginBottom: 16 }}>
            <Upload size={13} />{img ? 'Image selected ✓' : 'Upload preview image'}
          </button>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => { if (e.target.files?.[0]) setImg(URL.createObjectURL(e.target.files[0])); }} />

          {!authed && <div style={{ padding: '8px 12px', borderRadius: 8, background: 'rgba(245,158,11,.08)', border: '1px solid rgba(245,158,11,.2)', fontSize: 11, color: '#f59e0b', marginBottom: 12, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 6 }}><Zap size={11} color="#f59e0b" /> You need an account to list products</div>}

          <button onClick={submit} disabled={!title || !price || selectedTags.length === 0} className="SB"
            style={{ width: '100%', padding: '12px', borderRadius: 10, border: 'none', cursor: (!title || !price || selectedTags.length === 0) ? 'not-allowed' : 'pointer', color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Orbitron', letterSpacing: '.04em', opacity: (!title || !price || selectedTags.length === 0) ? .5 : 1 }}>
            {selectedTags.length === 0 ? 'Select at least 1 tag to continue →' : 'List Product on VibeMarket →'}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─── WISHLIST PANEL ─────────────────────────────────────────── */
const WishlistPanel = ({ wish, bookmarkedPosts, followedCreators, onClose }) => {
  const [filter, setFilter] = React.useState('all');
  const filters = [['all', 'All'], ['products', 'Products'], ['posts', 'Posts'], ['creators', 'Creators']];
  const products = MKT.filter(m => wish.includes(m.id));
  const posts = bookmarkedPosts || [];
  const creators = Object.keys(followedCreators || {}).filter(k => followedCreators[k]);

  return (
    <div style={{ position: 'fixed', top: 64, right: 20, width: 320, maxHeight: '75vh', background: 'rgba(8,12,26,.98)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 16, zIndex: 200, overflow: 'hidden', animation: 'sU .2s ease', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,.6)' }}>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--br)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <Bookmark size={14} color="#a855f7" />
          <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Wishlist</span>
          <span style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', padding: '1px 6px', borderRadius: 4, background: 'rgba(255,255,255,.06)' }}>{products.length + posts.length + creators.length}</span>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)' }}><X size={14} /></button>
      </div>
      <div style={{ display: 'flex', gap: 3, padding: '8px 12px', borderBottom: '1px solid var(--br)', flexShrink: 0 }}>
        {filters.map(([id, l]) => (
          <button key={id} onClick={() => setFilter(id)} style={{ padding: '4px 10px', borderRadius: 7, border: `1px solid ${filter === id ? 'rgba(168,85,247,.4)' : 'rgba(255,255,255,.07)'}`, background: filter === id ? 'rgba(168,85,247,.1)' : 'none', cursor: 'pointer', color: filter === id ? '#a855f7' : 'var(--mu)', fontSize: 9, fontWeight: 700, fontFamily: 'JetBrains Mono', transition: 'all .15s' }}>
            {l}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px 14px', overscrollBehavior: 'contain' }}>
        {(filter === 'all' || filter === 'products') && products.length > 0 && (
          <>
            <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 7, letterSpacing: '.1em' }}>PRODUCTS ({products.length})</div>
            {products.map(p => (
              <div key={p.id} style={{ display: 'flex', gap: 9, alignItems: 'center', padding: '7px 0', borderBottom: '1px solid var(--br)' }}>
                <img src={p.img} alt="" style={{ width: 40, height: 30, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</div>
                  <div style={{ fontSize: 10, color: '#22d3ee', fontFamily: 'Orbitron', fontWeight: 700 }}>{p.price}</div>
                </div>
              </div>
            ))}
          </>
        )}
        {(filter === 'all' || filter === 'creators') && creators.length > 0 && (
          <>
            <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 7, marginTop: 12, letterSpacing: '.1em' }}>CREATORS ({creators.length})</div>
            {creators.map(c => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid var(--br)' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(168,85,247,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 11, fontWeight: 700, color: '#a855f7' }}>{c[1]?.toUpperCase()}</div>
                <div style={{ fontSize: 11, fontWeight: 700 }}>{c}</div>
              </div>
            ))}
          </>
        )}
        {products.length === 0 && posts.length === 0 && creators.length === 0 && (
          <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--mu)' }}>
            <Bookmark size={28} style={{ margin: '0 auto 8px', display: 'block', opacity: .3 }} />
            <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono' }}>Nothing saved yet</div>
          </div>
        )}
      </div>
    </div>
  );
};


const BADGE_DEFS = [
  {
    id: 'starter', name: 'Vibe Starter', req: { posts: 1, likes: 1, comments: 1 },
    Icon: Zap, color: '#22d3ee', grad: 'linear-gradient(135deg,#22d3ee,#0891b2)',
    glow: '#22d3ee', desc: 'Took the first step into the VibeVerse',
    howToEarn: 'Post 1 vibe, get 1 like & leave 1 comment',
    particleColors: ['#22d3ee', '#67e8f9', '#ffffff', '#0891b2'], particleType: 'electric'
  },
  {
    id: 'serious', name: 'Serious Viber', req: { posts: 50, likes: 50, comments: 50 },
    Icon: Flame, color: '#f59e0b', grad: 'linear-gradient(135deg,#f59e0b,#d97706)',
    glow: '#f59e0b', desc: '50 posts, 50 likes, 50 comments — you mean business',
    howToEarn: 'Reach 50 posts, 50 likes & 50 comments',
    particleColors: ['#f59e0b', '#ef4444', '#fbbf24', '#ec4899'], particleType: 'fire'
  },
  {
    id: 'ultimate', name: 'Ultimate Viber', req: { posts: 250, likes: 250, comments: 250 },
    Icon: Star, color: '#a855f7', grad: 'linear-gradient(135deg,#a855f7,#7c3aed)',
    glow: '#a855f7', desc: '250 of everything — the community knows your name',
    howToEarn: 'Reach 250 posts, 250 likes & 250 comments',
    particleColors: ['#a855f7', '#f59e0b', '#fbbf24', '#c084fc'], particleType: 'star'
  },
  {
    id: 'party', name: 'Vibe of the Party', req: { posts: 1000, likes: 1000, comments: 1000 },
    Icon: Sparkles, color: '#ec4899', grad: 'linear-gradient(135deg,#ec4899,#db2777)',
    glow: '#ec4899', desc: '1,000 contributions — the life of every feed',
    howToEarn: 'Reach 1,000 posts, 1,000 likes & 1,000 comments',
    particleColors: ['#ec4899', '#a855f7', '#22d3ee', '#f59e0b', '#10b981'], particleType: 'sparkle'
  },
  {
    id: 'world', name: 'Vibe of the World', req: { posts: 3000, likes: 3000, comments: 3000 },
    Icon: Globe, color: '#10b981', grad: 'linear-gradient(135deg,#10b981,#059669)',
    glow: '#10b981', desc: '3,000 of everything — you\'ve shaped the VibeVerse',
    howToEarn: 'Reach 3,000 posts, 3,000 likes & 3,000 comments',
    particleColors: ['#10b981', '#34d399', '#22d3ee', '#6ee7b7'], particleType: 'globe'
  },
  {
    id: 'vibetagonist', name: 'Vibetagonist', req: { posts: 10000, likes: 10000, comments: 10000 },
    Icon: Trophy, color: '#f59e0b', grad: 'linear-gradient(135deg,#f59e0b,#a855f7,#ec4899)',
    glow: '#fff', desc: '10,000+ — you ARE the VibeVerse. Legend.',
    howToEarn: 'Reach 10,000 posts, 10,000 likes & 10,000 comments',
    particleColors: ['#f59e0b', '#ffffff', '#a855f7', '#ec4899', '#22d3ee'], particleType: 'trophy'
  },
];

const POSTS_DATA = [
  { id: 1, user: '@neonphoenix', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', time: '2h ago', txt: "Just shipped my AI-generated UI kit. 3 months of vibe coding every night. It's LIVE 🚀 Check it out in the Market!", tags: ['#React', '#AI', '#Launch'], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=320&fit=crop', lk: 284, cm: 47, isFollowed: true },
  { id: 2, user: '@starweaver', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', time: '5h ago', txt: 'Who wants to collab on a real-time collab tool? DM if interested. Need: Backend + WebSocket specialist. Budget available 💰', tags: ['#Collab', '#WebSocket'], img: null, lk: 156, cm: 89, isFollowed: false },
  { id: 3, user: '@quantumrift', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', time: '1d ago', txt: 'The future of vibe coding is spatial. Three.js portfolio I built in 48hrs from scratch. Link in bio 👇', tags: ['#Three.js', '#WebGL', '#Portfolio'], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=320&fit=crop', lk: 501, cm: 62, isFollowed: true },
  { id: 4, user: '@ghostdev', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', time: '3h ago', txt: 'Hot take: Auth is the most under-rated part of any SaaS. Get it wrong once and you\'re done. We finally got it right 💪', tags: ['#Auth', '#SaaS', '#Security'], img: null, lk: 98, cm: 33, isFollowed: false },
  { id: 5, user: '@cryptoui', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', time: '6h ago', txt: 'New drop: Orbital Web3 Portfolio just got a massive update. 3D wallet animations, new NFT gallery sections. Go check the Market!', tags: ['#Web3', '#NFT', '#Update'], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=320&fit=crop', lk: 312, cm: 55, isFollowed: true },
  { id: 6, user: '@audiodna', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', time: '8h ago', txt: 'Building in public: day 47 of my SynthVoice rebuild. Waveform visualizer is finally looking chef\'s kiss 🎵', tags: ['#BuildInPublic', '#Audio', '#Progress'], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=320&fit=crop', lk: 189, cm: 28, isFollowed: false },
  { id: 7, user: '@voidcraft', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', time: '12h ago', txt: 'Dropped Luminary Design System 3.0 today. 300+ components, full dark mode, Figma + React. 18 months of work 😤', tags: ['#DesignSystem', '#Figma', '#React'], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=320&fit=crop', lk: 621, cm: 142, isFollowed: true },
  { id: 8, user: '@spectra.io', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', time: '1d ago', txt: 'PSA: if you\'re still typing out TypeScript types by hand in 2026 you\'re doing it wrong. Zod + inference changed my life.', tags: ['#TypeScript', '#Zod', '#DX'], img: null, lk: 445, cm: 78, isFollowed: false },
];

/* ─── BADGE CELEBRATION POPUP ─────────────────────────────── */
const BadgeCelebration = ({ badge, onClose }) => {
  const [pts] = React.useState(Array.from({ length: 40 }, (_, i) => ({
    id: i, angle: (i / 40) * Math.PI * 2, dist: 80 + Math.random() * 80,
    size: 4 + Math.random() * 6, color: [badge.color, badge.glow, '#fff', '#f59e0b', '#ec4899'][i % 5],
    delay: Math.random() * .5,
  })));
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(0,0,0,.85)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
      <div style={{ position: 'relative', textAlign: 'center', animation: 'sU .4s ease' }} onClick={e => e.stopPropagation()}>
        {pts.map(p => (
          <div key={p.id} style={{ position: 'absolute', top: '50%', left: '50%', width: p.size, height: p.size, borderRadius: '50%', background: p.color, '--tx': Math.cos(p.angle) * p.dist + 'px', '--ty': Math.sin(p.angle) * p.dist + 'px', animation: `particleBurst 1.2s ${p.delay}s ease-out infinite`, boxShadow: `0 0 ${p.size * 2}px ${p.color}`, pointerEvents: 'none' }} />
        ))}
        <div style={{ width: 110, height: 110, borderRadius: '50%', background: badge.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 50, margin: '0 auto 18px', boxShadow: `0 0 40px ${badge.glow},0 0 80px ${badge.glow}55`, animation: 'fl 2s ease-in-out infinite', border: '3px solid rgba(255,255,255,.3)' }}>
          {badge.Icon && React.createElement(badge.Icon, { size: 50, color: "white", strokeWidth: 1.5 })}
        </div>
        <div style={{ fontSize: 11, color: badge.color, fontFamily: 'JetBrains Mono', letterSpacing: '.15em', marginBottom: 8 }}>BADGE UNLOCKED</div>
        <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'Orbitron', background: badge.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 6 }}>{badge.name}</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', maxWidth: 280, margin: '0 auto 24px', lineHeight: 1.6 }}>{badge.desc}</div>
        <button onClick={onClose} style={{ padding: '10px 32px', borderRadius: 999, border: `1px solid ${badge.color}55`, background: `${badge.color}18`, color: badge.color, fontFamily: 'Orbitron', fontWeight: 700, fontSize: 11, cursor: 'pointer', letterSpacing: '.08em' }}>AWESOME ✦</button>
      </div>
    </div>
  );
};

/* ─── TRENDING SIDEBAR ─────────────────────────────────────── */
const TrendingSidebar = ({ posts, hashFil, setHashFil }) => {
  const counts = React.useMemo(() => {
    const map = {};
    posts.forEach(p => (p.tags || []).forEach(t => { map[t] = (map[t] || 0) + 1; }));
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 7);
  }, [posts]);
  const [topPts, setTopPts] = React.useState([]);
  React.useEffect(() => {
    const burst = () => setTopPts(Array.from({ length: 8 }, (_, i) => ({ id: Date.now() + i, angle: (i / 8) * Math.PI * 2, dist: 18 + Math.random() * 12, size: 2 + Math.random() * 2, color: ['#22d3ee', '#a855f7', '#ec4899', '#f59e0b'][i % 4] })));
    burst(); const iv = setInterval(burst, 800); return () => clearInterval(iv);
  }, [counts[0]?.[0]]);
  return (
    <div className="gl" style={{ borderRadius: 17, padding: 17 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 13 }}>
        <Flame size={16} color="#f59e0b" />
        <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Trending</span>
      </div>
      {counts.map(([tag, count], i) => (
        <div key={tag} onClick={() => setHashFil(hashFil === tag ? null : tag)}
          style={{ padding: '9px 0', borderBottom: '1px solid var(--br)', cursor: 'pointer', transition: 'all .2s', opacity: hashFil && hashFil !== tag ? .45 : 1, position: 'relative' }}>
          {i === 0 && topPts.map(p => (
            <div key={p.id} style={{ position: 'absolute', top: '50%', left: 8, width: p.size, height: p.size, borderRadius: '50%', background: p.color, pointerEvents: 'none', '--tx': Math.cos(p.angle) * p.dist + 'px', '--ty': Math.sin(p.angle) * p.dist + 'px', animation: 'particleBurst .8s ease-out forwards', boxShadow: `0 0 ${p.size * 2}px ${p.color}` }} />
          ))}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="M" style={{ fontSize: 8, color: 'var(--mu)', marginBottom: 2 }}>
                {i === 0 ? <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Flame size={10} color="#f59e0b" /> #1 Trending</span> : `#${i + 1} Trending`}
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: i === 0 ? '#f59e0b' : '#22d3ee' }}>{tag}</div>
            </div>
            <div style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{count} posts</div>
          </div>
          {i === 0 && <div style={{ height: 2, borderRadius: 1, background: 'linear-gradient(90deg,#f59e0b,#ec4899)', marginTop: 4, width: '100%', animation: 'sh 2s linear infinite', backgroundSize: '200% auto' }} />}
        </div>
      ))}
      {hashFil && <button onClick={() => setHashFil(null)} style={{ width: '100%', marginTop: 8, padding: '5px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 10, fontFamily: 'JetBrains Mono' }}>✕ Clear filter</button>}
    </div>
  );
};

/* ─── CREATORS SIDEBAR ─────────────────────────────────────── */
const CreatorsSidebar = ({ posts, followed, setFollowed, showToast }) => {
  const topCreators = React.useMemo(() => {
    const map = {};
    posts.forEach(p => {
      if (!map[p.user]) map[p.user] = { user: p.user, av: p.av, posts: 0, likes: 0, score: 0 };
      map[p.user].posts++;
      map[p.user].likes += p.lk || 0;
      map[p.user].score = map[p.user].posts * 10 + map[p.user].likes;
    });
    return Object.values(map).sort((a, b) => b.score - a.score).slice(0, 5);
  }, [posts]);
  return (
    <div className="gl" style={{ borderRadius: 17, padding: 17 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
        <Sparkles size={16} color="#a855f7" />
        <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Top Creators</span>
      </div>
      <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 13, letterSpacing: '.08em' }}>Resets every 24h · by activity</div>
      {topCreators.map((c, i) => (
        <div key={c.user} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 0', borderBottom: '1px solid var(--br)' }}>
          <div style={{ fontSize: 10, fontWeight: 900, fontFamily: 'Orbitron', color: i === 0 ? '#f59e0b' : i === 1 ? 'rgba(255,255,255,.5)' : i === 2 ? '#f59e0b55' : 'var(--mu)', width: 14, flexShrink: 0 }}>{i + 1}</div>
          <Av src={c.av} sz={30} on={i < 2} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.user}</div>
            <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{c.score} pts today</div>
          </div>
          <FollowBtn following={!!followed[c.user]} onFollow={() => { setFollowed(f => ({ ...f, [c.user]: !f[c.user] })); showToast(followed[c.user] ? 'Unfollowed' : 'Following ✓', '#10b981'); }} size="sm" />
        </div>
      ))}
    </div>
  );
};

/* ─── BADGE SIDEBAR ────────────────────────────────────────── */
const BadgeSidebar = ({ userStats, earnedBadges }) => {
  const current = BADGE_DEFS.findIndex(b => !earnedBadges.includes(b.id));
  const nextBadge = current >= 0 ? BADGE_DEFS[current] : null;
  const pct = nextBadge ? Math.min(100, Math.round((userStats.posts / nextBadge.req.posts) * 100)) : 100;
  return (
    <div className="gl" style={{ borderRadius: 17, padding: 17 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 13 }}>
        <Award size={16} color="#f59e0b" />
        <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Your Badges</span>
      </div>
      {/* Earned badges */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
        {BADGE_DEFS.map(b => (
          earnedBadges.includes(b.id) ?
            <BadgeIcon key={b.id} badge={b} earned size={32} earnedDate="Feb 2026" /> :
            <div key={b.id} style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,.05)', border: '1.5px dashed rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, opacity: .4 }}>{b.Icon && React.createElement(b.Icon, { size: 14, color: "rgba(255,255,255,.3)", strokeWidth: 2 })}</div>
        ))}
      </div>
      {nextBadge && <>
        <div style={{ fontSize: 10, color: 'var(--mu)', marginBottom: 6 }}>Next: <span style={{ color: nextBadge.color, fontWeight: 700 }}>{nextBadge.name}</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginBottom: 10 }}>
          {[['Posts', userStats.posts, nextBadge.req.posts], ['Likes', userStats.likes, nextBadge.req.likes], ['Comments', userStats.comments, nextBadge.req.comments]].map(([l, v, r]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 9, color: 'var(--mu)', marginBottom: 3, fontFamily: 'JetBrains Mono' }}>{l}</div>
              <div className="pb"><div className="pf" style={{ width: Math.min(100, Math.round(v / r * 100)) + '%' }} /></div>
              <div style={{ fontSize: 8, color: 'var(--mu)', marginTop: 2, fontFamily: 'JetBrains Mono' }}>{v}/{r}</div>
            </div>
          ))}
        </div>
      </>}
      {earnedBadges.length === BADGE_DEFS.length && <div style={{ textAlign: 'center', padding: '10px 0', fontSize: 12, color: '#f59e0b', fontFamily: 'Orbitron', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}><Trophy size={14} color="#f59e0b" /> ALL BADGES EARNED</div>}
    </div>
  );
};

/* ─── EMOJI PICKER ─────────────────────────────────────────── */
const EMOJIS = ['😀', '😂', '🔥', '💜', '⚡', '🚀', '💡', '🎯', '✅', '👑', '💎', '🌟', '🎉', '💪', '🤝', '👀', '🧠', '⚙️', '🛠️', '📦', '🎨', '🌈', '💻', '🖥️', '📱', '⭐', '🏆', '🎮', '🌊', '💫'];
const EmojiPicker = ({ onPick, onClose }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
    setTimeout(() => document.addEventListener('mousedown', handler), 0);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);
  return (
    <div ref={ref} style={{ position: 'absolute', bottom: '110%', left: 0, background: 'rgba(8,12,26,.98)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, padding: 10, zIndex: 80, display: 'flex', flexWrap: 'wrap', gap: 4, width: 220, boxShadow: '0 16px 40px rgba(0,0,0,.6)', animation: 'sU .15s ease' }}>
      {EMOJIS.map(e => (
        <button key={e} onClick={() => { onPick(e); onClose(); }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, padding: 3, borderRadius: 6, transition: 'background .15s' }}
          onMouseEnter={ev => ev.currentTarget.style.background = 'rgba(255,255,255,.08)'}
          onMouseLeave={ev => ev.currentTarget.style.background = 'none'}>{e}</button>
      ))}
    </div>
  );
};

/* ─── INVITE MODAL ─────────────────────────────────────────── */
const InviteModal = ({ user, onClose, onSend }) => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(0,0,0,.7)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
    <div style={{ background: 'rgba(8,12,26,.97)', borderRadius: 20, border: '1px solid rgba(34,211,238,.2)', width: 360, padding: '28px', animation: 'sU .25s ease' }} onClick={e => e.stopPropagation()}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(34,211,238,.12)', border: '1px solid rgba(34,211,238,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
          <UserCheck size={24} color="#22d3ee" strokeWidth={1.8} />
        </div>
        <h3 className="O" style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>Invite to Vibe Connect</h3>
        <p style={{ fontSize: 12, color: 'var(--mu)', lineHeight: 1.6 }}>Send <strong style={{ color: '#22d3ee' }}>{user}</strong> an invitation to connect on Vibe Connect. They can accept or decline.</p>
      </div>
      <div style={{ background: 'rgba(34,211,238,.06)', borderRadius: 12, padding: '12px 14px', marginBottom: 16, border: '1px solid rgba(34,211,238,.12)' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', marginBottom: 4, fontFamily: 'JetBrains Mono' }}>Your message (optional):</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', fontStyle: 'italic' }}>"Hey! I'd love to connect with you on Vibe Connect to collaborate."</div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={onClose} style={{ flex: 1, padding: '10px', borderRadius: 10, border: '1px solid rgba(255,255,255,.1)', background: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700 }}>Cancel</button>
        <button onClick={onSend} className="SB" style={{ flex: 2, padding: '10px', borderRadius: 10, border: 'none', cursor: 'pointer', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Orbitron', letterSpacing: '.04em' }}>Send Invite ✦</button>
      </div>
    </div>
  </div>
);

/* ─── POST CARD ────────────────────────────────────────────── */
const PostCard = ({ p, lk, bm, notifs, followed, hidden, setLk, setBm, setNotifs, setFollowed, setHidden, showToast, onInvite, onHashClick, hashFil, userStats, setUserStats, checkBadge, feedFilter, onProfileClick }) => {
  const [commenting, setCommenting] = React.useState(false);
  const [commentText, setCommentText] = React.useState('');
  const [reported, setReported] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showInvite, setShowInvite] = React.useState(false);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    const close = e => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    if (menuOpen) document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [menuOpen]);

  if (hidden[p.id]) return null;
  const isFollowed = followed[p.user];
  const isFromFollowing = p.isFollowed || isFollowed;
  const showFollowBg = feedFilter === 'all' && isFromFollowing;

  const doLike = () => {
    setLk(x => ({ ...x, [p.id]: !x[p.id] }));
    if (!lk[p.id]) { const s = { ...userStats, likes: userStats.likes + 1 }; setUserStats(s); checkBadge(s); }
  };
  const doComment = () => {
    if (!commentText.trim()) return;
    const s = { ...userStats, comments: userStats.comments + 1 }; setUserStats(s); checkBadge(s);
    showToast('Comment posted ✓', '#10b981');
    setCommentText(''); setCommenting(false);
  };

  return (
    <>
      {showInvite && <InviteModal user={p.user} onClose={() => setShowInvite(false)} onSend={() => { showToast(`Invite sent to ${p.user} ✓`, '#22d3ee'); setShowInvite(false); }} />}
      <div className="gl" style={{ borderRadius: 19, overflow: 'hidden', transition: 'all .2s', border: `1px solid ${showFollowBg ? 'rgba(34,211,238,.18)' : 'rgba(255,255,255,.06)'}`, background: showFollowBg ? 'rgba(34,211,238,.04)' : 'rgba(255,255,255,.03)', position: 'relative' }}>
        {showFollowBg && <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: 'linear-gradient(180deg,#22d3ee,#a855f7)', borderRadius: '19px 0 0 19px' }} />}
        <div style={{ padding: '15px 16px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 11 }}>
            <div onClick={() => onProfileClick && onProfileClick({ av: p.av, handle: p.user, name: p.user, role: 'Creator', on: isFollowed })} style={{ cursor: 'pointer' }}><Av src={p.av} sz={38} on={isFollowed} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ fontWeight: 700, fontSize: 13 }}>{p.user}</span>
                {isFollowed && <div style={{ fontSize: 9, color: '#22d3ee', fontFamily: 'JetBrains Mono', padding: '1px 6px', borderRadius: 4, background: 'rgba(34,211,238,.1)' }}>Following</div>}
              </div>
              <div className="M" style={{ fontSize: 9, color: 'var(--mu)' }}>{p.time}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <button onClick={() => { setFollowed(f => ({ ...f, [p.user]: !f[p.user] })); showToast(followed[p.user] ? `Unfollowed ${p.user}` : `Now following ${p.user} ✓`, '#10b981'); }}
                style={{ padding: '4px 11px', borderRadius: 7, border: `1px solid ${followed[p.user] ? 'transparent' : 'rgba(34,211,238,.3)'}`, cursor: 'pointer', color: followed[p.user] ? 'white' : '#22d3ee', fontSize: 10, fontWeight: 700, fontFamily: 'Rajdhani', background: followed[p.user] ? 'linear-gradient(90deg,#22d3ee,#a855f7)' : 'none', transition: 'all .2s' }}>
                {followed[p.user] ? 'Following' : 'Follow'}
              </button>
              <div ref={menuRef} style={{ position: 'relative' }}>
                <button onClick={() => setMenuOpen(m => !m)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 16, lineHeight: 1, padding: '2px 6px', borderRadius: 6, transition: 'background .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.07)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}>⋯</button>
                {menuOpen && (
                  <div style={{ position: 'absolute', right: 0, top: '110%', background: 'rgba(8,12,26,.98)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, zIndex: 80, minWidth: 170, overflow: 'hidden', animation: 'sU .15s ease', boxShadow: '0 12px 32px rgba(0,0,0,.6)' }}>
                    {[
                      [{ Icon: Bell, iconColor: '#22d3ee', label: notifs[p.id] ? 'Mute notifications' : 'Notify on post', action: () => { setNotifs(n => ({ ...n, [p.id]: !n[p.id] })); showToast(notifs[p.id] ? 'Notifications off' : 'Notifications on', '#22d3ee'); setMenuOpen(false); } },
                      { Icon: UserPlus, iconColor: '#a855f7', label: `Invite ${p.user} to Connect`, action: () => { if (!followed[p.user]) { showToast('Follow this creator first to invite', '#f59e0b'); setMenuOpen(false); return; } setShowInvite(true); setMenuOpen(false); } },
                      { Icon: Flag, iconColor: '#f59e0b', label: 'Report post', action: () => { setReported(true); showToast('Post reported. Thanks.', '#f59e0b'); setMenuOpen(false); } },
                      { Icon: EyeOff, iconColor: 'rgba(255,255,255,.4)', label: 'Hide post', action: () => { setHidden(h => ({ ...h, [p.id]: true })); showToast('Post hidden', 'rgba(255,255,255,.4)'); setMenuOpen(false); } }]
                    ][0].map(({ icon, label, action }) => (
                      <button key={label} onClick={action} style={{ display: 'flex', alignItems: 'center', gap: 9, width: '100%', padding: '10px 14px', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.75)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, textAlign: 'left', transition: 'background .15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                        <Icon size={13} color={iconColor} />{label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          {p.isBrief && <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 999, background: 'rgba(245,158,11,.12)', border: '1px solid rgba(245,158,11,.3)', marginBottom: 8, fontSize: 9, fontFamily: 'JetBrains Mono', color: '#f59e0b', fontWeight: 700, letterSpacing: '.08em' }}><FileText size={9} /> PROJECT BRIEF · OPEN FOR PROPOSALS</div>}
          <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 9, wordBreak: 'break-word' }}>{p.txt}</p>
          <div style={{ display: 'flex', gap: 6, marginBottom: 11, flexWrap: 'wrap' }}>
            {(p.tags || []).map(t => (
              <span key={t} onClick={() => onHashClick(t)} style={{ fontSize: 10, color: hashFil === t ? '#f59e0b' : '#22d3ee', fontFamily: 'JetBrains Mono', cursor: 'pointer', padding: '2px 8px', borderRadius: 6, background: hashFil === t ? 'rgba(245,158,11,.12)' : 'rgba(34,211,238,.08)', transition: 'all .15s', border: `1px solid ${hashFil === t ? 'rgba(245,158,11,.3)' : 'rgba(34,211,238,.15)'}` }}>{t}</span>
            ))}
          </div>
        </div>
        {p.img && <div style={{ height: 200, overflow: 'hidden' }}><img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>}
        <div style={{ padding: '10px 14px' }}>
          <div style={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <button onClick={doLike} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: lk[p.id] ? '#ec4899' : 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, borderRadius: 8, transition: 'all .15s' }}>
              <Heart size={13} fill={lk[p.id] ? '#ec4899' : 'none'} color={lk[p.id] ? '#ec4899' : 'var(--mu)'} />{p.lk + (lk[p.id] ? 1 : 0)}
            </button>
            <button onClick={() => setCommenting(c => !c)} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: commenting ? '#22d3ee' : 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, borderRadius: 8, transition: 'all .15s' }}>
              <MessageCircle size={13} />{p.cm}
            </button>
            <button onClick={() => { setBm(x => ({ ...x, [p.id]: !x[p.id] })); showToast(bm[p.id] ? 'Removed bookmark' : 'Bookmarked ✓', '#a855f7'); }} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: bm[p.id] ? '#a855f7' : 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, borderRadius: 8, transition: 'all .15s' }}>
              <Bookmark size={13} fill={bm[p.id] ? '#a855f7' : 'none'} color={bm[p.id] ? '#a855f7' : 'var(--mu)'} />
            </button>
            <button onClick={() => setNotifs(n => ({ ...n, [p.id]: !n[p.id] }))} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: notifs[p.id] ? '#f59e0b' : 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, borderRadius: 8, transition: 'all .15s' }}>
              <Bell size={13} fill={notifs[p.id] ? '#f59e0b' : 'none'} color={notifs[p.id] ? '#f59e0b' : 'var(--mu)'} />
            </button>
            <button onClick={() => { navigator.clipboard?.writeText(window.location.href); showToast('Link copied ✓', '#22d3ee'); }} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, borderRadius: 8, transition: 'all .15s', marginLeft: 'auto' }}>
              <Share2 size={13} />
            </button>
          </div>
          {commenting && (
            <div style={{ display: 'flex', gap: 8, paddingTop: 8, borderTop: '1px solid var(--br)', marginTop: 4 }}>
              <input value={commentText} onChange={e => setCommentText(e.target.value)} onKeyDown={e => e.key === 'Enter' && doComment()} placeholder="Write a comment... @mention someone" style={{ flex: 1, background: 'rgba(255,255,255,.04)', border: '1px solid var(--br)', borderRadius: 9, padding: '7px 12px', color: 'white', fontSize: 12, fontFamily: 'Rajdhani', outline: 'none' }} />
              <button onClick={doComment} className="SB" style={{ padding: '7px 14px', borderRadius: 9, border: 'none', cursor: 'pointer', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani' }}>Post</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

/* ─── CREATE POST BOX ──────────────────────────────────────── */
const CreatePostBox = ({ onPost }) => {
  const [txt, setTxt] = React.useState('');
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [attachPreview, setAttachPreview] = React.useState(null);
  const fileRef = React.useRef(null);
  const textRef = React.useRef(null);

  const insertAtCursor = (insert) => {
    const el = textRef.current; if (!el) return;
    const s = el.selectionStart, e = el.selectionEnd;
    const next = txt.slice(0, s) + insert + txt.slice(e);
    setTxt(next);
    setTimeout(() => { el.focus(); el.setSelectionRange(s + insert.length, s + insert.length); }, 0);
  };

  const handleKeyDown = e => {
    if (e.key === '@') { setTimeout(() => { const pos = e.target.selectionStart; const before = txt.slice(0, pos); if (before.endsWith('@')) setTxt(t => t); }, 0); }
  };

  const doPost = () => {
    if (!txt.trim()) return;
    onPost(txt, attachPreview);
    setTxt(''); setAttachPreview(null);
  };

  return (
    <div className="gl" style={{ borderRadius: 18, padding: '14px 16px', position: 'relative' }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
        <Av src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=80&h=80&fit=crop" sz={36} />
        <textarea ref={textRef} value={txt} onChange={e => setTxt(e.target.value)} onKeyDown={handleKeyDown}
          placeholder="Share what you're building... use #hashtags to trend, @mention creators" rows={3}
          style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: 'white', fontSize: 13, fontFamily: 'Rajdhani', resize: 'none', lineHeight: 1.65 }} />
      </div>
      {attachPreview && (
        <div style={{ position: 'relative', marginBottom: 10, borderRadius: 10, overflow: 'hidden', maxHeight: 160 }}>
          <img src={attachPreview} alt="" style={{ width: '100%', objectFit: 'cover', maxHeight: 160 }} />
          <button onClick={() => setAttachPreview(null)} style={{ position: 'absolute', top: 6, right: 6, width: 24, height: 24, borderRadius: '50%', background: 'rgba(0,0,0,.7)', border: 'none', cursor: 'pointer', color: 'white', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, borderTop: '1px solid var(--br)', paddingTop: 10 }}>
        <div style={{ position: 'relative' }}>
          <button onClick={() => setShowEmoji(s => !s)} title="Add emoji" style={{ width: 32, height: 32, borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer', color: showEmoji ? '#f59e0b' : 'var(--mu)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
            onMouseLeave={e => e.currentTarget.style.background = 'none'}><Sparkles size={15} /></button>
          {showEmoji && <EmojiPicker onPick={insertAtCursor} onClose={() => setShowEmoji(false)} />}
        </div>
        <button onClick={() => fileRef.current?.click()} title="Attach image/video/gif" style={{ width: 32, height: 32, borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}>
          <Upload size={14} />
        </button>
        <input ref={fileRef} type="file" accept="image/*,video/*,.gif" style={{ display: 'none' }} onChange={e => { const f = e.target.files?.[0]; if (f) { const url = URL.createObjectURL(f); setAttachPreview(url); } }} />
        <button onClick={() => insertAtCursor('@')} title="Tag someone" style={{ width: 32, height: 32, borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 13, fontWeight: 700, fontFamily: 'Orbitron', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}>@</button>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginRight: 8 }}>{txt.length}/500</span>
        <button onClick={doPost} className="SB" disabled={!txt.trim()}
          style={{ padding: '7px 20px', borderRadius: 9, border: 'none', cursor: txt.trim() ? 'pointer' : 'default', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', opacity: txt.trim() ? 1 : .5, position: 'relative', overflow: 'hidden', transition: 'transform .15s' }}
          onMouseEnter={e => { if (txt.trim()) { e.currentTarget.style.transform = 'scale(1.04)'; const r = document.createElement('span'); const rect = e.currentTarget.getBoundingClientRect(); r.style.cssText = `position:absolute;width:100px;height:100px;border-radius:50%;background:rgba(255,255,255,.2);transform:translate(-50%,-50%) scale(0);animation:rippleEffect .5s ease-out forwards;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;pointer-events:none`; e.currentTarget.appendChild(r); setTimeout(() => r.remove(), 500); } }}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
          Post to Vibe
        </button>
      </div>
    </div>
  );
};

/* ─── COMMUNITY ────────────────────────────────────────────── */
const Community = ({ extraPosts }) => {
  const [posts, setPosts] = useState(POSTS_DATA);
  const [lk, setLk] = useState({});
  const [bm, setBm] = useState({});
  const [notifs, setNotifs] = useState({});
  const [followed, setFollowed] = useState({});
  const [hidden, setHidden] = useState({});
  const [toast, setToast] = useState(null);
  const [profileUser, setProfileUser] = useState(null);
  const [hashFil, setHashFil] = useState(null);
  const [feedFilter, setFeedFilter] = useState('discover'); // 'discover'|'following'|'all'
  const [userStats, setUserStats] = useState({ posts: 0, likes: 0, comments: 0 });
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [badgePopup, setBadgePopup] = useState(null);

  React.useEffect(() => {
    if (extraPosts?.length) setPosts(p => [...extraPosts.filter(ep => !p.find(x => x.id === ep.id)), ...p]);
  }, [extraPosts]);

  const showToast = (msg, color = '#22d3ee') => { setToast({ msg, color }); setTimeout(() => setToast(null), 2200); };

  const checkBadge = (stats) => {
    BADGE_DEFS.forEach(b => {
      if (!earnedBadges.includes(b.id) && stats.posts >= b.req.posts && stats.likes >= b.req.likes && stats.comments >= b.req.comments) {
        setEarnedBadges(e => [...e, b.id]);
        setBadgePopup(b);
      }
    });
  };

  const addPost = (txt, imgSrc) => {
    const tags = txt.match(/#\w+/g) || [];
    setPosts(p => [{ id: Date.now(), user: '@you', av: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=80&h=80&fit=crop', time: 'just now', txt, tags, img: imgSrc || null, lk: 0, cm: 0, isFollowed: false }, ...p]);
    const s = { ...userStats, posts: userStats.posts + 1 }; setUserStats(s); checkBadge(s);
    showToast('Post published! ✓', '#10b981');
  };

  const visiblePosts = posts.filter(p => {
    if (hidden[p.id]) return false;
    if (hashFil && !(p.tags || []).includes(hashFil)) return false;
    if (feedFilter === 'following') return p.isFollowed || followed[p.user];
    return true;
  });

  return (
    <div style={{ padding: '0 22px 80px' }}>
      {toast && <Toast msg={toast.msg} color={toast.color} />}
      {badgePopup && <BadgeCelebration badge={badgePopup} onClose={() => setBadgePopup(null)} />}
      {profileUser && <UserProfileModal user={profileUser} onClose={() => setProfileUser(null)} followed={!!followed[profileUser.handle]} onFollow={() => { const k = profileUser.handle; setFollowed(f => ({ ...f, [k]: !f[k] })); showToast(followed[k] ? 'Unfollowed' : 'Following ✓', '#10b981'); }} earnedBadges={['starter']} onGetInTouch={u => showToast(`Message sent to ${u.cr || u.name} ✓`, '#22d3ee')} onInvite={u => showToast(`Invite sent to ${u.full || u.name} ✓`, '#a855f7')} />}
      <WorldBanner title="VIBE COMMUNITY" label="// NEURAL NETWORK ACTIVE" color1="#10b981" color2="#22d3ee" height={120} />

      {/* Feed filter tabs */}
      <div style={{ display: 'flex', gap: 3, marginBottom: 14, background: 'rgba(255,255,255,.04)', borderRadius: 11, padding: 4, alignSelf: 'flex-start', width: 'fit-content' }}>
        {[['discover', Globe, 'Discover'], ['following', Users, 'Following'], ['all', Layers, 'All']].map(([id, Icon, l]) => (
          <button key={id} onClick={() => setFeedFilter(id)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 18px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 12, fontFamily: 'Rajdhani', transition: 'all .2s', background: feedFilter === id ? 'rgba(255,255,255,.12)' : 'transparent', color: feedFilter === id ? 'white' : 'rgba(255,255,255,.4)' }}>
            <Icon size={13} />{l}
            {id === 'all' && feedFilter === 'all' && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', marginLeft: 2 }} />}
          </button>
        ))}
      </div>

      {/* "Following" banner — sticky with opaque bg so posts don't bleed through */}
      {feedFilter === 'all' && (
        <div style={{ position: 'sticky', top: 64, zIndex: 120, background: 'rgba(3,7,18,.99)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(34,211,238,.2)', marginLeft: -22, marginRight: -22, padding: '9px 22px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'rgba(34,211,238,.8)', fontFamily: 'JetBrains Mono', boxShadow: '0 4px 20px rgba(3,7,18,.95)' }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: 'linear-gradient(135deg,#22d3ee,#a855f7)', flexShrink: 0 }} /> Posts from people you follow have a <span style={{ color: '#22d3ee', fontWeight: 700, borderBottom: '1px solid rgba(34,211,238,.5)' }}>cyan left border</span>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 285px', gap: 18, alignItems: 'start' }}>
        {/* Main feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
          <CreatePostBox onPost={addPost} />
          {hashFil && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 14px', borderRadius: 10, background: 'rgba(245,158,11,.08)', border: '1px solid rgba(245,158,11,.2)' }}>
              <Flame size={12} color="#f59e0b" />
              <span style={{ fontSize: 12, color: '#f59e0b', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>Filtering: {hashFil}</span>
              <button onClick={() => setHashFil(null)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 11 }}>✕ Clear</button>
            </div>
          )}
          {visiblePosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--mu)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <Users size={24} color="var(--mu)" strokeWidth={1.5} />
              </div>
              <div style={{ fontFamily: 'Orbitron', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                {feedFilter === 'following' ? 'Follow creators to see their posts' : 'No posts yet'}
              </div>
              <div style={{ fontSize: 12 }}>{feedFilter === 'following' ? 'Discover creators and hit Follow to populate your feed.' : 'Be the first to post!'}</div>
            </div>
          )}
          {visiblePosts.map(p => (
            <PostCard key={p.id} p={p} lk={lk} bm={bm} notifs={notifs} followed={followed} hidden={hidden}
              setLk={setLk} setBm={setBm} setNotifs={setNotifs} setFollowed={setFollowed} setHidden={setHidden}
              showToast={showToast} onHashClick={t => setHashFil(hashFil === t ? null : t)} hashFil={hashFil}
              userStats={userStats} setUserStats={setUserStats} checkBadge={checkBadge} feedFilter={feedFilter}
              onProfileClick={u => setProfileUser(u)} />
          ))}
        </div>

        {/* Sidebar — sticky so it stays while feed scrolls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13, position: 'sticky', top: 80, alignSelf: 'flex-start', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto', overscrollBehavior: 'contain', scrollbarWidth: 'none', msOverflowStyle: 'none', zIndex: 10 }}>
          <style>{`.sidebar-scroll::-webkit-scrollbar{display:none}`}</style>
          <TrendingSidebar posts={posts} hashFil={hashFil} setHashFil={setHashFil} />
          <CreatorsSidebar posts={posts} followed={followed} setFollowed={setFollowed} showToast={showToast} />
          <BadgeSidebar userStats={userStats} earnedBadges={earnedBadges} />
        </div>
      </div>
    </div>
  );
};



/* ─── ACADEMY ─────────────────────────────────────────────── */
const CRS = [
  { id: 1, lv: 'Beginner', c: '#10b981', t: 'Foundations of Vibe Coding', d: 'Build your first project from zero.', n: 12, dur: '4h', en: '8.2k', img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=220&fit=crop', lessons: ['Intro to Vibe Coding', 'Setting up your environment', 'HTML/CSS fundamentals', 'JavaScript basics', 'Your first component', 'Git workflow', 'Deploying to Vercel', 'Final project'] },
  { id: 2, lv: 'Intermediate', c: '#22d3ee', t: 'React & Three.js Mastery', d: 'Craft immersive 3D experiences.', n: 18, dur: '7h', en: '4.5k', img: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=220&fit=crop', lessons: ['React hooks deep dive', 'Three.js scene setup', 'Lights and materials', 'Cameras and controls', 'Particle systems', 'Post-processing', 'Performance optimization', 'Final project'] },
  { id: 3, lv: 'Advanced', c: '#a855f7', t: 'Full-Stack AI Integration', d: 'Build AI-powered apps.', n: 24, dur: '12h', en: '2.1k', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop', lessons: ['LLM APIs overview', 'Prompt engineering', 'Streaming responses', 'RAG architecture', 'Vector databases', 'Agent workflows', 'Fine-tuning basics', 'Production deployment'] },
  { id: 4, lv: 'Expert', c: '#ec4899', t: 'Vibe World Architect Track', d: 'Build, publish, monetize.', n: 30, dur: '16h', en: '890', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=220&fit=crop', lessons: ['Platform architecture', 'Monetization models', 'Community growth', 'SEO for devs', 'Analytics setup', 'Legal for creators', 'Scaling to 10k users', 'IPO your project'] },
];
const Academy = () => {
  const [tab, setTab] = useState('courses');
  const [openCourse, setOpenCourse] = useState(null);
  const [completed, setCompleted] = useState({});
  const [votes, setVotes] = useState({});
  const [openGuide, setOpenGuide] = useState(null);
  const [toast, setToast] = useState(null);
  const showToast = (msg, color = '#a855f7') => { setToast({ msg, color }); setTimeout(() => setToast(null), 2000); };

  const FORUM_DATA = [
    { id: 1, t: 'Best way to handle real-time state in large collab apps?', a: '@devloop', v: 142, n: 23, body: 'I\'ve been wrestling with Zustand vs Jotai vs Redux for a collab canvas app with 50+ users. What are your recommendations for keeping state synced without re-renders killing performance?' },
    { id: 2, t: 'How I earned $3k in my first month on Vibe Market', a: '@neonphoenix', v: 389, n: 67, body: 'Shipping your first paid template feels impossible. Here\'s what worked: build for a niche audience, provide a live demo, and respond to every DM within 1 hour for the first week.' },
    { id: 3, t: 'Three.js performance: particles vs sprites for 50k objects?', a: '@quantumrift', v: 97, n: 14, body: 'Ran benchmarks on M1 MacBook. Instanced mesh wins by 8x over individual meshes. For particles, BufferGeometry + custom shader beats PointsMaterial past ~10k objects.' },
  ];
  const GUIDE_DATA = [
    { t: 'Selling Your First Project on Vibe Market', body: 'Start by picking a niche — don\'t build a general-purpose tool. Build something you needed yourself and solved. Take screenshots at every step. Write a README that reads like a sales page. Price at $49–$99 to start — it filters serious buyers.' },
    { t: 'Building Three.js Scenes from Scratch', body: 'Three.js has 3 required ingredients: a Scene, a Camera, and a Renderer. Add a light source and a Mesh and you\'re rendering. The trick to good-looking scenes is subtle ambient occlusion, bloom post-processing, and a well-chosen HDRI environment map.' },
    { t: 'Setting Up Real-Time Collab with WebSockets', body: 'Use Socket.io for quick starts, or raw WebSockets for production. The key insight: never send state — send operations. Instead of "user\'s cursor is at (420, 220)", send "user moved cursor by (+3, -2)". This makes conflict resolution trivial.' },
    { t: 'How to Build a Verified Creator Profile', body: 'VibeWorld verification requires: 1) a published project with 50+ downloads, 2) a linked GitHub with 6+ months activity, 3) 3 community upvotes from existing verified creators. The badge unlocks premium listing and reduced platform fees.' },
  ];
  const [forumData, setForumData] = useState(FORUM_DATA);
  const [openThread, setOpenThread] = useState(null);

  if (openCourse) {
    const doneCount = Object.keys(completed).filter(k => k.startsWith(`${openCourse.id}-`)).length;
    const pct = Math.round((doneCount / openCourse.lessons.length) * 100);
    return (
      <div style={{ padding: '0 22px 80px' }}>
        {toast && <Toast msg={toast.msg} color={toast.color} />}
        <button onClick={() => setOpenCourse(null)} style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700, marginBottom: 18, padding: '6px 0' }}>
          <RainbowArrow size={14} /> Back to Courses
        </button>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
          <div>
            <div style={{ position: 'relative', height: 200, borderRadius: 18, overflow: 'hidden', marginBottom: 20 }}>
              <img src={openCourse.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(3,7,18,.9),transparent)' }} />
              <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Bdg color={openCourse.c} ch={openCourse.lv} />
                <h2 style={{ fontSize: 20, fontWeight: 800, fontFamily: 'Orbitron', marginTop: 8 }}>{openCourse.t}</h2>
                <div style={{ marginTop: 10 }}><div className="pb"><div className="pf" style={{ width: pct + '%', transition: 'width .4s' }} /></div><span style={{ fontSize: 10, color: 'var(--mu)', marginTop: 4, display: 'block' }}>{pct}% complete · {doneCount}/{openCourse.lessons.length} lessons</span></div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {openCourse.lessons.map((l, i) => {
                const k = `${openCourse.id}-${i}`;
                const done = !!completed[k];
                return (
                  <div key={i} onClick={() => { setCompleted(c => ({ ...c, [k]: !c[k] })); !done && showToast(`Lesson ${i + 1} complete ✓`, '#10b981'); }} className="gl CU" style={{ borderRadius: 13, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', border: `1px solid ${done ? 'rgba(16,185,129,.3)' : 'var(--br)'}` }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: done ? 'rgba(16,185,129,.15)' : 'rgba(255,255,255,.05)', border: `1px solid ${done ? '#10b981' : 'rgba(255,255,255,.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {done ? <CheckCircle size={14} color="#10b981" /> : <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--mu)' }}>{i + 1}</span>}
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: done ? 'rgba(255,255,255,.5)' : 'white', textDecoration: done ? 'line-through' : 'none' }}>{l}</span>
                    <Play size={13} color="var(--mu)" style={{ marginLeft: 'auto' }} />
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="gl" style={{ borderRadius: 15, padding: 16 }}>
              <div className="O" style={{ fontSize: 11, fontWeight: 700, marginBottom: 12, color: 'var(--mu)' }}>COURSE INFO</div>
              {[[openCourse.n + ' lessons', BookOpen, '#a855f7'], [openCourse.dur, Clock, '#22d3ee'], [openCourse.en + ' enrolled', Users, '#10b981']].map(([v, Icon, c]) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 0', borderBottom: '1px solid var(--br)', fontSize: 12 }}><Icon size={14} color={c} /><span>{v}</span></div>
              ))}
            </div>
            {pct === 100 && <div className="SB" style={{ borderRadius: 13, padding: '14px', textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9 }} onClick={() => showToast('Certificate issued! ✓', '#a855f7')}>
              <Award size={20} color="white" />
              <div style={{ fontSize: 13, fontWeight: 800, color: 'white', fontFamily: 'Orbitron' }}>Claim Certificate</div>
            </div>}
          </div>
        </div>
      </div>
    );
  }

  if (openThread) {
    return (
      <div style={{ padding: '0 22px 80px' }}>
        {toast && <Toast msg={toast.msg} color={toast.color} />}
        <button onClick={() => setOpenThread(null)} style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700, marginBottom: 18, padding: '6px 0' }}>
          <RainbowArrow size={14} /> Back to Forum
        </button>
        <div className="gl" style={{ borderRadius: 18, padding: 24, marginBottom: 16 }}>
          <h2 style={{ fontSize: 17, fontWeight: 800, marginBottom: 12, lineHeight: 1.4 }}>{openThread.t}</h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', lineHeight: 1.8 }}>{openThread.body}</p>
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 11, color: 'var(--mu)' }}>{openThread.a}</span>
            <button onClick={() => { setVotes(v => ({ ...v, [openThread.id]: !v[openThread.id] })); setForumData(f => f.map(x => x.id === openThread.id ? { ...x, v: x.v + (votes[openThread.id] ? -1 : 1) } : x)); }} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 8, border: `1px solid ${votes[openThread.id] ? '#22d3ee' : 'rgba(255,255,255,.1)'}`, background: votes[openThread.id] ? 'rgba(34,211,238,.1)' : 'none', cursor: 'pointer', color: votes[openThread.id] ? '#22d3ee' : 'var(--mu)', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani' }}>
              <ThumbsUp size={12} />{forumData.find(x => x.id === openThread.id)?.v}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (openGuide) {
    return (
      <div style={{ padding: '0 22px 80px' }}>
        {toast && <Toast msg={toast.msg} color={toast.color} />}
        <button onClick={() => setOpenGuide(null)} style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700, marginBottom: 18, padding: '6px 0' }}>
          <RainbowArrow size={14} /> Back to Guides
        </button>
        <div className="gl" style={{ borderRadius: 18, padding: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 18 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(168,85,247,.13)', border: '1px solid rgba(168,85,247,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FileText size={19} color="#a855f7" /></div>
            <h2 style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Orbitron', flex: 1, lineHeight: 1.3 }}>{openGuide.t}</h2>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.75)', lineHeight: 1.9 }}>{openGuide.body}</p>
          <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#10b981' }}><CheckCircle size={12} color="#10b981" />Community Guide · Verified</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '0 22px 80px' }}>
      {toast && <Toast msg={toast.msg} color={toast.color} />}
      <WorldBanner title="VIBE ACADEMY" label="// SKILL_TREE.LOAD()" color1="#a855f7" color2="#ec4899" height={140} />
      <div className="gl" style={{ display: 'inline-flex', borderRadius: 11, padding: 3, marginBottom: 22, gap: 3 }}>
        {[['courses', BookOpen, 'Courses'], ['forum', MessageCircle, 'Forum'], ['guides', FileText, 'Guides']].map(([id, Icon, l]) => (
          <button key={id} onClick={() => setTab(id)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 18px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 12, fontFamily: 'Rajdhani,sans-serif', transition: 'all .2s', background: tab === id ? 'linear-gradient(135deg,#a855f7,#22d3ee)' : 'transparent', color: tab === id ? 'white' : 'var(--mu)' }}><Icon size={13} />{l}</button>
        ))}
      </div>
      {tab === 'courses' && <>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 20, marginBottom: 32 }}>
          {CRS.map(c => {
            const doneCount = Object.keys(completed).filter(k => k.startsWith(`${c.id}-`)).length;
            const pct = Math.round((doneCount / c.lessons.length) * 100);
            return (
              <div key={c.id} className="gl CU" style={{ borderRadius: 19, overflow: 'hidden', cursor: 'pointer' }} onClick={() => setOpenCourse(c)}>
                <div style={{ position: 'relative', height: 128 }}><img src={c.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /><div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(3,7,18,.85),transparent)' }} /><div style={{ position: 'absolute', top: 9, left: 9 }}><Bdg color={c.c} ch={c.lv} /></div><div style={{ position: 'absolute', bottom: 7, right: 9, padding: 7, borderRadius: 9, background: 'rgba(0,0,0,.5)', animation: 'playCycle 2.5s linear infinite' }}><Play size={15} /></div></div>
                <div style={{ padding: 15 }}><h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>{c.t}</h3><p style={{ fontSize: 11, color: 'var(--mu)', lineHeight: 1.6, marginBottom: 11 }}>{c.d}</p><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--mu)', marginBottom: 8 }}><span>{c.n} lessons · {c.dur}</span><span>{c.en}</span></div><div className="pb"><div className="pf" style={{ width: pct + '%', transition: 'width .4s' }} /></div><div style={{ fontSize: 9, color: 'var(--mu)', marginTop: 3, textAlign: 'right' }}>{pct}%</div></div>
              </div>
            );
          })}
        </div>
      </>}
      {tab === 'forum' && <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
        {forumData.map(item => (
          <div key={item.id} className="gl CU" style={{ borderRadius: 15, padding: '16px 20px', display: 'flex', gap: 16, alignItems: 'flex-start', cursor: 'pointer' }} onClick={() => setOpenThread(item)}>
            <div style={{ textAlign: 'center', minWidth: 42 }}>
              <button onClick={e => { e.stopPropagation(); setVotes(v => ({ ...v, [item.id]: !v[item.id] })); setForumData(f => f.map(x => x.id === item.id ? { ...x, v: x.v + (votes[item.id] ? -1 : 1) } : x)); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: votes[item.id] ? '#22d3ee' : 'rgba(255,255,255,.3)', padding: 0 }}>
                <ThumbsUp size={17} color={votes[item.id] ? '#22d3ee' : 'rgba(255,255,255,.3)'} />
              </button>
              <div className="O" style={{ fontSize: 14, fontWeight: 700, color: votes[item.id] ? '#22d3ee' : 'rgba(255,255,255,.5)', marginTop: 2 }}>{item.v}</div>
            </div>
            <div style={{ flex: 1 }}><h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{item.t}</h3><span style={{ fontSize: 11, color: 'var(--mu)' }}>{item.a}</span></div>
            <div style={{ textAlign: 'center', minWidth: 42 }}><MessageCircle size={16} color="var(--mu)" /><div style={{ fontSize: 11, color: 'var(--mu)', marginTop: 2 }}>{item.n}</div></div>
          </div>
        ))}
      </div>}
      {tab === 'guides' && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: 16 }}>
        {GUIDE_DATA.map(g => (
          <div key={g.t} className="gl CU" style={{ borderRadius: 15, padding: 18, cursor: 'pointer' }} onClick={() => setOpenGuide(g)}>
            <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(168,85,247,.13)', border: '1px solid rgba(168,85,247,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 11 }}><FileText size={17} color="#a855f7" /></div>
            <h3 style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.4, marginBottom: 7 }}>{g.t}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: 'var(--mu)' }}><CheckCircle size={10} color="#10b981" />Community Guide · Read →</div>
          </div>
        ))}
      </div>}
    </div>
  );
};

/* ─── CONNECT ─────────────────────────────────────────────── */
const Connect = () => {
  const [pnl, setPnl] = useState('tasks');
  const [msgs, setMsgs] = useState([
    { id: 1, u: '@neonphoenix', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop', t: 'Pushed new auth flow, check it', ts: '2:34 PM', own: false },
    { id: 2, u: '@starweaver', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=40&h=40&fit=crop', t: 'Looks great! Redirect logic is clean', ts: '2:36 PM', own: false },
    { id: 3, u: 'You', av: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', t: 'Adding real-time cursor overlay next 👾', ts: '2:38 PM', own: true },
  ]);
  const [msg, setMsg] = useState('');
  const [tasks, setTasks] = useState({
    todo: [{ id: 1, t: 'Design landing hero', p: 'high', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop' }, { id: 2, t: 'Set up Supabase auth', p: 'medium', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=40&h=40&fit=crop' }],
    inprogress: [{ id: 3, t: 'Build real-time chat', p: 'high', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' }],
    done: [{ id: 4, t: 'Init Next.js + Tailwind', p: 'medium', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop' }]
  });
  const [ideas, setIdeas] = useState([
    { id: 1, txt: 'Add live cursor overlay so team sees each other', c: '#22d3ee', v: 12 },
    { id: 2, txt: 'Dark/light mode auto from OS', c: '#a855f7', v: 7 },
    { id: 3, txt: 'Export workspace as PDF for clients', c: '#f59e0b', v: 4 },
    { id: 4, txt: 'Integrate Figma embed for design ref', c: '#ec4899', v: 19 },
  ]);
  const [votedIdeas, setVotedIdeas] = useState({});
  const [newTask, setNewTask] = useState('');
  const [addingTask, setAddingTask] = useState(null);
  const [toast, setToast] = useState(null);
  const [published, setPublished] = useState(false);
  const chatEndRef = useRef(null);

  const showToast = (msg, color = '#22d3ee') => { setToast({ m: msg, c: color }); setTimeout(() => setToast(null), 2000); };

  const sendMsg = () => {
    if (!msg.trim()) return;
    const now = new Date();
    const ts = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')} ${now.getHours() < 12 ? 'AM' : 'PM'}`;
    setMsgs(m => [...m, { id: Date.now(), u: 'You', av: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', t: msg, ts, own: true }]);
    setMsg('');
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const moveTask = (taskId, fromCol, toCol) => {
    const task = tasks[fromCol].find(t => t.id === taskId);
    if (!task) return;
    setTasks(prev => ({ ...prev, [fromCol]: prev[fromCol].filter(t => t.id !== taskId), [toCol]: [...prev[toCol], task] }));
    showToast(`Moved to ${toCol === 'inprogress' ? 'In Progress' : toCol === 'done' ? 'Done' : 'To Do'}`, '#22d3ee');
  };

  const addNewTask = (col) => {
    if (!newTask.trim()) return;
    setTasks(prev => ({ ...prev, [col]: [...prev[col], { id: Date.now(), t: newTask, p: 'medium', av: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop' }] }));
    setNewTask(''); setAddingTask(null);
    showToast('Task added ✓', '#10b981');
  };

  const COLS = [['todo', 'To Do', 'var(--mu)'], ['inprogress', 'In Progress', '#22d3ee'], ['done', 'Done', '#10b981']];
  const NEXT = { 'todo': 'inprogress', 'inprogress': 'done', 'done': 'todo' };

  return (
    <div style={{ padding: '0 22px 80px' }}>
      {toast && <div style={{ position: 'fixed', bottom: 90, left: '50%', transform: 'translateX(-50%)', zIndex: 500, background: 'rgba(3,7,18,.95)', border: `1px solid ${toast.c}55`, borderRadius: 12, padding: '12px 24px', fontSize: 13, fontWeight: 600, color: toast.c, backdropFilter: 'blur(20px)', boxShadow: `0 0 30px ${toast.c}40`, animation: 'sU .3s ease forwards', whiteSpace: 'nowrap' }}>{toast.m}</div>}
      <WorldBanner title="VIBE CONNECT" label="// WORKSPACE.INIT()" color1="#22d3ee" color2="#a855f7" height={132} />
      <div className="gl2" style={{ borderRadius: 16, padding: '13px 18px', marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 9 }}>
        <div><div className="M" style={{ fontSize: 9, color: '#22d3ee', marginBottom: 2 }}>ACTIVE PROJECT</div><h3 style={{ fontSize: 15, fontWeight: 800 }}>NeuroFeed AI Dashboard v2.0</h3></div>
        <div style={{ display: 'flex', gap: 7 }}>
          <button className="gl" style={{ padding: '6px 13px', borderRadius: 8, border: 'none', cursor: 'pointer', color: '#10b981', fontSize: 11, fontWeight: 600, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => showToast('Live session started', '#10b981')}><Wifi size={12} />Live</button>
          <button onClick={() => { setPublished(true); showToast('Published to Vibe Market! ✓', '#ec4899'); }} className="SB" style={{ padding: '6px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Upload size={12} />{published ? '✓ Published' : 'Publish to Market'}
          </button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 295px', gap: 13 }}>
        <div className="gl" style={{ borderRadius: 16, padding: 15, gridColumn: '1/3' }}>
          <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
            {[['tasks', 'Tasks'], ['ideas', 'Ideas'], ['files', 'Files']].map(([id, l]) => (
              <button key={id} onClick={() => setPnl(id)} style={{ padding: '6px 14px', borderRadius: 7, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 12, fontFamily: 'Rajdhani', transition: 'all .2s', background: pnl === id ? 'rgba(34,211,238,.12)' : 'transparent', color: pnl === id ? '#22d3ee' : 'var(--mu)', borderBottom: pnl === id ? '2px solid #22d3ee' : '2px solid transparent' }}>{l}</button>
            ))}
          </div>
          {pnl === 'tasks' && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {COLS.map(([col, lbl, c]) => (
              <div key={col}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 9 }}><div style={{ width: 6, height: 6, borderRadius: '50%', background: c }} /><span className="M" style={{ fontSize: 9, fontWeight: 700, color: c, textTransform: 'uppercase', letterSpacing: '.1em' }}>{lbl}</span><span style={{ marginLeft: 'auto', fontSize: 9, color: 'var(--mu)' }}>{tasks[col].length}</span></div>
                {tasks[col].map(task => (
                  <div key={task.id} className="gl CU" style={{ borderRadius: 9, padding: '10px 12px', marginBottom: 7, cursor: 'pointer' }} onClick={() => moveTask(task.id, col, NEXT[col])}>
                    <div style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.4, marginBottom: 7 }}>{task.t}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Bdg color={task.p === 'high' ? '#ec4899' : task.p === 'medium' ? '#f59e0b' : 'var(--mu)'} ch={task.p} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <span style={{ fontSize: 8, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>→ {NEXT[col] === '' ? 'todo' : NEXT[col] === 'inprogress' ? 'doing' : 'done'}</span>
                        <Av src={task.av} sz={20} />
                      </div>
                    </div>
                  </div>
                ))}
                {addingTask === col ? (
                  <div style={{ marginBottom: 7 }}>
                    <input autoFocus value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') addNewTask(col); if (e.key === 'Escape') { setAddingTask(null); setNewTask(''); } }} placeholder="Task title..." style={{ width: '100%', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(34,211,238,.3)', borderRadius: 8, padding: '7px 10px', color: 'white', fontSize: 11, fontFamily: 'Rajdhani', outline: 'none', marginBottom: 5 }} />
                    <div style={{ display: 'flex', gap: 5 }}>
                      <button onClick={() => addNewTask(col)} className="SB" style={{ flex: 1, padding: '5px', borderRadius: 7, border: 'none', cursor: 'pointer', color: 'white', fontSize: 10, fontWeight: 700, fontFamily: 'Rajdhani' }}>Add</button>
                      <button onClick={() => { setAddingTask(null); setNewTask(''); }} style={{ flex: 1, padding: '5px', borderRadius: 7, border: '1px solid var(--br)', background: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 10, fontFamily: 'Rajdhani' }}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setAddingTask(col)} className="gl" style={{ width: '100%', padding: 7, borderRadius: 9, border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 11, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}><Plus size={12} />Add task</button>
                )}
              </div>
            ))}
          </div>}
          {pnl === 'ideas' && <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>
            {ideas.map(idea => (
              <div key={idea.id} className="gl" style={{ borderRadius: 11, padding: 13, cursor: 'pointer', border: `1px solid ${idea.c}1a`, transition: 'border-color .2s' }} onMouseEnter={e => e.currentTarget.style.borderColor = `${idea.c}40`} onMouseLeave={e => e.currentTarget.style.borderColor = `${idea.c}1a`}>
                <p style={{ fontSize: 11, lineHeight: 1.6, marginBottom: 9 }}>{idea.txt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button onClick={() => { setVotedIdeas(v => ({ ...v, [idea.id]: !v[idea.id] })); setIdeas(ideas => ideas.map(x => x.id === idea.id ? { ...x, v: x.v + (votedIdeas[idea.id] ? -1 : 1) } : x)); }} style={{ display: 'flex', alignItems: 'center', gap: 5, background: votedIdeas[idea.id] ? `${idea.c}18` : 'none', border: `1px solid ${votedIdeas[idea.id] ? idea.c : 'rgba(255,255,255,.1)'}`, borderRadius: 7, padding: '3px 9px', cursor: 'pointer', color: votedIdeas[idea.id] ? idea.c : 'var(--mu)', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani' }}>
                    <ThumbsUp size={11} />{idea.v}
                  </button>
                </div>
              </div>
            ))}
          </div>}
          {pnl === 'files' && <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {[['design-v3.fig', 'Figma', FileText, '#a855f7', '2.4 MB'], ['schema.sql', 'SQL', Code, '#22d3ee', '48 KB'], ['brand.zip', 'Archive', Layers, '#f59e0b', '12.1 MB'], ['notes.md', 'Markdown', FileText, '#10b981', '8 KB']].map(([n, tp, Ic, c, sz]) => (
              <div key={n} className="gl CU" style={{ borderRadius: 11, padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer' }} onClick={() => showToast(`Downloading ${n}...`, '#22d3ee')}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `${c}13`, border: `1px solid ${c}28`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Ic size={16} color={c} /></div>
                <div style={{ flex: 1 }}><div style={{ fontSize: 12, fontWeight: 700 }}>{n}</div><div className="M" style={{ fontSize: 9, color: 'var(--mu)' }}>{tp} · {sz}</div></div>
                <Download size={14} color="var(--mu)" />
              </div>
            ))}
          </div>}
        </div>
        <div className="gl" style={{ borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 360 }}>
          <div style={{ padding: '12px 14px', borderBottom: '1px solid var(--br)', display: 'flex', alignItems: 'center', gap: 7 }}><MessageCircle size={13} color="#22d3ee" /><span className="O" style={{ fontSize: 10, fontWeight: 700 }}>Team Chat</span><div style={{ marginLeft: 'auto', width: 7, height: 7, borderRadius: '50%', background: '#10b981' }} /></div>
          <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto', maxHeight: 280 }}>
            {msgs.map((m) => (
              <div key={m.id} style={{ display: 'flex', gap: 7, flexDirection: m.own ? 'row-reverse' : 'row' }}>
                <Av src={m.av} sz={26} />
                <div style={{ maxWidth: '78%' }}>
                  <div className="M" style={{ fontSize: 8, color: 'var(--mu)', marginBottom: 2, textAlign: m.own ? 'right' : 'left' }}>{m.own ? 'You' : m.u} · {m.ts}</div>
                  <div style={{ padding: '7px 11px', borderRadius: m.own ? '12px 2px 12px 12px' : '2px 12px 12px 12px', fontSize: 11, lineHeight: 1.55, background: m.own ? 'linear-gradient(135deg,rgba(34,211,238,.18),rgba(168,85,247,.18))' : 'rgba(255,255,255,.05)', border: `1px solid ${m.own ? 'rgba(34,211,238,.2)' : 'rgba(255,255,255,.07)'}` }}>{m.t}</div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div style={{ padding: '8px 10px', borderTop: '1px solid var(--br)', display: 'flex', gap: 6, alignItems: 'center' }}>
            <input value={msg} onChange={e => setMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMsg()} placeholder="Message..." style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: 'white', fontSize: 11, fontFamily: 'Rajdhani' }} />
            <button onClick={sendMsg} className="SB" style={{ padding: '5px 10px', borderRadius: 7, border: 'none', cursor: 'pointer' }}><Send size={12} color="white" /></button>
          </div>
        </div>
      </div>
      <div className="gl" style={{ marginTop: 13, borderRadius: 16, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 13 }}><GitBranch size={14} color="#22d3ee" /><span className="O" style={{ fontSize: 11, fontWeight: 700 }}>Snapshots</span><button onClick={() => showToast('Snapshot saved ✓', '#22d3ee')} className="gl" style={{ marginLeft: 'auto', padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer', color: '#22d3ee', fontSize: 10, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 3 }}><Plus size={11} />Save Now</button></div>
        <div style={{ display: 'flex', gap: 9, overflowX: 'auto', paddingBottom: 5 }}>
          {[['v0.1', 'Init', '2d', 'var(--mu)'], ['v0.4', 'Auth+DB', '1d', 'var(--mu)'], ['v0.8', 'UI Done', '6h', '#22d3ee'], ['v1.0 RC', 'Ship ready', 'now', '#10b981']].map(([v, m, t, c]) => (
            <div key={v} className="gl CU" style={{ minWidth: 130, borderRadius: 11, padding: '10px 13px', cursor: 'pointer', border: `1px solid ${c}28` }} onClick={() => showToast(`Restored ${v} ✓`, c === 'var(--mu)' ? '#22d3ee' : c)}>
              <div className="O" style={{ fontSize: 13, fontWeight: 700, color: c, marginBottom: 2 }}>{v}</div><div style={{ fontSize: 11, marginBottom: 3 }}>{m}</div><div className="M" style={{ fontSize: 8, color: 'var(--mu)' }}>{t} ago</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── MAIN APP ─────────────────────────────────────────────── */
export default function VibeWorld() {
  const [view, setView] = useState('landing');
  const [sec, setSec] = useState(null);
  const [warp, setWarp] = useState(false);
  const [warpCol, setWarpCol] = useState('#22d3ee');
  const [notif, setNotif] = useState(false);
  const [txt, setTxt] = useState('');
  const [wormhole, setWormhole] = useState(false);
  const [portal, setPortal] = useState(null);
  const [secKey, setSecKey] = useState(0);
  const [communityPosts, setCommunityPosts] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [showSettings, setShowSettings] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [globalWish, setGlobalWish] = useState([]);
  const [globalBm, setGlobalBm] = useState([]);
  const [globalFollowed, setGlobalFollowed] = useState({});
  const [globalAuthed, setGlobalAuthed] = useState(false);
  const [globalUser, setGlobalUser] = useState(null); // {name,email,role}
  const [showGlobalAuth, setShowGlobalAuth] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const FULL = 'the future of collaborations is here';
  useEffect(() => {
    if (view !== 'landing') return;
    let i = 0; setTxt('');
    const iv = setInterval(() => { setTxt(FULL.slice(0, i)); i++; if (i > FULL.length) clearInterval(iv); }, 55);
    return () => clearInterval(iv);
  }, [view]);

  const goSec = useCallback((id) => {
    const s = SECS.find(x => x.id === id); if (!s) return;
    setSec(s); setView('section');
  }, []);

  // Called from header world switcher — skips galaxy, shows portal flash
  const switchWorld = useCallback((id) => {
    const s = SECS.find(x => x.id === id); if (!s || sec?.id === id) return;
    setPortal(s.color);
    setTimeout(() => { setSec(s); setSecKey(k => k + 1); setPortal(null); }, 380);
  }, [sec]);

  const goBack = () => {
    setWarpCol('#0a0a1a'); setWarp(true);
    setTimeout(() => { setView('hub'); setSec(null); setWarp(false); }, 380);
  };

  const handleBriefPost = (text) => {
    const briefPost = { id: Date.now(), user: '@you', av: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=80&h=80&fit=crop', time: 'just now', txt: `📋 PROJECT BRIEF: ${text}`, tags: ['#Brief', '#Collab', '#ForHire'], img: null, lk: 0, cm: 0, isBrief: true };
    setCommunityPosts(p => [briefPost, ...(p || [])]);
  };
  const renderSec = () => {
    switch (sec?.id) {
      case 'market': return <Market onBriefPost={handleBriefPost} />;
      case 'community': return <Community extraPosts={communityPosts} />;
      case 'academy': return <Academy />;
      case 'connect': return <Connect />;
      default: return null;
    }
  };

  return (
    <>
      <G />
      {/* Dynamic theme style injection */}
      <style>{theme === 'light' ? `
        :root{--cy:#0891b2;--pu:#7c3aed;--pk:#db2777;--gr:#059669;--or:#d97706;--mu:rgba(0,0,0,.5);--br:rgba(0,0,0,.1)}
        html,body{background:#f8fafc;color:rgba(0,0,0,.87)}
        .gl{background:rgba(255,255,255,.85);backdrop-filter:blur(20px);border:1px solid rgba(0,0,0,.08)}
        .gl2{background:rgba(255,255,255,.92);backdrop-filter:blur(32px);border:1px solid rgba(0,0,0,.1)}
        .gbg{background-image:linear-gradient(rgba(8,145,178,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(8,145,178,.04) 1px,transparent 1px);background-size:60px 60px}
        ::-webkit-scrollbar-thumb{background:var(--cy)}
        .ar{border:2px solid transparent;background:linear-gradient(#f8fafc,#f8fafc) padding-box,linear-gradient(135deg,var(--cy),var(--pu)) border-box}
      `: `
        :root{--cy:#22d3ee;--pu:#a855f7;--pk:#ec4899;--gr:#10b981;--or:#f59e0b;--mu:rgba(255,255,255,.4);--br:rgba(255,255,255,.08)}
        html,body{background:#030712;color:rgba(255,255,255,.87)}
        .gl{background:rgba(255,255,255,.04);backdrop-filter:blur(20px);border:1px solid var(--br)}
        .gl2{background:rgba(255,255,255,.07);backdrop-filter:blur(32px);border:1px solid rgba(255,255,255,.12)}
        .gbg{background-image:linear-gradient(rgba(34,211,238,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.025) 1px,transparent 1px);background-size:60px 60px}
      `}</style>
      <div className="gbg" style={{ position: 'relative', minHeight: '100vh', background: '#030712', color: 'white' }}>

        {/* ── WORMHOLE TRANSITION ── */}
        {wormhole && (
          <WormholeTransition onComplete={() => {
            setWormhole(false);
            setView('hub');
          }} />
        )}

        <GalaxyCursor />
        <GalaxyBG zoomed={view === 'section'} />

        {/* ── LANDING ── */}
        {view === 'landing' && (
          <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 22px', textAlign: 'center' }}>
            <div className="gl bl" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 999, marginBottom: 30, border: '1px solid rgba(34,211,238,.3)', animation: 'none' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 8px #22d3ee', animation: 'blink 1.2s ease-in-out infinite' }} />
              <span className="M" style={{ fontSize: 11, color: '#22d3ee', letterSpacing: '.3em' }}>PROTOCOL INITIALIZED</span>
            </div>
            <h1 className="O" style={{ fontSize: 'clamp(50px,11vw,128px)', fontWeight: 900, letterSpacing: '-.02em', lineHeight: .9, marginBottom: 22 }}>
              VIBE<span style={{ background: 'linear-gradient(135deg,#22d3ee,#a855f7,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>WORLD</span>
            </h1>
            <p className="M" style={{ fontSize: 'clamp(14px,2vw,20px)', color: 'rgba(255,255,255,.5)', marginBottom: 14, fontWeight: 500, minHeight: 28 }}>
              {txt}<span style={{ animation: 'blink 0.7s infinite' }}>|</span>
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 46 }}>
              {[[ShoppingCart, 'Marketplace', '#ec4899'], [Users, 'Community', '#10b981'], [GraduationCap, 'Academy', '#a855f7'], [LayoutGrid, 'Connect', '#22d3ee']].map(([Icon, l, c]) => (
                <div key={l} className="gl" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 15px', borderRadius: 999, fontSize: 12, fontWeight: 600, color: c, border: `1px solid ${c}33` }}><Icon size={13} color={c} />{l}</div>
              ))}
            </div>
            <button onClick={() => setWormhole(true)} className="SB"
              style={{ padding: '16px 50px', borderRadius: 999, border: 'none', cursor: 'pointer', color: 'white', fontSize: 16, fontWeight: 900, fontFamily: 'Orbitron,monospace', letterSpacing: '.1em', boxShadow: '0 0 55px rgba(34,211,238,.3),0 0 90px rgba(168,85,247,.12)', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; e.currentTarget.style.boxShadow = '0 0 80px rgba(34,211,238,.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 55px rgba(34,211,238,.3),0 0 90px rgba(168,85,247,.12)'; }}>
              ENTER THE VIBEVERSE
            </button>
            <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 480, height: 240, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(34,211,238,.07)', borderRadius: '50%', animation: 'sp1 20s linear infinite' }} />
              <div style={{ position: 'absolute', inset: 16, border: '1px solid rgba(168,85,247,.05)', borderRadius: '50%', animation: 'sp2 28s linear infinite' }} />
            </div>
          </div>
        )}

        {/* ── GALAXY HUB ── */}
        {view === 'hub' && (
          <>
            <GalaxyHub onSelect={goSec} />
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 20, textAlign: 'center', padding: '32px 22px 0', pointerEvents: 'none' }}>
              <div className="M" style={{ color: '#22d3ee', fontSize: 9, letterSpacing: '.45em', marginBottom: 8, opacity: .6 }}>// VIBE_WORLD.GALAXY</div>
              <h2 className="O" style={{ fontSize: 'clamp(16px,2.8vw,32px)', fontWeight: 900, letterSpacing: '.1em', background: 'linear-gradient(135deg,#22d3ee,#a855f7,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CHOOSE YOUR WORLD</h2>
            </div>
            <div style={{ position: 'fixed', bottom: 28, left: 0, right: 0, zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 11, pointerEvents: 'none' }}>
              <div className="gl M" style={{ padding: '6px 17px', borderRadius: 999, fontSize: 9, color: 'rgba(255,255,255,.28)', letterSpacing: '.16em' }}>◎ hover a world · click to travel</div>
              <button onClick={() => setView('landing')} style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(0,0,0,.3)', border: '1px solid rgba(255,255,255,.1)', cursor: 'pointer', color: 'rgba(255,255,255,.5)', fontSize: 11, fontFamily: 'JetBrains Mono,monospace', padding: '7px 14px', borderRadius: 999, transition: 'all .25s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,.3)'}>
                <RainbowArrow size={13} /> EXIT GALAXY
              </button>
            </div>
          </>
        )}

        {/* Portal jump overlay — cinematic ring burst */}
        {portal && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 150, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 50%,${portal}66 0%,${portal}22 45%,transparent 80%)`, animation: 'portalFlash .5s ease-out forwards' }} />
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', width: 120 + i * 100, height: 120 + i * 100, borderRadius: '50%', border: `2px solid ${portal}`, transform: 'translate(-50%,-50%) scale(0)', animation: `portalRing ${.5 + i * .12}s ${i * .06}s ease-out forwards`, opacity: .8 }} />
            ))}
          </div>
        )}

        {/* ── SECTION ── */}
        {view === 'section' && sec && (
          <div key={secKey} style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>
            <header className="gl2" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 64, padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 200, borderBottom: '1px solid var(--br)', backdropFilter: 'blur(32px)' }}>
              {/* ── LEFT: VibeWorld · Galaxy · Current World ── */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>

                {/* VIBEWORLD home */}
                <button onClick={() => setView('landing')} style={{ display: 'flex', alignItems: 'center', gap: 0, background: 'none', border: 'none', cursor: 'pointer', padding: '5px 8px', borderRadius: 8, transition: 'background .2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                  <span className="O" style={{ fontSize: 12, fontWeight: 900, background: 'linear-gradient(135deg,#22d3ee,#a855f7,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '.05em', whiteSpace: 'nowrap' }}>VIBE<span style={{ fontSize: 10 }}>WORLD</span></span>
                </button>

                <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,.1)', margin: '0 2px' }} />

                {/* Back to Galaxy — rainbow flutter arrow */}
                <button onClick={goBack} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: '5px 10px', borderRadius: 8, transition: 'background .2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                  <RainbowArrow size={14} />
                  <span style={{ fontSize: 10, fontWeight: 700, fontFamily: 'JetBrains Mono,monospace', color: 'rgba(255,255,255,.55)', letterSpacing: '.12em' }}>GALAXY</span>
                </button>

                <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,.1)', margin: '0 2px' }} />

                {/* Current world badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '4px 10px', borderRadius: 8, background: `${sec.color}12`, border: `1px solid ${sec.color}30` }}>
                  <sec.icon size={13} color={sec.color} />
                  <span className="O" style={{ fontSize: 11, fontWeight: 700, color: sec.color, letterSpacing: '.06em', whiteSpace: 'nowrap' }}>{sec.label}</span>
                </div>
              </div>

              {/* ── CENTRE: Other world icons ── */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                {SECS.filter(s => s.id !== sec.id).map(s => (
                  <button key={s.id} onClick={() => switchWorld(s.id)}
                    title={s.label}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,.04)', border: `1px solid ${s.color}22`, cursor: 'pointer', transition: 'all .2s', position: 'relative' }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${s.color}18`; e.currentTarget.style.borderColor = `${s.color}66`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.borderColor = `${s.color}22`; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <s.icon size={15} color={s.color} />
                  </button>
                ))}
              </div>

              {/* ── RIGHT: Search · Bell · Bookmark · User ── */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div className="gl" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '6px 12px', borderRadius: 10, cursor: 'pointer' }}>
                  <Search size={12} color="var(--mu)" />
                  <span className="M" style={{ fontSize: 10, color: 'var(--mu)' }}>Search...</span>
                </div>
                {/* Notifications — hover to open */}
                <div style={{ position: 'relative' }} onMouseEnter={() => setNotif(true)} onMouseLeave={() => setNotif(false)}>
                  <button style={{ position: 'relative', padding: 7, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Bell size={17} />
                    <div style={{ position: 'absolute', top: 3, right: 3, width: 13, height: 13, borderRadius: '50%', background: '#ec4899', fontSize: 7, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>7</div>
                  </button>
                  {notif && (
                    <div className="gl2" style={{ position: 'absolute', top: '100%', right: 0, width: 295, borderRadius: 15, zIndex: 300, overflow: 'hidden', border: '1px solid var(--br)', animation: 'hoverMenuSlide .18s ease', boxShadow: '0 16px 48px rgba(0,0,0,.6)' }}>
                      <div style={{ padding: '13px 15px', borderBottom: '1px solid var(--br)' }}><span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Notifications</span></div>
                      {[['@neonphoenix liked your post', Heart, '#ec4899', '2m'], ['New sale: NeuroFeed', ShoppingCart, '#10b981', '15m'], ['@starweaver invited you', Users, '#22d3ee', '1h'], ['Answer accepted', CheckCircle, '#a855f7', '3h']].map(([m, Ic, c, t]) => (
                        <div key={m} style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', transition: 'background .15s' }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.04)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                          <div style={{ width: 30, height: 30, borderRadius: 8, background: `${c}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Ic size={14} color={c} /></div>
                          <div style={{ flex: 1 }}><div style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.3 }}>{m}</div><div className="M" style={{ fontSize: 8, color: 'var(--mu)', marginTop: 2 }}>{t} ago</div></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Bookmark / Wishlist — hover to open */}
                <div style={{ position: 'relative' }} onMouseEnter={() => setShowWishlist(true)} onMouseLeave={() => setShowWishlist(false)}>
                  <button style={{ position: 'relative', padding: 7, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: showWishlist ? '#a855f7' : 'rgba(255,255,255,.55)', transition: 'color .2s' }}>
                    <Bookmark size={17} fill={showWishlist ? '#a855f7' : 'none'} color={showWishlist ? '#a855f7' : 'rgba(255,255,255,.55)'} />
                    {globalWish.length > 0 && <div style={{ position: 'absolute', top: 3, right: 3, width: 13, height: 13, borderRadius: '50%', background: '#a855f7', fontSize: 7, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>{globalWish.length}</div>}
                  </button>
                  {showWishlist && (
                    <div className="gl2" style={{ position: 'absolute', top: '100%', right: 0, width: 310, borderRadius: 15, zIndex: 300, overflow: 'hidden', border: '1px solid var(--br)', animation: 'hoverMenuSlide .18s ease', boxShadow: '0 16px 48px rgba(0,0,0,.6)' }}>
                      <div style={{ padding: '13px 15px', borderBottom: '1px solid var(--br)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Saved Items</span>
                        <span style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{globalWish.length} items</span>
                      </div>
                      {globalWish.length === 0 ? (
                        <div style={{ padding: '24px', textAlign: 'center', color: 'var(--mu)', fontSize: 11 }}>
                          <Bookmark size={24} style={{ opacity: .3, margin: '0 auto 8px', display: 'block' }} />
                          No saved items yet. Bookmark products & posts!
                        </div>
                      ) : (
                        <div style={{ maxHeight: 260, overflowY: 'auto', overscrollBehavior: 'contain' }}>
                          {globalWish.slice(0, 5).map((id, i) => {
                            const item = MKT.find(m => m.id === id);
                            return item ? (
                              <div key={id} style={{ padding: '9px 14px', borderBottom: '1px solid rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', transition: 'background .15s' }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.04)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                                <img src={item.img} alt="" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                                <div style={{ flex: 1, overflow: 'hidden' }}>
                                  <div style={{ fontSize: 11, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                                  <div style={{ fontSize: 9, color: '#22d3ee', fontFamily: 'JetBrains Mono' }}>{item.price}</div>
                                </div>
                              </div>
                            ) : null;
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {/* User avatar with hover dropdown */}
                <div style={{ position: 'relative' }} onMouseEnter={() => setUserMenuOpen(true)} onMouseLeave={() => setUserMenuOpen(false)}>
                  {globalAuthed ? (
                    <div className="gl" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '4px 11px 4px 5px', borderRadius: 999, cursor: 'pointer' }}>
                      <Av src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=80&h=80&fit=crop" sz={26} on />
                      <span style={{ fontSize: 11, fontWeight: 600, maxWidth: 90, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{globalUser?.name || 'Vibe_User'}</span>
                      <ChevronDown size={11} color="var(--mu)" />
                    </div>
                  ) : (
                    <button onClick={() => setShowGlobalAuth(true)} className="SB" style={{ padding: '7px 16px', borderRadius: 999, border: 'none', cursor: 'pointer', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani' }}>Sign In</button>
                  )}
                  {userMenuOpen && globalAuthed && (
                    <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: 4, background: 'rgba(5,8,20,.98)', borderRadius: 14, border: '1px solid rgba(255,255,255,.1)', minWidth: 200, overflow: 'hidden', zIndex: 300, animation: 'hoverMenuSlide .18s ease', boxShadow: '0 16px 48px rgba(0,0,0,.7)' }}>
                      <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--br)', display: 'flex', gap: 10, alignItems: 'center' }}>
                        <Av src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=80&h=80&fit=crop" sz={36} on />
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>{globalUser?.name || 'Vibe_User'}</div>
                          <div style={{ fontSize: 9, color: globalUser?.role === 'creator' ? '#a855f7' : '#22d3ee', fontFamily: 'JetBrains Mono', textTransform: 'capitalize' }}>{globalUser?.role || 'Creator'}</div>
                        </div>
                      </div>
                      {[[Settings, 'Settings', () => setShowSettings(true), 'var(--mu)'], [Users, 'My Profile', () => { }, 'var(--mu)'], [ShoppingBag, 'My Purchases', () => { }, 'var(--mu)'], [Bookmark, 'Wishlist', () => setShowWishlist(w => !w), 'var(--mu)'], [Moon, 'Theme', () => setTheme(t => t === 'dark' ? 'light' : 'dark'), 'var(--mu)'], [X, 'Sign Out', () => { setGlobalAuthed(false); setGlobalUser(null); }, '#ec4899']].map(([Ico, label, action, color]) => (
                        <button key={label} onClick={action} style={{ width: '100%', padding: '10px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 9, fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, color: 'rgba(255,255,255,.72)', textAlign: 'left', transition: 'background .15s' }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.05)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                          <Ico size={13} color={color} />{label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </header>
            {showGlobalAuth && <AuthModal onClose={() => setShowGlobalAuth(false)} onAuth={(info) => { setGlobalAuthed(true); setGlobalUser(info); }} />}

            <main key={secKey} style={{ paddingTop: 64, background: 'transparent', minHeight: '100vh' }}><div style={{ animation: 'sU .4s cubic-bezier(.22,1,.36,1)' }}>{renderSec()}</div></main>
          </div>
        )}

        {view !== 'landing' && (
          <>
            {/* Bottom bar */}
            <div style={{ position: 'fixed', bottom: 16, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 190, pointerEvents: 'none' }}>
              {/* Bottom-left OS bar */}
              <div className="gl2 M" style={{ pointerEvents: 'auto', padding: '7px 16px', borderRadius: 12, fontSize: 8, letterSpacing: '.14em', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                  <span style={{ color: 'rgba(255,255,255,.35)' }}>NODE: ACTIVE</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,.15)' }}>|</span>
                <span style={{ color: 'rgba(255,255,255,.25)' }}>LATENCY: 12ms</span>
                <span style={{ color: 'rgba(255,255,255,.15)' }}>|</span>
                <span style={{ color: 'rgba(255,255,255,.25)' }}>VIBE_OS v2.0</span>
              </div>
              {/* Settings button */}
              <button onClick={() => setShowSettings(s => !s)} className="gl2" style={{ pointerEvents: 'auto', width: 38, height: 38, borderRadius: 11, border: `1px solid ${showSettings ? 'rgba(168,85,247,.5)' : 'rgba(255,255,255,.1)'}`, cursor: 'pointer', color: showSettings ? '#a855f7' : 'rgba(255,255,255,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s', background: showSettings ? 'rgba(168,85,247,.12)' : 'rgba(255,255,255,.06)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,.4)'; e.currentTarget.style.color = '#a855f7'; e.currentTarget.style.background = 'rgba(168,85,247,.1)'; }}
                onMouseLeave={e => { if (!showSettings) { e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.color = 'rgba(255,255,255,.45)'; e.currentTarget.style.background = 'rgba(255,255,255,.06)'; } }}>
                <Settings size={15} />
              </button>
            </div>
            {/* Settings panel */}
            {showSettings && (
              <div className="gl2" style={{ position: 'fixed', bottom: 68, right: 20, width: 280, borderRadius: 18, zIndex: 195, overflow: 'hidden', border: '1px solid rgba(168,85,247,.2)', animation: 'sU .2s ease', boxShadow: '0 20px 60px rgba(0,0,0,.6),0 0 0 1px rgba(168,85,247,.1)' }}>
                <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Settings size={14} color="#a855f7" />
                    <span className="O" style={{ fontSize: 11, fontWeight: 700, color: '#a855f7', letterSpacing: '.08em' }}>VIBE SETTINGS</span>
                  </div>
                  <button onClick={() => setShowSettings(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.3)', fontSize: 16, lineHeight: 1 }}>✕</button>
                </div>
                <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)', fontFamily: 'JetBrains Mono', letterSpacing: '.1em', marginBottom: 10 }}>APPEARANCE</div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {[['dark', Moon, 'Dark Mode'], ['light', Sun, 'Light Mode']].map(([t, Ico, l]) => (
                      <button key={t} onClick={() => setTheme(t)} style={{ flex: 1, padding: '10px 8px', borderRadius: 10, border: `1px solid ${theme === t ? 'rgba(168,85,247,.6)' : 'rgba(255,255,255,.08)'}`, background: theme === t ? 'rgba(168,85,247,.15)' : 'rgba(255,255,255,.03)', cursor: 'pointer', color: theme === t ? '#a855f7' : 'rgba(255,255,255,.45)', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, transition: 'all .2s' }}>
                        <Ico size={18} strokeWidth={1.8} />
                        <span>{l}</span>
                        {theme === t && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a855f7' }} />}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)', fontFamily: 'JetBrains Mono', letterSpacing: '.1em', marginBottom: 10 }}>ACCESSIBILITY</div>
                  {[['Reduce Motion', 'Off'], ['High Contrast', 'Off'], ['Large Text', 'Off']].map(([l, v]) => (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{l}</span>
                      <div style={{ width: 34, height: 18, borderRadius: 999, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 2 }}>
                        <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'rgba(255,255,255,.25)', transition: 'transform .2s' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 9, color: 'rgba(255,255,255,.2)', fontFamily: 'JetBrains Mono' }}>VIBE_OS v2.0.1</span>
                  <span style={{ fontSize: 9, color: 'rgba(255,255,255,.2)', fontFamily: 'JetBrains Mono' }}>© 2026 VibeWorld</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}