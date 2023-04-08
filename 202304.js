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

//0406
//購入金額の10％がポイントとしてたまる
//支払うときに購入金額以上のポイントがある場合はポイントから
//ポイントが購入金額未満の場合はカードから
let total2 =3000;
let point = 0;
let buy = [1200];

for(let i =0; i < buy.length; i++){
    if( point >= buy[i]){
        point -= buy[i];
        point = point + buy[i]*0.1;
        total2 = total2 -buy[i] ;
        console.log(total2);
    }else{
        total2 -= buy[i];
        point = point+ buy[i]* 0.1;
        total2 = total2+point;
        console.log(total2);
    }
}

// let total2 =3000;
// let point = 0;
// let buy = [300 , 800 , 900 , 200];
// let point2 =0;

// for(let i =0; i < buy.length; i++){
//     if( point >= buy[i]){
//         point2 =0;
//         point -= buy[i];
//         point2 = buy[i]*0.1;
//         point += point2;
//         total2 = total2 -buy[i] ;
//         console.log(total2);
//     }else{
//         point2 = 0;
//         total2 -= buy[i];
//         point2 =  buy[i]* 0.1;
//         point += point2;
//         total2 = total2+point;
//         console.log(total2);
//     }
// }

//0407
// アロー関数
//時間を分に直す（10時間5分）
const time = (hour,minute)=>{
    return hour*60 + minute;
};
const result = time(10,5);

console.log(`${result}分`);

//0408
//.push characterに追加する
const character = ["kana","toya","riri"];
character.push("roko");
console.log(character);

//forEach
character.forEach((character2)=>{
    console.log(character2);
});

//find
const characters = [
    {id:1, name:"kana"},
    {id:2, name:"toya"},
    {id:3, name:"riri"},
    {id:4, name:"roko"}
];

const findchara = characters.find((chara)=>{
    return chara.id ===2;
});
console.log(findchara);