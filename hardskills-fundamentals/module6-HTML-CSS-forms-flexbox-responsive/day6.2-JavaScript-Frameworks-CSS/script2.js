const enviar = document.getElementById('enviar');
const limpar = document.getElementById('limpa');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');

// enviar.addEventListener('click', (event) => {
//     event.preventDefault()});

//     if (inputNome.value.length < 10 || inputNome.value > 40) {
//         alert('Dados Inválidos');
//     }
//     if (inputNome.value.length < 10 || inputNome.value > 50) {
//         alert('Dados Inválidos');
//     }
// })

const validation = new JustValidate('#form-trybe', {
    errorFieldCssClass: 'is-invalid',
});

validation.addField('#nome', [
    {
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value: 40,
    }
])

validation.addField('#email', [
    {
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value: 50,
    }
])
validation.addField('#email', [
    {
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value: 50,
    }
])

validation.addField('#concordo2', [
    {
       rule: 'required',
       errorMessage: 'Campo obrigatório'
    }
])

limpar.addEventListener('click', () => {
        document.getElementById('form-trybe').reset()
    })

let teste = document.getElementById('agendamento')
teste.DatePickerX.init({
        mondayFirst: true,
        format: 'yyyy/MM/dd',
        minDate: '2022/03/01',
        maxDate: '2022/06/01',
        weekDayLabels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'],
        shortMonthLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        singleMonthLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        todayButton: true,
        todayButtonLabel: 'Today',
        clearButton: true,
        clearButtonLabel: 'Clear'
    });

