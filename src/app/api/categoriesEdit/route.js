import { headers } from "next/headers";
import ConnectDb from "../dbConnect";
import CategoriesSchema from "../Schemas/CategoriesSchema";
import ProductSchema from "../Schemas/ProductSchema";

export async function GET() {
  await ConnectDb();
  const categories = await CategoriesSchema.find({});
  return Response.json(
    { success: true, categories: categories },
    { status: 200 },
  );
}

export async function DELETE(req) {
  await ConnectDb();
  const body = await req.json();
  const headerList = headers();
  if (headerList.get("origin") === process.env.NEXT_PUBLIC_URL) {
    await CategoriesSchema.findOneAndDelete({ name: body.id });
    return Response.json({ success: true, msg: "Category deleted" });
  }
  return Response.json({ success: false, error: "Not Authorized" });
}

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const headerList = headers();
  if (headerList.get("origin") === process.env.NEXT_PUBLIC_URL) {
    const items = await ProductSchema.find({
      productCategory: body.name,
    });
    await CategoriesSchema.create({
      name: body.name,
      items: items.length,
      link: "/categories/" + slugify(body.name),
    });
    return Response.json(
      { success: true, msg: "Categories added" },
      { status: 200 },
    );
  }
  return Response.json({ success: false, error: "Not Authorized" });
}

export const dynamic = "force-dynamic";

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
