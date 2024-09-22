// utils/indexedDB.ts
import { openDB } from "idb";

const DB_NAME = "offlineRequestsDB";
const STORE_NAME = "requests";

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
    },
  });
};

export const saveRequest = async (request: any) => {
  const db = await initDB();
  await db.put(STORE_NAME, request);
};

export const getRequests = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};

export const clearRequests = async () => {
  const db = await initDB();
  return await db.clear(STORE_NAME);
};
