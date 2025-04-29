//------------------------------------------------------
homeInput();
$(document).ready(function() {
  homeInput();
  $(window).resize(function() {
    homeInput();
  });
  AOS.init();
});

function homeInput() {
  var Vwidth = $(this).width();
  let max_w = 800;
  let max_w_change = 700;
  let font_size = 20;
  if (Vwidth <= 1440 && Vwidth > 600) {
    change(600);
  } else if (Vwidth <= 600) {
    change(Vwidth);
  } else {
    $("html").css("font-size", font_size * max_w_change / max_w + "px");
    $("section.block-2 .content").css("transform", "translate(-50% , -50%) scale(" + (max_w_change / max_w) * 1 + ")");
    // $("section.block-2 .content").css("transform", "translate(-50% , -50%) scale(1)");
  }

  function change(resize) {
    if ((font_size * resize) / max_w > 12) {
      $("html").css("font-size", "" + (font_size * resize) / max_w + "px");
    } else {
      $("html").css("font-size", "12px");
    }
    $("section.block-2 .content").css("transform", "translate(-50% , -50%) scale(" + (resize / max_w) * 1.02 + ")");
  }
}
//------------------------------------------------------