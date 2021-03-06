window.FakeLoader = (function (e, o, i) {
  var a = {
      auto_hide: !0,
      overlay_id: "fakeloader-overlay",
      fade_timeout: 200,
      wait_for_images: !0,
      wait_for_images_selector: "body",
    },
    d = null,
    n = {
      hideOverlay: function () {
        d.removeClass("visible"),
          o.setTimeout(function () {
            d.addClass("hidden");
          }, a.fade_timeout);
      },
      showOverlay: function () {
        d.removeClass("hidden").addClass("visible");
      },
      init: function (l) {
        e.extend(a, l),
          e("#" + a.overlay_id).length <= 0
            ? ((d = e(
                '<div id="' +
                  a.overlay_id +
                  '" class="visible incoming"><div class="loader-wrapper-outer"><div class="loader-wrapper-inner"><div class="loader"></div></div></div></div>'
              )),
              e("body").append(d),
              "undefined" != typeof console &&
                "undefined" != typeof console.log &&
                console.log(
                  "You should put the fakeLoader loading overlay element in your markup directly for best results."
                ))
            : (d = e("#" + a.overlay_id)),
          d.click(function () {
            n.hideOverlay();
          }),
          e(o).bind("beforeunload", function () {
            e("#" + a.overlay_id)
              .removeClass("incoming")
              .addClass("outgoing"),
              n.showOverlay();
          }),
          e(i).ready(function () {
            1 == a.auto_hide &&
              ("function" == typeof e.fn.waitForImages && 1 == a.wait_for_images
                ? e(a.wait_for_images_selector).waitForImages(function () {
                    n.hideOverlay();
                  })
                : n.hideOverlay());
          });
      },
    };
  return n;
})(jQuery, window, document);
