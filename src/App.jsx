import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
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
  Moon, Sun, Trophy, Music, ShieldCheck, BellRing, Minus, Pin, Edit3, Trash2, Columns,
  Shuffle, ChevronUp, XCircle, Monitor
} from 'lucide-react';
import * as THREE from 'three';

if (typeof window !== 'undefined') window.history.scrollRestoration = 'manual';

/* ─── GLOBAL STYLES ───────────────────────────────────────── */
const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    html,body,*{cursor:none!important}
    :root{--cy:#22d3ee;--pu:#a855f7;--pk:#ec4899;--gr:#10b981;--or:#f59e0b;--mu:rgba(255,255,255,.4);--br:rgba(255,255,255,.08)}
    html,body{background:#030712;color:rgba(255,255,255,.87);font-family:'Rajdhani',sans-serif;overflow-x:hidden}
    ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:var(--cy);border-radius:4px}
    .thin-x::-webkit-scrollbar{height:4px}.thin-x::-webkit-scrollbar-thumb{background:var(--cy);border-radius:4px}.thin-x::-webkit-scrollbar-track{background:transparent}.thin-x{scrollbar-width:thin;scrollbar-color:var(--cy) transparent}
    @media(max-width:800px){.world-label{display:none}}
    @media(max-width:640px){.galaxy-label{display:none}}
    @media(max-width:600px){.search-bar{width:34px!important;min-width:34px!important;padding:7px!important}.search-bar .search-text{display:none}.search-bar .search-cmd{display:none}}
    @media(max-width:480px){.hide-sm{display:none!important}}
    @media(max-width:400px){.hdr-gap{gap:4px!important}.hdr-divider{display:none!important}}
    .world-content{min-width:480px}
    @media(max-width:700px){
      .hero-grid{grid-template-columns:1fr!important}
    }
    @media(max-width:600px){
      .hub-mobile-worlds{display:flex!important}
    }
    @media(max-width:480px){
      .world-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
      .world-content{padding-left:14px!important;padding-right:14px!important}
      .responsive-grid{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))!important}
      .rigid-2col{grid-template-columns:1fr!important}
      .about-sidebar{flex-direction:column!important}
      .hide-sidebar{display:none!important}
      .main-sidebar-grid{grid-template-columns:1fr!important}
    }
    .O{font-family:'Orbitron',monospace}.M{font-family:'JetBrains Mono',monospace}
    .gl{background:rgba(255,255,255,.04);backdrop-filter:blur(20px);border:1px solid var(--br)}
    .gl2{background:rgba(255,255,255,.07);backdrop-filter:blur(32px);border:1px solid rgba(255,255,255,.12)}
    .tag{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;font-family:'JetBrains Mono',monospace}
    .pb{height:3px;border-radius:2px;background:rgba(255,255,255,.1);overflow:hidden}
    .pf{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--cy),var(--pu))}
    .ar{border:2px solid transparent;background:linear-gradient(#030712,#030712) padding-box,linear-gradient(135deg,var(--cy),var(--pu)) border-box}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        body.reduce-motion *{animation-duration:.001ms!important;transition-duration:.001ms!important}
        body.high-contrast{filter:contrast(1.25) saturate(1.1)}
        body.large-text{font-size:110%!important}
    @keyframes heartBreakL{0%{transform:translate(-50%,-50%) scale(1);opacity:1}100%{transform:translate(calc(-50% - 22px),calc(-50% - 28px)) scale(0.3);opacity:0}}
    @keyframes heartBreakR{0%{transform:translate(-50%,-50%) scale(1);opacity:1}100%{transform:translate(calc(-50% + 22px),calc(-50% - 28px)) scale(0.3);opacity:0}}
    @keyframes counterPop{0%{transform:scale(1)}50%{transform:scale(1.35)}100%{transform:scale(1)}}
    @keyframes counterPop{0%{transform:scale(1)}50%{transform:scale(1.35)}100%{transform:scale(1)}}
    @keyframes breakLeft{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(-18px,-16px) scale(0.5);opacity:0}}
    @keyframes breakRight{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(18px,-16px) scale(0.5);opacity:0}}
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
    @keyframes portalFlash{0%{opacity:0;transform:scale(.88)}20%{opacity:.9;transform:scale(1.04)}65%{opacity:.5}100%{opacity:0;transform:scale(1.14)}}
    @keyframes worldPulse{0%,100%{box-shadow:0 0 0 0 currentColor}50%{box-shadow:0 0 12px 2px currentColor}}
    @keyframes floatA{0%,100%{transform:translateY(0) translateX(0) scale(1)}50%{transform:translateY(-10px) translateX(5px) scale(1.1)}}
    @keyframes floatB{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(8px) translateX(-7px)}}
    @keyframes floatC{0%,100%{transform:translateY(0) translateX(0)}33%{transform:translateY(-6px) translateX(8px)}66%{transform:translateY(5px) translateX(-4px)}}
    @keyframes particleBurst{0%{transform:translate(-50%,-50%) translate(0px,0px);opacity:1}100%{transform:translate(-50%,-50%) translate(var(--tx),var(--ty));opacity:0}}
    @keyframes playCycle{0%{color:#22d3ee;filter:drop-shadow(0 0 10px #22d3ee) drop-shadow(0 0 20px #22d3ee)}25%{color:#a855f7;filter:drop-shadow(0 0 10px #a855f7) drop-shadow(0 0 20px #a855f7)}50%{color:#ec4899;filter:drop-shadow(0 0 10px #ec4899) drop-shadow(0 0 20px #ec4899)}75%{color:#f59e0b;filter:drop-shadow(0 0 10px #f59e0b) drop-shadow(0 0 20px #f59e0b)}100%{color:#22d3ee;filter:drop-shadow(0 0 10px #22d3ee) drop-shadow(0 0 20px #22d3ee)}}
    @keyframes purchaseGlow{0%,100%{box-shadow:0 0 18px rgba(34,211,238,.5),0 0 35px rgba(168,85,247,.3)}33%{box-shadow:0 0 25px rgba(168,85,247,.7),0 0 50px rgba(236,72,153,.4)}66%{box-shadow:0 0 22px rgba(236,72,153,.6),0 0 45px rgba(34,211,238,.3)}}
    @keyframes portalRing{0%{transform:translate(-50%,-50%) scale(0);opacity:.9}50%{opacity:.55}100%{transform:translate(-50%,-50%) scale(7);opacity:0}}
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
    @keyframes backGradientSlide{0%{background-position:0% center}100%{background-position:200% center}}
    @keyframes usernameTaken{0%,100%{border-color:rgba(239,68,68,.8);color:#ef4444}50%{border-color:rgba(239,68,68,.2);color:rgba(239,68,68,.4)}}
    @keyframes hoverMenuSlide{from{opacity:0;transform:translateY(-6px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
    @keyframes badgePulse{0%,100%{box-shadow:0 0 5px var(--gc,#22d3ee)99,0 0 10px var(--gc,#22d3ee)44}50%{box-shadow:0 0 9px var(--gc,#22d3ee),0 0 14px var(--gc,#22d3ee)66}}
    @keyframes badgeDim{0%,100%{opacity:.3}50%{opacity:.44}}
    @keyframes carouselFade{0%{opacity:0;transform:scale(.93)}100%{opacity:1;transform:scale(1)}}
    @keyframes packageGlow{0%{filter:drop-shadow(0 0 6px #22d3ee) drop-shadow(0 0 2px #22d3ee);color:#22d3ee}25%{filter:drop-shadow(0 0 6px #a855f7) drop-shadow(0 0 2px #a855f7);color:#a855f7}50%{filter:drop-shadow(0 0 6px #ec4899) drop-shadow(0 0 2px #ec4899);color:#ec4899}75%{filter:drop-shadow(0 0 6px #f59e0b) drop-shadow(0 0 2px #f59e0b);color:#f59e0b}100%{filter:drop-shadow(0 0 6px #22d3ee) drop-shadow(0 0 2px #22d3ee);color:#22d3ee}}
    @keyframes loadMoreHeart{0%{transform:scale(1);color:#22d3ee;text-shadow:0 0 8px #22d3ee}25%{transform:scale(1.35);color:#a855f7;text-shadow:0 0 14px #a855f7}50%{transform:scale(1);color:#ec4899;text-shadow:0 0 8px #ec4899}75%{transform:scale(1.35);color:#f59e0b;text-shadow:0 0 14px #f59e0b}100%{transform:scale(1);color:#22d3ee;text-shadow:0 0 8px #22d3ee}}
    @keyframes wormholeFadeIn{from{opacity:0}to{opacity:1}}
    @keyframes secEnter{
      0%  {opacity:0}
      40% {opacity:.7}
      100%{opacity:1}
    }
    @keyframes secHeaderSlide{
      from{opacity:0}
      to  {opacity:1}
    }
    @keyframes portalPull{
      0%  {opacity:0;transform:translate(-50%,-50%) scale(0)}
      30% {opacity:1;transform:translate(-50%,-50%) scale(1)}
      100%{opacity:0;transform:translate(-50%,-50%) scale(4.5)}
    }
    @keyframes loadMoreSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    @keyframes spin360{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
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
      raf = requestAnimationFrame(loop);
      t += .004;
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
          Math.min(2, Math.cos(a * b.tz + .4) * b.oZ + Math.sin(a * b.tx * .8 + 1.1) * b.oZ * .25)  // clamp Z ≤ 2 so planets always stay far behind camera (cam.z=22)
        );
        b.atm.position.copy(b.mesh.position);
        b.mesh.rotation.y += .0025; b.mesh.rotation.x += .0015;
      });
      ren.render(scene, cam);
    };
    loop();
    const rz = () => { cam.aspect = window.innerWidth / window.innerHeight; cam.updateProjectionMatrix(); ren.setSize(window.innerWidth, window.innerHeight); };
    window.addEventListener('resize', rz);
    // Also pause when browser tab is hidden
    const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else { raf = requestAnimationFrame(loop); } };
    document.addEventListener('visibilitychange', onVis);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', rz); document.removeEventListener('visibilitychange', onVis); if (ref.current && ren.domElement.parentNode === ref.current) ref.current.removeChild(ren.domElement); ren.dispose(); };
  }, []);

  return <div ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
};

/* ─── GALAXY HUB — FLOATING WORLDS ──────────────────────── */
const WDEF = [
  {
    id: 'market', label: 'VIBE MARKET', em: '🛒', icon: ShoppingCart, css: '#ec4899', hx: 0xec4899, hc: 0x2a0310, he: 0x6b0a28, hw: 0xff6eb0,
    pos: [-7.5, 2.5, 0], r: 1.85, rs: .003, ax: [.2, .9, .12], fa: .22, fs: .00044,
    rings: [{ ri: 2.5, ro: 3.3, rc: 0xff88c0, ro2: .55, rt: 1.5 }, { ri: 3.5, ro: 3.7, rc: 0xec4899, ro2: .28, rt: 1.3 }]
  },
  {
    id: 'community', label: 'VIBE COMMUNITY', em: '👥', icon: Users, css: '#10b981', hx: 0x10b981, hc: 0x020f07, he: 0x0b3d1c, hw: 0x34d399,
    pos: [7.5, -2, 0], r: 1.7, rs: .0022, ax: [-.18, -1, .15], fa: .28, fs: .00038, hasMoon: true,
    rings: [{ ri: 2.35, ro: 3.1, rc: 0x34d399, ro2: .45, rt: 1.55 }, { ri: 3.3, ro: 3.5, rc: 0x10b981, ro2: .22, rt: 1.4 }]
  },
  {
    id: 'academy', label: 'VIBE ACADEMY', em: '🎓', icon: GraduationCap, css: '#c084fc', hx: 0xa855f7, hc: 0x0e0420, he: 0x330c5a, hw: 0xc084fc,
    pos: [3, 5.5, -6], r: 1.42, rs: .004, ax: [.2, .9, -.1], fa: .18, fs: .00055,
    rings: [{ ri: 2.0, ro: 2.75, rc: 0xc084fc, ro2: .48, rt: 1.2 }, { ri: 3.0, ro: 3.2, rc: 0xa855f7, ro2: .22, rt: 1.1 }]
  },
  {
    id: 'connect', label: 'VIBE CONNECT', em: '⚡', icon: LayoutGrid, css: '#22d3ee', hx: 0x22d3ee, hc: 0x020d18, he: 0x062a3a, hw: 0x22d3ee,
    pos: [-3, -4.8, -4], r: 1.75, rs: .0033, ax: [-.2, -1, -.1], fa: .24, fs: .0005, hasGrid: true,
    rings: [{ ri: 2.45, ro: 3.2, rc: 0x22d3ee, ro2: .5, rt: 1.48 }, { ri: 3.4, ro: 3.6, rc: 0x67e8f9, ro2: .25, rt: 1.35 }]
  },
];

const GalaxyHub = ({ onSelect }) => {
  const canvasRef = useRef(null);
  const warpRef = useRef(null);
  const flareRef = useRef(null);
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
    scene.add(new THREE.AmbientLight(0xffffff, .12));
    const ml = new THREE.PointLight(0xffffff, 2.8, 0); ml.position.set(18, 14, 22); scene.add(ml);
    const fl2 = new THREE.PointLight(0x5599ff, 1.2, 0); fl2.position.set(-18, -8, -10); scene.add(fl2);
    const fl3 = new THREE.PointLight(0xff44aa, .7, 0); fl3.position.set(0, 18, 6); scene.add(fl3);
    const fl4 = new THREE.PointLight(0x22ffaa, .5, 0); fl4.position.set(10, -12, 8); scene.add(fl4);
    // Key directional light for crisp specular highlights
    const dKey = new THREE.DirectionalLight(0xffffff, 1.0); dKey.position.set(1.2, 1, 1.8); scene.add(dKey);
    // Rim removed — was causing white blob artifacts on planet surfaces

    // planets
    const planets = WDEF.map(def => {
      const grp = new THREE.Group(); grp.position.set(...def.pos); scene.add(grp);
      const ax = new THREE.Vector3(...def.ax).normalize();
      const cMat = new THREE.MeshPhongMaterial({ color: def.hc, emissive: def.he, emissiveIntensity: 0.55, specular: 0x111111, shininess: 4 });
      const core = new THREE.Mesh(new THREE.SphereGeometry(def.r, 64, 64), cMat); grp.add(core);
      grp.add(new THREE.Mesh(new THREE.SphereGeometry(def.r + .02, 26, 26), new THREE.MeshBasicMaterial({ color: def.hw, wireframe: true, transparent: true, opacity: .06 })));
      if (def.hasGrid) grp.add(new THREE.Mesh(new THREE.SphereGeometry(def.r + .08, 14, 14), new THREE.MeshBasicMaterial({ color: def.hx, wireframe: true, transparent: true, opacity: .22 })));
      // NO separate gloss spheres (caused visible bubble artifacts) — gloss comes from MeshPhong specular
      const a1 = new THREE.MeshBasicMaterial({ color: def.hx, transparent: true, opacity: .12, side: THREE.BackSide }); grp.add(new THREE.Mesh(new THREE.SphereGeometry(def.r + .4, 28, 28), a1));
      const a2 = new THREE.MeshBasicMaterial({ color: def.hx, transparent: true, opacity: .05, side: THREE.BackSide }); grp.add(new THREE.Mesh(new THREE.SphereGeometry(def.r + .9, 28, 28), a2));
      (def.rings || []).forEach(ring => {
        const rm = new THREE.Mesh(new THREE.TorusGeometry((ring.ri + ring.ro) / 2, (ring.ro - ring.ri) / 2, 4, 90), new THREE.MeshBasicMaterial({ color: ring.rc, transparent: true, opacity: ring.ro2, side: THREE.DoubleSide }));
        rm.rotation.x = ring.rt; grp.add(rm);
      });
      let moonGrp = null;
      // legacy moonGrp kept null — replaced by global wandering planetoids below
      // NO orbital dots — removed (caused white dot artifacts)
      const dots = null;
      return { def, grp, core, cMat, a1, a2, moonGrp, dots, ax, hov: false };
    });

    // raycaster
    const ray = new THREE.Raycaster(), mp = new THREE.Vector2();
    const hitmesh = planets.map(p => p.core);
    let hovIdx = -1;

    // ── 4 Wandering planetoids — drift freely across the Vibeverse, always behind ──
    const PLANETOID_DEFS = [
      // Each axis: two sine waves summed → A1*sin(f1*t+p1) + A2*sin(f2*t+p2)
      // Amplitudes exceed screen bounds so they wander off and come back naturally
      // format: [A1, f1, p1,  A2, f2, p2]   Z: [baseZ, A1, f1, p1]
      {
        r: 0.30, color: 0x8ecfb0, emissive: 0x1a5a35, css: '#8ecfb0',
        px: [14.0, 0.000210, 0.00, 7.0, 0.000073, 1.20],
        py: [9.5, 0.000155, 1.80, 4.5, 0.000091, 3.40],
        pz: [-7, 5.0, 0.000062, 2.10]
      },
      {
        r: 0.18, color: 0xc084fc, emissive: 0x330c5a, css: '#c084fc',
        px: [18.0, 0.000168, 2.10, 8.5, 0.000057, 4.50],
        py: [11.0, 0.000123, 0.55, 5.0, 0.000083, 1.90],
        pz: [-9, 4.5, 0.000048, 3.80]
      },
      {
        r: 0.13, color: 0x22d3ee, emissive: 0x062a3a, css: '#22d3ee',
        px: [20.0, 0.000142, 4.20, 9.0, 0.000079, 0.70],
        py: [12.5, 0.000098, 3.10, 6.0, 0.000061, 5.20],
        pz: [-11, 5.5, 0.000071, 1.00]
      },
      {
        r: 0.10, color: 0xec4899, emissive: 0x6b0a28, css: '#ec4899',
        px: [16.0, 0.000118, 1.80, 10.0, 0.000044, 2.60],
        py: [10.0, 0.000176, 5.00, 4.0, 0.000069, 0.30],
        pz: [-8, 4.0, 0.000055, 4.50]
      },
    ];

    const planetoids = PLANETOID_DEFS.map((def, i) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(def.r, 16, 16),
        new THREE.MeshPhongMaterial({
          color: def.color, emissive: def.emissive, emissiveIntensity: 0.5,
          specular: 0x111111, shininess: 4,
        })
      );
      // Seed initial position so they start spread out
      const t0 = i * 11000;
      mesh.position.set(
        Math.sin(t0 * def.px[1] + def.px[2]) * def.px[0] + Math.sin(t0 * def.px[4] + def.px[5]) * def.px[3],
        Math.sin(t0 * def.py[1] + def.py[2]) * def.py[0] + Math.sin(t0 * def.py[4] + def.py[5]) * def.py[3],
        def.pz[0] + Math.sin(t0 * def.pz[2] + def.pz[3]) * def.pz[1]
      );
      // renderOrder -1 keeps them behind planets
      mesh.renderOrder = -1;
      scene.add(mesh);
      return { mesh, def };
    });

    // ── Suck-in streak particles (activated on planet click) ──────
    const FLY_STREAK_N = 280;
    const fsGeo = new THREE.BufferGeometry();
    const fsPos = new Float32Array(FLY_STREAK_N * 6);
    const fsCol = new Float32Array(FLY_STREAK_N * 6);
    fsGeo.setAttribute('position', new THREE.BufferAttribute(fsPos, 3));
    fsGeo.setAttribute('color', new THREE.BufferAttribute(fsCol, 3));
    const flyStreaks = new THREE.LineSegments(
      fsGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0 })
    );
    scene.add(flyStreaks);
    const hexRGB = h => [((h >> 16) & 255) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];

    // Fly state — suck-in animation
    const fly = {
      active: false,
      idx: null,
      t0: 0,
      dur: 2600,
      lastFired: 0,
      posEnd: new THREE.Vector3(),
      quatEnd: new THREE.Quaternion(),  // direction to face planet — slerped during travel
      dir: new THREE.Vector3(),
      colorHex: 0x22d3ee,
    };

    function setHov(idx) {
      if (idx === hovIdx) return;
      if (hovIdx >= 0) { const p = planets[hovIdx]; p.hov = false; p.cMat.emissiveIntensity = .55; p.a1.opacity = .10; p.a2.opacity = .04; }
      if (idx >= 0) { const p = planets[idx]; p.hov = true; p.cMat.emissiveIntensity = 1.3; p.a1.opacity = .28; p.a2.opacity = .12; }
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
      if (fly.active || now - fly.lastFired < fly.dur + 800) return;
      fly.lastFired = now;
      const p = planets[idx];
      setHov(-1);

      // ── Always start from galaxy center so the suck begins from the middle ──
      const CENTER = new THREE.Vector3(0, 0, 22);
      cam.position.copy(CENTER);
      cam.quaternion.identity();   // camera points straight ahead — planet stays at its natural position
      cam.fov = 52;
      cam.updateProjectionMatrix();

      // Direction: center → planet's current (animated) position
      const planetPos = p.grp.position.clone();
      fly.dir.copy(planetPos).sub(CENTER).normalize();

      // End position: stop just outside the outermost ring so we never clip through them
      // outermost ring ro across all worlds is ~3.7 — stop 3.0 units beyond that
      const outerRing = p.def.rings && p.def.rings.length
        ? Math.max(...p.def.rings.map(r => r.ro))
        : p.def.r * 2;
      const stopDist = outerRing + 3.0;
      // posEnd is directly in front of the planet along the camera's natural -Z axis.
      // Camera travels from (0,0,22) to (px, py, pz+stopDist) — a diagonal path.
      // As x/y lerp from 0→px and 0→py the planet drifts from its natural screen
      // position toward center. At arrival the planet is perfectly centered.
      // Last thing visible is the planet body — camera stops clear of the rings.
      fly.posEnd.set(planetPos.x, planetPos.y, planetPos.z + stopDist);

      fly.colorHex = WDEF[idx].hx;

      // ── Seed suck-in streaks along the flight tube ──
      const dir = fly.dir;
      const right = new THREE.Vector3(dir.y, -dir.x, 0).normalize();
      if (right.lengthSq() < 0.001) right.set(1, 0, 0);
      const up2 = new THREE.Vector3().crossVectors(dir, right).normalize();
      const [cr, cg, cb] = hexRGB(WDEF[idx].hx);
      const totalDist = CENTER.distanceTo(fly.posEnd);

      for (let i = 0; i < FLY_STREAK_N; i++) {
        const ang = Math.random() * Math.PI * 2;
        const rad = 0.25 + Math.random() * 2.6;
        const along = 1.5 + Math.random() * (totalDist * 0.92);
        const len = 0.15 + Math.random() * 1.2;
        const ox = Math.cos(ang) * rad, oy = Math.sin(ang) * rad;
        const bx = CENTER.x + dir.x * along + right.x * ox + up2.x * oy;
        const by = CENTER.y + dir.y * along + right.y * ox + up2.y * oy;
        const bz = CENTER.z + dir.z * along + right.z * ox + up2.z * oy;
        fsPos[i * 6] = bx; fsPos[i * 6 + 1] = by; fsPos[i * 6 + 2] = bz;
        fsPos[i * 6 + 3] = bx - dir.x * len; fsPos[i * 6 + 4] = by - dir.y * len; fsPos[i * 6 + 5] = bz - dir.z * len;
        fsCol[i * 6] = cr; fsCol[i * 6 + 1] = cg; fsCol[i * 6 + 2] = cb;
        fsCol[i * 6 + 3] = cr * .12; fsCol[i * 6 + 4] = cg * .12; fsCol[i * 6 + 5] = cb * .12;
      }
      fsGeo.attributes.position.needsUpdate = true;
      fsGeo.attributes.color.needsUpdate = true;

      fly.active = true;
      fly.idx = idx;
      fly.t0 = now;

      // Warp overlay: planet color, centred
      if (warpRef.current) {
        const css = WDEF[idx].css;
        warpRef.current.style.background = `radial-gradient(ellipse at 50% 50%,${css}55 0%,${css}22 50%,transparent 80%)`;
        warpRef.current.style.opacity = '0';
      }
      labelRefs.current.forEach(el => { if (el) { el.style.opacity = '0'; el.style.pointerEvents = 'none'; } });
    }

    // ── Warm sun reflections — invisible sun, only its light catching surfaces ──
    // No visible sun disc/flare/orb. Only evidence: warm orange-amber light bouncing
    // off orb and planetoid surfaces the way sunlight catches objects at golden hour.

    const _noise = (seed, t) => {
      const a = Math.sin(seed * 127.1 + t * 1.9) * 43758.5453;
      return a - Math.floor(a);  // 0..1
    };

    // ─── Draw warm golden-hour surface catch on 2D canvas ───────────────────────
    // No visible source — only the reflection the light leaves on the sphere surface.
    function drawSunReflection(ctx, cw, ch, catchX, catchY, screenR, alpha, timeMs, intensity) {
      const t = timeMs * 0.001;
      // Extremely gentle shimmer — barely perceptible, just enough to feel alive
      const shimmer = 1.0 - 0.038 * (
        Math.sin(t * 7.1) * 0.5 + Math.sin(t * 13.7 + 1.1) * 0.5
      );
      const fa = alpha * shimmer * intensity;
      if (fa <= 0.003) return;

      ctx.save();

      // ── Main warm core: radial gradient with slight organic rotation/stretch ──
      const reflR = screenR * (0.19 + intensity * 0.17);
      const rotAng = _noise(1, t * 0.009) * Math.PI * 2;
      const sX = 0.75 + _noise(2, t * 0.011) * 0.50;  // horizontal squeeze/stretch
      const sY = 1 / sX;                               // compensate so area stays same

      ctx.globalCompositeOperation = 'lighter';
      ctx.save();
      ctx.translate(catchX, catchY);
      ctx.rotate(rotAng);
      ctx.scale(sX, sY);
      const g0 = ctx.createRadialGradient(0, 0, 0, 0, 0, reflR);
      g0.addColorStop(0, `rgba(255,252,235,${fa * 0.95})`);  // warm white at peak
      g0.addColorStop(0.18, `rgba(255,196,80,${fa * 0.82})`);   // amber
      g0.addColorStop(0.44, `rgba(255,106,0,${fa * 0.50})`);    // orange #ff6a00
      g0.addColorStop(0.75, `rgba(200,65,0,${fa * 0.18})`);     // deep orange fade
      g0.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g0;
      ctx.beginPath();
      ctx.arc(0, 0, reflR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // ── 2-3 small organic satellite blobs — make edge irregular and authentic ──
      const blobCount = 2 + Math.round(_noise(3, t * 0.006));  // 2 or 3
      for (let j = 0; j < blobCount; j++) {
        const ang = j * (Math.PI * 2 / blobCount) + _noise(j + 10, t * 0.014) * 2.6;
        const bDist = reflR * (0.22 + _noise(j + 20, t * 0.010) * 0.30);
        const bx = catchX + Math.cos(ang) * bDist;
        const by = catchY + Math.sin(ang) * bDist;
        const br = reflR * (0.26 + _noise(j + 30, t * 0.018) * 0.22);
        const ba = fa * (0.26 + _noise(j + 40, t * 0.016) * 0.20);
        const g1 = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        g1.addColorStop(0, `rgba(255,218,110,${ba})`);
        g1.addColorStop(0.5, `rgba(255,100,0,${ba * 0.42})`);
        g1.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g1;
        ctx.globalCompositeOperation = 'lighter';
        ctx.beginPath();
        ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    // ─── Draw faint static ambient warm undertone on all visible spheres ─────────
    // Subliminal: 4-6% warm orange on one side of each sphere — static, never pulses.
    // Warm-side direction varies per object so it feels like off-angle distant light.
    const WARM_DIRS = [
      [0.55, -0.45],  // market:    upper-right warm side
      [-0.38, 0.52],  // community: lower-left
      [0.68, 0.28],  // academy:   right-center
      [-0.48, -0.58],  // connect:   upper-left
      [0.42, -0.62],  // planetoid 0
      [-0.62, 0.22],  // planetoid 1
      [0.44, 0.58],  // planetoid 2
      [-0.28, -0.68],  // planetoid 3
    ];
    function drawAmbientUndertones(ctx, cw, ch) {
      const allObj = [...planets, ...planetoids];
      allObj.forEach((obj, i) => {
        const pos = obj.grp ? obj.grp.position : obj.mesh.position;
        const wp = pos.clone().project(cam);
        if (wp.x < -1.6 || wp.x > 1.6 || wp.y < -1.6 || wp.y > 1.6) return;
        const ox = (wp.x * 0.5 + 0.5) * cw;
        const oy = (-wp.y * 0.5 + 0.5) * ch;
        const dist = cam.position.distanceTo(pos);
        const fovTan = Math.tan(cam.fov * Math.PI / 360);
        const screenR = (obj.def.r / dist) / fovTan * ch * 0.5;
        if (screenR < 3) return;

        const dir = WARM_DIRS[i] || [Math.cos(i * 1.618) * 0.5, Math.sin(i * 1.618) * 0.5];
        const wx = ox + dir[0] * screenR * 0.50;
        const wy = oy + dir[1] * screenR * 0.50;
        const gr = screenR * 0.88;

        ctx.save();
        ctx.globalCompositeOperation = 'source-over';
        const grad = ctx.createRadialGradient(wx, wy, 0, wx, wy, gr);
        grad.addColorStop(0, 'rgba(255,108,0,0.046)');
        grad.addColorStop(0.42, 'rgba(255,80,0,0.020)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(wx, wy, gr, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }

    // ─── Reflection state machine (timing identical to prior implementation) ────
    const flare = {
      active: false,
      planet: null,
      t0: 0,
      dur: 0,
      peak: 0,
      intensity: 1.0,          // per-event brightness variation (some catches stronger)
      catchOffset: { x: 0, y: 0 },   // where on sphere surface light catches (norm sphere coords)
      // bounce state
      bouncing: false,
      _passthru: false,
      bT0: 0,
      bDur: 0,
      bStartCatch: { x: 0, y: 0 },   // interpolation start offset
      bEndCatch: { x: 0, y: 0 },   // interpolation end offset
      next: Date.now() + 2000 + Math.random() * 6000,
    };

    function tickSunReflection(now, ctx, cw, ch) {
      if (!ctx) return;
      ctx.clearRect(0, 0, cw, ch);

      // Ambient undertones — always present, static warm glow on each sphere's warm side
      drawAmbientUndertones(ctx, cw, ch);

      // ── Start new reflection event ──
      if (!flare.active && now > flare.next) {
        // 30% chance of a long quiet gap (no reflection)
        if (Math.random() < 0.30) {
          flare.next = now + 9000 + Math.random() * 20000;
          return;
        }

        // Pick target: 60% planet, 40% planetoid (on-screen only)
        const visiblePlanetoids = planetoids.filter(po => {
          const wp = po.mesh.position.clone().project(cam);
          return Math.abs(wp.x) < 1.0 && Math.abs(wp.y) < 1.0;
        });
        const hitPlanetoid = Math.random() < 0.40 && visiblePlanetoids.length > 0;
        const pool = hitPlanetoid ? visiblePlanetoids : planets;
        const target = pool[Math.floor(Math.random() * pool.length)];

        flare.planet = {
          _isPlanetoid: hitPlanetoid,
          def: { r: target.def.r, css: target.def.css },
          grp: hitPlanetoid ? { position: target.mesh.position } : target.grp,
        };
        flare.t0 = now;
        flare.dur = hitPlanetoid ? 2500 + Math.random() * 3500 : 4000 + Math.random() * 7000;
        flare.peak = hitPlanetoid ? 0.20 + Math.random() * 0.55 : 0.25 + Math.random() * 0.75;
        flare.intensity = 0.38 + Math.random() * 0.62;  // some events brighter, some subtle
        flare.active = true;

        // Random catch point on the sphere surface
        // Direction varies per event → sometimes upper-left, sometimes lower-right, etc.
        const catchAng = Math.random() * Math.PI * 2;
        const catchRad = 0.18 + Math.random() * 0.60;  // how far from sphere center
        flare.catchOffset = { x: Math.cos(catchAng) * catchRad, y: Math.sin(catchAng) * catchRad };

        // Bounce: light catches then slides to another surface spot
        const bounceChance = hitPlanetoid ? 0.70 : 0.40;
        flare.bouncing = Math.random() < bounceChance;
        flare._passthru = hitPlanetoid && flare.bouncing;
        flare.bStartCatch = { x: 0, y: 0 };  // seeded lazily on first bounce frame
        if (flare.bouncing) {
          flare.bT0 = now + flare.dur * (hitPlanetoid ? 0.15 + Math.random() * 0.25 : 0.25 + Math.random() * 0.35);
          flare.bDur = hitPlanetoid ? 400 + Math.random() * 500 : 600 + Math.random() * 800;
          // End catch: new spot. Pass-through moves off the sphere edge.
          const a2 = Math.random() * Math.PI * 2;
          const r2 = flare._passthru ? 1.25 + Math.random() * 0.80 : 0.18 + Math.random() * 0.60;
          flare.bEndCatch = { x: Math.cos(a2) * r2, y: Math.sin(a2) * r2 };
        }
      }

      if (flare.active && flare.planet) {
        const raw = Math.min((now - flare.t0) / flare.dur, 1);

        // Smooth envelope: ease in → flicker hold → ease out
        let env;
        if (raw < 0.20) env = raw / 0.20;
        else if (raw < 0.82) env = 1.0 - Math.abs(Math.sin(now * 0.0028 + 0.5)) * 0.09;
        else env = (1.0 - raw) / 0.18;
        const ss = t2 => t2 * t2 * (3 - 2 * t2);
        const alpha = ss(Math.max(0, Math.min(1, env))) * flare.peak;

        // Interpolate catch offset (may slide during bounce)
        let co = { ...flare.catchOffset };
        if (flare.bouncing && now >= flare.bT0) {
          // Seed bounce start on first frame we enter bounce phase
          if (flare.bStartCatch.x === 0 && flare.bStartCatch.y === 0) {
            flare.bStartCatch = { ...flare.catchOffset };
          }
          const bt = Math.min((now - flare.bT0) / flare.bDur, 1);
          const bss = ss(bt);
          co = {
            x: flare.bStartCatch.x + (flare.bEndCatch.x - flare.bStartCatch.x) * bss,
            y: flare.bStartCatch.y + (flare.bEndCatch.y - flare.bStartCatch.y) * bss,
          };
        }

        // Project sphere center to screen pixels
        const wp = flare.planet.grp.position.clone().project(cam);
        const ox = (wp.x * 0.5 + 0.5) * cw;
        const oy = (-wp.y * 0.5 + 0.5) * ch;
        const dist = cam.position.distanceTo(flare.planet.grp.position);
        const fovTan = Math.tan(cam.fov * Math.PI / 360);
        const screenR = (flare.planet.def.r / dist) / fovTan * ch * 0.5;

        // Catch point: sphere center + offset scaled by screen radius
        const catchX = ox + co.x * screenR * 0.60;
        const catchY = oy + co.y * screenR * 0.60;

        drawSunReflection(ctx, cw, ch, catchX, catchY, screenR, alpha, now, flare.intensity);

        if (raw >= 1) {
          flare.active = false;
          flare.bouncing = false;
          flare._passthru = false;
          flare.bStartCatch = { x: 0, y: 0 };
          flare.next = now + 5000 + Math.random() * 18000;
        }
      }
    }

    const E0 = Date.now(), ED = 2000; let eDone = false;
    cam.position.set(0, 0, 36);

    // Grab the 2D flare canvas context
    const flareCanvas = flareRef.current;
    let flareCtx = null;
    if (flareCanvas) {
      flareCanvas.width = W;
      flareCanvas.height = H;
      flareCtx = flareCanvas.getContext('2d');
    }

    let raf;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = Date.now();
      if (!eDone) { const t = Math.min((now - E0) / ED, 1), e = 1 - Math.pow(1 - t, 3); cam.position.z = 36 - 14 * e; cam.position.y = 2 * (1 - e); if (t >= 1) { eDone = true; cam.position.set(0, 0, 22); } }

      // ── Vibeverse animations — freeze the moment fly begins ──
      if (!fly.active) {
        planets.forEach((p, i) => {
          const ft = now * p.def.fs + i * 1.8;
          p.grp.position.y = p.def.pos[1] + Math.sin(ft) * p.def.fa;
          p.grp.rotateOnAxis(p.ax, p.def.rs * (p.hov ? 2.6 : 1));
        });

        // Animate wandering planetoids — Lissajous-style smooth paths, always behind
        planetoids.forEach(po => {
          const d = po.def;
          // Dual sine per axis: two frequencies summed → non-repeating, unpredictable path
          // Amplitudes large enough to wander off-screen and drift back naturally
          po.mesh.position.set(
            Math.sin(now * d.px[1] + d.px[2]) * d.px[0] + Math.sin(now * d.px[4] + d.px[5]) * d.px[3],
            Math.sin(now * d.py[1] + d.py[2]) * d.py[0] + Math.sin(now * d.py[4] + d.py[5]) * d.py[3],
            d.pz[0] + Math.sin(now * d.pz[2] + d.pz[3]) * d.pz[1]
          );
          po.mesh.rotation.y += 0.003;
        });
        tickSunReflection(now, flareCtx, W, H);
        stars.rotation.y += .00003; dust.rotation.y -= .0001;
      } // end !fly.active freeze block

      if (fly.active && fly.idx !== null) {
        const raw = Math.min((now - fly.t0) / fly.dur, 1);

        // ── Speed curve: micro-gravity pull → explosive warp suck ──
        // Phase 0-0.15: almost no movement (gravity just starting)
        // Phase 0.15-1.0: easeInQuint rush — barely moves then FLIES
        const easedT = raw < 0.15
          ? raw * raw * 0.4
          : (() => { const p = (raw - 0.15) / 0.85; return 0.009 + p * p * p * p * p * 0.991; })();

        const CENTER = new THREE.Vector3(0, 0, 22);

        // Camera position: center → planet end, following eased curve
        cam.position.lerpVectors(CENTER, fly.posEnd, easedT);

        // Camera always looks straight ahead (identity) — centering happens
        // purely because posEnd sits directly in front of the planet on the -Z axis.
        // As the camera travels there, the planet drifts to screen-center naturally.
        cam.quaternion.identity();

        // FOV: opens wide as warp speed builds (52 → 128), stays open, snaps at arrival
        const fovOpen = 52 + easedT * 76;
        cam.fov = raw < 0.93 ? fovOpen : 52 + (1 - (raw - 0.93) / 0.07) * (fovOpen - 52);
        cam.updateProjectionMatrix();

        // ── Advance streak lines past the camera ──
        if (raw > 0.10) {
          const spd = Math.pow(Math.max(0, raw - 0.10) / 0.90, 4) * 0.52;
          const fp = fsGeo.attributes.position.array;
          const dir = fly.dir;
          // Build orthonormal basis once per frame (cheap)
          const right3 = new THREE.Vector3(dir.y, -dir.x, 0).normalize();
          if (right3.lengthSq() < 0.001) right3.set(1, 0, 0);
          const up3 = new THREE.Vector3().crossVectors(dir, right3).normalize();

          for (let i = 0; i < FLY_STREAK_N; i++) {
            // Move streaks opposite to flight dir — they fly backward past camera
            fp[i * 6] -= dir.x * spd; fp[i * 6 + 1] -= dir.y * spd; fp[i * 6 + 2] -= dir.z * spd;
            fp[i * 6 + 3] -= dir.x * spd; fp[i * 6 + 4] -= dir.y * spd; fp[i * 6 + 5] -= dir.z * spd;
            // Recycle streaks that have passed behind the camera
            const dx = fp[i * 6] - cam.position.x, dy = fp[i * 6 + 1] - cam.position.y, dz = fp[i * 6 + 2] - cam.position.z;
            if (dx * dir.x + dy * dir.y + dz * dir.z < -1.2) {
              const ahead = 7 + Math.random() * 16;
              const ang2 = Math.random() * Math.PI * 2, rad2 = 0.25 + Math.random() * 2.6;
              const ox2 = Math.cos(ang2) * rad2, oy2 = Math.sin(ang2) * rad2;
              const len2 = 0.15 + Math.random() * 1.2;
              const nx = cam.position.x + dir.x * ahead + right3.x * ox2 + up3.x * oy2;
              const ny = cam.position.y + dir.y * ahead + right3.y * ox2 + up3.y * oy2;
              const nz = cam.position.z + dir.z * ahead + right3.z * ox2 + up3.z * oy2;
              fp[i * 6] = nx; fp[i * 6 + 1] = ny; fp[i * 6 + 2] = nz;
              fp[i * 6 + 3] = nx - dir.x * len2; fp[i * 6 + 4] = ny - dir.y * len2; fp[i * 6 + 5] = nz - dir.z * len2;
            }
          }
          fsGeo.attributes.position.needsUpdate = true;

          // Fade streaks in early, hold, fade at arrival
          const sAlpha = raw < 0.28 ? (raw - 0.10) / 0.18
            : raw > 0.88 ? (1 - raw) / 0.12
              : 1;
          flyStreaks.material.opacity = Math.max(0, Math.min(0.72, sAlpha * 0.72));
        }

        // Warp overlay: peaks mid-journey then smoothly ramps to FULL COVER at the end
        // This blankets the screen so there's no visible snap when the world loads
        if (warpRef.current) {
          let warpAlpha;
          if (raw < 0.5) warpAlpha = raw * 2 * 0.65;          // 0 → 0.65 on the way in
          else if (raw < 0.82) warpAlpha = (1 - raw) * 2 * 0.65;    // 0.65 → 0.12 as it fades
          else warpAlpha = 0.12 + ((raw - 0.82) / 0.18) * 0.88; // smoothly fill to 1.0
          warpRef.current.style.opacity = Math.min(warpAlpha, 1).toFixed(3);
        }

        if (raw >= 1) {
          fly.active = false;
          // Don't snap FOV — screen is covered by warp overlay anyway
          flyStreaks.material.opacity = 0;
          // Fire immediately — warp is already at full opacity, nothing visible to jar
          cbRef.current(WDEF[fly.idx].id);
          fly.idx = null;
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

    const rz = () => { cam.aspect = window.innerWidth / window.innerHeight; cam.updateProjectionMatrix(); ren.setSize(window.innerWidth, window.innerHeight); if (flareCanvas) { flareCanvas.width = window.innerWidth; flareCanvas.height = window.innerHeight; } };
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
      {/* Sun lens flare canvas — sits above THREE.js, below UI */}
      <canvas ref={flareRef} style={{ position: 'fixed', inset: 0, zIndex: 10, pointerEvents: 'none' }} />
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

/* ─── SPACE BRIDGE ─────────────────────────────────────────── */
// Canvas overlay shown during galaxy→world handoff.
// Fills the screen with deep space + rushing particles tinted in the world color,
// then fades out so the eye never leaves the vibeverse aesthetic.
const SpaceBridge = ({ color, onDone }) => {
  const ref = useRef(null);

  useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const W = window.innerWidth, H = window.innerHeight;
    cvs.width = W; cvs.height = H;
    const ctx = cvs.getContext('2d');

    // Parse world color
    const hex = color.replace('#', '');
    const cr = parseInt(hex.slice(0, 2), 16);
    const cg = parseInt(hex.slice(2, 4), 16);
    const cb = parseInt(hex.slice(4, 6), 16);

    const TOTAL = 1200;  // ms total duration
    const FADE_AT = 600;  // ms before we start fading out

    // ── Stars (static tiny dots, like deep space background) ──
    const STAR_N = 220;
    const stars = Array.from({ length: STAR_N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() < 0.15 ? 1.2 : 0.5,
      brightness: 0.3 + Math.random() * 0.7,
    }));

    // ── Rushing streaks (warp particles flying toward viewer) ──
    const STREAK_N = 180;
    const streaks = Array.from({ length: STREAK_N }, () => {
      // All start near center with slight spread, fly outward (radial warp)
      const ang = Math.random() * Math.PI * 2;
      const startR = 5 + Math.random() * 60;
      return {
        ang,
        r: startR,
        speed: 1.8 + Math.random() * 5.5,   // pixels per ms × dt
        len: 12 + Math.random() * 55,
        width: 0.5 + Math.random() * 1.0,
        bright: 0.35 + Math.random() * 0.65,
        // color: 60% world color, 40% white/blue tint
        tint: Math.random() < 0.60 ? 'world' : 'white',
      };
    });

    // ── Floating dust motes (slow, large, very faint) ──
    const MOTE_N = 35;
    const motes = Array.from({ length: MOTE_N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.04,
      vy: (Math.random() - 0.5) * 0.04,
      r: 2 + Math.random() * 6,
      op: 0.04 + Math.random() * 0.09,
    }));

    const t0 = performance.now();
    let raf;

    const draw = (now) => {
      const elapsed = now - t0;
      if (elapsed >= TOTAL) {
        ctx.clearRect(0, 0, W, H);
        onDone && onDone();
        return;
      }
      raf = requestAnimationFrame(draw);

      // Global opacity envelope: hold full → fade out
      const masterOp = elapsed < FADE_AT
        ? 1
        : 1 - ((elapsed - FADE_AT) / (TOTAL - FADE_AT));
      const ss = t => t * t * (3 - 2 * t);
      const globalAlpha = ss(Math.max(0, Math.min(1, masterOp)));

      // dt in ms for physics
      const dt = Math.min(32, elapsed > 0 ? 16 : 0);

      // ── Background ──
      ctx.globalAlpha = globalAlpha;
      ctx.fillStyle = `rgb(2,4,14)`;
      ctx.fillRect(0, 0, W, H);

      // ── Faint radial glow at center from world color ──
      const glowR = Math.max(W, H) * 0.65;
      const glow = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, glowR);
      glow.addColorStop(0, `rgba(${cr},${cg},${cb},${0.12 * globalAlpha})`);
      glow.addColorStop(0.4, `rgba(${cr},${cg},${cb},${0.05 * globalAlpha})`);
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      // ── Stars ──
      stars.forEach(s => {
        ctx.globalAlpha = s.brightness * globalAlpha * 0.8;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Dust motes ──
      motes.forEach(m => {
        m.x += m.vx; m.y += m.vy;
        if (m.x < 0) m.x = W; if (m.x > W) m.x = 0;
        if (m.y < 0) m.y = H; if (m.y > H) m.y = 0;
        ctx.globalAlpha = m.op * globalAlpha;
        ctx.fillStyle = `rgb(${cr},${cg},${cb})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Rushing streaks from center ──
      const cx = W / 2, cy = H / 2;
      // Speed ramps up in first half, stays high until fade
      const speedMult = elapsed < 300
        ? ss(elapsed / 300)
        : 1;

      streaks.forEach(sk => {
        sk.r += sk.speed * speedMult * (dt / 8);
        // Recycle when off screen
        const sx = cx + Math.cos(sk.ang) * sk.r;
        const sy = cy + Math.sin(sk.ang) * sk.r;
        if (sx < -50 || sx > W + 50 || sy < -50 || sy > H + 50) {
          sk.r = 5 + Math.random() * 30;
        }
        const ex = cx + Math.cos(sk.ang) * (sk.r + sk.len * speedMult);
        const ey = cy + Math.sin(sk.ang) * (sk.r + sk.len * speedMult);

        const grad = ctx.createLinearGradient(ex, ey, sx, sy);
        const [r3, g3, b3] = sk.tint === 'world' ? [cr, cg, cb] : [200, 220, 255];
        grad.addColorStop(0, `rgba(${r3},${g3},${b3},0)`);
        grad.addColorStop(0.6, `rgba(${r3},${g3},${b3},${sk.bright * globalAlpha * 0.6})`);
        grad.addColorStop(1, `rgba(255,255,255,${sk.bright * globalAlpha})`);

        ctx.globalAlpha = 1;
        ctx.strokeStyle = grad;
        ctx.lineWidth = sk.width;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={ref} style={{
      position: 'fixed', inset: 0, zIndex: 160, pointerEvents: 'none',
    }} />
  );
};

/* ─── WORMHOLE TRANSITION ──────────────────────────────────── */
const WormholeTransition = ({ onComplete }) => {
  const ref = useRef(null);

  useEffect(() => {
    const W = window.innerWidth, H = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.01, 800);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    ref.current.appendChild(renderer.domElement);

    camera.position.set(0, 0, 0);
    camera.lookAt(0, 0, -1);

    // Smooth easing helpers
    const smoothstep = t => t * t * (3 - 2 * t);
    const smoothstep2 = t => smoothstep(smoothstep(t)); // ultra-smooth
    const lerp = (a, b, t) => a + (b - a) * t;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const easeInQuint = t => t * t * t * t * t;
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    /* ── Tunnel rings ── */
    const RING_COUNT = 56;
    const rings = [];
    const COLORS = [0x22d3ee, 0xa855f7, 0xec4899, 0x4f8ef7, 0x10b981];

    for (let i = 1; i < RING_COUNT; i++) {
      const z = -3 - i * 2.8;
      const radius = 2.0 + Math.sin(i * 0.35) * 0.6;
      const mat = new THREE.MeshBasicMaterial({
        color: COLORS[i % COLORS.length], transparent: true,
        opacity: 0, side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.035 + (i % 3) * 0.018, 8, 96),
        mat
      );
      mesh.position.z = z;
      mesh.rotation.z = i * 0.22;
      mesh.rotation.x = Math.sin(i * 0.4) * 0.12;
      scene.add(mesh);

      // Thin inner glow ring
      const glowMat = new THREE.MeshBasicMaterial({
        color: COLORS[i % COLORS.length], transparent: true,
        opacity: 0, side: THREE.DoubleSide,
      });
      const glowMesh = new THREE.Mesh(
        new THREE.TorusGeometry(radius * 0.97, 0.012, 6, 96),
        glowMat
      );
      glowMesh.position.z = z;
      glowMesh.rotation.z = i * 0.22;
      glowMesh.rotation.x = Math.sin(i * 0.4) * 0.12;
      scene.add(glowMesh);

      rings.push({ mesh, mat, glowMesh, glowMat, baseZ: z, baseRot: i * 0.22, radius });
    }

    /* ── Spiral tunnel surface ── */
    const tunnelMat = new THREE.MeshBasicMaterial({
      color: 0x03071a, transparent: true, opacity: 0.98, side: THREE.BackSide,
    });
    const tunnel = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.1, 180, 40, 1, true), tunnelMat);
    tunnel.rotation.x = Math.PI / 2;
    tunnel.position.z = -90;
    scene.add(tunnel);

    /* ── Streak particles (lines flying past) ── */
    const STREAK_COUNT = 420;
    const streakGeo = new THREE.BufferGeometry();
    const sPos = new Float32Array(STREAK_COUNT * 6);
    const sCol = new Float32Array(STREAK_COUNT * 6);
    const STREAK_COLS = [0x22d3ee, 0xa855f7, 0xec4899, 0x4f8ef7, 0x10b981];
    for (let i = 0; i < STREAK_COUNT; i++) {
      const ang = Math.random() * Math.PI * 2;
      const r = 0.15 + Math.random() * 1.9;
      const x = Math.cos(ang) * r;
      const y = Math.sin(ang) * r;
      const z = -Math.random() * 160;
      const len = 0.4 + Math.random() * 1.8;
      sPos[i * 6] = x; sPos[i * 6 + 1] = y; sPos[i * 6 + 2] = z;
      sPos[i * 6 + 3] = x; sPos[i * 6 + 4] = y; sPos[i * 6 + 5] = z - len;
      const col = STREAK_COLS[i % STREAK_COLS.length];
      const r3 = ((col >> 16) & 255) / 255, g3 = ((col >> 8) & 255) / 255, b3 = (col & 255) / 255;
      sCol[i * 6] = r3; sCol[i * 6 + 1] = g3; sCol[i * 6 + 2] = b3;
      sCol[i * 6 + 3] = r3 * 0.2; sCol[i * 6 + 4] = g3 * 0.2; sCol[i * 6 + 5] = b3 * 0.2;
    }
    streakGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    streakGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
    const streaks = new THREE.LineSegments(
      streakGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0 })
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
    const TOTAL = 3800; // ms — longer for smoother feel
    // Phase thresholds
    const PH_PULLSTART = 0.0;  // camera begins gentle pull
    const PH_RUSH = 0.30; // acceleration kicks in smoothly
    const PH_WARP = 0.62; // full warp speed
    const PH_EXIT = 0.80; // tunnel ends, burst begins
    const PH_FADE = 0.88; // everything fades to black

    let raf, done = false;
    let lastT = 0;

    // Color lerp helper using hex
    const hexToRGB = h => ({ r: ((h >> 16) & 255) / 255, g: ((h >> 8) & 255) / 255, b: (h & 255) / 255 });
    const lerpColor = (a, b, t) => {
      const ca = hexToRGB(a), cb = hexToRGB(b);
      return new THREE.Color(ca.r + (cb.r - ca.r) * t, ca.g + (cb.g - ca.g) * t, ca.b + (cb.b - ca.b) * t);
    };
    const RING_PALETTE = [0x22d3ee, 0xa855f7, 0xec4899, 0x10b981, 0x4f8ef7];

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = Date.now();
      const raw = Math.min((now - T0) / TOTAL, 1);

      // Ultra-smooth global time — double smoothstep for silky feel
      const t = smoothstep2(raw);

      /* ── Speed curve: whisper → rush → warp ── */
      let speedMult;
      if (raw < PH_RUSH) {
        // Gentle pull — ease in with smoothstep
        const p = smoothstep(raw / PH_RUSH);
        speedMult = lerp(0.4, 3.5, p);
      } else if (raw < PH_WARP) {
        // Accelerating rush — cubic ramp
        const p = (raw - PH_RUSH) / (PH_WARP - PH_RUSH);
        speedMult = lerp(3.5, 18, p * p);
      } else if (raw < PH_EXIT) {
        // Peak warp — hold then taper
        const p = (raw - PH_WARP) / (PH_EXIT - PH_WARP);
        speedMult = lerp(18, 28, smoothstep(p));
      } else {
        // Decelerating exit — smooth ease-out
        const p = (raw - PH_EXIT) / (1 - PH_EXIT);
        speedMult = lerp(28, 2, easeOutCubic(p));
      }

      /* ── Camera: smooth forward dive ── */
      const camT = raw < PH_WARP
        ? smoothstep(raw / PH_WARP) * 0.45
        : 0.45 + smoothstep((raw - PH_WARP) / (1 - PH_WARP)) * 0.55;
      camera.position.z = -easeInQuint(camT) * 38;

      /* ── FOV: gentle widen then narrow on exit ── */
      const fovTarget = raw < PH_EXIT
        ? lerp(75, 118, smoothstep(clamp(raw / PH_WARP, 0, 1)))
        : lerp(118, 85, easeOutCubic((raw - PH_EXIT) / (1 - PH_EXIT)));
      camera.fov = lerp(camera.fov, fovTarget, 0.08); // lag for silkiness
      camera.updateProjectionMatrix();

      /* ── Rings: smooth fade-in, silky color blending, smooth fade-out ── */
      rings.forEach((r, i) => {
        // Staggered fade-in — each ring appears slightly after the previous
        const delay = i / RING_COUNT * 0.18;
        const fadeIn = clamp((raw - delay) / 0.25, 0, 1);
        // Smooth fade-out at exit
        const fadeOut = raw > PH_FADE
          ? 1 - smoothstep((raw - PH_FADE) / (1 - PH_FADE))
          : 1;
        const baseOpacity = (0.45 + 0.3 * Math.sin(now * 0.004 + i * 0.7)) * smoothstep(fadeIn) * fadeOut;
        r.mat.opacity = clamp(baseOpacity, 0, 0.88);
        r.glowMat.opacity = clamp(baseOpacity * 0.5, 0, 0.4);

        // Smooth color cycling — lerp between palette colors, no hard jumps
        const colorPhase = ((now * 0.0004 + i * 0.18) % 1 + 1) % 1;
        const ci = Math.floor(colorPhase * RING_PALETTE.length);
        const ct = (colorPhase * RING_PALETTE.length) % 1;
        const col = lerpColor(RING_PALETTE[ci], RING_PALETTE[(ci + 1) % RING_PALETTE.length], smoothstep(ct));
        r.mat.color.copy(col);
        r.glowMat.color.copy(col);

        // Rotation — smooth acceleration
        const rotSpeed = speedMult * 0.022;
        r.mesh.rotation.z += (i % 2 === 0 ? 1 : -1) * rotSpeed * 0.016;
        r.mesh.rotation.x = Math.sin(now * 0.001 + i * 0.2) * 0.06 * smoothstep(fadeIn);
        r.glowMesh.rotation.z = r.mesh.rotation.z + 0.04;
        r.glowMesh.rotation.x = r.mesh.rotation.x;
      });

      /* ── Streaks: fade in during rush, speed up, fade out at exit ── */
      const streakFadeIn = clamp((raw - 0.08) / 0.25, 0, 1);
      const streakFadeOut = raw > PH_EXIT ? 1 - easeOutCubic((raw - PH_EXIT) / (1 - PH_EXIT + 0.001)) : 1;
      streaks.material.opacity = clamp(0.72 * smoothstep(streakFadeIn) * streakFadeOut, 0, 0.8);

      const sp = streakGeo.attributes.position.array;
      const advance = speedMult * 0.10;
      for (let i = 0; i < STREAK_COUNT; i++) {
        sp[i * 6 + 2] += advance;
        sp[i * 6 + 5] += advance;
        if (sp[i * 6 + 2] > 2.5) {
          const ang = Math.random() * Math.PI * 2;
          const rm = 0.15 + Math.random() * 1.9;
          const xn = Math.cos(ang) * rm;
          const yn = Math.sin(ang) * rm;
          const zn = -150 - Math.random() * 20;
          const len = 0.4 + Math.random() * 1.8;
          sp[i * 6] = xn; sp[i * 6 + 1] = yn; sp[i * 6 + 2] = zn;
          sp[i * 6 + 3] = xn; sp[i * 6 + 4] = yn; sp[i * 6 + 5] = zn - len;
        }
      }
      streakGeo.attributes.position.needsUpdate = true;

      /* ── Exit burst — smooth arc in/out ── */
      if (raw >= PH_EXIT) {
        if (!burstActive) burstActive = true;
        const ep = (raw - PH_EXIT) / (1 - PH_EXIT);
        // Smooth bell curve: rises then falls
        const bell = ep < 0.45
          ? smoothstep(ep / 0.45)
          : 1 - smoothstep((ep - 0.45) / 0.55);
        burstMat.opacity = clamp(bell * 0.85, 0, 1);
        burstMat.size = lerp(0.04, 0.22, easeOutCubic(ep));

        const bp = burstGeo.attributes.position.array;
        for (let i = 0; i < BURST_COUNT; i++) {
          bp[i * 3] += bVel[i * 3] * speedMult * 0.45;
          bp[i * 3 + 1] += bVel[i * 3 + 1] * speedMult * 0.45;
          bp[i * 3 + 2] += bVel[i * 3 + 2] * speedMult * 0.45;
        }
        burstGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);

      if (raw >= 1 && !done) {
        done = true;
        setTimeout(() => onComplete(), 60);
      }
      lastT = raw;
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
      animation: 'wormholeFadeIn 0.18s ease-out forwards',
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

  const base = { position: 'fixed', pointerEvents: 'none', zIndex: 999999 };

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
/* ─── RESPONSIVE HOOK ─────────────────────────────────── */
const useWindowWidth = () => {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
};

const Toast = ({ msg, color = '#22d3ee' }) => (<div style={{ position: 'fixed', bottom: 90, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, background: 'rgba(3,7,18,.97)', border: `1px solid ${color}55`, borderRadius: 14, padding: '12px 28px', fontSize: 13, fontWeight: 700, color, backdropFilter: 'blur(20px)', boxShadow: `0 0 30px ${color}40,0 8px 40px rgba(0,0,0,.6)`, animation: 'sU .3s ease forwards', whiteSpace: 'nowrap', fontFamily: 'Rajdhani', letterSpacing: '.04em' }}>{msg}</div>);

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
          background: i % 2 === 0 ? color1 : color2,
          opacity: p.op * .7,
          animation: `${p.anim} ${p.dur}s ${p.del}s ease-in-out infinite`,
          boxShadow: `0 0 ${p.sz * 2}px ${i % 2 === 0 ? color1 : color2}`,
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


// Academy searchable content — mirrors Academy's FORUM_DATA + GUIDE_DATA + COURSE_DATA
const ACADEMY_SEARCH_DATA = [
  // Forum threads
  { id: 'ac_f1', title: 'Best way to handle real-time state in large collab apps?', author: '@devloop', type: 'thread' },
  { id: 'ac_f2', title: 'How I earned $3k in my first month on Vibe Market', author: '@neonphoenix', type: 'thread' },
  { id: 'ac_f3', title: 'Three.js performance: particles vs sprites for 50k objects?', author: '@quantumrift', type: 'thread' },
  // Guides
  { id: 'ac_g1', title: 'Selling Your First Project on Vibe Market', author: '@vw', type: 'guide' },
  { id: 'ac_g2', title: 'Building Three.js Scenes from Scratch', author: '@vw', type: 'guide' },
  { id: 'ac_g3', title: 'Setting Up Real-Time Collab with WebSockets', author: '@vw', type: 'guide' },
  { id: 'ac_g4', title: 'How to Build a Verified Creator Profile', author: '@vw', type: 'guide' },
  // Courses
  { id: 'ac_c1', title: 'React & Three.js Masterclass', author: '@vw', type: 'course' },
  { id: 'ac_c2', title: 'Selling on Vibe Market: Zero to $10k', author: '@vw', type: 'course' },
  { id: 'ac_c3', title: 'WebSocket & Real-Time Apps', author: '@vw', type: 'course' },
  { id: 'ac_c4', title: 'UI/UX for Developer Tools', author: '@vw', type: 'course' },
  { id: 'ac_c5', title: 'Building a Creator Brand', author: '@vw', type: 'course' },
  { id: 'ac_c6', title: 'TypeScript Patterns for Scale', author: '@vw', type: 'course' },
];
/* ─── MARKET DATA ───────────────────────────────────────────── */
const MKT = [
  { id: 1, title: 'NeuroFeed AI Dashboard', cr: '@flux.dev', crFull: 'Alex Flux', price: '$149', rt: 5, views: 9200, lk: 284, saves: 130, tags: ['React', 'AI', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'Real-time AI analytics dashboard with live feeds, anomaly detection, and customizable widget grid.', idea: 'Designed for fast-growing startups to monitor AI model performance in real time.', available: true, createdFor: 'Data Analytics Platforms', date: 'Feb 2026', saleType: 'sale' },
  { id: 2, title: 'VoidCommerce Store Kit', cr: '@voidcraft', crFull: 'Void Studio', price: '$89', rt: 4, views: 6800, lk: 156, saves: 88, tags: ['Next.js', 'E-commerce'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'Top Seller', desc: 'Complete e-commerce starter with cart, checkout, Stripe integration and immersive dark-mode UI.', idea: 'Built to help indie hackers ship beautiful stores in hours, not weeks.', available: false, createdFor: 'Independent Creators', date: 'Jan 2026', saleType: 'sale' },
  { id: 3, title: 'Orbital Web3 Portfolio', cr: '@cryptoui', crFull: 'Crypto UX', price: '$65', rt: 5, views: 12100, lk: 501, saves: 220, tags: ['Three.js', 'Web3', 'NFT'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'Immersive 3D portfolio with orbit controls, NFT gallery, and particle wallet animations.', idea: 'Every Web3 creator deserves a portfolio as futuristic as their work.', available: true, createdFor: 'NFT Artists & Collectors', date: 'Feb 2026', saleType: 'sale' },
  { id: 4, title: 'PulseBot Chat Interface', cr: '@devwave', crFull: 'Dev Wave', price: '$120', rt: 4, views: 4100, lk: 198, saves: 76, tags: ['AI', 'Chat', 'GPT'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: false, badge: null, desc: 'GPT-powered chat UI with streaming responses, conversation history, and custom persona support.', idea: 'AI assistants should feel human. This template makes that happen.', available: true, createdFor: 'SaaS Products & AI Apps', date: 'Dec 2025', saleType: 'sale' },
  { id: 5, title: 'Nebula Analytics Suite', cr: '@quantumux', crFull: 'Quantum UX', price: '$210', rt: 5, views: 7800, lk: 412, saves: 165, tags: ['D3.js', 'Analytics'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'Enterprise-grade analytics with D3 visualizations, cohort analysis, and export pipelines.', idea: 'Inspired by Amplitude and Mixpanel but infinitely more beautiful.', available: false, createdFor: 'Enterprise SaaS', date: 'Jan 2026', saleType: 'sale' },
  { id: 6, title: 'SynthVoice Podcast App', cr: '@audiodna', crFull: 'Audio DNA', price: '$75', rt: 4, views: 3200, lk: 167, saves: 55, tags: ['Audio', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: false, badge: null, desc: 'Podcast streaming app with waveform visualizer, chapter markers, and offline playback.', idea: 'Podcasting UI reimagined for the next generation of listeners.', available: true, createdFor: 'Media & Entertainment', date: 'Nov 2025', saleType: 'sale' },
  { id: 7, title: 'CryptoTrader Terminal', cr: '@flux.dev', crFull: 'Alex Flux', price: '$185', rt: 5, views: 5600, lk: 288, saves: 142, tags: ['Finance', 'Chart'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Professional crypto trading terminal with real-time charts, order book, and portfolio tracker.', idea: 'Traders deserve tools as powerful as institutional platforms but for everyone.', available: true, createdFor: 'Crypto Traders', date: 'Feb 2026', saleType: 'sale' },
  { id: 8, title: 'Luminary Design System', cr: '@voidcraft', crFull: 'Void Studio', price: '$95', rt: 4, views: 8900, lk: 334, saves: 188, tags: ['Design System', 'Figma'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: true, badge: null, desc: '300+ component design system with Figma source files and React implementation.', idea: 'Ship consistent, beautiful products faster with a rock-solid foundation.', available: false, createdFor: 'Product Teams', date: 'Jan 2026', saleType: 'sale' },
  // Ghost projects
  { id: 9, title: 'Phantom Auth Kit', cr: '@ghostdev', crFull: 'Ghost Dev', price: '$59', rt: 5, views: 2100, lk: 88, saves: 34, tags: ['Auth', 'Next.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Complete auth system with OAuth2, magic links, 2FA, and role-based access control.', idea: 'Auth is the hardest part. We made it the easiest.', available: true, createdFor: 'SaaS Founders', date: 'Feb 2026', saleType: 'sale' },
  { id: 10, title: 'Spectral UI Component Lib', cr: '@spectra.io', crFull: 'Spectra Studio', price: '$120', rt: 4, views: 4300, lk: 201, saves: 99, tags: ['React', 'Components', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: false, badge: 'New', desc: '50+ fully accessible React components with dark mode, TypeScript and Storybook docs.', idea: 'Components that look great and work great, every time.', available: true, createdFor: 'Engineering Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 11, title: 'Mirage Email Builder', cr: '@miragelab', crFull: 'Mirage Lab', price: '$79', rt: 5, views: 3700, lk: 145, saves: 67, tags: ['Email', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Drag-and-drop email template builder with React Email integration and 30+ templates.', idea: 'Beautiful emails should be as easy to build as landing pages.', available: false, createdFor: 'Marketing Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 12, title: 'Void Map SDK', cr: '@voidcraft', crFull: 'Void Studio', price: '$149', rt: 5, views: 6100, lk: 278, saves: 120, tags: ['Maps', 'SDK', 'JavaScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'Lightweight MapLibre-based SDK with custom styling, geofencing, and real-time tracking.', idea: 'Maps that feel native to your dark-mode product.', available: false, createdFor: 'Location-aware Apps', date: 'Jan 2026', saleType: 'sale' },
  { id: 13, title: 'Aura Landing Kit', cr: '@aurabuilder', crFull: 'Aura Builder', price: '$45', rt: 4, views: 5500, lk: 189, saves: 77, tags: ['HTML', 'CSS', 'Landing'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: false, badge: null, desc: '12 premium landing page sections with animations, all in vanilla HTML/CSS/JS. No framework needed.', idea: 'Great landing pages should not require a PhD in React.', available: true, createdFor: 'Indie Hackers', date: 'Dec 2025', saleType: 'sale' },
  { id: 14, title: 'RiftDB Admin Panel', cr: '@riftcode', crFull: 'Rift Code', price: '$199', rt: 5, views: 3900, lk: 321, saves: 155, tags: ['React', 'Admin', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'Full-featured admin panel with CRUD tables, charts, user management, and role permissions.', idea: 'Every SaaS needs a great admin panel. Now you have one.', available: true, createdFor: 'SaaS Products', date: 'Feb 2026', saleType: 'sale' },
  { id: 15, title: 'Cosmos Onboarding Flow', cr: '@cosmosui', crFull: 'Cosmos UI', price: '$69', rt: 4, views: 2800, lk: 112, saves: 48, tags: ['React', 'Onboarding', 'UX'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1569098644663-b27c0f2f3b29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: false, badge: null, desc: 'Multi-step onboarding with progress tracking, skip logic, and completion animations.', idea: 'First impressions are everything. Make yours unforgettable.', available: true, createdFor: 'SaaS & Apps', date: 'Nov 2025', saleType: 'sale' },
  { id: 16, title: 'NightOwl Blog Theme', cr: '@darkstudio', crFull: 'Dark Studio', price: '$55', rt: 5, views: 4200, lk: 176, saves: 82, tags: ['Next.js', 'Blog', 'MDX'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: true, badge: null, desc: 'MDX-powered blog with syntax highlighting, newsletter integration, and dark/light toggle.', idea: 'Technical blogs deserve technical beauty.', available: false, createdFor: 'Developer Blogs', date: 'Jan 2026', saleType: 'sale' },
  // Ghost Projects (100+)
  { id: 17, title: 'Prism Color Picker', cr: '@prismdev', crFull: 'Prism Dev', price: '$39', rt: 4, views: 1800, lk: 67, saves: 29, tags: ['React', 'Color', 'Tools'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for SaaS Tools who need the best tools.', available: true, createdFor: 'SaaS Tools', date: 'Feb 2026', saleType: 'sale' },
  { id: 18, title: 'Sentinel Error Monitor', cr: '@sentinelops', crFull: 'Sentinel Ops', price: '$165', rt: 5, views: 3400, lk: 189, saves: 91, tags: ['React', 'Monitoring', 'API'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for DevOps Teams who need the best tools.', available: true, createdFor: 'DevOps Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 19, title: 'Forge CLI Tool Kit', cr: '@forgecli', crFull: 'Forge CLI', price: '$49', rt: 4, views: 2200, lk: 98, saves: 44, tags: ['CLI', 'Node.js', 'Tools'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: false, badge: null, desc: 'Developer CLI tool with scaffolding, automation, and productivity features.', idea: 'Built for Developers who need the best tools.', available: false, createdFor: 'Developers', date: 'Jan 2026', saleType: 'sale' },
  { id: 20, title: 'Dusk Admin Template', cr: '@duskstudio', crFull: 'Dusk Studio', price: '$79', rt: 5, views: 5600, lk: 243, saves: 118, tags: ['React', 'Admin', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for SaaS Products who need the best tools.', available: true, createdFor: 'SaaS Products', date: 'Feb 2026', saleType: 'sale' },
  { id: 21, title: 'Echo Notification System', cr: '@echodev', crFull: 'Echo Dev', price: '$55', rt: 4, views: 2900, lk: 134, saves: 62, tags: ['React', 'Notifications', 'WebSocket'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for App Developers who need the best tools.', available: true, createdFor: 'App Developers', date: 'Jan 2026', saleType: 'sale' },
  { id: 22, title: 'Flux Form Builder', cr: '@fluxforms', crFull: 'Flux Forms', price: '$89', rt: 5, views: 4100, lk: 201, saves: 95, tags: ['React', 'Forms', 'Validation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Product Teams who need the best tools.', available: true, createdFor: 'Product Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 23, title: 'Terra CSS Framework', cr: '@terracss', crFull: 'Terra CSS', price: '$35', rt: 4, views: 6700, lk: 312, saves: 140, tags: ['CSS', 'Framework', 'Utility'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for All Developers who need the best tools.', available: false, createdFor: 'All Developers', date: 'Dec 2025', saleType: 'sale' },
  { id: 24, title: 'Nyx Dark Dashboard', cr: '@nyxui', crFull: 'Nyx UI', price: '$125', rt: 5, views: 3800, lk: 178, saves: 84, tags: ['React', 'Dark', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Startups who need the best tools.', available: true, createdFor: 'Startups', date: 'Jan 2026', saleType: 'sale' },
  { id: 25, title: 'Quantum State Manager', cr: '@qstate', crFull: 'Q State', price: '$99', rt: 4, views: 2400, lk: 112, saves: 51, tags: ['React', 'State', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Engineering Teams who need the best tools.', available: false, createdFor: 'Engineering Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 26, title: 'Helix API Studio', cr: '@helixapi', crFull: 'Helix API', price: '$145', rt: 5, views: 4500, lk: 234, saves: 109, tags: ['API', 'TypeScript', 'SDK'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Robust API integration kit with error handling, retries, and TypeScript types.', idea: 'Built for Backend Devs who need the best tools.', available: true, createdFor: 'Backend Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 27, title: 'Mist UI Library', cr: '@mistui', crFull: 'Mist UI', price: '$79', rt: 4, views: 3200, lk: 156, saves: 73, tags: ['React', 'Components', 'CSS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Frontend Devs who need the best tools.', available: true, createdFor: 'Frontend Devs', date: 'Jan 2026', saleType: 'sale' },
  { id: 28, title: 'Pulse Webhook Hub', cr: '@pulsedev', crFull: 'Pulse Dev', price: '$69', rt: 5, views: 2600, lk: 121, saves: 57, tags: ['Webhooks', 'Node.js', 'API'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Integration Devs who need the best tools.', available: false, createdFor: 'Integration Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 29, title: 'Solar SaaS Boilerplate', cr: '@solarapp', crFull: 'Solar App', price: '$199', rt: 5, views: 7200, lk: 389, saves: 178, tags: ['Next.js', 'SaaS', 'Auth'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for SaaS Founders who need the best tools.', available: true, createdFor: 'SaaS Founders', date: 'Feb 2026', saleType: 'sale' },
  { id: 30, title: 'Lunar Charts Library', cr: '@lunarchart', crFull: 'Lunar Chart', price: '$89', rt: 4, views: 3900, lk: 183, saves: 86, tags: ['React', 'Charts', 'D3.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Data Teams who need the best tools.', available: true, createdFor: 'Data Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 31, title: 'Arc Drag & Drop', cr: '@arclib', crFull: 'Arc Lib', price: '$59', rt: 4, views: 2100, lk: 99, saves: 46, tags: ['React', 'DnD', 'Components'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for App Devs who need the best tools.', available: false, createdFor: 'App Devs', date: 'Dec 2025', saleType: 'sale' },
  { id: 32, title: 'Vertex 3D Viewer', cr: '@vertexlab', crFull: 'Vertex Lab', price: '$115', rt: 5, views: 4800, lk: 256, saves: 120, tags: ['Three.js', 'WebGL', '3D'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Creative Devs who need the best tools.', available: true, createdFor: 'Creative Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 33, title: 'Storm State Machine', cr: '@stormdev', crFull: 'Storm Dev', price: '$75', rt: 4, views: 2700, lk: 127, saves: 59, tags: ['XState', 'TypeScript', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for App Architects who need the best tools.', available: false, createdFor: 'App Architects', date: 'Jan 2026', saleType: 'sale' },
  { id: 34, title: 'Opal File Manager', cr: '@opaldev', crFull: 'Opal Dev', price: '$85', rt: 5, views: 3300, lk: 161, saves: 75, tags: ['React', 'Files', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for SaaS Products who need the best tools.', available: true, createdFor: 'SaaS Products', date: 'Feb 2026', saleType: 'sale' },
  { id: 35, title: 'Cobalt CI/CD Tracker', cr: '@cobaltops', crFull: 'Cobalt Ops', price: '$129', rt: 4, views: 2900, lk: 138, saves: 64, tags: ['DevOps', 'React', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Dev Teams who need the best tools.', available: true, createdFor: 'Dev Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 36, title: 'Iris Icon Library', cr: '@irisdesign', crFull: 'Iris Design', price: '$45', rt: 5, views: 5400, lk: 267, saves: 125, tags: ['Icons', 'SVG', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Designers who need the best tools.', available: true, createdFor: 'Designers', date: 'Feb 2026', saleType: 'sale' },
  { id: 37, title: 'Cascade Animation Kit', cr: '@cascadeui', crFull: 'Cascade UI', price: '$95', rt: 4, views: 3100, lk: 149, saves: 69, tags: ['React', 'Animation', 'Framer'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Frontend Devs who need the best tools.', available: true, createdFor: 'Frontend Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 38, title: 'Drift Realtime Board', cr: '@driftapp', crFull: 'Drift App', price: '$149', rt: 5, views: 4700, lk: 231, saves: 108, tags: ['React', 'WebSocket', 'Realtime'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Collaboration Tools who need the best tools.', available: false, createdFor: 'Collaboration Tools', date: 'Jan 2026', saleType: 'sale' },
  { id: 39, title: 'Nimbus Cloud Dashboard', cr: '@nimbusui', crFull: 'Nimbus UI', price: '$109', rt: 4, views: 3600, lk: 172, saves: 80, tags: ['React', 'Cloud', 'Infrastructure'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for DevOps Teams who need the best tools.', available: true, createdFor: 'DevOps Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 40, title: 'Ember CMS Builder', cr: '@emberdev', crFull: 'Ember Dev', price: '$159', rt: 5, views: 5100, lk: 248, saves: 116, tags: ['Next.js', 'CMS', 'MDX'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Content Teams who need the best tools.', available: true, createdFor: 'Content Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 41, title: 'Flare Push Notifications', cr: '@flaredev', crFull: 'Flare Dev', price: '$65', rt: 4, views: 2500, lk: 118, saves: 55, tags: ['React', 'PWA', 'Notifications'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Mobile Devs who need the best tools.', available: false, createdFor: 'Mobile Devs', date: 'Dec 2025', saleType: 'sale' },
  { id: 42, title: 'Praxis UI Testing Kit', cr: '@praxisdev', crFull: 'Praxis Dev', price: '$85', rt: 5, views: 2900, lk: 139, saves: 65, tags: ['Testing', 'Playwright', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for QA Engineers who need the best tools.', available: true, createdFor: 'QA Engineers', date: 'Jan 2026', saleType: 'sale' },
  { id: 43, title: 'Vault Secrets Manager', cr: '@vaultui', crFull: 'Vault UI', price: '$139', rt: 4, views: 3400, lk: 163, saves: 76, tags: ['Security', 'Node.js', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Security Teams who need the best tools.', available: true, createdFor: 'Security Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 44, title: 'Mosaic Grid Layout', cr: '@mosaicui', crFull: 'Mosaic UI', price: '$55', rt: 4, views: 4100, lk: 196, saves: 91, tags: ['CSS', 'Grid', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for UI Designers who need the best tools.', available: false, createdFor: 'UI Designers', date: 'Feb 2026', saleType: 'sale' },
  { id: 45, title: 'Spark CLI Generator', cr: '@sparktools', crFull: 'Spark Tools', price: '$39', rt: 5, views: 2200, lk: 104, saves: 48, tags: ['CLI', 'Node.js', 'Scaffolding'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Developer CLI tool with scaffolding, automation, and productivity features.', idea: 'Built for Developers who need the best tools.', available: true, createdFor: 'Developers', date: 'Jan 2026', saleType: 'sale' },
  { id: 46, title: 'Ridge Dark Theme Kit', cr: '@ridgedesign', crFull: 'Ridge Design', price: '$79', rt: 5, views: 3700, lk: 178, saves: 83, tags: ['VSCode', 'Themes', 'Dark'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developers who need the best tools.', available: true, createdFor: 'Developers', date: 'Feb 2026', saleType: 'sale' },
  { id: 47, title: 'Sable Markdown Editor', cr: '@sabledev', crFull: 'Sable Dev', price: '$69', rt: 4, views: 3000, lk: 143, saves: 67, tags: ['React', 'Markdown', 'Editor'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Content Teams who need the best tools.', available: false, createdFor: 'Content Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 48, title: 'Apex Performance Monitor', cr: '@apexdev', crFull: 'Apex Dev', price: '$119', rt: 5, views: 4200, lk: 207, saves: 97, tags: ['React', 'Performance', 'Analytics'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Engineering Teams who need the best tools.', available: true, createdFor: 'Engineering Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 49, title: 'Gale Component Scanner', cr: '@galetools', crFull: 'Gale Tools', price: '$59', rt: 4, views: 2300, lk: 110, saves: 51, tags: ['CLI', 'React', 'Analysis'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: false, badge: null, desc: 'Developer CLI tool with scaffolding, automation, and productivity features.', idea: 'Built for Dev Teams who need the best tools.', available: false, createdFor: 'Dev Teams', date: 'Dec 2025', saleType: 'sale' },
  { id: 50, title: 'Aether AR Components', cr: '@aetherui', crFull: 'Aether UI', price: '$189', rt: 5, views: 6300, lk: 318, saves: 149, tags: ['AR', 'WebXR', 'Three.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for XR Developers who need the best tools.', available: true, createdFor: 'XR Developers', date: 'Feb 2026', saleType: 'sale' },
  { id: 51, title: 'Rune Password Manager', cr: '@runedev', crFull: 'Rune Dev', price: '$79', rt: 4, views: 2800, lk: 133, saves: 62, tags: ['Security', 'React', 'Encryption'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Security Devs who need the best tools.', available: true, createdFor: 'Security Devs', date: 'Jan 2026', saleType: 'sale' },
  { id: 52, title: 'Echo Social Kit', cr: '@echosocial', crFull: 'Echo Social', price: '$89', rt: 5, views: 3500, lk: 169, saves: 79, tags: ['React', 'Social', 'Feed'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: false, badge: 'New', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Community Apps who need the best tools.', available: false, createdFor: 'Community Apps', date: 'Feb 2026', saleType: 'sale' },
  { id: 53, title: 'Tidal Scroll Library', cr: '@tidalui', crFull: 'Tidal UI', price: '$49', rt: 4, views: 2600, lk: 123, saves: 57, tags: ['React', 'Scroll', 'Animation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Frontend Devs who need the best tools.', available: true, createdFor: 'Frontend Devs', date: 'Jan 2026', saleType: 'sale' },
  { id: 54, title: 'Crater DB Explorer', cr: '@cratertools', crFull: 'Crater Tools', price: '$99', rt: 5, views: 3100, lk: 149, saves: 70, tags: ['Database', 'React', 'Admin'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Backend Devs who need the best tools.', available: true, createdFor: 'Backend Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 55, title: 'Lyra Music Player', cr: '@lyradev', crFull: 'Lyra Dev', price: '$75', rt: 4, views: 2400, lk: 115, saves: 53, tags: ['React', 'Audio', 'Player'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Media Apps who need the best tools.', available: false, createdFor: 'Media Apps', date: 'Feb 2026', saleType: 'sale' },
  { id: 56, title: 'Zenith Type System', cr: '@zenithdesign', crFull: 'Zenith Design', price: '$65', rt: 5, views: 3800, lk: 182, saves: 85, tags: ['Typography', 'CSS', 'Figma'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Designers who need the best tools.', available: true, createdFor: 'Designers', date: 'Jan 2026', saleType: 'sale' },
  { id: 57, title: 'Phase Deployment Kit', cr: '@phaseops', crFull: 'Phase Ops', price: '$125', rt: 4, views: 3000, lk: 144, saves: 67, tags: ['DevOps', 'CI/CD', 'Docker'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Dev Teams who need the best tools.', available: true, createdFor: 'Dev Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 58, title: 'Halo Loading States', cr: '@haloui', crFull: 'Halo UI', price: '$39', rt: 5, views: 4500, lk: 216, saves: 101, tags: ['React', 'Loading', 'Skeleton'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for UI Developers who need the best tools.', available: true, createdFor: 'UI Developers', date: 'Feb 2026', saleType: 'sale' },
  { id: 59, title: 'Sigil NFT Marketplace', cr: '@sigilweb3', crFull: 'Sigil Web3', price: '$159', rt: 4, views: 5700, lk: 271, saves: 127, tags: ['Web3', 'NFT', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: false, badge: 'Hot', desc: 'Web3-ready components with wallet connection, contract interaction, and ENS support.', idea: 'Built for Web3 Builders who need the best tools.', available: false, createdFor: 'Web3 Builders', date: 'Jan 2026', saleType: 'sale' },
  { id: 60, title: 'Nova Wallet Connect', cr: '@novaweb3', crFull: 'Nova Web3', price: '$119', rt: 5, views: 4100, lk: 198, saves: 93, tags: ['Web3', 'Wallet', 'Ethereum'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Web3-ready components with wallet connection, contract interaction, and ENS support.', idea: 'Built for Web3 Developers who need the best tools.', available: true, createdFor: 'Web3 Developers', date: 'Feb 2026', saleType: 'sale' },
  { id: 61, title: 'Onyx Table Component', cr: '@onyxdev', crFull: 'Onyx Dev', price: '$55', rt: 4, views: 2900, lk: 138, saves: 64, tags: ['React', 'Tables', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Data Teams who need the best tools.', available: false, createdFor: 'Data Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 62, title: 'Strata Layout Engine', cr: '@strataui', crFull: 'Strata UI', price: '$79', rt: 5, views: 3400, lk: 163, saves: 76, tags: ['React', 'Layout', 'CSS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Frontend Devs who need the best tools.', available: true, createdFor: 'Frontend Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 63, title: 'Blaze Speed Dashboard', cr: '@blazedev', crFull: 'Blaze Dev', price: '$95', rt: 4, views: 3800, lk: 182, saves: 85, tags: ['React', 'Performance', 'Metrics'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Engineering Teams who need the best tools.', available: true, createdFor: 'Engineering Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 64, title: 'Cyan Chat SDK', cr: '@cyandev', crFull: 'Cyan Dev', price: '$85', rt: 5, views: 3200, lk: 153, saves: 72, tags: ['React', 'Chat', 'SDK'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for App Developers who need the best tools.', available: false, createdFor: 'App Developers', date: 'Jan 2026', saleType: 'sale' },
  { id: 65, title: 'Mirage Image Optimizer', cr: '@miragetools', crFull: 'Mirage Tools', price: '$59', rt: 4, views: 2700, lk: 128, saves: 60, tags: ['Images', 'Next.js', 'Performance'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Web Developers who need the best tools.', available: true, createdFor: 'Web Developers', date: 'Feb 2026', saleType: 'sale' },
  { id: 66, title: 'Axis Data Pipeline', cr: '@axisdata', crFull: 'Axis Data', price: '$179', rt: 5, views: 4900, lk: 237, saves: 111, tags: ['Data', 'Python', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Data Engineers who need the best tools.', available: true, createdFor: 'Data Engineers', date: 'Feb 2026', saleType: 'sale' },
  { id: 67, title: 'Specter Debug Console', cr: '@specterdev', crFull: 'Specter Dev', price: '$69', rt: 4, views: 2500, lk: 119, saves: 55, tags: ['React', 'Debug', 'DevTools'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Developers who need the best tools.', available: false, createdFor: 'Developers', date: 'Jan 2026', saleType: 'sale' },
  { id: 68, title: 'Quartz Blog Platform', cr: '@quartzdev', crFull: 'Quartz Dev', price: '$89', rt: 5, views: 4300, lk: 207, saves: 97, tags: ['Next.js', 'Blog', 'CMS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Writers & Devs who need the best tools.', available: true, createdFor: 'Writers & Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 69, title: 'Dune Mobile Gestures', cr: '@duneui', crFull: 'Dune UI', price: '$79', rt: 4, views: 3100, lk: 148, saves: 69, tags: ['React Native', 'Gestures', 'Mobile'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Mobile Devs who need the best tools.', available: true, createdFor: 'Mobile Devs', date: 'Jan 2026', saleType: 'sale' },
  { id: 70, title: 'Lyric AI Writer', cr: '@lyricai', crFull: 'Lyric AI', price: '$129', rt: 5, views: 5200, lk: 251, saves: 118, tags: ['AI', 'Next.js', 'GPT'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Content Creators who need the best tools.', available: true, createdFor: 'Content Creators', date: 'Feb 2026', saleType: 'sale' },
  { id: 71, title: 'Matrix Code Renderer', cr: '@matrixdev', crFull: 'Matrix Dev', price: '$49', rt: 4, views: 3600, lk: 172, saves: 80, tags: ['Canvas', 'JavaScript', 'Animation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Creative Devs who need the best tools.', available: false, createdFor: 'Creative Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 72, title: 'Orbit Social Graph', cr: '@orbitdev', crFull: 'Orbit Dev', price: '$139', rt: 5, views: 4100, lk: 198, saves: 93, tags: ['React', 'Graph', 'D3.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Analytics Teams who need the best tools.', available: true, createdFor: 'Analytics Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 73, title: 'Prism Color Tokens', cr: '@prismdesign', crFull: 'Prism Design', price: '$59', rt: 4, views: 2800, lk: 133, saves: 62, tags: ['Design Tokens', 'CSS', 'Figma'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Design Systems who need the best tools.', available: true, createdFor: 'Design Systems', date: 'Feb 2026', saleType: 'sale' },
  { id: 74, title: 'Stellar Map Component', cr: '@stellarui', crFull: 'Stellar UI', price: '$99', rt: 5, views: 3700, lk: 178, saves: 83, tags: ['Maps', 'React', 'Leaflet'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'Interactive map component with markers, clusters, and real-time updates.', idea: 'Built for Location Apps who need the best tools.', available: false, createdFor: 'Location Apps', date: 'Feb 2026', saleType: 'sale' },
  { id: 75, title: 'Eclipse Dark Kit', cr: '@eclipseui', crFull: 'Eclipse UI', price: '$79', rt: 4, views: 4200, lk: 201, saves: 94, tags: ['Dark Mode', 'CSS', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for UI Developers who need the best tools.', available: true, createdFor: 'UI Developers', date: 'Jan 2026', saleType: 'sale' },
  { id: 76, title: 'Zephyr Animation Suite', cr: '@zephyrui', crFull: 'Zephyr UI', price: '$109', rt: 5, views: 3500, lk: 168, saves: 78, tags: ['Animation', 'GSAP', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Smooth animation library with GPU-accelerated effects and composable hooks.', idea: 'Built for Creative Devs who need the best tools.', available: true, createdFor: 'Creative Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 77, title: 'Carbon Design Tokens', cr: '@carbondesign', crFull: 'Carbon Design', price: '$55', rt: 4, views: 2600, lk: 124, saves: 58, tags: ['Design System', 'CSS', 'Figma'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Product Teams who need the best tools.', available: false, createdFor: 'Product Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 78, title: 'Thunder API Gateway', cr: '@thunderdev', crFull: 'Thunder Dev', price: '$149', rt: 5, views: 4800, lk: 231, saves: 108, tags: ['API', 'Node.js', 'Gateway'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Robust API integration kit with error handling, retries, and TypeScript types.', idea: 'Built for Backend Teams who need the best tools.', available: true, createdFor: 'Backend Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 79, title: 'Jade Markdown Renderer', cr: '@jadedev', crFull: 'Jade Dev', price: '$45', rt: 4, views: 2200, lk: 105, saves: 49, tags: ['Markdown', 'React', 'MDX'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Content Apps who need the best tools.', available: true, createdFor: 'Content Apps', date: 'Feb 2026', saleType: 'sale' },
  { id: 80, title: 'Cobalt Code Snippets', cr: '@cobaltdev', crFull: 'Cobalt Dev', price: '$35', rt: 5, views: 3100, lk: 148, saves: 69, tags: ['Code', 'React', 'Developer'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developers who need the best tools.', available: false, createdFor: 'Developers', date: 'Jan 2026', saleType: 'sale' },
  { id: 81, title: 'Frost UI Components', cr: '@frostui', crFull: 'Frost UI', price: '$89', rt: 4, views: 3400, lk: 163, saves: 76, tags: ['React', 'Components', 'CSS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Product Teams who need the best tools.', available: true, createdFor: 'Product Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 82, title: 'Nova Newsletter Kit', cr: '@novamail', crFull: 'Nova Mail', price: '$69', rt: 5, views: 2900, lk: 138, saves: 64, tags: ['Email', 'React', 'Newsletter'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Beautiful email templates with drag-and-drop builder and preview functionality.', idea: 'Built for Marketing Teams who need the best tools.', available: true, createdFor: 'Marketing Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 83, title: 'Steel CRUD Generator', cr: '@steeldev', crFull: 'Steel Dev', price: '$119', rt: 4, views: 3600, lk: 172, saves: 80, tags: ['CRUD', 'React', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Full-stack Devs who need the best tools.', available: false, createdFor: 'Full-stack Devs', date: 'Jan 2026', saleType: 'sale' },
  { id: 84, title: 'Pixel Icon Generator', cr: '@pixeltools', crFull: 'Pixel Tools', price: '$49', rt: 5, views: 4100, lk: 196, saves: 92, tags: ['Icons', 'SVG', 'Tool'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Designers who need the best tools.', available: true, createdFor: 'Designers', date: 'Feb 2026', saleType: 'sale' },
  { id: 85, title: 'Neon Progress Bars', cr: '@neonui', crFull: 'Neon UI', price: '$39', rt: 4, views: 2400, lk: 115, saves: 53, tags: ['React', 'Progress', 'Animation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for App Devs who need the best tools.', available: true, createdFor: 'App Devs', date: 'Jan 2026', saleType: 'sale' },
  { id: 86, title: 'Jade Calendar UI', cr: '@jadecal', crFull: 'Jade Cal', price: '$75', rt: 5, views: 3300, lk: 158, saves: 74, tags: ['React', 'Calendar', 'Events'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A polished React component set with TypeScript support and comprehensive documentation.', idea: 'Built for Productivity Apps who need the best tools.', available: false, createdFor: 'Productivity Apps', date: 'Feb 2026', saleType: 'sale' },
  { id: 87, title: 'Silver Analytics SDK', cr: '@silverdata', crFull: 'Silver Data', price: '$139', rt: 4, views: 4600, lk: 220, saves: 103, tags: ['Analytics', 'SDK', 'JavaScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Deep analytics with powerful charts, cohort analysis, and data export pipelines.', idea: 'Built for Analytics Teams who need the best tools.', available: true, createdFor: 'Analytics Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 88, title: 'Flux Search Engine', cr: '@fluxsearch', crFull: 'Flux Search', price: '$99', rt: 5, views: 3800, lk: 182, saves: 85, tags: ['Search', 'React', 'Algolia'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Product Teams who need the best tools.', available: true, createdFor: 'Product Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 89, title: 'Obsidian Dev Portfolio', cr: '@obsidianui', crFull: 'Obsidian UI', price: '$55', rt: 4, views: 3200, lk: 153, saves: 71, tags: ['Portfolio', 'Next.js', 'Animation'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: false, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developers who need the best tools.', available: false, createdFor: 'Developers', date: 'Feb 2026', saleType: 'sale' },
  { id: 90, title: 'Quasar Email SDK', cr: '@quasardev', crFull: 'Quasar Dev', price: '$79', rt: 5, views: 2700, lk: 128, saves: 60, tags: ['Email', 'SDK', 'API'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Beautiful email templates with drag-and-drop builder and preview functionality.', idea: 'Built for Integration Devs who need the best tools.', available: true, createdFor: 'Integration Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 91, title: 'Vega Chart Components', cr: '@vegadev', crFull: 'Vega Dev', price: '$95', rt: 4, views: 4000, lk: 192, saves: 90, tags: ['Charts', 'React', 'D3.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Data Viz Teams who need the best tools.', available: true, createdFor: 'Data Viz Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 92, title: 'Amber Auth Dashboard', cr: '@amberauth', crFull: 'Amber Auth', price: '$109', rt: 5, views: 3500, lk: 168, saves: 78, tags: ['Auth', 'Dashboard', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'Secure authentication system with multiple providers and role-based access control.', idea: 'Built for SaaS Products who need the best tools.', available: false, createdFor: 'SaaS Products', date: 'Feb 2026', saleType: 'sale' },
  { id: 93, title: 'Crystal Payment UI', cr: '@crystalpay', crFull: 'Crystal Pay', price: '$149', rt: 4, views: 4700, lk: 225, saves: 105, tags: ['Stripe', 'React', 'Payments'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for E-commerce who need the best tools.', available: true, createdFor: 'E-commerce', date: 'Feb 2026', saleType: 'sale' },
  { id: 94, title: 'Stone Code Documentation', cr: '@stonedocs', crFull: 'Stone Docs', price: '$65', rt: 5, views: 3100, lk: 149, saves: 69, tags: ['Docs', 'MDX', 'Next.js'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developer Tools who need the best tools.', available: true, createdFor: 'Developer Tools', date: 'Jan 2026', saleType: 'sale' },
  { id: 95, title: 'Tide Responsive Grid', cr: '@tideui', crFull: 'Tide UI', price: '$49', rt: 4, views: 2800, lk: 133, saves: 62, tags: ['CSS', 'Grid', 'Responsive'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Frontend Devs who need the best tools.', available: false, createdFor: 'Frontend Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 96, title: 'Comet SaaS Dashboard', cr: '@cometdev', crFull: 'Comet Dev', price: '$189', rt: 5, views: 6100, lk: 293, saves: 137, tags: ['SaaS', 'React', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: true, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for SaaS Founders who need the best tools.', available: true, createdFor: 'SaaS Founders', date: 'Feb 2026', saleType: 'sale' },
  { id: 97, title: 'Ghost Theme Studio', cr: '@ghoststudio', crFull: 'Ghost Studio', price: '$75', rt: 4, views: 3400, lk: 163, saves: 76, tags: ['Ghost CMS', 'Theme', 'Design'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Bloggers who need the best tools.', available: true, createdFor: 'Bloggers', date: 'Jan 2026', saleType: 'sale' },
  { id: 98, title: 'Ember Form Validation', cr: '@emberforms', crFull: 'Ember Forms', price: '$59', rt: 5, views: 2600, lk: 124, saves: 58, tags: ['Forms', 'React', 'Zod'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for App Devs who need the best tools.', available: false, createdFor: 'App Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 99, title: 'Prism Dev Environment', cr: '@prismtools', crFull: 'Prism Tools', price: '$129', rt: 4, views: 4500, lk: 215, saves: 101, tags: ['Docker', 'DevEnv', 'CLI'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Dev Teams who need the best tools.', available: true, createdFor: 'Dev Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 100, title: 'Abyss Dark Mode Kit', cr: '@abyssui', crFull: 'Abyss UI', price: '$85', rt: 5, views: 3900, lk: 186, saves: 87, tags: ['Dark Mode', 'React', 'CSS'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', v: true, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for UI Developers who need the best tools.', available: true, createdFor: 'UI Developers', date: 'Feb 2026', saleType: 'sale' },
  { id: 101, title: 'Forge Testing Suite', cr: '@forgetest', crFull: 'Forge Test', price: '$99', rt: 4, views: 3200, lk: 153, saves: 71, tags: ['Testing', 'Vitest', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', v: false, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for QA Teams who need the best tools.', available: false, createdFor: 'QA Teams', date: 'Jan 2026', saleType: 'sale' },
  { id: 102, title: 'Meridian Map Explorer', cr: '@meridiandev', crFull: 'Meridian Dev', price: '$119', rt: 5, views: 4300, lk: 206, saves: 96, tags: ['Maps', 'Mapbox', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'Interactive map component with markers, clusters, and real-time updates.', idea: 'Built for Location Apps who need the best tools.', available: true, createdFor: 'Location Apps', date: 'Feb 2026', saleType: 'sale' },
  { id: 103, title: 'Arc Browser Extension', cr: '@arcext', crFull: 'Arc Ext', price: '$45', rt: 4, views: 2500, lk: 119, saves: 55, tags: ['Chrome', 'Extension', 'JavaScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Browser Devs who need the best tools.', available: true, createdFor: 'Browser Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 104, title: 'Nova Design Playground', cr: '@novadesign', crFull: 'Nova Design', price: '$65', rt: 5, views: 3600, lk: 172, saves: 80, tags: ['Design', 'Figma', 'Prototype'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Designers who need the best tools.', available: false, createdFor: 'Designers', date: 'Jan 2026', saleType: 'sale' },
  { id: 105, title: 'Glacier State Sync', cr: '@glacierdev', crFull: 'Glacier Dev', price: '$89', rt: 4, views: 2900, lk: 138, saves: 64, tags: ['State', 'React', 'Sync'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for App Devs who need the best tools.', available: true, createdFor: 'App Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 106, title: 'Raven Dark Components', cr: '@ravenui', crFull: 'Raven UI', price: '$75', rt: 5, views: 3100, lk: 148, saves: 69, tags: ['Dark', 'Components', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'Stunning dark mode UI kit with perfectly tuned contrast and accessibility.', idea: 'Built for UI Devs who need the best tools.', available: true, createdFor: 'UI Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 107, title: 'Slate Admin Generator', cr: '@slategen', crFull: 'Slate Gen', price: '$159', rt: 4, views: 4800, lk: 230, saves: 108, tags: ['Admin', 'React', 'CRUD'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop', v: false, badge: 'Hot', desc: 'Full-featured admin panel with tables, charts, user management, and permissions.', idea: 'Built for Full-stack Devs who need the best tools.', available: false, createdFor: 'Full-stack Devs', date: 'Jan 2026', saleType: 'sale' },
  { id: 108, title: 'Pixel Animation Lib', cr: '@pixelanim', crFull: 'Pixel Anim', price: '$69', rt: 5, views: 3400, lk: 162, saves: 76, tags: ['Animation', 'Canvas', 'JavaScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop', v: true, badge: null, desc: 'Smooth animation library with GPU-accelerated effects and composable hooks.', idea: 'Built for Creative Devs who need the best tools.', available: true, createdFor: 'Creative Devs', date: 'Feb 2026', saleType: 'sale' },
  { id: 109, title: 'Coral Image CDN UI', cr: '@coraldev', crFull: 'Coral Dev', price: '$95', rt: 4, views: 3700, lk: 177, saves: 83, tags: ['Images', 'CDN', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Media Apps who need the best tools.', available: true, createdFor: 'Media Apps', date: 'Feb 2026', saleType: 'sale' },
  { id: 110, title: 'Echo Webhook Platform', cr: '@echoweb', crFull: 'Echo Web', price: '$139', rt: 5, views: 5200, lk: 249, saves: 117, tags: ['Webhooks', 'Node.js', 'Dashboard'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Integration Devs who need the best tools.', available: false, createdFor: 'Integration Devs', date: 'Jan 2026', saleType: 'sale' },
  { id: 111, title: 'Helix Graph Database', cr: '@helixdb', crFull: 'Helix DB', price: '$179', rt: 4, views: 4100, lk: 196, saves: 92, tags: ['Graph', 'Database', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', v: true, badge: 'New', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Data Engineers who need the best tools.', available: true, createdFor: 'Data Engineers', date: 'Feb 2026', saleType: 'sale' },
  { id: 112, title: 'Steel DevOps Monitor', cr: '@steelops', crFull: 'Steel Ops', price: '$149', rt: 5, views: 4500, lk: 215, saves: 101, tags: ['DevOps', 'Monitoring', 'React'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Ops Teams who need the best tools.', available: true, createdFor: 'Ops Teams', date: 'Feb 2026', saleType: 'sale' },
  { id: 113, title: 'Jade E-commerce Kit', cr: '@jadeshop', crFull: 'Jade Shop', price: '$129', rt: 4, views: 3800, lk: 182, saves: 85, tags: ['E-commerce', 'Next.js', 'Stripe'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop', v: false, badge: 'Hot', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Indie Hackers who need the best tools.', available: false, createdFor: 'Indie Hackers', date: 'Jan 2026', saleType: 'sale' },
  { id: 114, title: 'Silver Socket Server', cr: '@silverdev', crFull: 'Silver Dev', price: '$89', rt: 5, views: 2800, lk: 133, saves: 62, tags: ['WebSocket', 'Node.js', 'TypeScript'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop', v: true, badge: null, desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Realtime Apps who need the best tools.', available: true, createdFor: 'Realtime Apps', date: 'Feb 2026', saleType: 'sale' },
  { id: 115, title: 'Carbon Dark IDE Theme', cr: '@carbonide', crFull: 'Carbon IDE', price: '$29', rt: 4, views: 5600, lk: 268, saves: 126, tags: ['VSCode', 'Theme', 'Dark'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop', v: true, badge: 'Trending', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Developers who need the best tools.', available: true, createdFor: 'Developers', date: 'Feb 2026', saleType: 'sale' },
  { id: 116, title: 'Quantum Microservices', cr: '@quantumarch', crFull: 'Quantum Arch', price: '$199', rt: 5, views: 4200, lk: 201, saves: 94, tags: ['Microservices', 'Node.js', 'Docker'], media: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=500&fit=crop' }, { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop' }], img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop', v: false, badge: 'Premium', desc: 'A production-ready template built with modern tools and best practices.', idea: 'Built for Architects who need the best tools.', available: false, createdFor: 'Architects', date: 'Jan 2026', saleType: 'sale' },
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

  const intervalRef = React.useRef(null);
  const handleEnter = () => { active.current = true; burst(); intervalRef.current = setInterval(burst, 700); };
  const handleLeave = () => { active.current = false; clearInterval(intervalRef.current); clearTimeout(timerRef.current); setTimeout(() => setPts([]), 650); };

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
        {purchased ? '✓ OWNED' : 'BUY'}
      </button>
    </div>
  );
};

/* ─── MARKET DETAIL PAGE ────────────────────────────────────── */
const MarketDetail = ({
  item, onBack, onPurchase, purchased, onBookmark, bookmarked, onLike, liked,
  onCreatorClick, onGetInTouch, onOpenRelated, onInvite, workspaces = [], uploads = [],
  onUploadPublish, onUploadDraft, onRequestUpload, globalFollowed = {},
  setGlobalFollowed, uploadDrafts = [], setUploadDrafts, uploadInitialDraftRef,
  onOpenSettings, teamRelationships = [], setTeamRelationships,
  teamInvites = [], setTeamInvites, addNotification, resolveNotification,
  myList = [], setMyList = null
}) => {
  React.useLayoutEffect(() => { window.scrollTo(0, 0); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }, []);
  const confirm = useConfirm();
  const [detailProfileUser, setDetailProfileUser] = React.useState(null);
  const [detailToast, setDetailToast] = React.useState(null);
  const showDetailToast = (msg, color = '#22d3ee') => { setDetailToast({ msg, color }); setTimeout(() => setDetailToast(null), 2800); };
  const openCreator = () => { const d = DESIGNERS_DATA.find(x => x.name === item.cr); if (d) setDetailProfileUser({ ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] }); };
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
    <>
      {detailProfileUser && <UserProfileModal
        user={detailProfileUser}
        onClose={() => setDetailProfileUser(null)}
        followed={!!globalFollowed[detailProfileUser.handle || detailProfileUser.name]}
        onFollow={() => { const k = detailProfileUser.handle || detailProfileUser.name; if (setGlobalFollowed) setGlobalFollowed(f => ({ ...f, [k]: !f[k] })); }}
        earnedBadges={detailProfileUser.badges || ['starter']}
        onGetInTouch={(u) => onGetInTouch && onGetInTouch(u)}
        onInvite={onInvite}
        workspaces={workspaces}
        showToast={showDetailToast}
        uploads={uploads}
        drafts={uploadDrafts}
        onRequestUpload={(user) => { const u = user || detailProfileUser; const fn = () => setDetailProfileUser(u); setDetailProfileUser(null); if (onRequestUpload) onRequestUpload(u, fn); }}
        onEditDraft={(d, i) => { if (uploadInitialDraftRef) uploadInitialDraftRef.current = d; const fn = () => setDetailProfileUser({ handle: '@you', name: 'You' }); setDetailProfileUser(null); if (onRequestUpload) onRequestUpload({ handle: '@you' }, fn); }}
        onPublishDraft={(d, i) => { setUploadDrafts && setUploadDrafts(prev => prev.filter((_, j) => j !== i)); const pub = { ...d, id: Date.now(), img: d.files?.[d.thumbIdx || 0]?.url || '', media: d.files?.map((f, mi) => ({ src: f.url, type: f.type, alt: f.alt, layout: f.layout, i: mi })) || [], cr: '@you', crFull: 'You', price: '', rt: 5, views: 0, lk: 0, saves: 0 }; if (onUploadPublish) onUploadPublish(pub); setDetailProfileUser(null); showDetailToast('Published ✓', '#10b981'); }}
        onOpenSettings={onOpenSettings}
        teamRelationships={teamRelationships} setTeamRelationships={setTeamRelationships}
        teamInvites={teamInvites} setTeamInvites={setTeamInvites}
        addNotification={addNotification} resolveNotification={resolveNotification}
        myList={myList || []} setMyList={setMyList}
      />}
      {detailToast && <Toast msg={detailToast.msg} color={detailToast.color} />}
      <div style={{ minHeight: '100vh', paddingTop: 56, animation: 'detailFade .4s ease forwards' }}>
        {/* Sticky creator header */}
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 80, background: 'rgba(3,7,18,.96)', backdropFilter: 'blur(28px)', borderBottom: '1px solid var(--br)', padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 700, marginRight: 4, padding: '4px 0' }}>
            <RainbowArrow size={13} /> Back
          </button>
          <div style={{ width: 1, height: 20, background: 'var(--br)' }} />
          <div onClick={openCreator} style={{ cursor: 'pointer', transition: 'transform .18s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <Av src={DESIGNERS_DATA.find(d => d.name === item.cr)?.av || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop'} sz={34} on={item.available} />
          </div>
          <div>
            <span onClick={openCreator} style={{ fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'color .15s' }} onMouseEnter={e => e.target.style.color = '#a855f7'} onMouseLeave={e => e.target.style.color = ''}>{item.crFull}</span>
            <span style={{ fontSize: 11, color: 'var(--mu)', marginLeft: 8 }}>for {item.createdFor}</span>
            {item.available && <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 700, color: '#10b981', fontFamily: 'JetBrains Mono' }}>● Available for work</span>}
          </div>
          <button onClick={() => { if (follow) { confirm({ msg: 'Unfollow creator?', sub: `Stop following ${item.crFull}?`, okLabel: 'Unfollow', okColor: '#ec4899', onOk: () => { setFollow(false); showDetailToast('Unfollowed', '#ec4899'); } }); } else { setFollow(true); showDetailToast(`Now following ${item.crFull}`, '#22d3ee'); } }} style={{ padding: '5px 14px', borderRadius: 7, border: `1px solid ${follow ? 'transparent' : 'rgba(255,255,255,.2)'}`, background: follow ? 'linear-gradient(135deg,#22d3ee,#a855f7)' : 'none', cursor: 'pointer', color: follow ? 'white' : 'rgba(255,255,255,.7)', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani' }}>
            {follow ? 'Following' : 'Follow'}
          </button>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={e => { triggerFlyHeart(e, liked); onLike(); }} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, border: `1px solid ${liked ? 'rgba(236,72,153,.5)' : 'rgba(255,255,255,.1)'}`, background: liked ? 'rgba(236,72,153,.1)' : 'none', cursor: 'pointer', color: liked ? '#ec4899' : 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600 }}>
              <Heart size={14} fill={liked ? '#ec4899' : 'none'} color={liked ? '#ec4899' : 'var(--mu)'} />{item.lk + (liked ? 1 : 0)}
            </button>
            <button onClick={e => { triggerFlyBm(e, bookmarked); onBookmark(); }} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, border: `1px solid ${bookmarked ? 'rgba(168,85,247,.5)' : 'rgba(255,255,255,.1)'}`, background: bookmarked ? 'rgba(168,85,247,.1)' : 'none', cursor: 'pointer', color: bookmarked ? '#a855f7' : 'var(--mu)', fontSize: 12 }}>
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
              <img src={item.media?.[0]?.src || item.img} alt="" style={{ width: '100%', display: 'block', maxHeight: 480, objectFit: 'cover' }} />
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
                    <div key={r.id} className="gl CU" style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer' }} onClick={() => { if (onOpenRelated) onOpenRelated(r); }}>
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
                  <div key={r.id} className="gl CU" style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer' }} onClick={() => { if (onOpenRelated) onOpenRelated(r); }}>
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
            <img src={item.media?.[0]?.src || item.img} alt="" style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
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
              {item.tags.map(t => <span key={t} style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,.12)', fontSize: 11, color: 'rgba(255,255,255,.7)' }}>{t}</span>)}
              {['digital', 'template', 'ui', 'creative'].map(t => <span key={t} style={{ padding: '4px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,.08)', fontSize: 11, color: 'rgba(255,255,255,.4)' }}>{t}</span>)}
            </div>
          </div>
        )}
      </div>
    </>
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

/* ─── CREATOR MINI CARD (Market hover) ─────────────────────── */
const CreatorMiniCard = ({ creator, av, crName, show, onFollow, followed, onGetInTouch, onInvite, onProfileClick }) => {
  if (!show || !creator) return null;
  const d = DESIGNERS_DATA.find(x => x.name === crName) || { av, name: crName, full: crName, role: 'Creator', tags: [] };
  const previewImgs = MKT.filter(m => m.cr === crName).slice(0, 3).map(m => m.img).filter(Boolean);
  return (
    <div style={{ position: 'absolute', bottom: 'calc(100% + 6px)', left: 0, marginLeft: 8, marginBottom: 8, zIndex: 400, background: 'rgba(6,9,24,.98)', borderRadius: 16, border: '1px solid rgba(255,255,255,.12)', padding: '14px', width: 240, animation: 'hoverMenuSlide .18s ease', boxShadow: '0 16px 56px rgba(0,0,0,.8)', pointerEvents: 'auto' }} onClick={e => e.stopPropagation()}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
        <div onClick={onProfileClick} style={{ cursor: 'pointer', flexShrink: 0 }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'} onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}>
          <Av src={d.av || av} sz={38} on={d.on || false} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div onClick={onProfileClick} style={{ fontSize: 12, fontWeight: 800, fontFamily: 'Rajdhani', cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', transition: 'color .15s' }} onMouseEnter={e => e.target.style.color = '#a855f7'} onMouseLeave={e => e.target.style.color = ''}>{d.full || crName}</div>
          <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.role || 'Creator'}</div>
        </div>
      </div>
      {/* Work previews */}
      {previewImgs.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4, marginBottom: 10, borderRadius: 9, overflow: 'hidden' }}>
          {previewImgs.map((img, i) => (
            <img key={i} src={img} alt="" style={{ width: '100%', height: 52, objectFit: 'cover', borderRadius: 5, opacity: .85 }} />
          ))}
        </div>
      )}
      {/* Action buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          <FollowBtn following={followed} onFollow={onFollow} size="sm" />
          <button onClick={onGetInTouch} style={{ flex: 1, padding: '7px', borderRadius: 8, border: '1px solid rgba(168,85,247,.35)', background: 'rgba(168,85,247,.08)', cursor: 'pointer', color: '#a855f7', fontSize: 10, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,.18)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(168,85,247,.08)'}>
            Get in Touch
          </button>
        </div>
        <button onClick={onInvite} style={{ width: '100%', padding: '7px', borderRadius: 8, border: '1px solid rgba(34,211,238,.25)', background: 'rgba(34,211,238,.06)', cursor: 'pointer', color: 'rgba(255,255,255,.7)', fontSize: 10, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, transition: 'all .2s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,.14)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,211,238,.06)'}>
          <Zap size={10} color="#22d3ee" />Invite to Vibe
        </button>
      </div>
    </div>
  );
};

const MarketCard = ({ item, likes, wish, views, purchased, onOpen, onLike, onWish, onPurchase, authCheck, onCreatorHover, followed, onFollow, onGetInTouch, onInvite, workspaces = [], highlighted = false }) => {
  const [hov, setHov] = React.useState(false);
  const [buyBurst, setBuyBurst] = React.useState(false);
  const [mediaIdx, setMediaIdx] = React.useState(0);
  const [showCreatorCard, setShowCreatorCard] = React.useState(false);
  const [crFollowed, setCrFollowed] = React.useState(!!followed);
  const creatorCardTimer = React.useRef(null);
  const cycleRef = React.useRef(null);
  const iv = views[item.id] || 0;
  const media = item.media || [{ type: 'image', src: item.img }];
  const AVTS = ['https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop'];
  const av = DESIGNERS_DATA.find(d => d.name === item.cr)?.av || AVTS[item.id % AVTS.length];

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
    <div style={{
      borderRadius: 14, overflow: 'hidden', cursor: 'pointer', position: 'relative',
      border: `1px solid ${highlighted ? 'rgba(34,211,238,.8)' : hov ? 'rgba(255,255,255,.18)' : 'rgba(255,255,255,.06)'}`,
      boxShadow: highlighted ? '0 0 0 2px rgba(34,211,238,.5),0 0 32px rgba(34,211,238,.35)' : hov ? '0 20px 50px rgba(0,0,0,.55),0 0 24px rgba(168,85,247,.1)' : '0 2px 12px rgba(0,0,0,.2)',
      transform: hov ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform .22s,box-shadow .22s,border-color .22s'
    }}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}
      onClick={() => onOpen(item)}>

      {/* ── MEDIA LAYER (always visible) ── */}
      <div style={{ position: 'relative', paddingBottom: '75%', overflow: 'hidden', background: '#050810' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          {cur.type === 'video' ? (
            <video src={cur.src} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <img src={cur.src} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .5s', transform: hov ? 'scale(1.05)' : 'scale(1)' }} />
          )}
        </div>

        {/* ── RESTING INFO STRIP (always visible, bottom gradient) ── */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to top, rgba(3,7,18,.6) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 10px 8px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', zIndex: 5, pointerEvents: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', position: 'relative', pointerEvents: 'auto' }}
            onMouseEnter={() => { creatorCardTimer.current = setTimeout(() => setShowCreatorCard(true), 320); }}
            onMouseLeave={() => { clearTimeout(creatorCardTimer.current); setTimeout(() => setShowCreatorCard(false), 250); }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,.3)' }}>
              <img src={av} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'white', textShadow: '0 1px 4px rgba(0,0,0,.8)', maxWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.crFull}</span>
            <CreatorMiniCard
              show={showCreatorCard}
              creator={item.cr}
              av={av}
              crName={item.cr}
              followed={crFollowed}
              onFollow={e => { e && e.stopPropagation(); setCrFollowed(f => !f); if (onFollow) onFollow(item.cr); }}
              onGetInTouch={e => { e && e.stopPropagation(); setShowCreatorCard(false); if (onGetInTouch) onGetInTouch({ cr: item.cr, crFull: item.crFull, price: 'Negotiable', av }); }}
              onInvite={e => { e && e.stopPropagation(); setShowCreatorCard(false); if (onInvite) onInvite({ name: item.cr, full: item.crFull, av }); }}
              onProfileClick={e => { e && e.stopPropagation(); setShowCreatorCard(false); if (onCreatorHover) onCreatorHover(item); }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 9, color: 'rgba(255,255,255,.6)', fontFamily: 'JetBrains Mono' }}>
              <Heart size={9} fill={likes[item.id] ? '#ec4899' : 'none'} color={likes[item.id] ? '#ec4899' : 'rgba(255,255,255,.6)'} />{item.lk + (likes[item.id] ? 1 : 0)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 9, color: 'rgba(255,255,255,.6)', fontFamily: 'JetBrains Mono' }}>
              <Eye size={9} />{(item.views + iv).toLocaleString()}
            </div>
          </div>
        </div>

        {/* ── ALWAYS-VISIBLE ACTION BUTTONS (like + bookmark) ── */}
        <div style={{ position: 'absolute', top: 9, right: 9, display: 'flex', gap: 6, zIndex: 6 }} onClick={e => e.stopPropagation()}>
          <button onClick={e => { e.stopPropagation(); triggerFlyHeart(e, !!likes[item.id]); onLike(); }}
            style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(3,7,18,.75)', border: `1px solid ${likes[item.id] ? '#ec4899' : 'rgba(255,255,255,.22)'}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all .18s', opacity: hov ? 1 : 0, transform: hov ? 'scale(1)' : 'scale(0.85)', pointerEvents: hov ? 'auto' : 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(236,72,153,.2)'; e.currentTarget.style.borderColor = '#ec4899'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(3,7,18,.75)'; e.currentTarget.style.borderColor = likes[item.id] ? '#ec4899' : 'rgba(255,255,255,.22)'; }}>
            <Heart size={13} fill={likes[item.id] ? '#ec4899' : 'none'} color={likes[item.id] ? '#ec4899' : 'white'} />
          </button>
          <button onClick={e => { e.stopPropagation(); triggerFlyBm(e, !!wish[item.id]); authCheck(() => onWish()); }}
            style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(3,7,18,.75)', border: `1px solid ${wish.includes(item.id) ? '#a855f7' : 'rgba(255,255,255,.22)'}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all .18s', opacity: hov ? 1 : 0, transform: hov ? 'scale(1)' : 'scale(0.85)', pointerEvents: hov ? 'auto' : 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,.2)'; e.currentTarget.style.borderColor = '#a855f7'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(3,7,18,.75)'; e.currentTarget.style.borderColor = wish.includes(item.id) ? '#a855f7' : 'rgba(255,255,255,.22)'; }}>
            <Bookmark size={13} fill={wish.includes(item.id) ? '#a855f7' : 'none'} color={wish.includes(item.id) ? '#a855f7' : 'white'} />
          </button>
        </div>

        {/* ── HOVER OVERLAY (appears on hover) ── */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(3,7,18,.78) 0%, rgba(3,7,18,.70) 35%, rgba(3,7,18,.55) 60%, rgba(3,7,18,.1) 88%, transparent 100%)',
          opacity: hov ? 1 : 0, transition: 'opacity .22s', zIndex: 4, pointerEvents: hov ? 'auto' : 'none'
        }}>



          {/* Badge + verified chips */}
          {item.badge && <div style={{ position: 'absolute', top: 9, left: 9, zIndex: 5 }}><Bdg color="#f59e0b" ch={item.badge} /></div>}
          {item.v && <div style={{ position: 'absolute', top: item.badge ? 34 : 9, left: 9, display: 'flex', alignItems: 'center', gap: 3, padding: '2px 7px', background: 'rgba(34,211,238,.14)', border: '1px solid rgba(34,211,238,.4)', borderRadius: 6, zIndex: 5 }}><Shield size={9} color="#22d3ee" /><span style={{ fontSize: 8, color: '#22d3ee', fontFamily: 'JetBrains Mono' }}>VERIFIED</span></div>}

          {/* Middle: title + tags */}
          <div style={{ position: 'absolute', bottom: item.saleType ? 130 : 16, left: 0, right: 0, padding: '0 12px', transform: hov ? 'translateY(0)' : 'translateY(8px)', transition: 'transform .22s', textShadow: '0 1px 12px rgba(0,0,0,.9)' }}>
            <div style={{ background: 'rgba(3,7,18,.45)', backdropFilter: 'blur(4px)', borderRadius: 6, padding: '4px 8px', marginBottom: 7, display: 'inline-block', maxWidth: '100%' }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: 'white', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{item.title}</div>
            </div>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {item.tags.slice(0, 2).map(t => <Bdg key={t} color="#a855f7" ch={t} />)}
            </div>
          </div>

          {/* Media slider dots */}
          {media.length > 1 && (
            <div style={{ position: 'absolute', bottom: item.saleType ? 168 : 54, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4, zIndex: 6 }}>
              {media.map((_, i) => (
                <div key={i} style={{ width: i === mediaIdx ? 12 : 4, height: 4, borderRadius: 2, background: i === mediaIdx ? 'white' : 'rgba(255,255,255,.4)', transition: 'all .3s' }} />
              ))}
            </div>
          )}

          {/* Bottom: sale/hire action — sits above 56px creator strip */}
          {item.saleType && (
            <div style={{ position: 'absolute', bottom: 58, left: 0, right: 0, padding: '0 12px', transform: hov ? 'translateY(0)' : 'translateY(8px)', transition: 'transform .22s .05s', pointerEvents: 'auto' }} onClick={e => e.stopPropagation()}>
              {item.saleType === 'sale' ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 900, color: '#22d3ee', fontFamily: 'Orbitron', textShadow: '0 0 12px rgba(34,211,238,.4)' }}>{item.price}</span>
                  <button onClick={e => { e.stopPropagation(); setBuyBurst(true); setTimeout(() => setBuyBurst(false), 600); authCheck(() => onPurchase(item)); }} style={{ padding: '5px 14px', borderRadius: 8, border: 'none', background: purchased ? 'linear-gradient(135deg,#10b981,#22d3ee)' : 'linear-gradient(135deg,#22d3ee,#a855f7)', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', cursor: 'pointer', transition: 'all .18s', boxShadow: purchased ? '0 2px 10px rgba(16,185,129,.4)' : '0 2px 10px rgba(34,211,238,.3)', whiteSpace: 'nowrap', position: 'relative' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                    {purchased ? '✓ OWNED' : 'BUY'}
                    <ParticleBurst active={buyBurst} purchased={purchased} />
                  </button>
                </div>
              ) : (
                <button onClick={e => { e.stopPropagation(); if (onGetInTouch) onGetInTouch({ cr: item.cr, crFull: item.crFull, price: 'Negotiable', av }); }} style={{ width: '100%', padding: '5px 14px', borderRadius: 8, border: '1px solid rgba(34,211,238,.4)', background: 'rgba(34,211,238,.08)', color: '#22d3ee', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', cursor: 'pointer', transition: 'all .18s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,.18)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,211,238,.08)'}>
                  Get in Touch
                </button>
              )}
            </div>
          )}
        </div>


      </div>
    </div>
  );
};



/* ─── AUTH MODAL ────────────────────────────────────────────── */
/* ─── MARKET ──────────────────────────────────────────────── */
const DESIGNERS_DATA = [
  { name: '@flux.dev', full: 'Alex Flux', role: 'React • AI', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 14, followers: '2.1k', tags: ['React', 'AI'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@voidcraft', full: 'Void Studio', role: 'Next.js • Design Systems', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: false, projects: 9, followers: '1.4k', tags: ['Next.js', 'CSS'], badges: ['starter', 'serious'] },
  { name: '@cryptoui', full: 'Crypto UX', role: 'Three.js • WebGL', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 22, followers: '5.8k', tags: ['Three.js', 'WebGL'], badges: ['starter', 'serious', 'ultimate', 'party', 'world', 'vibetagonist'] },
  { name: '@quantumux', full: 'Quantum UX', role: 'D3.js • Analytics', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 7, followers: '892', tags: ['D3.js'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@audiodna', full: 'Audio DNA', role: 'Audio • React Native', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 11, followers: '1.9k', tags: ['Audio', 'Mobile'], badges: ['starter'] },
  { name: '@ghostdev', full: 'Ghost Dev', role: 'Auth • Security', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 5, followers: '920', tags: ['Auth', 'Node.js'], badges: ['starter', 'serious'] },
  { name: '@spectra.io', full: 'Spectra Studio', role: 'Components • TypeScript', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 8, followers: '1.1k', tags: ['React', 'TypeScript'], badges: ['starter'] },
  { name: '@miragelab', full: 'Mirage Lab', role: 'Email • Marketing', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 6, followers: '654', tags: ['Email', 'React'], badges: ['starter', 'serious', 'ultimate'] },
  // Ghost Creators (with preview badges)
  { name: '@prismdev', full: 'Prism Dev', role: 'Color Systems • CSS', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 4, followers: '1.2k', tags: ['Color Systems', 'CSS'], badges: ['starter', 'serious'] },
  { name: '@sentinelops', full: 'Sentinel Ops', role: 'DevOps • Monitoring', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: false, projects: 8, followers: '2.3k', tags: ['DevOps', 'Monitoring'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@forgecli', full: 'Forge CLI', role: 'CLI • Node.js', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 5, followers: '870', tags: ['CLI', 'Node.js'], badges: ['starter', 'serious', 'ultimate', 'party', 'world', 'vibetagonist'] },
  { name: '@duskstudio', full: 'Dusk Studio', role: 'React • Admin', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.1k', tags: ['React', 'Admin'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@echodev', full: 'Echo Dev', role: 'Realtime • WebSocket', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 6, followers: '990', tags: ['Realtime', 'WebSocket'], badges: ['starter'] },
  { name: '@fluxforms', full: 'Flux Forms', role: 'Forms • Validation', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 9, followers: '1.8k', tags: ['Forms', 'Validation'], badges: ['starter', 'serious', 'ultimate', 'party', 'world'] },
  { name: '@terracss', full: 'Terra CSS', role: 'CSS • Framework', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 14, followers: '4.2k', tags: ['CSS', 'Framework'], badges: ['starter'] },
  { name: '@nyxui', full: 'Nyx UI', role: 'Dark Mode • React', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 7, followers: '2.0k', tags: ['Dark Mode', 'React'], badges: ['starter', 'serious'] },
  { name: '@qstate', full: 'Q State', role: 'State Management', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 4, followers: '760', tags: ['State Management'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@helixapi', full: 'Helix API', role: 'API • TypeScript', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.7k', tags: ['API', 'TypeScript'], badges: ['starter'] },
  { name: '@mistui', full: 'Mist UI', role: 'UI Library • React', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 8, followers: '1.5k', tags: ['UI Library', 'React'], badges: ['starter', 'serious'] },
  { name: '@pulsedev', full: 'Pulse Dev', role: 'Webhooks • Node.js', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 5, followers: '840', tags: ['Webhooks', 'Node.js'], badges: ['starter'] },
  { name: '@solarapp', full: 'Solar App', role: 'SaaS • Auth', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 16, followers: '5.4k', tags: ['SaaS', 'Auth'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@lunarchart', full: 'Lunar Chart', role: 'Charts • D3.js', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: false, projects: 9, followers: '1.9k', tags: ['Charts', 'D3.js'], badges: ['starter'] },
  { name: '@arclib', full: 'Arc Lib', role: 'Drag & Drop', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 4, followers: '680', tags: ['Drag & Drop'], badges: ['starter', 'serious'] },
  { name: '@vertexlab', full: 'Vertex Lab', role: 'Three.js • WebGL', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 12, followers: '3.8k', tags: ['Three.js', 'WebGL'], badges: ['starter'] },
  { name: '@stormdev', full: 'Storm Dev', role: 'State Machines', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 5, followers: '920', tags: ['State Machines'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@opaldev', full: 'Opal Dev', role: 'File Management', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.3k', tags: ['File Management'], badges: ['starter', 'serious'] },
  { name: '@cobaltops', full: 'Cobalt Ops', role: 'CI/CD • DevOps', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 8, followers: '2.1k', tags: ['CI/CD', 'DevOps'], badges: ['starter'] },
  { name: '@irisdesign', full: 'Iris Design', role: 'Icons • SVG', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 19, followers: '6.1k', tags: ['Icons', 'SVG'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@cascadeui', full: 'Cascade UI', role: 'Animation • Framer', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.5k', tags: ['Animation', 'Framer'], badges: ['starter'] },
  { name: '@driftapp', full: 'Drift App', role: 'Realtime • Collab', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: false, projects: 14, followers: '4.0k', tags: ['Realtime', 'Collab'], badges: ['starter', 'serious'] },
  { name: '@nimbusui', full: 'Nimbus UI', role: 'Cloud • Infrastructure', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.7k', tags: ['Cloud', 'Infrastructure'], badges: ['starter'] },
  { name: '@emberdev', full: 'Ember Dev', role: 'CMS • Next.js', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 13, followers: '3.4k', tags: ['CMS', 'Next.js'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@flaredev', full: 'Flare Dev', role: 'PWA • Notifications', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 6, followers: '780', tags: ['PWA', 'Notifications'], badges: ['starter'] },
  { name: '@praxisdev', full: 'Praxis Dev', role: 'Testing • QA', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 5, followers: '1.0k', tags: ['Testing', 'QA'], badges: ['starter', 'serious'] },
  { name: '@vaultui', full: 'Vault UI', role: 'Security • Auth', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 9, followers: '2.2k', tags: ['Security', 'Auth'], badges: ['starter'] },
  { name: '@mosaicui', full: 'Mosaic UI', role: 'CSS • Grid', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.6k', tags: ['CSS', 'Grid'], badges: ['starter', 'serious'] },
  { name: '@sparktools', full: 'Spark Tools', role: 'CLI • Scaffolding', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 4, followers: '640', tags: ['CLI', 'Scaffolding'], badges: ['starter'] },
  { name: '@ridgedesign', full: 'Ridge Design', role: 'Themes • VSCode', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.2k', tags: ['Themes', 'VSCode'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@sabledev', full: 'Sable Dev', role: 'Markdown • Editors', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 6, followers: '890', tags: ['Markdown', 'Editors'], badges: ['starter'] },
  { name: '@apexdev', full: 'Apex Dev', role: 'Performance • Metrics', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.8k', tags: ['Performance', 'Metrics'], badges: ['starter', 'serious'] },
  { name: '@galetools', full: 'Gale Tools', role: 'Analysis • CLI', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 4, followers: '570', tags: ['Analysis', 'CLI'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@aetherui', full: 'Aether UI', role: 'AR • WebXR', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 8, followers: '4.9k', tags: ['AR', 'WebXR'], badges: ['starter'] },
  { name: '@runedev', full: 'Rune Dev', role: 'Security • Crypto', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 6, followers: '1.1k', tags: ['Security', 'Crypto'], badges: ['starter', 'serious'] },
  { name: '@echosocial', full: 'Echo Social', role: 'Social • Feed', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 9, followers: '2.0k', tags: ['Social', 'Feed'], badges: ['starter'] },
  { name: '@tidalui', full: 'Tidal UI', role: 'Scroll • Animation', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 5, followers: '940', tags: ['Scroll', 'Animation'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@cratertools', full: 'Crater Tools', role: 'Database • Admin', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: false, projects: 7, followers: '1.4k', tags: ['Database', 'Admin'], badges: ['starter'] },
  { name: '@lyradev', full: 'Lyra Dev', role: 'Audio • Player', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 6, followers: '1.2k', tags: ['Audio', 'Player'], badges: ['starter', 'serious'] },
  { name: '@zenithdesign', full: 'Zenith Design', role: 'Typography • CSS', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: false, projects: 10, followers: '2.6k', tags: ['Typography', 'CSS'], badges: ['starter'] },
  { name: '@phaseops', full: 'Phase Ops', role: 'CI/CD • Docker', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 8, followers: '1.9k', tags: ['CI/CD', 'Docker'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@haloui', full: 'Halo UI', role: 'Loading • Skeleton', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 7, followers: '2.3k', tags: ['Loading', 'Skeleton'], badges: ['starter', 'serious'] },
  { name: '@sigilweb3', full: 'Sigil Web3', role: 'NFT • Web3', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 11, followers: '3.5k', tags: ['NFT', 'Web3'], badges: ['starter'] },
  { name: '@novaweb3', full: 'Nova Web3', role: 'Wallet • Ethereum', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.9k', tags: ['Wallet', 'Ethereum'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@onyxdev', full: 'Onyx Dev', role: 'Tables • TypeScript', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 6, followers: '1.0k', tags: ['Tables', 'TypeScript'], badges: ['starter'] },
  { name: '@strataui', full: 'Strata UI', role: 'Layout • Engine', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 8, followers: '1.8k', tags: ['Layout', 'Engine'], badges: ['starter', 'serious'] },
  { name: '@blazedev', full: 'Blaze Dev', role: 'Performance • Speed', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 7, followers: '2.1k', tags: ['Performance', 'Speed'], badges: ['starter'] },
  { name: '@cyandev', full: 'Cyan Dev', role: 'Chat • SDK', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: false, projects: 6, followers: '1.3k', tags: ['Chat', 'SDK'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@miragetools', full: 'Mirage Tools', role: 'Image • Optimization', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 5, followers: '980', tags: ['Image', 'Optimization'], badges: ['starter'] },
  { name: '@axisdata', full: 'Axis Data', role: 'Pipelines • Python', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 12, followers: '4.1k', tags: ['Pipelines', 'Python'], badges: ['starter', 'serious'] },
  { name: '@specterdev', full: 'Specter Dev', role: 'Debug • DevTools', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 5, followers: '740', tags: ['Debug', 'DevTools'], badges: ['starter'] },
  { name: '@quartzdev', full: 'Quartz Dev', role: 'Blog • Platform', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.0k', tags: ['Blog', 'Platform'], badges: ['starter', 'serious'] },
  { name: '@duneui', full: 'Dune UI', role: 'Mobile • Gestures', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 8, followers: '1.7k', tags: ['Mobile', 'Gestures'], badges: ['starter'] },
  { name: '@lyricai', full: 'Lyric AI', role: 'AI • Content', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 14, followers: '4.6k', tags: ['AI', 'Content'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@matrixdev', full: 'Matrix Dev', role: 'Canvas • Creative', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 6, followers: '1.1k', tags: ['Canvas', 'Creative'], badges: ['starter'] },
  { name: '@orbitdev', full: 'Orbit Dev', role: 'Graphs • Analytics', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.7k', tags: ['Graphs', 'Analytics'], badges: ['starter', 'serious'] },
  { name: '@prismdesign', full: 'Prism Design', role: 'Design Tokens', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 8, followers: '1.9k', tags: ['Design Tokens'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@stellarui', full: 'Stellar UI', role: 'Maps • Location', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: false, projects: 7, followers: '1.5k', tags: ['Maps', 'Location'], badges: ['starter'] },
  { name: '@eclipseui', full: 'Eclipse UI', role: 'Dark Mode • UX', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.3k', tags: ['Dark Mode', 'UX'], badges: ['starter', 'serious'] },
  { name: '@zephyrui', full: 'Zephyr UI', role: 'GSAP • Animation', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.5k', tags: ['GSAP', 'Animation'], badges: ['starter'] },
  { name: '@carbondesign', full: 'Carbon Design', role: 'Design System', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 13, followers: '4.4k', tags: ['Design System'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@thunderdev', full: 'Thunder Dev', role: 'API • Gateway', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 10, followers: '3.1k', tags: ['API', 'Gateway'], badges: ['starter'] },
  { name: '@jadedev', full: 'Jade Dev', role: 'Markdown • MDX', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 5, followers: '870', tags: ['Markdown', 'MDX'], badges: ['starter', 'serious'] },
  { name: '@cobaltdev', full: 'Cobalt Dev', role: 'Code • Snippets', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: false, projects: 6, followers: '980', tags: ['Code', 'Snippets'], badges: ['starter'] },
  { name: '@frostui', full: 'Frost UI', role: 'Components • CSS', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.2k', tags: ['Components', 'CSS'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@novamail', full: 'Nova Mail', role: 'Newsletter • Email', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.6k', tags: ['Newsletter', 'Email'], badges: ['starter', 'serious'] },
  { name: '@steeldev', full: 'Steel Dev', role: 'CRUD • Generator', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 11, followers: '3.0k', tags: ['CRUD', 'Generator'], badges: ['starter'] },
  { name: '@pixeltools', full: 'Pixel Tools', role: 'Icons • SVG Tool', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 8, followers: '2.4k', tags: ['Icons', 'SVG Tool'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@neonui', full: 'Neon UI', role: 'Progress • Animation', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 5, followers: '840', tags: ['Progress', 'Animation'], badges: ['starter'] },
  { name: '@jadecal', full: 'Jade Cal', role: 'Calendar • Events', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.7k', tags: ['Calendar', 'Events'], badges: ['starter', 'serious'] },
  { name: '@silverdata', full: 'Silver Data', role: 'Analytics • SDK', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 12, followers: '3.8k', tags: ['Analytics', 'SDK'], badges: ['starter'] },
  { name: '@fluxsearch', full: 'Flux Search', role: 'Search • Algolia', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.1k', tags: ['Search', 'Algolia'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@obsidianui', full: 'Obsidian UI', role: 'Portfolio • Next.js', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 6, followers: '1.3k', tags: ['Portfolio', 'Next.js'], badges: ['starter'] },
  { name: '@quasardev', full: 'Quasar Dev', role: 'Email • SDK', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 5, followers: '920', tags: ['Email', 'SDK'], badges: ['starter', 'serious'] },
  { name: '@vegadev', full: 'Vega Dev', role: 'Charts • D3.js', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.9k', tags: ['Charts', 'D3.js'], badges: ['starter'] },
  { name: '@amberauth', full: 'Amber Auth', role: 'Auth • Dashboard', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 8, followers: '1.8k', tags: ['Auth', 'Dashboard'], badges: ['starter', 'serious'] },
  { name: '@crystalpay', full: 'Crystal Pay', role: 'Stripe • Payments', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 13, followers: '4.2k', tags: ['Stripe', 'Payments'], badges: ['starter'] },
  { name: '@stonedocs', full: 'Stone Docs', role: 'Documentation', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.5k', tags: ['Documentation'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@tideui', full: 'Tide UI', role: 'CSS • Grid', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: false, projects: 5, followers: '760', tags: ['CSS', 'Grid'], badges: ['starter'] },
  { name: '@cometdev', full: 'Comet Dev', role: 'SaaS • React', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 16, followers: '5.2k', tags: ['SaaS', 'React'], badges: ['starter', 'serious'] },
  { name: '@ghoststudio', full: 'Ghost Studio', role: 'CMS • Themes', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 8, followers: '1.9k', tags: ['CMS', 'Themes'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@emberforms', full: 'Ember Forms', role: 'Forms • Zod', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 6, followers: '1.1k', tags: ['Forms', 'Zod'], badges: ['starter'] },
  { name: '@prismtools', full: 'Prism Tools', role: 'Dev Env • Docker', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 10, followers: '2.8k', tags: ['Dev Env', 'Docker'], badges: ['starter', 'serious'] },
  { name: '@abyssui', full: 'Abyss UI', role: 'Dark Mode • React', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.4k', tags: ['Dark Mode', 'React'], badges: ['starter'] },
  { name: '@forgetest', full: 'Forge Test', role: 'Testing • Vitest', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: false, projects: 7, followers: '1.3k', tags: ['Testing', 'Vitest'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@meridiandev', full: 'Meridian Dev', role: 'Maps • Mapbox', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.1k', tags: ['Maps', 'Mapbox'], badges: ['starter'] },
  { name: '@arcext', full: 'Arc Ext', role: 'Browser • Extensions', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 5, followers: '940', tags: ['Browser', 'Extensions'], badges: ['starter', 'serious'] },
  { name: '@novadesign', full: 'Nova Design', role: 'Figma • Prototype', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: false, projects: 9, followers: '2.3k', tags: ['Figma', 'Prototype'], badges: ['starter'] },
  { name: '@glacierdev', full: 'Glacier Dev', role: 'State • Sync', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 6, followers: '1.0k', tags: ['State', 'Sync'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@ravenui', full: 'Raven UI', role: 'Dark • Components', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 8, followers: '2.0k', tags: ['Dark', 'Components'], badges: ['starter', 'serious'] },
  { name: '@slategen', full: 'Slate Gen', role: 'Admin • Generator', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: false, projects: 12, followers: '3.6k', tags: ['Admin', 'Generator'], badges: ['starter'] },
  { name: '@pixelanim', full: 'Pixel Anim', role: 'Canvas • Animation', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.7k', tags: ['Canvas', 'Animation'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@coraldev', full: 'Coral Dev', role: 'Images • CDN', av: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', on: true, projects: 9, followers: '2.5k', tags: ['Images', 'CDN'], badges: ['starter'] },
  { name: '@echoweb', full: 'Echo Web', role: 'Webhooks • Platform', av: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', on: false, projects: 13, followers: '4.0k', tags: ['Webhooks', 'Platform'], badges: ['starter', 'serious'] },
  { name: '@helixdb', full: 'Helix DB', role: 'Graph • Database', av: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop', on: true, projects: 11, followers: '3.4k', tags: ['Graph', 'Database'], badges: ['starter'] },
  { name: '@steelops', full: 'Steel Ops', role: 'DevOps • Monitor', av: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop', on: true, projects: 10, followers: '3.0k', tags: ['DevOps', 'Monitor'], badges: ['starter', 'serious', 'ultimate'] },
  { name: '@jadeshop', full: 'Jade Shop', role: 'E-commerce • Next.js', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: false, projects: 9, followers: '2.2k', tags: ['E-commerce', 'Next.js'], badges: ['starter'] },
  { name: '@silverdev', full: 'Silver Dev', role: 'WebSocket • Node.js', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 7, followers: '1.6k', tags: ['WebSocket', 'Node.js'], badges: ['starter', 'serious'] },
  { name: '@carbonide', full: 'Carbon IDE', role: 'VSCode • Themes', av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', on: true, projects: 14, followers: '5.1k', tags: ['VSCode', 'Themes'], badges: ['starter'] },
  { name: '@quantumarch', full: 'Quantum Arch', role: 'Microservices', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 12, followers: '4.3k', tags: ['Microservices'], badges: ['starter', 'serious'] }
  ,
  { name: '@starweaver', full: 'Star Weaver', role: 'Design Systems • React', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop', on: true, projects: 12, followers: '1.2k', tags: ['React', 'TypeScript', 'Three.js', 'Node.js', 'UI/UX'], badges: ['starter', 'serious', 'ultimate', 'party'] },
  { name: '@neonphoenix', full: 'Neon Phoenix', role: 'UI/UX • Motion Design', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', on: true, projects: 8, followers: '987', tags: ['Motion', 'CSS', 'Framer'], badges: ['starter', 'serious'] },
  { name: '@quantumrift', full: 'Quantum Rift', role: 'Backend • APIs', av: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop', on: false, projects: 6, followers: '650', tags: ['Node.js', 'GraphQL'], badges: ['starter'] }
];

/* ─── USERNAME REGISTRY + VALIDATOR ───────────────────────── */
const TAKEN_USERNAMES = new Set(DESIGNERS_DATA.map(d => (d.username || d.name || '').toLowerCase().replace('@', '')));

const validateUsername = (val, takenSet = TAKEN_USERNAMES, lastChange = null) => {
  if (lastChange) { const daysSince = (Date.now() - lastChange) / (1000 * 60 * 60 * 24); if (daysSince < 30) return 'cooldown'; }
  if (!val || val.length < 6) return 'too_short';
  if (!/[a-zA-Z]/.test(val)) return 'no_alpha';
  if (/[^a-zA-Z0-9_.\-]/.test(val) || /\s/.test(val)) return 'invalid_chars';
  if (takenSet.has(val.toLowerCase())) return 'taken';
  return 'ok';
};
const PAGE_SIZE = 80; // 20 rows × 4 cols — infinite batch
const CATS = [
  { id: 'Discover', icon: Sparkles }, { id: 'UI Templates', icon: Layers }, { id: 'React', icon: Code },
  { id: 'AI Tools', icon: Rocket }, { id: 'Dev Tools', icon: GitBranch }, { id: 'Design Systems', icon: LayoutGrid },
  { id: 'Mobile', icon: Wifi }, { id: 'Animation', icon: Play },
];
const CatsBar = ({ fil, setFil, setPage }) => {
  const catsRef = React.useRef(null);
  const [arrowDir, setArrowDir] = React.useState('right');
  React.useEffect(() => {
    const el = catsRef.current; if (!el) return;
    const check = () => {
      const overflowing = el.scrollWidth > el.clientWidth;
      if (!overflowing) { setArrowDir(null); return; }
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      setArrowDir(atEnd ? 'left' : 'right');
    };
    check();
    el.addEventListener('scroll', check);
    window.addEventListener('resize', check);
    return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
  }, []);
  return (
    <div style={{ position: 'relative' }}>
      <div ref={catsRef} className="thin-x" style={{ display: 'flex', gap: 1, marginBottom: 22, borderBottom: '1px solid rgba(255,255,255,.07)', overflowX: 'auto' }}>
        {CATS.map(({ id, icon: Icon }) => (
          <button key={id} onClick={() => { setFil(id); setPage(1); }} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 12, fontFamily: 'Rajdhani', transition: 'all .2s', whiteSpace: 'nowrap', background: 'transparent', color: fil === id ? 'white' : 'rgba(255,255,255,.38)', borderBottom: `2px solid ${fil === id ? '#ec4899' : 'transparent'}`, marginBottom: -1 }}>
            <Icon size={13} />{id}
          </button>
        ))}
      </div>
      {arrowDir && (
        <div style={{ position: 'absolute', right: arrowDir === 'right' ? 0 : 'auto', left: arrowDir === 'left' ? 0 : 'auto', top: 0, bottom: '1px', width: 48, display: 'flex', alignItems: 'center', justifyContent: arrowDir === 'right' ? 'flex-end' : 'flex-start', background: arrowDir === 'right' ? 'linear-gradient(to right,transparent,#030712 70%)' : 'linear-gradient(to left,transparent,#030712 70%)', pointerEvents: 'none' }}>
          <span style={{ fontSize: 22, color: '#ec4899', animation: 'blink 1.2s ease-in-out infinite', lineHeight: 1, paddingRight: arrowDir === 'right' ? 4 : 0, paddingLeft: arrowDir === 'left' ? 4 : 0 }}>{arrowDir === 'right' ? '›' : '‹'}</span>
        </div>
      )}
    </div>
  );
};

/* ─── FLYING ICON LAYER ─────────────────────────────────── */
// Global event: window.dispatchEvent(new CustomEvent('vw:fly', {detail:{x,y,type,unlike,bmTargetX,bmTargetY}}))
const FlyItem = ({ item, onDone }) => {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 20);
    return () => clearTimeout(t1);
  }, []);
  const isHB = item.type === 'heartBreakL' || item.type === 'heartBreakR';
  const isBm = item.type === 'bookmark';
  const col = isBm ? '#a855f7' : '#ec4899';
  const dur = isHB ? '0.4s' : isBm ? '0.65s' : '0.58s';
  const tx = phase === 1 ? item.toX || 0 : 0;
  const ty = phase === 1 ? item.toY || 0 : 0;
  const sc = phase === 1 ? 0.3 : 1;
  const op = phase === 1 ? 0 : 1;
  const baseStyle = {
    position: 'absolute',
    left: item.x,
    top: item.y,
    transform: `translate(calc(-50% + ${tx}px),calc(-50% + ${ty}px)) scale(${sc})`,
    opacity: op,
    transition: `transform ${dur} cubic-bezier(.4,0,.2,1),opacity ${dur} linear`,
    color: col,
    filter: `drop-shadow(0 0 4px ${col}99)`,
    willChange: 'transform,opacity',
    pointerEvents: 'none',
  };
  if (isHB) {
    const hbAnim = item.type === 'heartBreakL' ? 'heartBreakL' : 'heartBreakR';
    return <div style={{ position: 'absolute', left: item.x, top: item.y, animation: `${hbAnim} ${dur} ease-out forwards`, color: col, pointerEvents: 'none', filter: `drop-shadow(0 0 4px ${col}99)` }}><Heart size={10} fill={col} color={col} /></div>;
  }
  if (isBm) return <div style={baseStyle}><Bookmark size={14} fill={col} color={col} /></div>;
  return <div style={baseStyle}><Heart size={13} fill={col} color={col} /></div>;
};
const FlyingIconLayer = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const h = e => {
      const { x, y, type, bmTargetX, bmTargetY } = e.detail || {};
      if (!x || !y || !type) return;
      const id = Date.now() + Math.random();
      if (type === 'heartBreak') {
        setItems(prev => [...prev, { id, x, y, type: 'heartBreakL' }, { id: id + 0.1, x, y, type: 'heartBreakR' }]);
        setTimeout(() => setItems(prev => prev.filter(i => i.id !== id && i.id !== id + 0.1)), 420);
        return;
      }
      let toX = 0, toY = 0;
      if (type === 'heart') {
        toX = Math.random() * 40 - 20;
        toY = -(50 + Math.random() * 30);
      } else if (type === 'bookmark') {
        const tx = bmTargetX || (window.innerWidth - 160);
        const ty = bmTargetY || 32;
        toX = tx - x;
        toY = ty - y;
      }
      setItems(prev => [...prev, { id, x, y, type, toX, toY }]);
      const dur = type === 'heart' ? 630 : 720;
      setTimeout(() => setItems(prev => prev.filter(i => i.id !== id)), dur + 50);
    };
    window.addEventListener('vw:fly', h);
    return () => window.removeEventListener('vw:fly', h);
  }, []);
  if (items.length === 0) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999999, overflow: 'visible' }}>
      {items.map(item => (
        <FlyItem key={item.id} item={item} />
      ))}
    </div>
  );
};
const triggerFlyHeart = (e, liked) => {
  if (liked) {
    window.dispatchEvent(new CustomEvent('vw:fly', { detail: { x: e.clientX, y: e.clientY, type: 'heartBreak' } }));
  } else {
    window.dispatchEvent(new CustomEvent('vw:fly', { detail: { x: e.clientX, y: e.clientY, type: 'heart' } }));
  }
};
const triggerFlyBm = (e, bookmarked, bmEl) => {
  const target = bmEl || (document.querySelector('[data-header-bm]'));
  const rect = target ? target.getBoundingClientRect() : null;
  const details = { x: e.clientX, y: e.clientY, type: 'bookmark', bmTargetX: rect ? (rect.left + rect.width / 2) : undefined, bmTargetY: rect ? (rect.top + rect.height / 2) : undefined };
  if (bookmarked) {
    // Fly from header back to card (reverse)
    if (rect) {
      const revDetails = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, type: 'bookmark', bmTargetX: e.clientX, bmTargetY: e.clientY };
      window.dispatchEvent(new CustomEvent('vw:fly', { detail: revDetails }));
    }
  } else {
    window.dispatchEvent(new CustomEvent('vw:fly', { detail: details }));
  }
};

const Market = ({
  onBriefPost, onInviteToVibe, workspaces = [], globalUploads = [], onUploadPublish,
  onUploadDraft, onRequestUpload, uploadDrafts = [], setUploadDrafts, onEditDraft,
  onPublishDraft, onOpenSettings, openMyProfileAt, onMyProfileHandled,
  uploadInitialDraftRef, teamRelationships = [], setTeamRelationships,
  teamInvites = [], setTeamInvites, collabRequests = [], setCollabRequests,
  addNotification, resolveNotification, globalFollowed = {}, setGlobalFollowed,
  globalWish = [], setGlobalWish, globalLikes = {}, setGlobalLikes,
  globalPurchased = [], setGlobalPurchased, globalAuthed = false, setGlobalAuthed,
  userProfile = null, globalTags = [], searchNavigateTo = null, onSearchNavigated,
  myList = [], setMyList = null
}) => {
  const confirm = useConfirm();
  const vw = useWindowWidth();
  useLayoutEffect(() => { window.scrollTo(0, 0); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }, []);
  const [tab, setTab] = useState('shots');
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [tab]);
  // A6-1: Typewriter effect for hero heading
  const TW_WORDS = ['Coders', 'Vibe Coders', 'Designers', 'Tech Engineers'];
  const TW_HOLD = [3000, 2500, 2500, 2500];
  const [twText, setTwText] = useState('Coders');
  const twIdxRef = React.useRef(0);
  React.useEffect(() => {
    let tid;
    const runPhrase = (phraseIdx, charPos, typing) => {
      const word = TW_WORDS[phraseIdx];
      const hold = TW_HOLD[phraseIdx];
      if (typing) {
        setTwText(word.slice(0, charPos));
        if (charPos < word.length) {
          tid = setTimeout(() => runPhrase(phraseIdx, charPos + 1, true), 65);
        } else {
          tid = setTimeout(() => runPhrase(phraseIdx, word.length, false), hold);
        }
      } else {
        setTwText(word.slice(0, charPos));
        if (charPos > 0) {
          tid = setTimeout(() => runPhrase(phraseIdx, charPos - 1, false), 40);
        } else {
          const next = (phraseIdx + 1) % TW_WORDS.length;
          twIdxRef.current = next;
          tid = setTimeout(() => runPhrase(next, 0, true), 120);
        }
      }
    };
    runPhrase(0, 0, true);
    return () => clearTimeout(tid);
  }, []);
  const [crPage, setCrPage] = useState(1);
  const [servPage, setServPage] = useState(1);
  const CR_PAGE = 15;    // 5 cols × 3 rows
  const SERV_PAGE = 15;  // 5 cols × 3 rows
  // Fairness pause: track last pagination click; shuffle pauses while user is browsing
  const lastNavClickRef = React.useRef(null);
  const fairnessPausedRef = React.useRef(false);
  const fairnessResumeTimerRef = React.useRef(null);
  const FAIRNESS_IDLE_MS = 3 * 60 * 1000; // 3 minutes idle → resume fairness shuffle
  const markNavClick = React.useCallback(() => {
    lastNavClickRef.current = Date.now();
    fairnessPausedRef.current = true;
    clearTimeout(fairnessResumeTimerRef.current);
    fairnessResumeTimerRef.current = setTimeout(() => { fairnessPausedRef.current = false; }, FAIRNESS_IDLE_MS);
  }, []);
  React.useEffect(() => () => clearTimeout(fairnessResumeTimerRef.current), []);
  const [fil, setFil] = useState('Discover');
  const [search, setSearch] = useState('');
  // ── SHARED STATE: use global props, not local state ──
  // wish, likes, purchased, followed, authed all come from VibeWorld props
  const wish = globalWish;
  const setWish = setGlobalWish || (() => { });
  const likes = globalLikes;
  const setLikes = setGlobalLikes || (() => { });
  const purchased = globalPurchased;
  const setPurchased = setGlobalPurchased || (() => { });
  const followed = globalFollowed;
  const setFollowed = setGlobalFollowed || (() => { });
  const authed = globalAuthed;
  const setAuthed = setGlobalAuthed || (() => { });
  // ── LOCAL UI STATE only ──
  const [views, setViews] = useState({});
  const [highlightedId, setHighlightedId] = React.useState(null);
  React.useEffect(() => {
    if (!highlightedId) return;
    const t = setTimeout(() => setHighlightedId(null), 2000);
    return () => clearTimeout(t);
  }, [highlightedId]);
  const [toast, setToast] = useState(null);
  const [detail, setDetail] = useState(null);
  const [featured, setFeatured] = useState(0);
  const [page, setPage] = useState(1);
  const [loadSpinning, setLoadSpinning] = useState(false);
  const [projectBatch, setProjectBatch] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const marketScrollRef = useRef(null);
  const [showAuth, setShowAuth] = useState(false);
  const [briefText, setBriefText] = useState('');
  const [showBrief, setShowBrief] = useState(false);
  const [showPostProduct, setShowPostProduct] = useState(false);
  const [showGetInTouch, setShowGetInTouch] = useState(null);
  const [profileUser, setProfileUser] = useState(null);
  const [profileInitTab, setProfileInitTab] = useState('work');
  // Build consistent @you profile object from global userProfile state — always fresh
  const buildMeProfile = (tab = 'work') => ({
    handle: userProfile?.handle || '@you', name: userProfile?.name || 'You',
    crFull: userProfile?.name || 'You', full: userProfile?.name || 'You',
    av: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=160&h=160&fit=crop',
    on: userProfile?.showOnline !== false, color: '#22d3ee',
    projects: globalUploads.filter(u => u.cr === '@you' || u.crFull === 'You').length,
    followers: '0', role: 'creator', badges: ['starter'],
    bio: userProfile?.bio, location: userProfile?.location, website: userProfile?.website,
    isOwnProfile: true,
  });
  // Scroll-to-top — watches window/document scroll
  React.useEffect(() => {
    const onScroll = () => setShowScrollTop((window.scrollY || document.documentElement.scrollTop) > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle search result navigation — open product detail or creator profile
  React.useEffect(() => {
    if (!searchNavigateTo) return;
    if (searchNavigateTo.type === 'product') {
      const item = [...globalUploads, ...MKT].find(m => m.id === searchNavigateTo.id);
      if (item) { openDetail(item); setTimeout(() => setHighlightedId(searchNavigateTo.id), 50); }
    } else if (searchNavigateTo.type === 'creator') {
      const d = searchNavigateTo.data || DESIGNERS_DATA.find(x => x.name === searchNavigateTo.handle);
      if (d) { setProfileUser({ ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] }); setHighlightedId(d.name); }
    }
    onSearchNavigated && onSearchNavigated();
  }, [searchNavigateTo]);

  React.useEffect(() => {
    if (openMyProfileAt) {
      setProfileUser(buildMeProfile(openMyProfileAt));
      setProfileInitTab(openMyProfileAt);
      onMyProfileHandled && onMyProfileHandled();
    }
  }, [openMyProfileAt]);
  const featRef = useRef(null);

  // Always start from top when opening or closing a product detail
  useLayoutEffect(() => { window.scrollTo(0, 0); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }, [detail]);

  useEffect(() => {
    featRef.current = setInterval(() => setFeatured(i => (i + 1) % Math.min(MKT.length, 8)), 4200);
    return () => clearInterval(featRef.current);
  }, []);

  // ── FAIR SHUFFLE ALGORITHM ──────────────────────────────────
  // Fisher-Yates shuffle
  const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };

  // Weighted pool: liked items get 1.5x representation (hourly boost)
  const buildWeightedPool = (items, likesMap) => {
    const pool = [];
    items.forEach(item => {
      pool.push(item);
      // 50% extra chance for liked items
      if (likesMap[item.id] || (item.lk > 200)) pool.push(item);
    });
    return pool;
  };

  const allProducts = React.useMemo(() => [...globalUploads, ...MKT], [globalUploads]);
  const [shuffledProducts, setShuffledProducts] = React.useState(() => shuffle([...MKT]));
  const [shuffledDesigners, setShuffledDesigners] = React.useState(() => shuffle([...DESIGNERS_DATA]));
  const [shuffledServIdx, setShuffledServIdx] = React.useState(() => shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]));

  // ── 3-min EQUAL shuffle: every product gets a fair rotation ──
  // Pauses while user is actively browsing pages (fairnessPausedRef=true)
  React.useEffect(() => {
    const t = setInterval(() => {
      if (fairnessPausedRef.current) return; // paused — user is navigating pages
      setShuffledProducts(prev => shuffle([...prev]));
      setShuffledDesigners(prev => shuffle([...prev]));
      setShuffledServIdx(prev => shuffle([...prev]));
    }, 3 * 60 * 1000);
    return () => clearInterval(t);
  }, []); // no deps — runs independently of likes

  // ── Hourly 50% BOOST: liked products get 1.5x representation ──
  // Runs once per hour. Rebuilds pool with weighted duplicates, deduped after shuffle
  // so liked items have 50% more chance of appearing in the next hour's rotations.
  const likesRef = React.useRef(likes);
  React.useEffect(() => { likesRef.current = likes; }, [likes]);

  React.useEffect(() => {
    const applyBoost = () => {
      const pool = buildWeightedPool([...globalUploads, ...MKT], likesRef.current);
      // Shuffle the weighted pool, then deduplicate to get final ordered list
      const boosted = shuffle(pool).reduce((acc, item) => {
        if (!acc.find(x => x.id === item.id)) acc.push(item);
        return acc;
      }, []);
      setShuffledProducts(boosted);
    };
    // Apply boost immediately on mount so liked items rank higher from the start
    applyBoost();
    const t = setInterval(() => {
      if (!fairnessPausedRef.current) applyBoost(); // only boost when user is idle
    }, 60 * 60 * 1000);
    return () => clearInterval(t);
  }, [globalUploads]); // likes intentionally excluded — boost runs hourly via timer, not on every click

  // When new uploads come in, prepend them to the shuffle
  React.useEffect(() => {
    if (globalUploads.length > 0) setShuffledProducts(prev => { const existing = prev.filter(p => !globalUploads.find(u => u.id === p.id)); return [...globalUploads, ...existing]; });
  }, [globalUploads.length]);

  const showToast = (msg, color = '#22d3ee') => { setToast({ msg, color }); setTimeout(() => setToast(null), 2200); };
  const openDetail = (item) => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setDetail(item);
    setViews(v => ({ ...v, [item.id]: (v[item.id] || 0) + 1 }));
  };
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

  const filtered = allProducts.filter(item => {
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
  const base = search || fil !== 'Discover' ? filtered : shuffledProducts;
  // Full-page replacement: show exactly one page at a time
  const totalPages = Math.max(1, Math.ceil(base.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  // Infinite batching: show first projectBatch*PAGE_SIZE items
  const paged = base.slice(0, projectBatch * PAGE_SIZE);
  const hasMore = paged.length < base.length;
  const hasPrev = false; // forward-only
  // Creators + Services page totals (used in pagination UI — avoids IIFE in JSX)
  const crTotal = Math.max(1, Math.ceil(DESIGNERS_DATA.length / CR_PAGE));
  const svTotal = Math.max(1, Math.ceil(18 / SERV_PAGE));

  const feat = MKT[featured % MKT.length];

  if (detail) return (
    <>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onAuth={(info) => { setAuthed(true); if (setGlobalAuthed) setGlobalAuthed(true); setShowAuth(false); }} />}
      <MarketDetail item={detail} onBack={() => { setDetail(null); window.scrollTo({ top: 0, behavior: 'instant' }); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }} onOpenRelated={(related) => { openDetail(related); }} onCreatorClick={(item) => { if (item.cr === '@you' || item.crFull === 'You') { setProfileUser(buildMeProfile('work')); return; } const d = DESIGNERS_DATA.find(x => x.name === item.cr); if (d) { const dUser = { ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] }; setProfileUser(dUser); } }} onGetInTouch={(u) => setShowGetInTouch({ cr: u.cr || u.handle || u.name, price: "Negotiable", av: u.av })} onInvite={(u, wsId) => { if (onInviteToVibe) onInviteToVibe(u, wsId); }} workspaces={workspaces}
        onPurchase={handlePurchase} purchased={purchased.includes(detail.id)}
        onBookmark={() => authCheck(() => setWish(w => w.includes(detail.id) ? w.filter(x => x !== detail.id) : [...w, detail.id]))}
        bookmarked={wish.includes(detail.id)}
        onLike={() => authCheck(() => setLikes(l => ({ ...l, [detail.id]: !l[detail.id] })))}
        liked={!!likes[detail.id]} uploads={globalUploads}
        globalFollowed={followed} setGlobalFollowed={setFollowed}
        uploadDrafts={uploadDrafts} setUploadDrafts={setUploadDrafts}
        uploadInitialDraftRef={uploadInitialDraftRef}
        onOpenSettings={onOpenSettings}
        teamRelationships={teamRelationships} setTeamRelationships={setTeamRelationships}
        teamInvites={teamInvites} setTeamInvites={setTeamInvites}
        addNotification={addNotification} resolveNotification={resolveNotification} onUploadPublish={onUploadPublish} onUploadDraft={onUploadDraft} onRequestUpload={(u, fn) => { if (onRequestUpload) onRequestUpload(u, fn); }} myList={myList || []} setMyList={setMyList} />
    </>
  );

  // ── Named handlers (extracted to avoid multi-line JSX prop callbacks) ──
  const handleMarketEditDraft = (d) => {
    if (uploadInitialDraftRef) uploadInitialDraftRef.current = d;
    const reopenFn = () => { setProfileUser(buildMeProfile('drafts')); setProfileInitTab('drafts'); };
    setProfileUser(null);
    if (onRequestUpload) onRequestUpload({ handle: '@you' }, reopenFn);
  };
  const handleMarketPublishDraft = (d, i) => {
    const missingTitle = !d.title?.trim();
    const missingTags = !d.tags || d.tags.length === 0 || d.tags.every(t => t === 'Upload');
    const missingAlt = d.files && d.files.some(f => !f.alt?.trim());
    if (missingTitle || missingTags || missingAlt) {
      if (uploadInitialDraftRef) uploadInitialDraftRef.current = { ...d, _openStep: 'details' };
      const reopenFn = () => { setProfileUser(buildMeProfile('drafts')); setProfileInitTab('drafts'); };
      uploadReopenFn.current = reopenFn;
      setProfileUser(null);
      if (onRequestUpload) onRequestUpload({ handle: '@you' }, reopenFn);
      return;
    }
    setUploadDrafts && setUploadDrafts(prev => prev.filter((_, j) => j !== i));
    const published = { ...d, id: Date.now(), img: d.files?.[d.thumbIdx || 0]?.url || '', media: d.files?.map((f, mi) => ({ src: f.url, type: f.type, alt: f.alt, layout: f.layout, i: mi })) || [], cr: '@you', crFull: 'You', price: '', rt: 5, views: 0, lk: 0, saves: 0 };
    if (onUploadPublish) onUploadPublish(published);
    setProfileUser(null);
    showToast('Published! ✓ Now live in Vibe Market', '#10b981');
  };

  return (
    <>

      {toast && <Toast msg={toast.msg} color={toast.color} />}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onAuth={(info) => { setAuthed(true); if (setGlobalAuthed) setGlobalAuthed(true); setShowAuth(false); showToast('Welcome to VibeWorld! ✓', '#10b981'); }} />}
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
      <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: vw <= 700 ? '1fr' : '1fr 1fr', minHeight: vw <= 700 ? 'auto' : 420, position: 'relative' }}>
        <div style={{ padding: '52px 32px 44px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 12px', borderRadius: 999, background: 'rgba(236,72,153,.1)', border: '1px solid rgba(236,72,153,.25)', marginBottom: 18, alignSelf: 'flex-start' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ec4899', animation: 'purchaseGlow 1.5s infinite' }} />
            <span style={{ fontSize: 10, color: '#ec4899', fontFamily: 'JetBrains Mono', fontWeight: 700, letterSpacing: '.08em' }}>{(() => { const pc = MKT.length + (globalUploads?.length || 0); return pc >= 500 ? '500+' : pc >= 200 ? '200+' : '100+'; })()}+ PROJECTS LIVE</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px,3.8vw,50px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 16, letterSpacing: '-.02em' }}>
            Discover the<br />
            <span style={{ background: 'linear-gradient(135deg,#ec4899 0%,#a855f7 50%,#22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>World's Top</span><br />
            <span style={{ color: '#22d3ee', fontFamily: 'Orbitron' }}>{twText}<span style={{ animation: 'blink 0.5s step-end infinite', color: '#22d3ee' }}>|</span></span>
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.8, marginBottom: 24, maxWidth: 380 }}>
            Production-ready designs, templates, components & dev tools — built by the sharpest developers, and designers in the world.
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
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,.28)', fontFamily: 'JetBrains Mono', flexShrink: 0 }}>Popular:</span>
            {['dashboard', 'landing page', 'auth UI', 'AI chat', 'dark mode', 'design system'].map(t => {
              const active = search === t;
              return (
                <button key={t}
                  onClick={() => setSearch(active ? '' : t)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    padding: '3px 8px 3px 10px',
                    borderRadius: 999,
                    border: `1px solid ${active ? '#ec4899' : 'rgba(255,255,255,.09)'}`,
                    background: active ? 'rgba(236,72,153,.15)' : 'none',
                    cursor: 'pointer',
                    color: active ? '#ec4899' : 'rgba(255,255,255,.5)',
                    fontSize: 10, fontFamily: 'Rajdhani', fontWeight: 600,
                    transition: 'all .2s', whiteSpace: 'nowrap',
                    boxShadow: active ? '0 0 10px rgba(236,72,153,.2)' : 'none',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = 'rgba(236,72,153,.4)'; e.currentTarget.style.color = '#ec4899'; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = 'rgba(255,255,255,.09)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)'; } }}
                >
                  {t}
                  {active && <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 13, height: 13, borderRadius: '50%', background: 'rgba(236,72,153,.3)', color: '#ec4899', fontSize: 9, fontWeight: 900, lineHeight: '13px', flexShrink: 0 }}>✕</span>}
                </button>
              );
            })}
          </div>
        </div>
        {vw > 700 && <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: 420 }} onClick={() => openDetail(feat)}>
          <img src={feat.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all .7s ease' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg,rgba(3,7,18,.75) 0%,transparent 55%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(3,7,18,.9) 0%,transparent 55%)' }} />
          <div onClick={e => { e.stopPropagation(); const d = DESIGNERS_DATA.find(x => x.name === feat.cr); if (d) setProfileUser({ ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] }); }} style={{ position: 'absolute', top: 14, right: 14, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(3,7,18,.88)', backdropFilter: 'blur(16px)', borderRadius: 999, padding: '6px 13px 6px 6px', border: '1px solid rgba(255,255,255,.15)', cursor: 'pointer', transition: 'all .2s', zIndex: 10 }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,.25)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(3,7,18,.88)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)'; }}>
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
        </div>}
      </div>

      {/* ── ACTION BANNER ───────────────────────────────── */}
      {vw > 700 && <div style={{ margin: '16px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {/* Post Brief half */}
        <div style={{ borderRadius: 14, border: '1px solid rgba(236,72,153,.15)', background: 'rgba(236,72,153,.04)', padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <FileText size={18} color="#ec4899" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2, fontFamily: 'Rajdhani' }}>Post a Project Brief</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.38)', lineHeight: 1.4 }}>Describe what you need — get proposals from top creators.</div>
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
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.38)', lineHeight: 1.4 }}>Sell your templates, designs, tools & components to clients Worldwide.</div>
          </div>
          <button onClick={() => authCheck(() => setShowPostProduct(true))}
            style={{ padding: '7px 16px', borderRadius: 9, border: '1px solid rgba(34,211,238,.4)', background: 'rgba(34,211,238,.1)', cursor: 'pointer', color: '#22d3ee', fontSize: 11, fontWeight: 700, fontFamily: 'Orbitron', flexShrink: 0, position: 'relative', overflow: 'hidden', transition: 'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; const r = document.createElement('span'); const rect = e.currentTarget.getBoundingClientRect(); r.style.cssText = `position:absolute;width:120px;height:120px;border-radius:50%;background:rgba(34,211,238,.25);transform:translate(-50%,-50%) scale(0);animation:rippleEffect .5s ease-out forwards;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;pointer-events:none`; e.currentTarget.appendChild(r); setTimeout(() => r.remove(), 500); }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            List Product
          </button>
        </div>
      </div>}

      {/* ── CONTENT ───────────────────────────────────── */}
      <div style={{ padding: '6px 28px 80px' }}>
        {tab === 'shots' && (
          <>
            <CatsBar fil={fil} setFil={setFil} setPage={setPage} setProjectBatch={setProjectBatch} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', borderRadius: 12, background: 'rgba(34,211,238,.05)', border: '1px solid rgba(34,211,238,.15)', marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', flexShrink: 0, animation: 'blink 1.5s ease infinite' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <Shuffle size={11} color="rgba(34,211,238,.8)" style={{ flexShrink: 0, marginRight: 5 }} />
                <span style={{ fontSize: 10, color: 'rgba(34,211,238,.8)', fontFamily: 'JetBrains Mono', lineHeight: 1.5 }}>Projects shuffle randomly for fairness every 3 minutes. Follow, like, add to list, or bookmark to revisit.</span>
              </div>
            </div>
            {/* 4-col grid — fixed, no responsive override */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 28 }}>
              {paged.map(item => (
                <MarketCard key={item.id} item={item} likes={likes} wish={wish} views={views}
                  purchased={purchased.includes(item.id)}
                  onOpen={openDetail}
                  onLike={() => authCheck(() => setLikes(l => ({ ...l, [item.id]: !l[item.id] })))}
                  onWish={() => authCheck(() => setWish(w => w.includes(item.id) ? w.filter(x => x !== item.id) : [...w, item.id]))}
                  onPurchase={handlePurchase}
                  authCheck={authCheck}
                  followed={!!followed[item.cr]}
                  onFollow={h => setFollowed(f => ({ ...f, [h]: !f[h] }))}
                  onGetInTouch={(u) => setShowGetInTouch(u)}
                  onInvite={(u) => { if (onInviteToVibe) onInviteToVibe(u); }}
                  onCreatorHover={(it) => { const d = DESIGNERS_DATA.find(x => x.name === it.cr); if (d) setProfileUser({ ...d, handle: d.name, full: d.full, badges: d.badges || ["starter"] }); }}
                  workspaces={workspaces}
                  highlighted={highlightedId === item.id} />
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

            {/* Forward-only infinite batch pagination */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 8 }}>
              {hasMore && (
                <button onClick={() => setProjectBatch(b => b + 1)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '13px 44px', borderRadius: 14, border: '1px solid rgba(34,211,238,.3)', background: 'rgba(34,211,238,.06)', cursor: 'pointer', color: 'rgba(255,255,255,.8)', fontSize: 14, fontWeight: 700, fontFamily: 'Rajdhani', letterSpacing: '.04em', transition: 'all .25s', boxShadow: '0 4px 20px rgba(34,211,238,.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,.14)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.6)'; e.currentTarget.style.color = '#22d3ee'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(34,211,238,.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,.06)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.3)'; e.currentTarget.style.color = 'rgba(255,255,255,.8)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(34,211,238,.08)'; }}>
                  <Package size={16} style={{ animation: 'packageGlow 2.5s ease-in-out infinite', flexShrink: 0 }} />
                  Next Products

                </button>
              )}

            </div>
          </>
        )}

        {tab === 'designers' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', borderRadius: 12, background: 'rgba(34,211,238,.05)', border: '1px solid rgba(34,211,238,.15)', marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', flexShrink: 0, animation: 'blink 1.5s ease infinite' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <Shuffle size={11} color="rgba(34,211,238,.8)" style={{ flexShrink: 0, marginRight: 5 }} />
                <span style={{ fontSize: 10, color: 'rgba(34,211,238,.8)', fontFamily: 'JetBrains Mono', lineHeight: 1.5 }}>Creators shuffle randomly for fairness every 3 minutes. Follow, like, add to list, or bookmark to revisit.</span>
              </div>
            </div>
            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, paddingTop: 8 }}>
              {shuffledDesigners.slice((crPage - 1) * CR_PAGE, crPage * CR_PAGE).map(d => {
                const dUser = { av: d.av, name: d.full, full: d.full, handle: d.name, role: d.role, on: d.on, projects: d.projects, followers: d.followers, tags: d.tags, color: '#a855f7', badges: d.badges || [] };
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
                    {/* Badge icons */}
                    {d.badges && d.badges.length > 0 && (
                      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center', margin: '3px 0' }}>
                        {d.badges.map(bid => {
                          const b = BADGE_DEFS.find(x => x.id === bid); if (!b) return null; const BIco = b.Icon; return (
                            <div key={bid} title={b.name} style={{ width: 18, height: 18, borderRadius: '50%', background: b.grad, border: `1px solid ${b.color}66`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 0 4px ${b.glow}55` }}>
                              <BIco size={9} color="white" strokeWidth={2.5} />
                            </div>
                          );
                        })}
                      </div>
                    )}
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
                        onClick={e => { e.stopPropagation(); if (isFollowed) { confirm({ msg: `Unfollow ${d.full}?`, okLabel: 'Unfollow', okColor: '#ec4899', onOk: () => { setFollowed(f => ({ ...f, [d.name]: !f[d.name] })); showToast(`Unfollowed ${d.full}`, '#ec4899'); } }); return; } setFollowed(f => ({ ...f, [d.name]: !f[d.name] })); showToast(!isFollowed ? `Following ${d.full} ✓` : `Unfollowed ${d.full}`, '#10b981'); }}
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
            {/* Creators pagination — plain JSX (no IIFE) */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, paddingTop: 28, paddingBottom: 8 }}>
              {crPage > 1 && (
                <button onClick={() => { markNavClick(); setCrPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 20px', borderRadius: 10, border: '1px solid rgba(255,255,255,.12)', background: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.6)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700, transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; }}>
                  <RainbowArrow size={13} /> Previous
                </button>
              )}
              {crPage < crTotal && (
                <button onClick={() => { markNavClick(); setCrPage(p => Math.min(crTotal, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 36px', borderRadius: 12, border: '1px solid rgba(168,85,247,.25)', background: 'rgba(168,85,247,.06)', cursor: 'pointer', color: 'rgba(255,255,255,.75)', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .25s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,.15)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,.5)'; e.currentTarget.style.color = '#a855f7'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(168,85,247,.06)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,.25)'; e.currentTarget.style.color = 'rgba(255,255,255,.75)'; }}>
                  <Users size={14} />Next Creators
                </button>
              )}
              {crPage >= crTotal && DESIGNERS_DATA.length > CR_PAGE && (
                <div style={{ padding: '11px 24px', borderRadius: 12, border: '1px solid rgba(255,255,255,.06)', background: 'rgba(255,255,255,.02)', fontSize: 12, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>All {DESIGNERS_DATA.length} creators shown ✓</div>
              )}
            </div>
          </div>
        )}

        {tab === 'services' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', borderRadius: 12, background: 'rgba(34,211,238,.05)', border: '1px solid rgba(34,211,238,.15)', marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', flexShrink: 0, animation: 'blink 1.5s ease infinite' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <Shuffle size={11} color="rgba(34,211,238,.8)" style={{ flexShrink: 0, marginRight: 5 }} />
                <span style={{ fontSize: 10, color: 'rgba(34,211,238,.8)', fontFamily: 'JetBrains Mono', lineHeight: 1.5 }}>Services shuffle randomly for fairness every 3 minutes. Follow, like, add to list, or bookmark to revisit.</span>
              </div>
            </div>
            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, paddingTop: 8 }}>
              {(() => {
                const servArr = [
                  { t: 'Custom Dashboard Build', desc: 'End-to-end dashboard design + React from Figma to production.', price: 'From $500', tags: ['React', 'Tailwind'], av: DESIGNERS_DATA[0].av, cr: '@flux.dev', crFull: 'Alex Flux', del: '5 days', on: true },
                  { t: 'AI Integration Service', desc: 'Connect any LLM to your product — streaming, RAG, agents.', price: 'From $350', tags: ['AI', 'API'], av: DESIGNERS_DATA[2].av, cr: '@cryptoui', crFull: 'Crypto UX', del: '3 days', on: true },
                  { t: 'Design System Creation', desc: 'Component library with Figma source files + React + Storybook.', price: 'From $800', tags: ['Figma', 'React'], av: DESIGNERS_DATA[1].av, cr: '@voidcraft', crFull: 'Void Studio', del: '7 days', on: false },
                  { t: 'Landing Page in 48h', desc: 'Fast, beautiful, conversion-optimised landing page.', price: 'From $200', tags: ['HTML', 'CSS'], av: DESIGNERS_DATA[3].av, cr: '@quantumux', crFull: 'Quantum UX', del: '2 days', on: false },
                  { t: 'Auth System Setup', desc: 'OAuth2, magic links, 2FA and roles out of the box.', price: 'From $300', tags: ['Auth', 'Node.js'], av: DESIGNERS_DATA[5].av, cr: '@ghostdev', crFull: 'Ghost Dev', del: '4 days', on: true },
                  { t: 'Component Library', desc: '50+ typed React components with Storybook docs.', price: 'From $600', tags: ['React', 'TypeScript'], av: DESIGNERS_DATA[6].av, cr: '@spectra.io', crFull: 'Spectra Studio', del: '8 days', on: false },
                  { t: 'Email Template Builder', desc: 'Drag-and-drop email builder with 30+ responsive templates.', price: 'From $250', tags: ['Email', 'HTML'], av: DESIGNERS_DATA[7].av, cr: '@miragelab', crFull: 'Mirage Lab', del: '4 days', on: true },
                  { t: 'Web3 Wallet Integration', desc: 'MetaMask, WalletConnect & multi-chain support.', price: 'From $450', tags: ['Web3', 'Ethereum'], av: DESIGNERS_DATA[2].av, cr: '@cryptoui', crFull: 'Crypto UX', del: '5 days', on: true },
                  { t: '3D Product Visualizer', desc: 'Immersive Three.js product viewer with orbit controls.', price: 'From $700', tags: ['Three.js', 'WebGL'], av: DESIGNERS_DATA[2].av, cr: '@cryptoui', crFull: 'Crypto UX', del: '10 days', on: true },
                  { t: 'API Rate-Limit Dashboard', desc: 'Real-time API monitoring with usage charts and alerts.', price: 'From $400', tags: ['Node.js', 'React'], av: DESIGNERS_DATA[9].av, cr: '@sentinelops', crFull: 'Sentinel Ops', del: '6 days', on: false },
                  { t: 'Mobile-First PWA', desc: 'Offline-capable progressive web app with push notifications.', price: 'From $550', tags: ['PWA', 'React'], av: DESIGNERS_DATA[10].av, cr: '@forgecli', crFull: 'Forge CLI', del: '7 days', on: true },
                  { t: 'Full-Stack SaaS Boilerplate', desc: 'Auth, billing, onboarding, and admin panel — ready to ship.', price: 'From $1,200', tags: ['Next.js', 'SaaS'], av: DESIGNERS_DATA[20].av, cr: '@solarapp', crFull: 'Solar App', del: '14 days', on: true },
                  { t: 'Animation & Micro-interactions', desc: 'Framer Motion + GSAP transitions that make your UI sing.', price: 'From $300', tags: ['Animation', 'CSS'], av: DESIGNERS_DATA[26].av, cr: '@cascadeui', crFull: 'Cascade UI', del: '4 days', on: true },
                  { t: 'Data Pipeline & ETL Setup', desc: 'Ingest, transform, and visualize your data at scale.', price: 'From $850', tags: ['Python', 'ETL'], av: DESIGNERS_DATA[55].av, cr: '@axisdata', crFull: 'Axis Data', del: '10 days', on: true },
                  { t: 'Icon Library & Design Tokens', desc: 'Bespoke SVG icon set + CSS/JS design token system.', price: 'From $380', tags: ['Icons', 'SVG'], av: DESIGNERS_DATA[27].av, cr: '@irisdesign', crFull: 'Iris Design', del: '8 days', on: false },
                  { t: 'Dark Admin Panel', desc: 'Full-featured admin with tables, charts, and user management.', price: 'From $950', tags: ['React', 'Admin'], av: DESIGNERS_DATA[11].av, cr: '@duskstudio', crFull: 'Dusk Studio', del: '12 days', on: true },
                  { t: 'CI/CD Pipeline Setup', desc: 'GitHub Actions, Docker, and automated deployment pipelines.', price: 'From $500', tags: ['DevOps', 'Docker'], av: DESIGNERS_DATA[45].av, cr: '@phaseops', crFull: 'Phase Ops', del: '5 days', on: true },
                  { t: 'Security Audit & Hardening', desc: 'Full codebase review, penetration testing, and threat reports.', price: 'From $1,500', tags: ['Security', 'Auth'], av: DESIGNERS_DATA[33].av, cr: '@vaultui', crFull: 'Vault UI', del: '10 days', on: false },
                ]; const orderedServ = shuffledServIdx.map(i => servArr[i]).filter(Boolean); return orderedServ.slice((servPage - 1) * SERV_PAGE, servPage * SERV_PAGE).map(s => (
                  <div key={s.t} className="gl CU" style={{ borderRadius: 18, padding: 22 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
                      <div onClick={() => { const d = DESIGNERS_DATA.find(x => x.name === s.cr); if (d) setProfileUser({ av: d.av, name: d.full, full: d.full, handle: d.name, role: d.role, on: d.on, projects: d.projects, followers: d.followers, tags: d.tags, color: '#a855f7' }); }} style={{ cursor: 'pointer', transition: 'transform .18s' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                        <Av src={s.av} sz={42} on={s.on} />
                      </div>
                      <div style={{ cursor: 'pointer' }} onClick={() => { const d = DESIGNERS_DATA.find(x => x.name === s.cr); if (d) setProfileUser({ av: d.av, name: d.full, full: d.full, handle: d.name, role: d.role, on: d.on, projects: d.projects, followers: d.followers, tags: d.tags, color: '#a855f7' }); }}>
                        <div style={{ fontSize: 13, fontWeight: 700, transition: 'color .15s' }}
                          onMouseEnter={e => e.target.style.color = '#a855f7'}
                          onMouseLeave={e => e.target.style.color = ''}>{s.cr}</div>
                        {s.on ? <span style={{ fontSize: 9, color: '#10b981', fontFamily: 'JetBrains Mono' }}>● Available</span> : <span style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>● Busy</span>}
                      </div>
                      <div style={{ marginLeft: 'auto', fontSize: 13, fontWeight: 900, color: '#22d3ee', fontFamily: 'Orbitron' }}>{s.price}</div>
                    </div>
                    <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{s.t}</h3>
                    <p style={{ fontSize: 12, color: 'var(--mu)', lineHeight: 1.65, marginBottom: 12 }}>{s.desc}</p>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 14, alignItems: 'center' }}>{s.tags.map(t => <Bdg key={t} color="#a855f7" ch={t} />)}<span style={{ fontSize: 10, color: 'var(--mu)', marginLeft: 'auto', fontFamily: 'JetBrains Mono' }}>⏱ {s.del}</span></div>
                    <button className="SB" style={{ width: '100%', padding: '9px', borderRadius: 9, border: 'none', cursor: 'pointer', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani' }} onClick={() => setShowGetInTouch(s)}>Get in Touch</button>
                  </div>
                ));
              })()
              }
            </div>
            {/* Services pagination — plain JSX (no IIFE) */}
            {(svTotal > 1) && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, paddingTop: 28, paddingBottom: 8 }}>
                {servPage > 1 && (
                  <button onClick={() => { markNavClick(); setServPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 20px', borderRadius: 10, border: '1px solid rgba(255,255,255,.12)', background: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.6)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700, transition: 'all .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; }}>
                    <RainbowArrow size={13} /> Previous
                  </button>
                )}
                {servPage < svTotal && (
                  <button onClick={() => { markNavClick(); setServPage(p => Math.min(svTotal, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 36px', borderRadius: 12, border: '1px solid rgba(34,211,238,.25)', background: 'rgba(34,211,238,.06)', cursor: 'pointer', color: 'rgba(255,255,255,.75)', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .25s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,.15)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.5)'; e.currentTarget.style.color = '#22d3ee'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,.06)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.25)'; e.currentTarget.style.color = 'rgba(255,255,255,.75)'; }}>
                    <Sparkles size={14} />Next Services
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {/* ── Scroll-to-top button ── */}
      {
        showScrollTop && (
          <button
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); document.documentElement.scrollTop = 0; }}
            style={{ position: 'fixed', bottom: 90, right: 24, zIndex: 9000, width: 44, height: 44, borderRadius: '50%', background: 'rgba(34,211,238,.12)', border: '1px solid rgba(34,211,238,.3)', color: '#22d3ee', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s', boxShadow: '0 4px 16px rgba(0,0,0,.4)', animation: 'sU .2s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <ChevronUp size={20} />
          </button>
        )
      }

      {/* ── MODALS ── */}
      {showPostProduct && <PostProductModal onClose={() => setShowPostProduct(false)} authCheck={authCheck} authed={authed} onSubmit={(p) => { showToast(`${p.title} listed! ✓`, '#10b981'); }} />}
      {showGetInTouch && <GetInTouchCard service={showGetInTouch} onClose={() => setShowGetInTouch(null)} />}
      {
        profileUser && <UserProfileModal user={profileUser} initialTab={profileInitTab} onClose={() => { setProfileUser(null); setProfileInitTab('work'); }} followed={!!followed[profileUser.handle || profileUser.name]} onFollow={() => { const k = profileUser.handle || profileUser.name; setFollowed(f => ({ ...f, [k]: !f[k] })); }} earnedBadges={profileUser.badges || ['starter']} onGetInTouch={(u) => setShowGetInTouch({ cr: u.cr || u.handle || u.name, price: 'Negotiable', av: u.av })} onInvite={(u, wsId) => { if (onInviteToVibe) onInviteToVibe(u, wsId); else showToast(`Invite sent to ${u.full || u.name} ✓`, '#22d3ee'); }} workspaces={workspaces} showToast={showToast} uploads={globalUploads} onRequestUpload={(user) => { const u = user || profileUser; const fn = () => setProfileUser(u); setProfileUser(null); if (onRequestUpload) onRequestUpload(u, fn); }} drafts={uploadDrafts} onEditDraft={handleMarketEditDraft} onPublishDraft={handleMarketPublishDraft} onOpenSettings={onOpenSettings} teamRelationships={teamRelationships} setTeamRelationships={setTeamRelationships} teamInvites={teamInvites} setTeamInvites={setTeamInvites} addNotification={addNotification} resolveNotification={resolveNotification}
          onOpenNestedProfile={m => { const d = DESIGNERS_DATA.find(x => x.name === m.handle || x.name === (m.handle || '').replace('@', '')); if (d) setProfileUser({ ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] }); }} myList={myList || []} setMyList={setMyList} />
      }
    </>
  );
};

/* ─── COMMUNITY ───────────────────────────────────────────── */
/* ─── BADGE DEFINITIONS (icon-based, no emojis) ────────────── */
/* ─── FOLLOW BUTTON with particle burst ────────────────────── */
/* ─── CONFIRM / RENAME DIALOGS ────────────────────────────── */
// Global confirm state — set this to show a confirm dialog
// Usage: showConfirm({msg, onOk, onCancel, okLabel, okColor})
const ConfirmCtx = React.createContext(null);

const ConfirmProvider = ({ children }) => {
  const [cfg, setCfg] = React.useState(null);
  const show = (options) => new Promise(res => {
    setCfg({ ...options, resolve: res });
  });
  const handle = (result) => {
    cfg?.resolve(result);
    setCfg(null);
    if (result && cfg?.onOk) cfg.onOk();
    if (!result && cfg?.onCancel) cfg.onCancel();
  };
  return (
    <ConfirmCtx.Provider value={show}>
      {children}
      {cfg && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99000, background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, cursor: 'none', isolation: 'isolate' }} onClick={() => handle(false)}>
          <div style={{ background: 'rgba(8,12,26,.99)', borderRadius: 18, border: '1px solid rgba(255,255,255,.12)', padding: '28px 32px', maxWidth: 380, width: '100%', boxShadow: '0 24px 64px rgba(0,0,0,.8)', animation: 'sU .2s ease', cursor: 'none' }} onClick={e => e.stopPropagation()}>
            {cfg.icon && <div style={{ fontSize: 28, textAlign: 'center', marginBottom: 12 }}>{cfg.icon}</div>}
            <div style={{ fontSize: 15, fontWeight: 700, fontFamily: 'Rajdhani', marginBottom: cfg.sub ? 8 : 20, textAlign: 'center', color: 'white' }}>{cfg.msg}</div>
            {cfg.sub && <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', fontFamily: 'JetBrains Mono', marginBottom: 20, textAlign: 'center', lineHeight: 1.5 }}>{cfg.sub}</div>}
            {cfg.input != null && (
              <input defaultValue={cfg.input} id="cd-inp" autoFocus style={{ width: '100%', padding: '9px 13px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 10, color: 'white', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, marginBottom: 16, boxSizing: 'border-box', outline: 'none' }}
                onKeyDown={e => { if (e.key === 'Enter') { const v = e.target.value.trim(); if (v) { cfg.resolve(v); cfg.onOk && cfg.onOk(v); setCfg(null); } } if (e.key === 'Escape') handle(false); }} />
            )}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button onClick={() => handle(false)} style={{ padding: '11px 32px', borderRadius: 12, border: '1px solid rgba(255,255,255,.12)', background: 'rgba(255,255,255,.06)', cursor: 'pointer', color: 'rgba(255,255,255,.6)', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .18s', minWidth: 110 }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.10)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = 'rgba(255,255,255,.6)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Cancel
              </button>
              <button onClick={() => {
                if (cfg.input != null) { const el = document.getElementById('cd-inp'); const v = el?.value?.trim(); if (!v) return; cfg.resolve(v); cfg.onOk && cfg.onOk(v); setCfg(null); } else handle(true);
              }} style={{ padding: '11px 32px', borderRadius: 12, border: 'none', background: cfg.okColor || 'linear-gradient(135deg,#22d3ee,#a855f7)', cursor: 'pointer', color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .18s', minWidth: 110, boxShadow: cfg.okColor ? `0 4px 18px ${cfg.okColor}55` : '0 4px 18px rgba(34,211,238,.35)' }}
                onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.18)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.filter = ''; e.currentTarget.style.transform = 'translateY(0)'; }}>
                {cfg.okLabel || 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </ConfirmCtx.Provider>
  );
};
const useConfirm = () => React.useContext(ConfirmCtx);

const FollowBtn = ({ following, onFollow, label = 'Follow', size = 'sm' }) => {
  const confirm = useConfirm();
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

  const handleEnter = (e) => { if (!following) { burst(); timerRef.current = setInterval(burst, 550); } if (!pressed) { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = following ? '0 0 14px rgba(34,211,238,.4)' : '0 0 12px rgba(34,211,238,.3)'; e.currentTarget.style.borderColor = following ? 'transparent' : 'rgba(34,211,238,.7)'; } };
  const handleLeave = (e) => { clearInterval(timerRef.current); setTimeout(() => setPts([]), 500); if (!pressed) { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = following ? 'transparent' : 'rgba(34,211,238,.35)'; } };

  const handleClick = (e) => {
    e.stopPropagation();
    if (following) { confirm({ msg: 'Unfollow this creator?', sub: 'You can follow them again anytime.', okLabel: 'Unfollow', okColor: '#ec4899', onOk: () => { setPressed(true); setTimeout(() => setPressed(false), 200); onFollow(); } }); return; }
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
  const [tipPos, setTipPos] = React.useState(null);
  const timerRef = React.useRef(null);
  const idleRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const hovRef = React.useRef(false);
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
    hovRef.current = true;
    setHov(true);
    clearInterval(idleRef.current);
    clearInterval(timerRef.current);
    setPts(makePts(earned ? 16 : 8, earned ? 36 : 22, earned ? 3.5 : 2.5));
    timerRef.current = setInterval(() => setPts(makePts(earned ? 16 : 8, earned ? 36 : 22, earned ? 3.5 : 2.5)), earned ? 350 : 520);
    // Compute tooltip position from current element position
    if (wrapRef.current) {
      const r = wrapRef.current.getBoundingClientRect();
      const tw = 186;
      let left = r.left + r.width / 2 - tw / 2;
      let top = r.top - 92;
      if (left < 8) left = 8;
      if (left + tw > window.innerWidth - 8) left = window.innerWidth - tw - 8;
      if (top < 8) top = r.bottom + 8;
      setTipPos({ left, top });
    }
  };
  const handleLeave = () => {
    hovRef.current = false;
    setHov(false);
    setTipPos(null);
    clearInterval(timerRef.current);
    setTimeout(() => setPts([]), 520);
    if (earned) {
      idleRef.current = setInterval(() => { if (!hovRef.current) setPts(makePts(5, 22, 2)); }, 2400);
    }
  };

  // Earned badges: slow idle glow particles when not hovered
  React.useEffect(() => {
    if (!earned) return;
    idleRef.current = setInterval(() => { if (!hovRef.current) setPts(makePts(5, 22, 2)); }, 2400);
    return () => { clearInterval(idleRef.current); clearInterval(timerRef.current); };
  }, [earned]);

  const circleStyle = earned ? {
    background: badge.grad,
    border: `1.5px solid ${badge.color}88`,
    boxShadow: hov ? `0 0 8px ${badge.glow},0 0 14px ${badge.glow}88` : `0 0 5px ${badge.glow}88,0 0 9px ${badge.glow}44`,
    '--gc': badge.glow,
    animation: hov ? 'none' : 'badgePulse 3s ease-in-out infinite',
    transform: hov ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform .2s,box-shadow .2s',
  } : hov ? {
    background: `radial-gradient(circle,${badge.color}22,rgba(255,255,255,.04))`,
    border: `1.5px solid ${badge.color}55`,
    boxShadow: `0 0 8px ${badge.glow}55`,
    animation: 'none',
    opacity: .85,
    transform: 'scale(1.08)',
    transition: 'transform .2s',
  } : {
    background: 'radial-gradient(circle,rgba(255,255,255,.06),rgba(255,255,255,.02))',
    border: '1.5px solid rgba(255,255,255,.1)',
    animation: 'badgeDim 3s ease-in-out infinite',
    opacity: .34,
    transition: 'transform .2s',
  };

  return (
    <div ref={wrapRef} style={{ position: 'relative', display: 'inline-flex', cursor: 'default', isolation: 'isolate' }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {pts.map(p => (
        <div key={p.id} style={{ position: 'absolute', top: '50%', left: '50%', width: p.size, height: p.size, borderRadius: '50%', background: p.color, pointerEvents: 'none', zIndex: 9999, '--tx': Math.cos(p.angle) * p.dist + 'px', '--ty': Math.sin(p.angle) * p.dist + 'px', animation: 'particleBurst .6s ease-out forwards', boxShadow: `0 0 ${p.size * 2}px ${p.color}` }} />
      ))}
      <div style={{ width: size, height: size, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'box-shadow .3s,opacity .3s', ...circleStyle }}>
        <BIco size={size * .48} color={earned ? 'white' : hov ? badge.color : 'rgba(255,255,255,.35)'} strokeWidth={2.5} />
      </div>
      {hov && tipPos && (
        <div style={{ position: 'fixed', left: tipPos.left, top: tipPos.top, width: 186, zIndex: 999999, pointerEvents: 'none', animation: 'sU .15s ease' }}>
          <div style={{ background: 'rgba(3,7,18,.97)', border: `1px solid ${badge.color}55`, borderRadius: 10, padding: '7px 10px', width: 180, maxWidth: 180, boxShadow: `0 8px 24px rgba(0,0,0,.8),0 0 12px ${badge.color}22` }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: badge.color, marginBottom: 3, fontFamily: 'Orbitron', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{badge.name}</div>
            {earned ? (
              <>
                <div style={{ fontSize: 8, color: '#10b981', fontFamily: 'JetBrains Mono', marginBottom: 3 }}>✓ Earned {earnedDate || 'recently'}</div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,.6)', fontFamily: 'JetBrains Mono', lineHeight: 1.5, whiteSpace: 'normal', overflow: 'hidden' }}>{badge.desc}</div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,.4)', fontFamily: 'JetBrains Mono', marginBottom: 3 }}>To earn:</div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,.75)', fontFamily: 'JetBrains Mono', lineHeight: 1.5, whiteSpace: 'normal', overflow: 'hidden' }}>{badge.howToEarn}</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};



/* ─── PUBLISH SUCCESS MODAL ─────────────────────────────────── */
const PublishSuccessModal = ({ work, onClose, onViewInProfile, onPushToMarket }) => {
  React.useEffect(() => {
    const t = setTimeout(onClose, 12000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: 500, width: '100%', backgroundColor: '#0d1225', borderRadius: 24, border: '1px solid rgba(34,211,238,0.3)', padding: '36px 32px', textAlign: 'center', boxShadow: '0 0 80px rgba(34,211,238,0.12)' }}>
        {/* Animated checkmark */}
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#22d3ee,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 32px rgba(34,211,238,0.4)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <div style={{ fontSize: 22, fontWeight: 900, fontFamily: 'Orbitron,sans-serif', color: '#e2e8f0', marginBottom: 8, letterSpacing: '-0.01em' }}>
          Work Published!
        </div>
        <div style={{ fontSize: 14, color: '#8899bb', fontFamily: 'Rajdhani,sans-serif', lineHeight: 1.7, marginBottom: 10 }}>
          <strong style={{ color: '#ccd6f6' }}>{work?.title || 'Your work'}</strong> is live and visible to the world.
        </div>
        {/* Work preview — fixed 4:3 */}
        {work?.img && (
          <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 20, border: '1px solid rgba(255,255,255,0.08)', position: 'relative', paddingBottom: '75%', maxWidth: 380, margin: '0 auto 20px' }}>
            <img src={work.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        )}
        {/* Action text */}
        <div style={{ fontSize: 14, color: '#8899bb', fontFamily: 'Rajdhani,sans-serif', lineHeight: 2, marginBottom: 24 }}>
          You can{' '}
          <span onClick={onViewInProfile} style={{ color: '#22d3ee', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700, textUnderlineOffset: 3 }}>view it in your profile</span>
          {' '}or{' '}
          <span onClick={onPushToMarket} style={{ color: '#a855f7', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700, textUnderlineOffset: 3 }}>push it to Vibe Market</span>
          {' '}to reach buyers.
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={onClose} style={{ padding: '10px 22px', borderRadius: 999, border: '1px solid #2a3a50', backgroundColor: 'transparent', color: '#8899bb', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'Rajdhani,sans-serif', transition: 'all 0.18s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1a2a3a'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>Close</button>
          <button onClick={onViewInProfile} style={{ padding: '10px 22px', borderRadius: 999, border: '1px solid rgba(34,211,238,0.4)', backgroundColor: 'rgba(34,211,238,0.1)', color: '#22d3ee', cursor: 'pointer', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani,sans-serif', transition: 'all 0.18s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(34,211,238,0.2)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(34,211,238,0.1)'}>View in Profile</button>
          <button onClick={onPushToMarket} style={{ padding: '10px 22px', borderRadius: 999, border: 'none', background: 'linear-gradient(90deg,#a855f7,#22d3ee)', color: '#fff', cursor: 'pointer', fontSize: 13, fontWeight: 800, fontFamily: 'Rajdhani,sans-serif', boxShadow: '0 4px 18px rgba(168,85,247,0.3)', transition: 'all 0.18s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.85'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>Push to Market</button>
        </div>
      </div>
    </div>
  );
};

/* ─── PUSH TO MARKET MODAL ───────────────────────────────────── */
const PushToMarketModal = ({ work, onClose, onPushed, connectFiles = null }) => {
  /* connectFiles: array of {url,type,name} when opened from Connect */
  const [title, setTitle] = React.useState(work?.title || '');
  const [desc, setDesc] = React.useState('');
  const [priceType, setPriceType] = React.useState('free'); /* 'free' | 'paid' */
  const [price, setPrice] = React.useState('');
  const [tagInput, setTagInput] = React.useState('');
  const [tags, setTags] = React.useState(work?.tags?.filter(t => t !== 'Upload') || []);
  const [category, setCategory] = React.useState('Design');
  const [thumbIdx, setThumbIdx] = React.useState(0);
  const [selectedFiles, setSelectedFiles] = React.useState(connectFiles || null);
  const fileRef = React.useRef(null);
  const CATS = ['Design', 'Development', 'Illustration', 'Motion', '3D', 'Photography', 'Branding', 'UI/UX', 'Other'];
  const media = selectedFiles || (work?.media) || [];
  const thumbSrc = media[thumbIdx]?.src || work?.img || '';
  const addTag = (t) => { const v = t.trim().replace(/^#+/, ''); if (v && !tags.includes(v) && tags.length < 8) setTags(p => [...p, v]); };
  const handleTagKey = (e) => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(tagInput); setTagInput(''); } };

  const handlePush = () => {
    if (!title.trim()) return;
    const pushed = {
      id: Date.now(),
      title: title.trim(),
      desc,
      img: thumbSrc,
      media: media.length > 0 ? media : (work?.media || []),
      price: priceType === 'free' ? 'Free' : (price ? `$${price}` : 'Free'),
      tags: [category, ...tags],
      cr: '@you', crFull: 'You', rt: 5, views: 0, lk: 0, saves: 0,
      pushedToMarket: true,
    };
    if (onPushed) onPushed(pushed);
    onClose();
  };

  const canPush = title.trim().length > 0;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99998, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(14px)' }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ width: '100%', maxWidth: 560, backgroundColor: '#0d1225', borderRadius: 24, border: '1px solid rgba(168,85,247,0.3)', boxShadow: '0 0 80px rgba(168,85,247,0.12)', maxHeight: '90vh', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div style={{ padding: '28px 28px 0', textAlign: 'center', flexShrink: 0 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, backgroundColor: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', marginBottom: 16 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            <span style={{ fontSize: 10, color: '#a855f7', fontFamily: 'JetBrains Mono,monospace', letterSpacing: '0.08em' }}>VIBE MARKET</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 900, fontFamily: 'Orbitron,sans-serif', color: '#e2e8f0', marginBottom: 8, letterSpacing: '-0.01em' }}>
            Market Your Work to the Public
          </div>
          <div style={{ fontSize: 13, color: '#667788', fontFamily: 'Rajdhani,sans-serif', lineHeight: 1.6, marginBottom: 24 }}>
            Fill in a few details and your work goes live to thousands of creators and buyers — in under 60 seconds.
          </div>
        </div>

        <div style={{ padding: '0 28px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>

          {/* Thumbnail strip (if multiple files) */}
          {media.length > 1 && (
            <div>
              <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Cover Thumbnail</div>
              <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
                {media.map((m, i) => (
                  <div key={i} onClick={() => setThumbIdx(i)} style={{ flexShrink: 0, width: 72, height: 54, borderRadius: 8, overflow: 'hidden', cursor: 'pointer', border: '2px solid ' + (i === thumbIdx ? '#a855f7' : 'rgba(255,255,255,0.08)'), position: 'relative', transition: 'border-color 0.15s' }}>
                    <img src={m.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    {i === thumbIdx && <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(168,85,247,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ color: '#a855f7', fontSize: 14, fontWeight: 900 }}>&#10003;</span></div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Connect file picker */}
          {connectFiles !== null && (
            <div>
              <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Select Files to Push</div>
              <button onClick={() => fileRef.current?.click()} style={{ width: '100%', padding: '12px', borderRadius: 10, border: '2px dashed rgba(168,85,247,0.4)', backgroundColor: 'rgba(168,85,247,0.06)', color: '#a855f7', cursor: 'pointer', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani,sans-serif', transition: 'all 0.18s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.14)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.06)'}>
                + Select Files from Your Device
              </button>
              <input ref={fileRef} type="file" accept="image/*,.gif,video/mp4,video/*" multiple style={{ display: 'none' }} onChange={e => {
                const arr = Array.from(e.target.files);
                Promise.all(arr.map(f => new Promise(res => { const r = new FileReader(); r.onload = ev => res({ src: ev.target.result, type: f.type.startsWith('video/') ? 'video' : 'image', name: f.name }); r.readAsDataURL(f); })))
                  .then(loaded => setSelectedFiles(p => [...(p || []), ...loaded]));
                e.target.value = '';
              }} />
              {selectedFiles && selectedFiles.length > 0 && (
                <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                  {selectedFiles.map((f, i) => (
                    <div key={i} style={{ position: 'relative', width: 56, height: 44, borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <img src={f.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      <button onClick={() => setSelectedFiles(p => p.filter((_, j) => j !== i))} style={{ position: 'absolute', top: 2, right: 2, width: 14, height: 14, borderRadius: '50%', backgroundColor: 'rgba(220,38,38,0.9)', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>x</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Title */}
          <div>
            <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Title <span style={{ color: '#ef4444' }}>*</span></div>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Neon UI Kit — 120 Components" style={{ width: '100%', backgroundColor: '#0f1628', border: '1px solid ' + (title ? '#2a3a50' : '#1a2540'), borderRadius: 10, padding: '11px 14px', color: '#e2e8f0', fontSize: 14, outline: 'none', fontFamily: 'Rajdhani,sans-serif', fontWeight: 700, boxSizing: 'border-box', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = '#a855f7'} onBlur={e => e.target.style.borderColor = title ? '#2a3a50' : '#1a2540'} />
          </div>

          {/* Description */}
          <div>
            <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Description</div>
            <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="What's included? Who's it for? What makes it special?" rows={3} style={{ width: '100%', backgroundColor: '#0f1628', border: '1px solid #1a2540', borderRadius: 10, padding: '11px 14px', color: '#ccd6f6', fontSize: 13, outline: 'none', resize: 'none', lineHeight: 1.6, boxSizing: 'border-box', fontFamily: 'Rajdhani,sans-serif', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = '#a855f7'} onBlur={e => e.target.style.borderColor = '#1a2540'} />
          </div>

          {/* Category */}
          <div>
            <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Category</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {CATS.map(cat => (
                <button key={cat} onClick={() => setCategory(cat)} style={{ padding: '6px 14px', borderRadius: 999, border: '1px solid ' + (category === cat ? '#a855f7' : '#1a2540'), backgroundColor: category === cat ? 'rgba(168,85,247,0.15)' : '#0f1628', color: category === cat ? '#c084fc' : '#667788', cursor: 'pointer', fontSize: 12, fontWeight: 600, fontFamily: 'Rajdhani,sans-serif', transition: 'all 0.15s' }}>{cat}</button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Tags <span style={{ color: '#445566' }}>(up to 8)</span></div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
              {tags.map(t => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 999, backgroundColor: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', color: '#c084fc', fontSize: 11, fontFamily: 'JetBrains Mono,monospace' }}>
                  #{t}
                  <button onClick={() => setTags(p => p.filter(x => x !== t))} style={{ background: 'none', border: 'none', color: '#a855f7', cursor: 'pointer', padding: 0, fontSize: 12, lineHeight: 1, display: 'flex', alignItems: 'center' }}>&#215;</button>
                </span>
              ))}
            </div>
            {tags.length < 8 && (
              <input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={handleTagKey} onBlur={() => { if (tagInput.trim()) { addTag(tagInput); setTagInput(''); } }} placeholder="Add a tag and press Enter..." style={{ width: '100%', backgroundColor: '#0f1628', border: '1px solid #1a2540', borderRadius: 10, padding: '9px 14px', color: '#ccd6f6', fontSize: 12, outline: 'none', fontFamily: 'JetBrains Mono,monospace', boxSizing: 'border-box', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = '#a855f7'} onBlur2={e => e.target.style.borderColor = '#1a2540'} />
            )}
          </div>

          {/* Price */}
          <div>
            <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Pricing</div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              {[['free', 'Free — Give it away'], ['paid', 'Paid — Set your price']].map(([val, lbl]) => (
                <button key={val} onClick={() => setPriceType(val)} style={{ flex: 1, padding: '10px 8px', borderRadius: 10, border: '1px solid ' + (priceType === val ? '#22d3ee' : '#1a2540'), backgroundColor: priceType === val ? 'rgba(34,211,238,0.1)' : '#0f1628', color: priceType === val ? '#22d3ee' : '#556677', cursor: 'pointer', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani,sans-serif', transition: 'all 0.18s' }}>{lbl}</button>
              ))}
            </div>
            {priceType === 'paid' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, backgroundColor: '#0f1628', border: '1px solid #2a3a50', borderRadius: 10, overflow: 'hidden' }}>
                <span style={{ padding: '11px 14px', color: '#22d3ee', fontWeight: 800, fontFamily: 'Rajdhani,sans-serif', fontSize: 16, borderRight: '1px solid #1a2540' }}>$</span>
                <input type="number" min="0" step="0.01" value={price} onChange={e => setPrice(e.target.value)} placeholder="0.00" style={{ flex: 1, border: 'none', outline: 'none', backgroundColor: 'transparent', padding: '11px 14px', color: '#e2e8f0', fontSize: 14, fontFamily: 'Rajdhani,sans-serif', fontWeight: 700 }} />
              </div>
            )}
          </div>

          {/* Push button */}
          <div style={{ paddingTop: 8, borderTop: '1px solid #1a2540' }}>
            <button
              onClick={handlePush}
              disabled={!canPush}
              style={{ width: '100%', padding: '14px', borderRadius: 12, border: 'none', background: canPush ? 'linear-gradient(90deg,#a855f7,#22d3ee)' : '#1e2640', color: canPush ? '#fff' : '#445566', cursor: canPush ? 'pointer' : 'not-allowed', fontSize: 15, fontWeight: 900, fontFamily: 'Orbitron,sans-serif', letterSpacing: '0.04em', boxShadow: canPush ? '0 8px 32px rgba(168,85,247,0.35)' : 'none', transition: 'all 0.2s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { if (canPush) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(168,85,247,0.5)'; } }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = canPush ? '0 8px 32px rgba(168,85,247,0.35)' : 'none'; }}>
              &#9889; Push to Market
            </button>
            {!canPush && <div style={{ fontSize: 11, color: '#445566', textAlign: 'center', marginTop: 8, fontFamily: 'JetBrains Mono,monospace' }}>Add a title to enable pushing</div>}
          </div>

          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#445566', cursor: 'pointer', fontSize: 12, fontFamily: 'JetBrains Mono,monospace', textAlign: 'center', padding: 0, transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#8899bb'} onMouseLeave={e => e.currentTarget.style.color = '#445566'}>Cancel — maybe later</button>
        </div>
      </div>
    </div>
  );
};

/* ─── UPLOAD WORK PAGE ──────────────────────────────────────── */
const SUGGESTED_TAGS = ['React', 'Next.js', 'TypeScript', 'Three.js', 'UI/UX', 'Dashboard', 'AI', 'Design System', 'Mobile', 'Web3', 'Animation', 'Backend', 'API', 'E-commerce', 'Figma', 'Node.js', 'CSS', 'Auth', 'Chart', 'Components', 'Landing', 'Blog', 'Portfolio', 'SaaS', 'DevTools'];

const UploadWorkPage = ({ onClose, onPublish, onSaveDraft, onUpdateDraft, onViewDrafts, initialDraft = null, onMounted, globalTags = [] }) => {
  const [files, setFiles] = React.useState(initialDraft?.files || []);
  const [shotName, setShotName] = React.useState(initialDraft?.title || '');
  const [tags, setTags] = React.useState(initialDraft?.tags?.filter(t => t !== 'Upload') || []);
  const [tagInput, setTagInput] = React.useState('');
  const [saleType, setSaleType] = React.useState(initialDraft?.saleType || null); // null=unselected, 'sale', 'hire'
  const [priceInput, setPriceInput] = React.useState(initialDraft?.price || '');
  const [step, setStep] = React.useState(initialDraft?._openStep || ((initialDraft?.files?.length > 0 && initialDraft?.title) ? 'details' : 'upload'));
  const [dragging, setDragging] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [thumbIdx, setThumbIdx] = React.useState(initialDraft?.thumbIdx || 0);
  const [draftSaved, setDraftSaved] = React.useState(false);
  const [draftTitle, setDraftTitle] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const draftId = React.useRef(initialDraft?.id || null);
  const fileRef = React.useRef(null);
  const hasFiles = files.length > 0;
  const af = files[activeIdx] || null;

  React.useEffect(() => { onMounted && onMounted(); }, []);

  const mergedSuggested = [...new Set([...SUGGESTED_TAGS, ...globalTags])].filter(t => !tags.includes(t)).slice(0, 20);

  const addTag = (t) => { const v = t.trim().replace(/^[#,]+/, '').replace(/[,]+$/, ''); if (v && !tags.includes(v)) setTags(p => [...p, v]); };
  const handleTagKey = (e) => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(tagInput); setTagInput(''); } };
  const removeTag = (t) => setTags(p => p.filter(x => x !== t));

  const buildDraftObj = (extra = {}) => ({
    id: draftId.current || Date.now(),
    title: shotName.trim() || files[0]?.name || 'Untitled Draft',
    files, thumbIdx, tags,
    saleType: saleType || null,
    price: saleType === 'sale' ? priceInput : '',
    _savedStep: step,
    ...extra
  });

  const saveDraft = () => {
    if (!hasFiles || !onSaveDraft) return;
    const d = buildDraftObj();
    if (!draftId.current) { draftId.current = d.id; }
    onSaveDraft(d);
    setDraftTitle(d.title);
    setDraftSaved(true);
    setTimeout(() => { setDraftSaved(false); onClose(); }, 2500);
  };

  const readFiles = (raw) => {
    const arr = Array.from(raw).filter(f =>
      /\.(png|jpg|jpeg|gif|mp4|webm|mov)$/i.test(f.name) ||
      f.type.startsWith('image/') || f.type.startsWith('video/')
    );
    if (!arr.length) return;
    Promise.all(arr.map(f => new Promise(res => {
      const r = new FileReader();
      r.onload = ev => res({ id: Date.now() + Math.random(), url: ev.target.result, name: f.name.replace(/\.[^.]+$/, ''), alt: '', layout: 'standard', type: f.type.startsWith('video/') ? 'video' : 'image' });
      r.readAsDataURL(f);
    }))).then(loaded => { setFiles(p => [...p, ...loaded]); setActiveIdx(0); });
  };
  const moveFile = (i, d) => { const n = i + d; if (n < 0 || n >= files.length) return; const a = [...files];[a[i], a[n]] = [a[n], a[i]]; setFiles(a); setActiveIdx(n); };
  const removeFile = (i) => { setFiles(f => f.filter((_, j) => j !== i)); setActiveIdx(p => Math.max(0, p - 1)); setThumbIdx(t => t === i ? 0 : t > i ? t - 1 : t); };
  const patchFile = (i, obj) => setFiles(f => f.map((fi, j) => j === i ? { ...fi, ...obj } : fi));

  const validate = () => {
    const e = {};
    if (!shotName.trim()) e.title = 'Title is required';
    if (tags.length === 0) e.tags = 'Add at least one tag';
    if (files.some(f => !f.alt?.trim())) e.alt = 'Alt text required on all files';
    return e;
  };

  const doPublish = () => {
    const e = validate();
    if (!saleType) e.saleType = 'Please select how you want to offer this.';
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    onPublish({
      id: Date.now(),
      title: shotName.trim() || files[thumbIdx]?.name || 'Untitled',
      img: files[thumbIdx]?.url || files[0]?.url || '',
      thumbIdx,
      media: files.map((f, mi) => ({ src: f.url, type: f.type, alt: f.alt, layout: f.layout, i: mi })),
      cr: '@you', crFull: 'You',
      saleType: saleType || 'sale',
      price: saleType === 'sale' ? priceInput : '',
      rt: 5, views: 0, lk: 0, saves: 0,
      tags: tags.length > 0 ? tags : ['Upload']
    });
  };

  return (
    <div style={{ position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 9000, backgroundColor: '#080c1a', display: 'flex', flexDirection: 'column', fontFamily: 'Rajdhani,sans-serif' }}>
      {/* ── DRAFT SAVED BANNER ── */}
      {draftSaved && (
        <div style={{ position: 'fixed', top: 80, left: '50%', transform: 'translateX(-50%)', zIndex: 99999, display: 'flex', alignItems: 'center', gap: 12, padding: '14px 22px', background: 'rgba(8,12,26,0.98)', border: '1px solid rgba(124,58,237,0.7)', borderRadius: 14, boxShadow: '0 8px 32px rgba(0,0,0,0.7),0 0 20px rgba(124,58,237,0.25)', maxWidth: '90vw', animation: 'sU .2s ease' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#a855f7,#22d3ee)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <CheckCircle size={14} color="white" />
          </div>
          <span style={{ fontSize: 14, color: '#ccd6f6', fontFamily: 'Rajdhani,sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>
            <strong style={{ color: '#a78bfa' }}>"{draftTitle}"</strong> saved to drafts ✓{' '}
            <span onClick={() => { setDraftSaved(false); onClose(); if (onViewDrafts) onViewDrafts(); }} style={{ color: '#22d3ee', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700, marginLeft: 6 }}>View drafts →</span>
          </span>
        </div>
      )}

      {/* ═══ STEP 1 — UPLOAD ═══ */}
      {step === 'upload' && (
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '44px 24px 80px' }}>
          <div style={{ width: '100%', maxWidth: 760, textAlign: 'center', marginBottom: 28 }}>
            <div style={{ fontSize: 28, fontWeight: 900, fontFamily: 'Orbitron,sans-serif', color: '#22d3ee', letterSpacing: '-0.01em', marginBottom: 10 }}>Show Your Works</div>
            <div style={{ fontSize: 14, color: '#8899bb', lineHeight: 1.7, marginBottom: 12 }}>Upload your best work — get discovered, earn followers, and grow your audience.</div>
            <div style={{ fontSize: 11, color: '#445566', fontFamily: 'JetBrains Mono,monospace', letterSpacing: '0.07em' }}>STEP 1 — UPLOAD MEDIA</div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginBottom: 32, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={onClose} style={{ padding: '10px 24px', borderRadius: 999, border: '1px solid #2a3a50', backgroundColor: 'transparent', color: '#8899bb', cursor: 'pointer', fontSize: 13, fontWeight: 600, transition: 'all 0.18s' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a2a3a'; e.currentTarget.style.color = '#e2e8f0'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#8899bb'; }}>Cancel</button>
            <button onClick={saveDraft} style={{ padding: '10px 24px', borderRadius: 999, border: '1px solid ' + (hasFiles ? 'rgba(124,58,237,0.6)' : '#1e2640'), backgroundColor: hasFiles ? 'rgba(124,58,237,0.12)' : 'transparent', color: hasFiles ? '#a78bfa' : '#334455', cursor: hasFiles ? 'pointer' : 'default', fontSize: 13, fontWeight: 600, opacity: hasFiles ? 1 : 0.4, transition: 'all 0.18s' }}>Save as Draft</button>
            <button onClick={() => { if (hasFiles) setStep('details'); }} style={{ padding: '10px 28px', borderRadius: 999, border: 'none', background: hasFiles ? 'linear-gradient(90deg,#22d3ee,#a855f7)' : '#1e2640', color: hasFiles ? '#fff' : '#334455', cursor: hasFiles ? 'pointer' : 'default', fontSize: 13, fontWeight: 800, letterSpacing: '0.04em', opacity: hasFiles ? 1 : 0.4, transition: 'all 0.18s', boxShadow: hasFiles ? '0 4px 20px rgba(34,211,238,0.22)' : 'none' }}>Continue →</button>
          </div>
          <div style={{ width: '100%', maxWidth: 760, border: '2px dashed ' + (dragging ? '#22d3ee' : hasFiles ? 'rgba(34,211,238,0.3)' : '#1e2a40'), borderRadius: 18, backgroundColor: dragging ? 'rgba(34,211,238,0.06)' : 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: hasFiles ? 'default' : 'pointer', padding: hasFiles ? '20px' : '52px 40px', boxSizing: 'border-box', minHeight: hasFiles ? 140 : 300, transition: 'all 0.22s' }}
            onDragOver={e => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)}
            onDrop={e => { e.preventDefault(); setDragging(false); readFiles(e.dataTransfer.files); }}
            onClick={() => { if (!hasFiles) fileRef.current?.click(); }}>
            {!hasFiles ? (
              <>
                <Upload size={32} color="#22d3ee" style={{ marginBottom: 16, opacity: .7 }} />
                <div style={{ fontSize: 15, color: '#ccd6f6', fontWeight: 600, marginBottom: 8, textAlign: 'center' }}>Drag and drop a file, or{' '}<span style={{ color: '#22d3ee', textDecoration: 'underline', cursor: 'pointer', fontWeight: 700 }} onClick={e => { e.stopPropagation(); fileRef.current?.click(); }}>Browse</span></div>
                <div style={{ fontSize: 11, color: '#445566', fontFamily: 'JetBrains Mono,monospace', textAlign: 'center' }}>Images (png, jpg, gif) · Videos (mp4, webm, mov)</div>
              </>
            ) : (
              <div style={{ width: '100%' }} onClick={e => e.stopPropagation()}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(130px,1fr))', gap: 10 }}>
                  {files.map((f, i) => (
                    <div key={f.id} onClick={() => setActiveIdx(i)} style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer', border: '2px solid ' + (i === activeIdx ? '#22d3ee' : 'rgba(255,255,255,0.06)'), transition: 'border-color 0.15s' }}>
                      {f.type === 'video' ? <video src={f.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <img src={f.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
                      <button onClick={e => { e.stopPropagation(); removeFile(i); }} style={{ position: 'absolute', top: 5, right: 5, width: 22, height: 22, borderRadius: '50%', backgroundColor: 'rgba(220,38,38,0.9)', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 13, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={11} /></button>
                    </div>
                  ))}
                  <div onClick={e => { e.stopPropagation(); fileRef.current?.click(); }} style={{ borderRadius: 10, border: '2px dashed #2a3050', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', aspectRatio: '4/3', gap: 6 }} onMouseEnter={e => e.currentTarget.style.borderColor = '#22d3ee'} onMouseLeave={e => e.currentTarget.style.borderColor = '#2a3050'}>
                    <Plus size={22} color="#445566" />
                    <span style={{ fontSize: 10, color: '#445566', fontFamily: 'JetBrains Mono,monospace' }}>Add more</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*,.gif,video/mp4,video/*" multiple style={{ display: 'none' }} onChange={e => { readFiles(e.target.files); e.target.value = ''; }} />
        </div>
      )}

      {/* ═══ STEP 2 — DETAILS ═══ */}
      {step === 'details' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', borderBottom: '1px solid #1a2540', backgroundColor: '#0b0f1e', gap: 10, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setStep('upload')} style={{ padding: '7px 16px', borderRadius: 999, border: '1px solid #2a3a50', backgroundColor: 'transparent', color: '#8899bb', cursor: 'pointer', fontSize: 12, fontWeight: 600 }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1a2a3a'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>← Back</button>
              <button onClick={onClose} style={{ padding: '7px 16px', borderRadius: 999, border: '1px solid #2a3a50', backgroundColor: 'transparent', color: '#8899bb', cursor: 'pointer', fontSize: 12, fontWeight: 600 }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1a2a3a'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>Cancel</button>
            </div>
            <span style={{ fontSize: 11, color: '#445566', fontFamily: 'JetBrains Mono,monospace', letterSpacing: '0.07em' }}>STEP 2 — DETAILS</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={saveDraft} style={{ padding: '7px 16px', borderRadius: 999, border: '1px solid rgba(124,58,237,0.5)', backgroundColor: 'rgba(124,58,237,0.12)', color: '#a78bfa', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>Save as Draft</button>
              <button onClick={doPublish} style={{ padding: '7px 20px', borderRadius: 999, border: 'none', background: 'linear-gradient(90deg,#22d3ee,#a855f7)', color: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 800, letterSpacing: '0.04em', boxShadow: '0 4px 18px rgba(34,211,238,0.22)' }}>Publish Shot</button>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', minHeight: 0, overflow: 'hidden' }}>
            {/* LEFT — previews */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px 60px', display: 'flex', flexDirection: 'column', gap: 14, backgroundColor: 'rgba(5,8,18,0.8)' }}>
              {/* Title */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: '#0f1628', borderRadius: 10, padding: '10px 16px', border: `1px solid ${errors.title ? '#ef4444' : '#1a2540'}`, transition: 'border-color .2s' }}>
                  <span style={{ fontSize: 10, color: '#445566', fontFamily: 'JetBrains Mono,monospace', whiteSpace: 'nowrap', flexShrink: 0, letterSpacing: '0.05em' }}>TITLE</span>
                  <input value={shotName} onChange={e => { setShotName(e.target.value); if (errors.title) setErrors(p => ({ ...p, title: null })); }} placeholder="Give your shot a name..." style={{ flex: 1, border: 'none', outline: 'none', fontSize: 17, fontWeight: 800, color: '#e2e8f0', backgroundColor: 'transparent', fontFamily: 'Rajdhani,sans-serif' }} />
                </div>
                {errors.title && <div style={{ fontSize: 11, color: '#ef4444', fontFamily: 'JetBrains Mono', paddingLeft: 4 }}>{errors.title}</div>}
              </div>

              {/* File previews */}
              {files.map((f, i) => (
                <div key={f.id} onClick={() => setActiveIdx(i)} style={{ borderRadius: 12, overflow: 'hidden', border: `2px solid ${errors.alt && !f.alt?.trim() ? '#ef4444' : (i === activeIdx ? '#22d3ee' : '#1a2540')}`, cursor: 'pointer', transition: 'border-color 0.15s', backgroundColor: '#0b0f1e', flexShrink: 0 }}>
                  <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', overflow: 'hidden', backgroundColor: '#050810' }}>
                    <div style={{ position: 'absolute', inset: 0 }}>
                      {f.type === 'video'
                        ? <video src={f.url} controls onClick={e => e.stopPropagation()} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        : <img src={f.url} alt={f.alt || f.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      }
                    </div>
                  </div>
                  {files.length > 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', backgroundColor: '#0b0f1e', borderTop: '1px solid #1a2540' }}>
                      <span style={{ flex: 1, fontSize: 10, color: '#445566', fontFamily: 'JetBrains Mono,monospace' }}>FILE {i + 1}/{files.length}</span>
                      <button disabled={i === 0} onClick={e => { e.stopPropagation(); moveFile(i, -1); }} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid #2a3a50', backgroundColor: 'transparent', color: i === 0 ? '#2a3a50' : '#8899bb', cursor: i === 0 ? 'not-allowed' : 'pointer', fontSize: 15 }}>↑</button>
                      <button disabled={i === files.length - 1} onClick={e => { e.stopPropagation(); moveFile(i, 1); }} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid #2a3a50', backgroundColor: 'transparent', color: i === files.length - 1 ? '#2a3a50' : '#8899bb', cursor: i === files.length - 1 ? 'not-allowed' : 'pointer', fontSize: 15 }}>↓</button>
                      <button onClick={e => { e.stopPropagation(); removeFile(i); }} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid rgba(239,68,68,0.4)', backgroundColor: 'rgba(239,68,68,0.08)', color: '#f87171', cursor: 'pointer', fontSize: 11, fontWeight: 700 }}>Remove</button>
                    </div>
                  )}
                </div>
              ))}
              <button onClick={() => fileRef.current?.click()} style={{ alignSelf: 'flex-start', padding: '9px 20px', borderRadius: 999, border: '1px solid rgba(34,211,238,0.4)', backgroundColor: 'rgba(34,211,238,0.06)', color: '#22d3ee', cursor: 'pointer', fontSize: 12, fontWeight: 700 }}>+ Add More Files</button>

              {/* ── SALE TYPE TOGGLE ── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Offer Type</div>
                <div style={{ display: 'flex', gap: 8, padding: '4px', borderRadius: 12, border: `1px solid ${errors.saleType ? 'rgba(239,68,68,.5)' : 'rgba(255,255,255,.06)'}`, background: 'rgba(255,255,255,.02)', transition: 'border-color .2s' }}>
                  {[['sale', 'For Sale', 'linear-gradient(135deg,#22d3ee,#a855f7)'], ['hire', 'Hire Me', 'linear-gradient(135deg,#a855f7,#ec4899)']].map(([val, lbl, grad]) => (
                    <button key={val}
                      onClick={() => { setSaleType(val); if (errors.saleType) setErrors(p => ({ ...p, saleType: null })); if (val === 'hire') setPriceInput(''); }}
                      style={{
                        flex: 1, padding: '10px 6px', borderRadius: 9, border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .2s',
                        background: saleType === val ? grad : 'rgba(255,255,255,.04)',
                        color: saleType === val ? 'white' : 'rgba(255,255,255,.3)'
                      }}>
                      {lbl}
                    </button>
                  ))}
                </div>
                {errors.saleType && (
                  <div style={{ fontSize: 10, color: '#ef4444', fontFamily: 'JetBrains Mono', lineHeight: 1.5, paddingLeft: 2 }}>
                    Please select how you want to offer this — choose 'For Sale' if it's a product with a price, or 'Hire Me' if people should reach out to you.
                  </div>
                )}
                {saleType === 'sale' && (
                  <div>
                    <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Set Price</div>
                    <input
                      value={priceInput}
                      onChange={e => setPriceInput(e.target.value)}
                      placeholder="e.g. $49"
                      style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #1a2540', background: '#0f1628', color: '#22d3ee', fontSize: 13, fontWeight: 700, fontFamily: 'Orbitron,monospace', outline: 'none', boxSizing: 'border-box', transition: 'border-color .2s' }}
                      onFocus={e => e.target.style.borderColor = '#22d3ee'}
                      onBlur={e => e.target.style.borderColor = '#1a2540'} />
                  </div>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*,.gif,video/mp4,video/*" multiple style={{ display: 'none' }} onChange={e => { readFiles(e.target.files); e.target.value = ''; }} />

              {/* Tags — FIX #4 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tags <span style={{ color: '#334455', textTransform: 'none', letterSpacing: 0 }}>· suggest 3–5 for best discoverability</span></div>
                {/* Selected tags */}
                {tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {tags.map(t => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 999, background: 'rgba(168,85,247,.12)', border: '1px solid rgba(168,85,247,.35)', color: '#a855f7', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 700 }}>
                        #{t}
                        <button onClick={() => removeTag(t)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(168,85,247,.7)', padding: 0, display: 'flex', alignItems: 'center', marginLeft: 2 }}><X size={9} /></button>
                      </div>
                    ))}
                  </div>
                )}
                {/* Tag input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <input value={tagInput} onChange={e => { setTagInput(e.target.value); if (errors.tags) setErrors(p => ({ ...p, tags: null })); }} onKeyDown={handleTagKey} placeholder="Type a tag and press Enter or comma..." style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: `1px solid ${errors.tags ? '#ef4444' : '#1a2540'}`, background: '#0f1628', color: '#ccd6f6', fontSize: 12, fontFamily: 'Rajdhani', outline: 'none', boxSizing: 'border-box', transition: 'border-color .2s' }} onFocus={e => e.target.style.borderColor = errors.tags ? '#ef4444' : '#22d3ee'} onBlur={e => e.target.style.borderColor = errors.tags ? '#ef4444' : '#1a2540'} />
                  {errors.tags && <div style={{ fontSize: 11, color: '#ef4444', fontFamily: 'JetBrains Mono' }}>{errors.tags}</div>}
                </div>
                {/* Suggested tags */}
                <div>
                  <div style={{ fontSize: 9, color: '#334455', fontFamily: 'JetBrains Mono', marginBottom: 6 }}>SUGGESTED</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {mergedSuggested.slice(0, 16).map(t => (
                      <button key={t} onClick={() => addTag(t)} style={{ padding: '3px 9px', borderRadius: 999, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: 'rgba(255,255,255,.5)', fontSize: 10, fontFamily: 'Rajdhani', fontWeight: 600, cursor: 'pointer', transition: 'all .15s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,.12)'; e.currentTarget.style.color = '#a855f7'; e.currentTarget.style.borderColor = 'rgba(168,85,247,.35)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.color = 'rgba(255,255,255,.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; }}>
                        #{t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — properties panel */}
            <div style={{ width: 272, flexShrink: 0, borderLeft: '2px solid #1a2540', display: 'flex', flexDirection: 'column', backgroundColor: '#0b0f1e', overflowY: 'auto' }}>
              <div style={{ padding: '14px 16px 12px', borderBottom: '1px solid #1a2540', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#e2e8f0' }}>{af && af.type === 'video' ? 'Video' : 'Image'} Settings</span>
                  <span style={{ fontSize: 10, color: '#445566', fontFamily: 'JetBrains Mono' }}>{files.length > 0 ? activeIdx + 1 + '/' + files.length : '—'}</span>
                </div>
              </div>
              {af ? (
                <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                  {/* Thumbnail */}
                  <div>
                    <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Thumbnail</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
                      {files.map((f, i) => (
                        <div key={f.id} onClick={() => setThumbIdx(i)} style={{ position: 'relative', borderRadius: 7, overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer', border: '2px solid ' + (i === thumbIdx ? '#22d3ee' : 'rgba(255,255,255,0.08)') }}>
                          {f.type === 'video' ? <video src={f.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <img src={f.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
                          {i === thumbIdx && <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(34,211,238,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={16} color="#22d3ee" /></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Alt text */}
                  <div>
                    <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Alt Text</div>
                    <textarea value={af.alt} onChange={e => { patchFile(activeIdx, { alt: e.target.value }); if (errors.alt) setErrors(p => ({ ...p, alt: null })); }} placeholder="Describe this media for accessibility..." rows={3} style={{ width: '100%', backgroundColor: '#0f1628', border: `1px solid ${errors.alt && !af.alt?.trim() ? '#ef4444' : '#1a2540'}`, borderRadius: 8, padding: '9px 11px', color: '#ccd6f6', fontSize: 12, outline: 'none', resize: 'none', lineHeight: 1.6, boxSizing: 'border-box', display: 'block', fontFamily: 'Rajdhani,sans-serif', transition: 'border-color 0.2s' }} onFocus={e => e.target.style.borderColor = '#22d3ee'} onBlur={e => e.target.style.borderColor = errors.alt && !af.alt?.trim() ? '#ef4444' : '#1a2540'} />
                    {errors.alt && !af.alt?.trim() && <div style={{ fontSize: 10, color: '#ef4444', fontFamily: 'JetBrains Mono', marginTop: 3 }}>{errors.alt}</div>}
                  </div>
                  {/* Layout */}
                  <div>
                    <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Layout</div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {[['standard', 'Standard'], ['wide', 'Wide']].map(([val, lbl]) => (
                        <button key={val} onClick={() => patchFile(activeIdx, { layout: val })} style={{ flex: 1, padding: '9px 4px', borderRadius: 8, border: '1px solid ' + (af.layout === val ? '#22d3ee' : '#1a2540'), backgroundColor: af.layout === val ? 'rgba(34,211,238,0.1)' : '#0f1628', color: af.layout === val ? '#22d3ee' : '#556677', cursor: 'pointer', fontSize: 12, fontWeight: 700 }}>{lbl}</button>
                      ))}
                    </div>
                  </div>
                  {/* File name */}
                  <div>
                    <div style={{ fontSize: 10, color: '#556677', fontFamily: 'JetBrains Mono,monospace', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>File Name</div>
                    <input value={af.name} onChange={e => patchFile(activeIdx, { name: e.target.value })} style={{ width: '100%', backgroundColor: '#0f1628', border: '1px solid #1a2540', borderRadius: 8, padding: '9px 11px', color: '#ccd6f6', fontSize: 12, outline: 'none', fontWeight: 600, boxSizing: 'border-box', fontFamily: 'Rajdhani,sans-serif' }} onFocus={e => e.target.style.borderColor = '#22d3ee'} onBlur={e => e.target.style.borderColor = '#1a2540'} />
                  </div>
                  {/* Remove */}
                  <div style={{ paddingTop: 10, borderTop: '1px solid #1a2540' }}>
                    <button onClick={() => removeFile(activeIdx)} style={{ width: '100%', padding: '10px', borderRadius: 8, border: '1px solid rgba(239,68,68,0.4)', backgroundColor: 'rgba(239,68,68,0.07)', color: '#f87171', cursor: 'pointer', fontSize: 12, fontWeight: 700, display: 'block', boxSizing: 'border-box' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.2)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.07)'}>
                      Remove This File
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                  <div style={{ textAlign: 'center', color: '#334455', fontSize: 12, fontFamily: 'JetBrains Mono,monospace', lineHeight: 1.8 }}>Click a file preview<br />on the left to<br />edit its settings</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── WORK CARD (hover-shuffles through all uploaded media) ─ */
const WorkCard = ({ p, media }) => {
  const [hoverIdx, setHoverIdx] = React.useState(0);
  const ivRef = React.useRef(null);
  const items = media && media.length > 0 ? media : [{ src: p.img, type: 'image' }];
  const cur = items[hoverIdx];

  const startShuffle = () => {
    if (items.length <= 1) return;
    let i = 1;
    ivRef.current = setInterval(() => { setHoverIdx(i % items.length); i++; }, 700);
  };
  const stopShuffle = () => { clearInterval(ivRef.current); setHoverIdx(0); };
  React.useEffect(() => () => clearInterval(ivRef.current), []);

  return (
    <div className="gl" style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer', transition: 'transform .22s,box-shadow .22s', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.5)'; startShuffle(); }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; stopShuffle(); }}>
      {/* FIXED 4:3 media container — never resizes */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', overflow: 'hidden', backgroundColor: '#050810', flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          {cur?.type === 'video'
            ? <video src={cur.src} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            : <img src={cur?.src || p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'opacity 0.3s' }} />
          }
        </div>
        {items.length > 1 && (
          <div style={{ position: 'absolute', bottom: 5, right: 6, display: 'flex', gap: 3, zIndex: 1 }}>
            {items.map((_, i) => (
              <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: i === hoverIdx ? '#22d3ee' : 'rgba(255,255,255,0.35)', transition: 'background-color 0.3s' }} />
            ))}
          </div>
        )}
      </div>
      <div style={{ padding: '10px 12px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 9, color: 'var(--mu)' }}><Heart size={8} />{p.lk || 0}</div>
        </div>
      </div>
    </div>
  );
};
/* ─── USER PROFILE MODAL ─────────────────────────────────────── */
/* ─── TEAM MEMBER CARD (extracted to fix hooks violation) ─── */
const TeamMemberCard = ({ member: m, isOwner, onRemove, onOpen }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="gl" style={{ borderRadius: 14, padding: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', transition: 'all .2s', position: 'relative', border: `1px solid ${hover ? 'rgba(16,185,129,.3)' : 'rgba(255,255,255,.06)'}` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen && onOpen(m)}>
      <img src={m.av || m.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop'} alt="" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(16,185,129,.4)' }} />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'white', fontFamily: 'Rajdhani' }}>{m.full || m.name}</div>
        <div style={{ fontSize: 9, color: '#10b981', fontFamily: 'JetBrains Mono', marginTop: 2 }}>{m.handle || m.name}</div>
      </div>
      {isOwner && hover && (
        <button onClick={e => { e.stopPropagation(); onRemove(m.handle || m.name); }}
          style={{ position: 'absolute', top: 8, right: 8, width: 24, height: 24, borderRadius: 6, background: 'rgba(239,68,68,.15)', border: '1px solid rgba(239,68,68,.4)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,.3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(239,68,68,.15)'}>
          <Trash2 size={11} color="#ef4444" />
        </button>
      )}
    </div>
  );
};

/* ── MyListCard: extracted so useState isn't called inside .map() ── */
const MyListCard = ({ d, isMe, onOpen, onRemove }) => {
  const [hovering, setHovering] = React.useState(false);
  return (
    <div key={d.name || d.handle} className="gl" style={{ borderRadius: 14, padding: 14, display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'all .2s', position: 'relative' }}
      onClick={() => { if (onOpen) onOpen(d); }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(168,85,247,.2)'; setHovering(true); }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; setHovering(false); }}>
      <img src={d.av} alt="" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '1.5px solid rgba(168,85,247,.4)' }} />
      <div style={{ overflow: 'hidden', flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.full || d.name}</div>
        <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{d.role}</div>
        <div style={{ fontSize: 9, color: '#a855f7', marginTop: 2 }}>{d.followers} followers</div>
      </div>
      {isMe && hovering && (
        <button onClick={e => { e.stopPropagation(); onRemove(d); }}
          style={{ position: 'absolute', top: 8, right: 8, width: 22, height: 22, borderRadius: 6, background: 'rgba(236,72,153,.15)', border: '1px solid rgba(236,72,153,.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ec4899', fontSize: 12, lineHeight: 1, transition: 'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(236,72,153,.3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(236,72,153,.15)'}>✕</button>
      )}
    </div>
  );
};

const UserProfileModal = ({
  user, onClose, followed, onFollow, earnedBadges = [], onGetInTouch, onInvite,
  workspaces = [], showToast, uploads = [], onRequestUpload, drafts = [], onEditDraft,
  onPublishDraft, onOpenSettings, initialTab = 'work', teamRelationships = [],
  setTeamRelationships, teamInvites = [], setTeamInvites, addNotification,
  resolveNotification, onOpenNestedProfile, userProfile = null,
  blockedUsers = [], setBlockedUsers = null, myList = [], setMyList = null
}) => {
  const confirm = useConfirm();
  const menuBtnRef = React.useRef(null);
  const [menuBtnRect, setMenuBtnRect] = React.useState(null);
  const [tab, setTab] = React.useState(initialTab || 'work');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [carouselIdx, setCarouselIdx] = React.useState(0);
  const isBlocked = React.useMemo(() => blockedUsers.includes(user?.handle || user?.name || ''), [blockedUsers, user]);
  const [reported, setReported] = React.useState(false);
  const [addedToList, setAddedToList] = React.useState(() => (myList || []).some(x => (x.name || x.handle) === (user?.name || user?.handle)));
  const [showInviteDrop, setShowInviteDrop] = React.useState(false);
  const [nestedProfileUser, setNestedProfileUser] = React.useState(null);
  const [showWsPicker, setShowWsPicker] = React.useState(false);
  const [avatarLightbox, setAvatarLightbox] = React.useState(false);
  const [avatarHover, setAvatarHover] = React.useState(false);
  const [showTeamInvite, setShowTeamInvite] = React.useState(false);
  const [teamInviteInput, setTeamInviteInput] = React.useState('');
  const [teamInviteSent, setTeamInviteSent] = React.useState(false);
  const [confirmRemoveTeam, setConfirmRemoveTeam] = React.useState(null);
  const menuPanelRef = React.useRef(null);

  React.useEffect(() => { if (initialTab) setTab(initialTab); }, [initialTab]);

  const isMe = user?.handle === '@you' || user?.name === 'You' || user?.crFull === 'You' || user?.cr === '@you' || user?.isOwnProfile === true || !!(userProfile?.handle && user?.handle === userProfile?.handle);

  const userProjects = MKT.filter(m => m.crFull === user?.name || m.cr === user?.handle || m.cr === user?.name).slice(0, 8);
  const userUploads = uploads.filter(u => u.cr === '@you' || u.crFull === 'You');
  const allWork = [...userUploads, ...userProjects];
  const showWork = allWork.length > 0 ? allWork : MKT.slice(2, 8);

  // My team members: relationships where this user appears
  const myHandle = user?.handle || user?.name || '';
  const myTeamMembers = teamRelationships.filter(r => r.a === myHandle || r.b === myHandle).map(r => r.a === myHandle ? r.b : r.a);
  const myTeamProfiles = myTeamMembers.map(h => {
    const d = DESIGNERS_DATA.find(x => x.name === h || x.name === h.replace(/^@/, '') || ('@' + x.name) === h);
    return d
      ? { ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] }
      : { handle: h, name: h, full: h, av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop', role: 'member', on: false, badges: ['starter'] };
  });

  React.useEffect(() => {
    const t = setInterval(() => setCarouselIdx(i => (i + 1) % Math.min(showWork.length, 4)), 2600);
    return () => clearInterval(t);
  }, [showWork.length]);

  // FIX #6: Robust menu close — mousedown on document, no stopPropagation
  React.useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      const btn = menuBtnRef.current;
      const panel = menuPanelRef.current;
      if (btn && btn.contains(e.target)) return;
      if (panel && panel.contains(e.target)) return;
      setMenuOpen(false);
    };
    const keyHandler = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', keyHandler);
    return () => { document.removeEventListener('mousedown', handler); document.removeEventListener('keydown', keyHandler); };
  }, [menuOpen]);

  // Close lightbox on Escape
  React.useEffect(() => {
    if (!avatarLightbox) return;
    const h = (e) => { if (e.key === 'Escape') setAvatarLightbox(false); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [avatarLightbox]);

  if (!user) return null;
  const color = user.color || '#22d3ee';

  const sendTeamInvite = () => {
    if (!teamInviteInput.trim()) return;
    const inviteId = Date.now();
    let handle = teamInviteInput.trim();
    // Resolve @username → full handle if found in DESIGNERS_DATA
    if (handle.startsWith('@')) {
      const search = handle.replace('@', '').toLowerCase();
      const found = DESIGNERS_DATA.find(d => (d.username || d.name || '').toLowerCase().replace('@', '') === search);
      if (found) handle = found.name;
    }
    const newInvite = { id: inviteId, from: '@you', to: handle, ts: new Date().toLocaleTimeString() };
    setTeamInvites && setTeamInvites(prev => [newInvite, ...prev]);
    if (addNotification) {
      // Notify sender
      addNotification({ msg: `You invited ${handle} to join your team`, icon: 'Users', color: '#22d3ee', type: 'teamInviteSent', time: 'just now', inviterHandle: '@you', inviterName: 'You', inviteeHandle: handle });
      // Simulate invite arriving in invitee's notifications
      setTimeout(() => {
        addNotification({ msg: `@you invited you to join their team`, icon: 'Users', color: '#22d3ee', type: 'teamInvite', time: 'just now', inviterHandle: '@you', inviterName: 'You', inviterAv: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=60&h=60&fit=crop' });
      }, 500);
    }
    setTeamInviteSent(true);
    setTimeout(() => { setTeamInviteSent(false); setTeamInviteInput(''); setShowTeamInvite(false); }, 3000);
  };

  const handleAddAsTeamMember = () => {
    setMenuOpen(false);
    const h = user.handle || user.name;
    const newInvite = { id: Date.now(), from: '@you', to: h, ts: new Date().toLocaleTimeString() };
    setTeamInvites && setTeamInvites(prev => [newInvite, ...prev]);
    if (addNotification) {
      addNotification({ msg: `You invited ${user.full || user.name} to join your team`, icon: 'Users', color: '#22d3ee', type: 'teamInviteSent', time: 'just now', inviterHandle: '@you', inviterName: 'You', inviteeHandle: h });
      // Simulate invite landing in their notifications
      setTimeout(() => {
        addNotification({ msg: `@you invited you to join their team`, icon: 'Users', color: '#22d3ee', type: 'teamInvite', time: 'just now', inviterHandle: '@you', inviterName: 'You', inviterAv: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=60&h=60&fit=crop' });
      }, 500);
    }
    showToast && showToast('Invite sent — waiting for them to accept', '#22d3ee');
  };

  const handleRemoveTeamMember = (handle) => {
    setConfirmRemoveTeam(handle);
  };

  const confirmRemove = () => {
    const h = confirmRemoveTeam;
    setTeamRelationships && setTeamRelationships(prev => prev.filter(r => !(r.a === myHandle && r.b === h) && !(r.a === h && r.b === myHandle)));
    setConfirmRemoveTeam(null);
    showToast && showToast('Team member removed', '#f59e0b');
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,.86)', backdropFilter: 'blur(22px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, isolation: 'isolate' }} onClick={onClose}>
      <div style={{ background: 'rgba(8,12,26,.99)', borderRadius: 28, border: '1px solid rgba(255,255,255,.1)', width: '100%', maxWidth: 860, maxHeight: '90vh', overflow: 'visible', animation: 'sU .35s cubic-bezier(.22,1,.36,1)', display: 'flex', flexDirection: 'column', boxShadow: `0 0 0 1px rgba(255,255,255,.06),0 32px 80px rgba(0,0,0,.8),0 0 60px ${color}18` }} onClick={e => e.stopPropagation()}>

        {/* ── BANNER ── */}
        <div style={{ borderTopLeftRadius: 27, borderTopRightRadius: 27, overflow: 'hidden', flexShrink: 0 }}>
          <div style={{ height: 140, background: `linear-gradient(135deg,${color}2a,rgba(168,85,247,.22),rgba(236,72,153,.12))`, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)`, backgroundSize: '28px 28px' }} />
            <div style={{ position: 'absolute', right: -30, top: -30, width: 220, height: 220, borderRadius: '50%', background: `${color}18`, filter: 'blur(50px)', pointerEvents: 'none' }} />
            {/* 3-dot menu — FIX #6 robust close */}
            <div ref={menuBtnRef} style={{ position: 'absolute', top: 14, right: 56, zIndex: 10 }}>
              <button
                onClick={() => { if (!menuOpen) { const r = menuBtnRef.current?.getBoundingClientRect(); setMenuBtnRect(r || null); } setMenuOpen(m => !m); }}
                style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(0,0,0,.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.14)', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MoreHorizontal size={15} />
              </button>
              {menuOpen && menuBtnRect && (
                <div ref={menuPanelRef} style={{ position: 'fixed', top: (menuBtnRect?.bottom || 80) + 4, right: window.innerWidth - (menuBtnRect?.right || 100), background: 'rgba(5,8,20,.99)', borderRadius: 14, border: '1px solid rgba(255,255,255,.14)', minWidth: 220, overflow: 'visible', zIndex: 98000, animation: 'hoverMenuSlide .18s ease', boxShadow: '0 16px 48px rgba(0,0,0,.7)' }}>
                  {[
                    [addedToList ? Minus : Plus, addedToList ? 'Remove from My List' : 'Add to My List', '#22d3ee', () => { if (addedToList) { confirm({ msg: 'Remove from My List?', okLabel: 'Remove', okColor: '#ec4899', onOk: () => { setMyList(l => l.filter(x => (x.name || x.handle) !== (user.name || user.handle))); setAddedToList(false); setMenuOpen(false); } }); } else { const alreadyIn = myList.some(x => (x.name || x.handle) === (user.name || user.handle)); if (!alreadyIn) { setMyList(l => [user, ...l]); } setAddedToList(true); setMenuOpen(false); if (showToast) showToast(`Added ${user.full || user.name} to My List ✓`, '#22d3ee'); } }],
                    ...(!isMe ? [[UserPlus, 'Add as Team Member', '#10b981', handleAddAsTeamMember]] : []),
                    [UserX, isBlocked ? 'Unblock Creator' : 'Block Creator', '#ec4899', () => {
                      const handle = user?.handle || user?.name || '';
                      if (isBlocked) {
                        if (setBlockedUsers) setBlockedUsers(b => b.filter(h => h !== handle));
                        setMenuOpen(false); showToast && showToast('Creator unblocked', '#ec4899');
                      } else {
                        confirm({
                          msg: `Block ${user?.full || user?.name || 'this creator'}?`, sub: "They won't be able to see your content and you won't see theirs.", okLabel: 'Block', okColor: '#ec4899', icon: '🚫', onOk: () => {
                            if (setBlockedUsers) setBlockedUsers(b => [...b.filter(h => h !== handle), handle]);
                            setMenuOpen(false); showToast && showToast('Creator blocked', '#ec4899');
                          }
                        });
                      }
                    }],
                    [Flag, reported ? 'Reported ✓' : 'Report Creator', '#ef4444', () => { if (!reported) { setReported(true); setMenuOpen(false); showToast && showToast('Creator reported — we will review', '#ef4444'); } }],
                    ...(isMe && onOpenSettings ? [[Settings, 'Settings', '#a855f7', () => { setMenuOpen(false); onOpenSettings('general'); }]] : []),
                  ].map(([Ico, label, col, action], mi, marr) => (
                    <React.Fragment key={label}>
                      <button onClick={action} style={{ width: '100%', padding: '11px 18px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 9, fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, color: 'rgba(255,255,255,.85)', textAlign: 'left', transition: 'background .15s', whiteSpace: 'nowrap' }}
                        onMouseEnter={e => e.currentTarget.style.background = `${col}14`}
                        onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                        <Ico size={13} color={col} /><span style={{ color: col }}>{label}</span>
                      </button>
                      {mi < marr.length - 1 && <div style={{ height: 1, background: 'rgba(255,255,255,.05)', margin: '0 12px' }} />}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
            <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 14, width: 34, height: 34, borderRadius: '50%', background: 'rgba(0,0,0,.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.14)', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
              <X size={15} />
            </button>
          </div>
        </div>

        {/* ── PROFILE HEADER ── */}
        <div style={{ padding: '0 28px', marginTop: -56, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 14 }}>
            {/* Avatar + mini works carousel */}
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
              {/* FIX #3: Avatar with lightbox + edit overlay for own profile */}
              <div style={{ position: 'relative', flexShrink: 0, cursor: 'pointer' }}
                onMouseEnter={() => setAvatarHover(true)}
                onMouseLeave={() => setAvatarHover(false)}
                onClick={() => setAvatarLightbox(true)}>
                <img src={user.av} alt="" style={{ width: 100, height: 100, borderRadius: 22, border: `4px solid rgba(8,12,26,.99)`, objectFit: 'cover', boxShadow: `0 0 0 2px ${color}66,0 8px 24px rgba(0,0,0,.6)`, transition: 'transform .2s', transform: avatarHover ? 'scale(1.04)' : 'scale(1)' }} />
                {user.on && <div style={{ position: 'absolute', bottom: 7, right: 7, width: 16, height: 16, borderRadius: '50%', background: '#10b981', border: '3px solid rgba(8,12,26,.99)', boxShadow: '0 0 8px #10b981' }} />}
                {/* FIX #2: Edit pencil overlay — only own avatar */}
                {isMe && onOpenSettings && (
                  <div
                    onClick={e => { e.stopPropagation(); onOpenSettings('profile'); }}
                    style={{ position: 'absolute', top: 0, right: 0, width: 32, height: 32, borderRadius: '0 22px 0 12px', background: avatarHover ? 'linear-gradient(135deg,rgba(168,85,247,.88),rgba(34,211,238,.88))' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: avatarHover ? 1 : 0, transition: 'all .2s', cursor: 'pointer', backdropFilter: avatarHover ? 'blur(4px)' : 'none', border: avatarHover ? '1px solid rgba(255,255,255,.2)' : 'none' }}>
                    <Edit3 size={14} color="white" strokeWidth={2.5} />
                  </div>
                )}
              </div>
              {/* Works carousel */}
              <div style={{ display: 'flex', gap: 6, paddingBottom: 6 }}>
                {showWork.slice(0, 4).map((p, i) => (
                  <div key={p.id} style={{ width: 58, height: 58, borderRadius: 12, overflow: 'hidden', flexShrink: 0, border: `2px solid ${carouselIdx === i ? color : 'rgba(255,255,255,.1)'}`, transition: 'all .4s ease', transform: carouselIdx === i ? 'scale(1.1)' : 'scale(1)', opacity: carouselIdx === i ? 1 : .5, animation: carouselIdx === i ? 'carouselFade .4s ease' : 'none', boxShadow: carouselIdx === i ? `0 0 14px ${color}55` : '' }}>
                    <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>
            {/* Action buttons — FIX #2: removed Edit Profile/Settings pills, kept Follow + others */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, paddingBottom: 7, flexWrap: 'wrap' }}>
              <FollowBtn following={followed} onFollow={onFollow} size='md' />
              <button style={{ padding: '7px 13px', borderRadius: 10, border: `1px solid ${color}44`, background: `${color}0e`, cursor: 'pointer', color, fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 5, transition: 'all .2s' }}
                onClick={() => onGetInTouch && onGetInTouch({ cr: user.handle || user.name, price: 'Negotiable', av: user.av })}
                onMouseEnter={e => e.currentTarget.style.background = `${color}20`}
                onMouseLeave={e => e.currentTarget.style.background = `${color}0e`}>
                <MessageSquare size={11} />Get in Touch
              </button>
              <div style={{ position: 'relative' }} onMouseEnter={() => setShowInviteDrop(true)} onMouseLeave={() => { setShowInviteDrop(false); setShowWsPicker(false); }}>
                <button style={{ padding: '7px 13px', borderRadius: 10, border: '1px solid rgba(168,85,247,.4)', background: showInviteDrop ? 'rgba(168,85,247,.2)' : 'rgba(168,85,247,.1)', cursor: 'pointer', color: '#a855f7', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 5, transition: 'all .2s' }}>
                  <Zap size={11} />Invite to Vibe<ChevronDown size={10} style={{ marginLeft: 2, transition: 'transform .2s', transform: showInviteDrop ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {showInviteDrop && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 6px)', right: 0, background: 'rgba(6,9,24,.98)', borderRadius: 13, border: '1px solid rgba(168,85,247,.3)', minWidth: 230, zIndex: 50, animation: 'hoverMenuSlide .18s ease', boxShadow: '0 16px 48px rgba(0,0,0,.8)', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
                    <button onClick={() => { setShowInviteDrop(false); onInvite && onInvite(user, null); }} style={{ width: '100%', padding: '11px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 9, fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700, color: 'rgba(255,255,255,.85)', textAlign: 'left', transition: 'background .15s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,.12)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                      <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(168,85,247,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Plus size={12} color="#a855f7" /></div>
                      <div><div style={{ fontSize: 11 }}>New Vibe Connect</div><div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>Create a fresh workspace</div></div>
                    </button>
                    <div style={{ height: 1, background: 'rgba(255,255,255,.06)' }} />
                    <button onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,.1)'; setShowWsPicker(true); }} onMouseLeave={e => e.currentTarget.style.background = 'none'} style={{ width: '100%', padding: '11px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 9, fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 700, color: 'rgba(255,255,255,.85)', textAlign: 'left', transition: 'background .15s' }}>
                      <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(34,211,238,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Layers size={12} color="#22d3ee" /></div>
                      <div style={{ flex: 1 }}><div style={{ fontSize: 11, color: '#22d3ee' }}>Existing Workspace</div><div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{workspaces.filter(w => w.creator === "@you").length} active</div></div>
                      <ChevronDown size={10} style={{ color: 'var(--mu)', transform: showWsPicker ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .2s' }} />
                    </button>
                    {showWsPicker && (
                      <div style={{ background: 'rgba(255,255,255,.02)', borderTop: '1px solid rgba(34,211,238,.1)', maxHeight: 160, overflowY: 'auto' }}>
                        {workspaces.filter(w => w.creator === "@you").length === 0
                          ? <div style={{ padding: '12px 16px', fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>No workspaces yet</div>
                          : workspaces.filter(w => w.creator === "@you").map(ws => (
                            <button key={ws.id} onClick={() => { setShowInviteDrop(false); onInvite && onInvite(user, ws.id); }} style={{ width: '100%', padding: '9px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 600, color: 'rgba(255,255,255,.7)', textAlign: 'left', transition: 'background .15s' }}
                              onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,.08)'}
                              onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', flexShrink: 0 }} />
                              {ws.name}
                            </button>
                          ))
                        }
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name + bio */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, fontFamily: 'Orbitron', margin: 0, letterSpacing: '-.01em' }}>{user.full || user.name}</h2>
              <span style={{ fontSize: 10, color: color, fontFamily: 'JetBrains Mono', fontWeight: 700, padding: '3px 9px', borderRadius: 999, background: `${color}14`, border: `1px solid ${color}33` }}>{user.handle || user.name}</span>
              {user.role && <span style={{ fontSize: 9, color: 'rgba(255,255,255,.45)', fontFamily: 'JetBrains Mono', padding: '3px 9px', borderRadius: 999, background: 'rgba(255,255,255,.05)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{user.role}</span>}
              {/* Bug 3 fix: earned badge icons beside username */}
              {(() => { const bd = earnedBadges || []; const show = bd.slice(0, 4); const extra = bd.length - 4; const BADGE_COLOR = { 'starter': '#22d3ee', 'verified': '#a855f7', 'top_seller': '#f59e0b', 'collab_pro': '#10b981', 'trendsetter': '#ec4899', 'mentor': '#f59e0b', 'early_adopter': '#22d3ee' }; return show.length > 0 ? (<div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>{show.map(b => (<span key={b} title={b.replace(/_/g, ' ')} style={{ width: 20, height: 20, borderRadius: 6, background: BADGE_COLOR[b] + '22', border: `1px solid ${BADGE_COLOR[b] || '#a855f7'}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, cursor: 'default' }}>{b === 'starter' ? '⭐' : b === 'verified' ? '✓' : b === 'top_seller' ? '🏆' : b === 'collab_pro' ? '🤝' : b === 'trendsetter' ? '🔥' : b === 'mentor' ? '📚' : b === 'early_adopter' ? '🚀' : '🏅'}</span>))}{extra > 0 && <span style={{ fontSize: 9, color: 'rgba(255,255,255,.4)', fontFamily: 'JetBrains Mono' }}>+{extra}</span>}</div>) : null; })()}
            </div>
            {user.username && (
              <div style={{ fontSize: 11, color: '#22d3ee', fontFamily: 'JetBrains Mono', opacity: .8, marginBottom: 4 }}>@{user.username}</div>
            )}
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', lineHeight: 1.7, margin: 0, maxWidth: 480 }}>{user.bio || 'Building the future of vibe coding. Creator, developer, dreamer.'}</p>
          </div>

          {/* Tags */}
          {user.tags && user.tags.length > 0 && (
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 14 }}>
              {user.tags.map(t => (<span key={t} className="tag" style={{ background: 'rgba(255,255,255,.05)', color: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,255,255,.08)' }}>{t}</span>))}
            </div>
          )}

          {/* Stats bar */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,.03)', borderRadius: 14, border: '1px solid var(--br)', overflow: 'hidden', marginBottom: 0 }}>
            {[['Projects', user.projects || 12, '#22d3ee'], ['Followers', user.followers || '1.2k', '#a855f7'], ['Following', '342', '#ec4899'], ['Likes', '8.4k', '#f59e0b'], ['Team', myTeamMembers.length || 0, '#10b981']].map(([l, v, c], i, arr) => (
              <div key={l} style={{ flex: 1, padding: '11px 6px', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid var(--br)' : 'none', cursor: 'pointer', transition: 'background .2s' }}
                onMouseEnter={e => e.currentTarget.style.background = `${c}0a`}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div className="O" style={{ fontSize: 14, fontWeight: 900, color: c }}>{v}</div>
                <div style={{ fontSize: 8, color: 'var(--mu)', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '.07em', marginTop: 1 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* FIX #4: New tab order: Works, Drafts, Collections, Team, Liked Vibes, My List, About */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--br)', marginTop: 2, overflowX: 'auto' }} className="thin-x">
            {[['work', 'Work'], ...(isMe ? [['drafts', 'Drafts']] : []), ['collection', 'Collections'], ['team', 'Team'], ['liked', 'Liked Vibes'], ['mylist', 'My List'], ['about', 'About']].map(([id, l]) => (
              <button key={id} onClick={() => setTab(id)} style={{ padding: '10px 18px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 11, fontFamily: 'Rajdhani', transition: 'all .2s', background: 'transparent', color: tab === id ? 'white' : 'rgba(255,255,255,.4)', borderBottom: tab === id ? `2px solid ${color}` : '2px solid transparent', marginBottom: -1, letterSpacing: '.05em', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {l}{id === 'drafts' && drafts.length > 0 && <span style={{ marginLeft: 4, background: 'rgba(168,85,247,.3)', borderRadius: 999, padding: '1px 5px', fontSize: 9, color: '#a855f7', fontFamily: 'JetBrains Mono' }}>{drafts.length}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* ── TAB CONTENT ── */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px 30px', overscrollBehavior: 'contain' }}>
          {tab === 'work' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {isMe && (
                <button onClick={() => onRequestUpload && onRequestUpload(user)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '14px', borderRadius: 14, border: '2px dashed rgba(34,211,238,.35)', background: 'rgba(34,211,238,.04)', cursor: 'pointer', transition: 'all .2s', color: '#22d3ee', fontWeight: 700, fontSize: 13, fontFamily: 'Rajdhani', letterSpacing: '.04em' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,.1)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.7)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(34,211,238,.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,.04)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.35)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <Upload size={18} />
                  Upload Your Work
                </button>
              )}
              {!isMe && <div style={{ fontSize: 10, color: 'rgba(255,255,255,.25)', fontFamily: 'JetBrains Mono', textAlign: 'center', padding: '6px 0' }}>{user?.full || user?.name}'s work</div>}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gap: 14 }}>
                {showWork.map(p => {
                  const media = p.media && p.media.length > 0 ? p.media : null;
                  return (<WorkCard key={p.id || p.title} p={p} media={media} />);
                })}
              </div>
            </div>
          )}

          {/* Drafts tab — 4-column grid, fixed 4:3 cards */}
          {tab === 'drafts' && (
            <div>
              {drafts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'rgba(255,255,255,0.25)', fontFamily: 'JetBrains Mono,monospace' }}>
                  <Layers size={36} style={{ opacity: .3, margin: '0 auto 14px', display: 'block', color: '#a855f7' }} />
                  <div style={{ fontSize: 13, marginBottom: 4, color: 'rgba(255,255,255,.35)', fontFamily: 'Rajdhani', fontWeight: 700 }}>No drafts yet</div>
                  <div style={{ fontSize: 10 }}>Your saved works will appear here</div>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
                  {drafts.map((d, i) => {
                    const thumb = d.files && d.files.length > 0 ? d.files[d.thumbIdx || 0] : null;
                    return (
                      <div key={d.id || i} className="gl" style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.2s', display: 'flex', flexDirection: 'column' }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.5)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = ''}>
                        {/* Fixed 4:3 thumbnail */}
                        <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', overflow: 'hidden', backgroundColor: '#050810', flexShrink: 0 }}>
                          <div style={{ position: 'absolute', inset: 0 }}>
                            {thumb ? (
                              thumb.type === 'video'
                                ? <video src={thumb.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                : <img src={thumb.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            ) : (
                              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FileText size={24} color="rgba(255,255,255,.2)" />
                              </div>
                            )}
                          </div>
                          <div style={{ position: 'absolute', top: 6, left: 6, padding: '2px 7px', borderRadius: 999, backgroundColor: 'rgba(0,0,0,0.75)', border: '1px solid rgba(168,85,247,0.4)', fontSize: 8, color: '#a855f7', fontFamily: 'JetBrains Mono,monospace', fontWeight: 700 }}>DRAFT</div>
                        </div>
                        <div style={{ padding: '10px 12px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: '#e2e8f0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.title || 'Untitled Draft'}</div>
                          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono,monospace' }}>{(d.files || []).length} file{(d.files || []).length !== 1 ? 's' : ''}</div>
                          <div style={{ display: 'flex', gap: 5, marginTop: 'auto' }}>
                            <button onClick={() => onEditDraft && onEditDraft(d, i)} style={{ flex: 1, padding: '6px 0', borderRadius: 7, border: '1px solid rgba(34,211,238,0.4)', backgroundColor: 'rgba(34,211,238,0.06)', color: '#22d3ee', cursor: 'pointer', fontSize: 10, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, transition: 'all 0.18s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(34,211,238,0.16)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(34,211,238,0.06)'}>
                              <Edit3 size={9} />Edit
                            </button>
                            <button onClick={() => onPublishDraft && onPublishDraft(d, i)} style={{ flex: 1, padding: '6px 0', borderRadius: 7, border: 'none', background: 'linear-gradient(90deg,#22d3ee,#a855f7)', color: '#fff', cursor: 'pointer', fontSize: 10, fontWeight: 800, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, transition: 'all 0.18s' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.82'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                              <Rocket size={9} />Publish
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
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

          {/* FIX #5: Team tab */}
          {tab === 'team' && (
            <div>
              {isMe && (
                <button onClick={() => setShowTeamInvite(true)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderRadius: 12, border: '2px dashed rgba(34,211,238,.4)', background: 'rgba(34,211,238,.04)', cursor: 'pointer', transition: 'all .2s', color: '#22d3ee', fontWeight: 700, fontSize: 12, fontFamily: 'Rajdhani', width: '100%', marginBottom: 16 }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,.1)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.7)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,.04)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.4)'; }}>
                  <UserPlus size={15} />Add Team Member
                </button>
              )}
              {myTeamProfiles.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'rgba(255,255,255,0.25)', fontFamily: 'JetBrains Mono', fontSize: 11 }}>
                  <Users size={32} style={{ opacity: .3, margin: '0 auto 12px', display: 'block', color: '#10b981' }} />
                  <div style={{ fontSize: 12, marginBottom: 4 }}>No team members yet.</div>
                  <div>{isMe ? 'Add people to collaborate with you.' : 'This creator hasn\'t built a team yet.'}</div>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 12 }}>
                  {myTeamProfiles.map((m, mi) => (
                    <TeamMemberCard key={m.handle || mi} member={m}
                      isOwner={isMe || teamRelationships.some(r => (r.a === '@you' && r.b === (m.handle || m.name)) || (r.b === '@you' && r.a === (m.handle || m.name)))}
                      onRemove={handleRemoveTeamMember}
                      onOpen={(mem) => { if (onOpenNestedProfile) onOpenNestedProfile(mem); else setNestedProfileUser(mem); }} />
                  ))}
                </div>
              )}
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

          {tab === 'mylist' && (
            <div>
              <div style={{ fontSize: 11, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 16 }}>{isMe ? 'Your watchlist' : 'Creators ' + (user.full || user.name) + ' is watching'}</div>
              {myList.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--mu)' }}>
                  <Users size={32} style={{ opacity: .25, margin: '0 auto 12px', display: 'block' }} />
                  <div style={{ fontSize: 12 }}>No creators in list yet.</div>
                  <div style={{ fontSize: 10, marginTop: 4 }}>Add creators using the ⋯ menu on their profile</div>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12 }}>
                  {myList.map(d => (
                    <MyListCard
                      key={d.name || d.handle}
                      d={d}
                      isMe={isMe}
                      onOpen={onOpenNestedProfile}
                      onRemove={rem => setMyList(l => l.filter(x => (x.name || x.handle) !== (rem.name || rem.handle)))}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'about' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', lineHeight: 1.85, marginBottom: 20 }}>{user.bio || 'Full-stack developer and UI designer specializing in immersive web experiences. Building at the intersection of code and creativity for the VibeVerse.'}</div>
                <div className="gl" style={{ borderRadius: 14, padding: 16, marginBottom: 16 }}>
                  <div className="O" style={{ fontSize: 9, color: 'var(--mu)', letterSpacing: '.1em', marginBottom: 12, fontWeight: 700 }}>TOP SKILLS</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {(user.tags || ['React', 'Three.js', 'UI/UX', 'Node.js', 'TypeScript']).map(t => (
                      <span key={t} className="tag" style={{ background: 'rgba(34,211,238,.08)', color: '#22d3ee', border: '1px solid rgba(34,211,238,.2)' }}>{t}</span>
                    ))}
                  </div>
                </div>
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
                  <div style={{ display: 'flex', gap: 0, flexWrap: 'nowrap', justifyContent: 'space-between', paddingBottom: 4, overflow: 'visible' }}>
                    {BADGE_DEFS.map(b => (
                      <div key={b.id} style={{ flex: '1 1 0', display: 'flex', justifyContent: 'center', overflow: 'visible' }}>
                        <BadgeIcon badge={b} earned={earnedBadges.includes(b.id)} earnedDate="Feb 2026" size={28} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* #3: Avatar lightbox — stopPropagation so profile modal stays open */}
      {nestedProfileUser && (
        <UserProfileModal
          user={nestedProfileUser}
          onClose={() => setNestedProfileUser(null)}
          followed={false}
          onFollow={() => { }}
          earnedBadges={nestedProfileUser.badges || ['starter']}
          onGetInTouch={onGetInTouch}
          onInvite={onInvite}
          workspaces={workspaces}
          showToast={showToast}
          uploads={uploads}
          drafts={drafts}
          teamRelationships={teamRelationships}
          setTeamRelationships={setTeamRelationships}
          teamInvites={teamInvites}
          setTeamInvites={setTeamInvites}
          addNotification={addNotification}
          resolveNotification={resolveNotification}
          onOpenSettings={onOpenSettings}
          myList={myList || []} setMyList={setMyList}
        />
      )}
      {avatarLightbox && (
        <div onClick={e => { e.stopPropagation(); setAvatarLightbox(false); }} style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn .2s ease' }}>
          <img src={user.av} alt="" onClick={e => e.stopPropagation()} style={{ width: 280, height: 280, borderRadius: '50%', objectFit: 'cover', border: `4px solid ${color}88`, boxShadow: `0 0 0 1px ${color}44,0 0 60px ${color}44,0 24px 80px rgba(0,0,0,.8)`, animation: 'sU .25s ease' }} />
          <button onClick={e => { e.stopPropagation(); setAvatarLightbox(false); }} style={{ position: 'absolute', top: 20, right: 20, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}><X size={16} /></button>
        </div>
      )}

      {/* FIX #5: Team Invite Modal */}
      {showTeamInvite && (
        <div onClick={() => setShowTeamInvite(false)} style={{ position: 'fixed', inset: 0, zIndex: 10001, background: 'rgba(0,0,0,.8)', backdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'rgba(8,12,26,.99)', borderRadius: 22, border: '1px solid rgba(34,211,238,.2)', width: '100%', maxWidth: 420, padding: '32px 28px', boxShadow: '0 0 80px rgba(34,211,238,.08),0 32px 80px rgba(0,0,0,.8)', animation: 'sU .25s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(34,211,238,.1)', border: '1px solid rgba(34,211,238,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UserPlus size={16} color="#22d3ee" />
              </div>
              <div>
                <div className="O" style={{ fontSize: 15, fontWeight: 800, color: 'white' }}>Invite a Team Member</div>
                <div style={{ fontSize: 10, color: '#8899bb', fontFamily: 'JetBrains Mono', marginTop: 2 }}>// TEAM.invite_member()</div>
              </div>
            </div>
            {teamInviteSent ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle size={36} color="#10b981" style={{ margin: '0 auto 12px', display: 'block' }} />
                <div style={{ fontSize: 14, color: '#10b981', fontFamily: 'Rajdhani', fontWeight: 700 }}>Invite sent — waiting for them to accept</div>
              </div>
            ) : (
              <>
                <input value={teamInviteInput} onChange={e => setTeamInviteInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendTeamInvite()} placeholder="Enter @username or email"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #1a2540', background: '#080c1a', color: '#ccd6f6', fontSize: 13, fontFamily: 'Rajdhani', outline: 'none', marginBottom: 16, boxSizing: 'border-box', transition: 'border-color .2s,box-shadow .2s' }}
                  onFocus={e => { e.target.style.borderColor = '#22d3ee'; e.target.style.boxShadow = '0 0 0 3px rgba(34,211,238,.08)'; }}
                  onBlur={e => { e.target.style.borderColor = '#1a2540'; e.target.style.boxShadow = 'none'; }} />
                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={sendTeamInvite}
                    style={{ flex: 1, padding: '12px', borderRadius: 999, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg,#22d3ee,#a855f7)', color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, animation: 'purchaseGlow 3s ease infinite', boxShadow: '0 4px 20px rgba(34,211,238,.25)' }}>
                    <UserPlus size={14} />Add
                  </button>
                  <button onClick={() => setShowTeamInvite(false)}
                    style={{ padding: '12px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.04)', cursor: 'pointer', color: 'rgba(255,255,255,.55)', fontSize: 13, fontWeight: 600, fontFamily: 'Rajdhani', transition: 'all .2s' }}>
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* FIX #5: Remove team member confirmation */}
      {confirmRemoveTeam && (
        <div onClick={() => setConfirmRemoveTeam(null)} style={{ position: 'fixed', inset: 0, zIndex: 10001, background: 'rgba(0,0,0,.8)', backdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'rgba(8,12,26,.99)', borderRadius: 22, border: '1px solid rgba(239,68,68,.25)', width: '100%', maxWidth: 380, padding: '28px', boxShadow: '0 32px 80px rgba(0,0,0,.8)', animation: 'sU .25s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Trash2 size={20} color="#ef4444" />
              <div className="O" style={{ fontSize: 14, fontWeight: 800, color: 'white' }}>Remove Team Member?</div>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', lineHeight: 1.7, marginBottom: 22, fontFamily: 'Rajdhani' }}>Are you sure you want to remove <strong style={{ color: 'white' }}>{confirmRemoveTeam}</strong> from your team? This will also remove you from their team.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={confirmRemove} style={{ flex: 1, padding: '11px', borderRadius: 999, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg,#ef4444,#dc2626)', color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani' }}>Yes, Remove</button>
              <button onClick={() => setConfirmRemoveTeam(null)} style={{ padding: '11px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.04)', cursor: 'pointer', color: 'rgba(255,255,255,.55)', fontSize: 13, fontWeight: 600, fontFamily: 'Rajdhani' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
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
    <div style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, overscrollBehavior: 'none' }} onClick={onClose} onWheel={e => e.stopPropagation()} onTouchMove={e => e.stopPropagation()}>
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
const CreatorsSidebar = ({ posts, followed, setFollowed, showToast, onProfileClick }) => {
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
          <div onClick={() => onProfileClick && onProfileClick({ av: c.av, handle: c.user, name: c.user, full: c.user, role: 'Creator', on: i < 2 })} style={{ cursor: onProfileClick ? 'pointer' : 'default', transition: 'transform .18s' }}
            onMouseEnter={e => onProfileClick && (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <Av src={c.av} sz={30} on={i < 2} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div onClick={() => onProfileClick && onProfileClick({ av: c.av, handle: c.user, name: c.user, full: c.user, role: 'Creator', on: i < 2 })} style={{ fontSize: 11, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', cursor: onProfileClick ? 'pointer' : 'default', transition: 'color .15s' }}
              onMouseEnter={e => onProfileClick && (e.target.style.color = '#a855f7')}
              onMouseLeave={e => e.target.style.color = ''}>{c.user}</div>
            <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{c.score} pts today</div>
          </div>
          <FollowBtn following={!!followed[c.user]} onFollow={() => { setFollowed(f => ({ ...f, [c.user]: !f[c.user] })); showToast(followed[c.user] ? 'Unfollowed' : 'Following ✓', followed[c.user] ? '#ec4899' : '#10b981'); }} size="sm" />
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
    <div className="gl" style={{ borderRadius: 17, padding: 17, overflow: 'visible' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 13 }}>
        <Award size={16} color="#f59e0b" />
        <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Your Badges</span>
        {earnedBadges.length > 0 && <span style={{ marginLeft: 'auto', fontSize: 9, color: '#f59e0b', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{earnedBadges.length}/{BADGE_DEFS.length}</span>}
      </div>
      {/* All badges with full BadgeIcon effects */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14, justifyContent: 'space-evenly', paddingBottom: 4, overflow: 'visible' }}>
        {BADGE_DEFS.map(b => (
          <div key={b.id} style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <BadgeIcon badge={b} earned={earnedBadges.includes(b.id)} size={30} earnedDate="Feb 2026" />
          </div>
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
const InviteWorkspaceModal = ({ user, av, workspaces = [], onClose, onSend }) => {
  const [step, setStep] = React.useState('choose');
  const myWS = workspaces.filter(w => w.creator === '@you');
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1150, background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
      <div style={{ background: 'rgba(8,12,26,.97)', borderRadius: 22, border: '1px solid rgba(34,211,238,.2)', width: 380, padding: '28px', animation: 'sU .25s ease' }} onClick={e => e.stopPropagation()}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          {av ? <img src={av} alt="" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', display: 'block', border: '2px solid rgba(34,211,238,.3)' }} /> : <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(34,211,238,.12)', border: '1px solid rgba(34,211,238,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}><UserCheck size={22} color="#22d3ee" strokeWidth={1.8} /></div>}
          <h3 className="O" style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>Invite to Vibe Connect</h3>
          <p style={{ fontSize: 11, color: 'var(--mu)', lineHeight: 1.6 }}>Choose how to connect with <strong style={{ color: '#22d3ee' }}>{user}</strong></p>
        </div>
        {step === 'choose' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button onClick={() => onSend(null)} style={{ padding: '14px 18px', borderRadius: 13, border: '1px solid rgba(168,85,247,.35)', background: 'rgba(168,85,247,.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', transition: 'all .2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,.16)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(168,85,247,.08)'}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(168,85,247,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Plus size={18} color="#a855f7" /></div>
              <div><div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', color: '#a855f7' }}>New Vibe Connect</div><div style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginTop: 2 }}>Start a fresh workspace just for you two</div></div>
            </button>
            <button onClick={() => myWS.length > 0 ? setStep('picker') : onSend(null)} style={{ padding: '14px 18px', borderRadius: 13, border: '1px solid rgba(34,211,238,.3)', background: 'rgba(34,211,238,.06)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', transition: 'all .2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,211,238,.06)'}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(34,211,238,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Layers size={18} color="#22d3ee" /></div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', color: '#22d3ee' }}>Add to Existing Workspace</div><div style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginTop: 2 }}>{myWS.length > 0 ? `${myWS.length} workspace${myWS.length !== 1 ? 's' : ''} available` : 'No workspaces yet'}</div></div>
            </button>
            <button onClick={onClose} style={{ marginTop: 4, padding: '9px', borderRadius: 10, border: '1px solid rgba(255,255,255,.1)', background: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 600 }}>Cancel</button>
          </div>
        )}
        {step === 'picker' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <button onClick={() => setStep('choose')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mu)', padding: 4 }}><ArrowLeft size={14} /></button>
              <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: 'rgba(255,255,255,.5)' }}>Select a workspace</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, maxHeight: 200, overflowY: 'auto' }}>
              {myWS.map(ws => (
                <button key={ws.id} onClick={() => onSend(ws.id)} style={{ padding: '12px 14px', borderRadius: 11, border: '1px solid rgba(34,211,238,.2)', background: 'rgba(34,211,238,.04)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left', transition: 'all .18s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,211,238,.04)'}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 6px #22d3ee', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ws.name}</div>
                    <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{ws.members.length} members</div>
                  </div>
                </button>
              ))}
            </div>
            <button onClick={onClose} style={{ marginTop: 12, width: '100%', padding: '9px', borderRadius: 10, border: '1px solid rgba(255,255,255,.1)', background: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 11, fontFamily: 'Rajdhani' }}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};
const InviteModal = ({ user, onClose, onSend }) => <InviteWorkspaceModal user={user} av={null} workspaces={[]} onClose={onClose} onSend={() => onSend()} />;


/* ─── POST CARD ────────────────────────────────────────────── */
const PostCard = ({
  p, lk, bm, notifs, followed, hidden, setLk, setBm, setNotifs, setFollowed,
  setHidden, showToast, onInvite, onHashClick, hashFil, userStats, setUserStats,
  checkBadge, feedFilter, onProfileClick, workspaces = [],
  onBookmarkComment = null, onBookmarkPost = null
}) => {
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
      {showInvite && <InviteWorkspaceModal user={p.user} av={p.av} workspaces={workspaces} onClose={() => setShowInvite(false)} onSend={(wsId) => { showToast(wsId ? `Added to workspace ✓` : `New Vibe Connect created ✓`, '#22d3ee'); setShowInvite(false); if (onInvite) onInvite({ user: p.user, av: p.av }, wsId); }} />}
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
                    ][0].map(({ Icon, iconColor, label, action }) => (
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
            <button onClick={e => { triggerFlyHeart(e, !!lk[p.id]); doLike(); }} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: lk[p.id] ? '#ec4899' : 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, borderRadius: 8, transition: 'all .15s' }}>
              <Heart size={13} fill={lk[p.id] ? '#ec4899' : 'none'} color={lk[p.id] ? '#ec4899' : 'var(--mu)'} />{p.lk + (lk[p.id] ? 1 : 0)}
            </button>
            <button onClick={() => setCommenting(c => !c)} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: commenting ? '#22d3ee' : 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, borderRadius: 8, transition: 'all .15s' }}>
              <MessageCircle size={13} />{p.cm}
            </button>
            <button onClick={(e) => {
              const wasBookmarked = bm[p.id];
              triggerFlyBm(e, wasBookmarked);
              setBm(x => ({ ...x, [p.id]: !x[p.id] }));
              showToast(wasBookmarked ? 'Removed bookmark' : 'Bookmarked ✓', '#a855f7');
              if (!wasBookmarked && onBookmarkComment) {
                onBookmarkComment({ id: `comm_${p.id}`, text: p.txt, preview: (p.txt || '').slice(0, 120), postTitle: 'Community Post', author: p.user, source: 'community', bookmarkedAt: Date.now() });
              }
              if (!wasBookmarked && onBookmarkPost) { onBookmarkPost({ id: p.id, txt: p.txt, user: p.user, source: 'community', bookmarkedAt: Date.now() }); }
            }} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', background: 'none', border: 'none', cursor: 'pointer', color: bm[p.id] ? '#a855f7' : 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600, borderRadius: 8, transition: 'all .15s' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
          <Av src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=80&h=80&fit=crop" sz={36} />

        </div>
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
const Community = ({
  extraPosts, onInviteToVibe, workspaces = [], uploads = [], uploadDrafts = [],
  setUploadDrafts, onUploadPublish, onUploadDraft, onRequestUpload, onOpenSettings,
  teamRelationships = [], setTeamRelationships, teamInvites = [], setTeamInvites,
  collabRequests = [], setCollabRequests, addNotification, resolveNotification,
  globalFollowed = {}, setGlobalFollowed, globalBm = {}, setGlobalBm,
  earnedBadges: propEarnedBadges, setEarnedBadges: propSetEarnedBadges,
  userProfile = null, uploadInitialDraftRef = null, onBookmarkComment = null,
  onBookmarkPost = null, myList = [], setMyList = null
}) => {
  const vw = useWindowWidth();
  const [showGetInTouch, setShowGetInTouch] = useState(null);
  useLayoutEffect(() => { window.scrollTo(0, 0); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }, []);
  const [posts, setPosts] = useState(POSTS_DATA);
  const [lk, setLk] = useState({});
  // ── SHARED STATE: use global props ──
  const followed = globalFollowed;
  const setFollowed = setGlobalFollowed || (() => { });
  const bm = globalBm;
  const setBm = setGlobalBm || (() => { });
  const earnedBadges = propEarnedBadges || ['starter'];
  const setEarnedBadges = propSetEarnedBadges || (() => { });
  // ── LOCAL UI STATE only ──
  const [notifs, setNotifs] = useState({});
  const [hidden, setHidden] = useState({});
  const [toast, setToast] = useState(null);
  const [profileUser, setProfileUser] = useState(null);
  const [hashFil, setHashFil] = useState(null);
  const [feedFilter, setFeedFilter] = useState('discover'); // 'discover'|'following'|'all'
  const [userStats, setUserStats] = useState({ posts: 1, likes: 1, comments: 1 });
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
    setPosts(p => [{ id: Date.now(), user: userProfile?.handle || '@you', av: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=80&h=80&fit=crop', time: 'just now', txt, tags, img: imgSrc || null, lk: 0, cm: 0, isFollowed: false }, ...p]);
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
      {showGetInTouch && <GetInTouchCard service={showGetInTouch} onClose={() => setShowGetInTouch(null)} />}
      {profileUser && <UserProfileModal user={profileUser} onClose={() => setProfileUser(null)} followed={!!followed[profileUser.handle || profileUser.name]} onFollow={() => { const k = profileUser.handle || profileUser.name; setFollowed(f => ({ ...f, [k]: !f[k] })); }} earnedBadges={profileUser.badges || earnedBadges} onGetInTouch={u => setShowGetInTouch({ cr: u.cr || u.handle || u.name, price: "Negotiable", av: u.av })} onInvite={(u, wsId) => { if (onInviteToVibe) onInviteToVibe(u, wsId); else showToast(`Invite sent to ${u.full || u.name} ✓`, '#a855f7'); }} workspaces={workspaces} showToast={showToast} uploads={uploads} uploadDrafts={uploadDrafts} onUploadPublish={onUploadPublish} onUploadDraft={onUploadDraft} onRequestUpload={(user) => { const u = user || profileUser; const fn = () => setProfileUser(u); setProfileUser(null); if (onRequestUpload) onRequestUpload(u, fn); }} drafts={uploadDrafts} onEditDraft={(d, i) => { if (uploadInitialDraftRef) uploadInitialDraftRef.current = d; const fn = () => setProfileUser({ handle: userProfile?.handle || '@you', name: userProfile?.name || 'You', crFull: userProfile?.name || 'You', full: userProfile?.name || 'You', av: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=160&h=160&fit=crop', on: userProfile?.showOnline !== false, color: '#22d3ee', projects: 0, followers: '0', role: 'creator', badges: ['starter'] }); setProfileUser(null); if (onRequestUpload) onRequestUpload({ handle: '@you' }, fn); }} onPublishDraft={(d, i) => { const missingTitle = !d.title?.trim(); const missingTags = !d.tags || d.tags.length === 0 || d.tags.every(t => t === 'Upload'); const missingAlt = d.files && d.files.some(f => !f.alt?.trim()); if (missingTitle || missingTags || missingAlt) { if (uploadInitialDraftRef) uploadInitialDraftRef.current = { ...d, _openStep: 'details' }; const fn = () => setProfileUser({ handle: userProfile?.handle || '@you', name: userProfile?.name || 'You', crFull: userProfile?.name || 'You', full: userProfile?.name || 'You', av: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=160&h=160&fit=crop', on: userProfile?.showOnline !== false, color: '#22d3ee', projects: 0, followers: '0', role: 'creator', badges: ['starter'] }); setProfileUser(null); if (onRequestUpload) onRequestUpload({ handle: '@you' }, fn); return; } setUploadDrafts && setUploadDrafts(prev => prev.filter((_, j) => j !== i)); const published = { ...d, id: Date.now(), img: d.files?.[d.thumbIdx || 0]?.url || '', media: d.files?.map((f, mi) => ({ src: f.url, type: f.type, alt: f.alt, layout: f.layout, i: mi })) || [], cr: '@you', crFull: 'You', price: '', rt: 5, views: 0, lk: 0, saves: 0 }; if (onUploadPublish) onUploadPublish(published); setProfileUser(null); showToast('Published! ✓', '#10b981'); }} onOpenSettings={onOpenSettings} teamRelationships={teamRelationships} setTeamRelationships={setTeamRelationships} teamInvites={teamInvites} setTeamInvites={setTeamInvites} addNotification={addNotification} resolveNotification={resolveNotification} onOpenNestedProfile={m => { const d = DESIGNERS_DATA.find(x => x.name === m.handle || x.name === (m.handle || '').replace('@', '')); if (d) setProfileUser({ ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] }); }} userProfile={userProfile} myList={myList || []} setMyList={setMyList} />}
      {vw > 600 && <WorldBanner title="VIBE COMMUNITY" label="// NEURAL NETWORK ACTIVE" color1="#10b981" color2="#22d3ee" height={120} />}

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
        <div style={{ position: 'sticky', top: 64, zIndex: 120, marginLeft: -22, marginRight: -22, marginBottom: 14, padding: '0 22px' }}>
          <div style={{ background: 'rgba(3,7,18,.99)', backdropFilter: 'blur(24px)', borderRadius: 12, border: '1px solid rgba(34,211,238,.2)', padding: '9px 16px', display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'rgba(34,211,238,.8)', fontFamily: 'JetBrains Mono', boxShadow: '0 4px 24px rgba(3,7,18,.98),0 0 0 22px rgba(3,7,18,.99)' }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: 'linear-gradient(135deg,#22d3ee,#a855f7)', flexShrink: 0 }} /> Posts from people you follow have a <span style={{ color: '#22d3ee', fontWeight: 700, borderBottom: '1px solid rgba(34,211,238,.5)' }}>cyan left border</span>
          </div>
        </div>
      )}

      <div className="main-sidebar-grid" style={{ display: 'grid', gridTemplateColumns: vw <= 700 ? '1fr' : '1fr 285px', gap: 18, alignItems: 'start' }}>
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
              onInvite={(u, wsId) => { if (onInviteToVibe) onInviteToVibe(u, wsId); }}
              onProfileClick={u => setProfileUser(u)} workspaces={workspaces}
              onBookmarkComment={onBookmarkComment}
              onBookmarkPost={onBookmarkPost} />
          ))}
        </div>

        {/* Sidebar — sticky so it stays while feed scrolls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13, position: 'sticky', top: 110, alignSelf: 'flex-start', maxHeight: 'calc(100vh - 130px)', overflowY: 'auto', overflowX: 'visible', overscrollBehavior: 'contain', scrollbarWidth: 'none', msOverflowStyle: 'none', zIndex: 10 }}>
          <style>{`.sidebar-scroll::-webkit-scrollbar{display:none}`}</style>
          <TrendingSidebar posts={posts} hashFil={hashFil} setHashFil={setHashFil} />
          <CreatorsSidebar posts={posts} followed={followed} setFollowed={setFollowed} showToast={showToast} onProfileClick={u => { const d = DESIGNERS_DATA.find(x => x.name === u.handle || x.name === u.name); setProfileUser(d ? { ...d, handle: d.name, full: d.full, badges: d.badges || ["starter"] } : { ...u, badges: u.badges || ["starter"] }); }} />
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
const Academy = ({
  onOpenSettings, userProfile = null, earnedBadges = ['starter'],
  globalFollowed = {}, setGlobalFollowed, addNotification,
  teamRelationships = [], setTeamRelationships, teamInvites = [], setTeamInvites,
  workspaces = [], globalUploads = [], onBookmarkPost = null, myList = [], setMyList = null
}) => {
  const vw = useWindowWidth();
  const [tab, setTab] = useState('courses');
  useLayoutEffect(() => { window.scrollTo(0, 0); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }, []);
  const [openCourse, setOpenCourse] = useState(null);
  const [completed, setCompleted] = useState({});
  const [votes, setVotes] = useState({});
  const [openGuide, setOpenGuide] = useState(null);
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [openCourse, openGuide, tab]);
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
    window.scrollTo(0, 0); document.documentElement.scrollTop = 0;
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
    window.scrollTo(0, 0); document.documentElement.scrollTop = 0;
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
      {vw > 600 && <WorldBanner title="VIBE ACADEMY" label="// SKILL_TREE.LOAD()" color1="#a855f7" color2="#ec4899" height={140} />}
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


/* ─── INITIAL WORKSPACES DATA ─────────────────────────────── */
const INIT_WS = [
  {
    id: 'ws1', name: 'NeuroFeed AI Dashboard', creator: '@you',
    members: [
      { handle: '@you', av: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', role: 'creator', perms: { canAdd: true, canRemove: true, canAI: true } },
      { handle: '@neonphoenix', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop', role: 'member', perms: { canAdd: false, canRemove: false, canAI: true } },
      { handle: '@starweaver', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=40&h=40&fit=crop', role: 'member', perms: { canAdd: false, canRemove: false, canAI: false } },
    ],
    aiConnected: { claude: true, copilot: false, gpt: false },
    teamMsgs: [
      { id: 1, handle: '@neonphoenix', av: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop', text: 'Just pushed the new auth flow — should we use JWT or sessions?', ts: '2:34 PM', votes: { up: 2, down: 0 }, pinned: false, pushed: false, file: null },
      { id: 2, handle: '@starweaver', av: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=40&h=40&fit=crop', text: 'JWT for stateless scaling — sessions for simplicity. What traffic volume are we expecting?', ts: '2:36 PM', votes: { up: 3, down: 0 }, pinned: false, pushed: false, file: null },
      { id: 3, handle: '@you', av: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', text: "Targeting 10k DAU to start. Let's go JWT + refresh tokens.", ts: '2:38 PM', votes: { up: 4, down: 1 }, pinned: true, pushed: false, file: null },
    ],
    privatePrompts: [
      { id: 1, text: 'Implement JWT authentication with refresh tokens for the NeuroFeed dashboard. Include: token generation, middleware validation, refresh endpoint, and secure httpOnly cookie storage.', ts: '2:42 PM', aiResponse: true },
    ],
  },
];

/* ─── CONNECT ─────────────────────────────────────────────── */
const Connect = ({
  privateChat, onClearPrivateChat, connectInvites = [], setConnectInvites,
  workspaces, setWorkspaces, activeConnectWsId, setActiveConnectWsId,
  onPushToMarket, onOpenSettings, userProfile = null, globalFollowed = {},
  setGlobalFollowed, addNotification = null, resolveNotification = null,
  teamRelationships = [], setTeamRelationships, teamInvites = [], setTeamInvites,
  collabRequests = [], setCollabRequests, globalUploads = [], uploadDrafts = [],
  earnedBadges = ['starter'], myList = [], setMyList = null
}) => {
  const confirm = useConfirm();
  const vw = useWindowWidth();
  useLayoutEffect(() => { window.scrollTo(0, 0); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }, []);
  // Workspaces lifted to App level — use props
  const [activeWsId, setActiveWsId] = useState(activeConnectWsId || 'ws1');
  const [panel, setPanel] = useState('teamChat'); // teamChat | privateConnect | members | aiExt
  const [teamInput, setTeamInput] = useState('');
  const [privateInput, setPrivateInput] = useState('');
  const [toast, setToast] = useState(null);
  const [showInviteInput, setShowInviteInput] = useState(false);
  const [inviteHandle, setInviteHandle] = useState('');
  const [showCreateWS, setShowCreateWS] = useState(false);
  const [newWsName, setNewWsName] = useState('');
  const [userVotes, setUserVotes] = useState({});
  const [showDM, setShowDM] = useState(!!privateChat);
  const [dmMsgs, setDmMsgs] = useState([]);
  const [dmInput, setDmInput] = useState('');
  const dmEndRef = useRef(null);
  const teamEndRef = useRef(null);
  const privateEndRef = useRef(null);
  const [connectProfileUser, setConnectProfileUser] = useState(null);

  const showToast = (m, c = '#22d3ee') => { setToast({ m, c }); setTimeout(() => setToast(null), 2200); };

  React.useEffect(() => {
    // privateChat is kept for DM panel visibility only — workspace creation moved to accept flow
    if (privateChat) { setShowDM(true); }
  }, [privateChat]);

  const activeWs = workspaces.find(w => w.id === activeWsId) || workspaces[0];
  const amCreator = activeWs?.creator === '@you';
  const myPerms = activeWs?.members.find(m => m.handle === '@you')?.perms || { canAdd: false, canRemove: false, canAI: false };

  const sendTeamMsg = () => {
    if (!teamInput.trim()) return;
    const now = new Date(); const ts = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, teamMsgs: [...w.teamMsgs, { id: Date.now(), handle: '@you', av: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', text: teamInput, ts, votes: { up: 0, down: 0 }, pinned: false, pushed: false, file: null }] } : w));
    setTeamInput('');
    setTimeout(() => teamEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const pushToAI = (msg) => {
    if (!amCreator) { showToast('Only the creator can push to AI', '#f59e0b'); return; }
    setWorkspaces(ws => ws.map(w => {
      if (w.id !== activeWsId) return w;
      return {
        ...w,
        teamMsgs: w.teamMsgs.map(m => m.id === msg.id ? { ...m, pushed: true } : m),
        privatePrompts: [...w.privatePrompts, { id: Date.now(), text: msg.text, ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), aiResponse: false }],
      };
    }));
    showToast('Pushed to Private Vibe Connect → AI ✓', '#22d3ee');
    setPanel('privateConnect');
    setTimeout(() => privateEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  const pinMsg = (id) => {
    setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, teamMsgs: w.teamMsgs.map(m => m.id === id ? { ...m, pinned: !m.pinned } : m) } : w));
  };

  const voteMsg = (id, dir) => {
    const key = `${id}_${dir}`;
    if (userVotes[key]) return;
    setUserVotes(v => ({ ...v, [key]: true }));
    setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, teamMsgs: w.teamMsgs.map(m => m.id === id ? { ...m, votes: { ...m.votes, [dir]: m.votes[dir] + 1 } } : m) } : w));
  };

  const inviteMember = () => {
    if (!inviteHandle.trim()) return;
    if (activeWs.members.find(m => m.handle === inviteHandle)) { showToast('Already a member', '#f59e0b'); return; }
    const newM = { handle: inviteHandle, av: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop', role: 'member', perms: { canAdd: false, canRemove: false, canAI: false } };
    setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, members: [...w.members, newM] } : w));
    setInviteHandle(''); setShowInviteInput(false);
    showToast(`${inviteHandle} invited ✓`, '#10b981');
  };

  const removeMember = (handle) => {
    if (handle === '@you') { showToast('Cannot remove creator', '#f59e0b'); return; }
    confirm({ msg: `Remove ${handle}?`, sub: 'They will lose access to this workspace.', okLabel: 'Remove', okColor: '#ec4899', onOk: () => { setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, members: w.members.filter(m => m.handle !== handle) } : w)); } })
    showToast(`${handle} removed`, 'rgba(255,255,255,.5)');
  };

  const togglePerm = (handle, perm) => {
    setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, members: w.members.map(m => m.handle === handle ? { ...m, perms: { ...m.perms, [perm]: !m.perms[perm] } } : m) } : w));
  };

  const sendPrivatePrompt = () => {
    if (!privateInput.trim() || !amCreator) return;
    const now = new Date(); const ts = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, privatePrompts: [...w.privatePrompts, { id: Date.now(), text: privateInput, ts, aiResponse: false }] } : w));
    setPrivateInput('');
    setTimeout(() => privateEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const createWorkspace = () => {
    if (!newWsName.trim()) return;
    const ws = {
      id: 'ws_' + Date.now(), name: newWsName, creator: '@you',
      members: [{ handle: '@you', av: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', role: 'creator', perms: { canAdd: true, canRemove: true, canAI: true } }],
      aiConnected: { claude: false, copilot: false, gpt: false }, teamMsgs: [], privatePrompts: [],
    };
    setWorkspaces(w => [...w, ws]); setActiveWsId(ws.id); setNewWsName(''); setShowCreateWS(false);
    showToast(`Workspace "${newWsName}" created ✓`, '#22d3ee');
  };

  const toggleAI = (key) => {
    setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, aiConnected: { ...w.aiConnected, [key]: !w.aiConnected[key] } } : w));
    showToast('AI extension updated', '#a855f7');
  };

  const MY_AV = 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop';

  return (
    <>
      {connectProfileUser && (
        <UserProfileModal
          user={connectProfileUser}
          onClose={() => setConnectProfileUser(null)}
          followed={!!globalFollowed[connectProfileUser.handle || connectProfileUser.name]}
          onFollow={() => { const k = connectProfileUser.handle || connectProfileUser.name; if (setGlobalFollowed) setGlobalFollowed(f => ({ ...f, [k]: !f[k] })); }}
          earnedBadges={connectProfileUser.badges || ['starter']}
          onGetInTouch={u => { showToast(`Get in touch with ${u.cr || u.name} ✓`, '#22d3ee'); }}
          onInvite={() => { }}
          workspaces={workspaces}
          showToast={showToast}
          uploads={globalUploads}
          drafts={uploadDrafts}
          teamRelationships={teamRelationships}
          setTeamRelationships={setTeamRelationships}
          teamInvites={teamInvites}
          setTeamInvites={setTeamInvites}
          addNotification={addNotification}
          resolveNotification={resolveNotification}
          onOpenSettings={onOpenSettings}
          myList={myList || []} setMyList={setMyList}
          onOpenNestedProfile={m => { const d = DESIGNERS_DATA.find(x => x.name === m.handle || x.name === (m.handle || '').replace('@', '')); setConnectProfileUser(d ? { ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] } : { handle: m.handle, name: m.handle, full: m.handle || m.name, av: m.av, on: false, role: 'member', tags: [], badges: ['starter'] }); }}
        />
      )}
      <div style={{ padding: '0 22px 80px' }}>
        {toast && <Toast msg={toast.m} color={toast.c} />}
        {vw > 600 && <WorldBanner title="VIBE CONNECT" label="// VIBE.CODE.TOGETHER()" color1="#22d3ee" color2="#a855f7" height={120} />}

        {/* Workspace selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, overflowX: 'auto', paddingBottom: 4 }}>
          {workspaces.map(ws => (
            <div key={ws.id} style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
              <button onClick={() => setActiveWsId(ws.id)} style={{ padding: '7px 14px', borderRadius: ws.id === activeWsId && ws.creator === '@you' && workspaces.length > 1 ? '10px 0 0 10px' : '10px', borderRight: ws.id === activeWsId && ws.creator === '@you' && workspaces.length > 1 ? 'none' : undefined, border: `1px solid ${ws.id === activeWsId ? 'rgba(34,211,238,.5)' : 'rgba(255,255,255,.1)'}`, background: ws.id === activeWsId ? 'rgba(34,211,238,.12)' : 'rgba(255,255,255,.03)', cursor: 'pointer', color: ws.id === activeWsId ? '#22d3ee' : 'var(--mu)', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', whiteSpace: 'nowrap', transition: 'all .2s', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: ws.id === activeWsId ? '#22d3ee' : 'rgba(255,255,255,.2)', display: 'inline-block' }} />
                {ws.name}
              </button>
              {ws.id === activeWsId && ws.creator === '@you' && workspaces.length > 1 && (
                <button onClick={() => { const rest = workspaces.filter(x => x.id !== ws.id); setWorkspaces(rest); setActiveWsId(rest[0]?.id); showToast('Workspace deleted', '#ec4899'); }} title="Delete workspace" style={{ padding: '7px 8px', border: '1px solid rgba(34,211,238,.4)', borderLeft: 'none', borderRadius: '0 10px 10px 0', background: 'rgba(34,211,238,.08)', cursor: 'pointer', color: 'rgba(236,72,153,.7)', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(236,72,153,.15)'; e.currentTarget.style.color = '#ec4899'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,.08)'; e.currentTarget.style.color = 'rgba(236,72,153,.7)'; }}>✕</button>
              )}
            </div>
          ))}
          <button onClick={() => setShowCreateWS(true)} style={{ padding: '7px 12px', borderRadius: 10, border: '1px dashed rgba(34,211,238,.3)', background: 'rgba(34,211,238,.05)', cursor: 'pointer', color: 'rgba(34,211,238,.6)', fontSize: 11, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0, transition: 'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,211,238,.05)'}>
            <Plus size={12} />New Workspace
          </button>
        </div>

        {/* Main layout: sidebar + content */}
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 14, height: 'calc(100vh - 260px)', minHeight: 480 }}>

          {/* Left sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Workspace info */}
            <div className="gl" style={{ borderRadius: 14, padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <Zap size={13} color="#22d3ee" />
                <span style={{ fontSize: 11, fontWeight: 800, fontFamily: 'Orbitron', color: '#22d3ee' }}>WORKSPACE</span>
              </div>
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 8 }} className="wsNameWrap">
                <span style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.3 }}>{activeWs?.name}</span>
                {amCreator && (
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    <ChevronDown size={11} color="rgba(255,255,255,.35)" style={{ cursor: 'pointer', transition: 'color .15s' }}
                      onMouseEnter={e => { const r = e.currentTarget.getBoundingClientRect(); const d = e.currentTarget.nextSibling; d.style.display = 'block'; d.style.top = (r.bottom + 2) + 'px'; d.style.left = (r.left - 10) + 'px'; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={e => { const el = e.currentTarget; setTimeout(() => { const d = el?.nextSibling; if (d && !d.matches(':hover')) { d.style.display = 'none'; } if (el) el.style.color = 'rgba(255,255,255,.35)'; }, 150); }} />
                    <div style={{ display: 'none', position: 'fixed', background: 'rgba(5,8,20,.98)', borderRadius: 10, border: '1px solid rgba(255,255,255,.12)', minWidth: 160, zIndex: 98000, boxShadow: '0 8px 28px rgba(0,0,0,.7)', paddingTop: 4, paddingBottom: 4, marginTop: 4 }}
                      onMouseEnter={e => e.currentTarget.style.display = 'block'}
                      onMouseLeave={e => { e.currentTarget.style.display = 'none'; const chevron = e.currentTarget.previousSibling; if (chevron) chevron.style.color = 'rgba(255,255,255,.35)'; }}>
                      <button onClick={() => { confirm({ msg: 'Rename workspace', input: activeWs?.name || '', okLabel: 'Rename', onOk: (n) => { if (n && n.trim()) setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, name: n.trim() } : w)); } }); }} style={{ width: '100%', padding: '9px 14px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 700, color: 'rgba(255,255,255,.8)', textAlign: 'left', transition: 'background .15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,.1)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                        <Edit3 size={10} color="#22d3ee" />Rename
                      </button>
                      <button onClick={() => { if (workspaces.length > 1) confirm({ msg: 'Delete this workspace?', sub: 'All messages and members will be removed.', okLabel: 'Delete', okColor: '#ec4899', icon: '🗑️', onOk: () => { const rest = workspaces.filter(x => x.id !== activeWsId); setWorkspaces(rest); setActiveWsId(rest[0]?.id); showToast('Workspace deleted', '#ec4899'); } }); }} style={{ width: '100%', padding: '9px 14px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 700, color: 'rgba(255,255,255,.8)', textAlign: 'left', transition: 'background .15s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(236,72,153,.1)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                        <Trash2 size={10} color="#ec4899" />Delete Workspace
                      </button>
                    </div>
                  </span>
                )}
              </div>
              <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 6 }}>Creator: {activeWs?.creator}</div>
              <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{activeWs?.members.length} member{activeWs?.members.length !== 1 ? 's' : ''}</div>
            </div>
            {/* Push to Market */}
            {amCreator && (
              <button
                onClick={() => onPushToMarket && onPushToMarket()}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 12, border: 'none', background: 'linear-gradient(90deg,#a855f7,#22d3ee)', color: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 800, fontFamily: 'Orbitron,sans-serif', letterSpacing: '0.04em', boxShadow: '0 4px 20px rgba(168,85,247,0.3)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(168,85,247,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,85,247,0.3)'; }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                Push to Market
              </button>
            )}

            {/* Navigation */}
            <div className="gl" style={{ borderRadius: 14, padding: 8 }}>
              {[
                [MessageCircle, 'Team Chat', 'teamChat', '#22d3ee'],
                [Zap, 'Vibe Prompt Feed', 'privateConnect', '#a855f7'],
                [Columns, 'Split View', 'splitView', '#ec4899'],
                [Users, 'Members', 'members', '#10b981'],
                [Sparkles, 'AI Extensions', 'aiExt', '#f59e0b'],
              ].map(([Ico, label, id, col]) => (
                <button key={id} onClick={() => setPanel(id)} style={{ width: '100%', padding: '9px 12px', borderRadius: 9, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 11, fontFamily: 'Rajdhani', transition: 'all .18s', background: panel === id ? `${col}18` : 'transparent', color: panel === id ? col : 'rgba(255,255,255,.45)', display: 'flex', alignItems: 'center', gap: 9, marginBottom: 3, outline: 'none' }}
                  onMouseEnter={e => { if (panel !== id) { e.currentTarget.style.background = `${col}0e`; e.currentTarget.style.color = `${col}cc`; e.currentTarget.style.transform = 'translateX(3px)'; } }}
                  onMouseLeave={e => { if (panel !== id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,.45)'; e.currentTarget.style.transform = 'translateX(0)'; } }}
                >
                  <Ico size={13} color={panel === id ? col : 'rgba(255,255,255,.3)'} />{label}
                </button>
              ))}
            </div>

            {/* AI status */}
            <div className="gl" style={{ borderRadius: 14, padding: 12 }}>
              <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.06em' }}>AI Connected</div>
              {Object.entries(activeWs?.aiConnected || {}).map(([k, v]) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, fontFamily: 'Rajdhani', textTransform: 'capitalize' }}>{k === 'copilot' ? 'GitHub Copilot' : k === 'gpt' ? 'GPT-4o' : k === 'claude' ? 'Claude' : 'AI'}</span>
                  <div style={{ width: 28, height: 15, borderRadius: 999, background: v ? '#22d3ee22' : 'rgba(255,255,255,.06)', border: `1px solid ${v ? '#22d3ee66' : 'rgba(255,255,255,.1)'}`, position: 'relative', cursor: (amCreator || myPerms.canAI) ? 'pointer' : 'default' }}
                    onClick={() => (amCreator || myPerms.canAI) && toggleAI(k)}>
                    <div style={{ position: 'absolute', top: 2, left: v ? 13 : 2, width: 9, height: 9, borderRadius: '50%', background: v ? '#22d3ee' : 'rgba(255,255,255,.3)', transition: 'left .2s' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Pinned messages */}
            {(activeWs?.teamMsgs || []).filter(m => m.pinned).length > 0 && (
              <div className="gl" style={{ borderRadius: 14, padding: 12, flex: 1, overflowY: 'auto' }}>
                <div style={{ fontSize: 9, color: '#f59e0b', fontFamily: 'JetBrains Mono', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 4 }}><Pin size={9} color="#f59e0b" />PINNED</div>
                {(activeWs?.teamMsgs || []).filter(m => m.pinned).map(m => (
                  <div key={m.id} style={{ padding: '7px 9px', borderRadius: 8, background: 'rgba(245,158,11,.06)', border: '1px solid rgba(245,158,11,.15)', marginBottom: 5 }}>
                    <div style={{ fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,.7)', lineHeight: 1.4, marginBottom: 4 }}>{m.text.slice(0, 80)}{m.text.length > 80 ? '…' : ''}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ fontSize: 8, color: '#10b981', fontFamily: 'JetBrains Mono' }}>▲{m.votes.up}</span>
                      <span style={{ fontSize: 8, color: '#ec4899', fontFamily: 'JetBrains Mono' }}>▼{m.votes.down}</span>
                      {amCreator && !m.pushed && (
                        <button onClick={() => pushToAI(m)} style={{ marginLeft: 'auto', padding: '2px 7px', borderRadius: 4, border: '1px solid rgba(168,85,247,.4)', background: 'rgba(168,85,247,.1)', cursor: 'pointer', color: '#a855f7', fontSize: 7, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 3 }}><Zap size={7} />Push to AI</button>
                      )}
                      {m.pushed && <span style={{ marginLeft: 'auto', fontSize: 7, color: '#22d3ee', fontFamily: 'JetBrains Mono' }}>✓ Pushed</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main content area */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>

            {panel === 'splitView' && (
              <div style={{ display: 'flex', gap: 10, height: '100%', overflow: 'hidden' }}>
                {/* Team Chat - left half */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'rgba(255,255,255,.02)', borderRadius: 14, border: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(34,211,238,.05)', borderRadius: '14px 14px 0 0' }}>
                    <MessageCircle size={13} color="#22d3ee" /><span style={{ fontSize: 11, fontWeight: 700, color: '#22d3ee', fontFamily: 'Rajdhani' }}>Team Chat</span>
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 7, scrollbarWidth: 'thin' }}>
                    {activeWs?.teamMsgs?.map(m => (
                      <div key={m.id} style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                        {m.av ? <img src={m.av} alt="" style={{ width: 22, height: 22, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} /> : <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(34,211,238,.2)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Sparkles size={9} color="#22d3ee" /></div>}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 9, color: 'rgba(255,255,255,.5)', fontFamily: 'JetBrains Mono', marginBottom: 2 }}>{m.handle} · {m.ts}</div>
                          <div style={{ fontSize: 10, color: 'rgba(255,255,255,.85)', lineHeight: 1.5, fontFamily: 'Rajdhani', fontWeight: 500, wordBreak: 'break-word' }}>{m.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '8px 10px', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', gap: 6 }}>
                    <input placeholder="Team message..." style={{ flex: 1, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '6px 10px', color: 'white', fontSize: 10, fontFamily: 'Rajdhani', outline: 'none' }}
                      onKeyDown={e => { if (e.key === 'Enter' && e.target.value.trim()) { const txt = e.target.value.trim(); e.target.value = ''; setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, teamMsgs: [...w.teamMsgs, { id: Date.now(), handle: '@you', av: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', text: txt, ts: 'just now', votes: { up: 0, down: 0 }, pinned: false, pushed: false, file: null }] } : w)) } }} />
                  </div>
                </div>
                {/* Vibe Prompt Feed - right half */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'rgba(255,255,255,.02)', borderRadius: 14, border: '1px solid rgba(255,255,255,.06)' }}>
                  <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(168,85,247,.05)', borderRadius: '14px 14px 0 0' }}>
                    <Zap size={13} color="#a855f7" /><span style={{ fontSize: 11, fontWeight: 700, color: '#a855f7', fontFamily: 'Rajdhani' }}>Vibe Prompt Feed</span>
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 7, scrollbarWidth: 'thin' }}>
                    {activeWs?.privatePrompts?.length === 0 && <div style={{ textAlign: 'center', padding: 20, color: 'rgba(255,255,255,.3)', fontSize: 10, fontFamily: 'JetBrains Mono' }}>No AI prompts yet. Push messages to the feed!</div>}
                    {activeWs?.privatePrompts?.map((p, i) => (
                      <div key={p.id || i} style={{ padding: '8px 10px', borderRadius: 9, background: 'rgba(168,85,247,.08)', border: '1px solid rgba(168,85,247,.15)' }}>
                        <div style={{ fontSize: 9, color: '#a855f7', fontFamily: 'JetBrains Mono', marginBottom: 3 }}>Vibe Prompt · {p.ts}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,.85)', lineHeight: 1.5, fontFamily: 'Rajdhani', fontWeight: 500 }}>{p.text}</div>
                        {p.aiResponse && <div style={{ marginTop: 6, padding: '5px 8px', borderRadius: 7, background: 'rgba(168,85,247,.12)', fontSize: 9, color: 'rgba(255,255,255,.6)', fontFamily: 'JetBrains Mono', lineHeight: 1.4, borderLeft: '2px solid #a855f7' }}>{p.aiResponse}</div>}
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '8px 10px', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', gap: 6 }}>
                    <input placeholder="Add a vibe prompt..." style={{ flex: 1, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(168,85,247,.2)', borderRadius: 8, padding: '6px 10px', color: 'white', fontSize: 10, fontFamily: 'Rajdhani', outline: 'none' }}
                      onKeyDown={e => { if (e.key === 'Enter' && e.target.value.trim()) { const txt2 = e.target.value.trim(); e.target.value = ''; const ts2 = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, privatePrompts: [...w.privatePrompts, { id: Date.now(), text: txt2, ts: ts2, aiResponse: false }] } : w)); } }} />
                  </div>
                </div>
              </div>
            )}

            {/* ── TEAM CHAT ── */}
            {panel === 'teamChat' && (
              <div className="gl" style={{ borderRadius: 16, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--br)', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                  <MessageCircle size={13} color="#22d3ee" />
                  <span style={{ fontSize: 11, fontWeight: 800, fontFamily: 'Orbitron', color: '#22d3ee' }}>TEAM CHAT</span>
                  <div style={{ marginLeft: 'auto', width: 7, height: 7, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                  <span style={{ fontSize: 9, color: '#10b981', fontFamily: 'JetBrains Mono' }}>{activeWs?.members.length} online</span>
                </div>
                <div style={{ flex: 1, overflowY: 'auto', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 0 }}>
                  {(activeWs?.teamMsgs || []).map(m => (
                    <div key={m.id}>
                      {m.system ? (
                        <div style={{ textAlign: 'center', padding: '6px 12px', borderRadius: 8, background: 'rgba(34,211,238,.06)', border: '1px solid rgba(34,211,238,.1)', fontSize: 9, color: 'rgba(255,255,255,.45)', fontFamily: 'JetBrains Mono', margin: '4px 0' }}>{m.text}</div>
                      ) : (
                        <div style={{ display: 'flex', gap: 8, flexDirection: m.handle === '@you' ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
                          {m.av && <img src={m.av} alt="" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '1.5px solid rgba(255,255,255,.1)' }} />}
                          <div style={{ maxWidth: '72%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3, flexDirection: m.handle === '@you' ? 'row-reverse' : 'row' }}>
                              <span style={{ fontSize: 9, fontWeight: 700, color: m.handle === '@you' ? '#22d3ee' : 'rgba(255,255,255,.6)', fontFamily: 'JetBrains Mono' }}>{m.handle}</span>
                              <span style={{ fontSize: 7, color: 'rgba(255,255,255,.25)', fontFamily: 'JetBrains Mono' }}>{m.ts}</span>
                              {m.pinned && <span style={{ fontSize: 7, color: '#f59e0b', fontFamily: 'JetBrains Mono' }}>📌</span>}
                            </div>
                            <div style={{ padding: '8px 11px', borderRadius: m.handle === '@you' ? '11px 2px 11px 11px' : '2px 11px 11px 11px', fontSize: 11, lineHeight: 1.55, background: m.handle === '@you' ? 'linear-gradient(135deg,rgba(34,211,238,.16),rgba(168,85,247,.16))' : 'rgba(255,255,255,.05)', border: `1px solid ${m.handle === '@you' ? 'rgba(34,211,238,.2)' : 'rgba(255,255,255,.07)'}`, marginBottom: 4 }}>{m.text}</div>
                            {m.file && <div style={{ fontSize: 9, color: '#22d3ee', fontFamily: 'JetBrains Mono', padding: '4px 8px', borderRadius: 6, background: 'rgba(34,211,238,.08)', border: '1px solid rgba(34,211,238,.2)', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 4 }}><FileText size={9} />{m.file}</div>}
                            {/* Vote + Pin + Push controls */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, opacity: .8 }}>
                              <button onClick={() => voteMsg(m.id, 'up')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 9, color: userVotes[`${m.id}_up`] ? '#10b981' : 'rgba(255,255,255,.35)', display: 'flex', alignItems: 'center', gap: 2, padding: '2px 4px', borderRadius: 4, transition: 'all .15s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                                onMouseLeave={e => e.currentTarget.style.color = userVotes[`${m.id}_up`] ? '#10b981' : 'rgba(255,255,255,.35)'}>
                                ▲{m.votes.up}
                              </button>
                              <button onClick={() => voteMsg(m.id, 'down')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 9, color: userVotes[`${m.id}_down`] ? '#ec4899' : 'rgba(255,255,255,.35)', display: 'flex', alignItems: 'center', gap: 2, padding: '2px 4px', borderRadius: 4, transition: 'all .15s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#ec4899'}
                                onMouseLeave={e => e.currentTarget.style.color = userVotes[`${m.id}_down`] ? '#ec4899' : 'rgba(255,255,255,.35)'}>
                                ▼{m.votes.down}
                              </button>
                              {amCreator && (
                                <>
                                  <button onClick={() => pinMsg(m.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 8, color: m.pinned ? '#f59e0b' : 'rgba(255,255,255,.3)', padding: '2px 5px', borderRadius: 4, fontFamily: 'JetBrains Mono', transition: 'color .15s' }}>{m.pinned ? '📌' : 'Pin'}</button>
                                  {!m.pushed ? (
                                    <button onClick={() => pushToAI(m)} style={{ padding: '2px 8px', borderRadius: 5, border: '1px solid rgba(168,85,247,.4)', background: 'rgba(168,85,247,.1)', cursor: 'pointer', color: '#a855f7', fontSize: 8, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 3, transition: 'all .15s' }}
                                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,.2)'}
                                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(168,85,247,.1)'}>
                                      <Zap size={8} />Push to AI
                                    </button>
                                  ) : <span style={{ fontSize: 7, color: '#22d3ee', fontFamily: 'JetBrains Mono', padding: '2px 6px', borderRadius: 4, background: 'rgba(34,211,238,.08)' }}>✓ Pushed</span>}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={teamEndRef} />
                </div>
                <div style={{ padding: '10px 14px', borderTop: '1px solid var(--br)', display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                  <label style={{ cursor: 'pointer', color: 'rgba(255,255,255,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4 }} title="Attach file">
                    <input type="file" style={{ display: 'none' }} onChange={e => { if (e.target.files[0]) { const f = e.target.files[0].name; setWorkspaces(ws => ws.map(w => w.id === activeWsId ? { ...w, teamMsgs: [...w.teamMsgs, { id: Date.now(), handle: '@you', av: MY_AV, text: `Shared a file: ${f}`, ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), votes: { up: 0, down: 0 }, pinned: false, pushed: false, file: f }] } : w)); showToast(`${f} shared ✓`, '#10b981'); setTimeout(() => teamEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); } }} />
                    <FileText size={14} />
                  </label>
                  <input value={teamInput} onChange={e => setTeamInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendTeamMsg()}
                    placeholder="Message team — agree on features, share ideas..."
                    style={{ flex: 1, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.09)', borderRadius: 10, padding: '8px 12px', color: 'white', fontSize: 11, fontFamily: 'Rajdhani', outline: 'none' }} />
                  <button onClick={sendTeamMsg} className="SB" style={{ padding: '7px 11px', borderRadius: 9, border: 'none', cursor: 'pointer', flexShrink: 0 }}><Send size={13} color="white" /></button>
                </div>
              </div>
            )}

            {/* ── PRIVATE AI PROMPT FEED ── */}
            {panel === 'privateConnect' && (
              <div className="gl" style={{ borderRadius: 16, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--br)', flexShrink: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <Zap size={13} color="#a855f7" />
                    <span style={{ fontSize: 11, fontWeight: 800, fontFamily: 'Orbitron', color: '#a855f7' }}>AI PROMPT FEED</span>
                    <div style={{ marginLeft: 'auto', padding: '2px 8px', borderRadius: 999, background: 'rgba(168,85,247,.12)', border: '1px solid rgba(168,85,247,.3)', fontSize: 8, color: '#a855f7', fontFamily: 'JetBrains Mono' }}>🔒 CREATOR ONLY</div>
                  </div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,.4)', fontFamily: 'JetBrains Mono' }}>Agreed features get pushed here from Team Chat → AI implements them</div>
                </div>
                <div style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
                  {(activeWs?.privatePrompts || []).length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--mu)' }}>
                      <Zap size={32} style={{ opacity: .2, margin: '0 auto 12px', display: 'block', color: '#a855f7' }} />
                      <div style={{ fontSize: 12 }}>No prompts yet</div>
                      <div style={{ fontSize: 10, marginTop: 6, color: 'rgba(255,255,255,.3)' }}>Pin & vote on messages in Team Chat, then push them here as AI prompts</div>
                    </div>
                  )}
                  {(activeWs?.privatePrompts || []).map((p, i) => (
                    <div key={p.id} style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(168,85,247,.2)' }}>
                      <div style={{ padding: '11px 14px', background: 'rgba(168,85,247,.08)', borderBottom: '1px solid rgba(168,85,247,.1)', display: 'flex', alignItems: 'center', gap: 7 }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,#a855f7,#22d3ee)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: 'white', flexShrink: 0 }}>{i + 1}</div>
                        <span style={{ fontSize: 9, color: '#a855f7', fontFamily: 'JetBrains Mono', flex: 1 }}>Vibe Prompt · {p.ts}</span>
                        {!p.aiResponse && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', animation: 'loadMoreHeart 1s ease-in-out infinite' }} title="Pending" />}
                        {p.aiResponse && <span style={{ fontSize: 8, color: '#10b981', fontFamily: 'JetBrains Mono' }}>✓ Implemented</span>}
                      </div>
                      <div style={{ padding: '12px 14px', background: 'rgba(0,0,0,.3)' }}>
                        <div style={{ fontSize: 11, lineHeight: 1.65, color: 'rgba(255,255,255,.85)', fontFamily: 'JetBrains Mono', fontSize: 10 }}>{p.text}</div>
                        {p.aiResponse && (
                          <div style={{ marginTop: 10, padding: '10px 12px', borderRadius: 9, background: 'rgba(34,211,238,.06)', border: '1px solid rgba(34,211,238,.15)' }}>
                            <div style={{ fontSize: 8, color: '#22d3ee', fontFamily: 'JetBrains Mono', marginBottom: 6 }}>✓ AI Response · Claude</div>
                            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.6)', lineHeight: 1.65, fontFamily: 'JetBrains Mono' }}>Implementation complete. JWT middleware added with refresh token rotation. Secure httpOnly cookies configured. Token validation runs on every protected route. Refresh endpoint at /auth/refresh with 7-day expiry.</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div ref={privateEndRef} />
                </div>
                {amCreator && (
                  <div style={{ padding: '10px 14px', borderTop: '1px solid var(--br)', display: 'flex', gap: 8, flexShrink: 0 }}>
                    <input value={privateInput} onChange={e => setPrivateInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && sendPrivatePrompt()}
                      placeholder="Write an Vibe prompt for the team to implement..."
                      style={{ flex: 1, background: 'rgba(168,85,247,.08)', border: '1px solid rgba(168,85,247,.2)', borderRadius: 10, padding: '8px 12px', color: 'white', fontSize: 11, fontFamily: 'JetBrains Mono', outline: 'none' }} />
                    <button onClick={sendPrivatePrompt} style={{ padding: '7px 14px', borderRadius: 9, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg,#a855f7,#7c3aed)', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 5 }}><Zap size={12} />Send</button>
                  </div>
                )}
                {!amCreator && (
                  <div style={{ padding: '10px 14px', borderTop: '1px solid var(--br)', textAlign: 'center', fontSize: 10, color: 'rgba(255,255,255,.3)', fontFamily: 'JetBrains Mono', flexShrink: 0 }}>
                    🔒 Only the workspace creator can send Vibe prompts
                  </div>
                )}
              </div>
            )}

            {/* ── MEMBERS ── */}
            {panel === 'members' && (
              <div className="gl" style={{ borderRadius: 16, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--br)', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                  <Users size={13} color="#10b981" />
                  <span style={{ fontSize: 11, fontWeight: 800, fontFamily: 'Orbitron', color: '#10b981' }}>MEMBERS</span>
                  {(amCreator || myPerms.canAdd) && (
                    <button onClick={() => setShowInviteInput(v => !v)} className="SB" style={{ marginLeft: 'auto', padding: '5px 12px', borderRadius: 8, border: 'none', cursor: 'pointer', color: 'white', fontSize: 10, fontWeight: 700, fontFamily: 'Rajdhani', display: 'flex', alignItems: 'center', gap: 5 }}><UserPlus size={11} />Invite</button>
                  )}
                </div>
                {showInviteInput && (
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--br)', display: 'flex', gap: 8, flexShrink: 0 }}>
                    <input value={inviteHandle} onChange={e => setInviteHandle(e.target.value)} onKeyDown={e => e.key === 'Enter' && inviteMember()} placeholder="@username" style={{ flex: 1, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(16,185,129,.3)', borderRadius: 9, padding: '7px 12px', color: 'white', fontSize: 11, fontFamily: 'JetBrains Mono', outline: 'none' }} />
                    <button onClick={inviteMember} style={{ padding: '7px 14px', borderRadius: 9, border: 'none', cursor: 'pointer', background: 'rgba(16,185,129,.2)', color: '#10b981', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani' }}>Invite</button>
                    <button onClick={() => { setShowInviteInput(false); setInviteHandle(''); }} style={{ padding: '7px', borderRadius: 9, border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,.06)', color: 'var(--mu)' }}>✕</button>
                  </div>
                )}
                <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px' }}>
                  {(activeWs?.members || []).map(m => (
                    <div key={m.handle} style={{ padding: '12px', borderRadius: 12, border: '1px solid rgba(255,255,255,.06)', background: 'rgba(255,255,255,.02)', marginBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: amCreator && m.handle !== '@you' ? 10 : 0 }}>
                        <img src={m.av} alt="" onClick={() => {
                          if (m.handle === '@you') {
                            setConnectProfileUser({ handle: userProfile?.handle || '@you', name: userProfile?.handle || '@you', full: userProfile?.name || 'You', av: userProfile?.avatar || m.av, on: userProfile?.showOnline !== false, role: 'creator', tags: [], badges: earnedBadges || ['starter'], bio: userProfile?.bio, location: userProfile?.location, website: userProfile?.website });
                          } else {
                            const d = DESIGNERS_DATA.find(x => x.name === m.handle || x.name === m.handle.replace('@', ''));
                            setConnectProfileUser(d ? { ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] } : { handle: m.handle, name: m.handle, full: m.handle, av: m.av, on: false, role: 'member', tags: [], badges: ['starter'] });
                          }
                        }}
                          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.borderColor = 'rgba(34,211,238,.5)'; }}
                          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; }}
                          style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,.1)', flexShrink: 0, cursor: 'pointer', transition: 'transform .15s,border-color .15s' }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 12, fontWeight: 700 }}>{m.handle}</div>
                          <div style={{ fontSize: 9, color: m.role === 'creator' ? '#f59e0b' : 'var(--mu)', fontFamily: 'JetBrains Mono', textTransform: 'uppercase' }}>{m.role}</div>
                        </div>
                        {amCreator && m.handle !== '@you' && (
                          <button onClick={() => removeMember(m.handle)} style={{ padding: '4px 9px', borderRadius: 7, border: '1px solid rgba(236,72,153,.3)', background: 'rgba(236,72,153,.08)', cursor: 'pointer', color: '#ec4899', fontSize: 9, fontFamily: 'Rajdhani', fontWeight: 600 }}>Remove</button>
                        )}
                        {m.handle === '@you' && <span style={{ fontSize: 8, padding: '2px 7px', borderRadius: 999, background: 'rgba(245,158,11,.12)', color: '#f59e0b', fontFamily: 'JetBrains Mono' }}>You</span>}
                        {m.handle === '@you' && onOpenSettings && (
                          <div style={{ display: 'flex', gap: 3, marginLeft: 4 }}>
                            <button onClick={() => onOpenSettings('profile')} style={{ padding: '2px 7px', borderRadius: 999, border: '1px solid rgba(168,85,247,.45)', background: 'rgba(168,85,247,.07)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2, transition: 'all .18s' }}
                              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,.18)' }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(168,85,247,.07)' }}>
                              <Edit3 size={8} color="#a855f7" /><span style={{ fontSize: 8, color: '#a855f7', fontFamily: 'Rajdhani', fontWeight: 700 }}>Profile</span>
                            </button>
                            <button onClick={() => onOpenSettings('general')} style={{ padding: '2px 7px', borderRadius: 999, border: '1px solid rgba(34,211,238,.45)', background: 'rgba(34,211,238,.07)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2, transition: 'all .18s' }}
                              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,.18)' }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,211,238,.07)' }}>
                              <Settings size={8} color="#22d3ee" /><span style={{ fontSize: 8, color: '#22d3ee', fontFamily: 'Rajdhani', fontWeight: 700 }}>Settings</span>
                            </button>
                          </div>
                        )}
                      </div>
                      {amCreator && m.handle !== '@you' && (
                        <div style={{ display: 'flex', gap: 10 }}>
                          {[['canAdd', 'Can Invite'], ['canRemove', 'Can Remove'], ['canAI', 'Can use AI']].map(([perm, label]) => (
                            <label key={perm} style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
                              <input type="checkbox" checked={!!m.perms[perm]} onChange={() => togglePerm(m.handle, perm)} style={{ accentColor: '#22d3ee', width: 12, height: 12 }} />
                              <span style={{ fontSize: 9, color: 'rgba(255,255,255,.55)', fontFamily: 'JetBrains Mono' }}>{label}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── AI EXTENSIONS ── */}
            {panel === 'aiExt' && (
              <div className="gl" style={{ borderRadius: 16, padding: 22, height: '100%', overflow: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
                  <Sparkles size={15} color="#f59e0b" />
                  <span style={{ fontSize: 12, fontWeight: 800, fontFamily: 'Orbitron', color: '#f59e0b' }}>AI EXTENSIONS</span>
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', marginBottom: 20, lineHeight: 1.7 }}>
                  Connect AI coding assistants so everyone in the workspace can vibe code together. The workspace creator and members with <strong style={{ color: '#22d3ee' }}>AI permission</strong> can toggle extensions.
                </div>
                {[
                  { key: 'claude', name: 'Claude', desc: 'Anthropic\'s Claude — context-aware code generation, architecture, debugging', color: '#f59e0b', icon: '🤖' },
                  { key: 'copilot', name: 'GitHub Copilot', desc: 'Inline completions + chat across all files in the workspace', color: '#22d3ee', icon: '🎯' },
                  { key: 'gpt', name: 'GPT-4o', desc: 'OpenAI\'s multimodal model for code, images, and complex reasoning', color: '#10b981', icon: '⚡' },
                ].map(ai => (
                  <div key={ai.key} style={{ borderRadius: 14, border: `1px solid ${activeWs?.aiConnected[ai.key] ? ai.color + '44' : 'rgba(255,255,255,.08)'}`, background: activeWs?.aiConnected[ai.key] ? `${ai.color}06` : 'rgba(255,255,255,.02)', padding: '16px 18px', marginBottom: 12, transition: 'all .25s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 24 }}>{ai.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{ai.name}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,.45)', lineHeight: 1.5 }}>{ai.desc}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {activeWs?.aiConnected[ai.key] && <span style={{ fontSize: 8, color: ai.color, fontFamily: 'JetBrains Mono' }}>● Active</span>}
                        <div style={{ width: 44, height: 24, borderRadius: 999, background: activeWs?.aiConnected[ai.key] ? `${ai.color}33` : 'rgba(255,255,255,.08)', border: `1px solid ${activeWs?.aiConnected[ai.key] ? ai.color + '66' : 'rgba(255,255,255,.15)'}`, position: 'relative', cursor: (amCreator || myPerms.canAI) ? 'pointer' : 'default', transition: 'all .25s' }}
                          onClick={() => (amCreator || myPerms.canAI) && toggleAI(ai.key)}>
                          <div style={{ position: 'absolute', top: 3, left: activeWs?.aiConnected[ai.key] ? 21 : 3, width: 16, height: 16, borderRadius: '50%', background: activeWs?.aiConnected[ai.key] ? ai.color : 'rgba(255,255,255,.3)', transition: 'left .25s,background .25s', boxShadow: activeWs?.aiConnected[ai.key] ? `0 0 8px ${ai.color}` : 'none' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {!amCreator && !myPerms.canAI && <div style={{ textAlign: 'center', padding: '14px', fontSize: 10, color: 'rgba(255,255,255,.3)', fontFamily: 'JetBrains Mono' }}>🔒 Ask the workspace creator for AI extension permissions</div>}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Create Workspace Modal */}
      {showCreateWS && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(0,0,0,.7)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowCreateWS(false)}>
          <div style={{ background: 'rgba(6,9,24,.98)', borderRadius: 20, border: '1px solid rgba(34,211,238,.2)', width: 420, padding: '28px', animation: 'sU .25s ease' }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 14, fontWeight: 800, fontFamily: 'Orbitron', color: '#22d3ee', marginBottom: 18 }}>NEW WORKSPACE</div>
            <input value={newWsName} onChange={e => setNewWsName(e.target.value)} onKeyDown={e => e.key === 'Enter' && createWorkspace()} autoFocus placeholder="Workspace name (e.g. AI Chatbot MVP)" style={{ width: '100%', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(34,211,238,.25)', borderRadius: 11, padding: '12px 15px', color: 'white', fontSize: 13, fontFamily: 'Rajdhani', outline: 'none', marginBottom: 14, boxSizing: 'border-box' }} />
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={createWorkspace} className="SB" style={{ flex: 1, padding: '10px', borderRadius: 10, border: 'none', cursor: 'pointer', color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani' }}>Create Workspace</button>
              <button onClick={() => setShowCreateWS(false)} style={{ flex: 1, padding: '10px', borderRadius: 10, border: '1px solid var(--br)', background: 'none', cursor: 'pointer', color: 'var(--mu)', fontSize: 12, fontFamily: 'Rajdhani' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Private DM widget removed — Vibe Prompt Feed in Connect serves this purpose */}
    </>
  );
};

/* ─── SETTINGS PAGE ─────────────────────────────────────────── */
const SettingsPage = ({
  section = 'general', onClose, userProfile: initProfile = null,
  onSaveProfile = null, takenUsernames = TAKEN_USERNAMES,
  theme = 'dark', setTheme, accessibilitySettings = {}, setAccessibilitySettings
}) => {
  const [activeSection, setActiveSection] = React.useState(section);
  const [toast, setToast] = React.useState(null);
  // Initialize from userProfile prop (global state) — changes here propagate everywhere
  const [username, setUsername] = React.useState(initProfile?.handle || '@you');
  const [acctEmail, setAcctEmail] = React.useState(initProfile?.acctEmail || 'you@vibeworld.io');
  const [altEmail, setAltEmail] = React.useState(initProfile?.altEmail || false);
  const [displayName, setDisplayName] = React.useState(initProfile?.name || 'Vibe Creator');
  const [bio, setBio] = React.useState(initProfile?.bio || '');
  const [location, setLocation] = React.useState(initProfile?.location || '');
  const [website, setWebsite] = React.useState(initProfile?.website || '');
  const [usernameField, setUsernameField] = React.useState(initProfile?.username || '');
  const [usernameValidation, setUsernameValidation] = React.useState(null);
  const [usernameSuggestions, setUsernameSuggestions] = React.useState([]);
  const NOUNS = ['dev', 'ui', 'vibe', 'lab', 'px', 'studio', 'craft', 'hq'];
  const onCooldown = initProfile?.lastUsernameChange && ((Date.now() - initProfile.lastUsernameChange) / (1000 * 60 * 60 * 24)) < 30;
  const cooldownDate = onCooldown ? new Date(initProfile.lastUsernameChange + (30 * 24 * 60 * 60 * 1000)).toLocaleDateString() : null;
  const [avatarSrc, setAvatarSrc] = React.useState(initProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=160&h=160&fit=crop');
  const avatarRef = React.useRef(null);
  const [twitter, setTwitter] = React.useState(initProfile?.twitter || '');
  const [github, setGithub] = React.useState(initProfile?.github || '');
  const [linkedin, setLinkedin] = React.useState(initProfile?.linkedin || '');
  const [instagram, setInstagram] = React.useState(initProfile?.instagram || '');
  const [pubProfile, setPubProfile] = React.useState(initProfile?.pubProfile !== undefined ? initProfile.pubProfile : true);
  const [showOnline, setShowOnline] = React.useState(initProfile?.showOnline !== undefined ? initProfile.showOnline : true);
  const [twoFA, setTwoFA] = React.useState(false);
  const [curPw, setCurPw] = React.useState('');
  const [newPw, setNewPw] = React.useState('');
  const [confPw, setConfPw] = React.useState('');
  const [showCur, setShowCur] = React.useState(false);
  const [showNew, setShowNew] = React.useState(false);
  const [showConf, setShowConf] = React.useState(false);
  const [scanY, setScanY] = React.useState(0);
  const [glowPulse, setGlowPulse] = React.useState(0);

  React.useEffect(() => { setActiveSection(section); }, [section]);
  React.useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [onClose]);

  // Animated scanline
  React.useEffect(() => {
    let raf, y = 0;
    const anim = () => { y = (y + 0.25) % 100; setScanY(y); raf = requestAnimationFrame(anim); };
    raf = requestAnimationFrame(anim);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Glow pulse for active section indicator
  React.useEffect(() => {
    let raf, t = 0;
    const anim = () => { t += 0.03; setGlowPulse(Math.sin(t) * 0.5 + 0.5); raf = requestAnimationFrame(anim); };
    raf = requestAnimationFrame(anim);
    return () => cancelAnimationFrame(raf);
  }, []);

  const showSaveToast = (msg) => {
    setToast({ msg: msg || 'Changes saved \u2713', t: Date.now() });
    setTimeout(() => setToast(null), 2200);
  };

  const handleUsernameChange = (val) => {
    setUsernameField(val);
    if (!val) { setUsernameValidation(null); setUsernameSuggestions([]); return; }
    const result = validateUsername(val, takenUsernames, onCooldown ? initProfile.lastUsernameChange : null);
    setUsernameValidation(result);
    if (result === 'ok') { setUsernameSuggestions([]); return; }
    // Generate suggestions
    const base = val.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10) || 'vibe';
    const rnd2 = () => Math.floor(10 + Math.random() * 90);
    const noun = () => NOUNS[Math.floor(Math.random() * NOUNS.length)];
    const candidates = [`${base}${rnd2()}`, `${base}_${noun()}`, `${base}.io`, `_${base}`];
    const ok = candidates.filter(c => validateUsername(c, takenUsernames, null) === 'ok').slice(0, 4);
    setUsernameSuggestions(ok);
  };

  const IS = { width: '100%', padding: '11px 14px', borderRadius: 8, border: '1px solid #1a2540', background: '#080c1a', color: '#ccd6f6', fontSize: 13, fontFamily: 'Rajdhani,sans-serif', fontWeight: 600, outline: 'none', transition: 'border-color .2s,box-shadow .2s', boxSizing: 'border-box' };
  const hF = (e) => { e.target.style.borderColor = '#22d3ee'; e.target.style.boxShadow = '0 0 0 3px rgba(34,211,238,.08),0 0 14px rgba(34,211,238,.1)'; };
  const hB = (e) => { e.target.style.borderColor = '#1a2540'; e.target.style.boxShadow = 'none'; };
  const LABEL = { display: 'block', fontSize: 10, color: '#22d3ee', fontFamily: 'JetBrains Mono,monospace', marginBottom: 7, letterSpacing: '.1em', textTransform: 'uppercase', opacity: .75 };
  const FLD = { marginBottom: 22 };
  const SB = { padding: '11px 32px', borderRadius: 999, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg,#22d3ee,#a855f7)', color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani,sans-serif', letterSpacing: '.06em', transition: 'all .22s', display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, boxShadow: '0 4px 18px rgba(34,211,238,.18)' };
  const sBE = (e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(34,211,238,.38)'; };
  const sBL = (e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(34,211,238,.18)'; };

  const Toggle = ({ on, setOn, label, desc }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '17px 0', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ flex: 1, paddingRight: 24 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: on ? '#ccd6f6' : 'rgba(255,255,255,.45)', fontFamily: 'Rajdhani', marginBottom: 3, transition: 'color .25s' }}>{label}</div>
        <div style={{ fontSize: 10, color: '#8899bb', fontFamily: 'JetBrains Mono', lineHeight: 1.5 }}>{desc}</div>
      </div>
      <div onClick={() => setOn(v => !v)} style={{ width: 48, height: 26, borderRadius: 999, background: on ? 'linear-gradient(135deg,#22d3ee,#a855f7)' : 'rgba(255,255,255,.07)', cursor: 'pointer', position: 'relative', transition: 'all .28s', flexShrink: 0, boxShadow: on ? '0 0 14px rgba(34,211,238,.35)' : 'none' }}>
        <div style={{ position: 'absolute', top: 3, left: on ? 25 : 3, width: 20, height: 20, borderRadius: '50%', background: 'white', transition: 'left .22s cubic-bezier(.34,1.56,.64,1)', boxShadow: '0 1px 6px rgba(0,0,0,.5)' }} />
      </div>
    </div>
  );

  const PwField = ({ label, val, setVal, show, setShow }) => (
    <div style={FLD}>
      <label style={LABEL}>{label}</label>
      <div style={{ position: 'relative' }}>
        <input type={show ? 'text' : 'password'} value={val} onChange={e => setVal(e.target.value)} style={{ ...IS, paddingRight: 48 }} onFocus={hF} onBlur={hB} placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
        <button onClick={() => setShow(v => !v)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#445566', padding: '4px 6px', fontSize: 9, fontFamily: 'JetBrains Mono', letterSpacing: '.08em', transition: 'color .15s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'} onMouseLeave={e => e.currentTarget.style.color = '#445566'}>{show ? 'HIDE' : 'SHOW'}</button>
      </div>
    </div>
  );

  const SectionHead = ({ title, sub, icon: Icon, accent = '#22d3ee' }) => (
    <div style={{ marginBottom: 32, paddingBottom: 18, borderBottom: '1px solid rgba(34,211,238,.08)', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 7 }}>
        {Icon && (
          <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(34,211,238,.07)', border: '1px solid rgba(34,211,238,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 12px rgba(34,211,238,.1)' }}>
            <Icon size={15} color={accent} />
          </div>
        )}
        <h2 className="O" style={{ fontSize: 21, fontWeight: 700, margin: 0, letterSpacing: '-.01em', color: '#ccd6f6' }}>{title}</h2>
      </div>
      <div style={{ fontSize: 9, color: 'rgba(34,211,238,.5)', fontFamily: 'JetBrains Mono', letterSpacing: '.1em' }}>{sub}</div>
      <div style={{ position: 'absolute', bottom: -1, left: 0, width: 56, height: 1, background: 'linear-gradient(90deg,#22d3ee,transparent)' }} />
    </div>
  );

  const NAV = [
    { id: 'general', label: 'General', Icon: Settings, color: '#22d3ee' },
    { id: 'profile', label: 'Edit Profile', Icon: Edit3, color: '#a855f7' },
    { id: 'password', label: 'Password', Icon: Lock, color: '#ec4899' },
    { id: 'social', label: 'Social Profiles', Icon: Globe, color: '#10b981' },
    { id: 'payouts', label: 'Payouts', Icon: ShoppingBag, color: '#f59e0b' },
    { id: 'privacy', label: 'Privacy & Security', Icon: Shield, color: '#22d3ee' },
    { id: 'system', label: 'System Settings', Icon: Monitor, color: '#a855f7' },
  ];

  const renderContent = () => {
    if (activeSection === 'general') return (
      <div>
        <SectionHead title="General" sub="// ACCOUNT_BASICS.config" icon={Settings} />
        <div style={FLD}>
          <label style={LABEL}>Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} style={IS} onFocus={hF} onBlur={hB} />
        </div>
        <div style={FLD}>
          <label style={LABEL}>Account Email</label>
          <input value={acctEmail} onChange={e => setAcctEmail(e.target.value)} type="email" style={IS} onFocus={hF} onBlur={hB} />
        </div>
        <div onClick={() => setAltEmail(v => !v)} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 26, cursor: 'pointer', padding: '13px 15px', borderRadius: 10, border: '1px solid ' + (altEmail ? 'rgba(34,211,238,.25)' : 'rgba(255,255,255,.06)'), background: altEmail ? 'rgba(34,211,238,.04)' : 'rgba(255,255,255,.015)', transition: 'all .2s' }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, border: '1.5px solid ' + (altEmail ? '#22d3ee' : '#2a3550'), background: altEmail ? 'rgba(34,211,238,.18)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1, transition: 'all .2s' }}>
            {altEmail && <Check size={11} color="#22d3ee" strokeWidth={3} />}
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#ccd6f6', fontFamily: 'Rajdhani', fontWeight: 700, lineHeight: 1.4 }}>Use a different email for project requests</div>
            <div style={{ fontSize: 9, color: '#8899bb', fontFamily: 'JetBrains Mono', marginTop: 3 }}>Project inquiry emails will route to a separate address</div>
          </div>
        </div>
        <button style={SB} onClick={() => { if (onSaveProfile) onSaveProfile({ acctEmail, altEmail }); showSaveToast(); }} onMouseEnter={sBE} onMouseLeave={sBL}><CheckCircle size={14} />Save Changes</button>
      </div>
    );

    if (activeSection === 'profile') return (
      <div>
        <SectionHead title="Edit Profile" sub="// IDENTITY.profile" icon={Edit3} accent="#a855f7" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 30, padding: '20px', background: 'rgba(168,85,247,.04)', border: '1px solid rgba(168,85,247,.14)', borderRadius: 14 }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{ width: 78, height: 78, borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(168,85,247,.55)', boxShadow: '0 0 22px rgba(168,85,247,.22)' }}>
              <img src={avatarSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 1, right: 1, width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#a855f7,#22d3ee)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,.5)', border: '1.5px solid #080c1a' }} onClick={() => avatarRef.current && avatarRef.current.click()}>
              <Edit3 size={10} color="white" />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: 'white', fontFamily: 'Rajdhani', marginBottom: 2 }}>{displayName || 'Vibe Creator'}</div>
            <div style={{ fontSize: 10, color: '#a855f7', fontFamily: 'JetBrains Mono', marginBottom: 12 }}>{username}</div>
            <button onClick={() => avatarRef.current && avatarRef.current.click()} style={{ padding: '6px 16px', borderRadius: 999, border: '1px solid rgba(168,85,247,.5)', background: 'rgba(168,85,247,.08)', color: '#a855f7', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', cursor: 'pointer', transition: 'all .2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,.18)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(168,85,247,.08)'}>Upload Photo</button>
            <input ref={avatarRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => { const f = e.target.files[0]; if (f) { const r = new FileReader(); r.onload = ev => setAvatarSrc(ev.target.result); r.readAsDataURL(f); } }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={FLD}><label style={LABEL}>Display Name</label><input value={displayName} onChange={e => setDisplayName(e.target.value)} style={IS} onFocus={hF} onBlur={hB} /></div>
          <div style={FLD}><label style={LABEL}>Username</label><input value={username} onChange={e => setUsername(e.target.value)} style={IS} onFocus={hF} onBlur={hB} /></div>
        </div>
        {/* ── USERNAME BLOCK ── */}
        <div style={{ marginBottom: 22 }}>
          <label style={{ ...LABEL, display: 'block', marginBottom: 4 }}>Username</label>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,.3)', fontFamily: 'JetBrains Mono', marginBottom: onCooldown ? 4 : 8, lineHeight: 1.6 }}>You can only change your username once every 30 days.</div>
          {onCooldown && <div style={{ fontSize: 9, color: '#f59e0b', fontFamily: 'JetBrains Mono', marginBottom: 8 }}>Next change available: {cooldownDate}</div>}
          <div style={{ position: 'relative' }}>
            <input
              value={usernameField}
              onChange={e => handleUsernameChange(e.target.value)}
              disabled={onCooldown}
              placeholder="yourusername"
              style={{
                ...IS,
                paddingRight: 40,
                borderColor: usernameValidation === 'ok' ? 'rgba(16,185,129,.6)' : usernameValidation === 'taken' ? 'rgba(239,68,68,.8)' : usernameValidation && usernameValidation !== 'ok' ? 'rgba(239,68,68,.6)' : '#1a2540',
                animation: usernameValidation === 'taken' ? 'usernameTaken 0.8s ease infinite' : undefined,
                opacity: onCooldown ? 0.5 : 1,
                cursor: onCooldown ? 'not-allowed' : undefined,
              }}
              onFocus={e => { if (!onCooldown) { e.target.style.borderColor = usernameValidation === 'ok' ? 'rgba(16,185,129,.6)' : '#22d3ee'; e.target.style.boxShadow = '0 0 0 3px rgba(34,211,238,.08)'; } }}
              onBlur={e => { e.target.style.boxShadow = 'none'; }}
            />
            <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
              {onCooldown && <Lock size={13} color="rgba(255,255,255,.35)" />}
              {!onCooldown && usernameValidation === 'ok' && <CheckCircle size={13} color="#10b981" />}
              {!onCooldown && usernameValidation && usernameValidation !== 'ok' && usernameValidation !== 'taken' && <XCircle size={13} color="#ef4444" />}
            </div>
          </div>
          {!onCooldown && usernameValidation && usernameValidation !== 'ok' && usernameValidation !== 'taken' && (
            <div style={{ fontSize: 10, color: '#ef4444', fontFamily: 'JetBrains Mono', marginTop: 5, paddingLeft: 2 }}>
              {usernameValidation === 'too_short' && 'Minimum 6 characters required'}
              {usernameValidation === 'no_alpha' && 'Must contain at least one letter'}
              {usernameValidation === 'invalid_chars' && 'Only letters, numbers, _ . - allowed'}
            </div>
          )}
          {!onCooldown && usernameSuggestions.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 8 }}>
              {usernameSuggestions.map(s => (
                <button key={s} onClick={() => handleUsernameChange(s)} style={{ padding: '3px 10px', borderRadius: 999, border: '1px solid rgba(34,211,238,.35)', background: 'rgba(34,211,238,.08)', color: '#22d3ee', fontSize: 9, fontFamily: 'JetBrains Mono', cursor: 'pointer', transition: 'all .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,211,238,.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,211,238,.08)'}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div style={FLD}>
          <label style={{ ...LABEL, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Bio</span>
            <span style={{ color: bio.length > 140 ? '#ec4899' : bio.length > 100 ? '#f59e0b' : 'rgba(255,255,255,.25)', fontWeight: 700 }}>{bio.length}/160</span>
          </label>
          <div style={{ position: 'relative' }}>
            <textarea value={bio} onChange={e => setBio(e.target.value.slice(0, 160))} rows={4} style={{ ...IS, resize: 'none', lineHeight: 1.65, paddingBottom: 26 }} onFocus={hF} onBlur={hB} placeholder="Tell the VibeVerse about yourself..." />
            <div style={{ position: 'absolute', bottom: 8, right: 10, width: (bio.length / 160 * 100) + '%', maxWidth: 'calc(100% - 20px)', height: 2, background: 'linear-gradient(90deg,#22d3ee,#a855f7)', borderRadius: 2, transition: 'width .3s', pointerEvents: 'none' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={FLD}><label style={LABEL}>Location</label><input value={location} onChange={e => setLocation(e.target.value)} style={IS} onFocus={hF} onBlur={hB} placeholder="City, Country" /></div>
          <div style={FLD}><label style={LABEL}>Website URL</label><input value={website} onChange={e => setWebsite(e.target.value)} style={IS} onFocus={hF} onBlur={hB} placeholder="https://" /></div>
        </div>
        <button style={SB} onClick={() => {
          if (usernameField && usernameField !== initProfile?.username) {
            const v = validateUsername(usernameField, takenUsernames, initProfile?.lastUsernameChange);
            if (v !== 'ok') { showSaveToast('Fix username first'); return; }
            if (onSaveProfile) onSaveProfile({ name: displayName, handle: '@' + usernameField.replace(/^@+/, ''), username: usernameField.replace(/^@+/, ''), lastUsernameChange: Date.now(), avatar: avatarSrc, bio, location, website });
          } else {
            if (onSaveProfile) onSaveProfile({ name: displayName, avatar: avatarSrc, bio, location, website });
          }
          showSaveToast('Profile updated ✓');
        }} onMouseEnter={sBE} onMouseLeave={sBL}><CheckCircle size={14} />Save Changes</button>
      </div>
    );

    if (activeSection === 'password') return (
      <div>
        <SectionHead title="Password" sub="// SECURITY.credentials" icon={Lock} accent="#ec4899" />
        <div style={{ padding: '13px 16px', borderRadius: 10, background: 'rgba(236,72,153,.04)', border: '1px solid rgba(236,72,153,.15)', marginBottom: 28, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <AlertCircle size={13} color="#ec4899" style={{ flexShrink: 0, marginTop: 1 }} />
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', fontFamily: 'JetBrains Mono', lineHeight: 1.65 }}>Enter your current password to set a new one. Minimum 8 characters required.</div>
        </div>
        <PwField label="Current Password" val={curPw} setVal={setCurPw} show={showCur} setShow={setShowCur} />
        <div style={{ height: 1, background: 'rgba(255,255,255,.04)', margin: '0 0 22px' }} />
        <PwField label="New Password" val={newPw} setVal={setNewPw} show={showNew} setShow={setShowNew} />
        <PwField label="Confirm New Password" val={confPw} setVal={setConfPw} show={showConf} setShow={setShowConf} />
        {newPw && confPw && newPw !== confPw && (
          <div style={{ fontSize: 10, color: '#ec4899', fontFamily: 'JetBrains Mono', marginTop: -14, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 5 }}>
            <AlertCircle size={10} />Passwords do not match
          </div>
        )}
        {newPw && confPw && newPw === confPw && newPw.length >= 8 && (
          <div style={{ fontSize: 10, color: '#10b981', fontFamily: 'JetBrains Mono', marginTop: -14, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 5 }}>
            <CheckCircle size={10} /> Passwords match
          </div>
        )}
        <button style={{ ...SB, background: (newPw && confPw && newPw === confPw && newPw.length >= 8) ? 'linear-gradient(135deg,#ec4899,#a855f7)' : 'rgba(255,255,255,.05)', color: (newPw && confPw && newPw === confPw && newPw.length >= 8) ? 'white' : 'rgba(255,255,255,.2)', cursor: (newPw && confPw && newPw === confPw && newPw.length >= 8) ? 'pointer' : 'not-allowed', boxShadow: 'none' }}
          onClick={() => { if (newPw && confPw && newPw === confPw && newPw.length >= 8) { showSaveToast('Password updated \u2713'); setCurPw(''); setNewPw(''); setConfPw(''); } }}
          onMouseEnter={e => { if (newPw && confPw && newPw === confPw && newPw.length >= 8) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(236,72,153,.35)'; } }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none'; }}>
          <Lock size={13} />Update Password
        </button>
      </div>
    );

    if (activeSection === 'social') return (
      <div>
        <SectionHead title="Social Profiles" sub="// NETWORK.connections" icon={Globe} accent="#10b981" />
        {[
          { lbl: 'Twitter / X', val: twitter, setter: setTwitter, prefix: 'x.com/', ph: 'yourhandle', color: '#1d9bf0' },
          { lbl: 'GitHub', val: github, setter: setGithub, prefix: 'github.com/', ph: 'username', color: '#e6edf3' },
          { lbl: 'LinkedIn', val: linkedin, setter: setLinkedin, prefix: 'linkedin.com/in/', ph: 'yourname', color: '#0a66c2' },
          { lbl: 'Instagram', val: instagram, setter: setInstagram, prefix: 'instagram.com/', ph: 'handle', color: '#e4405f' },
        ].map(({ lbl, val, setter, prefix, ph, color }) => (
          <div key={lbl} style={FLD}>
            <label style={{ ...LABEL, color, opacity: 1 }}>{lbl}</label>
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              <span style={{ padding: '0 12px', background: 'rgba(255,255,255,.03)', border: '1px solid #1a2540', borderRight: 'none', borderRadius: '8px 0 0 8px', fontSize: 10, color: '#445566', fontFamily: 'JetBrains Mono', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', flexShrink: 0 }}>{prefix}</span>
              <input value={val} onChange={e => setter(e.target.value)} style={{ ...IS, borderRadius: '0 8px 8px 0', flex: 1 }} onFocus={hF} onBlur={hB} placeholder={ph} />
            </div>
          </div>
        ))}
        <button style={SB} onClick={() => { if (onSaveProfile) onSaveProfile({ twitter, github, linkedin, instagram }); showSaveToast('Social profiles saved ✓'); }} onMouseEnter={sBE} onMouseLeave={sBL}><CheckCircle size={14} />Save Changes</button>
      </div>
    );

    if (activeSection === 'payouts') return (
      <div>
        <SectionHead title="Payouts" sub="// EARNINGS.wallet" icon={ShoppingBag} accent="#f59e0b" />
        <div style={{ padding: '26px', background: 'rgba(16,185,129,.04)', border: '1px solid rgba(16,185,129,.16)', borderRadius: 16, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(16,185,129,.1)', border: '1px solid rgba(16,185,129,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShoppingBag size={20} color="#10b981" />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'white', fontFamily: 'Rajdhani', marginBottom: 2 }}>No Payout Method</div>
              <div style={{ fontSize: 9, color: '#10b981', fontFamily: 'JetBrains Mono', letterSpacing: '.08em' }}>STATUS: DISCONNECTED</div>
            </div>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', fontFamily: 'Rajdhani', lineHeight: 1.75, marginBottom: 20 }}>Add your bank account or PayPal to receive earnings from VibeWorld Market. Payments are processed weekly on Fridays.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 20 }}>
            {[['Bank Account', 'Direct deposit', '#10b981'], ['PayPal', 'Instant payout', '#0070ba'], ['Stripe', 'Auto payouts', '#635bff']].map(([name, sub, col]) => (
              <div key={name} onClick={() => showSaveToast(`${name} selected — complete setup to activate`)} style={{ padding: '11px 10px', borderRadius: 10, border: '1px solid rgba(255,255,255,.06)', background: 'rgba(255,255,255,.02)', textAlign: 'center', cursor: 'pointer', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = col + '55'; e.currentTarget.style.background = col + '10'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)'; e.currentTarget.style.background = 'rgba(255,255,255,.02)'; e.currentTarget.style.transform = ''; }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'white', fontFamily: 'Rajdhani', marginBottom: 2 }}>{name}</div>
                <div style={{ fontSize: 9, color: '#8899bb', fontFamily: 'JetBrains Mono' }}>{sub}</div>
              </div>
            ))}
          </div>
          <button style={{ padding: '12px 26px', borderRadius: 999, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg,#10b981,#059669)', color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', letterSpacing: '.05em', transition: 'all .22s', boxShadow: '0 4px 18px rgba(16,185,129,.2)', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            onClick={() => showSaveToast('Payout setup coming soon — stay tuned!')}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(16,185,129,.38)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(16,185,129,.2)'; }}>
            <CheckCircle size={14} />Connect Payout Method
          </button>
        </div>
        <div style={{ padding: '13px 16px', background: 'rgba(255,255,255,.015)', borderRadius: 10, border: '1px solid rgba(255,255,255,.05)', fontSize: 10, color: '#445566', fontFamily: 'JetBrains Mono', lineHeight: 1.75 }}>
          VibeWorld takes a 5% platform fee on all sales. Minimum payout is $50. Processed every Friday. Questions? earnings@vibeworld.io
        </div>
      </div>
    );

    if (activeSection === 'privacy') return (
      <div>
        <SectionHead title="Privacy & Security" sub="// ACCESS.permissions" icon={Shield} />
        <Toggle on={pubProfile} setOn={setPubProfile} label="Make profile public" desc="Anyone on VibeWorld can view your profile and work" />
        <Toggle on={showOnline} setOn={setShowOnline} label="Show online status" desc="Others can see when you are active on the platform" />
        <Toggle on={twoFA} setOn={setTwoFA} label="Two-factor authentication" desc="Require a verification code on each sign-in" />
        <div style={{ marginTop: 24, padding: '13px 16px', background: 'rgba(34,211,238,.03)', border: '1px solid rgba(34,211,238,.1)', borderRadius: 10, fontSize: 10, color: 'rgba(34,211,238,.5)', fontFamily: 'JetBrains Mono', lineHeight: 1.7, marginBottom: 28 }}>
          SECURITY_NOTICE // Your data is encrypted at rest and in transit. VibeWorld never shares your information with third parties.
        </div>
        <button style={SB} onClick={() => { if (onSaveProfile) onSaveProfile({ pubProfile, showOnline }); showSaveToast('Privacy settings saved ✓'); }} onMouseEnter={sBE} onMouseLeave={sBL}><CheckCircle size={14} />Save Changes</button>
      </div>
    );
    if (activeSection === 'system') return (
      <div>
        <SectionHead title="System Settings" sub="// SYSTEM.display_config()" icon={Monitor} />
        <div style={FLD}>
          <label style={LABEL}>APPEARANCE</label>
          <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
            {[['dark', 'Dark Mode', '🌑'], ['light', 'Light Mode', '☀️']].map(([val, label, em]) => {
              const active = theme === val;
              return (<button key={val} onClick={() => { if (setTheme) setTheme(val); if (onSaveProfile) onSaveProfile({ theme: val }); showSaveToast(); }}
                style={{ flex: 1, padding: '11px', borderRadius: 12, border: `1px solid ${active ? 'rgba(168,85,247,.7)' : 'rgba(255,255,255,.12)'}`, background: active ? 'rgba(168,85,247,.18)' : 'rgba(255,255,255,.04)', cursor: 'pointer', color: active ? '#a855f7' : 'rgba(255,255,255,.6)', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .18s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, boxShadow: active ? '0 0 12px rgba(168,85,247,.3)' : 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = active ? 'rgba(168,85,247,.25)' : 'rgba(255,255,255,.08)'}
                onMouseLeave={e => e.currentTarget.style.background = active ? 'rgba(168,85,247,.18)' : 'rgba(255,255,255,.04)'}>
                {em} {label}{active && <span style={{ marginLeft: 4, fontSize: 8, color: '#a855f7', fontFamily: 'JetBrains Mono' }}>● ACTIVE</span>}
              </button>);
            })}
          </div>
        </div>
        <div style={FLD}>
          <label style={LABEL}>ACCESSIBILITY</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
            {[['reduceMotion', 'Reduce Motion'], ['highContrast', 'High Contrast'], ['largeText', 'Large Text']].map(([key, label]) => {
              const on = !!(accessibilitySettings && accessibilitySettings[key]); return (<div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,.03)', border: `1px solid ${on ? 'rgba(34,211,238,.25)' : 'rgba(255,255,255,.07)'}` }}>
                <span style={{ fontSize: 12, fontWeight: 600, fontFamily: 'Rajdhani', color: on ? '#22d3ee' : 'rgba(255,255,255,.8)' }}>{label}{on && <span style={{ marginLeft: 8, fontSize: 9, color: '#22d3ee', fontFamily: 'JetBrains Mono' }}>ON</span>}</span>
                <div onClick={() => { const next = !on; if (setAccessibilitySettings) setAccessibilitySettings(s => ({ ...s, [key]: next })); if (onSaveProfile) onSaveProfile({ [key]: next }); showSaveToast(); }}
                  style={{ width: 36, height: 20, borderRadius: 10, background: on ? '#22d3ee' : 'rgba(255,255,255,.15)', cursor: 'pointer', position: 'relative', border: `1px solid ${on ? '#22d3ee' : 'rgba(255,255,255,.15)'}`, transition: 'all .2s', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', top: 2, left: on ? 18 : 2, width: 14, height: 14, borderRadius: '50%', background: 'white', transition: 'all .2s', boxShadow: '0 1px 4px rgba(0,0,0,.3)' }} />
                </div>
              </div>);
            })}
          </div>
        </div>
        <button style={SB} onClick={() => { showSaveToast(); }} onMouseEnter={sBE} onMouseLeave={sBL}><CheckCircle size={14} />Save System Settings</button>
      </div>
    );
  };

  const activeNav = NAV.find(n => n.id === activeSection) || NAV[0];

  return (
    <div data-settings-panel="1" style={{ position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 19000, display: 'flex', alignItems: 'stretch' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>

      {/* Backdrop */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.78)', backdropFilter: 'blur(14px)' }} />

      {/* Scanline overlay */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: 120, top: scanY + '%', background: 'linear-gradient(180deg,transparent,rgba(34,211,238,.025),transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(34,211,238,.008) 3px,rgba(34,211,238,.008) 4px)', pointerEvents: 'none' }} />
      </div>

      {/* Main panel */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', width: '100%', maxWidth: 960, margin: '0 auto', background: 'rgba(5,8,18,.99)', border: '1px solid rgba(34,211,238,.1)', borderTop: 'none', borderBottom: 'none', boxShadow: '0 0 80px rgba(34,211,238,.04),0 0 0 1px rgba(168,85,247,.06),0 24px 80px rgba(0,0,0,.75)', overflow: 'hidden' }}>

        {/* Corner accents */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 44, height: 44, borderTop: '1.5px solid rgba(34,211,238,.7)', borderLeft: '1.5px solid rgba(34,211,238,.7)', pointerEvents: 'none', zIndex: 5 }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 44, height: 44, borderTop: '1.5px solid rgba(168,85,247,.7)', borderRight: '1.5px solid rgba(168,85,247,.7)', pointerEvents: 'none', zIndex: 5 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 44, height: 44, borderBottom: '1.5px solid rgba(34,211,238,.3)', borderLeft: '1.5px solid rgba(34,211,238,.3)', pointerEvents: 'none', zIndex: 5 }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 44, height: 44, borderBottom: '1.5px solid rgba(168,85,247,.3)', borderRight: '1.5px solid rgba(168,85,247,.3)', pointerEvents: 'none', zIndex: 5 }} />

        {/* ── LEFT SIDEBAR ── */}
        <div style={{ width: 214, background: 'rgba(255,255,255,.012)', borderRight: '1px solid rgba(34,211,238,.07)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>

          {/* Sidebar header */}
          <div style={{ padding: '22px 20px 18px', borderBottom: '1px solid rgba(34,211,238,.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 3 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 8px #22d3ee', animation: 'blink 1.5s ease infinite' }} />
              <span className="O" style={{ fontSize: 9, fontWeight: 700, color: '#22d3ee', letterSpacing: '.15em' }}>VIBE_SETTINGS</span>
            </div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,.18)', fontFamily: 'JetBrains Mono', letterSpacing: '.05em' }}>v2.0 // user_config.json</div>
          </div>

          {/* Nav */}
          <nav style={{ flex: 1, padding: '8px 0' }}>
            {NAV.map(({ id, label, Icon, color }) => {
              const isAct = activeSection === id;
              return (
                <button key={id} onClick={() => setActiveSection(id)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '11px 18px 11px 20px', background: isAct ? 'rgba(34,211,238,.05)' : 'transparent', border: 'none', borderLeft: '2px solid ' + (isAct ? color : 'transparent'), cursor: 'pointer', color: isAct ? '#ccd6f6' : '#8899bb', fontSize: 12, fontWeight: isAct ? 700 : 500, fontFamily: 'Rajdhani,sans-serif', textAlign: 'left', transition: 'all .18s', position: 'relative' }}
                  onMouseEnter={e => { if (!isAct) { e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.color = '#ccd6f6'; } }}
                  onMouseLeave={e => { if (!isAct) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8899bb'; } }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: isAct ? (color + '14') : 'rgba(255,255,255,.03)', border: '1px solid ' + (isAct ? (color + '33') : 'rgba(255,255,255,.06)'), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .18s', boxShadow: isAct ? ('0 0 10px ' + color + '22') : 'none' }}>
                    <Icon size={13} color={isAct ? color : '#8899bb'} />
                  </div>
                  <span style={{ flex: 1 }}>{label}</span>
                  {isAct && <div style={{ width: 4, height: 4, borderRadius: '50%', background: color, boxShadow: '0 0 8px ' + color, flexShrink: 0 }} />}
                </button>
              );
            })}
          </nav>

          {/* Sidebar footer — user card */}
          <div style={{ padding: '14px 16px', borderTop: '1px solid rgba(255,255,255,.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 11px', borderRadius: 10, background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1.5px solid rgba(168,85,247,.4)' }}>
                <img src={initProfile?.avatar || avatarSrc || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=160&h=160&fit=crop'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ overflow: 'hidden', flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'white', fontFamily: 'Rajdhani', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{displayName || initProfile?.name || 'Vibe Creator'}</div>
                <div style={{ fontSize: 8, color: '#a855f7', fontFamily: 'JetBrains Mono' }}>{username || initProfile?.handle || '@you'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
          {/* Dot-grid background */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(34,211,238,.018) 1px,transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none', zIndex: 0 }} />

          {/* Active section glow bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,' + activeNav.color + '66,' + activeNav.color + '33,transparent)', pointerEvents: 'none', zIndex: 1, transition: 'background .3s' }} />

          <div style={{ position: 'relative', zIndex: 1, padding: '38px 44px 70px' }}>
            {renderContent()}
          </div>
        </div>

        {/* Close button */}
        <button onClick={onClose}
          style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: 999, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.4)', transition: 'all .2s', zIndex: 10 }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(236,72,153,.15)'; e.currentTarget.style.borderColor = 'rgba(236,72,153,.5)'; e.currentTarget.style.color = '#ec4899'; e.currentTarget.style.transform = 'rotate(90deg)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.color = 'rgba(255,255,255,.4)'; e.currentTarget.style.transform = 'rotate(0deg)'; }}>
          <X size={14} />
        </button>
      </div>

      {/* Save toast */}
      {toast && (
        <div key={toast.t} style={{ position: 'fixed', bottom: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 99999, background: 'rgba(5,8,18,.98)', border: '1px solid rgba(16,185,129,.5)', borderRadius: 12, padding: '11px 24px', display: 'flex', alignItems: 'center', gap: 9, animation: 'sU .2s ease', pointerEvents: 'none', boxShadow: '0 8px 32px rgba(0,0,0,.6),0 0 16px rgba(16,185,129,.18)' }}>
          <CheckCircle size={14} color="#10b981" />
          <span style={{ fontSize: 12, color: '#10b981', fontFamily: 'Rajdhani', fontWeight: 700, letterSpacing: '.04em' }}>{toast.msg}</span>
        </div>
      )}
    </div>
  );
};


/* ─── MAIN APP ─────────────────────────────────────────────── */
/* ── NotifHistoryRow: extracted so useState isn't called inside .map() ── */
const NotifHistoryRow = ({ n, idx, pageOffset, onDelete }) => {
  const [delConfirm, setDelConfirm] = React.useState(false);
  const [rowHover, setRowHover] = React.useState(false);
  const IconComp = { Heart, ShoppingCart, Users, CheckCircle, Bell, UserPlus, Flag, MessageSquare, Star, Award, Zap }[n.icon] || Bell;
  return (
    <div key={n.id || idx}
      onMouseEnter={() => setRowHover(true)}
      onMouseLeave={() => { setRowHover(false); setDelConfirm(false); }}
      style={{ padding: '12px 22px', borderBottom: '1px solid rgba(255,255,255,.04)', display: 'flex', flexDirection: 'column', gap: 6, transition: 'background .15s', opacity: n.autoArchived ? 1 : 0.65, background: n.autoArchived ? (rowHover ? 'rgba(245,158,11,.08)' : 'rgba(245,158,11,.04)') : (rowHover ? 'rgba(255,255,255,.03)' : 'none'), borderLeft: n.autoArchived ? '3px solid #f59e0b' : '3px solid transparent' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: `${n.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><IconComp size={14} color={n.color} /></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.35 }}>{n.msg}</div>
          <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginTop: 2 }}>{n.time} ago</div>
          {n.autoArchived && <div style={{ fontSize: 9, color: '#f59e0b', fontFamily: 'JetBrains Mono', fontStyle: 'italic', marginTop: 3, opacity: .7 }}>Archived from new notifications — not resolved.</div>}
        </div>
        {rowHover && !delConfirm && (
          <button onClick={() => setDelConfirm(true)} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', borderRadius: 6, background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', fontSize: 10, fontFamily: 'Rajdhani', fontWeight: 700, transition: 'all .15s', flexShrink: 0 }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'none'}>
            <Trash2 size={11} />Delete
          </button>
        )}
      </div>
      {delConfirm && (
        <div style={{ display: 'flex', gap: 6, paddingLeft: 42 }}>
          <button onClick={() => onDelete(pageOffset + idx)} style={{ padding: '4px 12px', borderRadius: 6, border: 'none', background: 'rgba(239,68,68,.15)', cursor: 'pointer', color: '#ef4444', fontSize: 10, fontFamily: 'Rajdhani', fontWeight: 700, transition: 'all .15s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,.3)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(239,68,68,.15)'}>Yes, Delete</button>
          <button onClick={() => setDelConfirm(false)} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,.1)', background: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.4)', fontSize: 10, fontFamily: 'Rajdhani', fontWeight: 600 }}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default function VibeWorld() {
  /* ─── VIBEWORLD GLOBAL STATE REFERENCE ──────────────────────────────────
   * Single sources of truth. NEVER duplicate in Market/Community/Academy/Connect.
   * Local state in children is ONLY for UI: dropdowns, hover, toast timers.
   *
   * CONTENT:   globalUploads, uploadDrafts, globalTags, communityPosts
   * IDENTITY:  userProfile, globalUser, globalAuthed, earnedBadges
   * SOCIAL:    globalFollowed, teamRelationships, teamInvites, collabRequests
   * MARKET:    globalWish, globalBm, globalLikes, globalPurchased
   * NOTIFS:    notifications, notificationHistory
   * CONNECT:   workspaces, activeConnectWsId
   *
   * THREADING RULES (check after every new feature):
   *   Market    → receives ALL above + handlers
   *   Community → globalFollowed, globalBm, earnedBadges, uploads, drafts,
   *               teamRelationships, teamInvites, collabRequests, notifications
   *   Connect   → workspaces, userProfile, globalFollowed, teamRelationships,
   *               teamInvites, collabRequests, addNotification, resolveNotification
   *   Academy   → userProfile, earnedBadges, globalFollowed
   *   UPM       → uploads=globalUploads, drafts=uploadDrafts, followed=globalFollowed[k]
   *               teamRelationships, teamInvites, addNotification, resolveNotification
   *   MarketDetail → same as Market UPM; receives all team/notif/draft props
   *
   * RULE: New data in 2+ places → define it HERE first. Wire prop chain before shipping.
   * ─────────────────────────────────────────────────────────────────────────────────── */
  const vw = useWindowWidth();
  const [view, setView] = useState('landing');
  const [sec, setSec] = useState(null);
  const [warp, setWarp] = useState(false);
  const [navHistory, setNavHistory] = useState([]);
  const [warpCol, setWarpCol] = useState('#22d3ee');
  const [notif, setNotif] = useState(false);
  const [txt, setTxt] = useState('');
  const [wormhole, setWormhole] = useState(false);
  const [portal, setPortal] = useState(null);
  const [bridgeCover, setBridgeCover] = useState(null); // null or world hex color string
  const [secKey, setSecKey] = useState(0);
  const [communityPosts, setCommunityPosts] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [showSettings, setShowSettings] = useState(false);
  const [settingsSection, setSettingsSection] = useState('general');
  const openSettings = (sec = 'general') => { setSettingsSection(sec); setShowSettings(true); };
  useEffect(() => {
    if (!showSettings) return;
    const h = (e) => { if (!e.target.closest('[data-settings-panel]') && !e.target.closest('[data-settings-btn]')) { setShowSettings(false); document.addEventListener('click', c => c.stopPropagation(), { capture: true, once: true }); } };
    setTimeout(() => document.addEventListener('mousedown', h), 0);
    return () => document.removeEventListener('mousedown', h);
  }, [showSettings]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [globalWish, setGlobalWish] = useState([]);
  const [globalBm, setGlobalBm] = useState([]);
  const [bookmarkedComments, setBookmarkedComments] = useState([]);
  const [wishTab, setWishTab] = useState('all'); // 'all' | 'projects' | 'posts' | 'services' | 'comments'
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [accessibilitySettings, setAccessibilitySettings] = useState({ reduceMotion: false, highContrast: false, largeText: false });
  const [globalMyList, setGlobalMyList] = useState([]); // persists across modal open/close
  const [showMyProfileModal, setShowMyProfileModal] = useState(false);
  const [showPurchasesModal, setShowPurchasesModal] = useState(false);
  const [globalFollowed, setGlobalFollowed] = useState({});
  const [globalAuthed, setGlobalAuthed] = useState(true);
  const [globalUser, setGlobalUser] = useState({ name: 'Vibe Creator', email: 'you@vibeworld.io', role: 'creator' });
  // Current user's full profile — single source of truth for @you identity
  const [userProfile, setUserProfile] = useState({
    handle: '@you',
    name: 'Vibe Creator',
    avatar: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=160&h=160&fit=crop',
    bio: '',
    location: '',
    website: '',
    twitter: '',
    github: '',
    linkedin: '',
    instagram: '',
    showOnline: true,
    pubProfile: true,
    acctEmail: 'you@vibeworld.io',
    altEmail: false,
    username: '',
    lastUsernameChange: null,
  });
  // Badges earned by @you — single source of truth
  const [earnedBadges, setEarnedBadges] = useState(['starter']);
  // Collab requests
  const [collabRequests, setCollabRequests] = useState([]);
  // Market likes {productId: bool} and purchases [productId]
  const [globalLikes, setGlobalLikes] = useState({});
  const [globalPurchased, setGlobalPurchased] = useState([]);
  const [globalUploads, setGlobalUploads] = useState([]); // [{id,title,img,media,...}]
  const [showUploadPage, setShowUploadPage] = useState(false);
  const [uploadReturnUser, setUploadReturnUser] = useState(null);
  const [publishSuccessWork, setPublishSuccessWork] = useState(null); // shows PublishSuccessModal
  const [pushToMarketWork, setPushToMarketWork] = useState(null);     // shows PushToMarketModal
  const [connectPushedWork, setConnectPushedWork] = useState(null);  // shows Connect push success // reopen profile after upload cancel
  const uploadReopenFn = React.useRef(null); // fn to call on upload cancel to reopen the profile
  const uploadInitialDraftRef = React.useRef(null); // draft to pre-load into UploadWorkPage
  const [uploadDrafts, setUploadDrafts] = useState([]);
  const [openMyProfileAt, setOpenMyProfileAt] = useState(null); // null | tab string
  // Team system
  const [teamRelationships, setTeamRelationships] = useState([]); // [{a,b}]
  const [teamInvites, setTeamInvites] = useState([]); // [{id,from,to,ts}]
  const [connectInvites, setConnectInvites] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]); // handles of blocked users
  const [activeConnectInviteNotif, setActiveConnectInviteNotif] = useState(null);
  const [declineConnectConfirmOpen, setDeclineConnectConfirmOpen] = useState(false);
  // Notification system
  const [notifications, setNotifications] = useState([
    { id: 1, msg: "@neonphoenix liked your post", icon: 'Heart', color: '#ec4899', time: '2m', type: 'like', resolved: false },
    { id: 2, msg: "New sale: NeuroFeed Dashboard", icon: 'ShoppingCart', color: '#10b981', time: '15m', type: 'sale', resolved: false },
    { id: 3, msg: "@starweaver invited you to their team", icon: 'Users', color: '#22d3ee', time: '1h', type: 'teamInvite', inviterHandle: '@starweaver', inviterName: 'Star Weaver', inviterAv: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?w=60&h=60&fit=crop', resolved: false },
    { id: 4, msg: "Answer accepted in forum", icon: 'CheckCircle', color: '#a855f7', time: '3h', type: 'misc', resolved: false },
    { id: 5, msg: "@quantumrift followed you", icon: 'UserPlus', color: '#f59e0b', time: '5h', type: 'follow', resolved: false },
  ]);
  const [notificationHistory, setNotificationHistory] = useState(() => {
    try { const s = sessionStorage.getItem('vw_notif_history'); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => {
    try { sessionStorage.setItem('vw_notif_history', JSON.stringify(notificationHistory)); } catch { }
  }, [notificationHistory]);
  const [showViewAll, setShowViewAll] = useState(false);
  const [activeTeamInviteNotif, setActiveTeamInviteNotif] = useState(null); // team invite being responded to
  const [declineConfirmOpen, setDeclineConfirmOpen] = useState(false);
  const [inviteProfileUser, setInviteProfileUser] = useState(null); // profile opened from notification inviter name
  const [showNotifHistory, setShowNotifHistory] = useState(false);
  const [viewAllPage, setViewAllPage] = useState(1);
  const [notifHistoryPage, setNotifHistoryPage] = useState(1);
  // Escape key closes notification modals
  React.useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') {
        if (showNotifHistory) { setShowNotifHistory(false); return; }
        if (showViewAll) { setShowViewAll(false); return; }
      }
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [showViewAll, showNotifHistory]);
  const addNotification = React.useCallback((notif) => {
    setNotifications(prev => {
      const next = [{ ...notif, id: Date.now() + Math.random(), resolved: false }, ...prev];
      if (next.length > 50) {
        const oldest = next[next.length - 1];
        setNotificationHistory(h => {
          const nh = [{ ...oldest, autoArchived: true }, ...h];
          return nh.length > 100 ? nh.slice(0, 100) : nh;
        });
        return next.slice(0, 50);
      }
      return next;
    });
  }, []);
  const resolveNotification = React.useCallback((id) => {
    setNotifications(prev => {
      const notif = prev.find(n => n.id === id);
      if (notif) {
        setNotificationHistory(h => {
          const nh = [{ ...notif, resolved: true, autoArchived: false }, ...h];
          return nh.length > 100 ? nh.slice(0, 100) : nh;
        });
      }
      return prev.filter(n => n.id !== id);
    });
  }, []);
  // globalTags: computed from all published works — single source of truth for tag search
  const globalTags = React.useMemo(() => [...new Set(globalUploads.flatMap(u => u.tags || []))], [globalUploads]);

  const [showGlobalAuth, setShowGlobalAuth] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');
  const [showGlobalSearch, setShowGlobalSearch] = useState(false);
  const [searchNavigateTo, setSearchNavigateTo] = useState(null); // {type:'product'|'creator', id?, handle?, data?}
  // Close search on ESC key or outside click
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') { setShowGlobalSearch(false); setGlobalSearch(''); }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);
  React.useEffect(() => {
    if (!showGlobalSearch) return;
    const h = (e) => { if (!e.target.closest('[data-search-panel]') && !e.target.closest('[data-search-btn]')) { setShowGlobalSearch(false); setGlobalSearch(''); document.addEventListener('click', c => c.stopPropagation(), { capture: true, once: true }); } };
    setTimeout(() => document.addEventListener('mousedown', h), 0);
    return () => document.removeEventListener('mousedown', h);
  }, [showGlobalSearch]);
  // Scroll to top after every world/section change (fires after React renders)
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [sec, secKey]);

  // ── Typewriter: types → pauses → deletes → types next world phrase ──
  const TW_PHRASES = [
    'the future of collaborations is here',
    'Vibe Market — discover & sell creative work',
    'Vibe Community — connect with fellow creators',
    'Vibe Academy — learn, grow, and level up',
    'Vibe Connect — collaborate in real time',
  ];
  // World phrases cycle order after the first (shuffle indices 1-4)
  const TW_QUEUE = React.useRef([1, 2, 3, 4]);
  const twTid = React.useRef(null);
  useEffect(() => {
    if (view !== 'landing') return;
    let stopped = false;
    const schedule = (fn, ms) => { if (!stopped) { twTid.current = setTimeout(fn, ms); } };
    const shuffleQueue = () => {
      const arr = [1, 2, 3, 4];
      for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[arr[i], arr[j]] = [arr[j], arr[i]]; }
      TW_QUEUE.current = arr;
    };
    shuffleQueue();
    let queuePos = 0;
    const runPhrase = (phraseIdx, isFirst) => {
      const phrase = TW_PHRASES[phraseIdx];
      let pos = 0;
      const typeNext = () => {
        pos++;
        setTxt(phrase.slice(0, pos));
        if (pos < phrase.length) schedule(typeNext, 55);
        else schedule(() => deleteBack(phrase, isFirst ? 2800 : 1800), isFirst ? 2800 : 1800);
      };
      const deleteBack = (ph, _) => {
        let dPos = ph.length;
        const del = () => {
          dPos--;
          setTxt(ph.slice(0, dPos));
          if (dPos > 0) schedule(del, 28);
          else schedule(() => {
            queuePos++;
            if (queuePos >= TW_QUEUE.current.length) { shuffleQueue(); queuePos = 0; }
            runPhrase(TW_QUEUE.current[queuePos], false);
          }, 420);
        };
        del();
      };
      setTxt('');
      schedule(typeNext, isFirst ? 120 : 80);
    };
    runPhrase(0, true);
    return () => { stopped = true; clearTimeout(twTid.current); };
  }, [view]);

  // Apply accessibility settings to document body as CSS classes
  React.useEffect(() => {
    const b = document.body;
    b.classList.toggle('reduce-motion', !!(accessibilitySettings && accessibilitySettings.reduceMotion));
    b.classList.toggle('high-contrast', !!(accessibilitySettings && accessibilitySettings.highContrast));
    b.classList.toggle('large-text', !!(accessibilitySettings && accessibilitySettings.largeText));
  }, [accessibilitySettings]);

  const goSec = useCallback((id) => {
    const s = SECS.find(x => x.id === id); if (!s) return;
    setNavHistory(h => [...h, { view, sec }]);
    setShowUploadPage(false);
    setBridgeCover(s.color);
    setSec(s);
    setView('section');
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => setBridgeCover(null), 1200);
  }, [view, sec]);

  // Called from header world switcher — skips galaxy, shows portal flash
  const switchWorld = useCallback((id) => {
    const s = SECS.find(x => x.id === id); if (!s || sec?.id === id) return;
    setNavHistory(h => [...h, { view, sec }]);
    setShowUploadPage(false);
    setBridgeCover(s.color);
    setSec(s); setSecKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => setBridgeCover(null), 1200);
  }, [sec]);

  const goBack = () => {
    setShowUploadPage(false);
    const prev = navHistory[navHistory.length - 1];
    if (!prev) {
      setWarpCol('#0a0a1a'); setWarp(true);
      setTimeout(() => { setView('hub'); setSec(null); setWarp(false); }, 380);
      return;
    }
    setNavHistory(h => h.slice(0, -1));
    setWarpCol('#0a0a1a'); setWarp(true);
    setTimeout(() => { setView(prev.view); setSec(prev.sec); setWarp(false); }, 380);
  };

  const [privateChat, setPrivateChat] = useState(null);
  const [workspaces, setWorkspaces] = useState(INIT_WS);
  const [activeConnectWsId, setActiveConnectWsId] = useState('ws1');

  const handleInviteToVibe = (invitedUser, targetWsId = null) => {
    const userName = invitedUser.full || invitedUser.name || invitedUser.user || 'Creator';
    const userAv = invitedUser.av || invitedUser.src || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop';
    const userHandle = invitedUser.handle || invitedUser.name || userName;
    const targetWs = targetWsId ? workspaces.find(w => w.id === targetWsId) : null;
    const invite = {
      id: Date.now(),
      inviterHandle: '@you',
      inviterName: userProfile?.name || 'You',
      inviterAv: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=60&h=60&fit=crop',
      targetHandle: userHandle,
      targetName: userName,
      targetAv: userAv,
      targetWsId: targetWsId || null,
      wsName: targetWs?.name || `Connect with ${userName}`,
      wsMemberCount: targetWs?.members?.length || 0,
      status: 'pending',
      responseGiven: null,
    };
    setConnectInvites(prev => [invite, ...prev]);
    addNotification({
      msg: `Vibe Connect invite sent to ${userName} — waiting for their response`,
      icon: 'Zap', color: '#22d3ee', type: 'vibeConnectInviteSent', time: 'just now',
      inviteId: invite.id, responseGiven: null,
    });
    setTimeout(() => {
      addNotification({
        msg: `You have a new Vibe Connect invite${targetWs ? ` to join "${targetWs.name}"` : ''}`,
        icon: 'Zap', color: '#22d3ee', type: 'vibeConnectInvite', time: 'just now',
        inviteId: invite.id,
        inviterHandle: '@you',
        inviterName: userProfile?.name || 'You',
        inviterAv: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=60&h=60&fit=crop',
        targetHandle: userHandle, targetName: userName, targetAv: userAv,
        targetWsId: targetWsId || null, wsName: invite.wsName, wsMemberCount: invite.wsMemberCount,
        responseGiven: null,
      });
    }, 500);
  };

  const handleBriefPost = (text) => {
    const briefPost = { id: Date.now(), user: '@you', av: userProfile.avatar, time: 'just now', txt: `📋 PROJECT BRIEF: ${text}`, tags: ['#Brief', '#Collab', '#ForHire'], img: null, lk: 0, cm: 0, isBrief: true };
    setCommunityPosts(p => [briefPost, ...(p || [])]);
  };
  const renderSec = () => {
    switch (sec?.id) {
      case 'market': return <Market
        onBriefPost={handleBriefPost}
        onInviteToVibe={handleInviteToVibe}
        workspaces={workspaces}
        globalUploads={globalUploads}
        onUploadPublish={(w) => setGlobalUploads(u => [w, ...u])}
        onUploadDraft={(d) => setUploadDrafts(dr => [d, ...dr])}
        uploadDrafts={uploadDrafts}
        setUploadDrafts={setUploadDrafts}
        onRequestUpload={(user, reopenFn) => { setUploadReturnUser(user || null); uploadReopenFn.current = reopenFn || null; setShowUploadPage(true); }}
        uploadInitialDraftRef={uploadInitialDraftRef}
        onOpenSettings={openSettings}
        openMyProfileAt={openMyProfileAt}
        onMyProfileHandled={() => setOpenMyProfileAt(null)}
        teamRelationships={teamRelationships}
        setTeamRelationships={setTeamRelationships}
        teamInvites={teamInvites}
        setTeamInvites={setTeamInvites}
        addNotification={addNotification}
        resolveNotification={resolveNotification}
        globalFollowed={globalFollowed}
        setGlobalFollowed={setGlobalFollowed}
        globalWish={globalWish}
        setGlobalWish={setGlobalWish}
        globalLikes={globalLikes}
        setGlobalLikes={setGlobalLikes}
        globalPurchased={globalPurchased}
        setGlobalPurchased={setGlobalPurchased}
        globalAuthed={globalAuthed}
        setGlobalAuthed={setGlobalAuthed}
        userProfile={userProfile}
        globalTags={globalTags}
        collabRequests={collabRequests}
        setCollabRequests={setCollabRequests}
        searchNavigateTo={searchNavigateTo}
        onSearchNavigated={() => setSearchNavigateTo(null)}
      />;
      case 'community': return <Community
        extraPosts={communityPosts}
        onInviteToVibe={handleInviteToVibe}
        workspaces={workspaces}
        uploads={globalUploads}
        uploadDrafts={uploadDrafts}
        setUploadDrafts={setUploadDrafts}
        onUploadPublish={(w) => setGlobalUploads(u => [w, ...u])}
        onUploadDraft={(d) => setUploadDrafts(dr => [d, ...dr])}
        onRequestUpload={(user, fn) => { uploadReopenFn.current = fn || null; setShowUploadPage(true); }}
        onOpenSettings={openSettings}
        teamRelationships={teamRelationships}
        setTeamRelationships={setTeamRelationships}
        teamInvites={teamInvites}
        setTeamInvites={setTeamInvites}
        addNotification={addNotification}
        resolveNotification={resolveNotification}
        globalFollowed={globalFollowed}
        setGlobalFollowed={setGlobalFollowed}
        globalBm={globalBm}
        setGlobalBm={setGlobalBm}
        earnedBadges={earnedBadges}
        setEarnedBadges={setEarnedBadges}
        userProfile={userProfile}
        uploadInitialDraftRef={uploadInitialDraftRef}
        collabRequests={collabRequests}
        setCollabRequests={setCollabRequests}
        onBookmarkComment={(c) => setBookmarkedComments(prev => [c, ...prev.filter(x => x.id !== c.id)])}
        onBookmarkPost={(p) => setBookmarkedPosts(prev => [{ ...p, source: 'community', bookmarkedAt: Date.now() }, ...prev.filter(x => x.id !== p.id)])}
      />;
      case 'academy': return <Academy
        onOpenSettings={openSettings}
        userProfile={userProfile}
        earnedBadges={earnedBadges}
        globalFollowed={globalFollowed}
        setGlobalFollowed={setGlobalFollowed}
        addNotification={addNotification}
        teamRelationships={teamRelationships}
        setTeamRelationships={setTeamRelationships}
        teamInvites={teamInvites}
        setTeamInvites={setTeamInvites}
        workspaces={workspaces}
        globalUploads={globalUploads}
        onBookmarkPost={(p) => setBookmarkedPosts(prev => [{ ...p, source: 'academy', bookmarkedAt: Date.now() }, ...prev.filter(x => x.id !== p.id)])}
        myList={globalMyList} setMyList={setGlobalMyList}
      />;
      case 'connect': return <Connect
        privateChat={privateChat}
        onClearPrivateChat={() => setPrivateChat(null)}
        connectInvites={connectInvites}
        setConnectInvites={setConnectInvites}
        workspaces={workspaces}
        setWorkspaces={setWorkspaces}
        activeConnectWsId={activeConnectWsId}
        setActiveConnectWsId={setActiveConnectWsId}
        onPushToMarket={() => setPushToMarketWork({ title: '', img: '', media: [], tags: ['Connect'], cr: '@you', crFull: 'You', connectMode: true })}
        onOpenSettings={openSettings}
        userProfile={userProfile}
        globalFollowed={globalFollowed}
        setGlobalFollowed={setGlobalFollowed}
        addNotification={addNotification}
        resolveNotification={resolveNotification}
        teamRelationships={teamRelationships}
        setTeamRelationships={setTeamRelationships}
        teamInvites={teamInvites}
        setTeamInvites={setTeamInvites}
        collabRequests={collabRequests}
        setCollabRequests={setCollabRequests}
        globalUploads={globalUploads}
        uploadDrafts={uploadDrafts}
        earnedBadges={earnedBadges}
        myList={globalMyList} setMyList={setGlobalMyList}
      />;
      default: return null;
    }
  };

  // ── Named handlers (extracted to avoid multi-line JSX prop callbacks) ──
  const buildRootMeProfile = () => ({
    handle: userProfile?.handle || '@you', name: userProfile?.name || 'You',
    crFull: userProfile?.name || 'You', full: userProfile?.name || 'You',
    av: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=160&h=160&fit=crop',
    on: userProfile?.showOnline !== false, color: '#22d3ee',
    projects: globalUploads.filter(u => u.cr === '@you' || u.crFull === 'You').length,
    followers: '0', role: 'creator', badges: ['starter'],
    bio: userProfile?.bio, location: userProfile?.location, website: userProfile?.website,
    isOwnProfile: true,
  });
  const handleSaveProfile = (updated) => {
    setUserProfile(p => ({ ...p, ...updated }));
    if (updated.name) setGlobalUser(u => u ? { ...u, name: updated.name } : u);
    if (updated.avatar || updated.name || updated.handle) {
      setWorkspaces(ws => ws.map(w => ({
        ...w,
        members: w.members.map(m => m.handle === '@you' || m.handle === updated.handle ? {
          ...m, av: updated.avatar || m.av,
          handle: updated.handle || m.handle,
        } : m)
      })));
    }
  };

  return (
    <ConfirmProvider>
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
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                {[[ShoppingCart, 'Marketplace', '#ec4899', 'market'], [Users, 'Community', '#10b981', 'community'], [GraduationCap, 'Academy', '#a855f7', 'academy'], [LayoutGrid, 'Connect', '#22d3ee', 'connect']].map(([Icon, l, c, id]) => (
                  <button key={l} onClick={() => goSec(id)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 15px', borderRadius: 999, fontSize: 12, fontWeight: 600, color: c, border: `1px solid ${c}33`, background: 'rgba(255,255,255,.03)', cursor: 'pointer', transition: 'all .25s', fontFamily: 'Rajdhani,sans-serif' }}
                    onMouseEnter={e => { e.currentTarget.style.background = `linear-gradient(135deg,${c}22,${c}08)`; e.currentTarget.style.borderColor = c; e.currentTarget.style.boxShadow = `0 0 24px ${c}55,0 0 48px ${c}22,inset 0 0 12px ${c}11`; e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.textShadow = `0 0 12px ${c}`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.03)'; e.currentTarget.style.borderColor = `${c}33`; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.color = c; e.currentTarget.style.textShadow = 'none'; }}>
                    <span style={{ display: 'flex', transition: 'transform .25s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.3) rotate(-8deg)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}>
                      <Icon size={13} color="currentColor" />
                    </span>
                    {l}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,.28)', fontFamily: 'JetBrains Mono', letterSpacing: '.08em', marginTop: 10, marginBottom: 46 }}>
                click any world above to skip the animation
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
                {/* Small-screen world selector — shows only when 3D canvas planets are too small to tap */}
                {vw <= 600 && <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '100%', padding: '0 16px', pointerEvents: 'auto', marginTop: 4 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%', maxWidth: 320 }}>
                    {SECS.map(s => (<button key={s.id} onClick={() => goSec(s.id)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 12, border: `1px solid ${s.color}40`, background: `${s.color}10`, cursor: 'pointer', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .2s' }} onMouseEnter={e => e.currentTarget.style.background = `${s.color}22`} onMouseLeave={e => e.currentTarget.style.background = `${s.color}10`}><s.icon size={14} color={s.color} />{s.label.split(' ').slice(1).join(' ')}</button>))}
                  </div>
                </div>}
              </div>
            </>
          )}

          {/* Portal jump overlay — cinematic ring burst */}
          {/* SpaceBridge — particle canvas cover that survives GalaxyHub unmount */}
          {bridgeCover && <SpaceBridge color={bridgeCover} onDone={() => setBridgeCover(null)} />}
          {portal && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 150, pointerEvents: 'none' }}>
              {/* Deep radial glow */}
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 50%,${portal}88 0%,${portal}33 35%,transparent 70%)`, animation: 'portalFlash .65s cubic-bezier(.22,1,.36,1) forwards' }} />
              {/* Expanding rings — staggered */}
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', width: 80 + i * 90, height: 80 + i * 90, borderRadius: '50%', border: `${2 - i * 0.2}px solid ${portal}`, transform: 'translate(-50%,-50%) scale(0)', animation: `portalRing ${.55 + i * .13}s ${i * .07}s cubic-bezier(.22,1,.36,1) forwards`, opacity: .85 }} />
              ))}
              {/* Central bright flash */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', width: 24, height: 24, borderRadius: '50%', background: portal, transform: 'translate(-50%,-50%)', animation: 'portalPull .5s ease-out forwards', boxShadow: `0 0 40px 20px ${portal}88` }} />
            </div>
          )}

          {/* ── SECTION ── */}
          {view === 'section' && sec && (
            <div key={secKey} style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>
              <header className="gl2" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 64, padding: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 200, borderBottom: '1px solid var(--br)', backdropFilter: 'blur(32px)', animation: 'secHeaderSlide .5s cubic-bezier(.22,1,.36,1) both', gap: 8, minWidth: 0 }}>
                {/* ── LEFT: VibeWorld · Galaxy · Current World ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 2, flex: '1 1 0', minWidth: 0, overflow: 'hidden' }}>

                  {/* VIBEWORLD home */}
                  <button onClick={() => setView('landing')} style={{ display: 'flex', alignItems: 'center', gap: 0, background: 'none', border: 'none', cursor: 'pointer', padding: '5px 8px', borderRadius: 8, transition: 'background .2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                    <span className="O" style={{ fontSize: 12, fontWeight: 900, background: 'linear-gradient(135deg,#22d3ee,#a855f7,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '.05em', whiteSpace: 'nowrap' }}>VIBE<span style={{ fontSize: 10 }}>WORLD</span></span>
                  </button>

                  <div className="hdr-divider" style={{ width: 1, height: 18, background: 'rgba(255,255,255,.1)', margin: '0 2px' }} />

                  {/* Back to Galaxy — direct hub navigation */}
                  <button onClick={() => { setShowUploadPage(false); setWarpCol('#0a0a1a'); setWarp(true); setTimeout(() => { setView('hub'); setSec(null); setNavHistory([]); setWarp(false); }, 380); }} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: '5px 10px', borderRadius: 8, transition: 'background .2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                    <RainbowArrow size={14} />
                    <span className="galaxy-label" style={{ fontSize: 10, fontWeight: 700, fontFamily: 'JetBrains Mono,monospace', color: 'rgba(255,255,255,.55)', letterSpacing: '.12em' }}>VIBEVERSE</span>
                  </button>

                  <div className="hdr-divider" style={{ width: 1, height: 18, background: 'rgba(255,255,255,.1)', margin: '0 2px' }} />

                  {/* BACK button — only inside worlds */}
                  {view !== 'landing' && view !== 'galaxy' && navHistory.length > 0 && (
                    <>
                      <button onClick={goBack} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: '5px 10px', borderRadius: 8, transition: 'background .2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.06)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                        <RainbowArrow size={14} />
                        <span style={{ fontSize: 10, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '.12em', background: 'linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #f59e0b, #22d3ee)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'backGradientSlide 3s linear infinite', filter: 'drop-shadow(0 0 6px rgba(34,211,238,0.4))' }}>BACK</span>
                      </button>
                      <div className="hdr-divider" style={{ width: 1, height: 18, background: 'rgba(255,255,255,.1)', margin: '0 2px' }} />
                    </>
                  )}

                  {/* Current world badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '4px 10px', borderRadius: 8, background: `${sec.color}12`, border: `1px solid ${sec.color}30`, minWidth: 0, overflow: 'hidden', flexShrink: 1 }}>
                    <sec.icon size={13} color={sec.color} style={{ flexShrink: 0 }} />
                    <span className="O world-label" style={{ fontSize: 11, fontWeight: 700, color: sec.color, letterSpacing: '.06em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sec.label}</span>
                  </div>
                </div>

                {/* ── CENTRE: Other world icons ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: '1 1 0', justifyContent: 'flex-end', minWidth: 0 }}>
                  <div data-search-btn="1" className="gl search-bar" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '6px 14px', borderRadius: 10, cursor: 'pointer', minWidth: 0, width: 'clamp(34px,15vw,170px)', transition: 'all .2s', position: 'relative', flexShrink: 1 }}
                    onClick={() => setShowGlobalSearch(true)}>
                    <Search size={12} color="rgba(34,211,238,.6)" />
                    <span className="M search-text" style={{ fontSize: 10, color: 'var(--mu)', flex: 1 }}>Search {sec?.label?.split(' ')[1] || 'everything'}...</span>
                    <span className="search-cmd" style={{ fontSize: 8, color: 'rgba(255,255,255,.2)', fontFamily: 'JetBrains Mono' }}>⌘K</span>
                  </div>
                  {showGlobalSearch && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(0,0,0,.72)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '80px 20px 20px' }}
                      onClick={(e) => { e.stopPropagation(); setShowGlobalSearch(false); setGlobalSearch(''); }}>
                      <div data-search-panel="1" style={{ width: '100%', maxWidth: 640, animation: 'sU .2s ease' }} onClick={e => e.stopPropagation()}>
                        <div style={{ background: 'rgba(6,9,24,.98)', borderRadius: 18, border: '1px solid rgba(34,211,238,.25)', overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,.8)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                            <Search size={18} color="#22d3ee" />
                            <input autoFocus value={globalSearch} onChange={e => setGlobalSearch(e.target.value)}
                              placeholder={`Search ${sec?.label || 'VibeWorld'}...`}
                              style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: 'white', fontSize: 16, fontFamily: 'Rajdhani', fontWeight: 600 }} />
                            {globalSearch && <button onClick={() => setGlobalSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.3)', fontSize: 16 }}>✕</button>}
                            <button onClick={() => { setShowGlobalSearch(false); setGlobalSearch(''); }} style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 7, padding: '3px 8px', cursor: 'pointer', color: 'rgba(255,255,255,.5)', fontSize: 10, fontFamily: 'JetBrains Mono' }}>ESC</button>
                          </div>
                          {!globalSearch ? (
                            <div style={{ padding: '16px 20px' }}>
                              <div style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '.08em' }}>Quick access</div>
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                {SECS.map(s => {
                                  const SIcon = s.icon; return (
                                    <div key={s.id}
                                      style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 14px', borderRadius: 10, border: `1px solid ${s.color}35`, background: `${s.color}0a`, fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', color: `${s.color}`, pointerEvents: 'none', userSelect: 'none' }}>
                                      <SIcon size={17} color={s.color} /><span>{s.label.split(' ').slice(1).join(' ')}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (() => {
                            const q = globalSearch.toLowerCase();
                            const mktItems = MKT.filter(m => !blockedUsers.includes(m.cr) && [m.title, m.cr, ...(m.tags || [])].some(s => s.toLowerCase().includes(q))).slice(0, 6);
                            const crItems = DESIGNERS_DATA.filter(d => !blockedUsers.includes(d.name) && [d.full, d.name, ...(d.tags || [])].some(s => s.toLowerCase().includes(q))).slice(0, 3);
                            const commPosts = (communityPosts || []).filter(p => !blockedUsers.includes(p.user) && [p.txt, p.user, ...(p.tags || [])].some(s => s && s.toLowerCase().includes(q))).slice(0, 4);
                            const acItems = ACADEMY_SEARCH_DATA.filter(a => !blockedUsers.includes(a.author) && a.title.toLowerCase().includes(q)).slice(0, 5);
                            const total = mktItems.length + crItems.length + commPosts.length + acItems.length;
                            const SectionHead = ({ label, color, count }) => count > 0 ? <div style={{ padding: '6px 20px 4px', fontSize: 9, color: color, fontFamily: 'JetBrains Mono', fontWeight: 700, letterSpacing: '.1em', borderTop: '1px solid rgba(255,255,255,.05)', marginTop: 4 }}>{label} <span style={{ opacity: .6 }}>({count})</span></div> : null;
                            return (
                              <div style={{ maxHeight: 400, overflowY: 'auto', padding: '4px 0' }}>
                                {total === 0 && <div style={{ padding: '28px', textAlign: 'center', color: 'var(--mu)', fontSize: 12 }}>No results for "<strong style={{ color: 'white' }}>{globalSearch}</strong>"</div>}
                                <SectionHead label="MARKET" color="#ec4899" count={mktItems.length + crItems.length} />
                                {mktItems.map(m => (
                                  <div key={m.id} onClick={() => { setShowGlobalSearch(false); setGlobalSearch(''); const s = SECS.find(x => x.id === 'market'); if (s) { setSec(s); setView('section'); setSecKey(k => k + 1); } setSearchNavigateTo({ type: 'product', id: m.id }); }}
                                    style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', transition: 'background .12s' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(236,72,153,.06)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                                    <img src={m.img} alt="" style={{ width: 36, height: 36, borderRadius: 7, objectFit: 'cover', flexShrink: 0 }} />
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                      <div style={{ fontSize: 12, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.title}</div>
                                      <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{m.cr} · {m.price}</div>
                                    </div>
                                    <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 999, background: 'rgba(236,72,153,.12)', color: '#ec4899', fontFamily: 'JetBrains Mono', fontWeight: 700, border: '1px solid rgba(236,72,153,.2)', flexShrink: 0 }}>Market</span>
                                  </div>
                                ))}
                                {crItems.map(d => (
                                  <div key={d.name} onClick={() => { setShowGlobalSearch(false); setGlobalSearch(''); const s = SECS.find(x => x.id === 'market'); if (s) { setSec(s); setView('section'); setSecKey(k => k + 1); } setSearchNavigateTo({ type: 'creator', handle: d.name, data: d }); }}
                                    style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', transition: 'background .12s' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(236,72,153,.04)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                                    <Av src={d.av} sz={32} on={d.on} />
                                    <div style={{ flex: 1 }}>
                                      <div style={{ fontSize: 12, fontWeight: 700 }}>{d.full}</div>
                                      <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{d.role}</div>
                                    </div>
                                    <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 999, background: 'rgba(236,72,153,.1)', color: '#ec4899', fontFamily: 'JetBrains Mono', fontWeight: 700, border: '1px solid rgba(236,72,153,.2)', flexShrink: 0 }}>Creator</span>
                                  </div>
                                ))}
                                <SectionHead label="COMMUNITY" color="#10b981" count={commPosts.length} />
                                {commPosts.map(p => (
                                  <div key={p.id} onClick={() => { setShowGlobalSearch(false); setGlobalSearch(''); const s = SECS.find(x => x.id === 'community'); if (s) { setSec(s); setView('section'); setSecKey(k => k + 1); } }}
                                    style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', transition: 'background .12s' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,.06)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                                    <div style={{ width: 36, height: 36, borderRadius: 7, background: 'rgba(16,185,129,.12)', border: '1px solid rgba(16,185,129,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Users size={16} color="#10b981" /></div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                      <div style={{ fontSize: 12, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'rgba(255,255,255,.85)' }}>{(p.txt || '').slice(0, 60)}{(p.txt || '').length > 60 ? '…' : ''}</div>
                                      <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{p.user}</div>
                                    </div>
                                    <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 999, background: 'rgba(16,185,129,.12)', color: '#10b981', fontFamily: 'JetBrains Mono', fontWeight: 700, border: '1px solid rgba(16,185,129,.2)', flexShrink: 0 }}>Community</span>
                                  </div>
                                ))}
                                <SectionHead label="ACADEMY" color="#a855f7" count={acItems.length} />
                                {acItems.map(a => (
                                  <div key={a.id} onClick={() => { setShowGlobalSearch(false); setGlobalSearch(''); const s = SECS.find(x => x.id === 'academy'); if (s) { setSec(s); setView('section'); setSecKey(k => k + 1); } }}
                                    style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', transition: 'background .12s' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,.06)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                                    <div style={{ width: 36, height: 36, borderRadius: 7, background: 'rgba(168,85,247,.12)', border: '1px solid rgba(168,85,247,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><GraduationCap size={16} color="#a855f7" /></div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                      <div style={{ fontSize: 12, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'rgba(255,255,255,.85)' }}>{a.title}</div>
                                      <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{a.author} · {a.type}</div>
                                    </div>
                                    <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 999, background: 'rgba(168,85,247,.12)', color: '#a855f7', fontFamily: 'JetBrains Mono', fontWeight: 700, border: '1px solid rgba(168,85,247,.2)', flexShrink: 0 }}>Academy</span>
                                  </div>
                                ))}
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Notifications — hover to open */}
                  <div style={{ position: 'relative' }} onMouseEnter={() => setNotif(true)} onMouseLeave={() => setNotif(false)}>
                    <button style={{ position: 'relative', padding: 7, background: 'none', border: 'none', cursor: 'pointer', color: notif ? '#22d3ee' : 'rgba(255,255,255,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color .2s' }}>
                      <Bell size={17} />
                      {notifications.length > 0 && <div style={{ position: 'absolute', top: 3, right: 3, width: 13, height: 13, borderRadius: '50%', background: '#ec4899', fontSize: 7, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>{notifications.length}</div>}
                    </button>
                    {notif && (
                      <div style={{ position: 'absolute', top: 'calc(100% + 6px)', right: 0, width: 320, borderRadius: 16, zIndex: 400, background: 'rgba(6,9,24,.98)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,.1)', animation: 'hoverMenuSlide .18s ease', boxShadow: '0 20px 60px rgba(0,0,0,.85),0 0 0 1px rgba(255,255,255,.05)', overflow: 'hidden' }}>
                        <div style={{ padding: '13px 15px', borderBottom: '1px solid var(--br)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Notifications</span>
                          {notifications.length >= 5 && (
                            <span onClick={() => { setNotif(false); setShowViewAll(true); setViewAllPage(1); }} style={{ fontSize: 10, color: '#22d3ee', fontFamily: 'JetBrains Mono', cursor: 'pointer', transition: 'all .15s' }}
                              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>View All</span>
                          )}
                        </div>
                        {notifications.length === 0 ? (
                          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--mu)', fontSize: 11 }}>
                            <Bell size={24} style={{ opacity: .3, margin: '0 auto 8px', display: 'block' }} />
                            No new notifications
                          </div>
                        ) : notifications.slice(0, 5).map(n => {
                          const IconComp = { Heart, ShoppingCart, Users, CheckCircle, Bell, UserPlus, Flag, MessageSquare, Star, Award, Zap }[n.icon] || Bell;
                          return (
                            <div key={n.id} style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', transition: 'background .15s', border: n.type === 'teamInvite' ? '1px solid rgba(34,211,238,.12)' : 'none', borderBottom: '1px solid rgba(255,255,255,.04)', borderRadius: n.type === 'teamInvite' ? 8 : 0, background: n.type === 'teamInvite' ? 'rgba(34,211,238,.03)' : 'none' }}
                              onMouseEnter={e => e.currentTarget.style.background = n.type === 'teamInvite' ? 'rgba(34,211,238,.07)' : 'rgba(255,255,255,.04)'}
                              onMouseLeave={e => e.currentTarget.style.background = n.type === 'teamInvite' ? 'rgba(34,211,238,.03)' : 'none'}
                              onClick={() => { if (n.type === 'teamInvite' && !n.responseGiven) { setActiveTeamInviteNotif(n); } else if (n.type === 'vibeConnectInvite' && !n.responseGiven) { setActiveConnectInviteNotif(n); } else if (n.type === 'vibeConnectAccepted' || n.type === 'vibeConnectAcceptedBySender') { const _cs = SECS.find(x => x.id === 'connect'); setSec(_cs); setView('section'); setSecKey(k => k + 1); resolveNotification(n.id); } else if (n.type === 'teamJoined') { if (setOpenMyProfileAt) setOpenMyProfileAt('team'); else { const me = { handle: userProfile?.handle || '@you', name: userProfile?.name || 'You', full: userProfile?.name || 'You', crFull: userProfile?.name || 'You', av: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=160&h=160&fit=crop', on: true, color: '#22d3ee', projects: 0, followers: '0', role: 'creator', badges: earnedBadges || ['starter'], isOwnProfile: true }; setInviteProfileUser(me); } resolveNotification(n.id); } else { resolveNotification(n.id); } }}>
                              <div style={{ width: 30, height: 30, borderRadius: 8, background: `${n.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><IconComp size={14} color={n.color} /></div>
                              <div style={{ flex: 1 }}>
                                {n.type === 'teamInvite' && n.inviterName ? (
                                  <div style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.3 }}>
                                    <span
                                      style={{ color: '#22d3ee', fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}
                                      onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                                      onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                                      onClick={e => { e.stopPropagation(); const d = DESIGNERS_DATA.find(x => x.name === n.inviterHandle || ('@' + x.name) === n.inviterHandle); if (d) { setInviteProfileUser({ ...d, handle: d.name, full: d.full, badges: d.badges || ['starter'] }); } }}
                                    >{n.inviterName}</span>{' invited you to join their team'}
                                  </div>
                                ) : (
                                  <div style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.3 }}>{n.msg}</div>
                                )}
                                <div className="M" style={{ fontSize: 8, color: 'var(--mu)', marginTop: 2 }}>{n.time} ago</div>
                                {n.type === 'teamInvite' && !n.responseGiven && (
                                  <div style={{ fontSize: 9, color: '#22d3ee', fontFamily: 'JetBrains Mono', marginTop: 3 }}>Tap to respond ›</div>
                                )}
                                {n.type === 'vibeConnectInvite' && !n.responseGiven && (
                                  <div style={{ fontSize: 9, color: '#22d3ee', fontFamily: 'JetBrains Mono', marginTop: 3 }}>⚡ Tap to respond ›</div>
                                )}
                                {n.type === 'vibeConnectInviteSent' && (() => {
                                  const inv = connectInvites.find(i => i.id === n.inviteId);
                                  const status = inv?.responseGiven;
                                  if (status === 'accepted') return <div style={{ fontSize: 9, color: '#10b981', fontFamily: 'JetBrains Mono', marginTop: 3 }}>✓ Accepted</div>;
                                  if (status === 'declined') return <div style={{ fontSize: 9, color: '#ec4899', fontFamily: 'JetBrains Mono', marginTop: 3 }}>✗ Declined</div>;
                                  return <div style={{ fontSize: 9, color: 'rgba(255,255,255,.35)', fontFamily: 'JetBrains Mono', marginTop: 3 }}>Waiting for response...</div>;
                                })()}
                                {n.responseGiven && <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginTop: 2 }}>{n.responseGiven === 'accepted' ? '✓ Accepted' : '✗ Declined'}</div>}
                              </div>
                              <X size={11} color="rgba(255,255,255,.2)" onClick={e => { e.stopPropagation(); resolveNotification(n.id); }} />
                            </div>
                          );
                        })}
                        <div onClick={e => { e.stopPropagation(); setNotif(false); setShowNotifHistory(true); setNotifHistoryPage(1); }} style={{ padding: '11px 15px', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', transition: 'background .15s' }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.04)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                          <Clock size={12} color="var(--mu)" />
                          <span style={{ fontSize: 11, color: 'var(--mu)', fontFamily: 'Rajdhani', fontWeight: 600 }}>View Notification History</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Bookmark / Wishlist — hover to open */}
                  <div className="hide-sm" style={{ position: 'relative' }} onMouseEnter={() => setShowWishlist(true)} onMouseLeave={() => setShowWishlist(false)}>
                    <button data-header-bm="1" style={{ position: 'relative', padding: 7, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: showWishlist ? '#a855f7' : 'rgba(255,255,255,.55)', transition: 'color .2s' }}>
                      <Bookmark size={17} fill={showWishlist ? '#a855f7' : 'none'} color={showWishlist ? '#a855f7' : 'rgba(255,255,255,.55)'} />
                      {globalWish.length > 0 && <div style={{ position: 'absolute', top: 3, right: 3, width: 13, height: 13, borderRadius: '50%', background: '#a855f7', fontSize: 7, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>{globalWish.length}</div>}
                    </button>
                    {showWishlist && (
                      <div style={{ position: 'absolute', top: 'calc(100% + 6px)', right: 0, width: 340, borderRadius: 16, zIndex: 400, background: 'rgba(6,9,24,.98)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,.1)', animation: 'hoverMenuSlide .18s ease', boxShadow: '0 20px 60px rgba(0,0,0,.85),0 0 0 1px rgba(255,255,255,.05)' }}>
                        <div style={{ padding: '13px 16px', borderBottom: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span className="O" style={{ fontSize: 12, fontWeight: 700 }}>Saved Items</span>
                          <span style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{globalWish.length + bookmarkedPosts.length + bookmarkedComments.length} items</span>
                        </div>
                        {/* Tabs */}
                        <div style={{ padding: '8px 12px', display: 'flex', gap: 4, borderBottom: '1px solid rgba(255,255,255,.06)', overflowX: 'auto' }} className="thin-x">
                          {[['all', 'All', '#a855f7'], ['projects', 'Projects', '#a855f7'], ['posts', 'Posts', '#10b981'], ['services', 'Services', '#ec4899'], ['comments', 'Comments', '#22d3ee']].map(([t, l, c]) => (
                            <button key={t} onClick={() => setWishTab(t)} style={{ padding: '4px 10px', borderRadius: 999, border: `1px solid ${wishTab === t ? c : c + '33'}`, background: wishTab === t ? `${c}18` : `${c}08`, cursor: 'pointer', color: wishTab === t ? c : 'rgba(255,255,255,.45)', fontSize: 9, fontFamily: 'JetBrains Mono', fontWeight: 600, transition: 'all .15s', whiteSpace: 'nowrap', flexShrink: 0 }}
                              onMouseEnter={e => { e.currentTarget.style.background = `${c}22`; e.currentTarget.style.color = c; }}
                              onMouseLeave={e => { e.currentTarget.style.background = wishTab === t ? `${c}18` : `${c}08`; e.currentTarget.style.color = wishTab === t ? c : 'rgba(255,255,255,.45)'; }}>
                              {l}{t === 'all' && (globalWish.length + bookmarkedPosts.length + bookmarkedComments.length) > 0 ? ` (${globalWish.length + bookmarkedPosts.length + bookmarkedComments.length})` : ''}
                            </button>
                          ))}
                        </div>
                        {/* All tab */}
                        {wishTab === 'all' && (
                          <div style={{ maxHeight: 260, overflowY: 'auto', overscrollBehavior: 'contain' }}>
                            {globalWish.length === 0 && bookmarkedPosts.length === 0 && bookmarkedComments.length === 0 ? (
                              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--mu)', fontSize: 11 }}><Bookmark size={24} style={{ opacity: .3, margin: '0 auto 8px', display: 'block' }} />Nothing saved yet.</div>
                            ) : (
                              <>
                                {globalWish.slice(0, 4).map(id => { const item = MKT.find(m => m.id === id) || globalUploads.find(m => m.id === id); return item ? (<div key={id} style={{ padding: '8px 14px', borderBottom: '1px solid rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', transition: 'background .15s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.04)'} onMouseLeave={e => e.currentTarget.style.background = 'none'}><img src={item.img} alt="" style={{ width: 30, height: 30, borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} /><div style={{ flex: 1, overflow: 'hidden' }}><div style={{ fontSize: 11, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div><span style={{ fontSize: 8, color: '#a855f7', fontFamily: 'JetBrains Mono' }}>PROJECT</span></div></div>) : null; })}
                                {bookmarkedPosts.slice(0, 2).map(p => (<div key={p.id} style={{ padding: '8px 14px', borderBottom: '1px solid rgba(255,255,255,.04)', cursor: 'pointer', transition: 'background .15s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.04)'} onMouseLeave={e => e.currentTarget.style.background = 'none'}><div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}><span style={{ padding: '1px 5px', borderRadius: 3, background: p.source === 'community' ? 'rgba(16,185,129,.12)' : 'rgba(168,85,247,.12)', color: p.source === 'community' ? '#10b981' : '#a855f7', fontSize: 8, fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{p.source === 'community' ? 'COMMUNITY' : 'ACADEMY'}</span></div><div style={{ fontSize: 11, color: 'rgba(255,255,255,.75)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.text || p.txt}</div></div>))}
                                {bookmarkedComments.slice(0, 2).map(c => (<div key={c.id} style={{ padding: '8px 14px', borderBottom: '1px solid rgba(255,255,255,.04)', cursor: 'pointer', transition: 'background .15s', overflow: 'hidden', minWidth: 0 }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.04)'} onMouseLeave={e => e.currentTarget.style.background = 'none'}><div style={{ fontSize: 11, color: 'rgba(255,255,255,.75)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>{c.preview || c.text}</div><div style={{ fontSize: 8, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginTop: 2 }}>COMMENT · {c.author}</div></div>))}
                              </>
                            )}
                          </div>
                        )}
                        {/* Projects tab */}
                        {wishTab === 'projects' && (globalWish.length === 0 ? (
                          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--mu)', fontSize: 11 }}>
                            <Bookmark size={24} style={{ opacity: .3, margin: '0 auto 8px', display: 'block' }} />
                            No saved projects yet.
                          </div>
                        ) : (
                          <div style={{ maxHeight: 220, overflowY: 'auto', overscrollBehavior: 'contain' }}>
                            {globalWish.slice(0, 10).map((id) => {
                              const item = MKT.find(m => m.id === id) || globalUploads.find(m => m.id === id);
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
                        ))}
                        {/* Posts tab */}
                        {wishTab === 'posts' && (bookmarkedPosts.length === 0 ? (
                          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--mu)', fontSize: 11 }}>
                            <Bookmark size={24} style={{ opacity: .3, margin: '0 auto 8px', display: 'block' }} />
                            No saved posts yet. Bookmark posts in Community and Academy.
                          </div>
                        ) : (
                          <div style={{ maxHeight: 220, overflowY: 'auto', overscrollBehavior: 'contain' }}>
                            {[...bookmarkedPosts].sort((a, b) => b.bookmarkedAt - a.bookmarkedAt).slice(0, 8).map(p => (
                              <div key={p.id} style={{ padding: '9px 14px', borderBottom: '1px solid rgba(255,255,255,.04)', cursor: 'pointer', transition: 'background .15s' }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.04)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                                  <span style={{ padding: '1px 6px', borderRadius: 4, background: p.source === 'community' ? 'rgba(16,185,129,.12)' : 'rgba(168,85,247,.12)', color: p.source === 'community' ? '#10b981' : '#a855f7', fontSize: 8, fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{p.source === 'community' ? 'COMMUNITY' : 'ACADEMY'}</span>
                                  <span style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{p.user || p.author}</span>
                                </div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.75)', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: 1.4 }}>{p.txt || p.text || p.body}</div>
                              </div>
                            ))}
                          </div>
                        ))}
                        {/* Services tab */}
                        {wishTab === 'services' && (
                          <div style={{ padding: '20px', textAlign: 'center', color: 'var(--mu)', fontSize: 11 }}>
                            <Bookmark size={24} style={{ opacity: .3, margin: '0 auto 8px', display: 'block' }} />
                            No saved services yet.
                          </div>
                        )}
                        {/* Comments tab */}
                        {wishTab === 'comments' && (bookmarkedComments.length === 0 ? (
                          <div style={{ padding: '20px', textAlign: 'center', color: 'var(--mu)', fontSize: 11 }}>
                            <Bookmark size={28} style={{ opacity: .2, margin: '0 auto 8px', display: 'block' }} />
                            <div style={{ fontSize: 11, marginBottom: 4 }}>No bookmarked comments yet.</div>
                            <div style={{ fontSize: 9, color: 'rgba(255,255,255,.3)', fontFamily: 'JetBrains Mono', lineHeight: 1.5 }}>Bookmark comments in Community and Academy to save them here.</div>
                          </div>
                        ) : (
                          <div style={{ maxHeight: 220, overflowY: 'auto', overscrollBehavior: 'contain' }}>
                            {[...bookmarkedComments].sort((a, b) => b.bookmarkedAt - a.bookmarkedAt).slice(0, 6).map(c => (
                              <div key={c.id} style={{ padding: '9px 14px', borderBottom: '1px solid rgba(255,255,255,.04)', cursor: 'pointer', transition: 'background .15s' }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.04)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                                  <span style={{ padding: '1px 6px', borderRadius: 4, background: c.source === 'community' ? 'rgba(16,185,129,.12)' : 'rgba(168,85,247,.12)', color: c.source === 'community' ? '#10b981' : '#a855f7', fontSize: 8, fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{c.source === 'community' ? 'COMMUNITY' : 'ACADEMY'}</span>
                                  <span style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>{c.author}</span>
                                </div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.75)', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: 1.4 }}>{c.preview || c.text}</div>
                                {c.postTitle && <div style={{ fontSize: 9, color: 'var(--mu)', marginTop: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>in: {c.postTitle}</div>}
                              </div>
                            ))}
                          </div>
                        ))}
                        <div style={{ padding: '8px 14px', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', justifyContent: 'center' }}>
                          <button style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono', background: 'none', border: 'none', cursor: 'pointer' }}>View all saved →</button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* User avatar with hover dropdown */}
                  <div style={{ position: 'relative' }} onMouseEnter={() => setUserMenuOpen(true)} onMouseLeave={() => setUserMenuOpen(false)}>
                    {globalAuthed ? (
                      <div className="gl" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '4px 11px 4px 5px', borderRadius: 999, cursor: 'pointer' }}>
                        <Av src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=80&h=80&fit=crop" sz={26} on />
                        <span style={{ fontSize: 11, fontWeight: 600, maxWidth: 90, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{userProfile?.name || globalUser?.name || 'Vibe Creator'}</span>
                        <ChevronDown size={11} color="var(--mu)" />
                      </div>
                    ) : (
                      <button onClick={() => setShowGlobalAuth(true)} className="SB" style={{ padding: '7px 16px', borderRadius: 999, border: 'none', cursor: 'pointer', color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', whiteSpace: 'nowrap', flexShrink: 0 }}>Sign In</button>
                    )}
                    {userMenuOpen && globalAuthed && (
                      <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: 4, background: 'rgba(5,8,20,.98)', borderRadius: 14, border: '1px solid rgba(255,255,255,.1)', minWidth: 200, overflow: 'hidden', zIndex: 300, animation: 'hoverMenuSlide .18s ease', boxShadow: '0 16px 48px rgba(0,0,0,.7)' }}>
                        <div onClick={() => { setUserMenuOpen(false); setShowMyProfileModal(true); }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.05)'} onMouseLeave={e => e.currentTarget.style.background = 'none'} style={{ padding: '14px 16px', cursor: 'pointer', borderBottom: '1px solid var(--br)', display: 'flex', gap: 10, alignItems: 'center' }}>
                          <Av src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=80&h=80&fit=crop" sz={36} on />
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 700 }}>{userProfile?.name || globalUser?.name || 'Vibe Creator'}</div>
                            <div style={{ fontSize: 9, color: globalUser?.role === 'creator' ? '#a855f7' : '#22d3ee', fontFamily: 'JetBrains Mono', textTransform: 'capitalize' }}>{globalUser?.role || 'Creator'}</div>
                          </div>
                        </div>
                        {[[Edit3, 'Edit Profile', () => openSettings('profile'), '#a855f7'], [Settings, 'Settings', () => openSettings('general'), '#22d3ee'], [Users, 'My Profile', () => { setUserMenuOpen(false); setShowMyProfileModal(true); }, 'var(--mu)'], [ShoppingBag, 'My Purchases', () => { setUserMenuOpen(false); setShowPurchasesModal(true); }, 'var(--mu)'], [Bookmark, 'Wishlist', () => setShowWishlist(w => !w), 'var(--mu)'], [FileText, 'Project Briefs', () => { setUserMenuOpen(false); const s = SECS.find(x => x.id === 'community'); if (s) { setBridgeCover(null); setSec(s); setView('section'); setSecKey(k => k + 1); } }, '#10b981'], [Moon, 'Theme', () => setTheme(t => t === 'dark' ? 'light' : 'dark'), 'var(--mu)'], [X, 'Sign Out', () => { setGlobalAuthed(false); setGlobalUser(null); }, '#ec4899']].map(([Ico, label, action, color]) => (
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

              <div className="world-wrap" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', overflowAnchor: 'none' }}>
                <main key={secKey} className="world-content" style={{ paddingTop: 64, background: 'transparent', minHeight: '100vh', paddingBottom: 80, position: 'relative', zIndex: 1, isolation: 'isolate' }}><div style={{ animation: 'secEnter .75s cubic-bezier(.22,1,.36,1) both' }}>{renderSec()}</div></main>
              </div>{/* /world-wrap */}
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
                <button data-settings-btn="1" onClick={() => openSettings('general')} className="gl2" style={{ pointerEvents: 'auto', width: 38, height: 38, borderRadius: 11, border: `1px solid ${showSettings ? 'rgba(168,85,247,.5)' : 'rgba(255,255,255,.1)'}`, cursor: 'pointer', color: showSettings ? '#a855f7' : 'rgba(255,255,255,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s', background: showSettings ? 'rgba(168,85,247,.12)' : 'rgba(255,255,255,.06)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,.4)'; e.currentTarget.style.color = '#a855f7'; e.currentTarget.style.background = 'rgba(168,85,247,.1)'; }}
                  onMouseLeave={e => { if (!showSettings) { e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.color = 'rgba(255,255,255,.45)'; e.currentTarget.style.background = 'rgba(255,255,255,.06)'; } }}>
                  <Settings size={15} />
                </button>
              </div>
              {/* Settings panel */}
              {showSettings && (
                <div data-settings-panel="1" className="gl2" style={{ position: 'fixed', bottom: 68, right: 20, width: 280, borderRadius: 18, zIndex: 195, overflow: 'hidden', border: '1px solid rgba(168,85,247,.2)', animation: 'sU .2s ease', boxShadow: '0 20px 60px rgba(0,0,0,.6),0 0 0 1px rgba(168,85,247,.1)' }}>
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
                    {[['reduceMotion', 'Reduce Motion'], ['highContrast', 'High Contrast'], ['largeText', 'Large Text']].map(([key, l]) => {
                      const on = !!(accessibilitySettings && accessibilitySettings[key]); return (<div key={l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontSize: 12, color: on ? '#22d3ee' : 'rgba(255,255,255,.55)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{l}</span>
                        <div onClick={() => setAccessibilitySettings(s => ({ ...s, [key]: !on }))} style={{ width: 34, height: 18, borderRadius: 999, background: on ? '#22d3ee22' : 'rgba(255,255,255,.08)', border: `1px solid ${on ? '#22d3ee' : 'rgba(255,255,255,.1)'}`, cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 2, transition: 'all .2s' }}>
                          <div style={{ width: 14, height: 14, borderRadius: '50%', background: on ? '#22d3ee' : 'rgba(255,255,255,.25)', transition: 'transform .2s', transform: on ? 'translateX(16px)' : 'translateX(0)' }} />
                        </div>
                      </div>);
                    })}
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
      {showSettings && (
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 18999 }} onClick={() => setShowSettings(false)} />
          <SettingsPage
            section={settingsSection}
            onClose={() => setShowSettings(false)}
            userProfile={userProfile}
            theme={theme}
            setTheme={setTheme}
            accessibilitySettings={accessibilitySettings}
            setAccessibilitySettings={setAccessibilitySettings}
            onSaveProfile={handleSaveProfile}
          />
        </>
      )}
      {showUploadPage && (
        <UploadWorkPage
          key={uploadInitialDraftRef.current?.id || 'new'}
          initialDraft={uploadInitialDraftRef.current}
          onMounted={() => { uploadInitialDraftRef.current = null; }}
          onViewDrafts={() => { setShowUploadPage(false); uploadReopenFn.current = null; setOpenMyProfileAt('drafts'); }}
          onClose={() => { setShowUploadPage(false); if (uploadReopenFn.current) { const fn = uploadReopenFn.current; uploadReopenFn.current = null; setTimeout(fn, 120); } }}
          onPublish={(work) => { setGlobalUploads(u => [work, ...u]); setShowUploadPage(false); uploadReopenFn.current = null; setPublishSuccessWork(work); }}
          onSaveDraft={(d) => { setUploadDrafts(dr => { const existing = dr.findIndex(x => x.id === d.id); if (existing >= 0) { const n = [...dr]; n[existing] = d; return n; } return [d, ...dr]; }); }}
          onUpdateDraft={(d) => { setUploadDrafts(dr => { const existing = dr.findIndex(x => x.id === d.id); if (existing >= 0) { const n = [...dr]; n[existing] = d; return n; } return dr; }); }}
          globalTags={[...new Set(globalUploads.flatMap(u => u.tags || []))]}
          myList={globalMyList} setMyList={setGlobalMyList}
        />
      )}
      {publishSuccessWork && (
        <PublishSuccessModal
          work={publishSuccessWork}
          onClose={() => setPublishSuccessWork(null)}
          onViewInProfile={() => { setPublishSuccessWork(null);/* profile opens via Market */ }}
          onPushToMarket={() => { setPushToMarketWork(publishSuccessWork); setPublishSuccessWork(null); }}
        />
      )}
      {pushToMarketWork && (
        <PushToMarketModal
          work={pushToMarketWork}
          connectFiles={pushToMarketWork.connectMode ? [] : null}
          onClose={() => setPushToMarketWork(null)}
          onPushed={(pushed) => { setGlobalUploads(u => [pushed, ...u]); setPushToMarketWork(null); setConnectPushedWork(pushed); }}
        />
      )}
      {connectPushedWork && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 99997, backgroundColor: '#0d1225', border: '1px solid rgba(168,85,247,0.4)', borderRadius: 16, padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 8px 40px rgba(0,0,0,0.6)', maxWidth: 480, width: '90%' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#a855f7,#22d3ee)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <div style={{ flex: 1, fontSize: 13, color: '#ccd6f6', fontFamily: 'Rajdhani,sans-serif', fontWeight: 600, lineHeight: 1.5 }}>
            Your Vibe has been pushed to Vibe Market.{' '}
            <span onClick={() => { setConnectPushedWork(null); const s = SECS.find(x => x.id === 'market'); if (s) { setBridgeCover(s.color); setSec(s); setView('section'); setTimeout(() => setBridgeCover(null), 1200); } }} style={{ color: '#a855f7', textDecoration: 'underline', cursor: 'pointer', fontWeight: 800, textUnderlineOffset: 3 }}>View here</span>
          </div>
          <button onClick={() => setConnectPushedWork(null)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0, flexShrink: 0 }}>&#215;</button>
        </div>
      )}
      {/* FIX #7+8+9: View All Notifications Modal */}
      {showViewAll && (
        <div onClick={() => setShowViewAll(false)} style={{ position: 'fixed', inset: 0, zIndex: 20001, background: 'rgba(0,0,0,.85)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'rgba(8,12,26,.99)', borderRadius: 22, border: '1px solid rgba(34,211,238,.15)', width: '100%', maxWidth: 560, maxHeight: '85vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 0 80px rgba(34,211,238,.06),0 32px 80px rgba(0,0,0,.8)', animation: 'sU .25s ease' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,.07)', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', flexShrink: 0 }}>
              <div>
                {notificationHistory.length > 0 && (
                  <span onClick={e => { e.stopPropagation(); setShowViewAll(false); setShowNotifHistory(true); setNotifHistoryPage(1); }} style={{ fontSize: 9, color: '#22d3ee', fontFamily: 'JetBrains Mono', cursor: 'pointer', opacity: .75 }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '.75'}>History →</span>
                )}
              </div>
              <div className="O" style={{ fontSize: 13, fontWeight: 800, textAlign: 'center', whiteSpace: 'nowrap' }}>All Notifications</div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setShowViewAll(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.4)', padding: 4, borderRadius: 6, display: 'flex', alignItems: 'center', transition: 'color .15s' }} onMouseEnter={e => e.currentTarget.style.color = '#ef4444'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.4)'}><X size={16} /></button>
              </div>
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {notifications.slice((viewAllPage - 1) * 10, viewAllPage * 10).map(n => {
                const IconComp = { Heart, ShoppingCart, Users, CheckCircle, Bell, UserPlus, Flag, MessageSquare, Star, Award, Zap }[n.icon] || Bell;
                return (
                  <div key={n.id} style={{ padding: '12px 22px', borderBottom: '1px solid rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'background .15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.03)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                    onClick={() => resolveNotification(n.id)}>
                    <div style={{ width: 32, height: 32, borderRadius: 9, background: `${n.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><IconComp size={14} color={n.color} /></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.35 }}>{n.msg}</div>
                      <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginTop: 2 }}>{n.time} ago</div>
                    </div>
                    <X size={11} color="rgba(255,255,255,.2)" onClick={e => { e.stopPropagation(); resolveNotification(n.id); }} />
                  </div>
                );
              })}
            </div>
            {/* Pagination */}
            {notifications.length > 10 && (
              <div style={{ padding: '12px 22px', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexShrink: 0 }}>
                <button onClick={() => setViewAllPage(p => Math.max(1, p - 1))} disabled={viewAllPage === 1} style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,.1)', background: 'none', cursor: viewAllPage === 1 ? 'not-allowed' : 'pointer', color: viewAllPage === 1 ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.7)', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 600, transition: 'all .2s' }}>← Prev</button>
                <span style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>Page {viewAllPage} of {Math.ceil(notifications.length / 10)}</span>
                <button onClick={() => setViewAllPage(p => Math.min(Math.ceil(notifications.length / 10), p + 1))} disabled={viewAllPage >= Math.ceil(notifications.length / 10)} style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,.1)', background: 'none', cursor: viewAllPage >= Math.ceil(notifications.length / 10) ? 'not-allowed' : 'pointer', color: viewAllPage >= Math.ceil(notifications.length / 10) ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.7)', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 600, transition: 'all .2s' }}>Next →</button>
              </div>
            )}
            <div style={{ padding: '12px 22px', background: 'rgba(245,158,11,.04)', borderTop: '1px solid rgba(245,158,11,.18)', flexShrink: 0 }}>
              <div style={{ fontSize: 10, color: '#f59e0b', fontFamily: 'JetBrains Mono', lineHeight: 1.7, textAlign: 'center' }}>⚠ Notifications auto-archive to history (oldest first) once this list hits 50. Resolve or open them to prevent archiving.</div>
            </div>
          </div>
        </div>
      )}
      {/* FIX #8+9: Notification History Modal */}
      {showNotifHistory && (
        <div onClick={() => setShowNotifHistory(false)} style={{ position: 'fixed', inset: 0, zIndex: 20001, background: 'rgba(0,0,0,.85)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'rgba(8,12,26,.99)', borderRadius: 22, border: '1px solid rgba(168,85,247,.15)', width: '100%', maxWidth: 560, maxHeight: '85vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,.8)', animation: 'sU .25s ease' }}>
            <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
              <div>
                {notifications.length >= 5 && (
                  <span onClick={e => { e.stopPropagation(); setShowNotifHistory(false); setShowViewAll(true); setViewAllPage(1); }} style={{ fontSize: 10, color: '#22d3ee', fontFamily: 'JetBrains Mono', cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>View All New Notifications</span>
                )}
              </div>
              <div className="O" style={{ fontSize: 13, fontWeight: 800, textAlign: 'center', flex: 1 }}>Notification History</div>
              <button onClick={() => setShowNotifHistory(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.4)', padding: 4, borderRadius: 6, display: 'flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.color = '#ef4444'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.4)'}><X size={16} /></button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {notificationHistory.length === 0 ? (
                <div style={{ padding: '40px 22px', textAlign: 'center', color: 'var(--mu)', fontSize: 11, fontFamily: 'JetBrains Mono' }}>
                  <Clock size={28} style={{ opacity: .3, margin: '0 auto 12px', display: 'block' }} />
                  No notification history yet.
                </div>
              ) : notificationHistory.slice((notifHistoryPage - 1) * 10, notifHistoryPage * 10).map((n, idx) => (
                <NotifHistoryRow
                  key={n.id || idx}
                  n={n}
                  idx={idx}
                  pageOffset={(notifHistoryPage - 1) * 10}
                  onDelete={absIdx => setNotificationHistory(h => h.filter((_, j) => j !== absIdx))}
                />
              ))}
            </div>
            {notificationHistory.length > 10 && (
              <div style={{ padding: '12px 22px', borderTop: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                <button onClick={() => setNotifHistoryPage(p => Math.max(1, p - 1))} disabled={notifHistoryPage === 1} style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,.1)', background: 'none', cursor: notifHistoryPage === 1 ? 'not-allowed' : 'pointer', color: notifHistoryPage === 1 ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.7)', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 600, transition: 'all .2s' }}>← Prev</button>
                <span style={{ fontSize: 10, color: 'var(--mu)', fontFamily: 'JetBrains Mono' }}>Page {notifHistoryPage} of {Math.ceil(notificationHistory.length / 10)}</span>
                <button onClick={() => setNotifHistoryPage(p => Math.min(Math.ceil(notificationHistory.length / 10), p + 1))} disabled={notifHistoryPage >= Math.ceil(notificationHistory.length / 10)} style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,.1)', background: 'none', cursor: notifHistoryPage >= Math.ceil(notificationHistory.length / 10) ? 'not-allowed' : 'pointer', color: notifHistoryPage >= Math.ceil(notificationHistory.length / 10) ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.7)', fontSize: 11, fontFamily: 'Rajdhani', fontWeight: 600, transition: 'all .2s' }}>Next →</button>
              </div>
            )}
            <div style={{ padding: '12px 22px', background: 'rgba(245,158,11,.04)', borderTop: '1px solid rgba(245,158,11,.18)', flexShrink: 0 }}>
              <div style={{ fontSize: 10, color: '#f59e0b', fontFamily: 'JetBrains Mono', lineHeight: 1.7, textAlign: 'center' }}>⚠ Notification history is automatically deleted starting from the oldest entries once it reaches 100. This cannot be undone.</div>
            </div>
          </div>
        </div>
      )}
      {/* ── Team invite response card ── */}
      {activeTeamInviteNotif && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99100, background: 'rgba(0,0,0,.78)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
          onClick={() => setActiveTeamInviteNotif(null)}>
          <div style={{ background: 'rgba(6,10,24,.99)', borderRadius: 22, border: '1px solid rgba(34,211,238,.25)', padding: '28px 32px', maxWidth: 400, width: '100%', boxShadow: '0 24px 80px rgba(0,0,0,.85),0 0 0 1px rgba(34,211,238,.08)', animation: 'sU .2s ease' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <img src={activeTeamInviteNotif.inviterAv || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop'} alt=""
                style={{ width: 56, height: 56, borderRadius: 16, objectFit: 'cover', border: '2px solid rgba(34,211,238,.4)' }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, fontFamily: 'Rajdhani', color: 'white' }}>{activeTeamInviteNotif.inviterName || activeTeamInviteNotif.inviterHandle}</div>
                <div style={{ fontSize: 10, color: '#22d3ee', fontFamily: 'JetBrains Mono', marginTop: 2 }}>{activeTeamInviteNotif.inviterHandle}</div>
              </div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', color: 'white', marginBottom: 6 }}>Team Invite</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', fontFamily: 'JetBrains Mono', marginBottom: 24, lineHeight: 1.6 }}>
              <span style={{ color: '#22d3ee', fontWeight: 700 }}>{activeTeamInviteNotif.inviterName}</span> wants you to join their team. You'll collaborate on projects together.
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => {
                setTeamRelationships(r => [...r, { a: '@you', b: activeTeamInviteNotif.inviterHandle }]);
                resolveNotification(activeTeamInviteNotif.id);
                const _inv = activeTeamInviteNotif;
                setActiveTeamInviteNotif(null);
                addNotification({ msg: `🎉 You joined ${_inv.inviterName}'s team! Tap to view your team →`, icon: 'Users', color: '#10b981', time: 'just now', type: 'teamJoined', actionLabel: 'View Team', inviterName: _inv.inviterName, inviterHandle: _inv.inviterHandle });
                addNotification({ msg: `${_inv.inviterName} — your team invite was accepted! You now have a new teammate.`, icon: 'UserPlus', color: '#22d3ee', time: 'just now', type: 'teamInviteAccepted' });
              }}
                style={{ flex: 1, padding: '11px', borderRadius: 12, border: 'none', background: 'linear-gradient(135deg,#10b981,#22d3ee)', cursor: 'pointer', color: 'white', fontSize: 13, fontWeight: 800, fontFamily: 'Rajdhani', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(16,185,129,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.filter = ''; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                ✓ Accept Invite
              </button>
              <button onClick={() => setDeclineConfirmOpen(true)}
                style={{ flex: 1, padding: '11px', borderRadius: 12, border: '1px solid rgba(236,72,153,.3)', background: 'rgba(236,72,153,.08)', cursor: 'pointer', color: '#ec4899', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(236,72,153,.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(236,72,153,.08)'; }}>
                ✗ Decline
              </button>
            </div>
            {declineConfirmOpen && (
              <div style={{ marginTop: 16, padding: '14px', borderRadius: 12, border: '1px solid rgba(236,72,153,.3)', background: 'rgba(236,72,153,.06)', animation: 'sU .15s ease' }}>
                <div style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', color: 'white', marginBottom: 4 }}>Decline this invite?</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.45)', fontFamily: 'JetBrains Mono', marginBottom: 12, lineHeight: 1.5 }}>You can always ask {activeTeamInviteNotif?.inviterName} to re-invite you later.</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={() => { resolveNotification(activeTeamInviteNotif.id); setActiveTeamInviteNotif(null); setDeclineConfirmOpen(false); }}
                    style={{ flex: 1, padding: '9px', borderRadius: 10, border: 'none', background: 'rgba(236,72,153,.18)', cursor: 'pointer', color: '#ec4899', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(236,72,153,.32)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(236,72,153,.18)'}>
                    Yes, Decline
                  </button>
                  <button onClick={() => setDeclineConfirmOpen(false)}
                    style={{ flex: 1, padding: '9px', borderRadius: 10, border: '1px solid rgba(255,255,255,.12)', background: 'rgba(255,255,255,.06)', cursor: 'pointer', color: 'rgba(255,255,255,.6)', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.10)'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = 'rgba(255,255,255,.6)'; }}>
                    Go Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* ── Vibe Connect Invite Accept/Decline Modal ── */}
      {activeConnectInviteNotif && (
        <div onClick={() => { if (!declineConnectConfirmOpen) { setActiveConnectInviteNotif(null); setDeclineConnectConfirmOpen(false); } }} style={{ position: 'fixed', inset: 0, zIndex: 10002, background: 'rgba(0,0,0,.85)', backdropFilter: 'blur(18px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'rgba(5,10,28,.99)', borderRadius: 22, border: '1px solid rgba(34,211,238,.25)', width: '100%', maxWidth: 420, padding: '30px 26px', boxShadow: '0 0 80px rgba(34,211,238,.1),0 32px 80px rgba(0,0,0,.9)', animation: 'sU .25s ease' }}>
            {!declineConnectConfirmOpen ? (
              <>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(34,211,238,.1)', border: '1px solid rgba(34,211,238,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Zap size={16} color="#22d3ee" />
                  </div>
                  <div>
                    <div className="O" style={{ fontSize: 14, fontWeight: 800, color: 'white' }}>Vibe Connect Invite</div>
                    <div style={{ fontSize: 9, color: '#22d3ee', fontFamily: 'JetBrains Mono', marginTop: 1 }}>// COLLAB.invite_received()</div>
                  </div>
                </div>
                {/* Inviter info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, padding: '12px 14px', borderRadius: 12, background: 'rgba(34,211,238,.04)', border: '1px solid rgba(34,211,238,.12)' }}>
                  <img src={activeConnectInviteNotif.inviterAv || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=60&h=60&fit=crop'} alt=""
                    style={{ width: 44, height: 44, borderRadius: 12, objectFit: 'cover', border: '2px solid rgba(34,211,238,.4)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, fontFamily: 'Rajdhani', color: 'white' }}>{activeConnectInviteNotif.inviterName}</div>
                    <div style={{ fontSize: 10, color: '#22d3ee', fontFamily: 'JetBrains Mono', marginTop: 2 }}>{activeConnectInviteNotif.inviterHandle}</div>
                  </div>
                </div>
                {/* Workspace context pill */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, padding: '8px 12px', borderRadius: 10, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)' }}>
                  {activeConnectInviteNotif.targetWsId
                    ? <Layers size={14} color="#22d3ee" />
                    : <Plus size={14} color="#a855f7" />
                  }
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani', color: 'white' }}>
                      {activeConnectInviteNotif.targetWsId
                        ? activeConnectInviteNotif.wsName
                        : 'New Workspace — just you two'}
                    </div>
                    {activeConnectInviteNotif.targetWsId && activeConnectInviteNotif.wsMemberCount > 0 && (
                      <div style={{ fontSize: 9, color: 'var(--mu)', fontFamily: 'JetBrains Mono', marginTop: 1 }}>{activeConnectInviteNotif.wsMemberCount} current members</div>
                    )}
                  </div>
                </div>
                {/* Description */}
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.55)', fontFamily: 'JetBrains Mono', marginBottom: 22, lineHeight: 1.6 }}>
                  <span style={{ color: '#22d3ee', fontWeight: 700 }}>{activeConnectInviteNotif.inviterName}</span> wants to collaborate with you in Vibe Connect. Accept to open a shared workspace where you can build, chat, and run AI prompts together.
                </div>
                {/* Buttons */}
                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={() => {
                    const n = activeConnectInviteNotif;
                    if (n.targetWsId) {
                      setWorkspaces(ws => ws.map(w => {
                        if (w.id !== n.targetWsId) return w;
                        if (w.members.find(m => m.handle === n.inviterHandle)) return w;
                        return {
                          ...w,
                          members: [...w.members, { handle: n.inviterHandle, av: n.inviterAv, role: 'member', perms: { canAdd: false, canRemove: false, canAI: false } }],
                          teamMsgs: [...w.teamMsgs, { id: Date.now(), handle: 'System', av: null, text: `${n.inviterName} accepted the Vibe Connect invite and joined the workspace!`, ts: 'just now', votes: { up: 0, down: 0 }, pinned: false, pushed: false, file: null, system: true }],
                        };
                      }));
                      setActiveConnectWsId(n.targetWsId);
                    } else {
                      const newWsId = 'ws_' + Date.now();
                      setWorkspaces(ws => [...ws, {
                        id: newWsId, name: `Connect with ${n.inviterName}`, creator: '@you',
                        members: [
                          { handle: '@you', av: userProfile?.avatar || 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=40&h=40&fit=crop', role: 'creator', perms: { canAdd: true, canRemove: true, canAI: true } },
                          { handle: n.inviterHandle, av: n.inviterAv, role: 'member', perms: { canAdd: false, canRemove: false, canAI: false } },
                        ],
                        aiConnected: { claude: false, copilot: false, gpt: false },
                        teamMsgs: [{ id: 1, handle: 'System', av: null, text: `Workspace created! ${n.inviterName} accepted your Vibe Connect invite. Welcome!`, ts: 'just now', votes: { up: 0, down: 0 }, pinned: false, pushed: false, file: null, system: true }],
                        privatePrompts: [],
                      }]);
                      setActiveConnectWsId(newWsId);
                    }
                    setConnectInvites(prev => prev.map(inv => inv.id === n.inviteId ? { ...inv, status: 'accepted', responseGiven: 'accepted' } : inv));
                    resolveNotification(n.id);
                    setActiveConnectInviteNotif(null);
                    setDeclineConnectConfirmOpen(false);
                    addNotification({ msg: `🚀 You're now connected with ${n.inviterName}! Your Vibe Connect workspace is live →`, icon: 'Zap', color: '#22d3ee', type: 'vibeConnectAccepted', time: 'just now', actionLabel: 'Open Connect' });
                    addNotification({ msg: `${n.inviterName} accepted your Vibe Connect invite! Your workspace is ready.`, icon: 'Zap', color: '#10b981', type: 'vibeConnectAcceptedBySender', time: 'just now', actionLabel: 'Open Connect' });
                    const _cs = SECS.find(x => x.id === 'connect'); setSec(_cs); setView('section'); setSecKey(k => k + 1);
                  }}
                    style={{ flex: 2, padding: '11px', borderRadius: 12, border: 'none', background: 'linear-gradient(135deg,#22d3ee,#a855f7)', cursor: 'pointer', color: 'white', fontSize: 13, fontWeight: 800, fontFamily: 'Rajdhani', transition: 'all .18s', boxShadow: '0 4px 20px rgba(34,211,238,.3)' }}
                    onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = ''; e.currentTarget.style.transform = ''; }}>
                    ⚡ Accept &amp; Connect
                  </button>
                  <button onClick={() => setDeclineConnectConfirmOpen(true)}
                    style={{ flex: 1, padding: '11px', borderRadius: 12, border: '1px solid rgba(236,72,153,.4)', background: 'rgba(236,72,153,.07)', cursor: 'pointer', color: '#ec4899', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .18s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(236,72,153,.18)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(236,72,153,.07)'}>
                    Decline
                  </button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '8px 0' }}>
                <div style={{ fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', color: 'white', marginBottom: 4 }}>Decline this invite?</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.45)', fontFamily: 'JetBrains Mono', marginBottom: 16, lineHeight: 1.5 }}>You can always reconnect with {activeConnectInviteNotif?.inviterName} later.</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={() => {
                    const n = activeConnectInviteNotif;
                    setConnectInvites(prev => prev.map(inv => inv.id === n.inviteId ? { ...inv, status: 'declined', responseGiven: 'declined' } : inv));
                    resolveNotification(n.id);
                    addNotification({ msg: `${n.inviterName} was notified that you declined the Vibe Connect invite.`, icon: 'Zap', color: '#f59e0b', type: 'misc', time: 'just now' });
                    setActiveConnectInviteNotif(null);
                    setDeclineConnectConfirmOpen(false);
                  }}
                    style={{ flex: 1, padding: '9px', borderRadius: 10, border: 'none', background: 'rgba(236,72,153,.18)', cursor: 'pointer', color: '#ec4899', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(236,72,153,.32)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(236,72,153,.18)'}>
                    Yes, Decline
                  </button>
                  <button onClick={() => setDeclineConnectConfirmOpen(false)}
                    style={{ flex: 1, padding: '9px', borderRadius: 10, border: '1px solid rgba(255,255,255,.12)', background: 'rgba(255,255,255,.06)', cursor: 'pointer', color: 'rgba(255,255,255,.6)', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani', transition: 'all .15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.10)'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = 'rgba(255,255,255,.6)'; }}>
                    Go Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* ── My Purchases modal ── */}
      {showPurchasesModal && (() => {
        const allItems = [...globalUploads, ...MKT];
        const purchasedItems = globalPurchased.map(id => allItems.find(x => x.id === id)).filter(Boolean);
        return (
          <div style={{ position: 'fixed', inset: 0, zIndex: 9000, background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={() => setShowPurchasesModal(false)}>
            <div style={{ background: 'rgba(5,8,20,.98)', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', width: '100%', maxWidth: 640, maxHeight: '80vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <ShoppingBag size={18} color="#22d3ee" />
                  <span style={{ fontSize: 15, fontWeight: 800, fontFamily: 'Rajdhani' }}>My Purchases</span>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', fontFamily: 'JetBrains Mono' }}>{purchasedItems.length} item{purchasedItems.length !== 1 ? 's' : ''}</span>
                </div>
                <button onClick={() => setShowPurchasesModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,.4)', fontSize: 20, lineHeight: 1, padding: 4 }}>✕</button>
              </div>
              <div style={{ overflowY: 'auto', padding: 20, flex: 1 }}>
                {purchasedItems.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '48px 20px', color: 'rgba(255,255,255,.3)' }}>
                    <ShoppingBag size={36} style={{ opacity: .2, margin: '0 auto 14px', display: 'block' }} />
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'rgba(255,255,255,.5)' }}>No purchases yet</div>
                    <div style={{ fontSize: 11 }}>Items you buy in Vibe Market will appear here.</div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {purchasedItems.map(item => (
                      <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', borderRadius: 12, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)' }}>
                        <img src={item.img} alt={item.title} style={{ width: 60, height: 50, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                          <div style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', fontFamily: 'JetBrains Mono', marginTop: 3 }}>{item.cr} · {item.price || 'Free'}</div>
                          <div style={{ display: 'flex', gap: 4, marginTop: 6, flexWrap: 'wrap' }}>{(item.tags || []).slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}</div>
                        </div>
                        <div style={{ fontSize: 10, color: '#10b981', fontFamily: 'JetBrains Mono', fontWeight: 700, flexShrink: 0 }}>✓ OWNED</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
      {/* ── My Profile opened from header dropdown ── */}
      {showMyProfileModal && (
        <UserProfileModal
          user={buildRootMeProfile()}
          onClose={() => setShowMyProfileModal(false)}
          followed={false}
          onFollow={() => { }}
          earnedBadges={['starter']}
          onGetInTouch={() => { }}
          onInvite={handleInviteToVibe}
          workspaces={workspaces}
          showToast={() => { }}
          uploads={globalUploads}
          drafts={uploadDrafts}
          onEditDraft={() => { setShowMyProfileModal(false); setShowUploadPage(true); }}
          onPublishDraft={() => { }}
          onRequestUpload={() => { setShowMyProfileModal(false); setShowUploadPage(true); }}
          onOpenSettings={openSettings}
          teamRelationships={teamRelationships}
          setTeamRelationships={setTeamRelationships}
          teamInvites={teamInvites}
          setTeamInvites={setTeamInvites}
          addNotification={addNotification}
          resolveNotification={resolveNotification}
          blockedUsers={blockedUsers}
          setBlockedUsers={setBlockedUsers}
          myList={globalMyList}
          setMyList={setGlobalMyList}
        />
      )}
      {/* ── Inviter profile opened from notification name click ── */}
      {inviteProfileUser && (
        <UserProfileModal
          user={inviteProfileUser}
          onClose={() => setInviteProfileUser(null)}
          followed={!!globalFollowed[inviteProfileUser.handle || inviteProfileUser.name]}
          onFollow={() => { const k = inviteProfileUser.handle || inviteProfileUser.name; setGlobalFollowed(f => ({ ...f, [k]: !f[k] })); }}
          earnedBadges={inviteProfileUser.badges || ['starter']}
          onGetInTouch={() => { }}
          onInvite={handleInviteToVibe}
          workspaces={workspaces}
          showToast={() => { }}
          uploads={globalUploads}
          drafts={uploadDrafts}
          teamRelationships={teamRelationships}
          setTeamRelationships={setTeamRelationships}
          teamInvites={teamInvites}
          setTeamInvites={setTeamInvites}
          addNotification={addNotification}
          resolveNotification={resolveNotification}
          onOpenSettings={openSettings}
          blockedUsers={blockedUsers}
          setBlockedUsers={setBlockedUsers}
          myList={globalMyList} setMyList={setGlobalMyList}
        />
      )}
      <FlyingIconLayer />
    </ConfirmProvider>
  );
};
