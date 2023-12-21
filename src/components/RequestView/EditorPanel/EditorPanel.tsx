import { Dispatch, MouseEvent, ReactElement, SetStateAction, useState } from "react";
import { Button, Editor } from "../..";

import clsx from "clsx";
import styles from "./EditorPanel.module.scss";

export interface EditorPanelProps {
  codeVariables: string;
  codeHeaders: string;
  setCodeVariables: Dispatch<SetStateAction<string>>;
  setCodeHeaders: Dispatch<SetStateAction<string>>;
}

function EditorPanel(props: EditorPanelProps): ReactElement {
  const { codeVariables, codeHeaders, setCodeVariables, setCodeHeaders } = props;

  const [panelOpened, setPanelOpened] = useState(false);
  const [variablesActive, setVariablesActive] = useState(false);
  const [headersActive, setHeadersActive] = useState(false);

  function openTab(e: MouseEvent<HTMLButtonElement>): void {
    if (!(e.target instanceof HTMLButtonElement)) return;

    if (!panelOpened) {
      setPanelOpened(true);
    }

    if (e.target.id === "variables") {
      setVariablesActive(true);
      setHeadersActive(false);
    }

    if (e.target.id === "headers") {
      setHeadersActive(true);
      setVariablesActive(false);
    }
  }

  function togglePanel(): void {
    if (panelOpened) {
      setPanelOpened(false);
      setVariablesActive(false);
      setHeadersActive(false);
      return;
    }

    setPanelOpened(true);
    setVariablesActive(true);
    setHeadersActive(false);
  }

  return (
    <div className={styles.panel}>
      {/*Header*/}
      <div className={styles.panel__header}>
        <div className={styles.panel__buttons}>
          <Button
            name="Variables"
            className={clsx(styles.button, panelOpened && variablesActive && styles.active)}
            id="variables"
            onClick={openTab}
          />
          <Button
            name="Headers"
            className={clsx(styles.button, panelOpened && headersActive && styles.active)}
            id="headers"
            onClick={openTab}
          />
        </div>
        <Button
          name={panelOpened ? "Hide" : "Show"}
          onClick={togglePanel}
          className={clsx(styles.button, styles.button__toggle)}
        />
      </div>
      {/*Editors*/}
      <div className={clsx(styles.panel__editors, panelOpened && styles.panel__editors_open)}>
        {variablesActive && (
          <Editor
            mode="edit"
            code={codeVariables}
            setCode={setCodeVariables}
            placeholder="Request variables..."
          />
        )}
        {headersActive && (
          <Editor
            mode="edit"
            code={codeHeaders}
            setCode={setCodeHeaders}
            placeholder="Request headers..."
          />
        )}
      </div>
    </div>
  );
}

export default EditorPanel;
