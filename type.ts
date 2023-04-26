let jackName: String = "jack";
let numArr: number[] = [1, 2, 3, 4];
let strArr: Array<string> = ["월", "화", "수"];
let comObj: object = {};
let jackObj: { name: string; age: number; hobbies: string[] } = {
  name: "jack",
  age: 25,
  hobbies: ["running", "drinking"],
};

// null, undefined
let nullData: null = null;
let undefinedData: undefined = undefined;

// Tuple
let tupleOne: [number, string, object] = [1, "jack", { isMember: false }];

// Enum
enum MemberGrade { // Enum은 첫글자 대문자로 써줌 구분을 위해
  guest = 0,
  user = 1,
  member = 2,
  admin = 3,
}

let userGrade: number = 1; //fetch('http://~~');

if (userGrade !== 3) {
  alert("관리자가 아닙니다");
}
if (userGrade !== MemberGrade.admin) {
  alert("관리자가 아닙니다");
}

//Union
//데이터 타입을 유니온으로 하면 좋지 않다
let unionType: number | string | number[] = 1;
unionType = "jack";
unionType = 2;
unionType = [1, 2, 3];

//아래의 방법으로는 사용 가능
let gender: "M" | "F" = "M";

//함수 타입 설정
//함수 선언문
function add3(num1: number, num2: number): number {
  return num1 + num2;
}

//함수 표현식
const add4 = function (num1: number, num2: number): number {
  return num1 + num2;
};

//화살표 함수
const add5 = (num1: number, num2: number): number => {
  return num1 + num2;
};

//void 타입 함수
//함수 선언문
function useConsole1(str: string): void {
  console.log(str);
}

//함수 표현식
const useConsole2 = function (str: string): void {
  console.log(str);
};

//화살표 함수
const useConsole3 = (str: string): void => {
  console.log(str);
};

//never 타입 함수
function occurError(err: string): never {
  throw new Error(err);
}

//무한 함수
function infinite(): never {
  while (true) console.log("무한 루프에 빠짐");
}
