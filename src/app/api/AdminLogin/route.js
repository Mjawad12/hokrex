import jwt from "jsonwebtoken";
import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";
import bcrypt from "bcrypt";
export async function POST(req) {
  try {
    await ConnectDb();
    const body = await req.json();
    const adminUser = await UserSchema.findOne({ name: body.name });
    if (!adminUser) {
      return Response.json(
        { success: false, msg: "Inavlid Username!" },
        { status: 400 },
      );
    } else {
      const passwordChecker = await bcrypt.compare(
        body.password,
        adminUser.password,
      );
      if (!passwordChecker) {
        return Response.json({ success: false, msg: "Wrong Password!" });
      }
      const authToken = jwt.sign(
        adminUser._id.toString(),
        process.env.JWT_STRING,
      );
      return Response.json({
        success: true,
        authToken,
        msg: "Successfully loggedin!",
      });
    }
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 },
    );
  }
}
