let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/chiara.jpg') {
      myImage.setAttribute ('src','images/chiara2.jpg');
    } else {
      myImage.setAttribute ('src','images/chiara.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Inserisci il tuo nome.');
  if(!myName || myName === null) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Chiara è brava, ' + myName;
}
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
