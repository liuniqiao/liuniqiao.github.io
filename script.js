const e = document.createElement("h1");
e.id = "congrats";
document.querySelector("body").appendChild(e);

const update = () => {
  const congrats = e;

  const now = new Date();
  const currentYear = now.getFullYear();
  const birthdayThisYear = new Date(currentYear, 5, 16); // June = month 5


  // Today is birthday
  if (now.toDateString() === birthdayThisYear.toDateString()) {
    congrats.innerHTML = `
      Today is ${now.toLocaleDateString("en-US")} 
      <br>
      <span class="birthday-text">and it's Q's birthday! 🎉🎉🎉</span>
      <br>
      I am a beautiful young ${currentYear-2000} years old girl, <a href="https://t.me/lnq1032244560">go congratulate me!! </a>
    `;
    return;
  }

  // Next birthday
  const target = now > birthdayThisYear 
    ? new Date(currentYear + 1, 5, 16) 
    : birthdayThisYear;

  let diff = Math.max(0, target - now);

  const days = Math.floor(diff / (24 * 3600 * 1000));
  diff -= days * (24 * 3600 * 1000);
  const hours = Math.floor(diff / (3600 * 1000));
  diff -= hours * (3600 * 1000);
  const minutes = Math.floor(diff / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);

  congrats.textContent = 
    `Today is ${now.toLocaleDateString("en-US")} and it's ${days}d ${hours}h ${minutes}m ${seconds}s until Q's birthday!`;
};

update(); setInterval(update, 1000);
