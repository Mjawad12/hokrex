import { headers } from "next/headers";
import ProductSchema from "../Schemas/ProductSchema";
import ConnectDb from "../dbConnect";
import authorize from "../Middleware/Authorize";
import UserSchema from "../Schemas/UserSchema";

export async function POST(req) {
  try {
    await ConnectDb();
    const headersList = headers();
    const body = await req.json();
    if (headerList.get("origin") === process.env.NEXT_PUBLIC_URL) {
      const users = await UserSchema.find({});
    } else {
      return Response.json(
        { success: false, err: "Not Authorized" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 },
    );
  }
}
