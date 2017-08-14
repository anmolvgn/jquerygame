function randomNumber() {
    var randomNumber = Math.floor(Math.random()*40)+1;
      for (var i = 0; i <= randomNumber.length; i++) {
        var sum = randomNumber;
      };
      console.log(randomNumber);
};
randomNumber();

console.log(sum);
$.("#white").on("click", function white (whiteNumber){
  var whiteNumber = Math.floor(Math.random()*20)+1;
  return this;
});
white();
console.log(sum + white);
// do the same type of logic for the othr 3 crystals. Use different ranges. make declaration
//that states sum/randomNumber = the sum of all four crystals. Another declaration made should
// state that each button should be added to equal the matching rsndomNumber.