/*Like before lets create three letiables but this time we call them dogYearOfBirth, dogYearFuture and dogYear. 
We add an extra letiable called shouldShowResultInDogYears. If it is true we should show the result in dog years,
 if it is false we should show it in human years. What do we call this type of letiable? 
Now log this string out: "Your dog will be 10 human years old in 2027" or "Your dog will be 70 dog years old in 2027" */
let dogYearOfBirth = 1994;
let dogYearFuture = 2027;

shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears)
{
    let dogYear = dogYearFuture - dogYearOfBirth;
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
}
else 
{
    let dogYear = (dogYearFuture - dogYearOfBirth) / 3;
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}