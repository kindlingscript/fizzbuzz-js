function fizzbuzz(number) {
  for (i = 1; i <= number; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      $(".container").append("<p>FizzBuzz</p>");
    } else if (i % 3 === 0) {
      $(".container").append("<p>Fizz</p>");
    } else if (i % 5 === 0) {
      $(".container").append("<p>Buzz</p>");
    } else {
      $(".container").append("<p>" + i + "</p>");
    }
  };
}

$(document).ready(function() {
  $("#submit-button").click(function(e) {
    e.preventDefault();
    var number = $("#input").val();
    fizzbuzz(number);
  });
});