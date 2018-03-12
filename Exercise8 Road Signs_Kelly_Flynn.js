var canvas = document.querySelector("#myCanvas"); //one way sign
var canvas1 = document.querySelector("#myCanvas1"); // road narrows sign
var ctx = canvas.getContext("2d"); 
var ctx1 = canvas1.getContext("2d");
ctx.save();	
ctx.lineJoin = "round";
ctx.fillStyle = 'blue'; // blue body one way sign
ctx.fillRect(50,50,220,275);

ctx.lineWidth = 10;			
ctx.strokeStyle = "blue";
ctx.strokeRect(50,50,220,275);//blue body one way sign
ctx.lineWidth = 4;			
ctx.strokeStyle = "white"; // white border one way sign
ctx.strokeRect(60,60,200,255);

ctx.fillStyle = "white"; // arrow for the one way sign
ctx.beginPath();     
ctx.moveTo(160,85);
ctx.lineTo(90, 150);
ctx.lineTo(130, 150);
ctx.lineTo(130, 290);
ctx.lineTo(190, 290);
ctx.lineTo(190, 150);
ctx.lineTo(230, 150);
ctx1.closePath();
ctx.fill();

ctx1.fillStyle = "white"; // white tringle body of the narrowing sign
ctx1.beginPath();     
ctx1.moveTo(155,40);
ctx1.lineTo(30, 245);
ctx1.lineTo(285, 245);
ctx1.closePath();
ctx1.fill();
ctx1.lineJoin = "round";   //red border for narrowing sign   
ctx1.strokeStyle = "red";
ctx1.lineWidth = 18;
ctx1.stroke();
      
ctx1.beginPath(); // second line for the narrowing sign
ctx1.moveTo(175,115);
ctx1.lineTo(175,223);
ctx1.lineWidth = 20;
ctx1.strokeStyle = "black";
ctx1.stroke();
      
ctx1.beginPath(); // first line for the narrowing sign
ctx1.moveTo(137,115);
ctx1.lineTo(137,150);
ctx1.lineTo(115,190);
ctx1.lineTo(115,223);
ctx1.strokeStyle = "black";
ctx1.stroke();
      
ctx.fillStyle  = "blue"; //One way wording
ctx.font = "bold 50px Arial";
ctx.fillText( "ONE WAY" ,45, 380);
ctx.restore();
ctx.fillStyle(250,50,100,100);


      