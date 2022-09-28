// Get All Document Elements
const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const numberEl = document.getElementById("number");
const upperLetters = "ABCDEFGEHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*()_+|=-";


// Get Letters, Numbers And Symbols
function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generate Password
function generatePassword() {
    const len = lenEl.value;
    let password = "";
    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    pwEl.innerHTML = password;
}

// Control Checked Items
function generateX() {
    const xs =[];
    if (upperEl.checked) {
        xs.push(getUpperCase());
    }
    if (lowerEl.checked) {
        xs.push(getLowerCase());
    }
    if (numberEl.checked) {
        xs.push(getNumbers());
    }
    if (symbolEl.checked) {
        xs.push(getSymbols());
    }
    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)]
}

// Add Click Event
generateEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = pwEl.innerText;
    if(!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password copied to Clipboard")
})