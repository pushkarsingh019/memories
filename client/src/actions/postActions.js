import axios from "axios";

export const getPosts = () => async(dispatch) => {
    try {
        console.log("Inside the get post action");
        const response = axios.get('http://localhost:5000/posts');
        console.log(response);
        dispatch({
            type : 'FETCH',
            payload : response,
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = axios.post('http://localhost:5000/posts/create', post);
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