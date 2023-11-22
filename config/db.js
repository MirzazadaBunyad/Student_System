import mongoose from "mongoose";
const MONGO_URI = 'mongodb+srv://testuser1:Mirzazada.2023@cluster0.3a0ztbu.mongodb.net/'
export const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
