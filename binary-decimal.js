// Problem
// Given any binary number convert it into decimal format
// Sample Input - 10001
// Sample Output - 17
// Submission Image/Video Instructions
// Screenshot of the output for the numbers 10101, 1001001


var n="10001";
var s=0;
for(var i=n.length-1;i>=0;i--)
{
    s+=n.charAt(i)*(2**i);
}
console.log(s)