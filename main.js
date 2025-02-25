'use strict'

const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const radio4 = document.getElementById("radio4");
const radio5 = document.getElementById("radio5");
const radio6 = document.getElementById("radio6");

const image = document.getElementById("pika");

const q1_answer = "ピカチュウ";

//radio1のテキストを取得しselectedAnswerに格納
radio1.addEventListener('click', () => {
  const selectedAnswer = radio1.textContent;
//checkAnswer関数を呼び出し、後から使えるようにする
  checkAnswer(selectedAnswer, q1_answer);
});

radio2.addEventListener('click', () => {
  const selectedAnswer = radio2.textContent;
  checkAnswer(selectedAnswer, q1_answer);
});


radio3.addEventListener('click', () => {
  const selectedAnswer = radio3.textContent;
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

radio4.addEventListener('click',()=>{
  const selectAnswer = radio4.textContent;
  checkAnswer(selectAnswer,q2_answer);
});

radio5.addEventListener(`click`,()=>{
  const selectAnswer =radio5.textContent;
  checkAnswer(selectAnswer,q2_answer);
});

radio6.addEventListener(`click`,()=>{
  const selectAnsewer =radio6.textContent;
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

//画像のアニメーション
image.addEventListener('click', () => {
  image.classList.add('shake');

  // アニメーション終了後にクラスを削除
  image.addEventListener('animationend', () => {
    image.classList.remove('shake');
  }, { once: true });
});

