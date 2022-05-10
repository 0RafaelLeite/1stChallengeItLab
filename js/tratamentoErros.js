let currentBalance = document.getElementById('balance');
let type = document.getElementById('iType');
let description = document.getElementById('desc');
let origin = document.getElementById('origin');
let value = document.getElementById('iValue');
let settlement = document.getElementById('settlement');
let validity = document.getElementById('validity');
let errorMessage = document.getElementById('error-message');
let errorList = [];

function validatesType(){
    if(type.value == '0'){
        errorList.push('Selecione um tipo');
    }
}

function validatesOrigin(){
    if(origin.value == '0'){
        errorList.push('Selecione a origem');
    }
}

function validatesDescription(){
    var allowedChars = ['a', 'A', 'b', 'B', 'c', 'C', 'd','D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y' , 'z', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ']
    for (var i = 0; i < description.value.length; i++){
        if (allowedChars.indexOf(description.value.charAt(i)) == -1){
            errorList.push('Caracteres especiais não são permitidos');
            break;
        }
    }
    if(description.value.length < 4 || description.value.length > 40){
        errorList.push('Descrição insuficiente');
    }
}

function validatesValue(){
    Number(value);
    if(value.value <= 0 || value.value > 9999999 || isNaN(value.value)){
        errorList.push('Valor deve ser maior que 0');
    }
    if(value.value.length == 0){
        errorList.push('Campo valor está vazio');
    }
}

function validatesDate(){
    var date1 = new Date(settlement.value);
    var date2 = new Date(validity.value);
    if(validity.value.length == 0){
        errorList.push('Campo de data está vazio');
    }
}

function validatesForm(){
    errorList = []
    if(validatesType() || validatesDescription() || validatesOrigin() || validatesValue() || validatesDate()){
        
    }

    if(errorList.length > 1){
        return false
    }
}

function showErrorMessage(errorList){
    let ul = document.querySelector("#error-message");
    ul.innerHTML = "";
    for(i = 0; i <= errorList.length; i++){
        var li = document.createElement("li");
        li.textContent = errorList[i];
        ul.appendChild(li);
    };
}