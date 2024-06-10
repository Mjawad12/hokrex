import { headers } from "next/headers";
import ConnectDb from "../dbConnect";
import authorize from "../Middleware/Authorize";
import UserSchema from "../Schemas/UserSchema";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const headersList = headers();
  try {
    const id = await authorize(headersList.get("authToken"));
    if (!id) {
      return Response.json({ error: "Not Authorized" }, { status: 401 });
    }
    await UserSchema.updateOne(
      {
        _id: id,
      },
      { email: body.email, verification: false },
    );
    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false, error: err });
  }
}
