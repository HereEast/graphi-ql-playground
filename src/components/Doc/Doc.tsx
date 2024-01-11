import { ReactElement, useEffect, useState } from "react";
import { IntrospectionSchema } from "graphql";
import clsx from "clsx";

import { useAppContext } from "../../hooks";
import { fetchSchema } from "../../utils";
import { QUERY_ERRORS } from "../../constants";
import { ErrorMessage, QueryDoc, TypesDoc } from "..";

import styles from "./Doc.module.scss";

interface IDoc {
  docOpened: boolean;
}

function Doc({ docOpened }: IDoc): ReactElement {
  const { apiEndpoint } = useAppContext();

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
    <div className={clsx(styles.doc, { [styles.doc__opened]: docOpened })}>
      {schemaLoading && <span className={styles.doc__loading}>Loading...</span>}
      {schemaError && <ErrorMessage message={schemaError} className={styles.doc__error} />}
      {!schemaLoading && !schemaError && (
        <>
          <QueryDoc schema={schema} />
          <TypesDoc schema={schema} />
        </>
      )}
    </div>
  );
}

export default Doc;
