import React from "react";
import "./feed.css";
import Share from "../share/Share";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post/Post";
// import {Posts, Users} from "../../dummyData"

function Feed({ username }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = username
				? await axios.get("/posts/profile/" + username)
				: await axios.get("/posts/timeline/613535aee2064722ca3dc1a3");
			setPosts(res.data);
			// console.log(posts);
		};
		fetchPosts();
	}, [username]);

	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{posts.map((post) => {
					return <Post key={post._id} post={post} />;
				})}
			</div>
		</div>
	);
}

export default Feed;
