import { headers } from "next/headers";
import ConnectDb from "../dbConnect";
import ProductSchema from "../Schemas/ProductSchema";

export async function POST(req) {
  try {
    await ConnectDb();
    const body = await req.json();
    const headerList = headers();
    if (headerList.get("origin") === process.env.NEXT_PUBLIC_URL) {
      if (body.productCategory === "All") {
        const products = await ProductSchema.find({});
        return Response.json({ success: true, products }, { status: 200 });
      } else {
        const products = await ProductSchema.find({
          productCategory: body.productCategory,
        });
        return Response.json({ success: true, products }, { status: 200 });
      }
    }
    return Response.json({ success: false, error: "Not Authorized" });
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
