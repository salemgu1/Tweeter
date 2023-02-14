
let _postIdCounter = 2;
let _commentIdCounter = 6;
let comments = {};
const posts = [
  {
    text: "First post!",
    id: "p1",
    comments: [
      { id: "c1", text: "First comment on first post!" },
      { id: "c2", text: "Second comment on first post!!" },
      { id: "c3", text: "Third comment on first post!!!" },
    ],
  },
  {
    text: "Aw man, I wanted to be first",
    id: "p2",
    comments: [
      {
        id: "c4",
        text: "Don't wory second poster, you'll be first one day.",
      },
      { id: "c5", text: "Yeah, believe in yourself!" },
      { id: "c6", text: "Haha second place what a joke." },
    ],
  },
];
const Tweeter = function () {
  const getPosts = function () {
    return posts;
  };

  const createPost = (postContent) => {
    _postIdCounter += 1;
    let post = {
      text: postContent,
      id: "p" + _postIdCounter,
      comments: [],
    };
    return post;
  };

  const addPost = function (text) {
    posts.push(createPost(text));
  };

  const removePost = function (postID) {
    const post = posts.findIndex((obj) => obj.id === postID);
    if (post > -1) {
      posts.splice(post, 1);
    }
    return posts;
  }

  const createComment = (commentContent) => {
    _commentIdCounter += 1;
    comment = {
      id: "c" + _commentIdCounter,
      text: commentContent,
    };
    return comment;
  };

  const addComment = function (text, postID) {
    const post = posts.findIndex((obj) => obj.id === postID);
    if(post>-1){
        posts[post].comments.push(createComment(text))
    }

  };

  const removeComment = function(postID,commentID){
    const post = posts.findIndex((obj) => obj.id === postID);
    if(post>-1){
        const comment = posts[post].comments.findIndex((obj) => obj.id === commentID);
        posts[post].comments.splice(comment, 1);
    }
  }

  const getComments = function(postID){
    const post = posts.findIndex((obj) => obj.id === postID);
    if(post>-1){
        return posts[post].comments
    }
    else{
      return "error id"
    }
  }
  
  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment, addComment,
    removeComment, removeComment,
    getComments ,getComments,
  };
};

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// tweeter.removePost("p3")
// const tweeter = Tweeter();
// tweeter.addPost("post 1");
// tweeter.addPost("post 2");
// tweeter.addPost("post 3");
// // tweeter.removePost("p1")
// // tweeter.removePost("p2")
// // tweeter.removePost("p3");
// tweeter.addComment("p3","salem")
// console.log(tweeter.getPosts())
