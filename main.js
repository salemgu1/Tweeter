const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

$("body").on("click", "#btn-post", function () {
    const post = $('#input').val()
    console.log(post!=="")
    if(post===""){
        alert("Empty Post")
    }
    else{
        $("#posts").empty()
        tweeter.addPost(post)
        renderer.renderPosts(tweeter.getPosts())
        $('#input').val("")
    }
});

$("body").on("click", "#btn-comment", function () {
    let commentID = $(this).siblings("input").attr("id")
    let comment =document.getElementById(commentID).value;
    let post = commentID.replace('comment','');
    $("#posts").empty()
    tweeter.addComment(comment,post)
    renderer.renderPosts(tweeter.getPosts())

});

$("#posts").on("click", ".delete-post", function () {
    const postId = $(this).parent().attr("id")
    console.log(postId)
    $("#posts").empty()
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())   
});

$("#posts").on("click", ".delete-comment", function () {
    const postId = $(this).parent().parent().attr("id")
    const commentId = $(this).parent().attr("id")
    $("#posts").empty()
    tweeter.removeComment(postId,commentId)
    renderer.renderPosts(tweeter.getPosts())   
});





