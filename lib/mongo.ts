import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error("MONGODB_URI is not set. Add it in Project Settings → Environment Variables.")
}

const dbName = process.env.MONGODB_DB || "portfolio"

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (global._mongoClientPromise) {
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri)
  global._mongoClientPromise = client.connect()
  clientPromise = global._mongoClientPromise
}

export async function getDb() {
  const conn = await clientPromise
  return conn.db(dbName)
}
