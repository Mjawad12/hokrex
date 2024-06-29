import { headers } from "next/headers";
import ProductSchema from "../Schemas/ProductSchema";
import ConnectDb from "../dbConnect";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const headersList = headers();
  try {
    // if (headersList.get("origin") === process.env.NEXT_PUBLIC_URL) {
    // let product;
    // if (body.productId) {
    //   product = await ProductSchema.findOne({ _id: body.productId });
    // } else {
    const product = await ProductSchema.findOne({ slug: body.slug });
    // }
    if (!product) {
      return Response.json({ success: false, error: "No Product Found" });
    }
    return Response.json({ success: true, product: product });
    // } else {
    //   return Response.json({ success: false, error: "Not Authorized" });
    // }
  } catch (err) {
    return Response.json({ success: false, error: err });
  }
}
