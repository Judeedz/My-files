/*Event application
Another customer has contacted us. He works for a secret company that rimes with foogle. The customer works on their calendar application. 
They need some functionality to help with writing what weekday an event is held.
You specify how many days from today an event is being held. The function then figures out what weekday the event is being held. 
Here is an example:
Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.
// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"
// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"
You should get the today's day from the system.
Hint: use remainder operator, array indexes and investigate new Date in js. */

let today = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayOfWeek = days[today.getDay()];

function getEventWeekday(day){
    let eventDate  = (today.getDay() + day) % 7;
    return "Today is " + dayOfWeek + " and the event is in " + day + "day/s. Therefore the event will be held on " + days[eventDate];
}

console.log(getEventWeekday(2));
console.log(getEventWeekday(6));
console.log(getEventWeekday(4));
console.log(getEventWeekday(19));