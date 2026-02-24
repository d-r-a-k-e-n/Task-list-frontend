import { apiClient } from "./client";

const TASKS_BASE = "/tasks";

export const createTask = async (title) => {
  const { data } = await apiClient.post(TASKS_BASE, { title });
  return data;
};

export const getTask = async () => {
  const { data } = await apiClient.get(TASKS_BASE);
  return data;
};

export const updateTask = async (id) => {
  const { data } = await apiClient.put(`${TASKS_BASE}/${id}`);
  return data;
};

export const deleteTask = async (id) => {
  await apiClient.delete(`${TASKS_BASE}/${id}`);
};
