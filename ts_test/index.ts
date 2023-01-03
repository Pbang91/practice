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