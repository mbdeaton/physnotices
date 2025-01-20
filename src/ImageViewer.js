import Image from "./Image";
import ImageNavBar from "./ImageNavBar";
import "./App.css";
import ImageData from "./ImageData";

// TODO: do some useState here instead
let index = ImageData.TotalNumber();

function ImageViewer() {
  return (
    <div className="image-viewer">
      <Image index={index} />
      <ImageNavBar />
    </div>
  );
}

export default ImageViewer;
