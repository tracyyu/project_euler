var isPalindrome = function(nr){
    rev = 0;                    // the reversed number
    x = nr;                     // store the default value (it will be changed)
    while (x > 0) {
      rev = 10 * rev + x % 10;
      x /= 10
      x = Math.floor(x);
    }
    return (nr == rev); 
};

max = 100001;

for ( i = 913 ; i >= 912 ; i--) {
  if ( max >= i*999 ){ 
    break;
  }
  for (j = 993 ; j >= 993 ; j-- ) {             
    p = i * j;
    if ( max < p && isPalindrome(p) ) {
      max = p;
    }
  }
}       

return max;