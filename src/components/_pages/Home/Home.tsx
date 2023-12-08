import { ReactElement } from "react";
import { HeroSection } from "../../_sections/HeroSection";
import { TeamSection } from "../../_sections/TeamSection";
import { CourseSection } from "../../_sections/CourseSection";

import styles from "./home.module.scss";

function Home(): ReactElement {
  return (
    <>
      <HeroSection />

      <section className={styles.image}>
        <div className={styles.image__container}>
          <div className={styles.image__img}></div>
        </div>
      </section>

      <CourseSection />
      <TeamSection />
    </>
  );
}

export default Home;
