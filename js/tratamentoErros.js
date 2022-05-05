let saldoAtual = document.getElementById('iSaldo');
let tipo = document.getElementById('iTipo');
let desc = document.getElementById('desc');
let origem = document.getElementById('origem');
let valor = document.getElementById('iValor');
let liq = document.getElementById('iLiq');
let val = document.getElementById('iVal');
let vali = document.getElementById('validar');
let mensagemErro = document.getElementById('mensagem-erro');
let errosLista = [];

function validaTipo(){
    if(tipo.value == '0'){
        errosLista.push('Selecione um tipo');
    }
}

function validaOrigem(){
    if(origem.value == '0'){
        errosLista.push('Selecione a origem');
    }
}

function validaDesc(){
    var pChars = ['a', 'A', 'b', 'B', 'c', 'C', 'd','D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y' , 'z', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ']
    for (var i = 0; i < desc.value.length; i++){
        if (pChars.indexOf(desc.value.charAt(i)) == -1){
            errosLista.push('Caracteres especial não são permitidos');
            break;
        }
    }
    if(desc.value.length < 4 || desc.value.length > 40){
        errosLista.push('Descrição insuficiente');
    }
}

function validaValor(){
    Number(valor);
    if(valor.value <= 0 || valor.value > 9999999 || isNaN(valor.value)){
        errosLista.push('Valor deve ser maior que 0');
    }
    if(valor.value.length == 0){
        errosLista.push('Campo valor está vazio');
    }
}

function validaDatas(){
    var date1 = new Date(liq.value);
    var date2 = new Date(val.value);
    if(val.value.length == 0){
        errosLista.push('Campo de data está vazio');
    }
}

function validaForm(){
    errosLista = []
    if(validaTipo() || validaDesc() || validaOrigem() || validaValor() || validaDatas()){
        
    }

    if(errosLista.length > 1){
        return false
    }
    console.log(errosLista);
}

function exibeMensagemErro(errosLista){
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    for(i = 0; i <= errosLista.length; i++){
        var li = document.createElement("li");
        li.textContent = errosLista[i];
        ul.appendChild(li);
    };
}