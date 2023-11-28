import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";

interface FormInputProps {
  form: any;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  labelClass?: string;
  inputClass?: string;
  onKeyDown?: any;
}

const FormInput = (props: FormInputProps) => {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }: any) => (
        <FormItem>
          <FormLabel className={cn("", props.labelClass)}>
            <Label variant={"default"} className="ml-1 py-2">
              {props.label}
            </Label>
          </FormLabel>
          <FormControl>
            <Input
              type={props.type}
              placeholder={props.placeholder}
              {...field}
              className={cn("mt-1", props.inputClass)}
              onKeyDown={props.onKeyDown}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
