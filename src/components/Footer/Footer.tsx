import { ReactElement } from "react";
import { useAppContext } from "../../hooks";
import { LINK_SCHOOL, LINK_COURSE } from "../../constants";
import { LOCALE_TEAM, LOCALE_FOOTER } from "../../constants/locale";

import { FooterCard } from "../";

import styles from "./Footer.module.scss";

function Footer(): ReactElement {
  const { lang } = useAppContext();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.team}>
          <div className={styles.team__title}>
            <span>{LOCALE_FOOTER[lang].title}</span>
            <span>{LOCALE_FOOTER[lang].subtitle}</span>
          </div>
          <ul className={styles.team__cards}>
            {LOCALE_TEAM[lang].map((person) => (
              <FooterCard teamMember={person} />
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
                {LOCALE_FOOTER[lang].linkSchool}
              </a>
            </li>
            <li className={styles.course__links_item}>
              <a
                href={LINK_COURSE}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {LOCALE_FOOTER[lang].linkCourse}
              </a>
              <span>(2023)</span>
            </li>
          </ul>

          <span className={styles.course__copyright}>{LOCALE_FOOTER[lang].copy}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
