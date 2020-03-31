var puzzleAtion = (function (sent) {
  var output = "";

  return output;
})

$(document).ready(function () {
  $("#textForm").submit(function (event) {
    var input = $("#sentence").val();
    var output = puzzleAtion(input);

    $("#output").append(output);
    event.preventDefault();
  });
});