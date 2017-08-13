function randomNumber() {
    var randomNumber = Math.floor(Math.random()*40)+1;
      for (var i = 0; i <= randomNumber.length; i++) {
        var sum = randomNumber;
      };
      console.log(randomNumber);
};
randomNumber();
$.('sum').document;
// function sum(randomNumber) {
//   for (var i = 0; i <= randomNumber.length; i++) {
//     sum = randomNumber(Math.floor(Math.random()*randomNumber.length));
//   };
// };
// sum();
console.log(sum);
$.("#white").on("click", function white (whiteNumber){
  var whiteNumber = Math.floor(Math.random()*20)+1;
  return this;
});
white();
console.log(sum + white);
