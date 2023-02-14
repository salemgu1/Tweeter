const element = $("#posts")
const Renderer = function(){
    const renderPosts = function(posts){
        for(let post of posts){
            initPost(post)
            let flag = "Enter your Comment"
            let flag1 = "text"
            let flag2 = "comment" + post.id
            $("#"+post.id).append(`<input type= ${flag1} placeholder=${flag} id=${flag2}>`)
            $("#"+post.id).append(`<div id="btn-comment">comment</div>`)
        }   
    }

    const initPost = function(post){
        let val = "ul"
        let classVal = "divPost"
        element.append("<div class ="+classVal + " data-id ="+ post.id + "  id="+ post.id + ">"+post.text+"</div>")
        $("#"+post.id).append("<ul id="+val+ post.id + "></ul>")
        let removePost = $(`<div>Delete Post</div>`).addClass("delete-post")
        $("#"+post.id).append(removePost)
        initComments(post)
    }

    const initComments = function(post){
        for(let comment of tweeter.getComments(post.id)){
            initComment(comment,post)
        }
        let id = post.id
        let val = "ul"
        // $("#"+id).append("<div data-id ="+ id + "  id="+ id + ">"+text+"</div>")
        $("#"+id).append("<ul id="+val+ id + "></ul>")
    }
    
    const initComment = function (comment,post){
        let comentID = comment.id
        let commentContent = comment.text
        console.log(comentID)
        $("#"+post.id).append("<li id="+comentID + ">"+commentContent+"</li>")
        let removeComment = $(`<div class="delete-comment">Delete Comment</div>`)
        $("#"+comentID).append(removeComment)
    }
    return {
        renderPosts :renderPosts,
        initComment:initComment,
    }
}
