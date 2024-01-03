import { ReactElement, useState } from "react";

import { useAppContext } from "../../hooks";
import { prettifyCode, makeRequest } from "../../utils";
import { Button, Editor, EditorPanel } from "..";

import styles from "./RequestEditor.module.scss";

function RequestEditor(): ReactElement {
  const { setApiResponse, apiEndpoint } = useAppContext();

  const [code, setCode] = useState("");
  const [variablesCode, setVariablesCode] = useState("");
  const [headersCode, setHeadersCode] = useState("");

  function handlePrettify(): void {
    console.log(prettifyCode(code));

    setCode(prettifyCode(code));
  }

  async function handleRequest(): Promise<void> {
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
        placeholder="GraphQL request..."
        className="editor__request"
      />

      <div className={styles.requestView__buttons}>
        <Button className={styles.requestView__buttons_request} onClick={handleRequest}>
          <span>R</span>
        </Button>
        <Button className={styles.requestView__buttons_prettify} onClick={handlePrettify}>
          <span>P</span>
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
