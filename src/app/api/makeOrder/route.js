import { order } from "@/Consonats";
import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";
import { headers } from "next/headers";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const headersList = headers();
  const id = await authorize(headersList.get("authToken"));
  await UserSchema.updateOne({ _id: id }, { $push: { orders: body.order } });

  return Response.json({
    success: true,
    msg: "Order has been successfully made.",
  });
}
