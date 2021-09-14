import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";


export default function Profile() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [user, setUser] = useState("");
	const username = useParams().username;


	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get(`/users/?username=${username}`);
			setUser(res.data);
		};
		fetchUsers();
	}, [username]);

	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src={user.coverPicture || `${PF}post/northVan.jpg`}
								alt=""
								className="profileCoverImg"
							/>
							<img
								src={user.profilePicture || `${PF}person/psbe.jpg`}
								alt=""
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">{user.username}</h4>
							<span className="profileInfoDesc">{user.desc}</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed username={username} />
						<Rightbar user={user} />
					</div>
				</div>
			</div>
		</>
	);
}
