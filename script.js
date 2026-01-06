const ratingCard = document.getElementById("rating-card");
const thankCard = document.getElementById("thank-card");
const ratingButton = document.querySelectorAll("[data-rate]");
const submitButton = document.getElementById("submit");
const selectedRating = document.getElementById("selected-rating");

let currentRating = null;

thankCard.classList.add("hidden");

ratingButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingButton.forEach((b) => {
      b.classList.remove("bg-white", "text-grey-900");
      b.classList.add("bg-grey-500/10");
    });

    btn.classList.remove("bg-grey-500/10");
    btn.classList.add("bg-white", "text-grey-900");

    currentRating = btn.dataset.rate;
  });
});

submitButton.addEventListener("click", () => {
  if (!currentRating) return;

  selectedRating.textContent = currentRating + " ";

  ratingCard.classList.add("hidden");
  thankCard.classList.remove("hidden");
});
