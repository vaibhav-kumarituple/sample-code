import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(" text-gray-600", {
  variants: {
    variant: {
      default: "font-normal",
      bold: "font-bold",

      semibold: "font-semibold",
      light: "font-light",
      link: "hover:underline underline-offset-4  cursor-pointer",
    },
    size: {
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",

      lg: "text-xl",
      xl: "text-3xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {
  asChild?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "label";
    return <Comp className={cn(labelVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Label.displayName = "Label";

export { Label, labelVariants };
