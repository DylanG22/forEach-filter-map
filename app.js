

function doubleValues(arr){
    const doubles = [];
    arr.forEach(function(num){
        doubles.push( num * 2);
    })
    return doubles;
}

function onlyEvenValues(arr){
    const evens = [];
    arr.forEach(function(num){
        if(num%2 === 0){
            evens.push(num);
        }
    })
    return evens;
}


function showFirstAndLast(arr){
    const firstLast = [];
    arr.forEach(function(word){
        firstLast.push(`${word[0]}${word[word.length -1]}`)       
})
    return firstLast;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(obj){
        obj[key] = value;
    })
    return arr;
}

function vowelCount(str){
    let lowCase = str.toLowerCase();
    let arr = Array.from(lowCase);
    let vowels = ['a','e','i','o','u'];
    let vowelObject = {};
    arr.forEach(function(i){
        for(let letter of vowels){
            if(i.indexOf(letter) !== -1){
                if(vowelObject[letter]){
                vowelObject[letter] = vowelObject[letter] + 1;
            }
                else{
                    vowelObject[letter] = 1;
                }
        }
        }
    })
    return vowelObject;
}

function doubleValuesWithMap(arr){
    return arr.map(function(num){
        return num * 2;
    })
}


function valTimesIndex(arr){
    return arr.map(function(num,i){
        return num * i;
    })
}


const names = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele",isCatOwner: true}
  ]

function extractKey(arr,key){
    return arr.map(function(obj){
        return obj[key];
    })
}


function extractFullName(arr){
    return arr.map(function(obj){
        return `${obj['first']} ${obj['last']}`
    })
}

function filterByValue(arr,str){
    return arr.filter(function(obj){
        return obj[str];
    })

}


function find(arr, value){
    let newArr = arr.filter(function(item){
        return item === value;
    })

    return newArr[0];
}


function findInObj(arr,key,value){
    return arr.filter(function(obj){
        return obj[key] === value;
    })[0];
}

function removeVowels(str){
    let vowels = ['a','e','i','o','u'];
    let arr = Array.from(str.toLowerCase());
    let filteredArr = arr.filter(function(letter){
        let counter = 0;
        for(let i of vowels){
           if(letter === i){
            counter++;
           }
        }
           if(counter === 0){
            return true;
        
        }
    })
    return filteredArr.join('');
}

function doubleOddNumbers(arr){
    let odds = arr.filter(function(num){
        return num % 2;
    })
    return odds.map(function(num){return num*2})
}