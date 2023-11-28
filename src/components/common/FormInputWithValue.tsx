import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Label } from "./Label";

interface FormInputProps {
  form: any;
  name: string;
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  labelClass?: string;
  inputClass?: string;
  onChange?: (e: any) => void;
}

const FormInputWithValue = (props: FormInputProps) => {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }: any) => (
        <FormItem>
          <FormLabel className={cn("", props.labelClass)}>
            {props.label}
          </FormLabel>
          <FormControl>
            <Input
              type={props.type}
              placeholder={props.placeholder}
              {...field}
              className={cn("", props.inputClass)}
              onChange={props.onChange}
              value={props.value}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInputWithValue;
