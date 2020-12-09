import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos);
  }, []);

  const handleSearch = (query) => {
    youtube
      .search(query) //
      .then(setVideos);
  };

  return (
    <>
      <SearchHeader onSearch={handleSearch} />
      <VideoList videos={videos} />
    </>
  );
};

export default App;
