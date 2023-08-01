import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      {/* <p className={styles.copy}>OwlTop © 2020 - 2021 Все права защищены</p>
      <div className={styles.linksbox}>
        <a className={styles.link} href="#">Пользовательское соглашение</a>
        <a className={styles.link} href="#">Политика конфиденциальности</a>
      </div> */}
      {/*! это мой вариант верстки */}

      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
			<a href="" target="_blank">Пользовательское соглашение</a>
			<a href="" target="_blank">Политика конфиденциальности</a>
    </footer>
  );
};
