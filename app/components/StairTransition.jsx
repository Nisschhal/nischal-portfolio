"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// stair component
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    // Mode="Wait" for exit animation to finished before unmounting or moving to next route||animation
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div>
          {/* // pointer-events-none bypasses||ignore any interaction and focus on the element's interaction beneath its layer */}
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
            }}
            className="w-screen h-screen fixed bg-primary top-0 pointer-events-none"
          ></motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
