videofile1="";
updatestatus="";
aray=[];
function preload(){
    videofile1=createVideo("video.mp4");
    videofile1.hide();
}
function setup(){
    canvas = createCanvas(480,350);
    canvas.center();

}
function draw(){
    image(videofile1,0,0,480,350);
    if(updatestatus !=""){
        code.detect(videofile1,gotResult);
        for(i=0; i < aray.length; i++){
            document.getElementById("status").innerHTML="Status : objects detected";
            document.getElementById("finally").innerHTML="Number of objects detected are :" + aray.length;

            fill("yellow");
            percent= floor(aray[i].confidence * 100);
            text(aray[i].label + " " + percent + "%", aray[i].x + 15,aray[i].y + 15);
            noFill();
            stroke("black");
            rect(aray[i].x, aray[i].y, aray[i].width, aray[i].height);
        }   
    }

}
function onions(){
    code = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelLoaded(){
    console.log("model is loaded");
    updatestatus = true;
    videofile1.loop();
    videofile1.speed(1);
    videofile1.volume(0);
}
function gotResult(error, result){
if(error){
    console.log(error);
}else{
    console.log(result);
    aray=result;
}
}