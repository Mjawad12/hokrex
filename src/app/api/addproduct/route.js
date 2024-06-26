import CategoriesSchema from "../Schemas/CategoriesSchema";
import Productmodel from "../Schemas/ProductSchema";
import ConnectDb from "../dbConnect";

export async function POST(req) {
  try {
    await ConnectDb().catch((err) => console.log(err.message));
    const body = await req.json();
    const slug = slugify(body.productName);
    await CategoriesSchema.updateOne(
      { name: body.productCategory },
      { $inc: { items: +1 } },
    );
    await CategoriesSchema.updateOne({ name: "All" }, { $inc: { items: +1 } });

    const product = await Productmodel.create({
      productName: body.productName,
      productCategory: body.productCategory,
      productDescription: body.productDescription,
      productHeading: body.productHeading,
      productImg: body.productImg,
      productPrice: body.productPrice,
      productColors: body.productColors,
      productSizes: body.productSizes,
      slug: slug,
      customizable: body.customizable,
      salePercent: body.salePercent,
      Materials: body.Materials,
      sideImages: body.sideImages,
    });
    return Response.json({ success: true, product }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 },
    );
  }
}

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "");
};
