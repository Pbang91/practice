function sortWord(word){
		let sortedWord = [...word].sort()
        
		console.log(...sortedWord)
	}

sortWord('bear');

function countChar(words){
    let obj = {};
    
    words = [...words].sort();

    for(let i = 0; i < words.length; i++) {
        if (words[i] in obj) {
            obj[words[i]] += 1
        } else {
            obj[words[i]] = 1
        }
    }

    console.log(obj);
}

countChar('aacbbb');

function test(a=5, b=a*2){
    console.log(a+b)
}

test(undefined, undefined);