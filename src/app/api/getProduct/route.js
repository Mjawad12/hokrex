import ProductSchema from "../Schemas/ProductSchema";
import ConnectDb from "../dbConnect";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  try {
    const product = await ProductSchema.findOne({ slug: body.slug });
    if (!product) {
      return Response.json({ success: false, error: "No Product Found" });
    }
    return Response.json({ success: true, product: product });
  } catch (err) {
    return Response.json({ success: false, error: err });
  }
}
