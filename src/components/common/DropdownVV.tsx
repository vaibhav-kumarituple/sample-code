"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  useURLParams,
  useGetSearchParamValue,
} from "@/components/hooks/request";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { IValidValues, getLabelByValue } from "@/lib/common/validvalues";

interface DropdownProps {
  options: IValidValues[];
  placeholder: string;
  queryKey: string;
  className?: string;
}

export function DropdownVV(props: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  let searchParamValue = useGetSearchParamValue(`${props.queryKey}`, "");
  const { appendSearchParams } = useURLParams();

  const selectOptionHandler = async (value: any) => {
    setSelectedOption(value);
    router.push(appendSearchParams(`${props.queryKey}`, value));
  };
  useEffect(() => {
    setSelectedOption(searchParamValue);
  }, [searchParamValue]);
  const placeholder =
    getLabelByValue(props.options, selectedOption) || props.placeholder;
  return (
    <div className={cn(" w-28", props.className)}>
      <Select
        key={placeholder}
        onValueChange={(value: any) => selectOptionHandler(value.toUpperCase())}
      >
        <SelectTrigger className=" text-gray-600">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-64 overflow-y-auto">
          <SelectGroup>
            {props.options?.map((item: IValidValues, index: any) => (
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
