const btnSubmit = document.querySelector("#submit");
const resultField = document.querySelector("#resultField");
const resultDay = document.querySelector("#resultDay");
const btnPractice = document.querySelector("#goPractice");
const btnshare = document.querySelector("#share");

// 시간 계산하기
if (btnSubmit) {
  btnSubmit.addEventListener("click", event => {
    event.preventDefault();
    const field = document.querySelector("#field").value;
    const time = document.querySelector("#time").value;

    if (parseInt(time) > 24) {
      alert("하루에 24시간 이상 훈련할 순 없어요!");
      return;
    }

    const day = Math.ceil(10000 / time);

    resultField.innerHTML = field;
    resultDay.innerHTML = day;
  });
}

// 훈련하러 가기 버튼, 모달창 띄우기
if (btnPractice) {
  btnPractice.addEventListener("click", event => {
    event.preventDefault();
    const modal = document.querySelector("#bgModal");
    const btnModalClose = document.querySelector("#btnModalClose");

    modal.style.display = "flex";
    btnModalClose.addEventListener("click", event => {
      event.preventDefault();
      modal.style.display = "none";
    });
  });
}

// 공유하기
if (btnshare) {
  btnshare.addEventListener("click", event => {
    const tempCont = document.querySelector("#url");
    tempCont.value = document.location.href;

    tempCont.focus();
    tempCont.select();

    // execCommand가 더이상 지원되지 않음.
    document.execCommand("copy");

    alert("현재 URL이 클립보드에 복사 되었습니다.");
  });
}
