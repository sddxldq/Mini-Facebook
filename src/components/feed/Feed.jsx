import React, { useContext } from "react";
import "./feed.css";
import Share from "../share/Share";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post/Post";
import { AuthContext } from "../../context/AuthContext";

function Feed({ username }) {
	const [posts, setPosts] = useState([]);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = username
				? await axios.get("/posts/profile/" + username)
				: await axios.get("/posts/timeline/" + user._id);
			setPosts(
				res.data.sort((a, b) => {
					return new Date(b.createdAt) - new Date(a.createdAt);
				})
			);
			// console.log(posts);
		};
		fetchPosts();
	}, [username, user._id]);

	return (
		<div className="feed">
			<div className="feedWrapper">
				{(!username || user.username === username) && <Share />}
				{posts.map((post) => {
					return <Post key={post._id} post={post} />;
				})}
			</div>
		</div>
	);
}

export default Feed;
