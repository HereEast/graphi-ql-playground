import { ReactElement } from "react";
import { Editor } from "..";

import styles from "./ResponseView.module.scss";

function ResponseView(): ReactElement {
  const code = "";

  return (
    <div className={styles.requestView}>
      <Editor
        mode="read"
        code={code}
        placeholder="Response placeholder..."
        className="editor__response"
      />
    </div>
  );
}

export default ResponseView;
