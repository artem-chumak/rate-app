import cn from "classnames";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export const Tag = ({
  children,
  color = "ghost",
  size = "m",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(styles.tag, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.grey]: color == "grey",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
