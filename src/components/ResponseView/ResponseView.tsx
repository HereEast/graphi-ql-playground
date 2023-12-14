import { ReactElement } from "react";
import { useAppContext } from "../../hooks";
import { Editor } from "..";

import styles from "./ResponseView.module.scss";

function ResponseView(): ReactElement {
  const { apiResponse } = useAppContext();

  return (
    <div className={styles.requestView}>
      <Editor
        mode="read"
        code={apiResponse}
        placeholder="JSON response..."
        className="editor__response"
      />
    </div>
  );
}

export default ResponseView;
