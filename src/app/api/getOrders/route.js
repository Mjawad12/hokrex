import { headers } from "next/headers";
import ProductSchema from "../Schemas/ProductSchema";
import ConnectDb from "../dbConnect";
import authorize from "../Middleware/Authorize";
import UserSchema from "../Schemas/UserSchema";

export async function POST() {
  try {
    await ConnectDb();
    const headersList = headers();
    if (headersList.get("origin") === process.env.NEXT_PUBLIC_URL) {
      const id = await authorize(headersList.get("authToken"));
      if (!id) {
        return Response.json({
          success: false,
          msg: "Not Authorized1",
          id: id,
        });
      }
      const Admin = await UserSchema.findOne({ _id: id });
      if (Admin.name === "jamsheed-9-123") {
        let users = await UserSchema.find({});
        let orders = [];
        for (let i = 0; i < users.length; i++) {
          for (let k = 0; k < users[i].orders.length; k++) {
            let product = await ProductSchema.findOne({
              _id: users[i].orders[k].product,
            });
            users[i].orders[k].product = product;
          }
          if (users[i].orders.length > 0) {
            orders = [...orders, ...users[i].orders];
          }
        }
        return Response.json({
          success: true,
          orders: orders,
          authtoken: headersList.get("authToken"),
        });
      }
    }
    return Response.json(
      { success: false, err: "Not Authorized2" },
      { status: 500 },
    );
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
