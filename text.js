//Declared global variable
const textInput = document.getElementById("txtInput");
const addSpaceCheckbox = document.getElementById("space");
const addNewlineCheckout = document.getElementById("newline");
const addPeriodCheckout = document.getElementById("period");
const repetitionInput = document.getElementById("rep");
const outputBox = document.getElementById("outPut");
const repeatButton = document.getElementById("repBtn");
const word = document.getElementById("word");
const char = document.getElementById("char");
const copyButton = document.getElementById("copyButton");
const alertBox1 = document.getElementById("alertBox1");
const alertBox2 = document.getElementById("alertBox2");
const alertBox3 = document.getElementById("alertBox3");
const alertBox4 = document.getElementById("alertBox4");

//Clear button
function clearInput() {
  word.textContent = "0";
  char.textContent = "0";
  textInput.value = "";
}

//numbers of character and word
function updateLength() {
  var length = textInput.value.length;
  char.textContent = length;

  var input = textInput.value;
  var wordCount = 0;

  if (input.trim() !== "") {
    wordCount = input.trim().split(/\s+/).length;
  }

  document.getElementById("word").textContent = wordCount;
}

function scroll() {
  const targetElement = document.getElementById("targetSection");
  
  targetElement.scrollIntoView({ behavior: 'auto' });
}

//Repeat function
 repeatButton.addEventListener("click", function() {
  //Get user input
  const text = textInput.value;
  const repetition = repetitionInput.value;
  const repetitions = parseInt(repetition);
  const addSpace = addSpaceCheckbox.checked;
  const addNewline = addNewlineCheckout.checked;
  const addPeriod = addPeriodCheckout.checked;

  //Generate repeated text
  if (text === "") {
    alertBox1.style.display = "flex";
    setTimeout(function() {
      alertBox1.style.display = "none";
    }, 3000);
  }
  else if (text !== "" && repetition === "") {
    alertBox2.style.display = "flex";
    setTimeout(function() {
      alertBox2.style.display = "none";
    }, 3000);
  } else {

  //scroll to output
  

  let repeatedText = "";
  for (let i = 0; i < repetitions; i++) {
    repeatedText += text;

    if (addPeriod) {
      repeatedText += ".";
    }
    if (addSpace) {
      repeatedText += " ";
    }
    if (addNewline) {
      repeatedText += "\n";
    }
  }

  //Display output
  outputBox.textContent = repeatedText;

  scroll();
}});

//Event listener for copy button
copyButton.addEventListener("click", function() {
  //copy text from outputbox to clipboard
  const textToCopy = outputBox.textContent;

  if (textToCopy === "") {
    alertBox3.style.display = "flex";
    setTimeout(function() {
      alertBox3.style.display = "none";
    }, 3000);
  } else {
  //create a temporary teaxtarea element to hold the text
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;

  //append the textarea to the document
  document.body.appendChild(tempTextarea);

  //select the text in the textarea
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); //for mobile device

  //copy the selected text to the clipboard
  document.execCommand("copy");

  //remove the temporary textarea
  document.body.removeChild(tempTextarea);

  //provide feedback to the user
  alertBox4.style.display = "flex";
  setTimeout(function() {
    alertBox4.style.display = "none";
  }, 3000);

}});
