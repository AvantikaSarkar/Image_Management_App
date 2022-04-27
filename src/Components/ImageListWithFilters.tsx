import React, { useState, useEffect } from "react";
import axios from "axios";
import Images from "./Images";

// eRAlk2vp5a-T_FavD6En_gRmpWAD4mjpZPQWezg0Ox0

function ImageListWithFilters() {
  const [imageData, setImageData] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?&per_page=20&client_id=eRAlk2vp5a-T_FavD6En_gRmpWAD4mjpZPQWezg0Ox0"
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getImages().then((imageData) => {
      const updated = imageData.map((item: any) => {
        return {
          id: item.id,
          name: item.alt_description || "Image",
          url: item.urls.thumb,
        };
      });
      setImageData(updated);
    });
  }, []);

  return (
    <div>
      <div>
        <div
          className="grid grid-cols-6 gap-4"
          style={{ border: "1px solid grey" }}
        >
          <div className="col-start-1 col-end-3 ">Select All</div>
          <div className="col-end-7 col-span-2 ">Search Bar</div>
          <div className="grid grid-cols-2"></div>
        </div>
        <span className="col-span-1">Sort By</span>
        <div className="col-start-3">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded">
            Title
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded">
            Date
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded">
            Size
          </button>
        </div>
      </div>
      <Images imageList={imageData} />
    </div>
  );
}

export default ImageListWithFilters;
