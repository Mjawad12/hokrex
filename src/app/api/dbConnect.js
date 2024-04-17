import mongoose from "mongoose";

export default async function ConnectDb() {
  if (!mongoose.connection.readyState) {
    await mongoose
      .connect(process.env.CONNECTION_STRING, {
        serverSelectionTimeoutMS: 5000,
      })
      .then(console.log("Connected TO Database"))
      .catch((err) => console.log(err.message));
  } else {
    return console.log("Already connected");
  }
  console.log(mongoose.connection.readyState);
}
