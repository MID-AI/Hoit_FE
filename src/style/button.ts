// styles.ts
import { cva } from "class-variance-authority";

export const buttonVariant = cva(
  "flex items-center gap-2 text-sm px-3 py-2 rounded-md transition",
  {
    variants: {
      intent: {
        default: "hover:bg-gray-100",
        primary: "bg-blue-500 text-white hover:bg-blue-600",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  },
);

export const modalTabVariant = cva(
  "flex cursor-pointer whitespace-nowrap items-center w-full rounded-22 gap-6 box-border px-24 py-12 text-Type-16-bold",
  {
    variants: {
      modalTab: {
        default: "bg-coolGray-50",
        primary: "border border-coolGray-500 bg-coolGray-200",
      },
    },
    defaultVariants: {
      modalTab: "default",
    },
  },
);
