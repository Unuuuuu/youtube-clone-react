import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos }) => {
  return (
    <ul className={styles.ul}>
      {videos.map((video) => {
        const {
          title,
          channelTitle,
          thumbnails: {
            default: { url },
          },
        } = video.snippet;
        return (
          <VideoItem
            key={video.id}
            title={title}
            channelTitle={channelTitle}
            imgUrl={url}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
