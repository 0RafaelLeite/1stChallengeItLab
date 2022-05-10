let urgency = document.getElementById('urg');
let income = document.getElementById('receita');
let expense = document.getElementById('gastos');

type.addEventListener('change',function typeSetUp(){
    if(type.value == '1'){
        value.classList.replace('.','income');
        value.classList.replace('expense','income');
        urgency.classList.add('invisible');
        type.classList.replace('.','income');
        type.classList.replace('expense', 'income');
        income.classList.replace('invisible', '.');
       expense.classList.replace('.','invisible');;
    }
    if(type.value == '2'){
        value.classList.replace('.','expense');
        value.classList.replace('income','expense');
        urgency.classList.remove('invisible');
        type.classList.replace('.','expense');
        type.classList.replace('income','expense');
        expense.classList.replace('invisible', '.');
        income.classList.replace('.','invisible');
    }
});
