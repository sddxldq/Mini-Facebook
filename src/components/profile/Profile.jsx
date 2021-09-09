import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Home() {
	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src="assets/post/overlook to northVan.jpg"
								alt=""
								className="profileCoverImg"
							/>
							<img
								src="assets/person/psbe.jpg"
								alt=""
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">Alfred Luo</h4>
							<span className="profileInfoDesc">Hello welcome to my page</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed />
						<Rightbar />
					</div>
				</div>
			</div>
		</>
	);
}
