//chatGPT
//0319
//問題1: 変数の宣言と代入
// 以下の変数を宣言し、それぞれに任意の値を代入してください。

// name
// age
// gender
// isStudent

const name ="kazu";
const age ="22";
const gender ="female";
const isStudent="true";

// 問題2: 文字列の連結
// 以下の変数を用意し、文字列を連結してください。

// firstName: "John"
// lastName: "Doe"
// age: 30
//連結後の文字列は「John Doe is 30 years old.」としてください。

console.log( firstName + " "+ lastName + "is" + age +"years old.");

// 問題3: 条件分岐
// 以下のコードを完成させ、scoreに格納された点数に応じて、成績を表示してください。

// 90点以上: "A"
// 80点以上90点未満: "B"
// 70点以上80点未満: "C"
// 60点以上70点未満: "D"
// 60点未満: "F"

const score = 90;
if (90 <= score < 100){
    console.log("A");
}else if(80<= score <90){
    console.log("B");
}else if(70 <= score <80){
    console.log("C");
}else if(60 <= score <70){
    console.log("D");
}else{
    console.log("F");
}

// 問題4: 繰り返し処理
// 以下のコードを完成させ、1から10までの整数を順に表示してください。

for(const i =1; i< 10; i++){
    console.log(i);
}

// 問題5: 関数の定義と呼び出し
// 以下の関数を定義し、greetという名前で呼び出してください。
// この関数は、引数として受け取った名前を使用して、"Hello, [name]!"というメッセージを表示します。

function greet(name){
    console.log( "Hello, "+"name"+"!");
};

greet("kyon");

//0320
// 問題1: オブジェクトのプロパティ
// 以下のオブジェクトを用意し、プロパティの値を取得してください。
//1.nameプロパティの値を取得する
//2.ageプロパティの値を取得し、5を足して表示する

var person = {
    name: "Alice",
    age: 25,
    gender: "female",
    isStudent: true
  };

  console.log(person.name);
  console.log(person.age + 5);

// 問題2: 配列の要素操作
// 以下の配列を用意し、要素の追加・削除・変更を行ってください。
// 1.grapeを追加する
// 2.bananaを削除する
// 3.orangeをpeachに変更する
var fruits = ["apple", "banana", "orange"];

fruits.push(grape);
console.log(fruits);

var index = fruits.indexOf("banana");
if (index ==! -1){
    fruits.splice(index,1);
}
console.log(fruits);

index = index.indexOf("orange");
if(index ==! -1){
    fruits[index]="peach"
}
console.log(fruits);

// 問題3: クロージャー
// 以下のコードを実行した場合、何が表示されるでしょうか。

function add(x) {
    return function(y) {
      return x + y;
    }
  }
  
  var add5 = add(5);
  console.log(add5(3)); // 8
  console.log(add5(7)); // 12

// 問題4: コールバック関数
// 以下のコードを実行した場合、何が表示されるでしょうか。

function sayHello(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  sayHello("Alice", sayGoodbye);
  // Hell,Alice! Goodbye!

// 問題5: 非同期処理
// 以下のコードを実行した場合、何が表示されるでしょうか。

console.log("1");

setTimeout(function() {
  console.log("2");
}, 1000);

console.log("3");

//1
//2
//3

//0321
//1.変数の型を判定する関数を作成してください。
 function getType(variable){
  return typeof variable;
 }
 console.log(getType("kazu")); //str

 //2.配列の中から、指定された値を持つ要素のインデックスを取得する関数を作成してください。
 function getindex(value,array){
    for(let i=0; i < array.length; i++){
      if( value === array[i]){
        return i;
      }
    }
        return -1;
 }

 const array = [1,5,7,25,35];
 console.log(getindex(array,5)); //1

 //0323
 //https://gist.github.com/kenmori/1961ce0140dc3307a0e641c8dde6701d
 //1.const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
 const a = { a: 'a' };
 const b = { b: 'b' } ;

 const c = Object.assign({},a,b);
// const c = e.g{ a:'a', b:'b' }
console.log(c);


//2.const arry = ['aa','bb','cc','dd','ee','ff','gg'];
//のdd,ee,ffを新たな配列として返してください
const arry = ['aa','bb','cc','dd','ee','ff','gg'];
let newarr = arry.slice(-4,-1); //マイナスは後ろから数える

//0324 問15,18,19
//1. 配列
// const array = ['a1','a2','a3','a4','a5']
// の0〜2番目の要素をそれぞれ
// red, green, yellow
// に置き換えて配列にしてください。また実行した際の返り値を教えてください

// const arr = ['a1','a2','a3','a4','a5'];
// let arr2 = arr.replace(/'a1'/g,'red');
// arr2 = arr.replace(/'a2'/g,'green');
// arr2 = arr.replace(/'a3'/g,'yellow');
// console.log(arr2);

const array2 = ['a1','a2','a3','a4','a5'];
array2.splice(0,2,'red','green','yellow');
array2

//2.配列['おはよう','こんにちは','おやすみなさい']の要素 
//がランダムに出力される関数を書いてください。
//(配列に要素が追加される事を仮定してたものにしてください)

const arr2 = ['おはよう','こんにちは','おやすみなさい'];
get =arr2[Math.floor(Math.random() * arr2.length)];
get;

//3.Object.createで空のオブジェクトを作成し、
//値が1のプロパティpを出力してください

const obj = Object.create({},{p: {value:1}});
obj.p;

//0325  問11,13,20
// let arry =[
//   {id:1,name:'morita'},
//   {id:2,name:'kenji'},
//   {id:4,name:'uro'},
//   {id:3,name:'ken'}
//   ];
// をid番号が若い順にソートしたオブジェクトを含む配列を出力してください

let arry3 =[
  {id:1,name:'morita'},
  {id:2,name:'kenji'},
  {id:4,name:'uro'},
  {id:3,name:'ken'}
  ];

arry3.sort(function(a,b){return a.id - b.id});
console.log(arry3)

//a, bの変数はデフォルトとしてaは5、bは7を持ち、aに1を代入してconsole出力してください。
//const {a = 5 ,b = 7} = {a : 1}; 動く
console.log(a,b);

//next()を実行しただけ返り値が1増える関数を定義してください
const counter = function(){
  let count = 0 ;
  return function(){
    return (count += 1);
  }
};
const next = counter();
next();

// コンストラクタWhoの初期化時に'morita'(String)を渡しインスタンスプロパティnameに代入、 インスタンスメソッド
// getNameの返り値がWho.prototype.name値になるいわゆる「classのようなもの」を作成してください 
// ※インスタンスメソッドはprototypeに代入してください

function Who(name){
  this.name = name;
};
Who.prototype.getName = function (){
  console.log(this.name);
} ;
let name2 = new Who('morita');
name2.getName();

//0326
//popアップ
//ボタンのidがbtn,表示するテキストのidがtextのとき
const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
  console.log(text.value);
});

//0327
// 1. 引数：arrayOfPeople - 人の名前の配列 返り値： 与えられた配列の長さ
function numberOfPeople(arrayOfPeople) {
  return arrayOfPeople.length;
}
console.log(numberOfPeople(["Alex", "Non", "Keita"])); 

//2.文章の一部を取り出す
let comment = "今日は良い天気で散歩に行きました。";
//最初から5文字目まで
const result = comment.substring(0,5);
console.log(result);
//5文字目から末尾まで
const result2 = comment.slice(5);
console.log(result2);

//0328 
