'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Web Audio API synth helpers ---
const playSound = (type: 'ambient' | 'twinkle' | 'whoosh' | 'fusion', audioCtx: AudioContext) => {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  if (type === 'ambient') {
    // Gentle low rumble / wind
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(50, now);
    osc.frequency.linearRampToValueAtTime(80, now + 5);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.1, now + 2);
    gainNode.gain.linearRampToValueAtTime(0, now + 10);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 10);
  } else if (type === 'twinkle') {
    // High pitched chime
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800 + Math.random() * 400, now);
    
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.05, now + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 1);
  } else if (type === 'whoosh') {
    // Noise burst with sweep
    const bufferSize = audioCtx.sampleRate * 2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.exponentialRampToValueAtTime(3000, now + 0.5);
    filter.frequency.exponentialRampToValueAtTime(200, now + 2);

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.1, now + 0.5);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 2);

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noise.start(now);
  } else if (type === 'fusion') {
    // Deep heavy pulse
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(150, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 1.5);

    osc2.type = 'square';
    osc2.frequency.setValueAtTime(150, now);
    osc2.frequency.exponentialRampToValueAtTime(40, now + 1.5);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.3, now + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 2);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2);
    osc2.stop(now + 2);
  }
};

export function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(false);
  const [phase, setPhase] = useState<'init' | 'twinkle' | 'shoot' | 'orbit' | 'fusion' | 'reveal' | 'finished'>('init');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    setShowIntro(true);
    document.body.style.overflow = 'hidden'; 
  }, []);

  // Use a user interaction to start audio context (required by browsers)
  const startAnimation = () => {
    if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    setPhase('twinkle');
    playSound('ambient', audioCtxRef.current);

    // Timeline
    setTimeout(() => {
        setPhase('shoot');
        if (audioCtxRef.current) playSound('whoosh', audioCtxRef.current);
    }, 3000); 

    setTimeout(() => {
        setPhase('orbit');
    }, 5000); 

    setTimeout(() => {
        setPhase('fusion');
        if (audioCtxRef.current) playSound('fusion', audioCtxRef.current);
    }, 7500); 

    setTimeout(() => {
        setPhase('reveal');
    }, 8500); 

    setTimeout(() => {
        setPhase('finished');
        setTimeout(() => {
          setShowIntro(false);
          document.body.style.overflow = 'auto'; // Restore
        }, 1500); // fade out duration
    }, 11500);
  };


  useEffect(() => {
    if (!showIntro || phase === 'init' || phase === 'reveal' || phase === 'finished') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;

    class CosmicParticle {
        x: number;
        y: number;
        size: number;
        alpha: number;
        speed: number;

        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 1.5;
            this.alpha = Math.random();
            this.speed = (Math.random() * 0.02) + 0.005;
        }

        update() {
            this.alpha += Math.sin(Date.now() * this.speed) * 0.02;
            if (this.alpha < 0) this.alpha = 0;
            if (this.alpha > 0.8) this.alpha = 0.8;
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    class Star {
      x: number;
      y: number;
      startX: number;
      startY: number;
      color: string;
      angle: number;
      radius: number;
      speed: number;
      trail: { x: number; y: number }[] = [];
      orbitAngle: number;
      twinkleAlpha: number;

      constructor(startX: number, startY: number, color: string, orbitAngle: number) {
        this.startX = startX;
        this.startY = startY;
        this.x = startX;
        this.y = startY;
        this.color = color;
        this.angle = 0;
        this.radius = 2; // small initially
        this.speed = 0.02;
        this.orbitAngle = orbitAngle;
        this.twinkleAlpha = 1;
      }

      draw(ctx: CanvasRenderingContext2D, currentPhase: string) {
        // Draw trail if shooting or orbiting
        if (currentPhase !== 'twinkle' && this.trail.length > 0) {
          ctx.beginPath();
          ctx.moveTo(this.trail[0].x, this.trail[0].y);
          for (let i = 1; i < this.trail.length; i++) {
            ctx.lineTo(this.trail[i].x, this.trail[i].y);
          }
          ctx.strokeStyle = this.color;
          ctx.lineWidth = currentPhase === 'orbit' ? 4 : 3;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Add Glow
          ctx.shadowBlur = currentPhase === 'orbit' ? 30 : 20;
          ctx.shadowColor = this.color;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Draw star head
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
        ctx.globalAlpha = this.twinkleAlpha;
        ctx.shadowBlur = currentPhase === 'twinkle' ? 25 : 15;
        ctx.shadowColor = this.color;
        
        // draw glowing halo
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      update(currentPhase: string) {
        if (currentPhase !== 'twinkle') {
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > (currentPhase === 'orbit' ? 40 : 25)) {
                this.trail.shift();
            }
        }

        if (currentPhase === 'twinkle') {
            // Drift slowly, twinkle
            this.x += Math.sin(Date.now() * 0.001 + this.orbitAngle) * 0.2;
            this.y += Math.cos(Date.now() * 0.001 + this.orbitAngle) * 0.2;
            this.twinkleAlpha = 0.5 + Math.abs(Math.sin(Date.now() * 0.005 + this.orbitAngle)) * 0.5;
            this.radius = 2 + Math.random();
            
            if (Math.random() > 0.98 && audioCtxRef.current) {
                playSound('twinkle', audioCtxRef.current);
            }
        } else if (currentPhase === 'shoot') {
            this.radius = 4;
            this.twinkleAlpha = 1;
            // Fly towards center but overshoot into orbit position
            const orbitRadius = 100;
            const targetX = centerX + Math.cos(this.orbitAngle) * orbitRadius;
            const targetY = centerY + Math.sin(this.orbitAngle) * orbitRadius;

            // Curved trajectory logic
            const dx = targetX - this.x;
            const dy = targetY - this.y;
            this.x += dx * 0.04;
            this.y += dy * 0.04;
            
            // Spark particles
            if (Math.random() > 0.5) {
                particles.push(new Particle(this.x, this.y, this.color, false, true));
            }
        } else if (currentPhase === 'orbit') {
            // Orbit around center
            this.orbitAngle += this.speed;
            const orbitRadius = 100 - (Date.now() * 0.0001); // Slowly spiral in
            this.x = centerX + Math.cos(this.orbitAngle) * (orbitRadius > 20 ? orbitRadius : 20);
            this.y = centerY + Math.sin(this.orbitAngle) * (orbitRadius > 20 ? orbitRadius : 20);
            
            // Energy particles forming between them
            particles.push(new Particle(this.x + (Math.random() * 20 - 10), this.y + (Math.random() * 20 - 10), this.color));
            
            // Starts blending colors physically
            if (Math.random() > 0.8) {
                particles.push(new Particle(centerX + (Math.random() * 50 - 25), centerY + (Math.random() * 50 - 25), '#22c55e', false, false, 0.4)); // subtle green
            }
        } else if (currentPhase === 'fusion') {
            // Collapse into center fast
            this.x += (centerX - this.x) * 0.3;
            this.y += (centerY - this.y) * 0.3;
        }
      }
    }

    class Particle {
        x: number;
        y: number;
        color: string;
        vx: number;
        vy: number;
        life: number;
        maxLife: number;
        size: number;
        spark: boolean;
        alphaMod: number;

        constructor(x: number, y: number, color: string, isExplosion = false, spark = false, alphaMod = 1) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.spark = spark;
            this.alphaMod = alphaMod;
            const angle = Math.random() * Math.PI * 2;
            const speed = isExplosion ? Math.random() * 12 + 2 : (spark ? Math.random() * 1 : Math.random() * 2);
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.maxLife = isExplosion ? 80 : 30 + Math.random() * 20;
            this.life = this.maxLife;
            this.size = Math.random() * 3 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.spark) {
                this.vy += 0.05; // tiny gravity for sparks
            }
            this.life--;
        }

        draw(ctx: CanvasRenderingContext2D) {
            const opacity = (this.life / this.maxLife) * this.alphaMod;
            ctx.globalAlpha = Math.max(0, opacity);
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            if (this.spark) {
                 ctx.shadowBlur = 10;
                 ctx.shadowColor = this.color;
                 ctx.fill();
                 ctx.shadowBlur = 0;
            }
            ctx.globalAlpha = 1;
        }
    }

    // Yellow (from top left), Blue (from bottom center), Grey (from top right)
    const stars = [
      new Star(width * 0.1, height * 0.1, '#facc15', Math.PI * 1.5), // Yellow 
      new Star(width * 0.5, height * 1.1, '#3b82f6', Math.PI * 0.5), // Blue (starts below bottom center)
      new Star(width * 0.9, height * 0.1, '#9ca3af', 0) // Grey
    ];

    const cosmicBackground = Array.from({ length: 150 }, () => new CosmicParticle());
    let particles: Particle[] = [];
    let explosionTriggered = false;

    const render = () => {
      // Very transparent black for motion blur effect
      ctx.fillStyle = 'rgba(2, 18, 10, 0.25)'; 
      ctx.fillRect(0, 0, width, height);

      // Draw cosmic bg
      cosmicBackground.forEach(p => {
          p.update();
          p.draw(ctx);
      });

      if (phase === 'fusion' && !explosionTriggered) {
          // Check if close enough to center to explode
          const distToCenter = Math.sqrt(Math.pow(stars[0].x - centerX, 2) + Math.pow(stars[0].y - centerY, 2));
          if (distToCenter < 15) {
              explosionTriggered = true;
              // Swirling bright explosion
              for (let i = 0; i < 300; i++) {
                  particles.push(new Particle(centerX, centerY, '#22c55e', true));
                  if (i % 4 === 0) particles.push(new Particle(centerX, centerY, '#ffffff', true, true, 2)); // bright sparks
                  if (i % 6 === 0) particles.push(new Particle(centerX, centerY, '#facc15', true));
                  if (i % 7 === 0) particles.push(new Particle(centerX, centerY, '#3b82f6', true));
              }
          }
      }

      // Draw and update stars
      if (!explosionTriggered) {
          stars.forEach(star => {
              star.update(phase);
              star.draw(ctx, phase);
          });
      }

      // Draw and update particles
      particles = particles.filter(p => p.life > 0);
      particles.forEach(p => {
          p.update();
          p.draw(ctx);
      });

      // Draw fusion glow expanding
      if (explosionTriggered) {
          const glowSize = Math.min(width, height) * 1.8;
          const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowSize);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)'); // intense white core
          gradient.addColorStop(0.15, 'rgba(34, 197, 94, 0.7)'); // bright green
          gradient.addColorStop(0.4, 'rgba(34, 197, 94, 0.3)'); // extended green glow
          gradient.addColorStop(1, 'rgba(2, 18, 10, 0)'); // fade to bg

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [showIntro, phase]);

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-container"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-hack-darkBg flex items-center justify-center overflow-hidden"
      >
        {phase === 'init' ? (
          <div className="absolute inset-0 flex items-center justify-center z-[101] bg-[#02120a]">
             <button 
                onClick={startAnimation}
                className="px-8 py-3 rounded-full border border-white/50 text-white font-mono tracking-widest hover:bg-white/10 transition-colors animate-pulse backdrop-blur-md glass"
             >
                ENTER HACKINTYM
             </button>
          </div>
        ) : null}

        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 z-0 pointer-events-none" 
            style={{ opacity: phase === 'reveal' ? 0.4 : 1, transition: 'opacity 2s ease-in-out' }}
        />

        {phase === 'reveal' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 text-center pointer-events-none"
          >
            {/* Green center glow behind text */}
            <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e]/30 rounded-full blur-[120px] z-[-1]" 
            />
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4ade80] drop-shadow-[0_0_35px_rgba(34,197,94,0.9)]">
              HACK<span className="text-[#22c55e]">IN</span>TYM 26
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-3xl text-white/90 font-light tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              30 Hour Hackathon
              <br />
              Where Curosity Meets Innovation
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
