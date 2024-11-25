import jwt from "jsonwebtoken";
import 'dotenv/config'


// Middleware to check if the user is authenticated via JWT
const userAuth = async (req, res, next) => {

    //get the token from headers
    const { token } = req.headers;


    if(!token){
        return res.status(401).json({ error: "Unauthorized" });
    }
    
    try {
          // Verify the token using jsonwebtoken
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.status(401).json({ error: "Unauthorized" });
        }

        next();
        
    } catch (err) {
        console.log("Middleware - ", err);
        res.status(500).json({ error: "Internal server error" });
    }

}

export default userAuth;