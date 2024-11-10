import React, { useState } from "react";

const ProgressiveImage = ({ lowres, highres, alt }: string) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <img
        src={lowres}
        alt={alt}
        style={{
          display: loaded ? "block" : "hidden",
          width: "100%",
          filter: "blur(10px)",
          height: "100%",
        }}
      />
      <img
        src={highres}
        onLoad={() => setLoaded(true)}
        alt={alt}
        style={{
          display: loaded ? "block" : "hidden",
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
};

export default ProgressiveImage;
