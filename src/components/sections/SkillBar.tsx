"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SkillBar({ level, label }: { level: number; label: string }) {
  const reduce = useReducedMotion();
  const safe = Math.min(100, Math.max(0, level));
  return (
    <div className="mt-5">
      <div className="mb-1.5 flex justify-between text-xs text-mute">
        <span>{label}</span>
        <span>{safe}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-line" role="presentation">
        <motion.div
          className="h-full origin-left rounded-full bg-brand-500"
          style={{ width: `${safe}%` }}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
