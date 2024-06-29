import { headers } from "next/headers";
import ConnectDb from "../dbConnect";
import authorize from "../Middleware/Authorize";
import UserSchema from "../Schemas/UserSchema";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const headerList = headers();
  if (headerList.get("origin") === process.env.NEXT_PUBLIC_URL) {
    const id = await authorize(headerList.get("authToken"));
    if (!id) {
      return Response.json({ success: false, msg: "Not Authorized" });
    }
    const Admin = await UserSchema.findOne({ _id: id });
    if (Admin.name === "jamsheed-9-123") {
      await UserSchema.updateOne(
        {
          "orders.orderID": body.orderID,
        },
        {
          $set: {
            "orders.$.status": body.status,
            "orders.$.trackingID": body.trackingid,
            "orders.$.deliveryCharges": body.deliveryCharges,
            "orders.$.active": body.active,
            "orders.$.deliveryDate": body.deliveryDate,
          },
        },
      );
      return Response.json({ success: true, msg: "Successfully Updated!" });
    }
  }
  return Response.json({ success: false, msg: "Not Authorized" });
}
