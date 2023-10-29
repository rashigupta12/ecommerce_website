import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDb = async () => {
  const connectionUrl =
    "mongodb+srv://1011rashigupta:ecommerce2023@ecommercefirst.frgigno.mongodb.net/";
  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully"))
    .catch((err) =>
      console.log(`Getting error from Db connection ${err.message}`)
    );
};

export default connectToDb;
