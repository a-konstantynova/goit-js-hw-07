
const fontSizeControl = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

const onFontSizeControlInput = (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControl.addEventListener("input", onFontSizeControlInput);