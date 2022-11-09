import axios from "axios";
import {backendUrl} from "../config/backend";


export const authenticateUser = (accessToken) => async(dispatch) => {
    try {
        const {data} = await axios.post(`${backendUrl}/auth/verify`, accessToken);
        dispatch({
            type : "AUTHENTICATE",
            payload : data.userObject
        });
        localStorage.setItem("user", JSON.stringify(data.userObject));
    } catch (error) {
        console.log(error.message);
    }
};