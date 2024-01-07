import { ReactElement, useState } from "react";
import clsx from "clsx";

import { useAppContext, useLocale } from "../../hooks";
import { prettifyCode, makeRequest } from "../../utils";
import { PLACEHOLDER_REQ } from "../../constants";
import { Button, Editor, EditorPanel } from "..";

import styles from "./RequestEditor.module.scss";

function RequestEditor(): ReactElement {
  const { setApiResponse, apiEndpoint } = useAppContext();
  const { tooltips } = useLocale();

  const [code, setCode] = useState("");
  const [variablesCode, setVariablesCode] = useState("");
  const [headersCode, setHeadersCode] = useState("");

  function handlePrettify(): void {
    console.log(prettifyCode(code));

    setCode(prettifyCode(code));
  }

  async function handleRequest(): Promise<void> {
    // try catch
    const res = await makeRequest(apiEndpoint, code);
    const data = await res.json();

    const apiResponse = JSON.stringify(data, null, "  ");
    setApiResponse(apiResponse);

    // console.log("Code:", code);
    // console.log("Variables:", codeVariables);
    // console.log("Headers:", codeHeaders);
  }

  return (
    <div className={styles.requestView}>
      <Editor
        mode="edit"
        code={code}
        setCode={setCode}
        placeholder={PLACEHOLDER_REQ}
        className="editor__request"
      />

      <div className={styles.requestView__buttons}>
        <Button
          className={styles.requestView__buttons_request}
          tooltip={tooltips.request}
          id="button__request"
          onClick={handleRequest}
        >
          <span className={clsx(styles.button__icon, styles.button__icon_request)} />
        </Button>

        <Button
          className={styles.requestView__buttons_prettify}
          tooltip={tooltips.prettify}
          id="button__prettify"
          onClick={handlePrettify}
        >
          <span className={clsx(styles.button__icon, styles.button__icon_prettify)} />
        </Button>
      </div>

      <EditorPanel
        variablesCode={variablesCode}
        headersCode={headersCode}
        setVariablesCode={setVariablesCode}
        setHeadersCode={setHeadersCode}
      />
    </div>
  );
}

export default RequestEditor;
