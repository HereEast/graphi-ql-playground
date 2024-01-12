import { ReactElement, useEffect, useState } from "react";
import { IntrospectionSchema } from "graphql";
import clsx from "clsx";

import { useAppContext, useLocale } from "../../hooks";
import { fetchSchema } from "../../utils";
import { QUERY_ERRORS } from "../../constants";
import { ErrorMessage, QueryList, TypeList } from "..";

import styles from "./Documentation.module.scss";

interface DocumentationProps {
  docOpened: boolean;
}

function Documentation({ docOpened }: DocumentationProps): ReactElement {
  const { apiEndpoint } = useAppContext();
  const { loader } = useLocale();

  const [schema, setSchema] = useState<IntrospectionSchema | null>(null);
  const [schemaLoading, setSchemaLoading] = useState(false);
  const [schemaError, setSchemaError] = useState("");

  useEffect(() => {
    async function getSchema(): Promise<void> {
      if (!docOpened) return;

      setSchemaLoading(true);
      setSchemaError("");

      try {
        const fetchedSchema = await fetchSchema(apiEndpoint);
        setSchema(fetchedSchema);
      } catch (err) {
        if (err instanceof Error) {
          setSchemaError(QUERY_ERRORS.schema);
        }
      } finally {
        setSchemaLoading(false);
      }
    }

    getSchema();
  }, [docOpened, apiEndpoint]);

  return (
    <div className={clsx(styles.doc, { [styles.doc__open]: docOpened })}>
      {schemaLoading && <span className={styles.doc__loading}>{loader}</span>}
      {schemaError && <ErrorMessage message={schemaError} className={styles.doc__error} />}
      {!schemaLoading && !schemaError && (
        <>
          <QueryList schema={schema} />
          <TypeList schema={schema} />
        </>
      )}
    </div>
  );
}

export default Documentation;
