const postReducer = (posts = [], action) => {
    switch(action.type){
        case 'FETCH' : 
            return {status : "Fetching Done", postData : action.payload};
        case 'CREATE' : 
            console.log("state before update");
            console.log(posts);
            posts.postData.push(action.payload);
            console.log("state after update");
            console.log(posts)
            return posts
        case "DELETE" : 
            console.log(action.payload)
            return posts;
        default : 
            return posts
    };
};

export default postReducer;