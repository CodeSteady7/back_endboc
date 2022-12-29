const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token)
      return res.status(400).json({ msg: "Invalid Authentication token" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res.status(400).json({ msg: "Invalid Authentication verikasi" });

      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const authUserAdmin = (req, res, next) => {
  try {
  } catch (err) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = auth;
