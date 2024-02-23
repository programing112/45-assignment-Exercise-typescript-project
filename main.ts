//assignment02
//let personName: string = "Rana Dawood";
//console.log(`Hello ${personName},  would you like to learn some Python today?`);

//assignment03
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//let personName: string = "Rana dawood";
//in lower case
//console.log("lowercase:", personName.toLowerCase());

//in uppercase
//console.log("uppercase:", personName.toUpperCase());

//in titlecare
//console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));

//assigment04
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
/**let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} one said, "${quote}"`);**/

//assigment05
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

/**let famous_person: string = "Albert Einstein";
let message: string = "A person who never made a mistake never tried anything new.";
console.log(`${famous_person} one said, "${message}"`);**/

//assignment06
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

/*let personName: string = "\t    Rana dawood   \n";
console.log("personName with whitespace", personName);
let strippedName: string = personName.trim();
console.log("without whitespaces", strippedName);*/

//assignment07
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//Addition
/*let A: number = 4;
let B: number = 4;
console.log(A+B);

//subtraction

let a: number = 12;
let b: number = 4;
console.log("subtraction result", a - b);

//division

let div1: number = 16;
let div2: number = 2;
console.log("division value", div1/div2);

//multiplication
let mulValue1: number = 2;
let mulValue2: number = 4;
console.log("multiplication value", mulValue1 * mulValue2);*/

//assignmen08
/*You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.*/

/*console.log("-" .repeat(80));
console.log(5+3);
console.log("=" .repeat(80));
console.log(12-4);
console.log("_" .repeat(80));
console.log(2*4);
console.log("-" .repeat(80));
console.log(16/2);
console.log("-" .repeat(80));*/

//assignment09
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message

/*let favorite:number = 9;
let message: string = `my lucky number is ${favorite}`;
console.log(message);*/

//ASSignment10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
 
//this is a comment

//assignment11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

/*let friends: string[] = ["Ali", "usman", "Mehak", "shoaib"];
console.log(friends[2]);*/

//assignment12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

/*let friends: string[] = ["Ali", "Ramish", "shoabib", "Mehak"];

//loop each name in the array

 for (let friend of friends)
 {
    //personalized with the message
    console.log(`Good morning ${friend}, I hope you are having a fantastic day!`);
 }*/

 //assignment13

 //Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

 /*let favoriteTransportation : Array<[transporate:string, brand:string]> = [];
 favoriteTransportation.push(["sports bike", "honda" ]);
 favoriteTransportation.push(["car MG", "civic"]) ;
 //console.log(favoriteTransportation);
 favoriteTransportation.forEach(([transporate, brand]) =>{
    console.log(`I would like to own a ${transporate} ${brand} motorcycle.`);
 }

 )*/

 //assignment14
 //Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

 /*let guestlist: Array<string> = ["zia khan", "daniyal nagori", "Mehak alamgir"];
guestlist.forEach((guestName) =>{
    console.log(`Dear ${guestName} you are invited to dinner please join to night`);
}
)*/

//assignment15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

/*• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.*/

/*let guestlist: Array<string> = ["zia khan", "daniyal nagori", "Mehak alamgir"];

//step one

let guesthowcantmakeit :string = "Mehak alamgir";
console.log(`${guesthowcantmakeit}  cant make it dinner to night`);

//replace the name of guest

let newGuest :string = "erum";
let indexOfguesthowcantmakeit : number = guestlist.indexOf(guesthowcantmakeit);
//console.log(indexOfguesthowcantmakeit);
if(indexOfguesthowcantmakeit !== -1) {
    guestlist[indexOfguesthowcantmakeit] = newGuest
}

//step 3 Print a second set of invitation message
console.log("second set of invitation message:")
guestlist.forEach((guest:string) => {
    console.log(`dear ${guest} you are invited to diner to night`);
})*/

//assignment16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
 • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

/*let guestlist: Array<string> = ["zia khan", "daniyal nagori", "Mehak alamgir"];

//excise 16

//step 1 informing people that you found a bigger dinner table.
for(let guest of guestlist){
    console.log(`Hello ${guest} we will found a bigger dinner table.`);
}

//step 2 add one new guest to the beginning of your array.
let newGuest: string = "Malaika abbas"
guestlist.unshift(newGuest)

console.log(guestlist);
// step 3 Add one new guest to the middle of your array
let middleindex:number = Math.floor(guestlist.length/2)
guestlist.splice(middleindex , 0, newGuest)

//console.log(guestlist);

//step 4 

let newGuestiatend:string = "Kashif"
guestlist.push(newGuestiatend);
console.log(guestlist);

//final step 
console.log("new set of invitation messages");
for(let guest of guestlist){
    console.log(`dear ${guest}, you are invited to night`);
}*/

//assignment17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program*/

/*let guestlist : Array<string> = ["malaika abbas", "daniyal nagori", "mehak alamgir", "zia khan", "kashif" ];
 //message about only two people
 console.log(`${guestlist}i can only invited two people for dinner`);

 //removed guest from the list untill only two people invited.

 while(guestlist.length > 3){
    let removedguest = guestlist.pop()
    console.log(`sorry ${removedguest} we are not invited you because party is cancelled`)
 }

 //step 3 a message to each of the two people still on your list, letting them know they’re still invite.

 for(let guest of guestlist){
    console.log(`Hello ${guest},you are still invited for dinner`);
 }

 //4 parts Remove the last two names from your list, so you have an empty list.!
 guestlist.pop();
 guestlist.pop();
 guestlist.pop()
 //print empty nstring
 console.log(`guest list is empty:`, guestlist);*/

 //assignment18

 /*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed*/

//step 1
/*let locations: string[] = ["london", "dubai" , "paris" , "saudia Arab", "USA"];
console.log("original array!")
console.log(locations);

//steps 3

let sortedarray: string[] = locations.slice().sort();
console.log("Array in alphabetical order:", sortedarray);

//step 4 Print your array in reverse alphabetical order without changing the order of the original list.
console.log("show array  of the original list");
console.log(locations);

//step 5
console.log("/n reverse alphabetical order without modifying the actual list")
console.log([...locations].sort().reverse());

//step 6  Show that your array is still in its original order by printing it again.!
console.log("now again showing my array in original order!");
console.log(locations);

//step 7 Reverse the order of your list. Print the array to show that its order has changed!
console.log("Reverse the order of your list");
locations.reverse();
console.log([...locations].sort().reverse());

//step 8 Reverse the order of your list again. Print the list to show it’s back to its original order!.
console.log("/n back to original order");
locations.reverse();
console.log([...locations].sort().reverse());

//step 9 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been change!

console.log("\n changed aalphabetical order!")
locations.sort();
console.log(locations);

//step 10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed*!
console.log("\n changed reverse alphabetical order!");
locations.sort().reverse();
console.log(locations);*/

//assignment19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner!.

/*let guestlist: Array<string> = ["zia khan", "daniyal nagori", "Mehak alamgir"];
console.log(`\n printing message to indicating number of guests`);
console.log(`we had finally invited ${guestlist.length} guest in exercise 15!`);*/

//assignment20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

/*const pakrivers: string[] = ["indus river", "jhelum river", "sutlej river", "chenab river"]; 
console.log("list of river in pakistan!");
for(let river of pakrivers){
    console.log(river);
}*/

//Assignment21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

/*let myObject: {name:string , fname: string, age:number}= {
     name: "Zia Khan",
     age : 63,
     country: "Pakistan",
     Description: "Ceo of two software house and head of PIACI could  be one of the most powerful man in Pakistan.",
}
// define in array of objects!
let  objects:Array<typeof myobject> = [];

//pushing multipul objects!
objects.push(myobject);
objects.push( //creating new object using spread operator!

console.log("\nPrinting all the elements of array of objects!");*/

//assignment22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program!

//function to create a fruit object
/*function CreateFruit(name:   string, color: string, taste: string) {
    return{
        name,
        color,
        taste,

    }
}
//create an array of fruite
const fruits =[CreateFruit("apple", "banana", "orange")
,CreateFruit("banana", "orange", "orange"), CreateFruit("mango","yellow","tart")] ;
// access an invalid index
const invalidIndex = 10; // there are only 3 element in the array, so this will cause an error
console.log(`Fruit at index ${invalidIndex}:`, fruits [invalidIndex]);

//print the fruits
fruits.forEach((fruit)=>{
    console.log(`Name: ${fruit.name},color:${fruit.color},Taste:${fruit.taste}`);
});*/

//assignment23
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car = "sabaru";

/*console.log("Is car =='sabaru'? I predict True.");
console.assert(car === 'sabaru',"Test Failed");

console.log("Is car !='honda city'? I predict True.");

//console.assert(car!== 'honda city',"Test Failed");

//console.log("Is car =='subaru'? I predict false.");
//console.assert(car == 'SUBARU','Test Failed');

//console.log("Is car!== 'honda city'? I predict True.");

//console.assert(car!== 'honda city',"Test Failed");

console.log("is car.length == 6?  I predict true.");
console.assert(car.length ==6);

console.log("is car.length != 10? i predict true");
console.assert(car.length != 10, "test failed");

console.log("is car.length > 6? i predict true");

console.assert(car.length > 6, "test failed");

console.log("is car.length < 6? i predict true");

console.assert(car.length < 6, "test failed");

console.log("is car.length >= 6? i predict true");

console.assert(car.length >= 6, "test failed");

console.log("is car.length <= 6? i predict true");

console.assert(car.length <= 6, "test failed");

console.log("is car.length === 6? i predict true");

console.assert(car.length === 6, "test failed");*/

//assignment24
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

//Test for equality and inequality with strings

/*let str1: string = "HELLO";
let str2: string = "hello";
console.log(str1 === str2); //false
console.log(str1 !== str2); // true

//Test using the lower case function!

let str3: string = "HELLO WORLD";

console.log(str3.toLowerCase() === str3); //true

let str4: string = "hello world";

console.log(str3.toLowerCase() === str4.toLowerCase()); //false
console.log(str3.toLowerCase()!== str4.toLowerCase()); // true

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1: number = 10;
let num2: number = 20;

console.log(num1 === num2); //false

console.log(num1!== num2); //true

console.log(num1 > num2); //true

console.log(num1 < num2); //false

console.log(num1 >= num2); //true

console.log(num1 <= num2); //false

//Test using "and" and "or" operators

let num3: number = 10;
let num4: number = 20;

console.log(num3 && num4); //true

console.log(num3 || num4); //true

//Test whether an item is in a array

let arr1: Array<number> = [1, 2, 3, 4, 5];

console.log(arr1.includes(3)); //true  

//Test whether an item is not in a array

let arr2: Array<number> = [1, 2, 3, 4, 5];

console.log(arr2.includes(6)); //false*/


//assignment25

/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/

/*let alien_color = "green";

if (alien_color === "green") {
    console.log("You just earned 5 points!");
}

//second version
alien_color= "red";

if (alien_color === "green") {
    console.log("You just earned 5 points!");
}*/

//assignment26
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block*/

/*let alien_color = "green";

if (alien_color === "green") {
    console.log("You just earned 5 points!");
}else{
    console.log("You just earned 10 points!");
}

//second version( runs the else block)

alien_color= "red";

if (alien_color === "green") {
    console.log("You just earned 5 points!");
}

else {
    console.log("You just earned 10 points!");
}*/

//assignment27
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

/*let alien_color = "green";

if (alien_color === "green") {
    console.log("You just earned 5 points!");
}else if (alien_color === "yellow") {
    console.log("You just earned 10 points!");
}else if(alien_color === "red"){
    console.log("You just earned 15 points!");
}

//second version( runs the else block)

alien_color= "yellow";

if (alien_color === "green") {
    console.log("You just earned 5 points!");
}else if (alien_color === "yellow"){
    console.log("You just earned 10 points!");
}else if (alien_color === "red"){
    console.log("You just earned 15 points!");
}else{
    console.log("unknow alien_color ")
}

//third version( runs the else block)

alien_color= "red";

if (alien_color === "green") {
    console.log("You just earned 5 points!");
}else if (alien_color === "yellow"){
    console.log("You just earned 10 points!");
}else if (alien_color === "red"){
    console.log("You just earned 15 points!");
}else{
    console.log("unknow alien_color ")
}*/

//assignment28
/*Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/

//less than 2 year old, print a message that the person is boy.......
/*let age: number = 20;

if (age < 2) {
    console.log("You are a baby!");
}else if (age < 4){
    console.log("You are a toddler!");
}else if(age < 13){
    console.log("You are a kid!");
}else if(age < 20){
    console.log("You are a teenager!");
} else if (age < 65){
    console.log("You are an adult!");
}else{
    console.log("You are an elder!");
}*/

//assignment29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

//define the array of fruites
/*let favorite_fruits: string[] = ["apple", "mango", "banana", "orange"];

//check for specific  fruit in the array using includes() method
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
 if (favorite_fruits.includes("mango")){
    console.log("You really like mangos!");
}
 if (favorite_fruits.includes("orange")){
    console.log("You really like oranges!");
}
 if (favorite_fruits.includes("banana")){
     console.log("you realy like banana");

}*/

//assignment30
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

/*const username:string[] = ["admin", "Eric", "John", "dow", "mehak"] ;
 
function greetUsers(): void{
    for (let i = 0; i < username.length; i++) {
        if (username[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello " + username[i] + ", thank you for logging in again.");
        }
    }
}
greetUsers();*/

//assignment31
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
// empty array case
/*let userList: string[] = [];
 
//non-empty array case
let userNames:  string[] = ["admin","Eric", "John", "Dow"];
 
function greetUsers(usernames:string[]): void{
   if(userList.length == 0){
       console.log("We need to find some users!");
       return;
   }
   
   for (let i=0; i<userNames.length; i++){
       let index: number = userList.indexOf(userNames[i]);
       if (index !== -1) {
           console.log(`User ${userNames[i]} is already on the list.`);
           userList.splice(index,1); //remove it from our local copy so we don't double count
       }else{
           console.log(`Adding User ${userNames[i]} to the list`);
       }
   }
}

greetUsers(userNames);

//empty array case
userNames = [];
console.log("for empty username");
greetUsers(userNames);*/

//assignment32
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

/*let current_users:string[] = ["mehak alamgir", "daniyal nagori", "sir zia","ashfan","kashid"];

let new_users:string[] = ["mehak alamgir", "daniyal nagori", "sir zia","ashfan","kashid", "John", "JOHN"];

 // step 2
 function checkUserNames(current_users:string[], new_users:string[]) :void {
    const lowercasedCurrentusers = current_users.map(user => user.toLowerCase());
    
    for (const newuser of new_users) {
         const lowercasedNewuser = newuser.toLowerCase();
         
        if (lowercasedCurrentusers.includes(lowercasedNewuser)){
            console.log(`User ${newuser} is already on the list.`);
        } else {
            console.log(`Adding User ${newuser} to the list`)
        }
        }
        }
        checkUserNames(current_users, new_users);
        
         
                // step 4
                let usersToBeRemoved = ['ZIA','AshfaN']
                let updatedUsersList = current_users.filter((user)=>!usersToBeRemoved.includes(user.toUpperCase()))
                let updatedUsersList = current_users.filter((user)=>!usersToBeRemoved.includes(user.toUpperCase()))
                let updatedUsers = current_users.filter(user => !usersToBeRemoved.includes(user.toUpperCase()))
                let updatedUsersList = removeUsersFromList(usersToBeRemoved, lowecasedCurrentusers )
                console.log(`The updated user list is ${updatedUsersList}`)
                
function removeUsersFromList(removeUsers: string[], fromList: string[]): string[]{
   return fromList.filter((value)=>!removeUsers.includes(value));
}

 // step 5
let messages = ["Hello Zia", "How are you Ashfan?","I am doing good"];
console.log("Messages sent by users");
messages.forEach(message=>{
     let usernameStart= message.indexOf(' ')+1;
     let usernameEnd = message.indexOf('?')
     let username = message.substring(usernameStart , usernameEnd );   
     let messageStart = usernameEnd+1;
     let finalMessage = message.substring(messageStart);
     console.log(`Message from ${username}: ${finalMessage}`);
})*/

//assignment33
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/

/*let number:Array<number> = [1,2,3,4,5,6,7,8,9];
for(let i of number){
    let Ordinal:string
    if(i===1)
    {
       Ordinal="st"
    }else if (i==2){
      Ordinal="nd"
    } else if (i==3){
        Ordinal="rd"
    }else{
         Ordinal="th"
    }
    console.log(`${i}${Ordinal} number`);
}*/
/// assignment 34
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

/*let favorite_pizza :string[] = [ "Pepperoni", "Vegetarian", "Meat lovers"] ;
 
// print the name of each pizza using a for loop

console.log("my favorite pizza are")

for (let i=0; i< favorite_pizza.length; i++){
    console.log(`I like ${favorite_pizza[i]} pizza`);
}
// print a sentence for each pizza
console.log("I really love pizza!");
for (let i=0; i< favorite_pizza.length; i++) {
   console.log(`That's why I always order ${favorite_pizza[i]}, it is my number one choice.`); 
};
console.log( `And that's why I never get tired of eating pizza!`) */

//assignment35

/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/

/*let favorite_animals :string[] = [ "Dog", "Cat", "Hamster"] ;
 
// print the name of each animal using a for loop
console.log("My favorite animals are");
for (const animal of favorite_animals) {
    console.log(`I have a ${animal}`);
}

//printing a statement about each animal!
console.log(`\n statement about each animal!`);

for (const animal of favorite_animals) {
    if(animal === "Dog"){
        console.log(`A dog would make a great pet!`);
    }else if(animal === "Cat"){
        console.log(`A cat would make a great pet!`);
    }else if(animal === "Hamster"){
        console.log(`A hamster would make a great pet!`);
    
}
}

//common characteristic

console.log("what these animals have in common:");
console.log("any of these animals would make a great pet");*/

//assignment36
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
/*let makeshirt=(size:string, message:string):string=>{
    let shirt_size:string;
    if(size === "S"){
        shirt_size = "Small";
    }else if(size === "M"){
        shirt_size = "Medium";
    }else if(size === "L"){
        shirt_size = "Large";
    }else{
        shirt_size = "Invalid Size";
    }
    return `I have a ${shirt_size} shirt and I like ${message}`
}

 console.log(makeshirt("S", "I like this shirt"));

 //call the function

 let size: string = "medium";
 let message: string = "I like this shirt";
 makeshirt("medium");*/

 //assignment37
 /*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
  

 /*function makeShirt(size: string = "large", message:string = "i love typescript"): void
 { 
    return console.log(`size: ${size}, message:${message}`);
 }

 //large shirt with default mesage
 makeShirt();// output :size large , message: `i love typescript`
 
 //medium shirt with default mesage
 makeShirt("medium");// output :size medium, message: `i love typescript`
 
 //small shirt with different message
 makeShirt("small", "i like this shirt");// output :size large, message: `i like this shirt`*/

 //assignment38
 /*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/
 
 /*function describeCity(city: string, country: string = "Pakistan"): void
 { 
    return console.log(`${city} is in ${country}`);
 }
 
 describeCity("Karachi");// output :Karachi is in Pakistan
 
 describeCity("Lahore");// output :Lahore is in Pakistan
 
 describeCity("Mumbai");// output :Mumbai is in india*/

 //assignment 39
 /*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

 /*function cityCountry(city: string, country: string = "Pakistan"): string
 { 
    return `${city}, ${country}`;
 };
 
 cityCountry("Lahore");// output :Lahore, Pakistan
 
 cityCountry("karachi");// output :karachi,pakistan*/
 
 //assignment 40
 /*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album*/
 
 /*function makeAlbum(artist: string, album: string, number_of_tracks: number = 0): Object
 { 
    return {artist: artist, album: album, number_of_tracks: number_of_tracks};
 };
 
 let album1: Object = makeAlbum("<NAME>", "<NAME>", 10);
 let album2: Object = makeAlbum("<NAME>", "<NAME>", 10);
 let album3: Object = makeAlbum("<NAME>", "<NAME>", 10);
 
 console.log(album1);
 console.log(album2);
 console.log(album3);*/

 //assignment 41
 /*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

 //array of magicians names
 /*let magiciansNames: string[] = ["harry porter", "david", "copperfield", "hermions granger",];

 function show_Magicians(magicians: string[]): void
 {
    for (const magician of magicians) {
        console.log(magician);
    }
 }

show_Magicians(magiciansNames);*/

//assignment42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.//

 //array of magicians names
 /*let magiciansNames: string[] = ["harry porter", "david", "copperfield", "hermions granger",];

 function show_Magicians(magicians: string[]): void
 {
    for (const magician of magicians) {
        console.log(magician);
    }
 }
 
 function make_great(magicians: string[]): string[]
 {
    const greatmagicians:string[] =   magicians.map(magician=> `
    the great ${magician}`);
        return greatmagicians;
    }
 const greatMagicians: string[] = make_great(magiciansNames);
 show_Magicians(greatMagicians);*/

 //assigment43
 //Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name//

 //array of magicians names
 /*let magiciansNames: string[] = ["harry porter", "david", "copperfield", "hermions granger",];
 
 function show_Magicians(magicians: string[]): void
 {
    for (const magician of magicians) {
        console.log(magician);
    }
 }
 
 function make_great(magicians: string[]): string[]
 {
    const greatmagicians:string[] =   magicians.map(magician=> `
    the great ${magician}`);
        return greatmagicians;
    }
 const greatMagicians: string[] = make_great(magiciansNames);
 show_Magicians(greatMagicians);*/

 //assigment44
 /*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
 
 //array of sandwich items
 /*let sandwichItems: string[] = ["pepperoni", "mushrooms", "onions", "sausage",];
 
 function sandwichSummary(sandwich: string[]): void
 {
    for (const item of sandwich) {
        console.log(item);
        if(item.length ===0){
            console.log("you ordered an empty sandwish.please add some items");
        }else{
            sandwichItems.forEach((item, index)=>{
                console.log(` ${index + 1}. ${item}`);
            });
        }
    }
}
 
 sandwichSummary(sandwichItems);*/
 
 //assigment45 
 /*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

 function creatCar(manufacturer:string, model:string, ... properties: [string, any][]): any {
    const car: any = {
        manufacturer: manufacturer,
        model: model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
 }

 //example usage:
 const car1: any = creatCar("Honda", "Accord", ["color", "blue"]);
 console.log(car1);
 


 
 




 


