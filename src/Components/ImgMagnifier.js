import React, { useEffect, useRef } from "react";

const ImgMagnifier = (props) => {
  const imgContainer = useRef(null);
  const image = useRef(null);

  const handleMouseMove = (event) => {
    if (image.current && imgContainer.current && event.target.contains(image.current)) {
      const pos = imgContainer.current.getBoundingClientRect();
      const middleX = event.clientX - (pos.width / 2 + pos.x);
      const middleY = event.clientY - (pos.height / 2 + pos.y);
      image.current.style.scale = props.scale;
      image.current.style.left = -middleX * props.scale + "px";
      image.current.style.top = -middleY * props.scale + "px";
    }
  }

  const handleMouseEnter = () => {
    if (imgContainer.current) {
      imgContainer.current.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (imgContainer.current) {
        imgContainer.current.removeEventListener("mousemove", handleMouseMove);
      }
    }
  }

  const handleMouseLeave = () => {
    if (image.current) {
      image.current.style.scale = 1;
      image.current.style.left = 0;
      image.current.style.top = 0;
    }
  }

  return (
    <div
      ref={imgContainer}
      className={`img-box relative h-full w-full overflow-hidden cursor-move sca`}
      id={`img-box-${props.index}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={image}
        className={`object-contain relative`}
        src={props.src}
        alt=""
        id="img-scale"
      />
    </div>
  );
};

export default ImgMagnifier;
