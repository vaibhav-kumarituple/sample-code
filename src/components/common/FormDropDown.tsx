"use client";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { IValidValues } from "@/lib/common/validvalues";

interface FormDropdownProps {
  options: IValidValues[];
  placeholder: string;
  onOptionSelect: (value: any) => void;
  className?: string;
  disabled?: boolean;
}

export default function FormDropdown(props: FormDropdownProps) {
  return (
    <div className={cn(" w-28 border rounded-md", props.className)}>
      <Select
        onValueChange={(value: any) => props.onOptionSelect(value)}
        disabled={props.disabled}
      >
        <SelectTrigger className=" text-gray-600">
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-64 overflow-y-auto">
          <SelectGroup>
            {props.options?.map((item: any) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="text-gray-600"
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
