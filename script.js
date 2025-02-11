document.addEventListener("DOMContentLoaded", function () {
  let datePicker = document.getElementById("datePicker");
  let alertShown = false; // Verhindert wiederholte Pop-ups

  // Setze das minimale Datum auf den 21. Februar
  let minDate = new Date();
  minDate.setFullYear(new Date().getFullYear(), 1, 21);

  let minDateString = minDate.toISOString().split("T")[0];
  datePicker.setAttribute("min", minDateString);

  // Hinweis nur einmal anzeigen, wenn das Datumseingabefeld geöffnet wird
  datePicker.addEventListener("focus", function () {
    if (!alertShown) {
      alert(
        "Bitte wähle ein Datum nach dem 20. Februar, da dein Bf für eure gemeinsame Zukunft arbeitet ❤️! 📅"
      );
      alertShown = true; // Setzt die Variable auf "true", damit die Meldung nicht erneut erscheint
    }
  });
});

let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let gifNo = document.getElementById("funnyGifNo");
let gifYes = document.getElementById("funnyGifYes");

yesBtn.addEventListener("click", function () {
  let selectedDate = document.getElementById("datePicker").value;

  if (selectedDate) {
    alert(
      `Ich liebe dich! ❤️ Ich freue mich auf unser Date am ${selectedDate}!`
    );

    // GIF für "Ja" anzeigen
    gifYes.style.display = "block";

    // Nach 1,5 Sekunden das GIF wieder ausblenden
    setTimeout(() => {
      gifYes.style.display = "none";
    }, 1500);
  } else {
    alert("Bitte wähle ein Datum für unser Date! 😊");
  }
});

noBtn.addEventListener("click", function () {
  // GIF für "Nein" anzeigen
  gifNo.style.display = "block";

  // Nach 1,5 Sekunden das GIF wieder ausblenden
  setTimeout(() => {
    gifNo.style.display = "none";
  }, 1500);

  // Button an eine neue zufällige Position verschieben
  let x = Math.random() * (window.innerWidth - 150);
  let y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
