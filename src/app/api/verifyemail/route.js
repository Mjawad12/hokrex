import { headers } from "next/headers";
import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";
import authorize from "../Middleware/Authorize";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const headerlist = headers();
  const id = await authorize(headerlist.get("authToken"));
  const user = await UserSchema.findOne({ _id: id });

  if (user) {
    if (body.otp == user.otp) {
      await UserSchema.updateOne(
        { _id: id },
        { verification: true, otp: null },
      );
    } else {
      return Response.json({ success: false, error: "Wrong Otp" });
    }
  } else {
    return Response.json({ success: false, error: "Not Authorized" });
  }

  return Response.json({ success: true });
}
