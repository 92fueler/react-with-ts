import React, { useState } from "react";

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [onOff, setOnOff] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like} 👍
      </button>
      <button
        onClick={() => {
          setOnOff(!onOff);
        }}
      >
        {onOff ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default LikeButton;
