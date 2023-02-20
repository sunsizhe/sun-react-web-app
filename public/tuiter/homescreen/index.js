import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import HomeScreen from "./PostItemList.js"

function exploreComponent() {
    $('#wd-home').append(`
                            <h2>HomeScreen</h2>
                            <div class="row mt-2">
                                <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                                    <!--<h3>Navigation Sidebar</h3>-->
                                    ${NavigationSidebar()}
                                </div>
                                <div class="col-10 col-lg-7 col-xl-6">
                                    <!--<h3>ExploreComponent</h3>-->
                                    ${HomeScreen()}
                                </div>
                            </div>
    `);
    $(document.getElementById('home')).addClass('active')
}

$(exploreComponent);