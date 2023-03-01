const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display")
     
buttons.forEach(function(eachButton) {

  eachButton.addEventListener('click', calculate);
});


function calculate () {

const buttonResult = this.value;

  if (buttonResult === '=') {
        if (display.value !== '') {
          display.value = eval(display.value);
    }
  } else if (buttonResult === 'C') {
        display.value = '';
  } else {
      display.value += buttonResult;
  }
}