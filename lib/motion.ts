/** Shared motion tokens */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const fadeIn = (reduce: boolean | null, delay = 0) => ({
  initial: { opacity: reduce ? 1 : 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-48px" as const },
  transition: { duration: reduce ? 0 : 0.45, delay: reduce ? 0 : delay, ease: EASE_OUT },
});

export const fadeUp = (reduce: boolean | null, delay = 0) => ({
  initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" as const },
  transition: { duration: reduce ? 0 : 0.45, delay: reduce ? 0 : delay, ease: EASE_OUT },
});

export const staggerContainer = (reduce: boolean | null, stagger = 0.065) => ({
  hidden: {},
  visible: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: reduce ? 0 : 0.03 } },
});

export const staggerItem = (reduce: boolean | null) => ({
  hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 },
  visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.5, ease: EASE_OUT } },
});
