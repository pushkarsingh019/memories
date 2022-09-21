import axios from "axios";

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:5000/posts');
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