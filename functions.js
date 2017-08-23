function calculateArea(width,height){
  //create a function that takes the parameters
var area=width*height;
//Multiply width and height parameters
return area;
//Value is returned

}
var x = prompt("Height?");
//asking user what is the height
var y = prompt("width?");
//asking user wwhat is the width
var wallOne = calculateArea(y,x);
//pass y and x to the calculateArea function
window.alert(wallOne);
//popup area to the screen