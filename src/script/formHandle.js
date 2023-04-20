const form = document.querySelector("#form-orcamento")

console.log(form)

form.addEventListener("submit", (e) => { 
  e.preventDefault()
  console.log('evitou o envio do form')
  this.trigger('submit')
})