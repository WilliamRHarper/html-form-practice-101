const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})

/*document.getElementByClassName('field').addEventListener('click', changeColor);

function changeColor() {
    this.contactMe.backgroundColor = "green";
    return false;
}

var elements = document.getElementsByClassName('field');
var i;

for (i = 0; i < elements.length; ++i) {
 elements[i].addEventListener('click', changeColor)  
}

function changeColor() {
    this.style.backgroundColor = this.getAttribute('data-color');
}*/

/*const changeColor = () => {
  

  const fields = document.getElementsByClassName("field")
    for (i=0; i < fields.length; i++) {
    fields[i].contactMe.background-color = green
  }  
}*/