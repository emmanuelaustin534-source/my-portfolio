"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
}

/** Subtle 3D tilt that follows a mouse pointer. Touch and reduced-motion users get a static card. */
export function TiltCard({ children, className, max = 5 }: TiltCardProps) {
  const reduce = useReducedMotion();
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 220, damping: 22 });

  function onMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateYRaw.set(px * max * 2);
    rotateXRaw.set(-py * max * 2);
  }

  function onLeave() {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  }

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
