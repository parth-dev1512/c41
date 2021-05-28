//DATA TYPES - string (" "), number, boolean (true/false), undefined, null

//string
var a = "HeLLo";
console.log(a);

var a1 ="good morning"

//number
var b = 999;
console.log(b);

//boolean 
var c = true;
console.log(c);

//undefined
var d;
console.log(d);

//null
var e = null;
console.log(e);

console.log(a1.toUpperCase());
console.log(a.toLowerCase());

console.log(parseInt("2"));

//ARITHMETIC OPERATORS --> + - * / %
console.log(2 + 4);
console.log(2 - 1);
console.log(1 * 1);
console.log(5 / 5);
console.log(21 % 5);

//COMPARATIVE OPERATORS --> > < >= <= === !==

console.log(2>1)
console.log(1<2)
console.log(1>=2)
console.log(2<=1)
console.log(2 === 2)
console.log(2 !== 2)

//CONDITIONAL PROGRAM

if(3%2 === 0)
{

console.log("Even number")
}

else{
  console.log("Odd Number")
}

for(var i=20; i <= 40; i+=2)
{
  console.log(i);
}

for(var i =79; i>=59; i-=2)
{
  console.log(i)
}


var colors=["Red","Blue","Pink","Purple","Black"]
console.log(colors[3])

colors.push("White","Green","Orange")

colors.pop();
console.log(colors)


function add(n1,n2)
{
  var sum=n1+n2;
  return sum;
}

console.log(add(1,2))

function cubeOf(n1)
{
  var cube=n1*n1*n1;
  return cube;
}

console.log(cubeOf(5))