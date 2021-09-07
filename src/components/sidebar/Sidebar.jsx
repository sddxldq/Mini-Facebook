import React from "react";
import "./sidebar.css";
import {
	RssFeed,
	Chat,
	PlayCircleFilledOutlined,
	Group,
	Bookmark,
	HelpOutline,
	WorkOutline,
	Event,
	School,
} from "@material-ui/icons";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<Chat className="sidebarIcon" />
						<span className="sidebarListItemText">Chats</span>
					</li>
					<li className="sidebarListItem">
						<PlayCircleFilledOutlined className="sidebarIcon" />
						<span className="sidebarListItemText">Videos</span>
					</li>
					<li className="sidebarListItem">
						<Group className="sidebarIcon" />
						<span className="sidebarListItemText">Groups</span>
					</li>
					<li className="sidebarListItem">
						<Bookmark className="sidebarIcon" />
						<span className="sidebarListItemText">Bookmarks</span>
					</li>
					<li className="sidebarListItem">
						<HelpOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Questions</span>
					</li>
					<li className="sidebarListItem">
						<WorkOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Jobs</span>
					</li>
					<li className="sidebarListItem">
						<Event className="sidebarIcon" />
						<span className="sidebarListItemText">Events</span>
					</li>
					<li className="sidebarListItem">
						<School className="sidebarIcon" />
						<span className="sidebarListItemText">Courses</span>
					</li>
				</ul>
				<button className="sidebarButton">Show More</button>
				<hr className="sidebarHr" />
				<ul className="sidebarFriendList">
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">Alfred</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">qwert</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">asdfg</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">zxcvb</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">tyuio</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">hjklp</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">nm</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">qwert</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">asdfg</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/2.jpeg"
							alt=""
							className="sidebarfriendImg"
						/>
						<span className="sidebarFriendName">Alfred</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
