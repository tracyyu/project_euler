
var sum_of_multiples = function(){
	var limit = parseInt(document.getElementById('p1-limit').value);
	var sum=0;
	for(var i=1;i<limit;i++){
		if(i%3===0 && i%5===0){
			sum+=i;
		}
	}
	document.getElementById('p1_max').innerHTML = limit;
	document.getElementById('p1_answer').innerHTML = sum;
};




