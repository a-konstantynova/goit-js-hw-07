const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
function onInputChange() {
  return (nameOutput.textContent = nameInput.value);
}
nameInput.addEventListener('input', onInputChange);