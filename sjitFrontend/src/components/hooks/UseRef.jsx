import React, { useEffect, useRef } from "react";
import { useState } from "react";

const UseRef = () => {
  var [text, setText] = useState("hi");
  var previousRender = useRef();
  useEffect(() => {
    previousRender.current = text;
    console.log(previousRender.current);
  }, [text]);
  return (
    <div>
      <div>
        <h1>This is useref</h1>
        Type your text:{" "}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h2>The current render text is:{text}</h2>
        <h2>The previos render text is:{previousRender.current}</h2>
      </div>
    </div>
  );
};

export default UseRef;
