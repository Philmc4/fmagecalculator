const inputDay = document.getElementById("day");
const dayError = document.getElementById("day-error");
const inputMonth = document.getElementById("month");
const monthError = document.getElementById("month-error");
const inputYear = document.getElementById("year");
const yearError = document.getElementById("year-error");
const submit = document.getElementById("submit-btn");
const yearResult = document.getElementById("year-result");
const monthResult = document.getElementById("months-result");
const dayResult = document.getElementById("days-result");
const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");

function dayInput() {
  let value = inputDay.value;
  if (value == "") {
    dayError.innerText = "This fied is required";
    dayLabel.style.color = "var(--Red-400)";
  } else if (value < 1 || value > 31) {
    dayError.innerText = "Must be a valid day";
    dayLabel.style.color = "var(--Red-400)";
  } else {
    return true;
  }
}
function monthInput() {
  let value = inputMonth.value;
  if (value == "") {
    monthError.innerText = "This fied is required";
    monthLabel.style.color = "var(--Red-400)";
  } else if (value < 1 || value > 12) {
    monthError.innerText = "Must be a valid month";
    monthLabel.style.color = "var(--Red-400)";
  } else {
    return true;
  }
}
function yearInput() {
  let value = inputYear.value;
  let currentYear = new Date().getFullYear();
  if (value == "") {
    yearError.innerText = "This fied is required";
    yearLabel.style.color = "var(--Red-400)";
  } else if (value > currentYear) {
    yearError.innerText = "Must be in the past";
    yearLabel.style.color = "var(--Red-400)";
  } else {
    return true;
  }
}

function calculateAge(birthday) {
  var birthdate = new Date(birthday);
  var today = new Date();

  var years = today.getFullYear() - birthdate.getFullYear();
  var months = today.getMonth() - birthdate.getMonth();
  var days = today.getDate() - birthdate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months === 0) {
      months = 11;
    } else {
      months = 12 + months;
    }
    days = 30 + days;
  }
  yearResult.innerText = years;
  monthResult.innerText = months;
  dayResult.innerText = days;
}

const logInfo = submit.addEventListener("click", (e) => {
  e.preventDefault();
  let day = dayInput();
  let month = monthInput();
  let year = yearInput();
  if (!day || !month || !year) return;
  let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
  calculateAge(birthday);
});
