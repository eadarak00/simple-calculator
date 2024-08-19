const ecran = document.querySelector("#display");
let onOffButton = document.querySelector("#OnOff");
let isOn = false;
let valeurInitial;
let operateur;

function allumerOuEteindre() {
    isOn = !isOn;

    if (isOn) {
        ecran.value = "0";
        valeurInitial = true;
        onOffButton.style.backgroundColor = "#b03a2e";
        console.log("La calculatrice est en mode ON!!");
    } else {
        ecran.value = "";
        onOffButton.style.backgroundColor = "#EEE";
        console.log("La calculatrice est en mode OFF!!");
    }
}

function afficherSaisie(c) {
    if (isOn) {
        if (valeurInitial) {
            ecran.value = c;
            valeurInitial = false;
        } else {
            ecran.value += c;
        }
    }
}

function effacerEcran() {
    if (isOn) {
        ecran.value = "0";
        valeurInitial = true;
    }
}

function supprimer() {
    if (isOn) {
        const valeur = ecran.value;
        ecran.value = valeur.slice(0, -1);
    }
}

function ajouterOperateur(op) {
    if (isOn) {
        operateur = op;
        afficherSaisie(op);
    }
}

function calculerResultats() {
    if (isOn) {
        let result;

        try {
            const [op1, op2] = parseOperandes(ecran.value, operateur);
            result = effectuerCalcul(op1, op2, operateur);
            
            if (!isFinite(result)) {
                throw new Error("Résultat non valide");
            }

        } catch (error) {
            console.error(error.message);
            result = "ERROR";
        } finally {
            ecran.value = result;
        }
    }
}

function parseOperandes(valeur, operateur) {
    const ops = valeur.split(operateur);
    const op1 = parseFloat(ops[0]);
    const op2 = parseFloat(ops[1]);

    if (isNaN(op1) || isNaN(op2)) {
        throw new Error("Opérandes non valides");
    }

    return [op1, op2];
}

function effectuerCalcul(op1, op2, operateur) {
    switch (operateur) {
        case "+":
            return op1 + op2;
        case "-":
            return op1 - op2;
        case "*":
            return op1 * op2;
        case "/":
            if (op2 === 0) {
                throw new Error("Division par zéro");
            }
            return op1 / op2;
        default:
            throw new Error("Opérateur non supporté");
    }
}


// function calculerResultats() {
//     let result;
    
//     try {
//         result = eval(ecran.value);
        
//         if (!isFinite(result)) {
//             throw new Error("Résultat non valide");
//         }

//     } catch (error) {
//         console.error(error.message);
//         result = "ERROR";
//     } finally {
//         ecran.value = result;
//     }
// }
