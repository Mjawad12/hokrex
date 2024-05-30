import JWT from "jsonwebtoken";

export default async function authorize(authtoken) {
  try {
    const id = await JWT.verify(authtoken, process.env.JWT_STRING);
    return id;
  } catch (error) {
    console.log("Not Authorized");
    return "Not Authorized";
  }
}
