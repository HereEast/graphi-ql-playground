import { ReactElement } from "react";
import { TEAM_INFO } from "../../../utils";

import styles from "./teamSection.module.scss";

function TeamSection(): ReactElement {
  return (
    <>
      <section className={styles.team}>
        <div className={styles.team__container}>
          <span className={styles.team__title}>Team</span>
          <ul className={styles.team__items}>
            {TEAM_INFO.map((person) => (
              <li className={styles.team__item}>
                <p className={styles.team__description}>{person.text}</p>
                <div className={styles.team__item_footer}>
                  <a href={person.github} className={styles.team__name} title="GitHub">
                    {person.name}
                  </a>
                  <span className={styles.team__position}>{person.title.toUpperCase()}</span>
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
