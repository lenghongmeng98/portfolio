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
  transition: { duration: reduce ? 0 : 0.5, delay: reduce ? 0 : delay, ease: EASE_OUT },
});

/** Blur + fade + slide — premium entrance effect */
export const blurFadeUp = (reduce: boolean | null, delay = 0) => ({
  initial: {
    opacity: reduce ? 1 : 0,
    y: reduce ? 0 : 20,
    filter: reduce ? "blur(0px)" : "blur(10px)",
  },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: reduce ? 0 : 0.65, delay: reduce ? 0 : delay, ease: EASE_OUT },
});

/** Spring-based entrance — bouncy and fluid */
export const springUp = (reduce: boolean | null, delay = 0) => ({
  initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" as const },
  transition: reduce
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
        mass: 0.9,
        delay,
        opacity: { duration: 0.4, ease: EASE_OUT },
      },
});

export const staggerContainer = (reduce: boolean | null, stagger = 0.065) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: reduce ? 0 : 0.05 },
  },
});

export const staggerItem = (reduce: boolean | null) => ({
  hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 },
  visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.5, ease: EASE_OUT } },
});
