export const LANGS = {
  EN: "en",
  RU: "ru",
};

export const DEFAULT_LANG = "en";

export const READ_MODE = "read";
export const EDIT_MODE = "edit";

export const DEFAULT_API = "https://rickandmortyapi.com/graphql";

export const LINK_SCHOOL = "https://rs.school/";
export const LINK_COURSE = "https://rs.school/react/";

export const PLACEHOLDER_REQ = "GraphQL request...";
export const PLACEHOLDER_RES = "JSON response...";
export const PLACEHOLDER_API = "https://rickandmortyapi.com/graphql";

export const QUERY_ERRORS = {
  request: "Ooops!..Error happened 🙁🙁🙁\n\nTry to fix it: \n",
  variables:
    "Ooops!..Error happened 🙁🙁🙁\n\nCheck that your variables\nis a valid JSON and try again.",
  headers:
    "Ooops!..Error happened 🙁🙁🙁\n\nCheck that your headers\nis a valid JSON and try again.",
  api: "Ooops!..Error happened 🙁🙁🙁 \n\nCheck if the entered API endpoint is valid\nand supports GraphQL requests.",
  schema:
    "Failed to fetch the schema 😔😔😔 \n\nCheck if the entered API endpoint is valid and supports GraphQL requests.",
};
