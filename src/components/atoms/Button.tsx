import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(" ", {
  variants: {
    variant: {
      default: "bg-[#FA8825] py-3 px-5 rounded border border-[#FFFFFF",
      outline: "py-4 px-8 rounded  text-[#BA7894] border border-[#BA7894]",
      rounded: "bg-[#FA8825] py-4 px-9 rounded-full border border-[#FFFFFF",
    },
    size: {
      default: " py-2 px-4 rounded",
      sm: " py-2 px-4 rounded",
      md: " py-2 px-4 rounded",
      lg: " py-2 px-4 rounded",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ variant, size, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      
    </button>
  );
});

export { Button, buttonVariants };
