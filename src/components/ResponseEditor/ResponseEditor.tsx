import { ReactElement, useEffect } from "react";

import { useAppContext } from "../../hooks";
import { PLACEHOLDER_RES } from "../../constants";
import { Editor } from "..";

import styles from "./ResponseEditor.module.scss";

function ResponseEditor(): ReactElement {
  const { apiResponse, setApiResponse, apiEndpoint } = useAppContext();

  useEffect(() => {
    setApiResponse("");
  }, [apiEndpoint, setApiResponse]);

  return (
    <div className={styles.responseView}>
      <Editor
        mode="read"
        code={apiResponse}
        placeholder={PLACEHOLDER_RES}
        className="editor__response"
      />
    </div>
  );
}

export default ResponseEditor;
