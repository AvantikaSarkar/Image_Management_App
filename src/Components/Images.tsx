import React from "react";
interface ImageObj {
  id: string;
  name: string;
  url: string;
}

interface Props {
  imageList: ImageObj[];
}

function Images({ imageList }: Props) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {imageList.map((i) => (
        <div id={i.id}>
          <img src={i.url} alt="no data" />
          <span>{i.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Images;
