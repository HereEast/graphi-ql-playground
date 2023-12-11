import { ReactElement } from "react";

import styles from "./ImageSection.module.scss";

function ImageSection(): ReactElement {
  return (
    <section className={styles.image}>
      <div className={styles.image__container}>
        <div className={styles.image__img}></div>
      </div>
    </section>
  );
}

export default ImageSection;
