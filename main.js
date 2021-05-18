Webcam.set({
width: 350,
height: 300,
image_format: "png",
png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function TakeSnap()
{
Webcam.snap(function(data_uri)
{document.getElementById("result").innerHTML = "<img id='CapSnap' src="+data_uri+" >"});}

console.log("ml5 version is ", ml5.version);

Classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/L5IkUOr38/model.json" ,ModelLoaded);
function ModelLoaded(){
    console.log(" Model Got Loaded ")
};

function check(){
img = document.getElementById("CapSnap");
Classifier.classify(img, gotResult)
};

function gotResult(error, result){
    if(error)
    {
        console.log(error);
    }

  else 
  {
      console.log(result);
      document.getElementById("result_object_name").innerHTML = result[0].label;
    document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
  }
}