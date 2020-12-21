export const formDataFormat = (event: any) => {
  const { target } = event
  let formValues = {}

  for (let index = 0; index < target.length; index++) {
    const dataForm = target[index]

    if (dataForm.name && dataForm.type !== 'submit') {
      formValues[dataForm.name] = dataForm.value
    }
  }
  return formValues
}

export const validationEmail = (email: string) => {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

export const validationPassword = (password: string) => {
  // const letter = /[a-zA-Z]/
  // const number = /[0-9]/
  // if (password.length >= 6 && letter.test(password) && number.test(password)) {
  if (password.length >= 6) {
    return true
  }
  return false
}
