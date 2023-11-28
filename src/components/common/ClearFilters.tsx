"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Icons from "./Icons";
import { SkillsTooltip } from "./SkillsTooltip";
import { motion } from "framer-motion";

const ClearFilters = () => {
  const router = useRouter();
  const pathname = usePathname();

  const clearFiltersHandler = () => {
    console.log("pathname", pathname);
    router.push(pathname);
  };
  return (
    <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 0.9 }}>
      <SkillsTooltip text="Clear filters">
        <Button
          onClick={clearFiltersHandler}
          className="bg-white text-red-500 border hover:bg-gray-200 
        ">
          <Icons iconName="delete" />
        </Button>
      </SkillsTooltip>
    </motion.div>
  );
};

export default ClearFilters;
