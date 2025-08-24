import { connectDb } from "@/lib/databaseConnection";
import { zSchema } from "@/lib/zodSchema";

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
  } catch (error) {}
}
