import { ReactElement } from "react";
import Image from "next/image";
import { useAppContext } from "../../hooks";
import { LINK_SCHOOL, LINK_COURSE } from "../../utils";
import { TEAM, FOOTER } from "../../constants/locale";

import styles from "./footer.module.scss";

function Footer(): ReactElement {
  const { lang } = useAppContext();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.team}>
          <div className={styles.team__title}>
            <p>{FOOTER[lang].title}</p>
            <p>{FOOTER[lang].subtitle}</p>
          </div>
          <ul className={styles.team__items}>
            {TEAM[lang].map((member) => (
              <li className={styles.item} key={member.name}>
                <Image
                  src={member.image}
                  width={600}
                  height={750}
                  alt={`Photo of ${member.name.split(" ")[0]}`}
                  className={styles.item__image}
                />
                <a href={member.github} className={styles.item__link}>
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.course}>
          <ul className={styles.course__items}>
            <li className={styles.item}>
              <a href={LINK_SCHOOL} className={styles.item__link} target="_blank">
                {FOOTER[lang].linkSchool}
              </a>
            </li>
            <li className={styles.item}>
              <a href={LINK_COURSE} className={styles.item__link} target="_blank">
                {FOOTER[lang].linkCourse}
              </a>
              <span>(2023)</span>
            </li>
          </ul>

          <span>{FOOTER[lang].copy}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
