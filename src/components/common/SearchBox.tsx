"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  useURLParams,
  useGetSearchParamValue,
} from "@/components/hooks/request";
import { Input } from "@/components/ui/input";
import { cn, isValidSearchText } from "@/lib/utils";
import Icons from "./Icons";
import { SkillsTooltip } from "./SkillsTooltip";
import { motion } from "framer-motion";
import { isValid } from "date-fns";

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
  open?: boolean;
}

const SearchBox = (props: SearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(props.open || false);
  const [error, setError] = useState(false);

  const router = useRouter();
  let searchText = useGetSearchParamValue("q", "");
  const { appendSearchParams, removeSearchParams } = useURLParams();
  console.log("current query", searchQuery);

  const handleSearch = () => {
    if (!isValidSearchText(searchQuery)) {
      setError(true);
      return;
    }

    setError(false);
    router.push(appendSearchParams("q", searchQuery));
  };
  console.log("search query in search box", searchText);
  useEffect(() => {
    setSearchQuery(searchText);
  }, [searchText]);

  function clearSearch() {
    setError(false);
    setSearchQuery("");
    router.push(removeSearchParams("q"));
  }

  function toggleSearchBox() {
    clearSearch();
    setIsOpen(!isOpen);
  }

  const errorClass = error ? "border-red-500 border-2 animate-shake" : "";
  const openClass = isOpen ? "w-80" : "w-0 px-0 border-0";

  return (
    <div
      className={`relative mx-2 mt-2 md:mt-0 md:ml-0 flex items-center gap-1 max-w-xl`}
    >
      <SearchIcon onClick={toggleSearchBox} />

      <Input
        className={cn(
          ` transition-all duration-500 active:outline-none focus:outline-none focus-visible:ring-0 flex-1`,
          errorClass + " " + openClass
        )}
        type="text"
        placeholder={props.placeholder || "Search..."}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <ClearIcon searchText={searchQuery} onClick={clearSearch} />
    </div>
  );
};

function SearchIcon({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.9 }}
    >
      <SkillsTooltip text="Click to Search">
        <div className="border hover:bg-gray-200">
          {/* <Search
        className="p-2 h-9 w-9 text-blue-500 cursor-pointer hover:"
        onClick={() => onClick()}
      /> */}
          <Icons iconName="search" onClick={() => onClick()} />
        </div>
      </SkillsTooltip>
    </motion.div>
  );
}

function ClearIcon({
  searchText,
  onClick,
}: {
  searchText: string;
  onClick: () => void;
}) {
  return (
    <>
      {searchText && (
        <div className="absolute right-0 px-2">
          <Icons iconName="X" onClick={() => onClick()} />
        </div>
      )}
    </>
  );
}

export default SearchBox;
