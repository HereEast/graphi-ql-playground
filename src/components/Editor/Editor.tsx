import { ReactElement, ChangeEvent, Dispatch, SetStateAction, useRef, UIEvent } from "react";

import clsx from "clsx";
import styles from "./Editor.module.scss";

export interface EditorProps {
  mode?: "edit" | "read";
  placeholder?: string;
  code: string;
  setCode?: Dispatch<SetStateAction<string>>;
  className?: string;
}

function Editor({ mode, code, setCode, placeholder, className }: EditorProps): ReactElement {
  const linesCountRef = useRef<HTMLUListElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleInput(e: ChangeEvent<HTMLTextAreaElement>): void {
    if (setCode) {
      setCode(e.target.value);
    }
  }

  function handleScroll(e: UIEvent<HTMLUListElement | HTMLTextAreaElement>): void {
    if (!(e.target instanceof HTMLElement)) return;

    if (linesCountRef.current && textAreaRef.current) {
      linesCountRef.current.scrollTop = e.target?.scrollTop;
      textAreaRef.current.scrollTop = e.target?.scrollTop;
    }
  }

  return (
    <div className={clsx(styles.editor, className && styles[className])}>
      <div className={styles.editor__container}>
        {/* Lines */}
        <ul className={styles.editor__linesCount} ref={linesCountRef} onScroll={handleScroll}>
          {code.split("\n").map((line, index) => (
            <li key={`${line}-${index}`} className={styles.editor__linesCount_item}>
              <span>{index + 1}</span>
            </li>
          ))}
        </ul>
        {/* Text Area */}
        <textarea
          onChange={handleInput}
          onScroll={handleScroll}
          className={styles.editor__textArea}
          value={code}
          ref={textAreaRef}
          disabled={mode === "read"}
          placeholder={placeholder || "Placeholder..."}
        />
      </div>
    </div>
  );
}

export default Editor;
