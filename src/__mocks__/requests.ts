export const queryCodeMock = `
query GetCharacters($page: Int!, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    results {
      id
      name
      status
    }
  }
}`;

export const prettifiedCodeMock = `query {
}`;

export const jsonMock = `{
"page": 2}`;

export const prettifiedJsonMock = `{
  "page": 2
}`;

export const headersMock = `{
"headers": "app"}`;

export const prettifiedHeadersMock = `{
  "headers": "app"
}`;
