'use strict'

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

const image = document.getElementById("pika");

const q1_answer = "ピカチュウ";


//btn1のテキストを取得しselectedAnswerに格納
btn1.addEventListener('click', () => {
  const selectedAnswer = btn1.textContent;

  //checkAnswer関数を呼び出し
  checkAnswer(selectedAnswer, q1_answer);
});

btn2.addEventListener('click', () => {
  const selectedAnswer = btn2.textContent;
  checkAnswer(selectedAnswer, q1_answer);
});


btn3.addEventListener('click', () => {
  const selectedAnswer = btn3.textContent;
  checkAnswer(selectedAnswer, q1_answer);
});

// checkAnswer関数の定義
//正解かどうかを判定する関数
function checkAnswer(answer, correctAnswer) {
  if (answer === correctAnswer)
     {
    console.log("正解!!");
    alert("正解!!");
  } else {
    console.log("不正解!!");
    alert("不正解!");
  }
}

const q2_answer = "ほっぺが赤い";

btn4.addEventListener('click',()=>{
  const selectAnswer = btn4.textContent;
  checkAnswer(selectAnswer,q2_answer);
});

btn5.addEventListener(`click`,()=>{
  const selectAnswer =btn5.textContent;
  checkAnswer(selectAnswer,q2_answer);
});

btn6.addEventListener(`click`,()=>{
  const selectAnsewer =btn6.textContent;
  checkAnswer(selectAnsewer,q2_answer);
});

function checkAnswer(answer, correctAnswer) {
  if (answer === correctAnswer) {
    console.log("正解!!");
    alert("正解!!");
  } else {
    console.log("不正解!!");
    alert("不正解!");
  }
}

// 記入式問題の要素を取得
const textInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");

// 記入式問題の正解を設定
const q4_answer = "サトシ";

// 送信ボタンのイベントリスナー
submitButton.addEventListener('click', (event) => {
  // submitイベントの発生元であるフォームが持つデフォルトの動作をキャンセル
  event.preventDefault();  
  const inputAnswer = textInput.value;  // 入力値を取得
  
  // 削除したい対象文字列の前後の空白を削除する
  checkTextAnswer(inputAnswer.trim(), q4_answer);
});

// 記入式問題用の判定関数
function checkTextAnswer(answer, correctAnswer) {
  if (answer === correctAnswer) {
    console.log("正解!!");
    alert("正解!!");
    textInput.value = "";  // 入力欄をクリア
  } else {
    console.log("不正解!!");
    alert("不正解!");
  }
}



// 画像の配列を定義
const images = [
  'images/pika1.png',
  'images/pika2.png',
  'images/pika3.png',
  'images/pika4.png',
  'images/pika5.png'
];

// 画像要素の取得
const randomImage = document.getElementById('random-image');
const changeButton = document.getElementById('change-button');

// ランダムな画像を表示する関数
function displayRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  randomImage.src = images[randomIndex];
  
  // アニメーションクラスを追加
  randomImage.classList.add('fade-in');
  
  // アニメーション終了後にクラスを削除
  randomImage.addEventListener('animationend', () => {
    randomImage.classList.remove('fade-in');
  }, { once: true });
}
// ボタンクリック時に画像を変更
changeButton.addEventListener('click', displayRandomImage);

// ページ読み込み時に最初の画像を表示
displayRandomImage();



//画像のアニメーション
image.addEventListener('click', () => {
  image.classList.add('shake');

  // アニメーション終了後にクラスを削除
  image.addEventListener('animationend', () => {
    image.classList.remove('shake');
  }, { once: true });
});

