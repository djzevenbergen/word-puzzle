var puzzleAtion = (function (sent) {
  var vowels = ["a", "e", "i", "o", "u"];
  var sentArrays = sent.split('');
  var output = [];

  for (var index = 0; index < sentArrays.length; index++) {
    if (vowels.includes(sentArrays[index])) {
      output.push("-");
    }
    else {
      output.push(sentArrays[index]);
    }
  }
  output.join("");
  return output;
})

$(document).ready(function () {
  $("#textForm").submit(function (event) {
    var input = $("#sentence").val();
    var output = puzzleAtion(input);

    document.getElementById("sentence").value = "";

    // $("#sentence").val() = "";

    $("#output").append(output);
    $("#output").append("<br>");
    event.preventDefault();

  });
});