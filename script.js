const ratingCard = document.getElementById("rating-card");
const thankCard = document.getElementById("thank-card");
const ratingButton = document.querySelectorAll("[data-rate]");
const submitButton = document.getElementById("submit");
const selectedRating = document.getElementById("selected-rating");

let currentRating = null;

thankCard.classList.add("hidden");

ratingButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.remove("bg-grey-500/10");
    btn.classList.add("bg-white");

    currentRating = btn.dataset.rate;
  });
});

submitButton.addEventListener("click", () => {
  if (!currentRating) return;

  selectedRating.textContent = currentRating + " ";

  ratingCard.classList.add("hidden");
  thankCard.classList.remove("hidden");
});
