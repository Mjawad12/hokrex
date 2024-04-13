import Productmodel from "../Schemas/ProductSchema";
import ConnectDb from "../dbConnect";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  console.log(body);
  const product = await Productmodel.create({
    productName: body.productName,
    productCategory: body.productCategory,
    productDescription: body.productDescription,
    productHeading: body.productHeading,
    productImg: body.productImg,
    productPrice: body.productPrice,
  });
  return Response.json({ success: true, product }, { status: 200 });
}
