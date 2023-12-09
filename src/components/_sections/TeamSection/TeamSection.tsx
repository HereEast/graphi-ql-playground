import { ReactElement } from "react";
import { TEAM } from "../../../utils";

import styles from "./teamSection.module.scss";

function TeamSection(): ReactElement {
  return (
    <>
      <section className={styles.team}>
        <div className={styles.team__container}>
          <span className={styles.team__title}>Team</span>
          <ul className={styles.team__items}>
            {TEAM.map((person) => (
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
