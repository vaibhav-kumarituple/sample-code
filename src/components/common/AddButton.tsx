"use client";
import React, { Ref, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";

interface AddButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
  variant?: any;
}

const AddButton = forwardRef(
  (props: AddButtonProps, ref: Ref<HTMLButtonElement>) => {

    return (
      <Button
        ref={ref}
        variant={props.variant}
        className={cn(
          "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded",
          props.className
        )}
        onClick={props.onClick}
      >
        <PlusIcon className="h-6 w-6 mr-1" /> {props.label}
      </Button>
    );
  }
);
AddButton.displayName = "AddButton";

export default AddButton;
