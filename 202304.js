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

//0403
//2次元配列
const number =[[10,20,30],[500,600,800]];
console.log(number[0][2]);//30
console.log(number[0][1]+number[1][0]);//520

//for in
const favorite = {
    food : "ハンバーグ",
    color:"水色",
    number:7
};

for(const key in favorite){
    console.log(key + ":"+favorite[key]); 
}

//円の面積
//半径:radius 100のとき 面積:area
function circle(radius){
    return radius * radius * 3.14;
}
function circlearea(){
    area = circle(100);
    return area;
}
console.log(circlearea()+ "cm^2");

//コンソールに"ABC"を表示
func("ABC");
function func(x){
    console.log(x);
}
//
function func(y){
    return y;
};
console.log(func(10));

//0405 
//数値変換
const str = "500";
const num = parseInt(str);
console.log(num + 500); //1000

const str2 = "3.14";
const num2 = parseFloat(str2);
console.log(num2 + 0.08);

const str3 ="K";
const num3 = parseInt(str3);
if(isNaN(num3)){
    console.log("失敗");
}else{
    console.log("成功");
};

//三角形の面積
function trianglearea(bottom,height){
    return bottom * height /2;
};
const area = trianglearea(30,50);
console.log(area);//750

//コンソールにABCを表示
const f = function (x){
    console.log(x);
};
f("ABC");

//コンソールにこんにちわを表示
(function(str4){
    console.log(str4);
}) ("こんにちわ"); 
