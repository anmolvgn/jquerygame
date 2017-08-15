var randomNumber = function randomNumber() {
    var randomNumber = Math.floor(Math.random()*146)+1;
    console.log(randomNumber);
};
randomNumber();
$("#mt").text;
var sum = whiteNumber + blueNumber + purpleNumber + goldNumber;
// console.log(sum);

var whiteNumber;
var blueNumber;
var purpleNumber;
var goldNumber;


function white (whiteNumber){
	var whiteNumber = Math.floor(Math.random()*20)+1;
  console.log(this);
};
$("#white").on("click", white());

function blue (blueNumber){
  var min = 21;
  var max = 31;
  var blueNumber = blueNumberFromRange(21,31);

  return Math.floor(Math.random()*(max-min+1)+min);

};
$("#blue").on("click", blue());

function purple (purpleNumber){
  var min = 43;
  var max = 53;
  var purpleNumber = purpleNumberFromRange(43,53);

  return Math.floor(Math.random()*(max-min+1)+min);

};

$("#purple").on("click", purple());

function gold (goldNumber){
  var min = 43;
  var max = 53;
  var goldNumber = goldNumberFromRange(43,53);

  return Math.floor(Math.random()*(max-min+1)+min);

};
$("#gold").on("click", gold());

// console.log(sum + white);


// do the same type of logic for the othr 3 crystals. Use different ranges. make declaration
// that states sum/randomNumber = the sum of all four crystals number assignments. Another 
// declaration made should state that the sum oc button values should be equal to the matching
// randomNumber.