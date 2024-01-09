import { ReactElement, useState } from "react";
import clsx from "clsx";

import { useAppContext, useLocale } from "../../hooks";
import { prettifyCode, makeRequest, isValidJson } from "../../utils";
import { PLACEHOLDER_REQ, QUERY_ERRORS } from "../../constants";
import { Button, Editor, EditorPanel } from "..";

import styles from "./RequestEditor.module.scss";

function RequestEditor(): ReactElement {
  const { setApiResponse, apiEndpoint } = useAppContext();
  const { tooltips } = useLocale();

  const [code, setCode] = useState("");
  const [variablesCode, setVariablesCode] = useState("");
  const [headersCode, setHeadersCode] = useState("");

  // Prettify
  function handlePrettify(): void {
    setCode(prettifyCode(code));

    if (isValidJson(variablesCode)) {
      setVariablesCode(JSON.stringify(JSON.parse(variablesCode), null, "  "));
    }

    if (isValidJson(headersCode)) {
      setHeadersCode(JSON.stringify(JSON.parse(headersCode), null, "  "));
    }
  }

  // Request
  async function handleRequest(): Promise<void> {
    if (!code.trim()) return;

    if (variablesCode && !isValidJson(variablesCode)) {
      setApiResponse(QUERY_ERRORS.variables);
      return;
    }

    if (headersCode && !isValidJson(headersCode)) {
      setApiResponse(QUERY_ERRORS.headers);
      return;
    }

    try {
      const res = await makeRequest(apiEndpoint, code, variablesCode, headersCode);
      const data = await res.json();

      if (!res.ok) {
        setApiResponse(QUERY_ERRORS.request + data.errors[0].message);
        return;
      }

      const apiResponse = JSON.stringify(data, null, "  ");
      setApiResponse(apiResponse);
    } catch (error) {
      if (error instanceof Error) {
        setApiResponse(QUERY_ERRORS.api);
      }
    }
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
          className={styles.requestView__buttons_button}
          tooltip={tooltips.request}
          id="button__request"
          onClick={handleRequest}
        >
          <span className={clsx(styles.button__icon, styles.button__icon_request)} />
        </Button>

        <Button
          className={styles.requestView__buttons_button}
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
