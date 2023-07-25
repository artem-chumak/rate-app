import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "xs" | "s" | "m" | "l" | "xl" | "xxl";
  children: ReactNode;
}
