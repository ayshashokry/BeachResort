import React from "react";
import LoadingGif from "../../images/gif/loading-arrow.gif";
export const Loading = () => {
  return (
    <div className="loading">
      <img src={LoadingGif} alt="Loading Rooms" className="" />
    </div>
  );
};
