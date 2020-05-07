
$(function () {

  $(".modal-action__btn").on("click", function (e) {
    e.preventDefault();
    $("#modal").css("display", "block");
    $("#modal-window").animate({ display: "block" }, {
      start: function () {
        $("#modal-window").fadeIn(500);
      }, queue: false
    }).animate({ top: "300px" }, { duration: 600, queue: false });
  
  })
  
  function isModalWindow(e) {
    let window = $("#modal-window");
    let offset = $(window).offset();
    let width = $(window).width();
    let height = $(window).height();
    return (offset.left < e.pageX && e.pageX < offset.left + width && offset.top < e.pageY && e.pageY < offset.top + height);
  }
  
  $("#modal").on("click", function (e) {
    if (!isModalWindow(e)) {
      $(this).css("display", "none");
      $("#modal-window").removeAttr("style");
    }
    else {

    }
    
  })
})
