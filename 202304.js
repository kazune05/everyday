//0401
//FIZZBUZZ
//1〜100までの数値を画面に表示させ、3の倍数の時は「Fizz」を、
//5の倍数の時は「Buzz」を、15の倍数の時は「FizzBuzz」の文字列を表示

for(let i = 1; i<100; i++){
    if(i%15 == 0){
        console.log("FizzBuzz");
    }else if(i%3 == 0){
        console.log("Fizz");
    }else if(i%5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
};

//0402
//配列を全て合算した数
//a=累積　b=処理する値

const arr= [1, 54, 5, 11, 252, 34, 100, 25];
const total = arr.reduce(
    function(a,b){
        return a+b;
    }
);
console.log(total);
