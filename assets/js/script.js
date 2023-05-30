const rateBtnLeft = document.querySelectorAll(".rate-btn")[0];
const rateBtnRight = document.querySelectorAll(".rate-btn")[1];
const round = document.getElementsByClassName("rate-arrow__round");
const rateCard = document.getElementsByClassName("rate-card");
var count = 0;

rateBtnRight.addEventListener("click", function () {
  count++;
  if (count == 3) count = 0;
  changeRound(count, round, rateCard);
});
rateBtnLeft.addEventListener("click", function () {
  count--;
  if (count == -1) count = 2;
  changeRound(count, round, rateCard);
});
// Hàm đổi round -> rectangle
function changeRound(count, round, rateCard) {
  if (count == 1) {
    cBorderRed(rateCard[1]);
    cBorderGray(rateCard[0]);
    cBorderGray(rateCard[2]);
    cRectangle(round[1]);
    cRound(round[0]);
    cRound(round[2]);
  } else if (count == 2) {
    cBorderRed(rateCard[2]);
    cBorderGray(rateCard[1]);
    cBorderGray(rateCard[0]);
    cRectangle(round[2]);
    cRound(round[0]);
    cRound(round[1]);
  } else {
    cBorderRed(rateCard[0]);
    cBorderGray(rateCard[1]);
    cBorderGray(rateCard[2]);
    cRectangle(round[0]);
    cRound(round[1]);
    cRound(round[2]);
  }
}

function cRectangle(round) {
  round.style.backgroundColor = "rgba(245, 56, 56, 1)";
  round.style.width = "40px";
  round.style.borderRadius = "8px";
}

function cRound(round) {
  round.style.width = "15px";
  round.style.borderRadius = "50%";
  round.style.backgroundColor = "rgba(221, 224, 228, 1)";
}

function cBorderGray(rateCard) {
  rateCard.style.border = "2px solid rgba(221, 224, 228, 1)";
}

function cBorderRed(rateCard) {
  rateCard.style.border = "2px solid rgba(245, 56, 56, 1)";
}
