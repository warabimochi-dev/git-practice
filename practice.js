const numbers = [5, 12, 21, 34, 73, 83, 90];

const names = ["わらび", "もち", "きなこ", "さくら",]


const sum = () => {
    let sumNumbers = 0;
   numbers.forEach ((num) => {
    sumNumbers += num;
   }); 
    console.log(sumNumbers);
}

const multi = () => {
    let sumNumbers = 0;
    numbers.forEach((num) => {
        sumNumbers += num*2
    });
    console.log(sumNumbers)
}

const findEven = () => {
    numbers.forEach((num) => {
        if(num % 2 === 0){
            console.log(num);
        }
    });
}

const greet = () =>{
    names.forEach((name) => {
        console.log(`${name}さん、こんにちは`);
    });
}

sum();
multi();
findEven();
greet();

