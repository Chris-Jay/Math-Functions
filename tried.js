var stem2 = {
  classroom:"F103",
  students:12,
}
	var x=prompt("classroom or students?");
	var lowercase=x.toLowerCase();
	if ((lowercase=="classroom") || (lowercase=="students")){
  window.alert(stem2[lowercase])
}
  
else {
	
	for (i=1; i<3; i++){
  var x=prompt("classroom or students?");
	var lowercase= x.toLowerCase();
	if ((lowercase=="classroom") || (lowercase=="students")){
  window.alert(stem2[lowercase])
  i=3;
}
else {
  window.alert("you tried" + i + " times");
  }
}
}