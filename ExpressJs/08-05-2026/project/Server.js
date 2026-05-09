require("dotenv").config();

const app = require("./App");

const connectDB = require("./config/db");

(async () => {
  await connectDB();
  console.log("CONNECTED TO MONGOdB");

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`server is rinning on port ${PORT}`);
  });
})();
