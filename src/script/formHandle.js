console.log('entrou no form handler');

const form = document.querySelector('#form-orcamento');
const button = document.querySelector('#botaoEnviarForm')




button.addEventListener('click', (e)=> {
  e.preventDefault();
  console.log('click submit')
  const dataForm = new FormData(form)
  console.log(dataForm)

  fetch('http://localhost:3000/', {
    method: 'POST',
    body: dataForm,
    mode: 'cors',
    cache: 'default'
  })

  alert('Success');
})