const BASE_URL = "http://localhost:3000/api/v1/auth/";

export const register = (email, password) => {
  return fetch(BASE_URL + "register", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
};

export const getUser = () => {
  return false;
};
