import jwt from "jsonwebtoken";

export const authmiddleware = async (req, res, next) =>{
    try {
        const headToken =req.headers["authorization"];
        if (!headToken) {
            return res.json("token not found");
        }
        const token = headToken.split(" ")[1];
        console.log(token);

        const isVerified = jwt.verify(token, "123");

        console.log(isVerified);

        next();
    } catch(error){
        res.json("token is invalid or expires");
    }
};