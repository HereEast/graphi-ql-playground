import { getIntrospectionQuery, IntrospectionSchema } from "graphql/utilities";

export async function fetchSchema(url: string): Promise<IntrospectionSchema | null> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: getIntrospectionQuery() }),
    });

    const { data } = await response.json();

    return data.__schema;
  } catch (err) {
    return null;
  }
}
