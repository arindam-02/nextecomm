import { connectDb } from "@/lib/databaseConnection";
import { NextResponse } from "next/server";

export async function GET() {
  let conn = await connectDb();

  console.log(conn);

  return NextResponse.json({
    success: true,
    message: "conneced",
  });
}
