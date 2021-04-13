const fakeloader = window.FakeLoader;
const container = document.getElementById("content-container");
$(document).ready(function () {
  fakeloader.init();
});

("use strict");
function dragNdrop(event) {
  var fileName = URL.createObjectURL(event.target.files[0]);
  // var preview = document.getElementById("preview");
  // preview.style.backgroundImage = `url(${fileName})`
  createElement(fileName);
  getColor();
  // var previewImg = document.createElement("img");
  // previewImg.setAttribute("src", fileName);
  // preview.innerHTML = "";
  // preview.appendChild(previewImg);
}
function drag() {
  document.getElementById("uploadFile").parentNode.className =
    "draging dragBox";
}
function drop() {
  document.getElementById("uploadFile").parentNode.className = "dragBox";
}

function createElement(imageURL) {
  const element = `
          <div class="col-12 px-3 py-5">
            <div class="card shadow-sm border-0">
            <img src=${imageURL} alt="image_new" class="newImage d-none" crossorigin="anonymous" />
              <div class="card-img-top" style="height:20rem;width:100%;background:url(${imageURL});background-size:cover" /></div>
              <div class="card-body">
                <h5 class="card-title">Dominant Color</h5>
                <div
                  class="rounded-circle mb-3"
                  style="height: 2.5rem; width: 2.5rem"
                ></div>
                <h5 class="card-title">Palette</h5>
                <div class="container-fluid px-2">
                  <div class="row">
                    <div
                      class="rounded-circle mx-lg-1"
                      style="height: 2.5rem; width: 2.5rem"
                    ></div>
                    <div
                      class="rounded-circle mx-lg-1"
                      style="height: 2.5rem; width: 2.5rem"
                    ></div>
                    <div
                      class="rounded-circle mx-lg-1"
                      style="height: 2.5rem; width: 2.5rem"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `;
  container.innerHTML += element;
}
