import React from "react";
import loading from "./loading.gif";
const Loading = () => {
  return (
    <div className="text-center">
      <img src={loading} style={{ width: "40px" }} alt="loading" />
    </div>
  );
};

export default Loading;
