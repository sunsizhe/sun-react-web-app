import PostSummaryItem from "./PostSummaryItem.js"
import posts from "./Post.js"

const PostList = () => {
    return (`
            ${posts.map(post => {
                return (PostSummaryItem(post))
             }).join('')
            }
        
    `)
}
export default PostList;