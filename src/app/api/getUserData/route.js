import { headers } from "next/headers";
import authorize from "../Middleware/Authorize";
import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";
import ProductSchema from "../Schemas/ProductSchema";

export async function POST() {
  await ConnectDb();
  const headersList = headers();

  console.log(headersList.get("authToken"));
  const id = await authorize(headersList.get("authToken"));
  if (!id) {
    return Response.json({ error: "Not Authorized" }, { status: 401 });
  }
  let data = await UserSchema.findOne({ _id: id }).select("-password");
  for (let i = 0; i < data.orders.length; i++) {
    const it = data.orders[i];
    const product = await ProductSchema.findOne({ _id: it.product });
    data.orders[i].product = product;
  }

  return Response.json({ success: true, userdata: data });
}
