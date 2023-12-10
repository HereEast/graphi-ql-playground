import { ReactElement } from "react";
import { useAppContext } from "../../hooks";
import { HOME, TEAM } from "../../constants/locale";

import styles from "./teamSection.module.scss";

function TeamSection(): ReactElement {
  const { lang } = useAppContext();

  return (
    <>
      <section className={styles.team}>
        <div className={styles.team__container}>
          <span className={styles.team__title}>{HOME[lang].teamTitle}</span>
          <ul className={styles.team__items}>
            {TEAM[lang].map((person) => (
              <li className={styles.team__item} key={person.github}>
                <p className={styles.team__description}>{person.description}</p>
                <div className={styles.team__item_footer}>
                  <a href={person.github} className={styles.team__name} title="GitHub">
                    {person.name}
                  </a>
                  <span className={styles.team__position}>{person.position.toUpperCase()}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default TeamSection;
