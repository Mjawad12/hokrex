import { headers } from "next/headers";
import ConnectDb from "../dbConnect";
import authorize from "../Middleware/Authorize";
import UserSchema from "../Schemas/UserSchema";
import bcrypt, { genSalt } from "bcrypt";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const headersList = headers();
  try {
    const id = await authorize(headersList.get("authToken"));
    if (!id) {
      return Response.json({ error: "Not Authorized" }, { status: 401 });
    }
    const user = await UserSchema.findOne({ _id: id });

    if (!user.verification) {
      const passwordChecker = await bcrypt.compare(
        body.currentPassword,
        user.password,
      );
      if (!passwordChecker) {
        return Response.json({ success: false, error: "Wrong Password" });
      } else {
        await PasswordStore(body.newPassword);
        return Response.json({ success: true });
      }
    } else {
      await PasswordStore(body.newPassword);
      return Response.json({ success: true });
    }
  } catch (err) {
    return Response.json({ success: false, error: err });
  }
}

const PasswordStore = async (password) => {
  const gensalts = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, gensalts);
  await UserSchema.updateOne(
    {
      _id: id,
    },
    { password: hashedPassword },
  );
};
