
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];

var cards2 = [
[1,	1, "2 of Spades"],
[2,	1, "2 of Clubs"],
[3,	1, "2 of Diamonds"],
[4,	1, "2 of Hearts"],
[5,	2, "3 of Spades"],
[6,	2, "3 of Clubs"],
[7,	2, "3 of Diamonds"],
[8,	2, "3 of Hearts"],
[9,	3, "4 of Spades"],
[10, 3, "4 of Clubs"],
[11, 3, "4 of Diamonds"],
[12, 3, "4 of Hearts"],
[13, 4, "5 of Spades"],
[14, 4, "5 of Clubs"],
[15, 4, "5 of Diamonds"],
[16, 4, "5 of Hearts"],
[17, 5, "6 of Spades"],
[18, 5, "6 of Clubs"],
[19, 5, "6 of Diamonds"],
[20, 5, "6 of Hearts"],
[21, 6, "7 of Spades"],
[22,	6, "7 of Clubs"],
[23,	6, "7 of Diamonds"],
[24,	6, "7 of Hearts"],
[25,	7, "8 of Spades"],
[26,	7, "8 of Clubs"],
[27,	7, "8 of Diamonds"],
[28,	7, "8 of Hearts"],
[29,	8, "9 of Spades"],
[30,	8, "9 of Clubs"],
[31,	8, "9 of Diamonds"],
[32,	8, "9 of Hearts"],
[33,	9, "10 of Spades"],
[34,	9, "10 of Clubs"],
[35,	9, "10 of Diamonds"],
[36,	9, "10 of Hearts"],
[37,	10, "Jack of Spades"],
[38,	10, "Jack of Clubs"],
[39,	10, "Jack of Diamonds"],
[40,	10, "Jack of Hearts"],
[41,	11, "King of Spades"],
[42,	11, "King of Clubs"],
[43,	11, "King of Diamonds"],
[44,	11, "King of Hearts"],
[45,	12, "Queen of Spades"],
[46,	12, "Queen of Clubs"],
[47,	12, "Queen of Diamonds"],
[48,	12, "Queen of Hearts"],
[49,	13, "Ace of Spades"],
[50,	13, "Ace of Clubs"],
[51,	13, "Ace of Diamonds"],
[52, 13, "Ace of Hearts"],
[53, 13, "Ace of Hearts"]
];

var gen_nums = [];
var stringOfNums1 = [];
var stringOfNums2 = [];
var warPoolOfCards = [];

var secondStringOfNumbersCount = 0;
var firstElement;
// var gamePlayer1;
// var gamePlayer2;

// var count = 0

var xq = 0;
var sizeOfPot = 0;

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

// originals
// for(var i = 0; i < 52; i++) {

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

//console.log(cards2[p2Card][0]); // card value 1-52
// console.log(cards2[p2Card][1]); // group value 1,2,3, (all 2's are in group 1, aces group 13)
// console.log(cards2[p2Card][2]); // face value of card

// var count = 0;
//
function playround() {
// console.log("player 1 cards");

  console.log (stringOfNums1[0]);
 var p1card = stringOfNums1[0];

 // console.log ("Group Value", cards2[p1card][1]);
 var p1cardGvalue = cards2[p1card][1];
// console.log ("Face Card Value", cards2[p1card][2]);

// console.log("player 2 cards");
  console.log (stringOfNums2[0]);
 var p2card = stringOfNums2[0];

// console.log ("Group Value",cards2[p2card][1]);
 var p2cardGvalue = cards2[p2card][1];
 console.log ("Face Card Value", p2cardGvalue);

  console.log("size of pot", sizeOfPot);

if (p1cardGvalue > p2cardGvalue) {
 console.log("player 1 wins hand");
  firstElement = stringOfNums1.shift();
  stringOfNums1.push(firstElement);
  firstElement = stringOfNums2.shift();
  stringOfNums1.push(firstElement);
//  console.log("first element",firstElement);
   console.log(stringOfNums1);
   console.log(stringOfNums2);

     console.log(warPoolOfCards.length);

     if (sizeOfPot > 0 ){
            for (var iH = 0; iH < sizeOfPot; iH++){
              console.log(warPoolOfCards)
             // stringOfNums2.push[warPoolOfCards[ib]];
             firstElement = warPoolOfCards.shift();
             stringOfNums1.push(firstElement);
             console.log(stringOfNums1);
             // console.log(warPoolOfCards)
             }
        sizeOfPot = 0;
           }


      }

if (p1cardGvalue < p2cardGvalue)
  {
  console.log("player 2 wins hand");
   firstElement = stringOfNums1.shift();
   stringOfNums2.push(firstElement);
   firstElement = stringOfNums2.shift();
   stringOfNums2.push(firstElement);
      console.log(stringOfNums1);
      console.log(stringOfNums2);

     console.log(warPoolOfCards.length);

      if (sizeOfPot > 0 ){
             for (var iH = 0; iH < sizeOfPot; iH++){
                // stringOfNums2.push[warPoolOfCards[ib]];
                console.log(warPoolOfCards)
                 firstElement = warPoolOfCards.shift();
                 stringOfNums2.push(firstElement);
                console.log(stringOfNums2);
                }
          sizeOfPot = 0;
          }
     }

 if (p1cardGvalue === p2cardGvalue){
   console.log("tie achieved horray");
   console.log(p1cardGvalue);
   console.log(p2cardGvalue);

   alert("War - Tie Happened");

   firstElement = stringOfNums1.shift();
     warPoolOfCards.push(firstElement);
   firstElement = stringOfNums2.shift();
       warPoolOfCards.push(firstElement);
   firstElement = stringOfNums1.shift();
     warPoolOfCards.push(firstElement);
   firstElement = stringOfNums2.shift();
       warPoolOfCards.push(firstElement);

        console.log(warPoolOfCards);
        console.log(stringOfNums1);
        console.log(stringOfNums2);

     sizeOfPot = warPoolOfCards.length;
   }
 }

 do {
 playround();
} while (stringOfNums1.length != 52 || stringOfNums2.length != 52);


if(stringOfNums1.length === 52){
  console.log("player 1 is the winner! with all the cards");
}
else {
  console.log("player 2 is the winner! with all the cards");
}
