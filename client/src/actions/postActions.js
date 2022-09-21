import axios from "axios";

const backendUrl = "https://memories-backend-zeta.vercel.app";

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${backendUrl}/posts`);
        dispatch({
            type : 'FETCH',
            payload : data,
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = axios.post(`${backendUrl}/posts/create`, post);
        console.log(post);
        dispatch({
            type : 'CREATE',
            payload : data,
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}