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