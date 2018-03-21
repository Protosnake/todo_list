//check off specific todos by clicking

$("ul").on("click", "li", function () {
  $(this).toggleClass("striked");
});

$("ul").on("click", "li span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function (e) {
  if(e.which === 13) {
    var item = $(this).val();
    $("ul").prepend('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + item + "</li>");
    $(this).val("");
  }
});

$(".fa-plus").on("click", function () {
  $("input").fadeToggle();
});
