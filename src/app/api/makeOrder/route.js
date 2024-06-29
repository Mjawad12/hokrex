import UserSchema from "../Schemas/UserSchema";
import ConnectDb from "../dbConnect";
import { headers } from "next/headers";
import authorize from "../Middleware/Authorize";
import { v4 } from "uuid";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const headersList = headers();
  const id = await authorize(headersList.get("authToken"));
  if (!id) {
    return Response.json({
      success: false,
      msg: "Not authorized!",
    });
  }
  try {
    for (let i = 0; i < body.cartState.items.length; i++) {
      let it = body.cartState.items[i];
      let date = new Date().toDateString();
      let order = {
        status: "Active Orders",
        active: true,
        unpaidAmount: it.price,
        product: it.id,
        deliveryDate: it.date,
        orderFiles: [...(it.files || [])],
        email: body.email,
        phone: body.phone,
        county: body.county,
        firstName: body.firstName,
        fullName: body.fullName,
        Address: body.Address,
        payType: body.payType,
        method: body.method,
        productMaterial: it.material,
        productInstruction: it.instruction,
        productSizes: it.sizes,
        orderID: v4(),
        orderDate: date.slice(date.indexOf(" ")),
      };
      console.log(order);

      await UserSchema.updateOne({ _id: id }, { $push: { orders: order } });
    }

    return Response.json({
      success: true,
      msg: "Order has been successfully made.",
    });
  } catch (err) {
    return Response.json({
      success: false,
      msg: err.message,
    });
  }
}
