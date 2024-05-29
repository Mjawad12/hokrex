import { headers } from "next/headers";
import authorize from "../Middleware/Authorize";
import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";

export async function POST() {
  await ConnectDb();
  const headersList = headers();

  console.log(headersList.get("authToken"));
  const id = await authorize(headersList.get("authToken"));
  if (!id) {
    return Response.json({ error: "Not Authorized" }, { status: 401 });
  }
  const data = await UserSchema.findOne({ _id: id }).select("-password");

  return Response.json({ success: true, userdata: data });
}
