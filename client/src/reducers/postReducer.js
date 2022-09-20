const postReducer = (posts = [], action) => {
    switch(action.type){
        case 'FETCH' : 
            return posts = action.payload;
        case 'CREATE' : 
            return posts;
        default : 
            return posts
    };
};

export default postReducer;