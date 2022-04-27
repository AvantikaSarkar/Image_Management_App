import React from "react";

function Header() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Media Library</h1>
      <h5>Create, edit, and manage the media on your community.</h5>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Image
      </button>
    </div>
  );
}

export default Header;
