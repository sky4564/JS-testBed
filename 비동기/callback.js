function cry() {
  console.log("cry");
}

function sing() {
  console.log("sing");
}

function dance() {
  console.log("dance");
}

// 1. 기본 함수
// 기분 좋을때 춤을 추고 싶으면 sing()함수에 dance()로 변경해야함
function checkMood(mood) {
  if (mood === "good") {
    sing();
  } else {
    cry();
  }
}

checkMood("good");
checkMood("sad");

// 2. 콜백함수 (함수를 매개변수로 넣어줌)
function checkMoodCallBack(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

checkMoodCallBack("good", dance, cry);
checkMoodCallBack("Not bad", dance, sing);
