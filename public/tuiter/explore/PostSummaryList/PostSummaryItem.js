const postSummaryItem = (post) =>{
    return (`
            <div style="height: 100px; width: 100%; padding-top: 12px" class="container-fluid">
                <img class="wd-pos-absolute-right-16 wd-rounded-corners-all-around" src=${post.image} style="height: 70px; width: 70px"/>
                <div class="wd-author wd-pos-absolute-16" style="width: 50%; color: gray" >${post.topic}</div><br/>
                <div class="wd-title wd-pos-absolute-16" style="width: 50%; font-weight: bold; color: white">${post.userName}</div><br/>
                <div class="wd-topic wd-pos-absolute-16" style="width: 50%; color: gray">${post.title}</div><br/>
            </div>
    `)
}

export default postSummaryItem;