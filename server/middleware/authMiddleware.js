import jwt from "jsonwebtoken";

const protectAdmin = async (req, res, next) => {

  try {

    let token = req.headers.authorization;

    // CHECK TOKEN EXISTS
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    // REMOVE "Bearer "
    token = token.split(" ")[1];

    // VERIFY TOKEN
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // SAVE ADMIN ID
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