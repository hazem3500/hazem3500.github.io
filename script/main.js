
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mars_sketch_vector.svg/2000px-Mars_sketch_vector.svg.png" alt="THE GREAT MARS the futrue banana land') {
      myImage.setAttribute ('src','http://www.dailyfreepsd.com/wp-content/uploads/2013/06/banana-vectordelicate-fruit.png');
    } else {
      myImage.setAttribute ('src','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mars_sketch_vector.svg/2000px-Mars_sketch_vector.svg.png" alt="THE GREAT MARS the futrue banana land');
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
