const variation1 = document.querySelector("#variation1")
const variation2 = document.querySelector("#variation2")
const variation3 = document.querySelector("#variation3")
const variation4 = document.querySelector("#variation4")
const variation5 = document.querySelector("#variation5")
const variation6 = document.querySelector("#variation6")
const variation7 = document.querySelector("#variation7")
const variation8 = document.querySelector("#variation8")
const variation9 = document.querySelector("#variation9")

const name = document.querySelector("#yourName");

function getNumberOfChars(name) {
  // return the number of characters in: name
  return name.length
}

function getFirstChar(name) {
  // return the first character of: name
  return name[0]
}

function getLastChar(name) {
  // return the last character of: name
  return name[name.length - 1]
}

function getMiddleChars(name) {
  // return all characters minus the first and last characters
  return name.substring(1, name.length - 1)
}

function getLowerChar(name) {
  // return name all in lower case (example: "ABC" becomes "abc")
  return name.toLowerCase();
}

function getUpperChar(name) {
  // return name all in upper case (example: "abc" becomes "ABC")
  return name.toUpperCase();
}

function getCapitalized(name) {
  // return a capitalized version of name (example: "alEX" becomes "Alex")
  return  name[0].toUpperCase() + name.substring(1).toLowerCase()
}

function getCapitalizedWords(name) {
  // return a capitalized version of name (example: "alex winter" becomes "Alex Winter")
  // get the first letter and capitalize it and return the rest of the name
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};


function getTrim(name) {
  // return name without trailing and leading space (example: " alex " becomes: "alex")
  return name.trim()
}

// listen for key events 
name.addEventListener("keyup", () => {
  // get the value of the input 
  const value = name.value;

  if(value == "") {
    variation1.textContent = ""
    variation2.textContent = ""
    variation3.textContent = ""
    variation4.textContent = ""
    variation5.textContent = ""
    variation6.textContent = ""
    variation7.textContent = ""
    variation8.textContent = ""
    variation9.textContent = ""
  } else {
    variation1.textContent = getNumberOfChars(value);
    variation2.textContent = getFirstChar(value);
    variation3.textContent = getLastChar(value);
    variation4.textContent = getMiddleChars(value);
    variation5.textContent = getLowerChar(value);
    variation6.textContent = getUpperChar(value);
    variation7.textContent = getCapitalized(value);
    variation8.textContent = getCapitalizedWords(value);
    variation9.textContent = getTrim(value);
  }

  console.log(value)
})