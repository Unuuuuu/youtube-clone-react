import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ title, channelTitle, imgUrl }) => {
  return (
    <li className={styles.video}>
      <img className={styles.videoImg} src={imgUrl} alt="이미지"></img>
      <div className={styles.wrapper}>
        <span className={styles.videoTitle}>{title}</span>
        <span className={styles.videoChannelTitle}>{channelTitle}</span>
      </div>
    </li>
  );
};

export default VideoItem;
