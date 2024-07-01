import { headers } from "next/headers";
import ConnectDb from "../dbConnect";
import { sendQouteMedia } from "../sendmail";

export async function POST(req) {
  await ConnectDb();
  const body = await req.json();
  const headerList = headers();
  if (headerList.get("origin") === process.env.NEXT_PUBLIC_URL) {
    await sendQouteMedia(
      body.firName,
      body.lastName,
      body.email,
      body.message,
      body.phone,
      body.type,
      body.skill,
      body.Img,
    );
    return Response.json({
      success: true,
      msg: "Message was sent successfully!",
    });
  }

  return Response.json({ success: false, msg: "Not Authorized" });
}
