import { getIntrospectionQuery, IntrospectionSchema } from "graphql/utilities";

export async function fetchSchema(url: string): Promise<IntrospectionSchema> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  });

  if (!response) {
    throw new Error("Failed to fetch schema");
  }

  const { data } = await response.json();

  return data.__schema;
}
