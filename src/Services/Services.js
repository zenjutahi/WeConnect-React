export const weConnectLogin = async (email, password) => {
  const prom = await fetch(
    "https://weconnect-api-db.herokuapp.com/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }
  );
  return prom.json();
}

export const weConnectRegister = async (formData) => {
  const prom = await fetch(
    "https://weconnect-api-db.herokuapp.com/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
    }
  );
  return prom.json();
}

export const weConnectResetPassword = async (formData) => {
  const prom = await fetch(
    "https://weconnect-api-db.herokuapp.com/api/auth/resetpassword",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email
      })
    }
  );
  return prom.json();
}
