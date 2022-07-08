console.log('hh'); // console 찍기

// Expression
console.log(500+'900'+9); //5009009 문자 + 숫자 = 문자, 숫자 + 문자 = 문자, */- 등은 숫자로 처리함.

//Statement 끝에 세미콜론 붙임 (모든 표현식은 문장이 될 수 있다.)
// const x를 실행하기 전에 x에 접근하면, TDZ에 의해 ReferenceError가 발생하게 된다.
//console.log(x);

const x = 42;
// 위 코드 실행 이후에는 x에 접근할 수 있다.
console.log(x);

const a = null;
console.log(a, typeof a);
// null object
if(!a) {
    console.log('yes');
}

let b;

console.log(b, typeof b);
//undefined undefined
b = undefined;
console.log(b, typeof b);
//undefined undefined
if (a == b) {
    console.log(a==b);
}
// true
if (!(a===b)) { 
    console.log(a===b);
}
//false

const c = NaN; // datatype => 자료형

if(!c) {
    console.log(c, typeof c);
}
//NaN number 