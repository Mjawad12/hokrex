import { headers } from "next/headers";
import ConnectDb from "../dbConnect";
import authorize from "../Middleware/Authorize";
import { Otpcreator, SendMail } from "../sendmail";
import UserSchema from "../Schemas/UserSchema";

export async function POST(req) {
  await ConnectDb();
  const headerList = headers();
  const id = await authorize(headerList.get("authToken"));
  console.log(id);
  if (!id) {
    return Response.json(
      { success: false, error: "Not Authorized" },
      { status: 401 },
    );
  }
  const user = await UserSchema.findOne({ _id: id });

  if (!user) {
    return Response.json(
      { success: false, error: "Not Authorized" },
      { status: 401 },
    );
  }
  const otp = Otpcreator();
  await SendMail(user.email, otp);
  await UserSchema.updateOne({ _id: id }, { otp: otp });
  return Response.json({ success: true }, { status: 200 });
}
