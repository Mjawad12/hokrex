import ConnectDb from "../dbConnect";
import Productmodel from "../Schemas/ProductSchema";

export async function GET() {
  try {
    await ConnectDb().catch((err) => console.log(err.message));
    const products = await Productmodel.find({});
    return Response.json({ success: true, products }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 }
    );
  }
}
