/*Housey pricey (A house price estimator)
Two of your friends are considering buying a house, but cannot figure out what the right price should be. 
Your friends know the width, the height and the depth of the house and the garden size. Lets help them figure out if they paid too much:

We have made our own formula for calculating the price of a house. This formula is VERY simplified and not at all close to the real calculation 
which can get quite complicated:

housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. 
The garden size is 100m2. The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. 
The garden size is 70m2. This house costs 1.000.000.

Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above. */

const COST = 2.5 * 1000;
const COST2 = 300;

const smallBill = 'You have paid too little for the house!';
const largeBill = 'You have paid too much for the house!';

let petesLength = 10;
let petesWidth = 8;
let petesHeight = 10;
let petesGarden = 100;
let petesHouse = 2500000;
let petesHousePrice = getVolume(petesLength, petesWidth, petesHeight) * COST + (petesGarden * COST2);

if(petesHousePrice < petesHouse)
console.log("Pete! " + largeBill);
else console.log("Pete! " + smallBill);

let julsLength = 11;
let julsWidth = 5;
let julsHeight = 8;
let julsGarden = 70;
let julsHouse = 1000000;
let julsHousePrice = getVolume(julsLength, julsWidth, julsHeight) * COST + (petesGarden * COST2);

if(julsHousePrice < julsHouse)
console.log("Juls! " + largeBill);
else console.log("Juls! " + smallBill);

function getVolume(length, width, height)
{
   return length * width * height;
}
