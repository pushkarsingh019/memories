import jwtDecode from "jwt-decode";

export function verifyUser(req, res){
    let tokenToVerify = req.body.token;
    let userObject = jwtDecode(tokenToVerify);
    res.status(200).json({userObject});
};
