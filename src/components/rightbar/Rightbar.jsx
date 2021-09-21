import React, { useState, useEffect, useContext } from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

function Rightbar({ user }) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [friends, setFriends] = useState([]);
	const { user: currentUser } = useContext(AuthContext);
	const [followed, setFollowed] = useState(
		currentUser.followings.includes(user?._id)
	);

	useEffect(() => {
		const getFriends = async () => {
			try {
				const friendList = await axios.get("/users/friends/" + user._id);
				setFriends(friendList.data);
			} catch (err) {
				console.log(err);
			}
		};
		getFriends();
	}, [user]);

	const HomeRightbar = () => {
		return (
			<div>
				<div className="birthdayContainer">
					<img src={`${PF}gift.png`} alt="" className="birthdayImg" />
					<span className="birthdayText">
						<b>Linda </b> and <b>3 other friends</b> have a birthday today
					</span>
				</div>
				<img src={`${PF}Uvic.jpg`} alt="" className="rightbarAd" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((user) => {
						return <Online key={user.id} user={user} />;
					})}
				</ul>
			</div>
		);
	};

	const handleClick = async () => {
		try {
			followed
				? await axios.put(`/users/${user._id}/unfollow/`, {
						userId: currentUser._id,
				  })
				: await axios.put(`/users/${user._id}/follow/`, {
						userId: currentUser._id,
				  });
		} catch (err) {
			console.log(err);
		}
		setFollowed(!followed);
	};

	const ProfileRightbar = () => {
		return (
			<>
				{user.username !== currentUser.username && (
					<button className="rightbarFollowButton" onClick={handleClick}>
						{followed ? "unfollow" : "follow"}
						{followed ? <Remove /> : <Add />}
					</button>
				)}
				<h4 className="rightbarTitle">Hey its my profile</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="righbarInfoKey">City:</span>
						<span className="righbarInfoValue">{user.city}</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="righbarInfoKey">From:</span>
						<span className="righbarInfoValue">{user.from}</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="righbarInfoKey">Relation:</span>
						<span className="righbarInfoValue">Single</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User friends</h4>
				<div className="rightbarFollowings">
					{friends.map((friend) => {
						return (
							<Link to={`/profile/` + friend.username} key={friend._id}>
								<div className="rightbarFollowing">
									<img
										src={
											friend.profilePicture ? PF + friend.profilePicture : null
										}
										alt=""
										className="rightbarFollowingImg"
									/>
									<span className="rightbarFollowingName">
										{friend.username}
									</span>
								</div>
							</Link>
						);
					})}
				</div>
			</>
		);
	};
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{user ? <ProfileRightbar /> : <HomeRightbar />}
				{/* <ProfileRightbar /> */}
				{/* <HomeRightbar /> */}
			</div>
		</div>
	);
}

export default Rightbar;
