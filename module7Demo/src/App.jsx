import { useState } from "react";
import ClockDisplay from "./Components/ClockDisplay";
import ActivityFinder from "./Components/ActivityFinder";
import RefCounter from "./Components/RefCounter";
import VideoPlayer from "./Components/VideoPlayer";
import ReducerCounter from "./Components/ReducerCounter";
import PostListReducer from "./Components/PostListReducer";

function App() {
  return (
    <>
      <ReducerCounter />
      <PostListReducer></PostListReducer>
    </>
  );
}

export default App;
