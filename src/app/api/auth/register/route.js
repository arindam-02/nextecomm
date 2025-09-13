import { connectDb } from "@/lib/databaseConnection";
import { zSchema } from "@/lib/zodSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDb();
    // valiation Schema
    const validationSchema = zSchema.pick({
      name: true,
      email: true,
      password: true,
    });

    const payload = await request.json();

    const validatedData = validationSchema.safeParse(payload);

    if (!validatedData.success) {
      return NextResponse.json();
    }
  } catch (error) {}
}
