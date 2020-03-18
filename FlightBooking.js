/*Flight booking fullname function
On the flight website the user has the possibility to check a checkbox that indicates if the user wants to be adressed formally. 
Lets also change getFullname to include support for formal name.
Create an extra parameter useFormalName that is a boolean. If it is true the function should add a Lord in front of the name.
getFullname('Benjamin', 'Hughes', true); // returns "Lord Benjamin Hughes"`
getFullname('Benjamin', 'Hughes', false); // returns "Benjamin Hughes"
What do we do if useFormalName is not given as an argument?
Remember to consider someone calling the function with an empty string as firstname and lastname.
Try out your code by pasting your getFullname function in the javascript part of this codepen:
*/

function getFullname(firstname, surname, useFormalName){
    if(useFormalName) 
        return "Lord " + firstname + " " + surname;
    else
        return firstname + " " + surname;
}

let fullname1 = getFullname('Johl', 'Tambok');
let fullname2 = getFullname('Judz', 'Pogi', true);

 console.log(fullname1); 
 console.log(fullname2);