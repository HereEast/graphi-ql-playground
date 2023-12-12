import { ReactElement, useState, ChangeEvent } from "react";
import { Button } from "..";

import styles from "./Editor.module.scss";

export interface EditorProps {
  mode?: "edit" | "read";
}

function Editor({ mode }: EditorProps): ReactElement {
  if (mode === "edit") console.log(mode);

  const [code, setCode] = useState("");

  function handleInput(e: ChangeEvent<HTMLTextAreaElement>): void {
    setCode(e.target.value);
  }

  return (
    <div className={styles.editor}>
      <div className={styles.editor__container}>
        <div className={styles.editor__main}>
          {/* Lines */}
          <ul className={styles.editor__linesCount}>
            {code.split("\n").map((line, index) => (
              <li key={`${line}-${index}`}>
                <span>{index + 1}</span>
              </li>
            ))}
          </ul>
          <textarea onChange={handleInput} className={styles.editor__textArea} value={code} />
          {/* Buttons */}
          <div className={styles.editor__buttons}>
            <Button className={styles.editor__buttons_request}>
              <span>R</span>
            </Button>
            <Button className={styles.editor__buttons_prettify}>
              <span>P</span>
            </Button>
          </div>
        </div>
        {/* Variables, Headers */}
        <div className={styles.editor__options}></div>
      </div>
    </div>
  );
}

export default Editor;
