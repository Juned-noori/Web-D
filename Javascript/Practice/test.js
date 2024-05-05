

// const accountId = 1444;
// let accountEmail = "junedahmed@gmail.com";
//     accountEmail = "ahmedjuned@gmail.com"

// let accountPassward = "aldjaldj";
// let accountCity = "sanawad";
// console.table([accountId, accountEmail, accountPassward, accountCity ])


// const whole = {
//     name : "juned",
//     surname : "ahmed",
//     city : "indore",
// }
// console.log(whole);


// let a = 10;
// ++a;
// console.log(a)

// let a = 10;
// a++;
// console.log(a)


// let a = 5;
// let b = 0;
//     b=a++
// console.log(b)

// let a = 6;
// let b = 0;
//     b=++a
// console.log(b)
/********************************************************{Datatypes in Javascript}*********************************************/


// let a = "Juned";
// let b = 33;
// let c = true;
// let d = 54654642n;
// let e = null;
// let f = undefined;

// let change = String(b)
// console.log(typeof change);
// console.log(b);

// let anotherChange = Boolean(a);
// console.log(typeof a);

// let all = (a + b + c);
// console.log(all);




// let myName = "Juned Ahmed"
// let hisName = myName;
// hisName = "Anas"
// console.log(myName,hisName);


// let user = {
//     Name : "Juned" ,
//     age : 16 ,
// }
// console.log(user);



// anotherUser = user;
// console.log(anotherUser);

// anotherUser.age = 12;
// console.log(anotherUser.age);

// anotherUser.Name = "Anas";
// console.log(anotherUser.Name);

// onechange = Number(Name);



// console.log(typeof user.age);


// let me = "Juned";
// let hisAge = 10;
// let isHeBoy = true;

// let change = String(hisAge);
// console.log(typeof change);




// const Name = "Juned";
// const age = 16;
// const Doyoulikejavascript = true;
// console.log(true);




// let MyAge = 16;
// let hisAge = 10;
// let sum = (MyAge-hisAge)
// console.log(sum);



// let Isitsunny = true;
// let Doyoulikepizza = false;



// const name = "juned";
// const score = 20;

// console.log(name + score);
// console.log('Hello my name is ${name} and i am learning javascipt ${score}');


//! String  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const gameName = new String('Juned-Ahmed');

// console.log(gameName);

// console.log(gameName[4]);
// console.log(gameName.length);
// console.log(gameName.indexOf('e'));
// console.log(gameName.charAt(6));
// console.log(gameName.toUpperCase());


// const newGameName = gameName.substring(0, 10);
// console.log(newGameName);

// const newGameName = gameName;
// console.log(newGameName.slice(-10, 5));


// const anotherName = "     Noori    ";
// console.log(anotherName);

// console.log(anotherName.trim());


// const url = "https://juned.com/junedahmednoori"

// console.log( url.replace('ahmed','-'));

// console.log(url.includes('ahmed'));
// console.log(url.includes('nooru'));

// console.log(url.toUpperCase());

// console.log(url.split('n'));

// console.log(url.search('noori'));
// console.log(url.search('//'));



// let nameone = new String("Juned_Ahmed")
// let nametwo = new String("_Noori")
// console.log(nameone.length);
// console.log(nameone.concat( ...nametwo));
// console.log(nameone.charAt(7));
// console.log(nameone.indexOf("n"));
// console.log(nameone.includes("med"));
// console.log(nameone.concat(...nametwo).toLocaleLowerCase().split("e"));
// console.log(nametwo.concat(...nameone).slice(0,11));


//? Number and Maths

//! Number+++++++++++++++++++++++++++++++++++++++

// let score = 200;
// console.log(score);


// let balance = new Number(100.6541)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

// const bigNumber = 4560010;
// console.log(bigNumber.toPrecision());
// console.log(bigNumber.toLocaleString());
// console.log(bigNumber.toLocaleString('en-IN'));



//! Maths+++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.8));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.2));
// console.log(Math.sqrt(525));
// console.log(Math.min(5, 8, 10, 1, 4));
// console.log(Math.max(5, 8, 150, 1, 4));


// console.log(Math.random());
// console.log((Math.random()*10) +1);
// console.log(Math.floor(Math.random()*10) +1);//?for one digit value


// const min = 10
// const max = 20

// console.log(Math.random() * (max - min + 1));
// console.log(Math.floor(Math.random() * (max - min + 1)));
// console.log(Math.floor(Math.random() * (max - min + 1))+ min);





//! DATE and TIME++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());



// let myNewDate = new Date(2023, 0, 14, 3, 5);
// console.log(myNewDate.toLocaleString());;
// console.log(myNewDate.getTime()); //? for milisecond 


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));



// let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay()+1);


// console.log(newDate.toLocaleString('default',{
//       weekday: "short",
//       era: "short",
// }
// ));



//!  Array   ============+++++++++++++++++++++++++++++++++++++++++++++++++++//

// console.log(myArray[1]);
// let myArray = [1, 2, 3, 4, 5, 6];
// let myArray2 = new Array(1, 2, 3, 4, 5)
// console.log(myArray);

// const myAllArray = {...myArray,...myArray2}
// console.log(myAllArray);




// myArray.push(10);
// myArray.pop()
// myArray.pop()
// myArray.unshift(4)
// myArray.shift()
// console.log(myArray.includes(5));


// const myArray2 = myArray.join()
// console.log(myArray);
// console.log(myArray2);
// console.log(typeof myArray2);


//?       slice and splice   ================================

// console.log("A",myArray);

// const myArray2 = myArray.slice(1,4)
// console.log(myArray2);



// console.log("B",myArray);

// const myArray3 = myArray.splice(1,4)
// console.log(myArray3);

// console.log("C",myArray);




// const array = [1 , 2, 3, 4,[5,[ 6, 7]]]
// const oneMoreArray = array.flat(Infinity);
// console.log(oneMoreArray);



// console.log(Array.isArray("juned"));
// console.log(Array.from("juned"));
// console.log(Array.from({name:"juned"}));


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3));



//!----  Objects  ------++++++++++++++++++++++++++++++++++++++++++++++++++



// let sym = Symbol("this is symbol")

// let user = {
//     name: "Juned",
//     "full name": "Juned ahmed noori",
//     [sym]:"symbols value",
//     age: 16,
//     email:"juned@gmail.com",
//     location:"Sanawad",
//     isLogedIn: true,
//     lastLoginDays:["sunday","monday","tuesday"]

// }

// console.log(user["name"]);

// console.log(user.age);

// user.email = "noori@microsoft.com";

// console.log(user.email);

// console.log(user[sym]);

// console.log(user["full name"]);

// Object.freeze(user)
// user["full name"] = "ahmed";
// console.log(user["full name"]);


// user.greeting = function(){
//     console.log(`Hello user ,${this.name}`);
// }

// console.log(user.greeting());


// user.greeting = function(){
//     console.log(`Hii bro , ${this["full name"]}`);
// }

// console.log(user.greeting());


//? way to decleare Objects ==============

// const tinderUser = new Object()//?singleton
// const tinderUser = {}//?non-singleton
// tinderUser.id = 123,
// tinderUser.name = "lala",
// tinderUser.isLogedIn = true

// console.log(tinderUser);


// const regularUser = {
//     username:{
//         fullName:{
//             firstname:"juned",
//             lastname:"Ahmed",
//         }
//     }
// }


// console.log(regularUser.username.fullName.firstname);


// let object1 = {a:1, b:2}
// let object2 = {c:3, d:4}
// let object3 = {e:5, f:6}

// const object4 = Object.assign({},object1,object2,object3)
// const object4 = {...object1,...object2,...object3};
// console.log(object4);



// const instaUser = [
//     {
//         id:6514,
//         email:"J@gmail.com"
//     },
//     {
//         id:6589,
//         email:"A@gmail.com"
//     },
//     {
//         id:5643,
//         email:"N@gmail.com"
//     },
// ]


// console.log( instaUser[2].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));
// console.log(tinderUser.hasOwnProperty("email"));


//? Objects De-structure ++++++++++++++++++


// let course = {
//     "course Name": "JS Learning",
//     "course Price": 150,
//     "course Instructor":"Juned"
// }
//  console.log(course["Course Instructor"]);

// const {["course Instructor"]:cinstructor} = course;
// console.log(cinstructor);



//! Functions -------------------------------------------------


// function myName() {
//     console.log("J");
//     console.log("U");
//     console.log("N");
//     console.log("E");
//     console.log("D");
// }
// myName()


// function addition(num1, num2) {
//     console.log(num1 + num2);
//     return
// }

// function addition(num1, num2) {
    // let result = num1 + num2;
    // return result
    // return   num1 + num2
// }

// addition(6, 4)

// let result = addition(6, 4);;
// console.log("result: ", result)


// function userloginMessage(username) {
//     if (username === undefined){
//         return `Unknown Person just logged in`
//     }
//     if (username === "ahmed"){
//         return `Boss just logged in`
//     }
//     return `${username} just logged in`   
// }

// console.log(userloginMessage("juned"));
// console.log(userloginMessage());
// console.log(userloginMessage("ahmed"));
// console.log(userloginMessage("Ahmed"));



// function moreThenOne(...number){
//     return number
// }
// console.log(moreThenOne(100, 200, 500, 400));
 

// let coaching = {
//     teacher: "Juned Ahmed",
//     fee:500
// }

// function includeobj(oneObject){
//     return (`Your teacher name is ${oneObject.teacher} tution fee is ${oneObject.fee}`)
// }

// console.log(includeobj(coaching));
// console.log(includeobj({
//     teacher:"Noori",
//     fee:200
// }));


// let myArray = [100, 800, 600, 200]

// function numArray(thisArray){
//     return thisArray
// }
// console.log(numArray(myArray()));
// console.log(numArray(myArray[1]));






//? practice.OBJECT


// function addTwoNumbers(firstNumber, secondNumber){
//     return firstNumber+secondNumber

// }
// console.log(addTwoNumbers(22,12));


// function messageToFriend(examMarks){
//     if (examMarks<30){
//         return ("You should 🤬focous on your studies");
       
        
//     }
//     return (`😇you should buy sweets`)
// }

// console.log(messageToFriend(20));
// console.log(messageToFriend(79));


//?________________________________________________________________//


//! scope +++++++++++++++++++++++++++++++++++++++


// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);


// if(true){
//     let a = 10
//     let b = 20
//     console.log("result: ", a);
// }



// function one(){

//     let username = "Juned"

//     function two(){
//         let website = "youtube"
//         console.log(username);
//     }

// console.log(website);

// two()

// }
// one()



// if(true){
//     let username = "juned"
// if(username === "juned"){
//     let website = "Flipkart"
//     console.log(username);
// }
// console.log(website);
// }



// function addOne(num){
//     return num + 1
// }
// console.log(addOne(5));


// let addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(5));


//!  This +++++++++++++++++++++++++++++++++



// let user = {
//     username:"Juned",
//     price:999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, Welcome to my website`);
        // console.log(this);
    // }
// }

// user.welcomeMessage()
// user.username = "Noori"
// user.welcomeMessage()

// console.log(this);



// function code(){
//     let username = "Juned"
//     console.log(this);
// }
// code()

//!  Arrow function   +++++++++++++++++++++++++++++++++


// const addNum = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addNum(4, 6)); 



// const addNum = (num1, num2) => (num1 + num2)

// console.log(addNum(4, 6)); 



// const addObj = () => ({username:"Juned"})

// console.log(addObj());

//----------------------------------------------------------



//! Control flow in javascript ++++++++++++++++++++++++++++++++



//? truthy values and falsy values

// const userEmail = "Juned@gmail.com"
// const userEmail = ""

// if(userEmail){
//     console.log("You can signup");
// }
// else{
//     console.log("You cannot  signup");

// }

//? falsy values
//? false, 0, -0, BigInt 0n, Null, Unidefined, NaN, "" 


// const userEmail = []

// if (userEmail) {
//     console.log("Array is empty");   
// }

// if (userEmail.length === 0) {
//     console.log("Array is empty");   
// }


// let anyObj = {
//     username:"juned"
// }

// if (Object.keys(anyObj) == 0) {
//     console.log("Your object is empty");
// }


//!----------------------------------------------------------


//! For Loop in Javascript ---------------------------------


// let array = ["juned", "ahmed", "noori"]


// for (let index = 0; index <=2; index++) {
//      console.log(array[index]);
    
// }

// for(let index = 2;index >=0; index--)
// {
//     console.log(array[index]);
// }


// let anotherArray = [10, 20, 30, 40]

// for (let index = 0; index <=3; index++) {

//     console.log(anotherArray[index]);
// }



// for (let index = 1; index <=10; index++) {
//    console.log(index * 2);
    
// }


// for (let index = 1; index <=10; index++) {
//     console.log((`2 x ${index} =`), index * 2);  //?table of two//
     
//  }

// for (let index = 1; index <=10; index++) {
    
//     console.log((`3 x ${index} =`), index *3);
    
// }


// for (let i = 1; i <=10; i++) {
    
//     for (let J = 1; J <=10; J++) {
       
//         console.log((`${i} x ${J} =`), i*J);
        
//     }
// }


// let myArr = [1, 2, 3, 4, 5, 6]

// let index = 0; 

// while ( index <myArr.length ) {
//     console.log(myArr[index]);
//     index = index + 1
// }



// let arrays = [1, 2, 3, 4, 5, 6, 7]
// for (const arr of arrays) {
//     console.log(arr);
// }

// let anotherArray = [1, 2, 3, 4, 5, 6, 7]
// for (const arr of anotherArray) {
//    if (arr == 5) {
//     console.log(`5 char has been done`);
//         break
//     }
//     console.log(arr);
    
// }


// let map = new Map();

// map.set(`first Name`,`juned`)
// map.set(`last Name`,`ahmed`)
// map.set(`full Name`,`juned ahmed noori`)

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,`:-(`,value);
// }


// let myobject = {
//     car:`Alto`,
//     price: `200000`,
//     "made in": `India`
// }

// for (const key in myobject) {
    
    // console.log(`${key} ↪ ${myobject[key]}`);
    // console.log(myobject[key]);

// }


// let arra = [`j`,`u`,`n`,`e`,`d`]

// arra.forEach( (char) => {
//     console.log(char);
// } )

// function copy(char){
//     console.log(char);
// }

// arra.forEach(copy)


// arra.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


// let name = [
//     {
//         "first Name":"juned",
//         "last Name":"ahmed"
//     },
//     {
//         "first Name":"ziyaul",
//         "last Name":"hasmati"
//     },
//     {
//         "first Name":"shamin",
//         "last Name":"ansari",
//     }
// ]

// name.forEach((item)=>{
//     console.log(item["first Name"]);
// })



// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newarray = array.filter( (item) => {
//     return item >5 
    
// } )

// console.log(newarray);




// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];


// let newBooks = books.filter( (bk) => {
    // return  bk.edition > 2014
// } )  

// newBooks = books.filter( (bk) => {
//     return bk.genre === "History" 
// } )  

// newBooks = books.filter( (bk) => {
//     return bk.edition >= 1995 && bk.genre === "History"
// })

// newBooks = books.filter( (bk) => {
//         return bk.genre === "Non-Fiction" && bk.edition > 2000
// })

// console.log(newBooks);



// const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let allNum = newNum
//             //.map( (num) => num + 10)
//             .map((num) => num * 12)
//             .map((num) => num / 6 )
//             .filter((num) => num >= 10 )


// console.log(allNum);




// let reduceNum = [1, 2, 3, 4, 5]
// let initialValue = 0;

// const allRN = reduceNum.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue 
// },initialValue)

// console.log(allRN);



// const shopingCart = [
//     {
//         itemName:"js course",
//         price:250
//     },
//     {
//         itemName:"py course",
//         price:600
//     },
//     {
//         itemName:"reactjs course",
//         price:999
//     },
//     {
//         itemName:"cpp course",
//         price:2500
//     },
// ]

// let allSC = shopingCart.reduce( (acc, item) => {return acc + item.price},0 )

// console.log(allSC);











//? loop practice ------------------------------------------------

// for (let index =1 ; index <=10; index++) {
    
//     for (let another = 1; another <=10 ; another++) {
        
//         console.log((`${index} x ${another} =`),index*another);
        
//     }
    
// }


// let arr = ["juned", "ahmed", "noori"]

// for (let index = 0; index < arr.length; index++) {

//     console.log(arr[index]);
// }


// let num = [10, 20, 30, 40, 50]
// for (let index = 0; index <= 4; index++) {
//     const element = num[index];
//     console.log(element);
    
// }


// let num = [10, 20, 30, 40, 50]
// for (let index = 4; index >=0; index--) {
//     const element = num[index];
//     console.log(element);
// }

// for (let index = 1; index <=10; index++) {
    
//     for (let anotherindex = 1; anotherindex <=10; anotherindex++) {
       
//         console.log((`${index} x ${anotherindex} =`),index*anotherindex);
        
//     }
    
// }




// let myMap = new Map()
// myMap.set("teacher's name","juned ahmed")
// myMap.set("teacher's lastName","noori")

// // console.log(myMap());
// for (const [key, value] of myMap) {
//     console.log(key,`🔶`,value);
// }

// let myobject = {
//     car:`Alto`,
//     price: `200000`,
//     "made in": `India`
// }

// for (const key in myobject) {
    
// console.log(`${key} ${myobject[key]}`);
// }


// let newArray = ['juned', 'ahmed', 'noori', 'sheikh']

// newArray.forEach( (item,index,arr) => {

//         console.log(item,index,arr);

// } )



