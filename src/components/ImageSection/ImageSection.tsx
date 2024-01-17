import { ReactElement } from "react";
import Image from "next/image";

import styles from "./ImageSection.module.scss";

function ImageSection(): ReactElement {
  return (
    <section className={styles.images}>
      <div className={styles.images__container}>
        <div className={styles.images__item}>
          <Image
            src="/images/playground-01.png"
            width={1000}
            height={2000}
            alt="Image of the Playground's Request Editor"
            layout="responsive"
          />
        </div>
        <div className={styles.images__item}>
          <Image
            src="/images/playground-02.png"
            width={1000}
            height={2000}
            alt="Image of the Playground's Response Editor"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
