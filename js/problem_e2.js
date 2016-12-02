var fibonacci_seq = function(){
	var limit = parseInt(document.getElementById('p2-limit').value);
	var sum = 0;
	var	x_0 = 0;
	var x_1 = 1;
	while(x_1 < limit){
	  if(x_1%2===0){
	    sum += x_1;
	  }
	  var temp = x_1;
	  x_1 += x_0;
	  x_0 = temp;
	}
	document.getElementById('p2_max').innerHTML = limit;
	document.getElementById('p2_answer').innerHTML = sum;
};