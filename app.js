let inputSlider = document.querySelector("#inputSlider");
let sliderValue = document.querySelector("#sliderValue");
let passwordBox = document.querySelector("#passwordBox");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let genrateButton = document.querySelector("#button");
let copyIcon = document.querySelector("#copy-icon");

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

genrateButton.addEventListener("click", () => {
  passwordBox.value = genratePassword();
});

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%&";

// Function to genrate password

function genratePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerCase : "";
  allChars += uppercase.checked ? upperCase : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  for (i = 1; i <= inputSlider.value; i++) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return genPassword;
}

copyIcon.addEventListener("click", () => {
  if (passwordBox.value) {
    navigator.clipboard.writeText(passwordBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(() => {
        copyIcon.innerText = "content_copy" 
    }, 2000);
  }
});