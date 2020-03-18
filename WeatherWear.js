/*Weather wear
Create a function (that you have to name) that has temperature as parameter. 
Based on the temperature it should return a string with what the user should wear. 
You decide what the user should wear based on the temperature.
An example is:

const clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt" */

function whatToWear(temp)
{
    if(temp <= 25) return "Wear winter outfit!";
    else if(temp <= 35) return "Beach shirts it is!";
   else return "Wear a lot of sunscreen!!!";
}


console.log(whatToWear(18));
console.log(whatToWear(30));
console.log(whatToWear(45));



