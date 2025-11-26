
// Validação do campo Nome Completo
const InputNome = document.getElementById('nome'); //puxando oq está sendo escrito em "nome" do html
const nomePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/g; //pattern que permite letras (maiúsculas e minúsculas), espaços, hífens e apóstrofos
InputNome.addEventListener('input', function() { //listener recebe um informação, nesse caso está recebendo o evento de input

let valor = InputNome.value; //Pega o que o usuário digitou no campo de texto (InputNome) e dps oloca esse texto dentro da variável chamada valor
    valor = valor.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s'-]/g, ''); //Procura por caracteres não permitidos usando o regex
    InputNome.value = valor; //Atualiza o valor do campo de texto, deixando só os caracteres válidos
        if (!nomePattern.test(valor)) { //Verifica se o texto não corresponde ao padrão do nomePattern
            InputNome.setCustomValidity('Por favor, insira um nome válido. Apenas letras, espaços, hífens e apóstrofos são permitidos.');
        } else {
            InputNome.setCustomValidity('');
        }
});
