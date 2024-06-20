import ProductSchema from "../Schemas/ProductSchema";
import ConnectDb from "../dbConnect";

export async function POST(req) {
  try {
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
    const Creview = {
      name: body.name,
      designation: body.designation,
      phone: body.phone,
      email: body.email,
      rating: body.rating,
      review: body.review,
    };
    await ProductSchema.findOneAndUpdate(
      { _id: body.productId },
      { $push: { reviews: Creview } },
    );
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 },
    );
  }
}
