const NavigationSidebar = () => {
    return (` 
            <div class="list-group"> 
                <a class="list-group-item" href="/"> 
                    <i class="fab fa-twitter"></i>
                </a> 
                <!-- continue rest of list, e.g., Home, Explore, Notifications, Messages, etc. --> 
                <a href="../homescreen/index.html" class="list-group-item list-group-item-action " id="home">
                    <i class="fa fa-home wd-pos-relative">
                        <div class="wd-float-right d-none d-xl-block" style="padding-left: 5px; font-family: Arial">
                            Home
                        </div>    
                    </i>
                </a>
                <a href="../explore/index.html" class="list-group-item list-group-item-action" id="explore">
                    <i class="fa fa-hashtag" aria-hidden="true">
                        <div class="wd-float-right d-none d-xl-block" style="padding-left: 5px; font-family: Arial">
                            Explore
                        </div>    
                    </i>        
                </a>
                <a href="../notifications/index.html" class="list-group-item list-group-item-action" id="notification">
                    <i class="fa fa-bell" aria-hidden="true">
                        <div class="wd-float-right d-none d-xl-block" style="padding-left: 5px; font-family: Arial">
                            Notifications
                        </div>    
                    </i>
                </a>
                <a href="../messages/index.html" class="list-group-item list-group-item-action" id="messages">
                    <i class="fa fa-envelope" aria-hidden="true">
                        <div class="wd-float-right d-none d-xl-block" style="padding-left: 5px; font-family: Arial">
                            Messages
                        </div>    
                    </i>
                </a>
                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action" id="bookmarks">
                    <i class="fa fa-bookmark" aria-hidden="true">
                        <div class="wd-float-right d-none d-xl-block" style="padding-left: 5px; font-family: Arial">
                            Bookmarks
                        </div>    
                    </i>
                </a>
                <a href="../lists/index.html" class="list-group-item list-group-item-action" id="lists">
                    <i class="fa fa-list" aria-hidden="true">
                        <div class="wd-float-right d-none d-xl-block" style="padding-left: 5px; font-family: Arial">
                            Lists
                        </div>    
                    </i>
                </a>
                <a href="../profile/index.html" class="list-group-item list-group-item-action" id="profile" onclick="active()">
                    <i class="fa fa-user" aria-hidden="true">
                        <div class="wd-float-right d-none d-xl-block" style="padding-left: 5px; font-family: Arial">
                            Profile
                        </div>    
                    </i>
                </a>
                <a href="../more/index.html" class="list-group-item list-group-item-action" id="more">
                    <i class="fa fa-home wd-pos-relative">
                        <div class="wd-float-right d-none d-xl-block" style="padding-left: 5px; font-family: Arial">
                            More
                        </div>    
                    </i>
                </a>
            </div> 
            <div class="d-grid mt-2"> 
                <a href="tweet.html" class="btn btn-primary btn-block rounded-pill"> Tweet</a> 
            </div>

`);

}
export default NavigationSidebar;