//Génération d'un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 100) + 1;

//Récuperation de la zone de saisie de la proposition
let inputProposition = document.getElementById("proposition");


//Récuperattion du bouton de validation
let buttonValider = document.querySelector("#proposition + button");

//Récupération du paragrahe contenant tous les nombres saisis
let nombres = document.getElementById("nombres");

//Récuperation du paragraphe contenant le résultat de la comparaison
let resultat = document.getElementById("resultat");

//récupération du paragraphe contenant l'évaluation du plus ou mois 
let plusOuMoins = document.getElementById("plusOuMoins");

//Déclaration de la variable contenant le nombre de tour
let nombreTour = 1;

//Déclaration de la variable  contenant le bouton rejouer 
let buttonRejouer;

/**
 * Fonction appelée lorsque l'utilisateur  veut faire une autre partie
 */
function rejouerJeu() {
    nombreTour = 1
    inputProposition.disabled = false
    buttonValider.disabled = false
    let paragrahes = document.querySelectorAll("p[id]")
    for (let i = 0; i < paragrahes.length; i++) {
        paragrahes[i].innerText = ""
    }

    nombreAleatoire = Math.floor(Math.random() * 100) + 1;
    document.body.removeChild(buttonRejouer)
    inputProposition.value = ""
    inputProposition.focus()
}

/**
 * Fonction appelée si le valeur entrée par l'utilisateur est égale au nombre aléatoire
 * ou si le nombre de tour est égale à 10
 */
function terminerJeu() {
    inputProposition.disabled = true
    buttonValider.disabled = true
    buttonRejouer = document.createElement("button")
    buttonRejouer.textContent = "Rejouer"
    document.body.appendChild(buttonRejouer)
    buttonRejouer.addEventListener("click", rejouerJeu)
}

/**
 *  Fonction qui permet de comparer la valeur entrée par l'utilisateur et le nombre aléatoire
 */
function verifierProposition() {
    let valeurProposition = Number(inputProposition.value)

    if (nombreTour === 1) {
        nombres.innerText = "Proposition précédentes:"
    }
    nombres.innerText += ` ${valeurProposition} `

    if (valeurProposition === nombreAleatoire) {
        resultat.innerText = "Bravo, vous avez trouvé le nombre"
        plusOuMoins.innerText = ""
        terminerJeu()
    } else if (nombreTour === 10) {
        resultat.innerText = `Perdu ! Le nombre à deviner était ${nombreAleatoire}`
        terminerJeu()
    } else {
        resultat.innerText = "Faux"
        if (valeurProposition < nombreAleatoire) {
            plusOuMoins.innerText = "C'est moins !"
        } else if (valeurProposition > nombreAleatoire) {
            plusOuMoins.innerText = "C'est plus !"
        }
    }

    nombreTour++
    inputProposition.value = ""
    inputProposition.focus()
}

buttonValider.addEventListener("click", verifierProposition)




