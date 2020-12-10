import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.iframe}
      type="text/html"
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <div>{snippet.title}</div>
    <div>{snippet.channelTitle}</div>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
