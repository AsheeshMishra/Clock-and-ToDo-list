console.log('helloworld!',4+75,'another parameter');//ways to print
// alert("me!!")
 document.write("this is document write")
// //Javascript Console API
console.warn('this is a warning') ;  
console.error("this is an error");


// //javascript variables

// // containers to store data values

// var number1=34;
// var number2=56;
// //console.log(number1+number2);

// // multi line comment
// /*1
// 3
// 4
// 5
// 6 just like c++
// */

// //data types in javascript
// // String
// var str1="this is a string";
// var str2="this is also a string";
// // number
// var num1=987;
// var num2=944;
// //objects
// var marks={
//     a:56,
//     b:78,
//     c:67
// }
// //console.log(marks);

// //booleans
// var a1 =true;
// var a2= false;
// //console.log(a1,a2);

// //var und= undefined;
// var und;
// //console.log(und);
// //null
// var n=null;
// //console.log(n);

// /* two type of datatype
// 1.primitive datatype:undefined,null,number,string,boolean,symbol
// 2. reference datatype:arrays and objects
// */
// //arrays

// var arr=[1,3,"hahahaha",2,4,5];
// //console.log(arr);   


// //operators 
// // var a=100;
// // var b=10;
// // console.log("the value of a+b is",a+b);
// // console.log("the value of a-b is",a-b);
// // console.log("the value of a*b is",a*b);
// // console.log("the value of a/b is",a/b);

// //assignment opetrators

// var c =b;
// // console.log(b);
// // c+=2;
// // console.log(c);
// // c-=2;
// // console.log(c);
// // c*=2;
// // console.log(c);
// // c/=2;
// // console.log(c);


// // comparison operator
// var x1=45;
// var  y1=6;

// console.log(x1 == y1);//f
// console.log(x1 >= y1);//T
// console.log(x1 <= y1);//F

// //logical operators

// logical and && and
// console.log(true && true)
// console.log(true && false)


// // logical or || or

// console.log(true||true);
// console.log(false||false);
// console.log(false||true);
// console.log(false||true);

// // logical not 
// console.log(!true);
// console.log(!false);

// function 

// function avg (a,b){
//     return (a+b)/2;
// }

// c1=avg(4,6);
// c2=avg(9,15);

// console.log(c1,c2);


// function greater(a,b){
//     if(a>b){return a;}
//     else if (a==b){ return ;}
//     else{return b}

// }

// c1=greater(4,6);
// c2=greater(19,15);
// c3=greater(4,4)
// console.log(c1,c2);

// //
// blue color in console denotes number and black color denotes string

// conditionals in javascript


     //if - else 
// var age=9;

// age=window.prompt('please enter your age');

// if(age>18)
// {
//     console.log('you can vote');
// }
// else{
//     console.log('not eligible for voting');
// }

function getInputValue(){
     // Selecting the input element and get its value 
     var age= document.getElementById("age").value;
     
if(age>0)
{
    if(age>2 && age<=10)
    {
        console.log('kid');
    }
    else if(age>10&& age<18)
    {
        console.log('teenager');
    }
    else
    {
        console.log('adult');
    }
    
}

else{
    console.log('please enter correct age');
}

}



//loops in js
 sum=0
var arr=[1,2,3,4,5,6,7]
console.log(typeof(arr))
console.log(arr);
for(var i =0;i<arr.length;i++){
    sum+=arr[i]
}
console.log('sum =',sum)

//The function will be executed for every single element of the array.
// It must take at least one parameter which represents the elements of an array:
summation =0 
arr.forEach
(
     function(element)
     {
          summation+=element
     }
)
console.log(summation);


let j=0;
product=1;
while(j<arr.length)
{
   product =product*arr[j];
   j++;

}
console.log(product);
j=10;
while(j<arr.length){
    console.log(arr[j])
    j++;
}
console.log(j)
// //j not incremented

do{
    console.log(arr[j])
    j++
}while(j<arr.length)
console.log(j)
// //minimum 1 time do while loop chalega if condition is false also
// //note j incremented 


var arr=[1,2,-3,4,5,6,7]
sum=0
console.log(arr);
for(var i =0;i<arr.length;i++){
    if(arr[i]<0)
{ console.log('loop not work due to negative number at index ',i)
     break;
}
    else{sum+=arr[i]}
}
console.log('sum =',sum)


sum=0
var arr=[1,2,-3,4,5,6,7]
console.log(arr);
for(var i =0;i<arr.length;i++){
    if(arr[i]<0)
{ console.log('loop not add negative number which is present at  index ',i)
    continue;
}
    else{sum+=arr[i]}
}
console.log('sum =',sum)

let myArr=["Fan","camera",34,null,true]
//pop method
console.log(myArr.length);
myArr.pop();
console.log(myArr.pop());
console.log(myArr);
//push method
myArr.push("Ashish");
console.log(myArr);

//shift
myArr.shift()
console.log(myArr);
//unshift 
myArr.unshift("Harry")
console.log(myArr);

//

const newLen=console.log(myArr.unshift("Harry"))
console.log(myArr)
console.log(newLen)

myArr.toString();
console.log(myArr);

// d=[1,4,6,8,86,443,678]

var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());
console.log(fruits.join(" * "));


let myarr=["fan","camera","laptop","mic",null,56]
console.log(myarr.length);
console.log("shift");
myarr.shift();
console.log(myarr);
console.log("pop");
console.log(myarr.pop());
console.log(myarr)
console.log("push");
myarr.push("harry");
console.log(myarr);

console.log("unshift");
myarr.unshift("ash");
console.log(myarr);
myarr.unshift("jerry");
console.log(myarr);

let d1=[67,98,45,23,121,95]
console.log("sort");
d1.sort()
console.log(d1);

d1.toString();
console.log(d1);

let myarr1=["fan","camera","laptop","mic",null,56]
myarr.toString();
console.log(myarr1);

d=[1,65,87,1222,12,344]
d.sort();
console.log(d);


 


//////strings method 

var mylovelyString="Harry is a good boy good good";
console.log(mylovelyString.length);
console.log(mylovelyString.indexOf("good"));
console.log(mylovelyString.lastIndexOf("good"));


console.log(mylovelyString.slice(1,13));

d=mylovelyString.replace("Harry","Ashish") // replace harry with asheesh
console.log(d);





// date and time

let myDate=new Date();
console.log(myDate);

console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());

//Dom manipulation


// let elem =document.getElementById('click')
// console.log(elem);

// let elemclass=document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background="yellow";
// //elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("text-success");
// console.log(elemclass[0].innerText);
// console.log(elemclass[0].innerHTML);
// tn=document.getElementsByTagName('div')
// console.log(tn)
// createdElement=document.createElement('p');
// createdElement.innerText="this is created element";
// tn[0].appendChild(createdElement);
// createdElement2=document.createElement('b');
// createdElement2.innerText="this is created bold";
// tn[0].replaceChild(createdElement2,createdElement);
//removeChild(element); -->

///selecting Using Query
sel=document.querySelector('.container');
console.log(sel);
sel=document.querySelectorAll('.container');

function clicked(){
    console.log("the button was clicked");
}

// window.onload=function()
// {
//      console.log("the document was loaded")
// }

// ////events in   javascript

// // firstcontainer.addEventListener('click',function(){document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked </b>"
// // console.log("click hua")})
// let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseover',function(){ 
//      document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//      console.log("mouse on container")})


// firstcontainer.addEventListener('mouseup',function(){document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked </b>"     
// console.log("mouse up when clicked on container")})


// Arrow functions
// function summ(a,b) {
//    return a+b; 
// }
// summ =(a,b)=>{
//      return a+b;
// }
//////
// set timeout and set interval

// lockkaro =()=>{
//      document.querySelectorAll('.container')[1].innerHTML="<b>set interval fired </b>";
//      console.log('your answer is locked')
//  }
// setTimeout(lockkaro,2000);
//clr = setInterval(lockkaro,2000)
//clearInterval/clearTimeout to cancel setInterval/setTimeout

// javascript local storage

// localStorage
// Storage {length: 0}
// localStorage.setItem('name','Harry')
// undefined
// localStorage
// Storage {name: "Harry", length: 1}
// localStorage.getItem('name')
// "Harry"
//localStorage.removeItem()


//JSon

// obj={name:"harry" ,length:1 ,a:{this:'that'}}
// jso=JSON.stringify(obj);
// console.log(typeof jso)
// console.log( jso)
// parsed=JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);
//
