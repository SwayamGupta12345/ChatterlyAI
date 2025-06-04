// /api/get-messages.js (or .ts)
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  const { db } = await connectToDatabase();
  const { messageIds } = await req.json();

  const objectIds = messageIds.map(id => new ObjectId(id));

  const messages = await db.collection("frnd_msg")
    .find({ _id: { $in: objectIds } })
    .sort({ timestamp: 1 }) // Optional: sort by time
    .toArray();

  return Response.json({ messages });
}
