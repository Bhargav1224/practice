// Given the width and height print a brick wall
//  [Full brick |___| (Pipe separated by 3 underscores)
//      Half brick __| or |__ (2 underscores) ]
// Sample brick wall of width four bricks and height 5 bricks
// |___|___|___|___|
// __|___|___|___|__
// |___|___|___|___|
// __|___|___|___|__
// |___|___|___|___|
// Submission Image/Video Instructions
// Screenshot of the output for width 10 bricks and height 6

seq='---|';
seq1='|---';
function brickWall(seq){
  w=10;
  h=6;
  for(i=0;i<h;i++){
    if(i%2==0)s="|";
    else{ s="--";}
    for(j=0;j<w;j++){
      if(i%2==0){
        s+=seq;
      }
      else{
        if(j==w-1){s+="|--";}
        else{  s+=seq1; }
      }
    }
    console.log(s);
  }
}
brickWall(seq);
