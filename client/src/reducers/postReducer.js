const postReducer = (posts = [], action) => {
    switch(action.type){
        case 'FETCH' : 
            return {status : "Fetching Done", postData : action.payload};
        case 'CREATE' : 
            return posts.postData.push(action.payload);
        default : 
            return posts
    };
};

export default postReducer;