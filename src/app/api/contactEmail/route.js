import { headers } from "next/headers";
import ConnectDb from "../dbConnect";

export async function POST(req) {
  await ConnectDb();
  //   const body = await req.json();
  const headerList = headers();
  if (headerList.get("origin") === process.env.NEXT_PUBLIC_URL) {
    console.log(true);
  }

  return Response.json({ success: false, error: "Not Authorized" });
}
