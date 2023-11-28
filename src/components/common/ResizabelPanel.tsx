"use client";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";

export default function ResizablePanel({
  children,
  duration = 0.5,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  let [ref, { height }] = useMeasure();
  // console.log("height", height);
  return (
    <motion.div
      animate={{ height: height || "auto" }}
      className="relative overflow-hidden w-full"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{
            opacity: 0,
            // x: 382,
          }}
          animate={{
            opacity: 1,
            // x: 0,
            transition: { duration: duration, delay: duration / 2 },
          }}
          exit={{
            opacity: 0,
            // x: -382,
            transition: { duration: duration },
          }}
        >
          <div
            ref={ref}
            className={`${height ? "absolute w-full" : "relative w-full"}`}
          >
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
