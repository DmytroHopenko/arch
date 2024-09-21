import { motion, AnimatePresence } from "framer-motion";
import { NavItems } from "./NavItems";

export const MobileNav = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 h-full w-full top-[96px] bottom-0 left-0 right-0 bg-[#000] bg-opacity-50 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
          className="w-[343px] h-[235px] bg-[#EEEFF4] self-end px-12 py-[40px]"
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ delay:  0.1, duration: 0.5 }}
          >
            <NavItems />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
