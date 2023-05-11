import "./App.scss";

import Menu from "./Menu.jsx";

//підрахунок візитів на сайт
function showVisits() {
  // Отримуємо поточний лічильник відвідувань з локального сховища
  let visitCount = localStorage.getItem("visitCount");
  // Якщо лічильник не існує в локальному сховищі, ініціалізуємо його зі значенням 1
  if (!visitCount) {
    visitCount = 1;
  } else {
    // Якщо лічильник існує, збільшуємо його значення на 1
    visitCount = parseInt(visitCount) + 1;
  }
  // Зберігаємо нове значення лічильника в локальному сховищі
  localStorage.setItem("visitCount", visitCount);

  // Виводимо кількість відвідувань на сайті
  console.log(`Кількість відвідувань: ${visitCount}`);
}
// час перебування на сайті
// Отримуємо поточний час при завантаженні сторінки
let startTime = new Date().getTime();
// Функція, яка розраховує час перебування та загальний час на сайті
function showCalculateTimeSpent() {
  let timeOnPage = +localStorage.getItem("timeOnPage");
  let lastSession = +localStorage.getItem("timeSpent");
  let totalTimeOnPage = timeOnPage + lastSession;
  localStorage.setItem("timeOnPage", totalTimeOnPage);
  console.log(`Користувач перебував на сайті ${lastSession.toFixed(2)} секунд`);
  console.log(
    `Загальний час перебування користувача на сайті ${totalTimeOnPage.toFixed(
      2
    )} секунд`
  );
}
// Розраховуємо час перебування на сайті
window.addEventListener("beforeunload", () => {
  let closeTime = new Date().getTime();
  let timeSpent = (closeTime - startTime) / 1000;
  localStorage.setItem("timeSpent", timeSpent);
});

//середній час перебування на сайті
function showAverageTimeOnSite() {
  let totalTimeOnPage = +localStorage.getItem("timeOnPage");
  let visitOnPage = +localStorage.getItem("visitCount");
  let averageTime = totalTimeOnPage / visitOnPage;
  console.log(`Середній час на сайті ${averageTime.toFixed(2)} секунд`);
}
showVisits();
showCalculateTimeSpent();
showAverageTimeOnSite();
//

function App() {
  return (
    <>
      <Menu />
    </>
  );
}

export default App;
