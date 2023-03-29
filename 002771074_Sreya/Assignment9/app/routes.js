const User = require("./models/users");
const path = require("path");
const bcrypt = require("bcrypt");

function validateGmail(email) {
  // Define regex pattern to match valid Gmail accounts
  const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  // Use test() method to check if email matches the pattern
  return pattern.test(email);
}

function validatePassword(password) {
  // Define regex pattern to match passwords with at least one capital letter and one special character
  const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;

  // Use test() method to check if password matches the pattern
  return pattern.test(password);
}

module.exports = function (app) {
  app.get("/user/getAll", async (req, res) => {
    try {
      const users = await User.find({}).select("-password").lean();
      res.json(users);
      console.log(users);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });

  app.post("/user/create", async (req, res) => {
    try {
      const { fullname, email, password } = req.body;

      // Confirm none are empty
      if (!fullname || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      if (!validateGmail(email)) {
        return res.status(400).json({
          message: "Email is Invalid must end with @gmail.com",
        });
      }
      if (!validatePassword(password)) {
        return res.status(400).json({
          message:
            "password with at least one capital letter and one special character",
        });
      }

      const duplicate = await User.findOne({ email }).lean().exec();
      if (duplicate) {
        return res.status(409).json({ message: "Duplicate user" });
      }

      //Hash password
      const hashedPwd = await bcrypt.hash(password, 10); //salt rounds
      const userObject = { fullname, email, password: hashedPwd };

      const result = await User.create(userObject);
      console.log(result);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  });

  app.put("/user/edit/:email", async (req, res) => {
    try {
      const email = req.params.email;
      var { fullname, password } = req.body;

      if (!email || !fullname || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (!validatePassword(password)) {
        return res.status(400).json({
          message:
            "password with at least one capital letter and one special character",
        });
      }
      //const result = await User.updateOne({email},{fullname, password}).lean().exec();
      const duplicate = await User.findOne({ email }).lean().exec();
      //console.log(duplicate);
      if (duplicate) {
        //Hash password
        password = await bcrypt.hash(password, 10); //salt rounds
        //const userObject = { fullname, email, "password": hashedPwd, }
        const result = await User.updateOne({ email }, { fullname, password })
          .lean()
          .exec();
        if (result) {
          res.status(200).json({ message: "User updated" });
        }
        res.send(result);
      } else {
        return res.status(400).json({ message: "Email does not exist" });
      }
    } catch (err) {
      console.log(err);
    }
  });

  app.delete("/user/delete/:email", async (req, res) => {
    try {
      const email = req.params.email;
      const check = await User.findOne({ email }).lean().exec();
      if (check == null) {
        return res.status(400).json({ message: "Email does not exist" });
      } else {
        User.deleteOne({ email }).exec();
        return res.status(200).json({ message: "User deleted" });
      }
    } catch (err) {
      console.log(err);
    }
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });
};
