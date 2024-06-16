import { headers } from "next/headers";
import authorize from "../Middleware/Authorize";
import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";

export async function POST(req) {
  await ConnectDb();
  const headersList = headers();
  const body = await req.json();
  const id = await authorize(headersList.get("authToken"));
  if (!id) {
    return Response.json(
      { success: false, error: "Not Authorized" },
      { status: 401 },
    );
  }
  await UserSchema.updateOne({ _id: id }, { $push: { wishlist: body.wish } });
  return Response.json({ success: true }, { status: 200 });
}

export async function DELETE(req) {
  await ConnectDb();
  const headersList = headers();
  const body = await req.json();
  const id = await authorize(headersList.get("authToken"));
  if (!id) {
    return Response.json(
      { success: false, error: "Not Authorized" },
      { status: 401 },
    );
  }
  await UserSchema.updateOne(
    { _id: id },
    { $pull: { wishlist: { slug: body.slug } } },
  );
  return Response.json({ success: true });
}
