const PostItem = (item) =>{
    return (`
<li class="list-group-item">
    <div class="row" >
        <div class="col-2">
            <img src=${item.avatarIcon} class="wd-headImg">
        </div>
        <div class="col-10">
            <div style="position:relative;">
                <span>${item.userName}</span>
                <i class="fa-solid fa-circle-check"></i>
                <span class="wd-content">
                    @${item.handle}
                </span>
                <i class="fa-solid fa-ellipsis" style="float: right"></i>
            </div>
            <div class="wd-title">
                ${item.short}
            </div>
            <ul class="list-group">
                <li class="list-group-item p-0" style="border: lightgrey">
                    <img src=${item.image} class="wd-posImag"/>
                </li>
                <li class="list-group-item wd-title">
                    <div>
                        ${item.title}
                    </div>
                    <div class="wd-content">
                        ${item.content}
                    </div>
                    <div class="wd-content">
                        <i class="fa-solid fa-link"></i>
                        <span class="wd-content">${item.link}</span>
                    </div>
                </li>
            </ul>
            <div>
                <a href="#" class="wd-float-left" style="color: lightgray; margin-left: 12px"><i class="fa-solid fa-comment"></i> ${item.comments}</a>
                <a href="#" class="wd-float-left" style="margin-left: 70px; color: lightgray"><i class="fa-solid fa-retweet"></i> ${item.redirects}</a>
                <a href="#" class="wd-float-left" style="margin-left: 70px; color: lightskyblue"><i class="fa-solid fa-heart"></i> ${item.likes}</a>
                <a href="#" class="wd-float-left" style="margin-left: 70px; color: lightgray"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
            </div>
        </div>
    </div>
</li>
    `)
}

export default PostItem;