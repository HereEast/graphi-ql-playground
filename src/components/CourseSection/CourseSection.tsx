import { ReactElement } from "react";
import Image from "next/image";
import { useAppContext } from "../../hooks";
import { LINK_COURSE } from "../../constants";
import { LOCALE_HOME, LOCALE_HOME_COURSE } from "../../constants/locale";

import styles from "./CourseSection.module.scss";

function CourseSection(): ReactElement {
  const { lang } = useAppContext();

  return (
    <section className={styles.course}>
      <div className={styles.course__container}>
        <div className={styles.course__info}>
          <Image
            className={styles.info__picture}
            src="/images/course.jpg"
            alt="Image for Course section"
            width={260}
            height={120}
          />
          <div className={styles.info__content}>
            <span className={styles.info__content_tag}>{LOCALE_HOME[lang].courseTag}</span>
            <h2 className={styles.info__content_title}>{LOCALE_HOME[lang].courseTitle}</h2>
            <div className={styles.info__content_body}>
              <p>{LOCALE_HOME[lang].coursePar1}</p>
              <p>{LOCALE_HOME[lang].coursePar2}</p>
              <a href={LINK_COURSE} className={styles.info__content_link}>
                {LOCALE_HOME[lang].courseLink}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.course__table}>
          {LOCALE_HOME_COURSE[lang].map((week, index) => (
            <div className={styles.course__table_item} key={week}>
              <span>
                {LOCALE_HOME[lang].weekTitle} #
                {index === Object.keys(LOCALE_HOME_COURSE[lang]).length - 1 ? "7—10" : index + 1}:
              </span>
              <span>{LOCALE_HOME_COURSE[lang][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
