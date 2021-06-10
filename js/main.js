const fakeloader = window.FakeLoader
$(document).ready(function () {
  fakeloader.init();
});
const container = document.getElementById("content-container");
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://api.unsplash.com/photos/random?client_id=_1weeO3Aemk77vWSkhZQV3P4ltVTV7CpWxaYPlWC7tw&count=30",
  requestOptions
)
  .then((response) => response.json())
  .then(async (result) => {
    console.log(result);
    for await (let image of result) {
      const imageURL = image.urls.regular;
      createElement(imageURL);
    }
    fakeloader.hideOverlay();
  })
  .catch((error) => console.log("error", error));

function createElement(imageURL) {
  const element = `
        <div class="col-12 col-md-6 col-lg-3 px-3 py-5">
          <div class="card shadow-sm border-0">
          
            <div class="card-img-top" style="height:20rem;width:100%;background:url(${imageURL});background-size:cover" /></div>
            <div class="card-body">
              <h5 class="card-title">Dominant Color</h5>
              <div
                class="rounded-circle bg-primary mb-3"
                style="height: 2.5rem; width: 2.5rem"
              ></div>
              <h5 class="card-title">Palette</h5>
              <div class="container-fluid px-2">
                <div class="row">
                  <div
                    class="rounded-circle bg-primary mx-lg-1"
                    style="height: 2.5rem; width: 2.5rem"
                  ></div>
                  <div
                    class="rounded-circle bg-primary mx-lg-1"
                    style="height: 2.5rem; width: 2.5rem"
                  ></div>
                  <div
                    class="rounded-circle bg-primary mx-lg-1"
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
