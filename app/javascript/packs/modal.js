
$(function () {

  const modal_animation = () => {
    $("#modal-window").animate({ display: "block" }, {
      start: function () {
        $("#modal-window").fadeIn(500);
      }, queue: false
    }).animate({ top: "300px" }, { duration: 600, queue: false });
  }

  $(".link-to").on("click", function (e) {
    e.preventDefault();
    $("#modal").show();
  })

  $(".signup").on("click", function (e) {
    e.preventDefault();
    $(".signup-form").show();
    modal_animation();
  })

  $(".login").on("click", function (e) {
    e.preventDefault();
    $(".login-form").show();
    modal_animation();
  })
  
  function isModalWindow(e) {
    let window = $("#modal-window");
    let offset = $(window).offset();
    let width = $(window).width();
    let height = $(window).height();
    return (offset.left < e.pageX && e.pageX < offset.left + width && offset.top < e.pageY && e.pageY < offset.top + height);
  }

  const errors = ["email", "password", "password_confirmation"]

  const resetModal = (...props) => {
    props.forEach(function (prop) {
      $(`${prop}`).removeAttr("style");
    })
    errors.forEach(function (error) {
      $(`.error_${error}`).remove();
    })
  }
  
  $("#modal").on("click", function (e) {
    if (!isModalWindow(e)) {
      $(this).css("display", "none");
      resetModal("#modal-window", ".signup-form", ".login-form");
    }
    else {

    }
    
  })
})
