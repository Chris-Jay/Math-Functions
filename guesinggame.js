var user1=prompt("Pick a number between 1-6");
if((user1<1) || (user1>6)|| isNaN(user1)){
window.alert("you cannot follow directions")
}
else{
var user2=prompt("guess a number between 1-6");
if(user1==user2){
window.alert("you win")
}
else{
window.alert("User1 answer was" + user1);
window.alert("You chose" + user2);
}
}