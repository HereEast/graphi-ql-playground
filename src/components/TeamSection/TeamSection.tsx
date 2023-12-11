import { ReactElement } from "react";
import { useAppContext } from "../../hooks";
import { HOME, TEAM } from "../../constants/locale";

import styles from "./TeamSection.module.scss";

function TeamSection(): ReactElement {
  const { lang } = useAppContext();

  return (
    <section className={styles.team}>
      <div className={styles.team__container}>
        <span className={styles.team__title}>{HOME[lang].teamTitle}</span>
        <ul className={styles.team__cards}>
          {TEAM[lang].map((person) => (
            <li className={styles.card} key={person.github}>
              <p className={styles.card__description}>{person.description}</p>
              <div className={styles.card__footer}>
                <a
                  href={person.github}
                  className={styles.card__name}
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {person.name}
                </a>
                <span className={styles.card__position}>{person.position.toUpperCase()}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TeamSection;
