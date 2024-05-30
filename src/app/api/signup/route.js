import Jwt from "jsonwebtoken";
import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";
import bcrypt from "bcrypt";
import { Otpcreator, SendMail } from "../sendmail";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();

  try {
    const genSalts = await bcrypt.genSalt(10);
    const hashedPAssword = await bcrypt.hash(body.password, genSalts);
    const checker = await checkExsistingUser(body);
    if (checker) {
      return Response.json({
        success: false,
        error: "User already exists with this email.",
      });
    }

    const user = await UserSchema.create({
      name: body.name,
      password: hashedPAssword,
      phone: body.phone,
      email: body.email,
    });

    if (user.verification) {
      const authToken = await Jwt.sign(
        user._id.toString(),
        process.env.JWT_STRING,
      );
      return Response.json(
        { success: true, authToken: authToken },
        { status: 200 },
      );
    } else {
      const otp = Otpcreator();
      await OTP_Seeter(otp, user.email);
      await SendMail(user.email, otp);
      const authToken = await Jwt.sign(
        user._id.toString(),
        process.env.JWT_STRING,
      );
      return Response.json(
        { success: true, otp: true, email: user.email, authToken },
        { status: 200 },
      );
    }
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

const checkExsistingUser = async (body) => {
  const user = await UserSchema.find({ email: body.email });
  console.log(user);
  return user.length > 0 ? true : false;
};

const OTP_Seeter = async (otp, email) => {
  const prevOTP = await UserSchema.updateOne({ email: email }, { otp: otp });
  console.log(prevOTP);
};
