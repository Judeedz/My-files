/*Try out all the cases:
But there are some other requirements:
There can be only 6 students in a class. If more students are tried to be added, log out the following: "Cannot add more students to class 07".
The same person cannot be added to the class. If the same person is added to the class, log out the following: 
'Student Benjamin is already in the class' where Benjamin is substituted for the studentName.
We are very fond of our Queen in Denmark, so if the Queen is added to the class she should always get a space. 
Even if the class has been filled out.
You cannot add an empty string to a class

Add some students to the class.
Add more students than there is space for
Add a student that is already in the class
Add the Queen to a full class
Call the getNumberOfStudents to log out the number of students. */

const class07Students = [];
function addStudentToClass(studentName) {
    // You write code here
    if(isAlreadyStudent(studentName)) 
        console.log("Student " + studentName + " is already in the class.");
    else if(getNumberOfStudents() < 7 || isQueen(studentName)){
        class07Students.push(studentName);
    }else console.log("Cannot add more students to class 07");
}

function getNumberOfStudents() {
    // You write code here
    return class07Students.length;
}

function isAlreadyStudent(studentName){
    for(let i= 0; i<class07Students.length;i++){
        if(class07Students[i] == studentName)
        return true;
    }
    return false;
}

function isQueen(studentName)
{
    if(studentName == 'Queen') return true;
}

addStudentToClass('Ben');
addStudentToClass('Ken');
addStudentToClass('Ten');
addStudentToClass('Tom');
addStudentToClass('Tim');
addStudentToClass('Ben');
addStudentToClass('Thor');
addStudentToClass('Queen');

for(let student of class07Students)
{
    console.log(student);
}