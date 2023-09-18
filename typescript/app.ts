const num1El = document.getElementById('num1') as HTMLInputElement
const num2El = document.getElementById('num2') as HTMLInputElement
const btn = document.querySelector('button')!;

const numResults: Array<number> =[];
const textResults: string[] = [];

type numOrString = number | string;
type result = {val: number; timestamp: Date }

interface  resultObj {
    val:  number;
    timestamp: Date
}

function add(num1: numOrString, num2: numOrString){
    if(typeof num1==='number' && typeof num2==='number'){
        return num1 + num2;
    }
    else if(typeof num1==='string' && typeof num2==='string'){
        return num1+' '+num2;
    }
    else{
        return +num1 + +num2; 
    }   
}

function printResult(resultObj: resultObj) {
    console.log(resultObj.val, resultObj.timestamp);
}

btn.addEventListener('click', () =>{
    const num1 = num1El.value;
    const num2 = num2El.value;
    const result = add(+num1,+num2)
    numResults.push(result as number);
    const stringResult = add(num1,num2);
    textResults.push(stringResult as string);
    printResult({val: result as number, timestamp: new Date() })
    console.log(numResults, textResults);
})

const myPromise = new Promise<string>((resolve,reject)=> {
    setTimeout(() => {
        resolve('It worked!')
    }, 1000)
})

myPromise.then((result) => {
    console.log(result.split('w'));
})