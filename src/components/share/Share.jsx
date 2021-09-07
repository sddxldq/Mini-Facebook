import React from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { blue, green, orange, purple } from "@material-ui/core/colors";
function Share() {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						src="/assets/person/psbe.jpg"
						alt=""
						className="shareProfileImg"
					/>
					<input placeholder="What's in your mind" className="shareInput" />
				</div>
				<hr className="shareHr" />
				<div className="shareBottom">
					<div className="shareOptions">
						<div className="shareOption">
							<PermMedia
								style={{ color: orange[500] }}
								className="shareIcon"
							></PermMedia>
							<span className="shareOptionText">Photo or Video</span>
						</div>
						<div className="shareOption">
							<Label style={{ color: blue[500] }} className="shareIcon"></Label>
							<span className="shareOptionText">Tag</span>
						</div>
						<div className="shareOption">
							<Room style={{ color: green[500] }} className="shareIcon"></Room>
							<span className="shareOptionText">Location</span>
						</div>
						<div className="shareOption">
							<EmojiEmotions
								style={{ color: purple[500] }}
								className="shareIcon"
							></EmojiEmotions>
							<span className="shareOptionText">Feelings</span>
						</div>
					</div>
					<button className="shareButton">share</button>
				</div>
			</div>
		</div>
	);
}

export default Share;
