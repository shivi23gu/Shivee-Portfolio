import jwt from "jsonwebtoken";

const protectAdmin = async (req, res, next) => {

  try {

    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    token = token.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.adminId = decoded.id;

    next();

  } catch (error) {

    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default protectAdmin;