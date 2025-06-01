import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req) {
  const { db } = await connectToDatabase();

  const { senderEmail, chatboxId, text } = await req.json();

  const message = {
    senderEmail,
    text,
    timestamp: new Date(),
  };

  const result = await db.collection("chatboxes").findOneAndUpdate(
    { _id: new ObjectId(chatboxId) },
    { $push: { messages: message } },
    { returnDocument: "after" }
  );

  return NextResponse.json({ message });
}

import { ObjectId } from "mongodb";