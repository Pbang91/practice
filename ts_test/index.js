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
    if (typeof x === "number") {
        x + 1;
    }
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
        // let word = person.subject.pop() 내로잉을 했는디 어레이로 안받아지네..
        return person.subject[person.subject.length - 1];
        // return word
    }
    else {
        return person.subject;
    }
}
console.log(checkMainSubject(Ted));
console.log(checkMainSubject(Lai));
console.log(checkMainSubject(Woo));
var title = document.querySelector('#title');
if (title !== null) {
    title.innerHTML = "반갑습니다";
}
var button = document.getElementById('btn');
var imgNAme = document.getElementById('img');
if (button instanceof HTMLButtonElement) {
    button.addEventListener('click', function () {
        if (imgNAme instanceof HTMLImageElement) {
            imgNAme.src = "new.jpg";
        }
    });
}
var links = document.querySelectorAll('.link');
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link instanceof HTMLAnchorElement) {
        link.href = "https://kakao.com";
        link.innerHTML = "사실은 카카오";
    }
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.outText = function (text) {
        console.log(text);
    };
    return Person;
}());
var jade = new Person('json', 20);
jade.outText("안뇽");
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 0.1;
    };
    return Car;
}());
var Word = /** @class */ (function () {
    function Word() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        args.forEach(function (e) {
            if (typeof e === 'number') {
                _this.num.push(e);
            }
            else {
                _this.str.push(e);
            }
        });
    }
    return Word;
}());
var word = new Word('kim', 3, 5, 'park');
console.log(word.num);
console.log(word.str);
var myCart = [{ product: '청소기', price: 70000 }, { product: '뭐지', price: 11 }];
var hoo = {
    plus: function (x, y) {
        return x + y;
    },
    minus: function (x, y) {
        return x - y;
    }
};
