const successLoginResponse = {
      'message': 'Successfully Loged In',
      'access_token': 'a.user.token'
}

const successRegisterResponse = {
      'message': "Zenjutahi's account succesfully created"
}

const successResetPassword = {
      'message': "Check your email address for new password"
}

const successRegisterBusiness = {
      'message': "New business has been created"
}

export const weConnectLogin = async (email, password) => {
  const data =  await new Promise ((resolve, reject) => {
    resolve(successLoginResponse)
  });
  return data;
}

export const weConnectRegister = async (formData) => {
  const data =  await new Promise ((resolve, reject) => {
    resolve(successRegisterResponse)
  });
  return data;
}

export const weConnectResetPassword = async (formData) => {
  const data =  await new Promise ((resolve, reject) => {
    resolve(successResetPassword)
  });
  return data;
}

export const weConnectBusinessRegister = async (formData) => {
  console.log('here')
  const data =  await new Promise ((resolve, reject) => {
    resolve(successRegisterBusiness)
  });
  return data;
}
