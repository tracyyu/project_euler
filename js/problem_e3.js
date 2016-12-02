var lpf = function(){
    var x = Number(document.getElementById('p3-limit').value);
    var limit = x;
    var biggest=0;
    for(var i=2; i<=limit; i++){
        for(var l=1; l<=Math.sqrt(i); l++){
            if(l%i==0){
                break;
            } else{
                while(limit%i==0){
                    limit=limit/i;
                    biggest =i;
                }
            }
        }
    }
    document.getElementById('p3_max').innerHTML = x;
    document.getElementById('p3_answer').innerHTML = biggest;
};