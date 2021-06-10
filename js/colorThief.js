const colorThief = new ColorThief();

const rgbToHex = (r, g, b) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

const getColor = () => {
  const img = document.querySelectorAll(".newImage");
  // console.log(img)
  img.forEach((image) => {
    let card = image.parentElement.children;
    const dominantColorContainer = card[2].children[1];
    const paletteColorContainer = card[2].children[3].children[0].children;
    const pallete1 = paletteColorContainer[0];
    const palette2 = paletteColorContainer[1];
    const palette3 = paletteColorContainer[2];
    if (image.complete) {
      let colorArray = colorThief.getColor(image);
      let hexCode = rgbToHex(colorArray[0], colorArray[1], colorArray[2]);
      dominantColorContainer.style.backgroundColor = hexCode;
    } else {
      console.log("else");
      image.addEventListener("load", function () {
        console.log("in event");
        let colorArray = colorThief.getColor(image);
        let hexCode = rgbToHex(colorArray[0], colorArray[1], colorArray[2]);
        dominantColorContainer.style.backgroundColor = hexCode;
        console.log(image )
        colorThief.getPalette(image, 3)
          .then((palette) => {
            console.log(palette);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  });
  // Make sure image is finished loading
  //   if (img.complete) {
  //       console.log("completed")
  //     let colorArray = colorThief.getColor(img);
  //     console.log(colorArray);
  //     console.log(rgbToHex(colorArray[0], colorArray[1], colorArray[2]));
  //   } else {
  //       console.log("else")
  //     img.addEventListener("load", function () {
  //         console.log("in event")
  //         let colorArray = colorThief.getColor(img);
  //         console.log(colorArray);
  //         console.log(rgbToHex(colorArray[0], colorArray[1], colorArray[2]));
  //     });
  //   }
};
