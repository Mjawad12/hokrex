import jwt from "jsonwebtoken";
import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";
import bcrypt from "bcrypt";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  try {
    const user = await UserSchema.findOne({ email: body.email });
    if (!user) {
      return Response.json({
        success: false,
        error: "User doesn't exsist with this email.",
      });
    }
    const passwordChecker = await bcrypt.compare(body.password, user.password);
    if (!passwordChecker) {
      return Response.json({ success: false, error: "Wrong Password" });
    }

    const authToken = jwt.sign(user._id.toString(), process.env.JWT_STRING);

    return Response.json({ success: true, authToken });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
