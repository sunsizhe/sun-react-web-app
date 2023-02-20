import PostList from "../PostSummaryList/PostList.js";

const ExploreComponent = () => {
    return (` 
            <div class="p-3 container" style="position: relative">
                <!-- search field and cog --> 
                <input id="id-selector-1" type="text" placeholder="Search Tuiter" class="wd-pos-absolute-16">
                <a href="#"><img class="wd-pos-absolute-12" src="./image/set.jpg" style="b"></a><br/>
                <br/>
                <ul class="nav nav-tabs wd-pos-absolute-16">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" style="font-weight: bold">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style="color: gray">Trending</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link"href="#" style="color: gray">News</a>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <a class="nav-link"href="#" style="color: gray">Sports</a>
                    </li>
                    <li class="nav-item d-none d-xl-block">
                        <a class="nav-link"href="#" style="color: gray">Enterainment</a>
                    </li>
                </ul>
                <br/>
                <div class="container-fluid" style="padding-top: 25px; padding-left:0px; width: 100%; position: relative">
                        <img src="./image/ship.jpg" width="100%">
                        <span class="position-absolute bottom-0 start-0 p-2" style="color: white">SpaceX's Starship</span>
                    </li>
                </div>
                ${PostList()}
            </div> 
                <!-- image with overlaid text --> 
            `);
}
export default ExploreComponent;