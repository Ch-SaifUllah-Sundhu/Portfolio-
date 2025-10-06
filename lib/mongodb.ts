// A minimal, safe MongoDB client with connection caching for server use

import { MongoClient, type Db } from "mongodb"

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

// Connection URI and DB name must be configured in Project Settings env vars.
// Required: MONGODB_URI, MONGODB_DB
const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

if (!uri) {
  throw new Error("Missing MONGODB_URI. Add it in Project Settings → Environment Variables.")
}
if (!dbName) {
  throw new Error("Missing MONGODB_DB. Add it in Project Settings → Environment Variables.")
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise
  return client.db(dbName)
}
