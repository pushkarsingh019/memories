import axios from "axios";

// export const backendUrl = "https://memories-backend-zeta.vercel.app";
export const backendUrl = "http://localhost:5000"        

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
        const {data} = await axios.post(`${backendUrl}/posts/create`, post);
        dispatch({
            type : 'CREATE',
            payload : data,
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};


export const deletePost = (id) => async(dispatch) => {
    try {
        let response = await axios.delete(`${backendUrl}/posts/${id}`);
        dispatch({
            type : "DELETE",
            payload : response
        });
    } catch (error) {
        console.log(error.message);
    }
}