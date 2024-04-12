const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const UserModel = require("./models/database.js");
const { default: mongoose } = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

// Lưu thông tin vào DB
app.post("/register", async (req, res, next) => {
  try {
    // Kiểm tra xem người dùng đã nhập đủ thông tin hay chưa
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.password ||
      !req.body.phone
    ) {
      return res
        .status(400)
        .json({ message: "Vui lòng điền đầy đủ thông tin !" });
    }

    // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay chưa
    const existingUser = await UserModel.findOne({ email: req.body.email });

    if (existingUser) {
      // Nếu email đã tồn tại, gửi một thông báo cho người dùng
      return res
        .status(400)
        .json({ message: "Email đã tồn tại , vui lòng đăng nhập !" });
    }

    // Nếu không, tạo một người dùng mới với thông tin từ yêu cầu
    const user = new UserModel(req.body);
    const result = await user.save();

    res.json({ message: "Đăng ký thành công !", user: result });
  } catch (error) {
    next(error);
  }
});
app.get("/", (req, res, next) => {
  res.json("Home");
});

app.listen(5001, () => {
  console.log("Hello World");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Check login
app.post("/login", async (req, res, next) => {
  try {
    // Kiểm tra xem người dùng đã nhập đủ thông tin hay chưa
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Vui lòng điền đầy đủ thông tin !" });
    }

    // Tìm người dùng trong cơ sở dữ liệu bằng email
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      // Nếu không tìm thấy người dùng, gửi một thông báo cho người dùng
      return res.status(400).json({ message: "Không tồn tại email" });
    }

    // Kiểm tra xem mật khẩu có khớp không
    if (user.password !== req.body.password) {
      // Nếu mật khẩu không khớp, gửi một thông báo cho người dùng
      return res.status(400).json({ message: "Sai mật khẩu vui lòng nhập lại" });
    }

    // Nếu tất cả đều ổn, gửi một thông báo thành công
    res.json({ message: "Đăng nhập thành công !", user: user });
  } catch (error) {
    next(error);
  }
});

// Reset password

app.post("/reset-password", async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.newpassword || !req.body.confirmpassword) {
      return res
        .status(400)
        .json({ message: "Please enter all required fields." });
    }

    if (req.body.newpassword !== req.body.confirmpassword) {
      return res.status(400).json({
        message: "The new password and confirm password do not match.",
      });
    }

    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "The email does not exist." });
    }

    user.password = req.body.newpassword;
    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    next(error);
  }
});
