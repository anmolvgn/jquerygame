function randomNumber() {
    // var randomNumber = Math.floor(Math.random()*146)+1;
    // return Math.floor(Math.random()*146)+1;
    Math.floor(Math.random() * (146)+1);
    console.log(randomNumber);
};
randomNumber();
$("#mt").text();
// var sum = whiteNumber + blueNumber + purpleNumber + goldNumber;
// console.log(sum);

// var whiteNumber;
// var blueNumber;
// var purpleNumber;
// var goldNumber;

function white (min, max){
	var min = 0;
  var max = 20;
  // $("#white").on("click", white());
  return Math.floor(Math.random()*(max-min+1)+min);
  // console.log(Math.floor(Math.random()*(max-min+1)+min));
  console.log(this);
};

$("#white").on("click", white(min,max));

function blue (min, max){
  var min = 21;
  var max = 31;
  $("#blue").on("click", blue(21, 31));
  return Math.floor(Math.random()*(max-min+1)+min);

  // $("#blue").on("click", blue(21, 31));

  // return blueNumber;  
  // console.log(blueNumber);
};
blue();

function purple (min, max){
  // var max = 53;
  // var min = 43;
  $("#purple").on("click", purple(32, 42));
  return Math.floor(Math.random()*(max-min+1)+min);
  // return purpleNumber;
  // $("#purple").on("click", purple(32, 42));
  console.log(min);
  // console.log(max);
};

purple();

function gold (min, max){
  // var min = 43;
  // var max = 53;
  $("#gold").on("click", gold(43,53));
  return Math.floor(Math.random()*(max-min+1)+min);

  // return goldNumber;
  // $("#gold").on("click", gold(43,53));
  // console.log(this);
};

gold();
// console.log(sum + white);


// do the same type of logic for the othr 3 crystals. Use different ranges. make declaration
// that states sum/randomNumber = the sum of all four crystals number assignments. Another 
// declaration made should state that the sum oc button values should be equal to the matching
// randomNumber.