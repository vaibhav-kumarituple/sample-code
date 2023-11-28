"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  useURLParams,
  useGetSearchParamValue,
} from "@/components/hooks/request";
import { useRouter } from "next/navigation";
const animatedComponents = makeAnimated();

interface MultiSelectProps {
  readonly options: any;
  placeholder: string;
  queryKey: string;
  // onSelectionChange: (roles: any) => void;
  className?: string;
}

export default function MultiSelectDropDown(props: MultiSelectProps) {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const { appendSearchParams, removeSearchParams } = useURLParams();
  const list = props.options.map((option: any) => ({
    value: option.name || option.value,
    label: option.name || option.label,
  }));
  let searchParamValue = useGetSearchParamValue(`${props.queryKey}`, "");
  let queryParamsArray = searchParamValue.split(",");
  const emptyValueArray = convertToObjects(queryParamsArray);
  const result = compareArraysForValues(list, emptyValueArray);
  useEffect(() => {
    if (result) {
      setSelectedOptions(result);
    }
  }, [searchParamValue]);

  const handleSelectionChange = (selected: any) => {
    setSelectedOptions(selected);
    console.log("selected ", selected);
    const result = [];
    for (let i = 0; i < selected.length; i++) {
      result.push(selected[i].label);
    }
    if (result.length > 0) {
      router.push(appendSearchParams(`${props.queryKey}`, result?.join(",")));
    } else router.push(removeSearchParams(`${props.queryKey}`));

    // props.onSelectionChange(result);
  };

  const placeholder =
    selectedOptions.length > 1
      ? selectedOptions.map((option: any) => option.label).join(", ")
      : props.placeholder;

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      value={selectedOptions}
      isMulti
      options={list}
      placeholder={placeholder}
      className={cn("min-w-[10%]", props.className)}
      onChange={handleSelectionChange}
    />
  );
}

function convertToObjects(array: any) {
  return array.map(function (item: any) {
    return { label: item, value: "" };
  });
}

function compareArraysForValues(firstArray: any, secondArray: any) {
  const result = [];

  for (const item1 of firstArray) {
    for (const item2 of secondArray) {
      if (item1.label === item2.label) {
        result.push({ label: item1.label, value: item1.value });
        break;
      }
    }
  }

  return result;
}
