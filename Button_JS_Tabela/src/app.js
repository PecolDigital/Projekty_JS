//Pobieranie Przycisku
const btn = document.querySelector("button");

//Inicjalizacja Licznika
let number = 1;

//Dodanie Nasłuchiwania na Kliknięcie
btn.addEventListener("click", () => {
  //Pobranie Listy
  const ul = document.querySelector("ul");

  //Utworzenie Nowego Elementu Listy
  const li = document.createElement("li");

  //Ustawienie Tekstu Elementu Listy
  li.textContent = number;

  //Sprawdzenie Czy Liczba Jest Podzielna Przez 3
  if (number % 3 === 0) {
    //Zmiana Koloru i Pogrubienie Tekstu
    li.style.color = "blue";
    li.style.fontWeight = "bold";
  }

  //Zwiększenie Licznika o 2
  number += 2;

  //Dodanie Elementu Listy do Listy
  ul.appendChild(li);
});
