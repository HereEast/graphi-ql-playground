import { ReactElement } from "react";
import Image from "next/image";
import { useAppContext } from "../../hooks";
import { LINK_COURSE } from "../../constants";
import { HOME, COURSE } from "../../constants/locale";

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
            <span className={styles.info__content_tag}>{HOME[lang].courseTag}</span>
            <h2 className={styles.info__content_title}>{HOME[lang].courseTitle}</h2>
            <div className={styles.info__content_body}>
              <p>{HOME[lang].coursePar1}</p>
              <p>{HOME[lang].coursePar2}</p>
              <a href={LINK_COURSE} className={styles.info__content_link}>
                {HOME[lang].courseLink}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.course__table}>
          {COURSE[lang].map((week, index) => (
            <div className={styles.course__table_item} key={week}>
              <span>
                {HOME[lang].weekTitle} #
                {index === Object.keys(COURSE[lang]).length - 1 ? "7—10" : index + 1}:
              </span>
              <span>{COURSE[lang][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
