function init(){
//add your javascript between these two lines of code
  var button = document.getElementById("entrybutton");
  var textfield = document.getElementById("entryinput");
  var output = document.getElementById("textoutput");

  button.addEventListener('click', pressed)

  function pressed() {
  	alert("Joshua Davenport: "+textfield.value);
  	output.innerHTML = textfield.value;
  };
}
window.addEventListener('load', init);