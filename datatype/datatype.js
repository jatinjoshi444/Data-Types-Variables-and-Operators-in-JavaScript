// Data types
//Number
let length = 10;
let width = 15;
document.write(length,"<br>");
document.write(width);

//String
let name = "jatin";
let lastName = "joshi";
document.write("<br>", name," ");
document.write(lastName, "<br>");

//object
const address = {state:"Uttarakhand", city:"Kotdwar"};
document.write(address['city'],' ');
document.write(address['state']);

//Array object
const color = ["Red", "yellow", "blue", "green"];
document.write("<br>",color);
document.write("<br>",color[2],"<br>");

//Date object
const date = new Date("2023-03-14");
document.write(date, "<br>");

//Variables
//var
var num = 20;
document.write(num, "<br>");

// let
let arr = [1,2,3,4];
document.write(arr, "<br>");

// const 
const str = "hello";
document.write(str, "<br><br>")


//arithmetic operations
var a=45
var b=35
document.write("a =",a, "<br>","b =", b, "<br>")
document.write("a + b =",(a+b),"<br>")
document.write("a - b =",(a-b),"<br>")
document.write("a * b =",(a*b),"<br>")
document.write("a / b =",(a/b),"<br>")
document.write("a % b =",(a%b),"<br>")
document.write("a + 1 =", (a++),"<br>");
document.write("a - 1 =", (b--),"<br>");
document.write(typeof a, "<br><br>");


// comparison operations
let com = 60;
document.write(com == 10,"<br>");
document.write(com == 60,"<br>");
document.write(com === 25,"<br>");
document.write(com != 65,"<br>");
document.write(com !== 40,"<br>");
document.write(com < 55,"<br>");
document.write(com > 15,"<br>");
document.write(com >= 70,"<br>");
document.write(com <= 30,"<br><br><br>");


// logical operations
let log1 = 12;
let log2 = 15;
//and &&
document.write(log1 < 16 && log2 > 10,"<br>");
//or ||
document.write(log1 == 13 || log2 == 13,"<br>");
//not !
document.write(!(log1 == log2 ),"<br>");