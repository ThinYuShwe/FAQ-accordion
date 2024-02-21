const plusButton = document.querySelectorAll(".plus");
const minusButton = document.querySelectorAll(".minus");
const answer = document.querySelectorAll(".answer");

plusButton.forEach((plusButton, index) => {
  plusButton.addEventListener("click", function () {
    answer[index].style.display = "block";
    plusButton.style.display = "none";
    minusButton[index].style.display = "inline";
  });
});

minusButton.forEach((minusButton, index) => {
  minusButton.addEventListener("click", function () {
    answer[index].style.display = "none";
    plusButton[index].style.display = "inline";
    minusButton.style.display = "none";
  });
});
