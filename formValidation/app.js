const nameInput = document.querySelector("input[name='name']")
const emailInput = document.querySelector("input[name='email']")
const phoneInput = document.querySelector("input[name='phone']")
const msgInput = document.querySelector("textarea[name='msg']")
const thankyou = document.querySelector('.thank-you')
console.log(nameInput)
// getting form
const form = document.querySelector('form')
console.log(form)

let isFormValid = false
let isValidationOn = false
//helper function
const resetElement = (el) => {
  el.classList.remove('invalid')
  el.nextElementSibling.classList.add('hidden')
}
const invalidateElement = (el) => {
  el.classList.add('invalid')
  el.nextElementSibling.classList.remove('hidden')
}
const validateInputs = () => {
  // nameInput.classList.remove('invalid')
  //nameInput.nextElementSibling.classList.add('hidden')
  if (!isValidationOn) return
  resetElement(nameInput)
  resetElement(emailInput)
  resetElement(phoneInput)
  resetElement(msgInput)
  // if input fields are availble we se t isformvalid=true
  isFormValid = true
  if (!nameInput.value) {
    // nameInput.classList.add('invalid')
    // nameInput.nextElementSibling.classList.remove('hidden')
    invalidateElement(nameInput)

    // if input fields are not availble we se t isformvalid=true
    isFormValid = false
  }
  if (!isValidEmail(emailInput.value)) {
    invalidateElement(emailInput)
    isFormValid = false
  }
  if (!isValidPhone(phoneInput.value)) {
    invalidateElement(phoneInput)
    isFormValid = false
  }
  if (!msgInput.value) {
    invalidateElement(msgInput)
    isFormValid = false
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  isValidationOn = true
  validateInputs()
  if (isFormValid) {
    // to clear form field and show some success msg
    form.remove()
    thankyou.classList.remove('hidden')
  }

  console.log('here')
})
const inputs = [nameInput, emailInput, phoneInput, msgInput]

inputs.forEach((e) => {
  addEventListener('input', () => {
    // input means if something is typed
    validateInputs()
  })
})

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  return re.test(String(phone).toLowerCase())
}
