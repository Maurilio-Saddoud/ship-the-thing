"use client";

import { type VariantProps, cva } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-sky-600 text-white shadow hover:bg-sky-500 shadow-[0_8px_20px_-8px_rgba(2,132,199,0.5)]",
        destructive:
          "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90",
        outline:
          "border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900",
        secondary:
          "bg-sky-100 text-sky-900 shadow-sm hover:bg-sky-200/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-sky-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-8",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface cnButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MotionLink = motion.create ? motion.create(Link) : (motion as any)(Link);

const Button = forwardRef<HTMLButtonElement, cnButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    if (href) {
      return (
        <MotionLink
          href={href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(buttonVariants({ variant, size, className }))}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
        />
      );
    }
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
