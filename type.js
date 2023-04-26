var jackName = "jack";
var numArr = [1, 2, 3, 4];
var strArr = ["월", "화", "수"];
var comObj = {};
var jackObj = {
    name: "jack",
    age: 25,
    hobbies: ["running", "drinking"],
};
// null, undefined
var nullData = null;
var undefinedData = undefined;
// Tuple
var tupleOne = [1, "jack", { isMember: false }];
// Enum
var MemberGrade;
(function (MemberGrade) {
    MemberGrade[MemberGrade["guest"] = 0] = "guest";
    MemberGrade[MemberGrade["user"] = 1] = "user";
    MemberGrade[MemberGrade["member"] = 2] = "member";
    MemberGrade[MemberGrade["admin"] = 3] = "admin";
})(MemberGrade || (MemberGrade = {}));
var userGrade = 1; //fetch('http://~~');
if (userGrade !== 3) {
    alert("관리자가 아닙니다");
}
if (userGrade !== MemberGrade.admin) {
    alert("관리자가 아닙니다");
}
//Union
//데이터 타입을 유니온으로 하면 좋지 않다
var unionType = 1;
unionType = "jack";
unionType = 2;
unionType = [1, 2, 3];
//아래의 방법으로는 사용 가능
var gender = "M";
//함수 타입 설정
//함수 선언문
function add3(num1, num2) {
    return num1 + num2;
}
//함수 표현식
var add4 = function (num1, num2) {
    return num1 + num2;
};
//화살표 함수
var add5 = function (num1, num2) {
    return num1 + num2;
};
//void 타입 함수
//함수 선언문
function useConsole1(str) {
    console.log(str);
}
//함수 표현식
var useConsole2 = function (str) {
    console.log(str);
};
//화살표 함수
var useConsole3 = function (str) {
    console.log(str);
};
//never 타입 함수
function occurError(err) {
    throw new Error(err);
}
//무한 함수
function infinite() {
    while (true)
        console.log("무한 루프에 빠짐");
}
var dontKnow = 1;
var studentGrade = "a";
var studentsGradeArr = ["a", "f", "c"];
var jackInfo = {
    name: "김정혁",
    id: "jack",
    age: 25,
    isMember: false,
};
jackInfo[1] = "a";
var useData = [
    {
        name: "lee",
        id: "faker",
        age: 26,
    },
    {
        name: "ryu",
        id: "keria",
        age: 20,
        isMember: false,
    },
];
