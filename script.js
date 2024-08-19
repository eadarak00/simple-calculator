let ecran = document.querySelector("#display")
let operateur;
let valeur;

function afficherSaisie(c) {
    ecran.value += c
}
function effacerEcran(){
    ecran.value =""
}
function ajouterOperateur(op){
    operateur = op;
    afficherSaisie(op)
}
function calculerResultats(){
    valeur = ecran.value
    const ops = valeur.split(operateur)
    let result;
    let op1 = parseFloat(ops[0]);
    let op2 = parseFloat(ops[1]);

    
    switch (operateur){
        case "+" :
            result = op1 + op2;
            break;
        case "-" : 
            result = op1 - op2;
            break;
        case '*': 
            result = op1 * op2;
            break;
        case '/':
            if(op2 == 0){
                result = "ERROR"
            }
            else{
                result = op1 / op2;

            }
            break;

    }

    if(valeur  === "" || isNaN(result)){
        result= "";
    }

    ecran.value = result
    
    if(result === 'ERROR'){
        setInterval(() =>{
            effacerEcran();
        }, 1500)
    }
}