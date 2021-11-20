noseX=0;
noseY=0;

function preload(){
    goggle = loadImage('goggle.png');

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(goggle, noseX, noseY, 70,50 );
}
 function take_snapshot(){
     save('myFilterImage.png');
 }
 function gotPoses(results){
     if(results.length > 0)
     {
         console.log(results);
         noseX = results[0].pose.rightEye.x - 10 ;
         noseY = results[0].pose.rightEye.y - 20 ;
         console.log("nose x = " + noseX);
         console.log("nose y = " + noseY);
     }
 }
 function Change_glass_to_spectacle(){
     goggle = loadImage('goggle.png')
 }
 function Change_glass_to_heart_goggle(){
    goggle = loadImage('Heart goggle.png')
}
function Change_glass_to_sunglass(){
    goggle = loadImage('Sun Glass.png')
}
function Change_glass_to_oculus(){
    goggle = loadImage('Oculus Rift.png')
}
function Change_glass_to_eyepatch(){
    goggle = loadImage('Eye Patch.png')
}