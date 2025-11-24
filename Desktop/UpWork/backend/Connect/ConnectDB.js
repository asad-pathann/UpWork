import mongoose from "mongoose";

import colors from "colors";

export const Connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log(`DataBase Connected 👍`);
    console.log(`Host: ${mongoose.connection.host.cyan}`);
  } catch (error) {
    console.log("DataBase nahi chala 😭");
  }
};
