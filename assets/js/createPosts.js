


var createPosts = function(){
    console.log(metadataPosts);
    console.log(typeof(metadataPosts))
    var wrapper = document.getElementById("all-posts");
    posts = JSON.parse(metadataPosts)
    return posts.map(post => {
        return `<div id="${post.date}" href="#${post.date}" class="cardPost" style="min-width: 30%; margin-bottom: 2%; padding: 2%; margin: auto; display:table; height: fit-content; ${(i > 2) ? "display: none;" : ""}">  
                <div class="card__header" style="position: inherit;float: left;">
                    <img style="  max-width: 100%;display: block;object-fit: cover; margin-top: 81px;" class="imgPost" src="test/posts/img/${post.image}" alt="card__image" class="card__image" width="400">  
                </div>  
                <div class="card__body">    
                    <h4 class="posts-title">${post.subject}</h4> 
                    <div class="posts-date">${post.date}</div> 
                    <div>
                        <p class="posts-content" styles="max-width: 300px; " id="p${post.date}" >${post.content}</p> 
                    </div>
                    <button onclick="handelPageChange(this)" class="postBtn" id="myBtn">המשך לקרוא</button>  
                </div>    
                </div></div>` 
    }).join('');
    }

$("all-posts").append(createPosts(array_of_objects));