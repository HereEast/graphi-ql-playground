import { ReactElement, ChangeEvent, Dispatch, SetStateAction, useRef, UIEvent } from "react";
import { LinesNumber } from "..";

import clsx from "clsx";
import styles from "./Editor.module.scss";

export interface EditorProps {
  mode?: "edit" | "read";
  code: string;
  setCode?: Dispatch<SetStateAction<string>>;
  className?: string;
  placeholder?: string;
}

function Editor({
  mode,
  code,
  setCode,
  className = "",
  placeholder = "Placeholder...",
}: EditorProps): ReactElement {
  const linesNumberRef = useRef<HTMLUListElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleInput(e: ChangeEvent<HTMLTextAreaElement>): void {
    if (setCode) {
      setCode(e.target.value);
    }
  }

  function handleScroll(e: UIEvent<HTMLUListElement | HTMLTextAreaElement>): void {
    if (!(e.target instanceof HTMLElement)) return;

    if (linesNumberRef.current && textAreaRef.current) {
      linesNumberRef.current.scrollTop = e.target?.scrollTop;
      textAreaRef.current.scrollTop = e.target?.scrollTop;
    }
  }

  return (
    <div className={clsx(styles.editor, className && styles[className])}>
      <div className={styles.editor__container}>
        <LinesNumber
          mode={mode}
          code={code}
          linesNumberRef={linesNumberRef}
          handleScroll={handleScroll}
        />

        <textarea
          ref={textAreaRef}
          value={code}
          className={styles.editor__textArea}
          placeholder={placeholder}
          disabled={mode === "read"}
          onChange={handleInput}
          onScroll={handleScroll}
        />
      </div>
    </div>
  );
}

export default Editor;
