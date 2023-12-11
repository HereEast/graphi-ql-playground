import { ReactElement } from "react";
import { useLocale } from "../../hooks";
import { LINK_SCHOOL, LINK_COURSE } from "../../constants/constants";
import { FooterCard } from "../";

import styles from "./Footer.module.scss";

function Footer(): ReactElement {
  const { team, footer } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.team}>
          <div className={styles.team__title}>
            <span>{footer.title}</span>
            <span>{footer.subtitle}</span>
          </div>
          <ul className={styles.team__cards}>
            {team.map((person) => (
              <FooterCard teamMember={person} key={person.github} />
            ))}
          </ul>
        </div>

        <div className={styles.course}>
          <ul className={styles.course__links}>
            <li className={styles.course__links_item}>
              <a
                href={LINK_SCHOOL}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footer.linkSchool}
              </a>
            </li>
            <li className={styles.course__links_item}>
              <a
                href={LINK_COURSE}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footer.linkCourse}
              </a>
              <span>(2023)</span>
            </li>
          </ul>

          <span className={styles.course__copyright}>{footer.copy}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
