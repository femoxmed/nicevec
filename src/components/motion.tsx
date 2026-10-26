'use client';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) { const reduce = useReducedMotion(); return <motion.div className={className} initial={false} whileInView={reduce ? {} : { opacity: [0.7, 1], y: [20, 0] }} viewport={{ once: true, margin: '-35px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>; }
