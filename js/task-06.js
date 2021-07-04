// const inputRef = document.querySelector('#validation-input');
// inputRef.addEventListener('focus', focusInputRef)
// function focusInputRef(event) {
//     const inputLength = Number(event.target.dataset.length);
//     const inputValue = event.target.value.length;
//     if (inputValue === inputLength) {
//         inputRef.classList.add('invalid');
//         inputRef.classList.remove('valid');
//     } else {
//         inputRef.classList.remove('invalid');
//         inputRef.classList.add('valid');
//     }
//     console.log(inputLength)
//     console.log(inputValue)
//     console.log(inputLength === inputValue)
// }


const input = document.querySelector("input#validation-input");
console.log(input);

const blurInput = (event) => {
  if (
    event.currentTarget.value.length === +input.getAttribute("data-length")
  ) {
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
};

const focusInput = (event) => {
  if (event.currentTarget.classList.contains("valid")) {
    event.currentTarget.classList.remove("valid");
  } else {
    event.currentTarget.classList.remove("invalid");
  }
};

input.addEventListener("blur", blurInput);
input.addEventListener("focus", focusInput);