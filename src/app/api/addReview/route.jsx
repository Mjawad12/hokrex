import ConnectDb from "../dbConnect";

export async function POST(req) {
  try {
    await ConnectDb();
    const body = await req.json();
        


  } catch (error) {
    console.log(error.message);
    return Response.json(
      { success: false, err: error.message },
      { status: 500 },
    );
  }
}
