console.log('entrou no form handler');

const form = document.querySelector('#form-orcamento');
const button = document.querySelector('#botaoEnviarForm');
const myModal = new bootstrap.Modal('#modalHeader')
const popupSuccess = document.querySelector('#popup-success')
const popupSuccessButton = document.querySelector('#popupCloseButton');

form.addEventListener('submit',  async function(e){
  e.preventDefault();
 
  const prePayload = new FormData(form);
  const data = Object.fromEntries(prePayload)
  console.log(data)

  fetch('http://localhost:3000', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data =>  { 
          myModal.hide();
          popupSuccess.classList.add('open-popup')
          setTimeout(()=> {
            popupSuccess.classList.remove('open-popup')
          }, 4000) 
        }
    )
    .catch(err => alert('Houve algum erro ao enviar a sua'))
})


  popupSuccessButton.addEventListener('click', ()=> {
    popupSuccess.classList.remove('open-popup')
  })