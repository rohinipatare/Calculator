function display(number) {
  // alert(number);
  document.getElementById("screen").value += number;
}

// calculations
function calculate() {
  var input = document.getElementById("screen").value;
  var output = eval(input);
  document.getElementById("screen").value = output;
}

function clear_screen() {
  document.getElementById("screen").value = "";
}

function delete_one(){
  var del = document.getElementById("screen").value;
  document.getElementById("screen").value = del.slice(0, -1);
}

var input = document.getElementById("screen");
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validate(e);
  }
});

 function validate(e) {
    var text = e.target.value;
    var input_enter = document.getElementById("screen").value;
    var output = eval(input_enter);
    document.getElementById("screen").value = output;
  }