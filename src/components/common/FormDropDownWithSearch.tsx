"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function FormDropDownWithSearch({
    optionSelectHandler,
    oldValue,
    options,
    className,
}: {
    optionSelectHandler: Function;
    oldValue?: string | number;
    options: any;
    className?: string;
}) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const selectedValue = value
        ? options.find((option: any) => option.name.toLowerCase() === value)?.name
        : oldValue || "Select";
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn("md:w-60 w-40 justify-between", className)}
                >
                    {selectedValue}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="overflow-y-auto max-h-96 md:w-60 p-0 w-40">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No search found.</CommandEmpty>
                    {showCommandGroup({
                        options,
                        value,
                        setValue,
                        setOpen,
                        optionSelectHandler,
                    })}
                </Command>
            </PopoverContent>
        </Popover>
    );
}

function showCommandGroup({
    options,
    value,
    setValue,
    setOpen,
    optionSelectHandler,
}: {
    options: Array<"">;
    value: string;
    setValue: any;
    setOpen: Function;
    optionSelectHandler: Function;
}) {
    return (
        <CommandGroup>
            {options.map((option: any) => (
                <CommandItem
                    key={option._id}
                    onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                        optionSelectHandler(option._id);
                    }}
                >
                    <Check
                        className={cn(
                            "mr-2 h-4 w-4",
                            value === option._id ? "opacity-100" : "opacity-0"
                        )}
                    />
                    {option.name}
                </CommandItem>
            ))}
        </CommandGroup>
    );
}