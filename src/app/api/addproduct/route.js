import Productmodel from "../Schemas/ProductSchema";
import ConnectDb from "../dbConnect";

export async function POST(req) {
  try {
    await ConnectDb().catch((err) => console.log(err.message));
    const body = await req.json();
    const product = await Productmodel.create({
      productName: body.productName,
      productCategory: body.productCategory,
      productDescription: body.productDescription,
      productHeading: body.productHeading,
      productImg: body.productImg,
      productPrice: body.productPrice,
    });
    return Response.json({ success: true, product }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 }
    );
  }
}
