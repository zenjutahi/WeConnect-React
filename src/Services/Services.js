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

const getToken = (e) => {
  const token = localStorage.getItem("accessToken");
  if (token == null) {
    window.localStorage.setItem(
      "register_message",
      "Please login to Register Business"
    );
    window.location.assign("/login");
  } else {
    return token;
  }
}

export const weConnectBusinessRegister = async (formData) => {
  return await fetch(
    "https://weconnect-api-db.herokuapp.com/api/businesses",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        location: formData.location,
        category: formData.category
      })
    }
  );
}
