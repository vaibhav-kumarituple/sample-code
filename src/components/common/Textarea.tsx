import React from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";


interface TextareaProps {
    form: any;
    name: string;
    label?: string;
    type?: string;
    placeholder?: string;
    labelClass?: string;
    inputClass?: string;
}

const FormTextarea = (props: TextareaProps) => {
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
                        <Textarea
                            placeholder={props.placeholder}
                            {...field}
                            className={cn("", props.inputClass)}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormTextarea;
