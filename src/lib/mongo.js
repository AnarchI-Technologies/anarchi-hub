import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) {
  // No-op when not provided
  export default null;
}

let cachedClient = global._mongoClient;
if (!cachedClient) {
  cachedClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  global._mongoClient = cachedClient;
}

export function getClient() {
  return cachedClient;
}
