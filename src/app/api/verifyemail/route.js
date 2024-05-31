import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();

  const user = await UserSchema.findOne({ email: body.email, otp: body.otp });

  if (!user) {
    return Response.json({ success: false, error: "Wrong Otp" });
  }
  await UserSchema.updateOne(
    { email: body.email, otp: body.otp },
    { verification: true, otp: null },
  );
  const authToken = jwt.sign(user._id.toString(), process.env.JWT_STRING);
  return Response.json({ success: true, authToken });
}
