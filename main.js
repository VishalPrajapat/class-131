objects=[];
status="";
video="";
function preload(){
video=createVideo("video.mp4");
video.hide();
}
function setup(){
   canvas=createCanvas(400,330) ;
   canvas.center();
}
function start(){
   objectDetector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("id2").innerHTML="Detecting Objects";
}
function gotResult(error,results){
if(error){
   console.log(error);
}
console.log(results);
objects=results;
}
function modelLoaded(){
console.log("ModelLoaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);
status=true;
}
function draw(){
   image(video,0,0,400,330);
   if(status !=""){
      objectDetector.detect(video,gotResult);
      for(i=0;i<objects.length;i++){
         document.getElementById("status").innerHTML="Status:Object Detected";
         document.getElementById("id1").innerHTML="Status:Number of Objects Detected Are:"+objects.length; 
         fill('red');
      percent =floor(objects[i].confidence*100);
      text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
      nofill();
      stroke("FF0000");
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
   }
}  
}