export const USER_EMAIL = 'USER_EMAIL'

export const getEmail = email => ({
  type: USER_EMAIL,
  payload: email,
})