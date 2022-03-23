var c = document.getElementById("myCanvas"); //this is how to set up the canvas to work in js
var ctx = c.getContext("2d");  //everithing seems to have attached in the end, to this ctx



//for random color
function rcxy(){
let r = Math.floor(Math.random()*256);
let g = Math.floor(Math.random()*256);
let b = Math.floor(Math.random()*256);
ctx.fillStyle = "rgba("+r+","+g+","+b+")";
}





//draw random
function dr(x,y,xx,yy){  
ctx.fillRect(Math.random()*15+x,Math.random()*15+y,Math.random()*15+xx,Math.random()*15+yy);
}



rcxy();
dr(-15,-15,415,415);//background
rcxy();
dr(100,100,200,200);//face i
rcxy();
dr(100,100,200,200);//face ii
rcxy();
dr(100,100,200,200);//face iii
rcxy();
dr(130,150,50,40);//eye left big
dr(250,150,50,40);//eye right big
rcxy();
dr(150,160,20,30);//eye left small
dr(250,160,20,30);//eye right small
rcxy();
dr(150,170,10,5);//eye left smallest
dr(250,160,10,5);//eye right smallest
rcxy();
dr(150,130,45,5);//eye left brow
dr(250,130,45,5);//eye right brow
dr(150,130,25,5);//eye left brow2
dr(250,130,25,5);//eye right brow2
dr(150,130,35,5);//eye left brow2
dr(250,130,35,5);//eye right brow2
rcxy();
dr(150,250,110,10);//mouth i
dr(150,250,100,10);//mouth ii
dr(150,250,100,10);//mouth iii
rcxy();
dr(150,250,100,10);//mouth iiii
rcxy();
dr(100,75,200,25);//hair i
dr(100,75,200,25);//hair ii
dr(100,75,200,25);//hair iii


