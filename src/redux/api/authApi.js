import { BASE_URL } from "../../utils/constants/constants.js";

export function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(res.status);
  }
  return res.json();
}

export const loginApi = async ({ login, password }) => {
  const response = await fetch(`${BASE_URL}/v3/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, password }),
  });
  return getResponseData(response);
};
