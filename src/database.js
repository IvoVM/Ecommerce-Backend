import mongoose from "mongoose";

(async () => {
  const db = await mongoose.connect("mongodb://0.0.0.0:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("Database is connected to", db.connection.name);
})();
