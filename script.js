/** 
Variables:
- animateBtn: Référence l'élément HTML avec l'ID 'animateBtn-1'.
- result: Référence l'élément HTML avec l'ID 'result-1'.
- message: Référence le premier élément HTML avec la classe 'message'.
- animateBtn2: Référence l'élément HTML avec l'ID 'animateBtn-2'.
- result2: Référence l'élément HTML avec l'ID 'result-2'.
*/
const animateBtn = document.getElementById("animateBtn-1");
const result = document.getElementById("result-1");
const message = document.querySelector(".message");
const animateBtn2 = document.getElementById("animateBtn-2");
const result2 = document.getElementById("result-2");

/**
Description:
Cette fonction affiche le message en haut de la page.
*/
const showMessage = () => {
  message.classList.add("show");
  setTimeout(() => {
    message.classList.add("hide");
    setTimeout(() => {
      message.classList.remove("show", "hide");
    }, 100);
  }, 100);
};

/**
Description:
Cette fonction génère un nombre aléatoire entre 1 et 6 et l'affiche dans l'élément HTML avec l'ID 'result-1'.
*/
const randomDice1 = () => {
  result.innerHTML =
    1 + Math.floor(Math.random() * Math.floor(Math.random() * 6));
  showMessage();
};

/**
Description:
Cette fonction génère un nombre aléatoire entre 1 et 6 et l'affiche dans l'élément HTML avec l'ID 'result-2'.
*/
const randomDice2 = () => {
  result2.innerHTML = 1 + Math.floor(Math.random() * 6);
  showMessage();
};

/** 
Description:
Ce code ajoute des écouteurs d'événements à deux boutons, `animateBtn` et `animateBtn2`. 
Lorsque `animateBtn` est cliqué, la fonction `randomDice1` est exécutée.
Lorsque `animateBtn2` est cliqué, la fonction `randomDice2` est exécutée.
*/
animateBtn.addEventListener("click", randomDice1);
animateBtn2.addEventListener("click", randomDice2);
