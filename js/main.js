//Génération d'un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 100) + 1;

//Récuperation de la zone de saisie de la proposition
let inputProposition = document.getElementById("proposition");
inputProposition.focus()


//Récuperattion du bouton de validation
let buttonValider = document.querySelector(".zoneDeSaisie button");

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

let mainDiv = document.querySelector("main div")

/**
 * Fonction appelée lorsque l'utilisateur  veut faire une autre partie
 */
function rejouerJeu() {
    nombreTour = 1
    inputProposition.disabled = false
    buttonValider.disabled = false
    buttonValider.classList.remove("passif")
    buttonValider.classList.add("active")
    let paragrahes = document.querySelectorAll("p[id]")
    for (let i = 0; i < paragrahes.length; i++) {
        paragrahes[i].innerText = ""
    }

    nombreAleatoire = Math.floor(Math.random() * 100) + 1;
    mainDiv.removeChild(buttonRejouer)
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
    buttonValider.classList.remove("active")
    buttonValider.classList.add("passif")
    buttonRejouer = document.createElement("button")
    buttonRejouer.textContent = "Rejouer"
    buttonRejouer.classList.add("active")
    buttonRejouer.classList.add("transition")
    buttonRejouer.classList.add("ease-out")
    buttonRejouer.classList.add("duration-500")
    buttonRejouer.classList.add("hover:-translate-y-1")
    mainDiv.appendChild(buttonRejouer)
    buttonRejouer.addEventListener("click", rejouerJeu)
}

/**
 *  Fonction qui permet de comparer la valeur entrée par l'utilisateur et le nombre aléatoire
 */
function verifierProposition() {
    let valeurProposition = Number(inputProposition.value)

    if (nombreTour === 1) {
        nombres.innerText = "Propositions précédentes:"
    }
    nombres.innerText += ` ${valeurProposition} `

    if (valeurProposition === nombreAleatoire) {
        resultat.innerHTML = `<span class="font-poppins"> Bravo ! vous avez trouvé le nombre. </span>`
        plusOuMoins.innerText = ""
        terminerJeu()
    } else if (nombreTour === 10) {
        resultat.innerHTML = `<span class="font-poppins"> Perdu ! Le nombre à deviner était :  ${nombreAleatoire} </span>`
        plusOuMoins.innerText = ""
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




