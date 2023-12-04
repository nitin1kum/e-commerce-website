import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ImgMagnifier = (props) => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [elementPosition, setElementPosition] = useState({
    xCor: 0,
    yCor: 0,
    width: 0,
    height: 0,
  });
  const [setter, setSetter] = useState(0);

  const mouseMoveHandler = (event) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    let element = document.getElementById(`img-box-${props.index}`);
    const position = element.getBoundingClientRect();
    function cursor() {
      setElementPosition({
        xCor: position.x,
        yCor: position.y,
        width: position.width,
        height: position.height,
      });
    }
    cursor();
    element.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      element.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [elementPosition]);

  return (
    <div
      className={`img-box relative h-min w-full overflow-hidden cursor-move sca`}
      id={`img-box-${props.index}`}
      onMouseEnter={() => {
        setSetter(1);
      }}
      onMouseLeave={() => {
        setSetter(0);
      }}
    >
      
        <img src={props.src} className="opacity-0" alt="" />
      <img
        className={setter?` object-cover absolute`:"absolute"}
        style={{
          top:
            -props.multiplier*
            setter *
            (mouseCoordinates.y -
              (elementPosition.yCor + elementPosition.height / 2)),
          left:
            -props.multiplier*
            setter *
            (mouseCoordinates.x -
              (elementPosition.xCor + elementPosition.width / 2)),
              transform:`scale(${setter?props.scale:1})`
        }}
        src={props.src}
        alt=""
        id="img-scale"
      />
    </div>
  );
};

export default ImgMagnifier;
