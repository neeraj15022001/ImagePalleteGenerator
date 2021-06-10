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
  img.forEach((image) => {
    let card = image.parentElement.children;
    const dominantColorContainer = card[2].children[1];
    const paletteColorContainer = card[2].children[3].children[0].children;
    const palette1 = paletteColorContainer[0];
    const palette2 = paletteColorContainer[1];
    const palette3 = paletteColorContainer[2];
    if (image.complete) {
      let colorArray = colorThief.getColor(image);
      let hexCode = rgbToHex(colorArray[0], colorArray[1], colorArray[2]);
      dominantColorContainer.style.backgroundColor = hexCode;
    } else {
      image.addEventListener("load", function () {
        let colorArray = colorThief.getColor(image);
        let hexCode = rgbToHex(colorArray[0], colorArray[1], colorArray[2]);
        dominantColorContainer.style.backgroundColor = hexCode;
        let paletteColorArray = colorThief.getPalette(image, 3);
        let color1 = paletteColorArray[0];
        let color2 = paletteColorArray[1];
        let color3 = paletteColorArray[2];
        const color1hex = rgbToHex(color1[0], color1[1], color1[2]);
        const color2hex = rgbToHex(color2[0], color2[1], color2[2]);
        const color3hex = rgbToHex(color3[0], color3[1], color3[2]);
        palette1.style.backgroundColor = color1hex;
        palette2.style.backgroundColor = color2hex;
        palette3.style.backgroundColor = color3hex;
      });
    }
  });
};
