import { handleResponse, handleError } from "./utils";

const baseUrl = "https://umukinnyi.herokuapp.com";

export function signup(user) {
  return fetch(`${baseUrl}/api/signup`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}
