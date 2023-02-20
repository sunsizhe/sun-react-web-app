import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item border-0">Who to follow</li>
            ${whos.map(who => {
                return (WhoToFollowListItem(who))}).join('')}
        </ul>
    `);
}

export default WhoToFollowList;