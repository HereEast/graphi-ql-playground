import { ReactElement, ChangeEvent, Dispatch, SetStateAction, useRef, UIEvent } from "react";
import clsx from "clsx";

import { EDIT_MODE, READ_MODE } from "../../constants";
import { LinesNumber } from "..";

import styles from "./Editor.module.scss";

interface EditorProps {
  mode?: "edit" | "read";
  code: string;
  setCode?: Dispatch<SetStateAction<string>>;
  className: string;
  placeholder?: string;
}

function Editor({
  mode = EDIT_MODE,
  code,
  setCode,
  className,
  placeholder = "Type here...",
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
    <div className={clsx(styles.editor, styles[className])}>
      <div className={styles.editor__container}>
        <LinesNumber
          code={code}
          linesNumberRef={linesNumberRef}
          handleScroll={handleScroll}
          className={className}
        />

        <textarea
          ref={textAreaRef}
          value={code}
          className={clsx(styles.editor__textArea, styles[`${className}__textArea`])}
          placeholder={placeholder}
          disabled={mode === READ_MODE}
          onChange={handleInput}
          onScroll={handleScroll}
        />
      </div>
    </div>
  );
}

export default Editor;
