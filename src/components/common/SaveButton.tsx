"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";

interface SaveButtonProps {
  label?: string | React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: any;
}
const SaveButton = ({
  label,
  onClick,
  className,
  variant,
}: SaveButtonProps) => {
  return (
    <Button
      variant={variant}
      className={cn(
        "bg-green-600 hover:bg-green-700 text-white  py-2 px-4 rounded w-[150px]",
        className
      )}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default SaveButton;
