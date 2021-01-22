
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];

var gen_nums = [];
var stringOfNums1 = [];
var stringOfNums2 = [];

var secondStringOfNumbersCount = 0;
var firstElement;
var GamePlayer1;

var count = 0

function in_array(array, el) {
     for(var i = 0 ; i < array.length; i++)
       if(array[i] == el) return true;
   return false;
}

function get_rand(array) {
    var rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(gen_nums, rand)) {
       gen_nums.push(rand);
       return rand;
    }
    return get_rand(array);
}


for(var i = 0; i < 52; i++) {
//    document.write(get_rand(nums));
    if (i < 26) {
    stringOfNums1[i] = (get_rand(nums));
    }
    if (i >= 26) {
    stringOfNums2[secondStringOfNumbersCount] = (get_rand(nums));
    secondStringOfNumbersCount ++;
    }
}
console.log(stringOfNums1);
console.log(stringOfNums2);

//  Great than or equal to secondStringOfNumbersCount


//
// var i = 0;
// do {

// {

//
// for (count = 0; count < 20; count++) {

// do {

if (stringOfNums1[count] > stringOfNums2[count])
{
  console.log("player 1 wins hand");
  console.log(stringOfNums1[count]);
  console.log(stringOfNums2[count]);
  const firstElement = stringOfNums1.shift();
//  stringOfNums2.push(firstElement);

//  stringOfNumbser2.push(firstElement);
  console.log(firstElement);
  console.log(stringOfNums1);
  console.log(stringOfNums2);
}
else {
  console.log("player 2 wins hand")
    console.log(stringOfNums1[count]);
    console.log(stringOfNums2[count]);
    const firstElement = stringOfNums2.shift();
  //  stringOfNumbser2.push(firstElement);
    console.log(firstElement);
    console.log(stringOfNums1);
    console.log(stringOfNums2);
}

// }

GamePlayer1 = stringOfNums1.length;
GamePlayer2 = stringOfNums2.length;

console.log(GamePlayer1);
console.log(GamePlayer2);
//
// }
// while (GamePlayer1 !== 0 || GamePlayer2 !== 0);
