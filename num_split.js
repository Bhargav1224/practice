// Given a number (can be any no of digits) Split it
//  in the mentioned array format
// Sample Input - 800981
// Sample Output - [800000, 900, 80, 1]
// Submission Image/Video Instructions
// Screenshot of the out for the numbers 2020, 339124, 100,6

var n="6";
var arr=[];
var str="";
var l=n.length-1;
for( var i=0; i<n.length ;i++)
{
    if(n.charAt(i)==0){
        l--;
        continue;
      }
    str="";
    str+=n.charAt(i);
    for(var j=0 ;j<l ;j++)
    {
       str+="0";
    }
    l--;
    str=parseInt(str)
    // console.log(str);
    arr.push(str);
    
}
console.log(arr);
