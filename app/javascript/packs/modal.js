
$(function () {

  let appendHTML = `<div id="modal">
                      <div id="modal-window">
                        <div id="modal-window__title">
                          <h3>Title</h3>
                        </div>
                        <div id="modal-window__close">
                          <span class="close">X</span>
                        </div>
                        <div id="modal-window__desc">
                          <p>Hello everyone! Hello everyone!Hello everyone!Hello everyone!Hello everyone!</p>
                        </div>
                      </div>
                    </div>`


  $(".modal-action__btn").on("click", function (e) {
    e.preventDefault();
    // $("#modal-wrapper").append(appendHTML);
    // $("#modal-window").css("tranform", "translate(0, -200px)");
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
    // let window = $("#modal-window");
    // let offset = $(window).offset();
    // let width = $(window).width();
    // let height = $(window).height();
    if (!isModalWindow(e)) {
      $(this).css("display", "none");
      $("#modal-window").removeAttr("style");
    }
    else {

    }
    
  })
  // $(document).on("submit", "#new_user", function (e) {
  //   e.preventDefault();
  //   alert("success");
  // })
})
