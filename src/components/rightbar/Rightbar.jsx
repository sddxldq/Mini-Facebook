import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ profile }) {
	const HomeRightbar = () => {
		return (
			<div>
				<div className="birthdayContainer">
					<img src="assets/gift.png" alt="" className="birthdayImg" />
					<span className="birthdayText">
						<b>Linda </b> and <b>3 other friends</b> have a birthday today
					</span>
				</div>
				<img src="assets/Uvic.jpg" alt="" className="rightbarAd" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((user) => {
						return <Online key={user.id} user={user} />;
					})}
				</ul>
			</div>
		);
	};

	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle">Hey its my profile</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="righbarInfoKey">City:</span>
						<span className="righbarInfoValue">New York</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="righbarInfoKey">From:</span>
						<span className="righbarInfoValue">Beijing</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="righbarInfoKey">Relation:</span>
						<span className="righbarInfoValue">Single</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src="assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/2.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/3.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/4.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/5.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/6.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
				</div>
			</>
		);
	};
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{/* {profile ? <ProfileRightbar /> : <HomeRightbar />} */}
				{/* <ProfileRightbar /> */}
				<HomeRightbar />
			</div>
		</div>
	);
}

export default Rightbar;
