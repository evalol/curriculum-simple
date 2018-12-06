let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eye1X, eye1Y, eye2X, eye2Y;

function setup() {

    createCanvas(640, 480);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', getPoses);
}

function getPoses(poses) {

    if (poses.length > 0) {
        noseX = poses[0].pose.keypoints[0].position.x;
        noseY = poses[0].pose.keypoints[0].position.y;
    
        eye1X = poses[0].pose.keypoints[1].position.x + 6;
        eye1Y = poses[0].pose.keypoints[1].position.y + 6;
    
        eye2X = poses[0].pose.keypoints[2].position.x - 6;
        eye2Y = poses[0].pose.keypoints[2].position.y - 6;
    }
}

function modelReady() {
  console.log('model ready');
}

function draw() {

    image(video,20, 20);
  
    eye(eye1X, eye1Y, 80, 1);
    eye(eye2X, eye2Y, 80, -1);

    fill(239, 71, 111); // Coloreamos la nariz.
    ellipse(noseX, noseY, 50);
}

function eye(x, y, size, n) {
    
    let angle = frameCount * 0.3;
	console.log(frameCount);
	fill(255);
	noStroke();
	ellipse(x, y, size, size);
	
	fill(56);
	noStroke();
	ellipse(x + cos(angle * n) * size / 5, y + sin(angle * n) * size / 5, size / 2, size / 2);
}