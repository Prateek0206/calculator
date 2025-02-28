let expression = ``;
let displayElement = document.querySelector(".js-display");

function calculation(append) {
  if (append === "Clear") {
    expression = '';

    console.log(displayElement.innerText);
  } else {
   

    expression += `${append}`;
  }
  displayElement.innerText = expression;
}

function result() {
  const finalResult = eval(expression);
  console.log(finalResult);
  displayElement.innerText = finalResult;
}
