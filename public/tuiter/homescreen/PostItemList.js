import PostItem from "./PostItem.js"
import items from "./item.js"

const PostItemList = () => {
    return (`
        <ul class="list-group">
            ${items.map(item => {
            return (PostItem(item))
                }).join('')
                } 
        </ul>
        `)
}
export default PostItemList;