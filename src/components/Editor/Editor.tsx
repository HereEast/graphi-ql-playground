import {
  ReactElement,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  UIEvent,
  KeyboardEvent,
} from "react";

import clsx from "clsx";
import styles from "./Editor.module.scss";

export interface EditorProps {
  mode?: "edit" | "read";
  code: string;
  setCode?: Dispatch<SetStateAction<string>>;
}

function Editor({ mode, code, setCode }: EditorProps): ReactElement {
  const linesCountRef = useRef<HTMLUListElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleInput(e: ChangeEvent<HTMLTextAreaElement>): void {
    if (setCode) {
      setCode(e.target.value);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>): void {
    if (!(e.target instanceof HTMLTextAreaElement)) return;

    console.log(e.key);
    console.log("Enter", e.key === "Enter");
  }

  function handleScroll(e: UIEvent<HTMLUListElement | HTMLTextAreaElement>): void {
    if (!(e.target instanceof HTMLUListElement) || !(e.target instanceof HTMLTextAreaElement))
      return;

    if (linesCountRef.current) {
      linesCountRef.current.scrollTop = e.target?.scrollTop;
    }

    if (textAreaRef.current) {
      textAreaRef.current.scrollTop = e.target?.scrollTop;
    }
  }

  return (
    <div className={clsx(styles.editor, mode === "read" && styles.editor__response)}>
      <div className={styles.editor__container}>
        <div className={styles.editor__main}>
          {/* Lines */}
          <ul className={styles.editor__linesCount} ref={linesCountRef} onScroll={handleScroll}>
            {code.split("\n").map((line, index) => (
              <li key={`${line}-${index}`} className={styles.editor__linesCount_item}>
                <span>{index + 1}</span>
              </li>
            ))}
          </ul>
          <textarea
            onKeyDown={handleKeyDown}
            onChange={handleInput}
            className={styles.editor__textArea}
            value={code}
            onScroll={handleScroll}
            ref={textAreaRef}
            disabled={mode === "read"}
            placeholder={mode === "read" ? "Place for response..." : ""}
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;
