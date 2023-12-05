import { ReactElement } from "react";

import styles from "./footer.module.scss";

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.course__links}>
          <li className={styles.course__links_item}>
            <a href="" className={styles.link}>
              RS School
            </a>
          </li>
          <li className={styles.course__links_item}>
            <a href="" className={styles.link}>
              React Course (2023)
            </a>
          </li>
        </ul>
        <ul className={styles.team__links}>
          <li className={styles.team__links_item}>
            <a href="" className={styles.link}>
              Andrei
            </a>
          </li>
          <li className={styles.team__links_item}>
            <a href="" className={styles.link}>
              Nikita
            </a>
          </li>
          <li className={styles.team__links_item}>
            <a href="" className={styles.link}>
              Nastia
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
