import images from "./image_data.json";

export default class ImageData {
  static mapIdToImageData = ImageData.CreateMapFromObjectIds(images);

  static CreateMapFromObjectIds(array) {
    let obj = {};
    array.forEach((elem) => {
      obj[elem.id] = elem;
    });
    return obj;
  }

  static TotalNumber() {
    return images.length;
  }

  static Latest() {
    return images[images.length - 1];
  }
}
