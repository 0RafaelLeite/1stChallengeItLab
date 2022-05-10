let urgencia = document.getElementById('urg');
let income = document.getElementById('receita');
let expense = document.getElementById('gastos');
let origin = document.getElementById('origem');

tipo.addEventListener('change',function typeSetUp(){
    if(tipo.value == '1'){
        valor.classList.replace('.','income');
        valor.classList.replace('expense','income');
        urgencia.classList.add('invisible');
        tipo.classList.replace('.','income');
        tipo.classList.replace('expense', 'income');
        income.classList.replace('invisible', '.');
       expense.classList.replace('.','invisible');;
    }
    if(tipo.value == '2'){
        valor.classList.replace('.','expense');
        valor.classList.replace('income','expense');
        urgencia.classList.remove('invisible');
        tipo.classList.replace('.','expense');
        tipo.classList.replace('income','expense');
        expense.classList.replace('invisible', '.');
        income.classList.replace('.','invisible');
    }
});
