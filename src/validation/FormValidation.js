export function validate (formProps) {
  let errors = {}
  if (!formProps.email) {
    errors.email = 'Please enter email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
    errors.email = 'Invalid email address'
  }

  if (!formProps.password) {
    errors.password = 'Please enter password'
  } else if (formProps.password.length < 6) {
    errors.password = 'Password should be more than 6 characters'
  } else if (formProps.password !== formProps.confirm) {
    errors.confirm = 'Passwords should match'
  }

  if (!formProps.day) {
    errors.day = 'Please enter day'
  } else if (!formProps.month) {
    errors.month = 'Please enter month'
  } else if (!formProps.year) {
    errors.year = 'Please enter year'
  } else if (!isFinite(formProps.day)) {
    errors.day = 'Day should be a number'
  } else if (!isFinite(formProps.month)) {
    errors.month = 'Month should be a number'
  } else if (!isFinite(formProps.day)) {
    errors.year = 'Year should be a number'
  } else if (formProps.day > 31 || formProps.day < 1) {
    errors.day = 'Day is not valid'
  } else if (formProps.month > 12 || formProps.month < 1) {
    errors.month = 'Month is not valid'
  } else if (!checkDate(formProps.year, formProps.month, formProps.day)) {
    errors.day = 'Date is not valid'
  } else if (!checkAge(formProps.year, formProps.month, formProps.day)) {
    errors.day = 'Sorry, but you are not 18'
  }

  if (!formProps.gender) {
    errors.gender = 'Please choose a gender'
  }
  return errors
}

function checkDate (year, month, day) {
  let y = +year
  let m = month - 1
  let d = +day
  let date = new Date(y, m, d)
  let check = (date.getFullYear() === y) && (date.getMonth() === m) && (date.getDate() === d)
  return check
}

function checkAge (year, month, day) {
  let date = getDate(year, month, day)
  let ageDifMs = Date.now() - date.getTime()
  let ageDate = new Date(ageDifMs)
  return (Math.abs(ageDate.getUTCFullYear() - 1970) > 17)
}

function getDate (year, month, day) {
  let y = +year
  let m = month - 1
  let d = +day
  let date = new Date(y, m, d)
  return date
}
