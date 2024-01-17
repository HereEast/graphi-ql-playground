import { ReactElement } from "react";
import Image from "next/image";

import { useLocale } from "../../hooks";
import { LINK_COURSE } from "../../constants/constants";

import styles from "./CourseSection.module.scss";

function CourseSection(): ReactElement {
  const { home, course } = useLocale();

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
            <span className={styles.info__content_tag}>{home.courseTag}</span>
            <h2 className={styles.info__content_title}>{home.courseTitle}</h2>
            <div className={styles.info__content_body}>
              <p>{home.coursePar1}</p>
              <p>{home.coursePar2}</p>
              <a href={LINK_COURSE} className={styles.info__content_link}>
                {home.courseLink}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.course__table}>
          {course.map((week, index) => (
            <div className={styles.course__table_item} key={week}>
              <span>
                {home.weekTitle} #{index === Object.keys(course).length - 1 ? "7—10" : index + 1}:
              </span>
              <span>{course[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
