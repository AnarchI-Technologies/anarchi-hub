import { MongoClient } from 'mongodb';

let cachedClient = globalThis._mongoClient || null;

export function getClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return null;
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    globalThis._mongoClient = cachedClient;
  }

  return cachedClient;
}

const mongo = { getClient };

export default mongo;
