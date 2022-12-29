let person = {
    name : 'Park',
    sayHi () {
        console.log(`Hi, I'm ${this.name}`)
    }
}

person.sayHi();

let obj = {
    data : [1,2,3,4,5]
}

function totalSum(){
    console.log(this.data.reduce((a,b) => a+b, 0));
}

obj['totalSum'] = totalSum

obj.totalSum();

var pants = 20;
var socks = 100;

function taggedLiteral1(paragraphs, pants, socks){
    console.log(paragraphs[1] + pants + " " + paragraphs[0] + socks)
}

function taggedLiteral2(paragraphs, pants, socks){
    if (pants == 0){
        console.log(`No Pants, Socks ${socks}`)
    }
}

taggedLiteral1`pants ${pants} socks ${socks}`

pants = 0;

taggedLiteral2`pants ${pants} socks ${socks}`