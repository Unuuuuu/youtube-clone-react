import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos);
  }, [youtube]);

  const handleSearch = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos.map((video) => ({ ...video, id: video.id.videoId })));
          setSelectedVideo(null);
        });
    },
    [youtube]
  );

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleLogoClick = useCallback(async () => {
    await setSelectedVideo(null);
    youtube
      .mostPopular() //
      .then(setVideos);
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={handleSearch} onLogoClick={handleLogoClick} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={handleVideoClick}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
