// Smooth scroll
function ScrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * 0.2);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;
  //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() {
      ScrollToResolver(elem);
    }, "25");
  } else {
    elem.lastjump = null;
  }
}
$(".mobile-menu ul")
  .find("a")
  .forEach(function(e) {
    e.addEventListener(
      "click",
      function(event) {
        event.preventDefault();
        ScrollToResolver($($(this).attr("href"))[0]);
      },
      false
    );
  });
