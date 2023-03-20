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


