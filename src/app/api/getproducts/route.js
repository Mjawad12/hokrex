import ConnectDb from "../dbConnect";
import Productmodel from "../Schemas/ProductSchema";

export async function POST(req) {
  try {
    await ConnectDb();
    const body = await req.json();
    if (body.productCategory === "All") {
      const products = await Productmodel.find({});
      return Response.json({ success: true, products }, { status: 200 });
    } else {
      const products = await Productmodel.find({
        productCategory: body.productCategory,
      });
      return Response.json({ success: true, products }, { status: 200 });
    }
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
