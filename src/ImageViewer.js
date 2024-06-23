import Image from "./Image";
import ImageNavBar from "./ImageNavBar";
import "./App.css";

function ImageViewer() {
  return (
    <div className="image-viewer">
      <Image />
      <ImageNavBar />
    </div>
  );
}

export default ImageViewer;
