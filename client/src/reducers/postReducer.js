const postReducer = (posts = [], action) => {
    switch(action.type){
        case 'FETCH' : 
            return {status : "Fetching Done", postData : action.payload};
        case 'CREATE' : 
            posts.postData.push(action.payload);
            return posts
        case "DELETE" : 
            return posts;
        case "EDIT" : 
            return posts;
        default : 
            return posts
    };
};

export default postReducer;