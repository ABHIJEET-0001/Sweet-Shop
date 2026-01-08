import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const isHovering = useRef<string | null>(null);
  const sparkleCounter = useRef(0);

  useEffect(() => {
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'custom-cursor-dot';
    ring.className = 'custom-cursor-ring';
    document.body.appendChild(ring);
    document.body.appendChild(dot);
    dotRef.current = dot;
    ringRef.current = ring;

    // Hide native cursor
    document.documentElement.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      // Reduce sparkle frequency for a more professional look
      sparkleCounter.current++;
      if (sparkleCounter.current % 4 === 0 && isHovering.current !== 'sweet') {
        spawnSparkle(e.clientX, e.clientY);
      }
    };

    const onLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('button') || target.tagName === 'BUTTON' || target.closest('a')) {
        isHovering.current = 'button';
        dot.classList.add('cursor--btn');
        ring.classList.add('cursor--btn');
      } else if (target.closest('[data-cursor="sweet"]') || target.closest('.cursor-sweet')) {
        isHovering.current = 'sweet';
        dot.classList.add('cursor--sweet');
        ring.classList.add('cursor--sweet');
      } else if (target.closest('img')) {
        isHovering.current = 'image';
        dot.classList.add('cursor--image');
        ring.classList.add('cursor--image');
      } else {
        isHovering.current = null;
        dot.classList.remove('cursor--btn', 'cursor--sweet', 'cursor--image');
        ring.classList.remove('cursor--btn', 'cursor--sweet', 'cursor--image');
      }
    };

    const onOut = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // remove hover classes when pointer leaves
      if (!document.querySelector(':hover')) {
        isHovering.current = null;
        dot.classList.remove('cursor--btn', 'cursor--sweet', 'cursor--image');
        ring.classList.remove('cursor--btn', 'cursor--sweet', 'cursor--image');
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    document.addEventListener('mouseleave', onLeave);

    const render = () => {
      // Refined easing for smooth, premium feel
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 7}px, ${mouse.current.y - 7}px, 0)`;
      }
      if (ringRef.current) {
        const scale = isHovering.current === 'button' ? 1.6 : isHovering.current === 'sweet' ? 2.0 : 1;
        const blur = isHovering.current === 'sweet' ? 8 : 4;
        ringRef.current.style.transform = `translate3d(${pos.current.x - 16}px, ${pos.current.y - 16}px, 0) scale(${scale})`;
        ringRef.current.style.boxShadow = `0 6px ${blur}px rgba(255,210,120,0.18)`;
      }

      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    function spawnSparkle(x: number, y: number) {
      const sparkle = document.createElement('div');
      sparkle.className = 'cursor-sparkle';
      sparkle.style.left = `${x + (Math.random() - 0.5) * 8}px`;
      sparkle.style.top = `${y + (Math.random() - 0.5) * 8}px`;
      document.body.appendChild(sparkle);
      requestAnimationFrame(() => (sparkle.style.transform = `translateY(${-12 - Math.random() * 8}px) scale(0.4)`, sparkle.style.opacity = '0'));
      setTimeout(() => sparkle.remove(), 600);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      document.removeEventListener('mouseleave', onLeave);
      dot.remove();
      ring.remove();
      document.documentElement.style.cursor = '';
    };
  }, []);

  return null;
};

export default CustomCursor;
