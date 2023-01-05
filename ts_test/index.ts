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
    x + 1;
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
    let data = []

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
        return person.subject.pop()
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