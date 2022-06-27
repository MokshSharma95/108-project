 function startClassification()
    {
     navigator.mediaDevices.getUserMedia();
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VZ2yX3Ds7/' , modelReady);
    }
 function gotResults() {
   if (error){
      console.error(error);
  }
  else{
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255 ) + 1;
      random_number_g = Math.floor(Math.random() * 255 ) + 1;
      random_number_b = Math.floor(Math.random() * 255 ) + 1;

      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
 }
 
}
      
    