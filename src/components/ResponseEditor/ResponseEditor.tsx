import { ReactElement } from "react";
import { useAppContext } from "../../hooks";
import { Editor } from "..";

import styles from "./ResponseEditor.module.scss";

function ResponseEditor(): ReactElement {
  const { apiResponse } = useAppContext();

  return (
    <div className={styles.responseView}>
      <Editor
        mode="read"
        code={apiResponse}
        placeholder="JSON response..."
        className="editor__response"
      />
    </div>
  );
}

export default ResponseEditor;
