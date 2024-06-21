import { headers } from "next/headers";
import ProductSchema from "../Schemas/ProductSchema";
import ConnectDb from "../dbConnect";
import authorize from "../Middleware/Authorize";

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
    const prod = await ProductSchema.findOne({ _id: body.review.productId });

    let already = prod.reviews.some((ele) => {
      return ele.reviewerId == id;
    });
    if (already) {
      return Response.json(
        { success: false, err: "You have already reviewed this item!" },
        { status: 200 },
      );
    } else {
      const Creview = {
        name: body.review.name,
        designation: body.review.designation,
        phone: body.review.phone,
        email: body.review.email,
        rating: body.review.rating,
        review: body.review.review,
        reviewerId: id,
      };
      await ProductSchema.updateOne(
        { _id: body.review.productId },
        { $push: { reviews: Creview } },
      );
      return Response.json({ success: true }, { status: 200 });
    }
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 },
    );
  }
}
