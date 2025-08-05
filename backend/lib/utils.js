import jwt from "jsonwebtoken";

export const generateToken = (userID, res) => {
    const token = jwt.sign(
        { userID },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
    res.cookie("jwt", token, // <-- Changed to res.cookie (singular)
        {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development" // Secure in production
        }
    );
    return token;
}
