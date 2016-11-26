
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'MARS.png') {
      myImage.setAttribute ('src','banana.png');
    } else {
      myImage.setAttribute ('src','MARS.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('ENTER YOUR NAME NOW!.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'WELCOME BANANA, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'WELCOME BANANA, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
