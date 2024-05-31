import jwt from "jsonwebtoken";
import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";
import bcrypt from "bcrypt";
import { Otpcreator, SendMail } from "../sendmail";

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

    if (user.verification) {
      const authToken = jwt.sign(user._id.toString(), process.env.JWT_STRING);
      return Response.json({ success: true, authToken });
    } else {
      const otp = Otpcreator();
      await OTP_Seeter(otp, user.email);
      await SendMail(user.email, otp);
      return Response.json(
        { success: true, otp: true, email: user.email },
        { status: 200 },
      );
    }
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

const OTP_Seeter = async (otp, email) => {
  const prevOTP = await UserSchema.updateOne({ email: email }, { otp: otp });
};
