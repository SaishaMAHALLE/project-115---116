function preload() {

}

function setup() {
canvas=createCanvas(350, 350);
canvas.center();
video=createCapture(VIDEO);
video.size(350, 350);
video.hide();

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotposes);
}

function modelloaded() {
    console.log("Model is Loaded");
}

function draw() {
image(video, 0, 0, 350, 350);

}

function gotposes(result) {
    if(result.length > 0){
        console.log(result);
        console.log("nose x = " + result[0].pose.nose.x);
        console.log("nose y = " + result[0].pose.nose.y);
    }
} 

function take_snapshot() {
    save('filter_image.png');
}