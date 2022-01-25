left_eye_x=0;
right_eye_x=0;
left_eye_y=0;
right_eye_y=0;
function draw(){
    image(video, 0, 0, 300, 300);
    image(righty ,right_eye_x, right_eye_y, 30, 30);
    image(lefty ,left_eye_x, left_eye_y, 30, 30);
}
function preload(){
    righty=loadImage('https://i.postimg.cc/gcDkVWFZ/Left-Eye.png');
    lefty=loadImage('https://i.postimg.cc/GtRzPDDv/df412d54345ac0c9dfc3951ba90ae83c.png');
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function takeSnapshot(){
    save('Anime You.png');
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_eye_x=results[0].pose.leftEye.x -15;
        right_eye_x=results[0].pose.rightEye.x -15;
        left_eye_y=results[0].pose.leftEye.y -15;
        right_eye_y=results[0].pose.rightEye.y -15;
    }
}