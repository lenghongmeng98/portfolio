"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE_OUT } from "@/lib/motion";

export function PageLoader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = window.setTimeout(() => setDone(true), 400);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
        >
          <div className="h-0.5 w-20 overflow-hidden rounded-full bg-[var(--border)]">
            <motion.div
              className="h-full bg-[var(--accent)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
