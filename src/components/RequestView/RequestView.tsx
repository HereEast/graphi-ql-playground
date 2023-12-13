import { ReactElement, useState } from "react";
import { Button, Editor, OptionsPanel } from "..";

import styles from "./RequestView.module.scss";

function RequestView(): ReactElement {
  const [code, setCode] = useState("");
  const [codeVariables, setCodeVariables] = useState("");
  const [codeHeaders, setCodeHeaders] = useState("");

  function handlePrettify(): void {
    console.log(code);
  }

  function handleRequest(): void {
    console.log("Code:", code);
    console.log("Variables:", codeVariables);
    console.log("Headers:", codeHeaders);
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
      <OptionsPanel
        codeVariables={codeVariables}
        codeHeaders={codeHeaders}
        setCodeVariables={setCodeVariables}
        setCodeHeaders={setCodeHeaders}
      />
    </div>
  );
}

export default RequestView;
