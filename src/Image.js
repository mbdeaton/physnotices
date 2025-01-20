import "./App.css";
import ImageData from "./ImageData";

function Image({ index }) {
  return (
    <div className="image">
      <img
        src={ImageData.mapIdToImageData[index].url}
        alt={ImageData.mapIdToImageData[index].description}
      ></img>
    </div>
  );
}

export default Image;
