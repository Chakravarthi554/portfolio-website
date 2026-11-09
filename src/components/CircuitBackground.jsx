// src/components/CircuitBackground.jsx
// Subtle, high-performance HTML5 canvas simulating digital signal traces, clock buses & logic nodes

import React, { useEffect, useRef } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initCircuits();
    };

    window.addEventListener('resize', handleResize);

    // Circuit Traces & Signal Pulses
    let traces = [];
    const traceCount = Math.floor(Math.min(width, 1400) / 75);

    function initCircuits() {
      traces = [];
      const gridSize = 40;

      for (let i = 0; i < traceCount; i++) {
        const startX = Math.floor((Math.random() * width) / gridSize) * gridSize;
        const startY = Math.floor((Math.random() * height) / gridSize) * gridSize;
        
        // Orthogonal segments (RTL traces)
        const segments = [{ x: startX, y: startY }];
        let curX = startX;
        let curY = startY;
        const length = 3 + Math.floor(Math.random() * 4);

        for (let j = 0; j < length; j++) {
          const moveHorizontal = Math.random() > 0.5;
          const dist = (Math.random() > 0.5 ? 1 : -1) * gridSize * (1 + Math.floor(Math.random() * 2));
          if (moveHorizontal) {
            curX += dist;
          } else {
            curY += dist;
          }
          segments.push({ x: curX, y: curY });
        }

        traces.push({
          segments,
          pulseProgress: Math.random(),
          speed: 0.003 + Math.random() * 0.004,
          pulseLength: 0.15 + Math.random() * 0.15,
          color: Math.random() > 0.4 ? 'rgba(56, 189, 248, ' : 'rgba(0, 240, 255, ',
          nodeRadius: Math.random() > 0.5 ? 2.5 : 1.5
        });
      }
    }

    initCircuits();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle orthogonal circuit lines
      traces.forEach((trace) => {
        // Draw underlying PCB/RTL signal path
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
        ctx.lineWidth = 1;
        ctx.lineJoin = 'miter';

        const segs = trace.segments;
        ctx.moveTo(segs[0].x, segs[0].y);
        for (let i = 1; i < segs.length; i++) {
          ctx.lineTo(segs[i].x, segs[i].y);
        }
        ctx.stroke();

        // Draw junction nodes
        segs.forEach((node, idx) => {
          if (idx === 0 || idx === segs.length - 1) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, trace.nodeRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
            ctx.fill();
          }
        });

        // Animate digital signal pulse traveling along the trace
        trace.pulseProgress += trace.speed;
        if (trace.pulseProgress > 1 + trace.pulseLength) {
          trace.pulseProgress = 0;
        }

        // Calculate total path length
        let totalLength = 0;
        const segmentLengths = [];
        for (let i = 0; i < segs.length - 1; i++) {
          const dx = segs[i + 1].x - segs[i].x;
          const dy = segs[i + 1].y - segs[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          segmentLengths.push(dist);
          totalLength += dist;
        }

        const headDist = (trace.pulseProgress) * totalLength;
        const tailDist = Math.max(0, (trace.pulseProgress - trace.pulseLength) * totalLength);

        // Helper to get point at distance
        const getPointAt = (dist) => {
          let accumulated = 0;
          for (let i = 0; i < segmentLengths.length; i++) {
            if (accumulated + segmentLengths[i] >= dist) {
              const segDist = dist - accumulated;
              const ratio = segDist / segmentLengths[i];
              return {
                x: segs[i].x + (segs[i + 1].x - segs[i].x) * ratio,
                y: segs[i].y + (segs[i + 1].y - segs[i].y) * ratio
              };
            }
            accumulated += segmentLengths[i];
          }
          return segs[segs.length - 1];
        };

        if (headDist > 0 && tailDist < totalLength) {
          const headPt = getPointAt(Math.min(headDist, totalLength));
          const tailPt = getPointAt(tailDist);

          const grad = ctx.createLinearGradient(tailPt.x, tailPt.y, headPt.x, headPt.y);
          grad.addColorStop(0, `${trace.color}0)`);
          grad.addColorStop(1, `${trace.color}0.7)`);

          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.moveTo(tailPt.x, tailPt.y);
          ctx.lineTo(headPt.x, headPt.y);
          ctx.stroke();

          // Glowing head dot
          ctx.beginPath();
          ctx.arc(headPt.x, headPt.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `${trace.color}0.9)`;
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default CircuitBackground;
