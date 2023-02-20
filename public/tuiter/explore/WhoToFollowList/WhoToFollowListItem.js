const WhoToFollowListItem = (who) => {
    return (`
            <li class="list-group-item fa-solid border-0">
                        <img class="wd-float-left" src=${who.avatarIcon} style="height: 60px; width: 60px; border-radius: 45%"/>
                        <div class="wd-float-left" style="padding-left: 10px; font-weight: bold">${who.userName}</div></b><i class="fa fa-check-circle" aria-hidden="true" style="padding-left: 10px; color: deepskyblue"></i>
                        <div class="wd-float-right"><button class="wd-float-left btn btn-primary">Follow</button></div>
                        <br/>
                        <div class="wd-float-left" style="padding-left: 10px; color: gray">@${who.handle}</div>
            </li>
    `)
}
export default WhoToFollowListItem;