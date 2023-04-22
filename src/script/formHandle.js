console.log('entrou no form handler');

const form = document.querySelector('#form-orcamento');
const button = document.querySelector('#botaoEnviarForm');
var myModalEl = document.getElementById('modalHeader');
var modal = new bootstrap.Modal(myModalEl);

const formSubmit = async (e) => {
  e.preventDefault();
  try{
    const elementsForm = form.elements;
  const body = {}
  for(i = 0; i < elementsForm.length; i++) {
    const item = elementsForm.item(i);
    body[item.name] = item.value;
  }

  const formData = new FormData(form);
  const formProps = Object.fromEntries(formData);

  console.log(formProps);
  console.log(body);

  await fetch('http://localhost:3000/', {
    method: 'POST',
    body,
  })

  console.log('entrou no envio')


  alert('Successfully submitted')
  console.log('enviou')
  modal.hide();
  }catch(e){
    alert('Ocorreu um erro, tente enviar novamente!')
  }
  
 
}

button.on('click', formSubmit);