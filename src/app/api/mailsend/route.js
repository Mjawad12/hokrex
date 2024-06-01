import ConnectDb from "../dbConnect";
import { Otpcreator, SendMail } from "../sendmail";
import UserSchema from "../Schemas/UserSchema";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const user = await UserSchema.findOne({ email: body.email });
  if (!user) {
    return Response.json(
      { success: false, error: "User doesn't exsist with this email." },
      { status: 404 },
    );
  }

  const otp = Otpcreator();
  await SendMail(user.email, otp);
  console.log(otp);
  await UserSchema.updateOne({ _id: user._id }, { otp: otp });
  return Response.json({ success: true, otp: true }, { status: 200 });
}
