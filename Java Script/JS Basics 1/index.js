console.log('Welcome to JavaScript')

let a='Harshit'
var b='Abhinav'
console.log(a)

let age=20
let status=(age>=18)?'Vote':'No Vote'
console.log(status)

for(let i=0;i<5;i++){
    console.log(i);
}

//declaring a object employee
const courses = {
	firstCourse: 'JavaScript',
	secondCourse: 'React',
	thirdCourse: 'Angular'
};
let value = '';

//using for in loop
for (let item in courses) {
	value += courses[item] + " ";
}
console.log(value);
