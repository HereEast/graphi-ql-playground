import { getIntrospectionQuery, IntrospectionSchema } from "graphql/utilities";

export async function fetchSchema(url: string): Promise<IntrospectionSchema | null> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: getIntrospectionQuery() }),
    });

    const res = await response.json();
    // throw error

    // Console
    console.log(res.data);

    return res.data.__schema;
  } catch (error) {
    return null;
  }
}
