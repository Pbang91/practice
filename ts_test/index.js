var _name = "Park";
var _age = 31;
var _city = "Seoul";
var track = {
    title: "Under Watter",
    artist: "Kwon"
};
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true
};
var members1 = 20;
var members2 = [1, "3", 5];
var test = { tt: 123 };
var 아무거나;
아무거나 = "아무거나";
아무거나 = 500;
아무거나 = [1, 3, 4];
var 몰라;
몰라 = 560;
var 변수 = 아무거나;
// let 다른거 : string = 몰라;
var user = "kim";
var age = undefined;
var married = false;
var 나나 = [user, age, married];
var school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: "John"
};
school.score[4] = false;
school.friend = ["Lee", school.teacher];
function 함수(x) {
    x + 1;
}
함수();
함수(2);
function checkNum(numbs) {
    var convertString = numbs.toString();
    return convertString.length;
}
console.log(checkNum(123));
console.log(checkNum("55102"));
function canIGetMarried(월소득, 집, 매력점수) {
    var score = 0;
    score += 월소득 / 10000;
    if (집 == true) {
        score += 500;
    }
    if (매력점수 == '상') {
        score += 100;
    }
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(canIGetMarried(300000, false, '중'));
function cleaning(numbers) {
    var data = [];
    numbers.forEach(function (e) {
        if (typeof e === "number") {
            data.push(e);
        }
        else {
            var newNum = parseInt(e);
            data.push(newNum);
        }
    });
    return data;
}
console.log(cleaning([1, "10", 100]));
var Ted = { subject: 'math' };
var Lai = { subject: ['science', 'english'] };
var Woo = { subject: ['science', 'art', 'korean'] };
function checkMainSubject(person) {
    if (Array.isArray(person.subject)) {
        return person.subject.pop();
    }
    else {
        return person.subject;
    }
}
console.log(checkMainSubject(Ted));
console.log(checkMainSubject(Lai));
console.log(checkMainSubject(Woo));
