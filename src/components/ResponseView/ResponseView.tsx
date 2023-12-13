import { ReactElement, useState } from "react";
import { Editor } from "..";

import styles from "./ResponseView.module.scss";

function ResponseView(): ReactElement {
  const [code, setCode] = useState("");

  return (
    <div className={styles.requestView}>
      <Editor mode="read" code={code} setCode={setCode} />
    </div>
  );
}

export default ResponseView;
