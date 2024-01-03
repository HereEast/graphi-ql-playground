export async function makeRequest(URL: string, query: string): Promise<Response> {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  });

  return res;
}
