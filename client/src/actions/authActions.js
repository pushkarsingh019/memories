import axios from "axios";
import {backendUrl} from "../config/backend";

export const authenticateUser = (accessToken) => async(dispatch) => {
    try {
        const {data} = await axios.post(`${backendUrl}/auth/verify`, accessToken);
        console.log("the stuff that is being passed to the payload");
        console.log(data.userObject);
        dispatch({
            type : "AUTHENTICATE",
            payload : data.userObject
        })
    } catch (error) {
        console.log(error.message);
    }
}