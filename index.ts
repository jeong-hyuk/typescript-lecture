let numOne: number = 1;
let numTwo: number = 2;

// 숫자형태로 리턴할때
function add(num1: number, num2: number): number {
  console.log(num1 + num2);
  return num1 + num2;
}

add(numOne, numTwo);

// 리턴 값이 없을 때
function add2(num1: number, num2: number): void {
  console.log(num1 + num2);
}

//Tuple 써보기
let tuple: [string, number, boolean, object] = ["jack", 1, true, { name: "jack" }];
