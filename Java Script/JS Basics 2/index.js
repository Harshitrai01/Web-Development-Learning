console.log("Hello")

// object create
let rectangle = {
    length:1,
    breadth:2,

    draw: function(){
        console.log('draw rectangle');
    }

};

// Object Creation  How?
// 1.	Factory Function
// 2.	Constructor Function

// Factory Function

function createRectangle(len ,bre){
    return rectangle = {
        length:len,
        breadth:bre,
    
        draw: function(){
            console.log('draw rectangle');
        }
    };
    // return rectangle;
}

// Creating the Object
let rectnagleObj1=createRectangle(4,5);
rectnagleObj1.draw()
rectnagleObj1.length
rectnagleObj1.breadth

// Constructor Function
function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log("drawing the rectangle");
    }
}

// object creation using constructor
let rectangleObject=new Rectangle(4,5);
rectangleObject.draw()

rectangleObject.color="red";
console.log(rectangleObject)
delete rectangleObject.color;
console.log(rectangleObject)

console.log(rectangleObject.constructor)
console.log(Rectangle.constructor)

// let Rectangle1=new Function(
//     `length`,`breadth;`,
//     `this.length=length;
//      this.breadth=breadth;
//      this.draw=function(){
//         console.log('drawing');
//      }`
// );

// let rect=new Rectangle1(2,3);
// console.log(rect);

// Primitive
let a=10;
function inc(a){
    a++;
}
inc(a);
console.log(a)

// Reference
let b={value:10};
function inc1(b){
    b.value++;
}
inc1(b);
console.log(b.value)

// For in Loop
let rectangle2={
    length:2,
    breadth:3
};

for(let key in rectangle2){
    // keys are reflected by key variable
    // values are reflected by Rectangle2[key]
    console.log(key,rectangle2[key]);
}

// For of Loops :works on iterables
for(let key of Object.entries(rectangle)){
    console.log(key);
}

// To check weather given properties are present or not
if('color' in rectangle){
    console.log('Present');
}
else{
    console.log('Absent');
}

let src={
    a:10,
    b:20,
    c:30
};

// Iteration
let des={}

for(let key in src){
    des[key]=src[key]
}

// Assign
let d1=Object.assign({},src);

// Spread
let d2={...src};

console.log(src);
console.log(des);
console.log(d2);