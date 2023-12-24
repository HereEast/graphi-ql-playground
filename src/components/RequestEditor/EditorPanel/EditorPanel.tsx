import { Dispatch, MouseEvent, ReactElement, SetStateAction, useState } from "react";
import { Button, Editor } from "../..";

import clsx from "clsx";
import styles from "./EditorPanel.module.scss";

export interface EditorPanelProps {
  variablesCode: string;
  headersCode: string;
  setVariablesCode: Dispatch<SetStateAction<string>>;
  setHeadersCode: Dispatch<SetStateAction<string>>;
}

function EditorPanel(props: EditorPanelProps): ReactElement {
  const { variablesCode, headersCode, setVariablesCode, setHeadersCode } = props;

  const [panelOpened, setPanelOpened] = useState(false);
  const [variablesActive, setVariablesActive] = useState(false);
  const [headersActive, setHeadersActive] = useState(false);

  function openTab(e: MouseEvent<HTMLButtonElement>): void {
    if (!(e.target instanceof HTMLButtonElement)) return;

    setPanelOpened(true);

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
    setPanelOpened(!panelOpened);
    setHeadersActive(false);

    if (panelOpened) {
      setVariablesActive(false);
    } else {
      setVariablesActive(true);
    }
  }

  return (
    <div className={styles.panel}>
      <div className={styles.panel__header}>
        <Button
          name="Variables"
          className={clsx(styles.button, {
            [styles.active]: panelOpened && variablesActive,
          })}
          id="variables"
          onClick={openTab}
        />
        <Button
          name="Headers"
          className={clsx(styles.button, {
            [styles.active]: panelOpened && headersActive,
          })}
          id="headers"
          onClick={openTab}
        />
        <Button
          onClick={togglePanel}
          className={clsx(styles.button, styles.button__toggle, {
            [styles.button__toggle_opened]: panelOpened,
          })}
        />
      </div>

      <div
        className={clsx(styles.panel__editors, {
          [styles.panel__editors_open]: panelOpened,
        })}
      >
        {variablesActive && (
          <Editor
            mode="edit"
            code={variablesCode}
            setCode={setVariablesCode}
            placeholder="Request variables..."
          />
        )}
        {headersActive && (
          <Editor
            mode="edit"
            code={headersCode}
            setCode={setHeadersCode}
            placeholder="Request headers..."
          />
        )}
      </div>
    </div>
  );
}

export default EditorPanel;
