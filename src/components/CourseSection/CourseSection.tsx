import Image from "next/image";
import { ReactElement } from "react";
import { useAppContext } from "../../hooks";
import { LINK_COURSE } from "../../utils";
import { HOME, COURSE } from "../../constants/locale";

import styles from "./courseSection.module.scss";

function CourseSection(): ReactElement {
  const { lang } = useAppContext();

  return (
    <>
      <section className={styles.course}>
        <div className={styles.course__container}>
          <div className={styles.course__info}>
            <Image
              className={styles.course__info_picture}
              src="/images/course.jpg"
              alt="Image for Course section"
              width={260}
              height={120}
            />
            <div className={styles.course__info_content}>
              <span className={styles.course__subtitle}>{HOME[lang].courseTag}</span>
              <h2 className={styles.course__title}>{HOME[lang].courseTitle}</h2>
              <div className={styles.course__body}>
                <p>{HOME[lang].coursePar1}</p>
                <p>{HOME[lang].coursePar2}</p>
                <a href={LINK_COURSE} className={styles.course__link}>
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
    </>
  );
}

export default CourseSection;
