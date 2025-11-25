export async function makeRequest(
  URL: string,
  query: string,
  variablesCode: string,
  headersCode: string,
): Promise<Response> {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(headersCode ? JSON.parse(headersCode) : {}),
    },
    body: JSON.stringify({
      query: query,
      variables: variablesCode ? JSON.parse(variablesCode) : {},
    }),
  });

  return res;
}
