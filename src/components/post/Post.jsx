import React from "react";
import "./post.css";
import { MoreVert} from "@material-ui/icons";


function Post() {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							src="/assets/person/4.jpeg"
							alt=""
							className="postProfileImg"
						/>
						<span className="postUserName">Alfred Luo</span>
						<span className="postDate">5 mins ago</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">Hey! Its my first post!</span>
					<img
						src="assets/post/overlook to northVan.jpg"
						alt=""
						className="postImg"
					/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src="assets/like.png" alt="" />
						<img className="likeIcon" src="assets/heart.png" alt="" />
						<span className="postLikeCounter"> 50 people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText"> 10 comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
