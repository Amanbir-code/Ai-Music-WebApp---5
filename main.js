song="";
song2="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound("Sooryavanshi Theme.mp3");
    song2 = loadSound("Aila Re Aillaa - Sooryavanshi.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "righttWristY = " + righttWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);

    song1.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if(leftWrist > 0.2)
    {
        circle(leftWristX, leftWristY,20);
        song2.stop();
        
        if(song1 == stop)
        {
            song1.isPlaying()
            document.getElementById("song").innerHTML = "Song = " + song1;
        }
    }

    song2.isPlaying();

    if(rightWrist > 0.2)
    {
        circle(rightWristX, rightWristY,20);
        song1.stop();
        
        if(song2 == stop)
        {
            song2.isPlaying()
            document.getElementById("song").innerHTML = "Song = " + song2;
        }
    }
}