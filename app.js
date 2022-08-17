// CHARACTER COUNT
const textArea = document.getElementById('message-textbox')
let charCounter = document.getElementById('char_count')
const maxCharNum = 1500;

const countChars = () => {
  // Calculate the number of characters entered into the textarea
  let numOfEnteredChars = textArea.value.length;
  // Calculate the number of characters left
  let counter = maxCharNum - numOfEnteredChars
  // Display this number in the span tag
  charCounter.textContent = counter + '/1500'

  if (counter === 0) {
    charCounter.style.color = '#DF5209';
  } else if (counter < 500) {
    charCounter.style.color = '#D39330';
  } else {
    charCounter.style.color = '#131C00';
  }
}

textArea.addEventListener('input', countChars)

let formBtn = document.getElementById('btnsubmit');

// FORM BUTTON EVENT LISTENER
formBtn.addEventListener('click', resetVal);

// Reset form values after submission
function resetVal() {
  const nameArea = document.getElementById('name');
  const inputArea = document.getElementById('email');
  const formField = document.getElementById('form-field');

  if (nameArea.value && inputArea.value && textArea.value) {
    formField.submit();
    formField.reset();
  }

  return false;
}
