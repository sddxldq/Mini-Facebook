import React, { useState, useEffect, useContext } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState([]);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const { user: currentUser } = useContext(AuthContext);

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get(`/users/?userId=${post.userId}`);
			setUser(res.data);
		};
		fetchUsers();
	}, [post.userId]);

	const likeHandler = () => {
		try {
			axios.put("/posts/" + post._id + "/like", { userId : currentUser._id });
		} catch (err){
			}

		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	// const currentUser = Users.filter((user) => {
	// 	return user.id === post.userId;
	// });
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<Link to={`profile/${user.username}`}>
							<img
								src={user.profilePicture? PF+user.profilePicture  : PF + "person/psbe.jpg"}
								alt=""
								className="postProfileImg"
							/>
						</Link>
						<span className="postUserName">{user.username}</span>
						<span className="postDate">{format(post.createdAt)}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img src={PF + post.img} alt="" className="postImg" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src={`${PF}like.png`}
							alt=""
							onClick={likeHandler}
						/>
						<img
							className="likeIcon"
							src={`${PF}heart.png`}
							alt=""
							onClick={likeHandler}
						/>
						<span className="postLikeCounter"> {like} people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText"> {post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;