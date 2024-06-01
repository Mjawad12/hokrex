import ConnectDb from "../dbConnect";
import UserSchema from "../Schemas/UserSchema";

export async function POST(req) {
  await ConnectDb();

  const body = req.json();
  const genSalts = await bcrypt.genSalt(10);
  const hashedPAssword = await bcrypt.hash(body.password, genSalts);
  const user = UserSchema.updateOne(
    { email: body.email },
    { password: hashedPAssword },
  );
  if (!user) {
    return Response.json({
      success: false,
      error: "User already exists with this email.",
    });
  }

  return Response.json({ success: true }, { status: 200 });
}
