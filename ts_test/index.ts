let _name : string = "Park";
let _age : number = 31;
let _city : string = "Seoul";

let track : { title : string, artist : string } = {
    title : "Under Watter",
    artist : "Kwon"
}

let project : {
    member : string[],
    days : number,
    started : boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true
}

let members1 : number | string[] = 20;
let members2 : (number | string)[] = [1,"3",5];
let test : { tt : string | number } = { tt : 123 };

let 아무거나 : any;
아무거나 = "아무거나";
아무거나 = 500;
아무거나 = [1,3,4];

let 몰라 : unknown;
몰라 = 560;

let 변수 : string = 아무거나
// let 다른거 : string = 몰라;

let user : string = "kim";
let age : undefined | number = undefined;
let married : boolean = false;
let 나나 : (string | number | undefined | boolean)[] = [user, age, married]

let school : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : "John"
}

school.score[4] = false;
school.friend = ["Lee", school.teacher]

function 함수(x ? :number) : void {
    if (typeof x === "number") {
        x + 1;
    }
}

함수();
함수(2);

function checkNum(numbs : string | number) : number {
	let convertString = numbs.toString();
    return convertString.length
}

console.log(checkNum(123));
console.log(checkNum("55102"));

function canIGetMarried(월소득 : number, 집 : boolean, 매력점수 : string) : string | void {
	let score : number = 0;
	score += 월소득 / 10000
	
	if ( 집 == true ){
		score += 500
    }
		
	if ( 매력점수 == '상' ){
		score += 100
	}
	
	if ( score >= 600 ){
		return '결혼가능'
	}
}

console.log(canIGetMarried(300000, false, '중'));

function cleaning(numbers : (number | string)[]) : number[] {
    let data : number[] = []

    numbers.forEach((e)=>{
        if (typeof e === "number") {
            data.push(e);
        } else {
            let newNum = parseInt(e);
            data.push(newNum);
        }
    })

    return data
}

console.log(cleaning([1,"10",100]));

let Ted = { subject : 'math' };
let Lai = { subject : ['science', 'english']};
let Woo = { subject : ['science', 'art', 'korean']};

function checkMainSubject(person : { subject : string | string[]}) : string {
    if (Array.isArray(person.subject)) {
        // let word = person.subject.pop() 내로잉을 했는디 어레이로 안받아지네..
        return person.subject[person.subject.length -1];
        // return word
    } else {
        return person.subject
    }
}

console.log(checkMainSubject(Ted));
console.log(checkMainSubject(Lai));
console.log(checkMainSubject(Woo));

type CssType = {
    color ? : string,
    size : number,
    readonly position : number[]
}

let title = document.querySelector('#title');
if (title !== null) {
    title.innerHTML = "반갑습니다";
}

let button = document.getElementById('btn');
let imgNAme = document.getElementById('img');

if (button instanceof HTMLButtonElement) {
    button.addEventListener('click', function() {
        if (imgNAme instanceof HTMLImageElement) {
            imgNAme.src = "new.jpg"
        }
    })
}

let links = document.querySelectorAll('.link');

for (let i = 0; i<links.length; i++){
    let link = links[i]
    
    if (link instanceof HTMLAnchorElement) {
        link.href = "https://kakao.com";
        link.innerHTML = "사실은 카카오";
    }
}

class Person {
    name : string;
    age : number;
    
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }

    outText(text){
        console.log(text);
    }
}

let jade = new Person('json', 20);

jade.outText("안뇽");

class Car {
	name : string;
	price : number;
	
	constructor(name : string, price : number) {
		this.name = name;
		this.price = price
	}
	
	tax () : number {
        return this.price/0.1
    }
}

class Word {
	num : number[] = []
	str : string[] = []
	
	constructor(...args){
        
		args.forEach((e) => {
			if (typeof e === 'number') {
				this.num.push(e);
			} else {
				this.str.push(e)
			}
		})
	}
}

let word = new Word('kim', 3, 5, 'park');

console.log(word.num);
console.log(word.str);

interface Product {
    brand : string;
    serialNumber : number;
    model : string[]
}

interface Cart {
    product : string;
    price : number
}

let myCart : Cart[] = [{ product : '청소기', price : 70000 }, { product : '뭐지', price : 11 }]

interface UpdatedCart extends Cart {
    card : boolean
}

interface Cal {
    plus : (x : number, y : number) => number;
    minus : (x : number, y : number) => number;
}

let hoo : Cal = {
    plus(x,y) {
        return x + y
    },
    minus(x,y) {
        return x - y
    }
}

function max (...rest : number[]) : number {
    let maxNum : number = 0;
    
    rest.forEach((e) =>{
        if (e > maxNum) {
            maxNum = e;
        }
    })

    return maxNum
}

function func({user, comment, admin} : {user : string, comment : number[], admin : boolean}) : void{
    console.log(user, comment, admin);
}

function func2([a,b,c] : (number | string | boolean)[]) : void {
	console.log(a, b, c)
}