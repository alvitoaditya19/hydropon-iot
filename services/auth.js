import callAPI from "../config";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setLogin(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAp({
    url,
    method: 'POST',
    data,
  });
}