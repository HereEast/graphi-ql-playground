import { ReactElement, useState } from "react";
import { useAppContext } from "../../hooks";
import { prettifyCode } from "../../utils";
import { Button, Editor, EditorPanel } from "..";

import styles from "./RequestEditor.module.scss";

const URL = "https://rickandmortyapi.com/graphql";

export async function makeRequest(query: string): Promise<Response> {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  });

  return res;
}

function RequestEditor(): ReactElement {
  const { setApiResponse } = useAppContext();

  const [code, setCode] = useState("");
  const [codeVariables, setCodeVariables] = useState("");
  const [codeHeaders, setCodeHeaders] = useState("");

  function handlePrettify(): void {
    console.log(prettifyCode(code));

    setCode(prettifyCode(code));
  }

  async function handleRequest(): Promise<void> {
    const res = await makeRequest(code);
    const data = await res.json();

    const apiResponse = JSON.stringify(data, null, "  ");
    setApiResponse(apiResponse);

    // console.log("Code:", code);
    // console.log("Variables:", codeVariables);
    // console.log("Headers:", codeHeaders);
  }

  return (
    <div className={styles.requestView}>
      <Editor mode="edit" code={code} setCode={setCode} placeholder="GraphQL request..." />
      {/*Buttons*/}
      <div className={styles.requestView__buttons}>
        <Button className={styles.requestView__buttons_request} onClick={handleRequest}>
          <span>R</span>
        </Button>
        <Button className={styles.requestView__buttons_prettify} onClick={handlePrettify}>
          <span>P</span>
        </Button>
      </div>
      {/*Options*/}
      <EditorPanel
        codeVariables={codeVariables}
        codeHeaders={codeHeaders}
        setCodeVariables={setCodeVariables}
        setCodeHeaders={setCodeHeaders}
      />
    </div>
  );
}

export default RequestEditor;
