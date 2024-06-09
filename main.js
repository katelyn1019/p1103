camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="image" src="'+data_uri+'" >';
    });
}

function modelloaded(){
    console.log("model is loaded");
}

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TCGRpKBWH/model.json",modelloaded);

function check(){
    image = document.getElementById("image");
    model.classify(image,gotResult);
}

function gotResult(error,result){
  if (error) {
    console.log(error);
  }
 else{
    console.log(result);
    document.getElementById("result_name").innerHTML = result[0].label;
    document.getElementById("result_name2").innerHTML = result[1].label;
    prediction1 = result[0].label;
    prediction2 = result[1].label;
    speak();
    if (prediction1 == "fist") {
        document.getElementById("gesture1").innerHTML = "&#9994";
    }
    if (prediction1 == "thumbs up") {
        document.getElementById("gesture1").innerHTML = "&#128077";
    }
    if (prediction1 == "peace sign") {
        document.getElementById("gesture1").innerHTML = "&#9996";
    }
    if (prediction1 == "thumbs down") {
        document.getElementById("gesture1").innerHTML = "&#128078";
    }
    if (prediction1 == "disco") {
        document.getElementById("gesture1").innerHTML = "&#129304";
    }

    if (prediction2 == "fist") {
        document.getElementById("gesture1").innerHTML = "&#9994";
    }
    if (prediction2 == "thumbs up") {
        document.getElementById("gesture1").innerHTML = "&#128077";
    }
    if (prediction2 == "peace sign") {
        document.getElementById("gesture1").innerHTML = "&#9996";
    }
    if (prediction2 == "thumbs down") {
        document.getElementById("gesture1").innerHTML = "&#128078";
    }
    if (prediction2 == "disco") {
        document.getElementById("gesture1").innerHTML = "&#129304";
    }
    
 }
}