const express = require("express");
const mongodb = require("mongodb").MongoClient;
const path = require("path");

const app = express();

const url = "mongodb://127.0.0.1:27017";

let db;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const connectDb = async () => {
  try {
    const client = await mongodb.connect(url);

    db = client.db("jecrc");

    console.log("jecrc db connected successfully");
  } catch (err) {
    console.log(err);
  }
};

connectDb();

app.get("/", (req, res) => {
  res.send(`
    
    <h1
      style="
        text-align:center;
        margin-top:50px;
        font-family:Arial;
        color:#2c3e50;
      "
    >
      Express With MongoDB
    </h1>

  `);
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

app.post("/register", async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    await db.collection("users").insertOne(data);

    res.status(200).send({
      message: "User Registered Successfully",
      data,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send("Error inserting user");
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await db.collection("users").find().toArray();

    res.send(users);
  } catch (err) {
    console.log(err);

    res.status(500).send("Error fetching users");
  }
});

app.get("/users/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const user = await db.collection("users").findOne({
      email: email,
    });

    res.send(user);
  } catch (err) {
    console.log(err);

    res.status(500).send("Error fetching user");
  }
});

app.put("/users/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const newData = req.body;

    const result = await db.collection("users").updateOne(
      { email: email },

      {
        $set: newData,
      },
    );

    res.send({
      message: "User Updated Successfully",
      result,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send("Error updating user");
  }
});

app.patch("/users/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const updates = req.body;

    const result = await db.collection("users").updateOne(
      { email: email },

      {
        $set: updates,
      },
    );

    res.send({
      message: "User Partially Updated Successfully",
      result,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send("Error patching user");
  }
});

app.delete("/users/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const result = await db.collection("users").deleteOne({
      email: email,
    });

    res.send({
      message: "User Deleted Successfully",
      result,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send("Error deleting user");
  }
});

app.get("*", async (req, res) => {
  res.status(405).send("invalid url");
});

app.get("/allusers", async (req, res) => {
  try {
    const users = await db.collection("users").find().toArray();

    let output = `

      <html>

        <head>

          <title>All Users</title>

        </head>

        <body
          style="
            font-family: Arial;
            background-color: #f4f4f4;
            padding: 30px;
          "
        >

          <h1
            style="
              text-align: center;
              color: #2c3e50;
              margin-bottom: 40px;
            "
          >
            All Registered Users
          </h1>

          <div
            style="
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
              justify-content: center;
            "
          >
    `;

    users.forEach((user) => {
      output += `

        <div
          style="
            width: 300px;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          "
        >

          <h2
            style="
              color: #2c3e50;
              margin-bottom: 15px;
            "
          >
            ${user.name || "N/A"}
          </h2>

          <p>
            <strong>Email:</strong>
            ${user.email || "N/A"}
          </p>

          <p>
            <strong>Phone:</strong>
            ${user.phone || "N/A"}
          </p>

          <p>
            <strong>City:</strong>
            ${user.city || "N/A"}
          </p>

        </div>

      `;
    });

    output += `

          </div>

        </body>

      </html>

    `;

    res.send(output);
  } catch (err) {
    console.log(err);

    res.status(500).send("Error displaying users");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
