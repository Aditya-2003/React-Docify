import React from "react";
import Card from "./Card";
import { useRef } from "react";

function Foreground() {
  const ref = useRef(null);
  
    const data = [
    {
      desc: "This is the Background Color of the Card that will be displayed",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "This is the Background Color of the Card that will be displayed",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "This is the Background Color of the Card that will be displayed",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
  ];

  return (
    <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
