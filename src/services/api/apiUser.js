import { apiClient } from "./index";

function unwrap(response) {
  if (response.data?.success === false) {
    throw new Error(response.data.message || "Request failed");
  }
  return response.data?.data ?? response.data;
}

export async function getUsers(params = {}) {
  return unwrap(await apiClient.get("/users", { params }));
}

export async function getUser(id) {
  return unwrap(await apiClient.get(`/users/${encodeURIComponent(id)}`));
}

export async function createUser(payload) {
  return unwrap(await apiClient.post("/users", payload));
}

export async function updateUser(id, payload) {
  return unwrap(
    await apiClient.put(`/users/${encodeURIComponent(id)}`, payload),
  );
}

export async function deleteUser(id) {
  return unwrap(await apiClient.delete(`/users/${encodeURIComponent(id)}`));
}
