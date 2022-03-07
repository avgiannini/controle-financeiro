// código para exibir modal mediante click
const btnReceita = document.querySelector('#btn-receita');
const btnDespesa = document.querySelector('#btn-despesa');
const modalReceitas = document.querySelector('#receitas');
const modalDespesas = document.querySelector('#despesas');
const btnCancelarReceita = document.querySelector('#btn-cancelar-receita');
const btnCancelarDespesa = document.querySelector('#btn-cancelar-despesa');

btnReceita.addEventListener('click', () => {
  modalReceitas.style.display = 'flex';
});

btnDespesa.addEventListener('click', () => {
  modalDespesas.style.display = 'flex';
});

btnCancelarReceita.addEventListener('click', () => {
  modalReceitas.style.display = 'none';
});

btnCancelarDespesa.addEventListener('click', () => {
  modalDespesas.style.display = 'none';
});