import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m";
	color?: 'primary'| 'red' | 'ghost' | 'grey' | 'green';
	href?: string;
  children: ReactNode;
}
