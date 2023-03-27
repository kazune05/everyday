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