document.addEventListener('DOMContentLoaded', function () {
  let correctAnswersCount = 0;
  const totalQuestions = 9;

  document.querySelector('.button-matrix').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      const button = event.target;
      if (isAnswerCorrect(button)) { // Supponendo che tu abbia una funzione chiamata isAnswerCorrect
        button.classList.add('correct-answer');
        correctAnswersCount++;
        if (correctAnswersCount === totalQuestions) {
          // Seleziona tutti gli elementi con la classe .anagram-word
          let words = document.querySelectorAll('.anagram-word');
          words.forEach(function (word) {
            word.style.opacity = 1;
            word.style.filter = 'blur(0px)';
            word.style.color  = 'black';
          });
          let button_item = document.querySelectorAll('.button-item');
          button_item.forEach(function (butt) {
            butt.style.backgroundColor = "#84A59D";
          });
          // Inizializza Sortable solo quando tutte le risposte sono corrette
          let sortable = Sortable.create(document.querySelector('.button-matrix'), {
            animation: 150
          });
        }
      }
    }
  });
});

function isAnswerCorrect(button) {
  // La tua logica qui per determinare se la risposta è corretta
  // Ad esempio, puoi avere un dataset associato ad ogni pulsante o fare una richiesta AJAX
  return true; // Questo è solo un esempio, sostituisci con la tua logica
}
